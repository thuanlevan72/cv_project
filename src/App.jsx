// import components
import Hero from "./componentFrontEnd/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./componentFrontEnd/Skills";
import Service from "./componentFrontEnd/Services";
import Projects from "./componentFrontEnd/Projects";
import Testimonials from "./componentFrontEnd/Testimonials";
import Hireme from "./componentFrontEnd/Hireme";
import Contact from "./componentFrontEnd/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import FrontEndComponent from "./Frontend/FrontEndComponent";
import { useRoutes } from "react-router-dom";

const App = () => {
  let routes = [
    {
      path: "/",
      element: (
        <FrontEndComponent>
          <Navbar />
          <Hero />
          <Skills />
          <Service />
          <Projects />
          <Testimonials />
          <Hireme />
          <Contact />
          <footer className="p-3 text-center">
            <h6 className="mb-3">THUẬN LÊ</h6>
            <p>vì cuộc sống hướng tới tương lai (2024)</p>
          </footer>
        </FrontEndComponent>
      ),
    },
  ];
  let element = useRoutes(routes);
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return <>{element}</>;
};

export default App;
