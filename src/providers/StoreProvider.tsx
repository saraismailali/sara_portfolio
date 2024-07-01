import {
  createContext,
  ReactNode,
  useCallback,
  useState,
  useEffect,
} from "react";

export interface StoreContextType {
  setup: () => void;
  teardown: () => void;
  getItem: <T = any>(key: string, defaultValue?: T) => T;
  setItem: <T = any>(key: string, value: T) => void;
  removeItem: (key: string) => void;
  removeItems: (keyPrefix: string) => void;
  reset: () => void;
  subscribe: (key: string, callback: (value: any) => void) => () => void;
}

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined
);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [_, setStore] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const handleStorageChange = () => {
      setStore({ ...localStorage });
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const setup = useCallback(() => {
    setStore({ ...localStorage });
  }, []);

  const teardown = useCallback(() => {
    setStore({});
  }, []);

  const getItem = useCallback(<T,>(key: string, defaultValue?: T): T => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  }, []);

  const setItem = useCallback(<T,>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
    setStore((prevStore) => ({ ...prevStore, [key]: value }));
  }, []);

  const removeItem = useCallback((key: string): void => {
    localStorage.removeItem(key);
    setStore((prevStore) => {
      const { [key]: _, ...rest } = prevStore;
      return rest;
    });
  }, []);

  const removeItems = useCallback((keyPrefix: string): void => {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(keyPrefix))
      .forEach((key) => {
        localStorage.removeItem(key);
      });
    setStore((prevStore) => {
      const newStore = { ...prevStore };
      Object.keys(newStore)
        .filter((key) => key.startsWith(keyPrefix))
        .forEach((key) => {
          delete newStore[key];
        });
      return newStore;
    });
  }, []);

  const reset = useCallback(() => {
    localStorage.clear();
    setStore({});
  }, []);

  const subscribe = useCallback(
    (key: string, callback: (value: any) => void): (() => void) => {
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === key) {
          callback(JSON.parse(event.newValue || "null"));
        }
      };
      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    },
    []
  );

  return (
    <StoreContext.Provider
      value={{
        setup,
        teardown,
        getItem,
        setItem,
        removeItem,
        removeItems,
        reset,
        subscribe,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
