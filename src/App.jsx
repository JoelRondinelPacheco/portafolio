import { useEffect, useState } from 'react'
import Hero from './components/hero/Hero'
import Links from './components/links/Links'
import NavBar from './components/navbar/NavBar'
import Skills from './components/skills/Skills'
import Text from './components/text/Text'
import Portfolio from './components/portfolio/Portfolio'
import News1 from './assets/img/news/news1.png'
import News2 from './assets/img/news/news2.png'
import News3 from './assets/img/news/news3.png'
import Api1 from './assets/img/api/api1.png'
import Api2 from './assets/img/api/api2.png'
import Api3 from './assets/img/api/api3.png'
import F1 from './assets/img/fractaly/f1.png'
import F2 from './assets/img/fractaly/f2.png'
import F3 from './assets/img/fractaly/f3.png'
import Serv1 from './assets/img/atuservicio/serv1.png'
import Serv2 from './assets/img/atuservicio/serv2.png'
import Serv3 from './assets/img/atuservicio/serv3.png'
import Tt01 from './assets/img/todoturismo/tt01.png'
import Tt02 from './assets/img/todoturismo/tt02.png'
import Tt03 from './assets/img/todoturismo/tt03.png'
import Footer from './components/footer/Footer'
import AboutMe from './components/about/AboutMe'

function App() {

  const TodoTurismo = {
    list: ["Authentication", "Email delivery", "User panels by role", "Dark/Light mode"],
    title: "TodoTurismo",
    subtitle: "System management for a tourism agency",
    images: [Tt01, Tt02, Tt03],
    tools: ["Java", "Spring", "Jpa", "MySQL", "JavaScript", "React", "HTML", "CSS","Tailwind"],
    repository: "",
    backend: "https://github.com/JoelRondinelPacheco/hc-v2-backend",
    frontend: "https://github.com/JoelRondinelPacheco/hc-v2-front",
    live: ""
  }

  const newsApp = {
    list: ["User registration", "Email delivery", "Creation and editing of news", "Administrator panel", "Role change", "Comments, likes, and reports"],
    title: "NewsApp",
    subtitle: "Content Management System",
    images: [News1, News2, News3],
    tools: ["Java", "Spring", "Spring Security", "Thymeleaf", "Jpa", "MySQL", "JavaScript", "HTML", "CSS","Bootstrap"],
    repository: "https://github.com/JoelRondinelPacheco/newsapp",
    backend: "",
    frontend: "",
    live: ""
  }

  const eCommerce = {
    list: ["User registration", "Authentication and authorization with JSON Web Tokens", "Addition and editing of products with stock adjustment", "User shopping cart", "Category management", "Documentation"],
    title: "E-Commerce REST API",
    subtitle: "",
    images: [Api1, Api2, Api3],
    tools: ["Java", "Spring", "Spring Security", "Thymeleaf", "Jpa", "MySQL", "JavaScript", "HTML", "CSS","Bootstrap"],
    repository: "https://github.com/JoelRondinelPacheco/SpringAPITodoCode",
    backend: "",
    frontend: "",
    live: ""
  }

  const fractaly = {
    list:["Color palette", "Parameter modification", "Navigation (zoom and pan)", "Download of generated images"],
    title: "Fractaly",
    subtitle: "Fractal generator",
    images: [F1, F2, F3],
    tools: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/JoelRondinelPacheco/Fractals",
    backend: "",
    frontend: "",
    live: "https://joelrondinelpacheco.github.io/Fractals/"
  }

  const aTuServicio = {
    list: ["User registration", "Administrator panel", "Offering and hiring services", "Service search", "Rating and comments"],
    title: "Atuservicio",
    subtitle: "A platform for searching/offering services",
    images: [Serv1, Serv2, Serv3],
    tools: ["Java", "Spring", "Spring Security", "Thymeleaf", "Jpa", "MySQL", "JavaScript", "HTML", "CSS","Bootstrap"],
    repository: "https://github.com/JoelRondinelPacheco/atuservicio",
    backend: "",
    frontend: "",
    live: ""
  }

  return (
    <section className='bg-zinc-950 container mx-auto'>
  <Hero></Hero>
  <AboutMe />
  <Skills></Skills> 
  <h2 className="text-slate-50 text-4xl flex justify-between font-['Yeseva_One'] sm:text-6xl md:text-7xl lg:text-8xl tracking-[100px]">WORK</h2>
  <Text text="projects"/>
  <Portfolio params={TodoTurismo}/>
  <Portfolio params={newsApp}/>
  <Portfolio params={fractaly}/>
  <Portfolio params={eCommerce}/>
  <Portfolio params={aTuServicio}/>
  <Footer />
  </section>
  )
}

export default App
