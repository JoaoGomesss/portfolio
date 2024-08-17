import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="
          flex
          flex-col
          xl:flex-row
          items-center
          justify-between
          xl:pt-8
          xl:pb-24"
        >
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desenvolvedor Frontend</span>
            <h1 className="h1 mb-6">
              Olá, me chamo
              <br /> <span className="text-accent">João Gomes</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {" "}
              Apaixonado por aprender e ajudar os outros, procuro sempre evoluir
              em cada ambiente, buscando formas de desempenhar minha função em
              excelência.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/Resumé.pdf"
                download
                className="uppercase flex items-center gap-2 border border-accent px-4 py-2 text-lg text-accent rounded-md hover:bg-accent  hover:text-primary transition"
              >
                <span>Baixar CV</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
