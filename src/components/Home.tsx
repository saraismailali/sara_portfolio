import { useEffect, useMemo, useRef, useState } from "react";
import Atropos from "atropos/react";
import "atropos/css";
import "./home.css";

/* ------------------------------------------------------------------ */
/* Content: edit these lists to update the site                        */
/* ------------------------------------------------------------------ */

const GITHUB = "https://github.com/saraismailali";
const LINKEDIN = "https://www.linkedin.com/in/sarrraaali/";
const EMAIL = "saraismail4255@gmail.com";
const PHONE = "+966 56 287 3351";
const CV_URL = "/Sara_Ismail_Ali_CV.pdf";

type Tool = "Power BI" | "SQL" | "Python" | "Excel";
const TOOLS: Tool[] = ["Power BI", "SQL", "Python", "Excel"];

const TOOL_NOTES: Record<Tool, string> = {
  "Power BI": "Dashboards, DAX, data models",
  SQL: "SQL Server, T-SQL, procedures",
  Python: "Machine learning, NLP, scraping",
  Excel: "Power Query, Power Pivot",
};

const ROLES = [
  "Business Intelligence Analyst",
  "Power BI Developer",
  "Data Analyst",
  "SQL & DAX enthusiast",
];

interface Project {
  name: string;
  category: string;
  groups: Tool[];
  metric: string;
  metricLabel: string;
  desc: string;
  tools: string[];
  repo?: string;
  video?: string;
  poster?: string;
  demos?: { label: string; url: string }[];
}

/* Video that starts by itself (muted, looping) as soon as it is on screen */
function CardVideo({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const play = () => { v.play().catch(() => {}); };
    if (!("IntersectionObserver" in window)) { play(); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) play(); else v.pause(); },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  if (failed) return poster ? <img className="card-video" src={poster} alt={label} /> : null;
  return (
    <video
      ref={ref}
      className="card-video"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="auto"
      aria-label={label}
      onError={() => setFailed(true)}
    />
  );
}

const PROJECTS: Project[] = [
  {
    name: "Egyptian Sign Language Recognition",
    category: "DEEP LEARNING · VIDEO DEMO",
    groups: ["Python"],
    metric: "90.5%",
    metricLabel: "test accuracy",
    desc: "Real-time translation of sign language into Arabic text: a CNN for 32 letters and an LSTM for 11 railway-station words (up to 92.7%), with a live webcam app.",
    tools: ["TensorFlow", "LSTM", "MediaPipe"],
    repo: "Egyptian-Sign-Language-Recognition-Using-Machine-Learning",
    video: "https://dms.licdn.com/playlist/vid/v2/D4D05AQEa9IaH6Eh-jQ/mp4-720p-30fp-crf28/mp4-720p-30fp-crf28/0/1687558904898?e=2147483647&v=beta&t=J3NpDekcULcrJszEJZeNvHpfGMyFAFkNx8tC-AfZwAg",
    poster: "https://media.licdn.com/dms/image/v2/D4D05AQEa9IaH6Eh-jQ/videocover-high/videocover-high/0/1687558901125?e=2147483647&v=beta&t=E-YBL-L46O-V5-U5m9zCIYOhKWeXencPchFoDc0729Q",
    demos: [{ label: "Watch on LinkedIn", url: "https://www.linkedin.com/feed/update/urn:li:activity:7078135053704175616/" }],
  },  {
    name: "Sales & Profitability Analysis",
    category: "POWER BI · VIDEO DEMO",
    groups: ["Power BI"],
    metric: "6",
    metricLabel: "report pages",
    desc: "Cleaned an uncleaned 9-table dataset in Power Query and built a 6-page report with 50+ DAX measures covering trends, discounts, profitability, customer segmentation and city performance.",
    tools: ["Power Query", "DAX", "RANKX", "Segmentation"],
    video: "/videos/sales-analysis-demo.mp4",
    poster: "/videos/sales-analysis-demo.jpg",
  },  {
    name: "AdventureWorks BI Report",
    category: "POWER BI · VIDEO DEMO",
    groups: ["Power BI"],
    metric: "35+",
    metricLabel: "DAX measures",
    desc: "5-page report on a star-schema model with YTD and rolling totals, KPIs against targets, a what-if price parameter, bookmarks and custom tooltips.",
    tools: ["Time intelligence", "What-if", "Bookmarks"],
    repo: "-Adventure-Works-Power-BI-Project",
    video: "https://dms.licdn.com/playlist/vid/v2/D4D05AQF_TeSjkDFRwA/mp4-720p-30fp-crf28/mp4-720p-30fp-crf28/0/1697915800593?e=2147483647&v=beta&t=JfASpVewUWLte52kcvz43yiqL-FWeS3bWjTzNIMG3WM",
    poster: "https://media.licdn.com/dms/image/v2/D4D05AQF_TeSjkDFRwA/videocover-high/videocover-high/0/1697915796802?e=2147483647&v=beta&t=VjCwqwSgzsaK6vD8PpaDkwyQ8NjEi__ENcva4zOC1VA",
    demos: [{ label: "Watch on LinkedIn", url: "https://www.linkedin.com/feed/update/urn:li:activity:7121575050301878272/" }],
  },  {
    name: "Sales & Profit Performance Dashboard",
    category: "POWER BI",
    groups: ["Power BI"],
    metric: "15K+",
    metricLabel: "transactions",
    desc: "4 report pages built from Excel, CSV, PDF and four yearly sales files. Tracks revenue vs targets and YoY growth, and shows how 2023 discounts pushed sales below cost.",
    tools: ["Power Query", "DAX", "Star schema"],
    repo: "Power-BI-SALES-PROFIT-PERFORMANCE-DASHBOARD",
  },

  {
    name: "Hotel Revenue Analysis",
    category: "SQL SERVER + POWER BI",
    groups: ["SQL", "Power BI"],
    metric: "3 yrs",
    metricLabel: "of bookings",
    desc: "Loaded booking data into SQL Server, combined it with T-SQL and built a Power BI report on revenue growth, hotel type, parking demand and seasonality.",
    tools: ["SSMS", "T-SQL", "Power BI"],
    repo: "Hotel-data-analysis-SQL-power-bi-",
  },

  {
    name: "Employee Database Analysis",
    category: "SQL",
    groups: ["SQL"],
    metric: "3",
    metricLabel: "stored procedures",
    desc: "Multi-table employee database analyzed with stored procedures, user-defined functions, CTEs, window functions and joins.",
    tools: ["MySQL", "CTEs", "Window functions"],
    repo: "SQL-employee-data-analysis",
  },
  {
    name: "Excel Sales, Profit & Quantity Dashboards",
    category: "EXCEL",
    groups: ["Excel"],
    metric: "30+",
    metricLabel: "PivotTables",
    desc: "Interactive dashboards built entirely in Excel with Power Query (including PDF extraction), the Data Model, PivotCharts, slicers and a timeline.",
    tools: ["Power Query", "Power Pivot", "Slicers"],
    repo: "Excel-Sales-Profit-Quantity-Dashboards",
  },

  {
    name: "Twitter Airline Sentiment",
    category: "POWER BI + SQL SERVER",
    groups: ["Power BI", "SQL"],
    metric: "Live",
    metricLabel: "DirectQuery refresh",
    desc: "Cleaned and modeled the Twitter airline sentiment dataset and built a Power BI report connected to SQL Server with DirectQuery.",
    tools: ["Power BI", "SQL Server", "DirectQuery"],
    repo: "Powerbi-project",
  },
  {
    name: "Walmart Sales Analysis",
    category: "SQL",
    groups: ["SQL"],
    metric: "10",
    metricLabel: "business questions",
    desc: "Data cleaning, feature engineering (time of day, day and month names) and exploratory analysis of sales by branch, product line and customer.",
    tools: ["SQL", "Feature engineering", "EDA"],
    repo: "Walmart-Sales-Analysis-using-sql",
  },
  {
    name: "Employee Data Dashboard",
    category: "SQL + TABLEAU",
    groups: ["SQL"],
    metric: "4",
    metricLabel: "dashboard views",
    desc: "SQL queries and a stored procedure feeding Tableau views that compare male and female hiring, managers and salaries by department.",
    tools: ["SQL", "Tableau"],
    repo: "Employee-Data-Analysis-using-SQL-and-Tableau",
  },
  {
    name: "Web Scraping: Largest US Companies",
    category: "PYTHON",
    groups: ["Python"],
    metric: "100",
    metricLabel: "companies scraped",
    desc: "Scraped a table of the largest US companies from a live website and turned it into a clean dataset.",
    tools: ["Python", "BeautifulSoup", "pandas"],
    repo: "Scraping-Data-from-a-Real-Website-Web-Scraping-in-Python",
  },
  {
    name: "Restaurant Review Sentiment",
    category: "NLP · MACHINE LEARNING",
    groups: ["Python"],
    metric: "74%",
    metricLabel: "accuracy",
    desc: "Text cleaning, bag-of-words and a classifier predicting whether restaurant reviews are positive or negative.",
    tools: ["Python", "NLTK", "scikit-learn"],
    repo: "Nlp-project-using-machine-learning-Sentiment-Analysis",
  },
  {
    name: "COVID-19 Detection from X-rays",
    category: "DEEP LEARNING",
    groups: ["Python"],
    metric: "CNN",
    metricLabel: "chest X-rays",
    desc: "Convolutional neural network that classifies chest X-ray images to support early COVID-19 detection.",
    tools: ["Python", "TensorFlow", "CNN"],
    repo: "Data-Tools-Project",
  },
];

const KPIS = [
  { label: "Reporting efficiency", target: 80, note: "Power BI dashboards at SDC App" },
  { label: "Dashboard adoption", target: 40, note: "after training users" },
  { label: "Quarterly revenue", target: 7, note: "from performance insights" },
  { label: "Sales conversion", target: 5, note: "and churn down 3%" },
];

const JOBS = [
  {
    title: "Data Analyst",
    company: "SDC App",
    dates: "DEC 2024 – PRESENT",
    place: "Jeddah, Saudi Arabia",
    stats: [
      { v: "+80%", l: "reporting efficiency" },
      { v: "+40%", l: "adoption" },
      { v: "+7%", l: "quarterly revenue" },
    ],
    points: [
      "Built Power BI dashboards with KPIs aligned to business goals for every department.",
      "Delivered performance analyses that increased sales conversion by 5% and reduced churn by 3%.",
      "Led monthly and quarterly reviews with all department leads and tracked follow-up actions to completion.",
      "Applied Row-Level Security and data quality checks to keep sensitive data accurate and protected.",
    ],
  },
  {
    title: "Junior Data Analyst",
    company: "BM Enterprise Management",
    dates: "AUG 2023 – AUG 2024",
    place: "Alexandria, Egypt",
    stats: [
      { v: "−30%", l: "paper costs" },
      { v: "100+", l: "companies analyzed" },
    ],
    points: [
      "Led the move to a paperless workflow by implementing an electronic business system.",
      "Analyzed KPIs across 100+ insurance companies to identify the strongest partnership candidates.",
    ],
  },
  {
    title: "Cyber Security Intern",
    company: "Security Meter",
    dates: "AUG 2022 – OCT 2022",
    place: "Remote",
    stats: [{ v: "2", l: "platforms: VMware & Linux" }],
    points: [
      "Hands-on training in VMware virtualization, building isolated lab environments.",
      "Practical Linux experience: command line, permissions, users and basic system security.",
    ],
  },
];

const SKILLS = [
  { name: "Microsoft BI stack", gold: true, items: ["Power BI", "DAX", "Power Query", "SSRS", "SSIS", "Power Automate", "Row-Level Security"] },
  { name: "Databases & SQL", gold: false, items: ["SQL Server", "T-SQL", "MySQL", "PostgreSQL", "CTEs", "Window functions", "Data warehousing"] },
  { name: "Excel & analysis", gold: false, items: ["Power Pivot", "PivotTables", "KPI reporting", "Root-cause analysis", "Funnel analysis", "Tableau"] },
  { name: "Python & machine learning", gold: false, items: ["pandas", "scikit-learn", "TensorFlow", "R", "Web scraping"] },
];

interface Cert { name: string; issuer: string; date: string; link?: string; img: string; thumb: string; badge?: boolean }

const CERTS: Cert[] = [
  { name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft", date: "2025", link: "https://learn.microsoft.com/en-gb/users/saraali-1065/credentials/abde942c36385002", img: "/certificates/pl-300.svg", thumb: "/certificates/pl-300.svg", badge: true },
  { name: "Thinking Like an Analyst", issuer: "Maven Analytics", date: "Oct 2024", link: "https://certificates.mavenanalytics.io/bdf3a464-f42f-4bcd-895a-388e60e05ca1#acc.704b8Jsk", img: "/certificates/thinking-like-an-analyst.webp", thumb: "/certificates/thinking-like-an-analyst-thumb.webp" },
  { name: "Business Intelligence Analyst Course", issuer: "365 Careers · Udemy", date: "Jul 2024", link: "https://www.udemy.com/certificate/UC-a10bd0ea-2655-4db0-91ab-740ef59f599c/", img: "/certificates/bi-analyst-365.webp", thumb: "/certificates/bi-analyst-365-thumb.webp" },
  { name: "PostgreSQL Essential Training", issuer: "LinkedIn Learning", date: "Nov 2023", link: "https://www.linkedin.com/learning/certificates/132b81c0693bfc071f8dc5bd99c9f6a666178be432e41c7cb7b1e7151e90a615", img: "/certificates/postgresql.webp", thumb: "/certificates/postgresql-thumb.webp" },
  { name: "Understanding Data Engineering", issuer: "DataCamp", date: "Oct 2023", link: "https://www.datacamp.com/statement-of-accomplishment/course/b32ee40a4fba66e55070bbfa0fd11b316fc0bf4b", img: "/certificates/data-engineering.webp", thumb: "/certificates/data-engineering-thumb.webp" },
  { name: "Microsoft Power BI Desktop for Business Intelligence", issuer: "Maven Analytics · Udemy", date: "Oct 2023", link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a4affd34-e899-4870-89a6-157dea7cb8b2.pdf", img: "/certificates/power-bi-desktop.webp", thumb: "/certificates/power-bi-desktop-thumb.webp" },
  { name: "Intermediate Importing Data in Python", issuer: "DataCamp", date: "Sep 2023", link: "https://www.datacamp.com/statement-of-accomplishment/course/8736ce0997163ab48916fff85688791ba31ad7f9", img: "/certificates/importing-data-python.webp", thumb: "/certificates/importing-data-python-thumb.webp" },
  { name: "Business Analytics with Excel", issuer: "Johns Hopkins University · Coursera", date: "Sep 2023", link: "https://www.coursera.org/account/accomplishments/verify/89BYS4C35HR5", img: "/certificates/jhu-excel.webp", thumb: "/certificates/jhu-excel-thumb.webp" },
  { name: "Foundations of Data Science", issuer: "Google · Coursera", date: "Sep 2023", link: "https://www.coursera.org/account/accomplishments/verify/Z4FHBEZ4LMSW", img: "/certificates/google-data-science.webp", thumb: "/certificates/google-data-science-thumb.webp" },
  { name: "Introduction to Databases", issuer: "Meta · Coursera", date: "Sep 2023", link: "https://www.coursera.org/account/accomplishments/verify/EHCH5UQ5CW8B", img: "/certificates/meta-databases.webp", thumb: "/certificates/meta-databases-thumb.webp" },
  { name: "Databases: Relational Databases and SQL", issuer: "Stanford Online · edX", date: "Jul 2023", link: "https://courses.edx.org/certificates/8eaece324b8c4774934ba4be31caa351", img: "/certificates/edx-databases.webp", thumb: "/certificates/edx-databases-thumb.webp" },
  { name: "Cyber Security Diploma Course", issuer: "Security Meter", date: "Oct 2022", img: "/certificates/cyber-security.webp", thumb: "/certificates/cyber-security-thumb.webp" },
  { name: "Introduction to Programming Using Python", issuer: "New Horizons", date: "Dec 2019", link: "https://drive.google.com/file/d/1r5JebFJ1n9avNRKpwcRdT2AGFyZw5Kqc/view", img: "/certificates/new-horizons-python.webp", thumb: "/certificates/new-horizons-python-thumb.webp" },
];

/* ------------------------------------------------------------------ */
/* Small hooks                                                         */
/* ------------------------------------------------------------------ */

function readStoredTheme(): "light" | "dark" {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useTypewriter(words: string[]) {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : "");
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let word = 0, char = 0, deleting = false, pause = 0;
    const id = window.setInterval(() => {
      if (pause > 0) { pause -= 1; return; }
      const w = words[word];
      if (!deleting) {
        char += 1;
        if (char >= w.length) { deleting = true; pause = 22; }
      } else {
        char -= 1;
        if (char <= 0) { deleting = false; word = (word + 1) % words.length; pause = 4; }
      }
      setText(w.slice(0, char));
    }, 70);
    return () => window.clearInterval(id);
  }, [words]);
  return text;
}

function useCountUp(duration = 1400) {
  const [progress, setProgress] = useState(prefersReducedMotion() ? 1 : 0);
  const raf = useRef(0);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [duration]);
  return progress;
}

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const External = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
);
const Download = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
);
const Sun = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
const Moon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
);
const Play = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
);
const Send = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export const Home: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(readStoredTheme);
  const [filter, setFilter] = useState<"All" | Tool>("All");
  const [certOpen, setCertOpen] = useState<number | null>(null);
  useEffect(() => {
    if (certOpen === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCertOpen(null);
      if (e.key === "ArrowRight") setCertOpen((certOpen + 1) % CERTS.length);
      if (e.key === "ArrowLeft") setCertOpen((certOpen + CERTS.length - 1) % CERTS.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [certOpen]);
  const [job, setJob] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const typed = useTypewriter(ROLES);
  const progress = useCountUp();

  useEffect(() => {
    try { localStorage.setItem("theme", theme); } catch { /* ignore */ }
    document.body.style.background = theme === "dark" ? "#0D0B1E" : "#F6F5FB";
  }, [theme]);

  const shown = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.groups.includes(filter))),
    [filter]
  );

  const pickTool = (t: Tool) => {
    setFilter(t);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const subject = "Hello Sara" + (name ? " – from " + name : "");
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const current = JOBS[job];
  const dark = theme === "dark";

  return (
    <div className="site" data-theme={theme}>
      <a className="skip" href="#projects">Skip to projects</a>

      <header className="nav">
        <nav aria-label="Main" className="nav-inner">
          <a href="#top" className="brand">
            <span className="brand-mark">SI</span>
            <span className="brand-name">Sara Ismail Ali</span>
          </a>
          <div className="nav-links">
            <a className="navlink" href="#projects">Projects</a>
            <a className="navlink" href="#experience">Experience</a>
            <a className="navlink" href="#skills">Skills</a>
            <a className="navlink" href="#certifications">Certifications</a>
            <button
              type="button"
              className="icon-btn"
              onClick={() => setTheme(dark ? "light" : "dark")}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <Sun /> : <Moon />}
            </button>
            <a className="btn btn-primary btn-sm" href="#contact">Contact me</a>
          </div>
        </nav>
      </header>

      <main id="top" className="container">
        {/* HERO */}
        <section className="hero">
          <div className="hero-copy fadein">
            <span className="badge-gold"><span className="pulse dot" aria-hidden="true" />OPEN TO BI ROLES · JEDDAH</span>
            <p className="typed" aria-label={ROLES.join(", ")}>
              <span aria-hidden="true">&gt; {typed}<span className="caret" /></span>
            </p>
            <h1>I turn business data into dashboards people actually use.</h1>
            <p className="lead">
              Microsoft Certified Power BI Data Analyst (PL-300) with 3 years of experience in Power BI, SQL Server,
              DAX and Excel, building KPI reporting that leadership relies on.
            </p>
            <div className="row-gap">
              <a className="btn btn-primary" href="#projects">View my dashboards <Arrow /></a>
              <a className="btn btn-ghost" href={CV_URL} target="_blank" rel="noopener noreferrer"><Download /> Download CV</a>
            </div>
          </div>

          <Atropos className="tilt hero-tilt fadein" rotateXMax={8} rotateYMax={8} rotateTouch="scroll-y" shadow={false} highlight>
          <div className="report">
            <div className="report-bar">
              <span className="mono muted small">career_overview.pbix</span>
              <span className="mono muted tiny live"><span className="pulse dot green" aria-hidden="true" />LIVE</span>
            </div>
            <div className="report-grid">
              {KPIS.map((k) => (
                <div className="kpi" key={k.label}>
                  <div className="kpi-label">{k.label}</div>
                  <div className="kpi-value">+{Math.round(k.target * progress)}%</div>
                  <div className="kpi-note">{k.note}</div>
                </div>
              ))}
              <div className="tool-box">
                <div className="tool-head"><strong>Explore my work by tool</strong><span className="mono muted tiny">click to filter</span></div>
                <div className="tool-grid">
                  {TOOLS.map((t) => (
                    <button key={t} type="button" className="tool-btn" onClick={() => pickTool(t)} aria-label={`Show my ${t} projects`}>
                      <span className={t === "Power BI" ? "swatch gold" : "swatch"} aria-hidden="true" />
                      <span className="tool-text"><span className="tool-name">{t}</span><span className="tool-note">{TOOL_NOTES[t]}</span></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </Atropos>
        </section>

        {/* HIGHLIGHTS */}
        <section aria-label="Highlights" className="highlights">
          <div><strong>3 yrs</strong><span>BI &amp; data analysis experience</span></div>
          <div><strong>PL-300</strong><span>Microsoft Certified Power BI Data Analyst</span></div>
          <div><strong>100+</strong><span>insurance companies benchmarked on KPIs</span></div>
          <div><strong>AR · EN</strong><span>Native Arabic, professional English</span></div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-head split">
            <div>
              <span className="eyebrow">PROJECTS</span>
              <h2>Dashboards, SQL and machine learning</h2>
            </div>
            <a className="btn btn-ghost btn-sm" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noopener noreferrer">All repositories on GitHub <External /></a>
          </div>
          <div role="group" aria-label="Filter projects by tool" className="filters">
            {(["All", ...TOOLS] as const).map((t) => (
              <button key={t} type="button" className={filter === t ? "chip active" : "chip"} aria-pressed={filter === t} onClick={() => setFilter(t)}>
                {t}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {shown.map((p) => (
              <Atropos className="tilt fadein" key={p.name + filter} rotateTouch="scroll-y" shadowScale={0.9} highlight={!p.video} rotateXMax={p.video ? 6 : 15} rotateYMax={p.video ? 6 : 15}>
              <article className="card">
                {p.video && <CardVideo src={p.video} poster={p.poster} label={`${p.name} – video walkthrough`} />}
                <div className="card-top">
                  <span className="tag" data-atropos-offset="2">{p.category}</span>
                  <div className="metric" data-atropos-offset="5"><div className="metric-v">{p.metric}</div><div className="metric-l">{p.metricLabel}</div></div>
                </div>
                <h3>{p.name}</h3>
                <p className="muted">{p.desc}</p>
                <div className="pills">{p.tools.map((t) => <span className="pill" key={t}>{t}</span>)}</div>
                <div className="card-links">
                  {p.repo && (
                    <a className="card-link" href={`${GITHUB}/${p.repo}`} target="_blank" rel="noopener noreferrer">View on GitHub <External /></a>
                  )}
                  {p.demos?.map((d) => (
                    <a key={d.url} className="card-link demo" href={d.url} target="_blank" rel="noopener noreferrer"><Play /> {d.label}</a>
                  ))}
                </div>
              </article>
              </Atropos>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-head">
            <span className="eyebrow">EXPERIENCE</span>
            <h2>Where I've made an impact</h2>
          </div>
          <div className="exp">
            <div role="tablist" aria-label="Jobs" className="exp-tabs">
              {JOBS.map((j, i) => (
                <button
                  key={j.company}
                  type="button"
                  role="tab"
                  id={`job-tab-${i}`}
                  aria-selected={job === i}
                  aria-controls="job-panel"
                  className={job === i ? "exp-tab active" : "exp-tab"}
                  onClick={() => setJob(i)}
                >
                  <span className="mono muted tiny">{j.dates}</span>
                  <span className="exp-title">{j.title}</span>
                  <span className="muted small">{j.company}</span>
                </button>
              ))}
            </div>
            <div role="tabpanel" id="job-panel" aria-labelledby={`job-tab-${job}`} className="exp-panel fadein" key={job}>
              <div className="split baseline">
                <h3>{current.title} · {current.company}</h3>
                <span className="mono muted small">{current.place}</span>
              </div>
              <div className="row-gap">
                {current.stats.map((s) => (
                  <div className="stat" key={s.l}><strong>{s.v}</strong> <span>{s.l}</span></div>
                ))}
              </div>
              <ul>{current.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-head">
            <span className="eyebrow">SKILLS</span>
            <h2>My toolkit</h2>
          </div>
          <div className="skills-grid">
            {SKILLS.map((g) => (
              <Atropos className="tilt" key={g.name} rotateTouch="scroll-y" shadowScale={0.9} highlight>
              <div className="card">
                <div className="skill-head" data-atropos-offset="3"><span className={g.gold ? "swatch sm gold" : "swatch sm"} aria-hidden="true" /><h3 className="h-sm">{g.name}</h3></div>
                <div className="pills">{g.items.map((s) => <span className="pill filled" key={s}>{s}</span>)}</div>
              </div>
              </Atropos>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="section">
          <div className="section-head">
            <span className="eyebrow">CERTIFICATIONS</span>
            <h2>Verified credentials</h2>
            <p className="muted">Click a certificate to view it full size, or open the credential to verify it.</p>
          </div>
          <div className="cert-grid">
            {CERTS.map((c, i) => (
              <Atropos className="tilt fadein" key={c.name} rotateTouch="scroll-y" shadowScale={0.9} highlight rotateXMax={10} rotateYMax={10}>
              <article className={c.badge ? "card cert-card featured" : "card cert-card"}>
                <button type="button" className={c.badge ? "cert-thumb badge" : "cert-thumb"} onClick={() => setCertOpen(i)} aria-label={`View ${c.name} certificate full size`}>
                  <img src={c.thumb} alt={`${c.name} certificate – ${c.issuer}`} loading={i < 4 ? "eager" : "lazy"} decoding="async" />
                </button>
                <div className="cert-body">
                  <h3 className="h-sm">{c.name}</h3>
                  <span className="mono muted small">{c.issuer} · {c.date}</span>
                  {c.link ? (
                    <a className="card-link" href={c.link} target="_blank" rel="noopener noreferrer">View credential <External /></a>
                  ) : (
                    <button type="button" className="card-link as-btn" onClick={() => setCertOpen(i)}>View certificate</button>
                  )}
                </div>
              </article>
              </Atropos>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="section-head">
            <span className="eyebrow">EDUCATION</span>
            <h2>Degree</h2>
          </div>
          <Atropos className="tilt edu-tilt" rotateTouch="scroll-y" shadowScale={0.9} highlight>
          <div className="card edu-card">
            <span className="mono muted tiny">2019 – 2023</span>
            <h3 className="h-sm">Bachelor of Data Science</h3>
            <span className="muted">Computing and Data Science · Alexandria University</span>
          </div>
          </Atropos>
        </section>

        {certOpen !== null && (
          <div className="lightbox" role="dialog" aria-modal="true" aria-label={CERTS[certOpen].name} onClick={() => setCertOpen(null)}>
            <figure onClick={(e) => e.stopPropagation()}>
              <img src={CERTS[certOpen].img} alt={`${CERTS[certOpen].name} certificate`} className={CERTS[certOpen].badge ? "badge" : ""} />
              <figcaption>
                <div>
                  <strong>{CERTS[certOpen].name}</strong>
                  <span className="mono small">{CERTS[certOpen].issuer} · {CERTS[certOpen].date}</span>
                </div>
                {CERTS[certOpen].link && <a className="btn btn-sm" href={CERTS[certOpen].link} target="_blank" rel="noopener noreferrer">Verify <External /></a>}
              </figcaption>
            </figure>
            <button type="button" className="lb-btn lb-prev" aria-label="Previous certificate" onClick={(e) => { e.stopPropagation(); setCertOpen((certOpen + CERTS.length - 1) % CERTS.length); }}>‹</button>
            <button type="button" className="lb-btn lb-next" aria-label="Next certificate" onClick={(e) => { e.stopPropagation(); setCertOpen((certOpen + 1) % CERTS.length); }}>›</button>
            <button type="button" className="lb-btn lb-close" aria-label="Close" onClick={() => setCertOpen(null)}>×</button>
          </div>
        )}

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="contact">
            <div className="contact-copy">
              <span className="eyebrow gold-text">CONTACT</span>
              <h2>Need a dashboard your team will actually use?</h2>
              <p>Open to BI and Power BI roles in Saudi Arabia and to freelance dashboard projects.</p>
              <div className="row-gap">
                <a className="btn btn-outline-light" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="btn btn-outline-light" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="btn btn-outline-light" href="https://wa.me/966562873351" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a className="btn btn-outline-light" href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}>
              <label htmlFor="cf-name">Your name</label>
              <input id="cf-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" />
              <label htmlFor="cf-msg">Message</label>
              <textarea id="cf-msg" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your role or project" />
              <button type="submit" className="btn btn-gold"><Send /> Send message</button>
            </form>
          </div>
          <p className="footer muted">© {new Date().getFullYear()} Sara Ismail Ali · {EMAIL}</p>
        </section>
      </main>
    </div>
  );
};
