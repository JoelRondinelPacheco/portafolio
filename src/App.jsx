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
import Footer from './components/footer/Footer'

function App() {

  const newsApp = {
    list: ["User registration", "Email delivery", "Creation and editing of news", "Administrator panel", "Role change", "Comments, likes, and reports"],
    title: "NewsApp",
    subtitle: "Content Management System",
    images: [News1, News2, News3],
    tools: ["Java", "Spring", "Spring Security", "Thymeleaf", "Jpa", "MySQL", "JavaScript", "HTML", "CSS","Bootstrap"],
    link: "https://github.com/JoelRondinelPacheco/newsapp",
    live: ""
  }

  const eCommerce = {
    list: ["User registration", "Authentication and authorization with JSON Web Tokens", "Addition and editing of products with stock adjustment", "User shopping cart", "Category management", "Documentation"],
    title: "E-Commerce REST API",
    subtitle: "",
    images: [Api1, Api2, Api3],
    tools: ["Java", "Spring", "Spring Security", "Thymeleaf", "Jpa", "MySQL", "JavaScript", "HTML", "CSS","Bootstrap"],
    link: "https://github.com/JoelRondinelPacheco/SpringAPITodoCode",
    live: ""
  }

  const fractaly = {
    list:["Color palette", "Parameter modification", "Navigation (zoom and pan)", "Download of generated images"],
    title: "Fractaly",
    subtitle: "Fractal generator",
    images: [F1, F2, F3],
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/JoelRondinelPacheco/Fractals",
    live: "https://joelrondinelpacheco.github.io/Fractals/"
  }

  const aTuServicio = {
    list: ["User registration", "Administrator panel", "Offering and hiring services", "Service search", "Rating and comments"],
    title: "Atuservicio",
    subtitle: "A platform for searching/offering services",
    images: [Serv1, Serv2, Serv3],
    tools: ["Java", "Spring", "Spring Security", "Thymeleaf", "Jpa", "MySQL", "JavaScript", "HTML", "CSS","Bootstrap"],
    link: "https://github.com/JoelRondinelPacheco/atuservicio",
    live: ""
  }

  return (
    <section className='bg-zinc-950 container mx-auto'>
  <Hero></Hero>
  <Skills></Skills> 
  <NavBar />
  <Text text="projects"/>
  <Portfolio params={newsApp}/>
  <Portfolio params={fractaly}/>
  <Portfolio params={eCommerce}/>
  <Portfolio params={aTuServicio}/>
  <Footer />
  </section>
  )
}

export default App
