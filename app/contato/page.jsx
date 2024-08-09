"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "(71) 98519-7823",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jowgomes3@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Endereço",
    description: "Salvador-BA, AV. Euclydes da Cunha - Graça",
  },
];

import { motion } from "framer-motion";

const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fe7uqu1", "template_8ob9i6d", form.current, {
        publicKey: "nO7s092Ll-1EPtCcl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-[60px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-cl"
            >
              <h3 className="text-4xl text-accent">
                Vamos trabalhar juntos? Contate-me :)
              </h3>
              <p className="text-white/60">
                Estou disponível para colaborar em projetos desafiadores. Entre
                em contato e vamos criar algo incrível juntos!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Nome" name="user_name" />
                <Input type="lastname" placeholder="Sobrenome" />
                <Input type="email" placeholder="E-mail" name="user_email" />
                <Input type="phone" placeholder="Telefone" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Escolha um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Escolha um serviço</SelectLabel>
                    <SelectItem value="est">Contratar</SelectItem>
                    <SelectItem value="cst">Projeto Freelance</SelectItem>
                    <SelectItem value="mst">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px] "
                placeholder="Escreva sua mensagem aqui..."
                name="message"
              />
              <Button size="md" className="max-w-40">
                Enviar
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contato;
