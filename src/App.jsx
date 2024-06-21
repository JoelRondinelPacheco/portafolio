import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Links from "./components/links/Links";
import NavBar from "./components/navbar/NavBar";
import Skills from "./components/skills/Skills";
import Text from "./components/text/Text";
import Portfolio from "./components/portfolio/Portfolio";
import News1 from "./assets/img/news/news1.png";
import News2 from "./assets/img/news/news2.png";
import News3 from "./assets/img/news/news3.png";
import Api1 from "./assets/img/api/api1.png";
import Api2 from "./assets/img/api/api2.png";
import Api3 from "./assets/img/api/api3.png";
import F1 from "./assets/img/fractaly/f1.png";
import F2 from "./assets/img/fractaly/f2.png";
import F3 from "./assets/img/fractaly/f3.png";
import Serv1 from "./assets/img/atuservicio/serv1.png";
import Serv2 from "./assets/img/atuservicio/serv2.png";
import Serv3 from "./assets/img/atuservicio/serv3.png";
import Tt01 from "./assets/img/todoturismo/tt01.png";
import Tt02 from "./assets/img/todoturismo/tt02.png";
import Tt03 from "./assets/img/todoturismo/tt03.png";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/about/AboutMe";
import { SkillsCard } from "./components/skills-cards/SkillsCard";
import { ToastContainer } from "react-toastify";

function App() {
  const TodoTurismo = {
    list: [
      "Authentication",
      "Email delivery",
      "User panels by role",
      "Dark/Light mode",
    ],
    title: "TodoTurismo",
    subtitle: "System management for a tourism agency",
    images: [Tt01, Tt02, Tt03],
    tools: [
      "Java",
      "Spring",
      "Spring Security",
      "Jpa",
      "MySQL",
      "Flyway",
      "Docker",
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "Tailwind",
    ],
    backendRepo: "https://github.com/JoelRondinelPacheco/hc-v2-backend",
    frontendRepo: "https://github.com/JoelRondinelPacheco/hc-v2-front",
    liveFront: "https://joelrondinelpacheco.github.io/hc-v2-front",
    liveBack: "",
  };

  const newsApp = {
    list: [
      "User registration",
      "Email delivery",
      "Creation and editing of news",
      "Administrator panel",
      "Role change",
      "Comments, likes, and reports",
    ],
    title: "NewsApp",
    subtitle: "Content Management System",
    images: [News1, News2, News3],
    tools: [
      "Java",
      "Spring",
      "Spring Security",
      "Thymeleaf",
      "Jpa",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    backendRepo: "https://github.com/JoelRondinelPacheco/newsapp",
    frontendRepo: "",
    liveFront: "",
    liveBack: "",
  };

  const eCommerce = {
    list: [
      "User registration",
      "Security with JSON Web Tokens",
      "Product managment with stock adjustment",
      "User shopping cart",
      "Category management",
      "Documentation",
    ],
    title: "E-Commerce REST API",
    subtitle: "",
    images: [Api1, Api2, Api3],
    tools: [
      "Java",
      "Spring",
      "Spring Security",
      "Jpa",
      "MySQL",
      "Swagger"
    ],
    backendRepo: "https://github.com/JoelRondinelPacheco/SpringAPITodoCode",
    frontendRepo: "",
    liveFront: "",
    liveBack: "",
  };

  const fractaly = {
    list: [
      "Color palette",
      "Parameter modification",
      "Navigation (zoom and pan)",
      "Download of generated images",
    ],
    title: "Fractaly",
    subtitle: "Fractal generator",
    images: [F1, F2, F3],
    tools: ["HTML", "CSS", "JavaScript"],
    backendRepo: "",
    frontendRepo: "https://github.com/JoelRondinelPacheco/Fractals",
    liveFront: "https://joelrondinelpacheco.github.io/Fractals/",
    liveBack: "",
  };

  const aTuServicio = {
    list: [
      "User registration",
      "Administrator panel",
      "Offering and hiring services",
      "Service search",
      "Rating and comments",
    ],
    title: "Atuservicio",
    subtitle: "A platform for searching/offering services",
    images: [Serv1, Serv2, Serv3],
    tools: [
      "Java",
      "Spring",
      "Spring Security",
      "Thymeleaf",
      "Jpa",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    backendRepo: "https://github.com/JoelRondinelPacheco/atuservicio",
    frontendRepo: "",
    liveFront: "",
    liveBack: "",
  };

  return (
    <section className="bg-zinc-950 container mx-auto max-w-screen-xl vieport-wrapper">
      <Hero />
      <AboutMe />
      
      
      <Text text="projects" />
      <Portfolio params={TodoTurismo} />
      <Portfolio params={newsApp} />
      <Portfolio params={fractaly} />
      <Portfolio params={eCommerce} />
      <Portfolio params={aTuServicio} />
      <Footer />

    </section>
  );
}

export default App;
