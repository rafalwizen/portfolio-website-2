import Navbar from './components/Navbar';
import Technologies from './components/technologies/Technologies.tsx';
import Projects from "./components/projects/Projects.tsx";
import About from "./components/about/About.tsx";
import Home from "./components/home/Home.tsx";
import Contact from "./components/contact/Contact.tsx";
import Cursor from './Cursor';

const App = () => {
    return (
        <div className="bg-background-light min-h-screen">
            <Cursor />
            <Navbar />
            <Home/>
            <About/>
            <Technologies/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default App;