import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { FiLinkedin } from "react-icons/fi";
import TitleSection from "../components/TitleSection";
import CardContact from "../components/CardContact";
import Button from "../components/Button";

const contactInfo = [
  {
    icon: <HiOutlineEnvelope className="w-6 h-6" />,
    title: "Email",
    info: "sulivan7@gmail.com",
    href: "mailto:sulivan7@gmail.com",
  },
  {
    icon: <FiLinkedin className="w-6 h-6" />,
    title: "LinkedIn",
    info: "@sulivan7",
    href: "https://www.linkedin.com/in/sulivan7",
  },
  {
    icon: <HiOutlineMapPin className="w-6 h-6" />,
    title: "Localização",
    info: "São Paulo, SP",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <TitleSection
          title="Vamos conversar?"
          subtitle="Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de colaboração."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item) => (
            <CardContact
              key={item.title}
              icon={item.icon}
              title={item.title}
              info={item.info}
              href={item.href}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            text="Enviar Mensagem"
            variant="primary"
            href="mailto:sulivan7@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
