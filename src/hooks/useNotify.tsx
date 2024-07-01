import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function useNotify() {
  const options: ToastOptions<unknown> = {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  const notify = (msg) => toast(msg, options);
  return { ToastContainer, notify, toast };
}
