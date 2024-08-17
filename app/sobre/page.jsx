"use client";

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  BiLogoTypescript,
  BiLogoRedux,
  BiLogoMongodb,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiPrisma, SiPostgresql } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiExpress, SiNextdotjs } from "react-icons/si";

const about = {
  title: "Sobre Mim",
  description:
    "Apaixonado por aprender e ajudar os outros, procuro sempre evoluir em cada ambiente corporativo, buscando formas de desempenhar minha função em excelência. Além disso, confio na certeza de que colaborar para o crescimento da empresa na qual atuo impulsiona ainda mais o meu próprio desenvolvimento profissional.",
  info: [
    { fieldName: "Nome:", fieldValue: "João Carlos Gomes" },
    { fieldName: "Telefone:", fieldValue: "(71) 98519-7823" },
    { fieldName: "Experiência:", fieldValue: "1 ano" },
    { fieldName: "Email:", fieldValue: "jowgomes3@gmail.com" },
    { fieldName: "Freelance:", fieldValue: "Disponível" },
    { fieldName: "Idiomas:", fieldValue: "Inglês" },
  ],
};

const experience = {
  title: "Experiência",
  description:
    "Sou desenvolvedor fullstack com experiência como freelancer desde 2023 e fui estagiário em empresas como Moura Dubeux, Ventana, e CSC, desenvolvendo habilidades em projetos diversificados e colaborando em equipes multidisciplinares.",
  items: [
    {
      company: "-",
      position: "Desenvolvedor Freelancer",
      duration: "2023 - Presente",
    },
    {
      company: "Moura Dubeux/SA",
      position: "Estagiário",
      duration: "2022 - 2024",
    },
    {
      company: "Ventana",
      position: "Estagiário",
      duration: "2021 - 2021",
    },
    {
      company: "CSC",
      position: "Estagiário",
      duration: "2019 - 2021",
    },
  ],
};

const education = {
  title: "Educação",
  description:
    "Estou cursando Análise e Desenv. de Sistemas pelo SENAI, e Computação na UFBA, além de ter realizado cursos em UI/UX Design e Desenvolvimento Web Full Stack que me possibilitaram atuar como freelancer.",
  items: [
    {
      institution: "SENAI",
      degree: "Análise e Desenv. de Sistemas",
      duration: "2024 - Presente",
    },
    {
      institution: "UFBA",
      degree: "Computação",
      duration: "2024 - Presente",
    },
    {
      institution: "Curso Online",
      degree: "UI/UX Design",
      duration: "2023",
    },
    {
      institution: "Curso Online",
      degree: "Desenvolvimento Web Full Stack",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "Habilidades",
  description:
    "Como desenvolvedor fullstack, adquiri habilidades essenciais através de projetos reais utilizando tecnologias requisitadas pelo mercado, como React, TypeScript, Next, entre outras. Minha experiência abrange design responsivo, otimização de desempenho e colaboração eficaz.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <DiCss3 />,
      name: "CSS 3",
    },
    {
      icon: <BiLogoTailwindCss />,
      name: "Tailwind",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <BiLogoTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <BiLogoRedux />,
      name: "Redux",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <BiLogoMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaGithub />,
      name: "Git/GitHub",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const SobreMim = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre Mim</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default SobreMim;
