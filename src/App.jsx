import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import ProyectsList from "./components/proyectsList/ProyectsList";
import Contact from "./components/contact/Contact";

const App = () => {
    return (
        <div>
            <Intro />
            <About />
            <ProyectsList />
            <Contact />
        </div>
    )

};

export default App;