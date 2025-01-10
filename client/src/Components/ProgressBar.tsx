import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import { FaChevronUp } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

const App: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  const updateScrollProgress = () => {
    const scrollTop = document.documentElement.scrollTop; 
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / windowHeight) * 100;
    setScrollPercent(Math.round(scrolled));
    if (scrollTop > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div>
      <div style={{ position: "relative", height: "100%" }} className="cursor-pointer">
        {showArrow && (
          <div
            style={{
              position: "fixed",
              bottom: "90px",
              right: "20px",
              zIndex: 1000,
            }}
          >
            <div className="flex gap-[10px] flex-col mb-4 animate-fade-in items-center ">
              <SocialIcon
                url="https://telegram.com"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
                style={{ width: "30px", height: "30px" }}
              />
              <SocialIcon
                url="https://whatsapp.com"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
                style={{ width: "30px", height: "30px" }}
              />
              <SocialIcon
                url="https://messanger.com"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
                style={{ width: "30px", height: "30px" }}
              />
              <SocialIcon
                url="https://wechat.com"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <Progress
              type="circle"
              percent={scrollPercent}
              size={40}
              strokeColor="#fac55b"
              trailColor="#212529"
              strokeWidth={5}
              format={() => (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <FaChevronUp
                    onClick={scrollToTop} 
                    style={{
                      fontSize: "16px",
                      color: "#fac55b",
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
