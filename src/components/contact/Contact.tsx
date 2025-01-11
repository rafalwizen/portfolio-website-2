import Socials from './Socials.tsx';
import ContactForm from './ContactForm.tsx';
import Header from "../Header.tsx";

const Contact = () => {

    return (
        <section id="contact" className="min-h-screen px-4 bg-background-light">
            <div className="max-w-7xl mx-auto py-20">
                <Header title={'contact.title'}/>
                <div className="grid md:grid-cols-2 gap-12">
                    <Socials />
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
};

export default Contact;
