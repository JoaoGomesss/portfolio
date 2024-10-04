"use client";

import { animate, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "project 1",
    description:
      "E-commerce que oferece uma interface intuitiva e prática para explorar e adquirir produtos de uma vasta seleção, proporcionando uma experiência de compra rápida e eficiente.",
    stack: [{ name: "ReactJs" }, { name: "TypeScript" }, { name: "Firestore" }],
    image: "/assets/cosmo-apparel.jpg",
    live: "https://ecommerce-front-cv8uplvgc-jows-projects-9784ef6c.vercel.app/",
    github: "https://github.com/JoaoGomesss/ecommerce-front",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "project 2",
    description:
      "A aplicação permite adicionar, editar e excluir tarefas de forma eficiente, com comunicação em tempo real entre o frontend e o backend, garantindo uma experiência de usuário fluida e intuitiva.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/taskmanager_page-0001.jpg",
    live: "https://taskmanager-4x4.pages.dev/dashboard",
    github: "https://github.com/JoaoGomesss/taskmanager",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lista de tarefas que se comunica com uma API para armazenar e recuperar dados, permitindo adicionar, editar e excluir tarefas de forma eficiente.",
    stack: [{ name: "React" }, { name: "TypeScript" }],
    image: "/assets/2.png",
    live: "https://to-do-list-ehq.pages.dev/",
    github: "https://github.com/JoaoGomesss/to-do-list",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "Site institucional feito para captação de leads de um profissional de educação física",
    stack: [{ name: "React" }, { name: "UI/UX Design" }, { name: "Figma" }],
    image: "/assets/1.png",
    live: "https://lnteam.pages.dev/",
    github: "https://github.com/JoaoGomesss/ln_team",
  },
];

const Projetos = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex item-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[40px] h-[40px] flex justify-center items-center transition-all"
                }
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projetos;
