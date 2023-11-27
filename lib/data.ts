import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import adminportalImg from "@/public/admin-portal.png"
import onlinemarketImg from "@/public/online_market.png"
import blogImg from "@/public/blog.png"
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Ga-30/G, Pragati Sarani, Dhaka 1212, Bangladesh",
    description:
      "I'm now a software engineer(Cloud Software) in Brilliant Cloud at InterCloud Limited. My stack includes Cloud, Backend, Kubernetes.",
    icon: React.createElement(FaCloud),
    date: "2023 - present",
  },
  {
    title: "BSc in Computer Science & Engineering",
    location: "Kaptai, Highway Pahartoli, Raozan, Chattogram 4349",
    description:
      "I graduated with a BSc in Computer Science and Engineering from Chittagong University of Engineering and Technology",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2022",
  },
  {
    title: "Higher Secondary",
    location: "Arambagh, Motijheel, Dhaka, Bangladesh",
    description:
      "I had my higher secondary from Notre Dame College",
    icon: React.createElement(LuGraduationCap),
    date: "2014-2016",
  },
  
] as const;

export const projectsData = [
  {
    title: "Cloud Admin Portal",
    description:
      "I worked as a backend developer on this project for 2 months. It is basically a admin portal for cloud service which is used by admin users",
    tags: ["Flask", "MongoDB", "Docker"],
    imageUrl: adminportalImg,
  },
  {
    title: "Online Market",
    description:
      "A online market place where user and buy and sell products. I developed both front-end and backend in this project.",
    tags: ["Flask", "PostgreSQl", "HTML", "CSS", "Docker"],
    imageUrl: onlinemarketImg,
  },
  {
    title: "MicroBlog",
    description:
      "A social media platform where user can post blog, see other users post, follow them, send personal message etc. This is a personal project",
    tags: ["Flask", "PostgreSQL", "Elastic Search", "Celery", "Docker"],
    imageUrl: blogImg,
  },
] as const;

export const skillsData = [
  "Docker",
  "kubernetes",
  "Bash",
  "Grafana",
  "Nginx",
  "Flask",
  "FastAPI",
  "RestAPIs",
  "Celery",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Linux",
  "Python",
  "C++",
  "C",
  "HTML",
  "CSS",
  
] as const;
