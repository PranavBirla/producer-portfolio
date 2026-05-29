import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import pranavImage from "../assets/images/pranav.png";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaBars,
    FaTimes,
    FaArrowRight,
} from "react-icons/fa";

import Lenis from "lenis";

// ================= DATA =================

const projects = [
    {
        id: "01",
        name: "PlugBook",
        tag: "EV PLATFORM · FULLSTACK",
        desc: "Smart EV charging slot booking and reservation system",
        github: "#",
        live: "#",
    },
    {
        id: "02",
        name: "Krishiq",
        tag: "AGRI-TECH · FULLSTACK",
        desc: "Direct farmer-to-buyer marketplace — no middlemen",
        github: "#",
        live: "#",
    },
    {
        id: "03",
        name: "MicroSocial",
        tag: "SOCIAL · FULLSTACK",
        desc: "A private social space built for people who matter",
        github: "#",
        live: "#",
    },
    {
        id: "04",
        name: "Music Portfolio",
        tag: "CREATIVE · FRONTEND",
        desc: "A cinematic portfolio for showcasing music production",
        github: "#",
        live: "#",
    },
];

const stackRows = [
    { label: "FRONTEND", value: "ReactJS · GSAP · ThreeJS · R3F · TheatreJS" },
    { label: "BACKEND", value: "NodeJS · ExpressJS · MongoDB" },
    { label: "ARCHITECTURE", value: "REST APIs · Deployments · Real World Systems" },
    { label: "INTERESTS", value: "Creative Dev · Motion Design · Emerging Tech" },
];

// ================= PORTFOLIO =================

const Portfolio = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const heroRef = useRef(null);
    const statementRef = useRef(null);
    const stackRef = useRef(null);
    const projectsRef = useRef(null);

    // ================= LENIS =================

    useEffect(() => {
        const lenis = new Lenis({ smoothWheel: true });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    // ================= GSAP =================

    useEffect(() => {
        let gsapInstance, ScrollTrigger;

        const initGSAP = async () => {
            try {
                const gsapModule = await import("gsap");
                const stModule = await import("gsap/ScrollTrigger");
                gsapInstance = gsapModule.gsap;
                ScrollTrigger = stModule.ScrollTrigger;
                gsapInstance.registerPlugin(ScrollTrigger);

                // Hero animations
                gsapInstance.fromTo(".hero-tag",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
                );
                gsapInstance.fromTo(".hero-name",
                    { opacity: 0, y: 80 },
                    { opacity: 1, y: 0, duration: 1.1, delay: 0.4, ease: "power3.out" }
                );
                gsapInstance.fromTo(".hero-sub",
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.9, delay: 0.7 }
                );

                // Floating pills
                gsapInstance.to(".pill-1", { y: -12, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
                gsapInstance.to(".pill-2", { y: 10, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
                gsapInstance.to(".pill-3", { y: -18, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });

                // Statement section
                gsapInstance.fromTo(".statement-line",
                    { opacity: 0, y: 120, skewY: 4 },
                    {
                        opacity: 1, y: 0, skewY: 0, duration: 1.2, stagger: 0.2, ease: "expo.out",
                        scrollTrigger: { trigger: ".statement-section", start: "top 70%" }
                    }
                );

                // Stack rows
                gsapInstance.fromTo(".stack-row",
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
                        scrollTrigger: { trigger: ".stack-section", start: "top 80%" }
                    }
                );

                // Project cards
                gsapInstance.fromTo(".project-card",
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
                        scrollTrigger: { trigger: ".projects-section", start: "top 75%" }
                    }
                );

                // Fade up elements
                gsapInstance.utils.toArray(".fade-up").forEach((el) => {
                    gsapInstance.fromTo(el,
                        { opacity: 0, y: 60 },
                        {
                            opacity: 1, y: 0, duration: 1, ease: "power3.out",
                            scrollTrigger: { trigger: el, start: "top 85%" }
                        }
                    );
                });

            } catch (e) {
                // GSAP not available in this environment, fallback gracefully
            }
        };

        initGSAP();
    }, []);

    return (
        <div className="bg-[#050505] text-white min-h-screen overflow-hidden relative">

            {/* ================= NOISE ================= */}

            <div
                className="fixed inset-0 opacity-[0.03] pointer-events-none z-[1]"
                style={{
                    backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
                }}
            />

            {/* ================= RED LIGHT ================= */}

            <div className="fixed top-[-20rem] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-red-500/10 blur-[180px] rounded-full pointer-events-none z-0" />

            {/* ================= NAVBAR ================= */}

            <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto">

                <div className="px-5 md:px-8 py-4 rounded-full border border-white/10 bg-black/70 backdrop-blur-2xl flex items-center justify-between md:justify-center gap-10 shadow-2xl">

                    <h1 className="text-xs md:text-sm tracking-[0.4em] font-bold whitespace-nowrap">
                        PRANAV
                    </h1>

                    {/* DESKTOP NAV */}

                    <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
                        <a href="#work" className="hover:text-white transition-all">Work</a>
                        <a href="#stack" className="hover:text-white transition-all">Stack</a>
                        <a href="#about" className="hover:text-white transition-all">About</a>
                        <a href="#contact" className="hover:text-white transition-all">Contact</a>
                    </div>

                    {/* MOBILE MENU BUTTON */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-lg"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>

                {/* MOBILE MENU */}

                <motion.div
                    initial={false}
                    animate={{
                        opacity: menuOpen ? 1 : 0,
                        y: menuOpen ? 0 : -20,
                        pointerEvents: menuOpen ? "auto" : "none",
                    }}
                    transition={{ duration: 0.25 }}
                    className="md:hidden mt-4 rounded-[2rem] border border-white/10 bg-black/80 backdrop-blur-2xl overflow-hidden"
                >
                    <div className="flex flex-col p-4">
                        {["work", "stack", "about", "contact"].map((link, i) => (
                            <a
                                key={link}
                                href={`#${link}`}
                                onClick={() => setMenuOpen(false)}
                                className={`px-4 py-4 ${i < 3 ? "border-b border-white/5" : ""} text-white/70 hover:text-white transition-all capitalize`}
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </a>
                        ))}
                    </div>
                </motion.div>

            </nav>

            {/* ================= HERO SECTION ================= */}

            <section className="min-h-screen flex items-center relative z-10 px-6 pt-32 md:pt-24 overflow-hidden">

                <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}

                    <div className="relative z-10">

                        <p
                            className="hero-tag opacity-0 text-red-500 tracking-[0.4em] text-xs md:text-sm mb-8"
                            style={{ fontFamily: "MONOWIRE" }}
                        >
                            FULLSTACK DEVELOPER • CREATIVE TECHNOLOGIST
                        </p>

                        <h1 className="hero-name opacity-0 leading-[0.85]">
                            <span
                                className="block text-[4rem] sm:text-[6rem] md:text-[9rem] text-white font-black tracking-[0.08em]"
                                style={{ fontFamily: "Eyekons" }}
                            >
                                PRANAV
                            </span>
                            <span
                                className="block text-[4rem] sm:text-[6rem] md:text-[9rem] text-white/15 font-black tracking-[0.08em]"
                                style={{ fontFamily: "Eyekons" }}
                            >
                                BIRLA
                            </span>
                        </h1>

                        <p className="hero-sub opacity-0 mt-10 max-w-xl text-white/45 text-lg md:text-2xl leading-relaxed">
                            I build digital experiences that feel alive — from pixel to server, motion to architecture.
                        </p>

                    </div>

                    {/* RIGHT */}

                    <div className="relative flex justify-center md:justify-end">

                        {/* FLOATING PILLS */}

                        <div className="pill-1 absolute top-[10%] left-0 md:left-[10%] px-5 py-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl z-10">
                            <p className="text-sm tracking-[0.3em] text-white/70" style={{ fontFamily: "Eyekons" }}>
                                ReactJS
                            </p>
                        </div>

                        <div className="pill-2 absolute bottom-[15%] right-0 px-5 py-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl z-10">
                            <p className="text-sm tracking-[0.3em] text-white/70" style={{ fontFamily: "Eyekons" }}>
                                Node.js
                            </p>
                        </div>

                        <div className="pill-3 absolute top-[45%] left-[-2rem] md:left-[5%] px-5 py-3 rounded-full border border-white/10 bg-red-500/10 backdrop-blur-xl z-10">
                            <p className="text-sm tracking-[0.3em] text-red-400" style={{ fontFamily: "Eyekons" }}>
                                ThreeJS
                            </p>
                        </div>

                        {/* PHOTO */}

                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500/10 blur-[120px] rounded-full" />
                            <img
                                src={pranavImage}
                                alt="Pranav Birla"
                                className="relative w-[20rem] sm:w-[26rem] md:w-[34rem] object-contain -z-10"
                            />
                        </div>

                    </div>

                </div>

            </section>

            {/* ================= STATEMENT SECTION ================= */}

            <section
                ref={statementRef}
                className="statement-section md:min-h-screen min-h-[50vh] flex items-center justify-center px-6 relative z-10"
            >
                <div className="max-w-7xl w-full pt-20 md:pt-0">

                    <h1
                        className="text-[5rem] sm:text-[7rem] md:text-[12rem] leading-[0.82] font-black tracking-[-0.07em]"
                    >
                        <span className="statement-line block opacity-0">CODE</span>
                        <span className="statement-line block opacity-0">THAT MOVES.</span>
                        <span className="statement-line block opacity-0 text-white/15">BUILDS THAT LAST.</span>
                    </h1>

                    <p className="statement-line opacity-0 mt-10 max-w-2xl text-white/45 text-lg md:text-2xl leading-relaxed">
                        I don't just write code. I craft systems with soul — where performance meets craft, and every interaction is intentional.
                    </p>

                </div>
            </section>

            {/* ================= MARQUEE ================= */}

            <section className="border-y border-white/10 py-6 mt-10 overflow-hidden relative z-10">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(2)].map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-10 text-white/20 text-xl md:text-4xl font-black tracking-[0.3em] uppercase mr-10"
                        >
                            <span>FULLSTACK DEVELOPMENT</span>
                            <span className="text-red-500">•</span>
                            <span>CREATIVE INTERFACES</span>
                            <span className="text-red-500">•</span>
                            <span>REAL WORLD ARCHITECTURE</span>
                            <span className="text-red-500">•</span>
                            <span>MOTION & INTERACTION</span>
                            <span className="text-red-500">•</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= PROJECTS / WORK ================= */}

            <section
                id="work"
                ref={projectsRef}
                className="projects-section py-24 md:py-32 px-4 md:px-6 relative z-10"
            >
                <div className="max-w-6xl mx-auto">

                    <div className="mb-14 md:mb-20">
                        <p className="fade-up opacity-0 text-red-500 tracking-[0.3em] text-sm mb-6">SELECTED WORK</p>
                        <h2
                            className="fade-up opacity-0 text-5xl md:text-7xl font-black tracking-[0.05em]"
                            style={{ fontFamily: "Eyekons" }}
                        >
                            PROJECTS
                            <br />
                            <span className="text-white/15">BUILT</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-5">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="project-card opacity-0 border border-white/10 bg-[#0B0B0B] rounded-[2rem] overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="p-5 md:p-7">
                                    <div className="flex items-center justify-between gap-4">

                                        {/* LEFT */}
                                        <div className="flex items-center gap-4 md:gap-6 min-w-0">
                                            <div className="text-white/20 text-lg md:text-2xl font-black w-[2.5rem] md:w-[3.5rem] shrink-0">
                                                {project.id}
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="text-xl md:text-3xl font-black tracking-tight truncate">
                                                    {project.name}
                                                </h3>
                                                <p className="text-red-500/80 text-[0.65rem] md:text-xs tracking-[0.25em] mt-1">
                                                    {project.tag}
                                                </p>
                                                <p className="text-white/35 text-sm mt-2 hidden md:block">
                                                    {project.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* RIGHT */}
                                        <div className="flex items-center gap-3 shrink-0">
                                            <a
                                                href={project.github}
                                                className="hidden sm:flex px-4 py-2 rounded-full border border-white/10 text-xs tracking-widest text-white/50 hover:border-white/30 hover:text-white transition-all"
                                            >
                                                GitHub
                                            </a>
                                            <a
                                                href={project.live}
                                                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all"
                                            >
                                                <FaArrowRight className="text-sm" />
                                            </a>
                                        </div>

                                    </div>

                                    {/* Mobile desc */}
                                    <p className="text-white/35 text-sm mt-4 md:hidden">
                                        {project.desc}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= STACK ================= */}

            <section
                id="stack"
                ref={stackRef}
                className="stack-section py-24 md:py-32 px-6 border-t border-white/10 relative z-10"
            >
                <div className="max-w-6xl mx-auto">

                    <div className="mb-14 md:mb-20">
                        <p className="fade-up opacity-0 text-red-500 tracking-[0.3em] text-sm mb-6">TOOLS OF THE TRADE</p>
                        <h2
                            className="fade-up opacity-0 text-5xl md:text-7xl font-black tracking-[0.05em]"
                            style={{ fontFamily: "Eyekons" }}
                        >
                            MY
                            <br />
                            <span className="text-white/15">STACK</span>
                        </h2>
                    </div>

                    <div className="flex flex-col divide-y divide-white/5">
                        {stackRows.map((row) => (
                            <div
                                key={row.label}
                                className="stack-row opacity-0 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 py-7"
                            >
                                <span
                                    className="text-red-500 tracking-[0.3em] text-xs w-full sm:w-[12rem] shrink-0"
                                    style={{ fontFamily: "MONOWIRE" }}
                                >
                                    {row.label}
                                </span>
                                <span className="text-white/60 text-base md:text-lg leading-relaxed">
                                    {row.value}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= ABOUT ================= */}

            <section
                id="about"
                className="py-24 md:py-32 px-6 border-t border-white/10 relative z-10"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-14 md:gap-20">

                        <div>
                            <p className="fade-up opacity-0 text-red-500 tracking-[0.3em] text-sm mb-6">ABOUT</p>
                            <h2
                                className="fade-up opacity-0 text-5xl md:text-8xl font-black tracking-[0.05em] leading-none"
                                style={{ fontFamily: "Eyekons" }}
                            >
                                WEB
                                <br />
                                DEVELOPER
                            </h2>
                        </div>

                        <div className="flex flex-col justify-end gap-6">
                            <p className="fade-up opacity-0 text-white/50 text-base md:text-lg leading-relaxed">
                                Started building in 2024 and rapidly evolved into crafting full-stack systems, creative interfaces and real-world applications. I love exploring new technologies, different work cultures, and building things that didn't exist before.
                            </p>
                            <p className="fade-up opacity-0 text-white/35 text-base md:text-lg leading-relaxed">
                                Currently focused on the intersection of motion, architecture and creativity — where a project isn't just functional, it's felt.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= CONTACT ================= */}

            <section
                id="contact"
                className="py-24 md:py-32 px-6 border-t border-white/10 relative z-10"
            >
                <div
                    className="max-w-7xl mx-auto text-center"
                    style={{ fontFamily: "Eyekons" }}
                >

                    <p className="fade-up opacity-0 text-red-500 tracking-[0.3em] text-sm mb-6">CONTACT</p>

                    <h2 className="fade-up opacity-0 text-[4rem] md:text-[8rem] font-black tracking-[0.05em] leading-none mb-6">
                        LET'S
                        <br />
                        CREATE
                    </h2>

                    <p
                        className="fade-up opacity-0 text-white/40 text-lg md:text-xl mb-12"
                        style={{ fontFamily: "MONOWIRE", letterSpacing: "0.1em" }}
                    >
                        Open to freelance, collaborations and interesting problems.
                    </p>

                    <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">

                        <a
                            href="mailto:hello@pranavbirla.com"
                            className="px-8 py-4 bg-red-500 rounded-full text-sm tracking-[0.2em] hover:bg-red-600 transition-all"
                            style={{ fontFamily: "MONOWIRE" }}
                        >
                            SAY HELLO →
                        </a>

                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 md:w-16 md:h-16 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 md:w-16 md:h-16 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 md:w-16 md:h-16 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all"
                        >
                            <FaInstagram />
                        </a>

                    </div>

                </div>
            </section>

            {/* ================= FOOTER ================= */}

            <footer className="py-10 border-t border-white/10 text-center text-white/30 text-xs md:text-sm tracking-[0.2em] relative z-10 px-6">
                BUILT FROM CODE, CURIOSITY & SLEEPLESS NIGHTS
            </footer>

            {/* ================= CSS ================= */}

            <style>{`

                html {
                    scroll-behavior: smooth;
                }

                body {
                    background: #050505;
                }

                ::-webkit-scrollbar {
                    width: 5px;
                }

                ::-webkit-scrollbar-thumb {
                    background: #ffffff20;
                }

                @keyframes marquee {
                    from { transform: translateX(0%); }
                    to   { transform: translateX(-50%); }
                }

                .animate-marquee {
                    animation: marquee 22s linear infinite;
                }

            `}</style>

        </div>
    );
};

export default Portfolio;
