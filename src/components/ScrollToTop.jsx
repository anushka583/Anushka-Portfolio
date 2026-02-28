import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 
      bg-gradient-to-r from-purple-600 to-indigo-600 
      p-3 rounded-full shadow-lg 
      transition-all duration-300 
      hover:scale-110
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp className="text-white" size={20} />
    </button>
  );
}

export default ScrollToTop;