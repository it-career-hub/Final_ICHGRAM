import { useState, useEffect } from "react";
import s from "./loginPage.module.css";
import { LoginForm } from "../../molecules/loginForm/LoginForm";

import phoneFrame from "../../assets/loginScreen//phone.png";
import screen1 from "../../assets/loginScreen/screenshot1.png";
import screen2 from "../../assets/loginScreen/screenshot2.png";
import screen3 from "../../assets/loginScreen/screenshot3.png";
import screen4 from "../../assets/loginScreen/screenshot4.png";

export const LoginPage = () => {
  const screenshots = [screen1, screen2, screen3, screen4];
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s.loginPage}>
      <div className={s.phoneContainer}>
        <img src={phoneFrame} alt="phone frame" className={s.phoneFrame} />
        <div className={s.screen}>
          <img
            key={currentScreenshot} // Уникальный ключ для перерендеринга
            src={screenshots[currentScreenshot]}
            alt="App Screenshot"
            className={s.screenImage}
          />
        </div>
      </div>
      <div className={s.loginFormBox}>
        <LoginForm />
      </div>
    </div>
  );
};
