import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import pranavImage from "../assets/images/pranav.png";

import {
    FaPlay,
    FaPause,
    FaInstagram,
    FaYoutube,
    FaSpotify,
    FaBars,
    FaTimes,
} from "react-icons/fa";

import { Howl } from "howler";
import AudioPlayer from "react-h5-audio-player";

import Lenis from "lenis";

import "react-h5-audio-player/lib/styles.css";

// ================= AUDIO =================

import CrazAudio from "../assets/audio/craZ.mp3";
import KashAudio from "../assets/audio/R&B3.mp3";
import velocityAudio from "../assets/audio/Velocity.mp3";
import oldTypeAudio from "../assets/audio/OldType.wav";
import zakhmAudio from "../assets/audio/Zakhm.mp3";
import ZeherAudio from "../assets/audio/Project10.wav";

// ================= SOUND =================

const clickSound = new Howl({
    src: ["/sounds/click.mp3"],
    volume: 0.3,
});

const Portfolio = () => {

    const [activeTrack, setActiveTrack] = useState(null);

    const [menuOpen, setMenuOpen] = useState(false);

    const heroRef = useRef();

    // ================= TRACKS =================

    const tracks = [
        {
            id: 1,
            title: "CraZ",
            type: "TRAP / AGGRESSIVE",
            audio: CrazAudio,
        },
        {
            id: 2,
            title: "Kash",
            type: "R&B / COZY",
            audio: KashAudio,
        },
        {
            id: 3,
            title: "VELOCITY",
            type: "EDM",
            audio: velocityAudio,
        },
        {
            id: 4,
            title: "OLD TYPE",
            type: "Hip Hop",
            audio: oldTypeAudio,
        },
        {
            id: 5,
            title: "ZAKHM",
            type: "POP / EMOTIONAL",
            audio: zakhmAudio,
        },
        {
            id: 6,
            title: "Zeher",
            type: "R&B",
            audio: ZeherAudio,
        },
    ];

    // ================= LENIS =================

    useEffect(() => {

        const lenis = new Lenis({
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

    }, []);

    // ================= CLICK SOUND =================

    const handleClick = () => {
        clickSound.play();
    };

    // ================= PLAY TRACK =================

    const handleTrackToggle = (trackId) => {

        handleClick();

        if (activeTrack === trackId) {
            setActiveTrack(null);
        } else {
            setActiveTrack(trackId);
        }
    };

    return (

        <div className="bg-[#050505] text-white min-h-screen overflow-hidden relative">

            {/* ================= NOISE ================= */}

            <div
                className="fixed inset-0 opacity-[0.03] pointer-events-none z-[1]"
                style={{
                    backgroundImage:
                        "url('https://grainy-gradients.vercel.app/noise.svg')",
                }}
            />

            {/* ================= RED LIGHT ================= */}

            <div className="fixed top-[-20rem] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-red-500/10 blur-[180px] rounded-full pointer-events-none" />

            {/* ================= NAVBAR ================= */}

            <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto">

                <div className="px-5 md:px-8 py-4 rounded-full border border-white/10 bg-black/70 backdrop-blur-2xl flex items-center justify-between md:justify-center gap-10 shadow-2xl">

                    <h1 className="text-xs md:text-sm tracking-[0.4em] font-bold whitespace-nowrap">
                        PRANAV
                    </h1>

                    {/* DESKTOP NAV */}

                    <div className="hidden md:flex items-center gap-8 text-sm text-white/50">

                        <a
                            href="#beats"
                            onClick={handleClick}
                            className="hover:text-white transition-all"
                        >
                            Beats
                        </a>

                        <a
                            href="#projects"
                            onClick={handleClick}
                            className="hover:text-white transition-all"
                        >
                            Projects
                        </a>

                        <a
                            href="#about"
                            onClick={handleClick}
                            className="hover:text-white transition-all"
                        >
                            About
                        </a>

                        <a
                            href="#contact"
                            onClick={handleClick}
                            className="hover:text-white transition-all"
                        >
                            Contact
                        </a>

                    </div>

                    {/* MOBILE MENU BUTTON */}

                    <button
                        onClick={() => {
                            handleClick();
                            setMenuOpen(!menuOpen);
                        }}
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

                    transition={{
                        duration: 0.25,
                    }}

                    className="md:hidden mt-4 rounded-[2rem] border border-white/10 bg-black/80 backdrop-blur-2xl overflow-hidden"

                >

                    <div className="flex flex-col p-4">

                        <a
                            href="#beats"
                            onClick={() => {
                                handleClick();
                                setMenuOpen(false);
                            }}
                            className="px-4 py-4 border-b border-white/5 text-white/70 hover:text-white transition-all"
                        >
                            Beats
                        </a>

                        <a
                            href="#projects"
                            onClick={() => {
                                handleClick();
                                setMenuOpen(false);
                            }}
                            className="px-4 py-4 border-b border-white/5 text-white/70 hover:text-white transition-all"
                        >
                            Projects
                        </a>

                        <a
                            href="#about"
                            onClick={() => {
                                handleClick();
                                setMenuOpen(false);
                            }}
                            className="px-4 py-4 border-b border-white/5 text-white/70 hover:text-white transition-all"
                        >
                            About
                        </a>

                        <a
                            href="#contact"
                            onClick={() => {
                                handleClick();
                                setMenuOpen(false);
                            }}
                            className="px-4 py-4 text-white/70 hover:text-white transition-all"
                        >
                            Contact
                        </a>

                    </div>

                </motion.div>

            </nav>


            {/* ================= INTRO SECTION ================= */}

            <section className="min-h-screen flex items-center relative z-10 px-6 pt-32 md:pt-24 overflow-hidden">

                <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}

                    <div className="relative z-10">

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="text-red-500 tracking-[0.4em] text-xs md:text-sm mb-8"
                            style={{
                                fontFamily: "MONOWIRE",
                            }}
                        >
                            MUSIC PRODUCER • SOUND DESIGNER
                        </motion.p>

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 100,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                            }}
                            className="leading-[0.85]"
                        >

                            <span
                                className="block text-[4rem] sm:text-[6rem] md:text-[9rem] text-white font-black tracking-[0.08em]"
                                style={{
                                    fontFamily: "Eyekons",
                                }}
                            >
                                PRANAV
                            </span>

                            <span
                                className="block text-[4rem] sm:text-[6rem] md:text-[9rem] text-white/15 font-black tracking-[0.08em]"
                                style={{
                                    fontFamily: "Eyekons",
                                }}
                            >
                                BIRLA
                            </span>

                        </motion.h1>

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.2,
                            }}
                            className="mt-10 max-w-xl text-white/45 text-lg md:text-2xl leading-relaxed"
                        >
                            Crafting dark cinematic experiences through
                            aggressive drums, emotional melodies and
                            futuristic sound design.
                        </motion.p>

                    </div>

                    {/* RIGHT */}

                    <div className="relative flex justify-center md:justify-end">

                        {/* FLOATING CARDS */}

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="absolute top-[10%] left-0 md:left-[10%] px-5 py-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl"
                        >

                            <p
                                className="text-sm tracking-[0.3em] text-white/70"
                                style={{
                                    fontFamily: "Eyekons",
                                }}
                            >
                                CraZ
                            </p>

                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, 10, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            className="absolute bottom-[15%] right-0 px-5 py-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl"
                        >

                            <p
                                className="text-sm tracking-[0.3em] text-white/70"
                                style={{
                                    fontFamily: "Eyekons",
                                }}
                            >
                                ZAKHM
                            </p>

                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                            }}
                            className="absolute top-[45%] left-[-2rem] md:left-[5%] px-5 py-3 rounded-full border border-white/10 bg-red-500/10 backdrop-blur-xl"
                        >

                            <p
                                className="text-sm tracking-[0.3em] text-red-400"
                                style={{
                                    fontFamily: "Eyekons",
                                }}
                            >
                                VELOCITY
                            </p>

                        </motion.div>

                        {/* IMAGE */}

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



            {/* ================= HERO ================= */}

            <section
                ref={heroRef}
                className="md:min-h-screen min-h-[50vh] flex items-center justify-center px-6 relative z-10"
            >

                <div className="max-w-7xl w-full pt-20 md:pt-0">

                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        className="text-[5rem] sm:text-[7rem] md:text-[12rem] leading-[0.82] font-black tracking-[-0.07em]"
                    >
                        SOUND
                        <br />

                        <span className="text-white/15">
                            THAT STAYS
                        </span>

                    </motion.h1>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.2,
                        }}
                        className="mt-10 max-w-2xl text-white/45 text-lg md:text-2xl leading-relaxed"
                    >
                        Dark cinematic production crafted from emotion,
                        chaos and raw underground energy.
                    </motion.p>

                </div>

            </section>

            {/* ================= MOVING TEXT ================= */}

            <section className="border-y border-white/10 py-6 mt-10 overflow-hidden relative z-10">

                <div className="flex whitespace-nowrap animate-marquee">

                    {[...Array(2)].map((_, i) => (

                        <div
                            key={i}
                            className="flex items-center gap-10 text-white/20 text-xl md:text-4xl font-black tracking-[0.3em] uppercase mr-10"
                        >

                            <span>CINEMATIC SOUND</span>
                            <span className="text-red-500">•</span>

                            <span>HARD DRILL</span>
                            <span className="text-red-500">•</span>

                            <span>DARK ENERGY</span>
                            <span className="text-red-500">•</span>

                            <span>ORIGINAL PRODUCTIONS</span>
                            <span className="text-red-500">•</span>

                        </div>

                    ))}

                </div>

            </section>

            {/* ================= TRACKS ================= */}

            <section
                id="beats"
                className="py-24 md:py-32 px-4 md:px-6 relative z-10"
            >

                <div className="max-w-6xl mx-auto">

                    <div className="mb-14 md:mb-20">

                        <h2 className="text-5xl md:text-7xl font-black tracking-[0.05em]" style={{ fontFamily: "Eyekons", }}>
                            FEATURED
                            <br />
                            TRACKS
                        </h2>

                    </div>

                    <div className="flex flex-col gap-5">

                        {tracks.map((track) => (

                            <motion.div
                                key={track.id}
                                whileHover={{
                                    y: -2,
                                }}
                                className="border border-white/10 bg-[#0B0B0B] rounded-[2rem] overflow-hidden"
                            >

                                <div className="p-5 md:p-7">

                                    <div className="flex items-center justify-between gap-4">

                                        {/* LEFT */}

                                        <div className="flex items-center gap-4 md:gap-6 min-w-0" >

                                            <div className="text-white/20 text-lg md:text-2xl font-black w-[2rem] md:w-[3rem]">
                                                0{track.id}
                                            </div>

                                            <div className="min-w-0">

                                                <h3 className="text-xl md:text-3xl font-black tracking-tight truncate">
                                                    {track.title}
                                                </h3>

                                                <p className="text-white/35 text-[0.7rem] md:text-sm tracking-[0.25em] mt-1">
                                                    {track.type}
                                                </p>

                                            </div>

                                        </div>

                                        {/* RIGHT */}

                                        <button
                                            onClick={() => handleTrackToggle(track.id)}
                                            className={`w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center transition-all shrink-0 ${activeTrack === track.id
                                                ? "bg-red-500 border-red-500"
                                                : "border-white/10 hover:border-red-500 hover:bg-red-500"
                                                }`}
                                        >

                                            {activeTrack === track.id
                                                ? <FaPause />
                                                : <FaPlay />
                                            }

                                        </button>

                                    </div>

                                    {/* PLAYER */}

                                    {activeTrack === track.id && (

                                        <div className="mt-6 pt-6 border-t border-white/10">

                                            <AudioPlayer
                                                autoPlay
                                                src={track.audio}
                                                showJumpControls={false}
                                                customAdditionalControls={[]}
                                                customVolumeControls={[]}
                                                layout="horizontal"
                                            />

                                        </div>

                                    )}

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= PROJECTS ================= */}

            <section
                id="projects"
                className="py-24 md:py-32 px-6 border-t border-white/10 relative z-10"
            >

                <div className="max-w-7xl mx-auto">

                    <div className="grid md:grid-cols-2 gap-14 md:gap-20">

                        <div style={{
                            fontFamily: "Galldis",
                        }}>

                            <p className="text-red-500 tracking-[0.3em] text-sm mb-6">
                                SIGNATURE PROJECT
                            </p>

                            <h2 className="text-5xl md:text-8xl font-black tracking-[-0.05em] leading-none mb-8">
                                CraZ
                            </h2>

                            <p className="text-white/50 leading-relaxed max-w-xl text-base md:text-lg">
                                A cinematic sonic experience combining
                                orchestral emotion, aggressive bass and
                                dark atmospheric textures.
                            </p>

                        </div>

                        <div className="relative border border-white/10 rounded-[2rem] min-h-[18rem] md:min-h-[30rem] flex items-center justify-center overflow-hidden bg-[#0B0B0B]">

                            {/* RED GLOW */}

                            <div className="absolute inset-0 flex items-center justify-center">

                                <div className="w-[18rem] h-[18rem] md:w-[28rem] md:h-[28rem] bg-red-500/10 blur-[120px] rounded-full" />

                            </div>

                            {/* IMAGE */}

                            <img
                                src="/cover.png"
                                alt="Pranav Birla"
                                className="relative z-10 w-[18rem] sm:w-[24rem] md:w-[34rem] object-contain"
                            />

                        </div>

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

                        <div >

                            <p className="text-red-500 tracking-[0.3em] text-sm mb-6">
                                ABOUT
                            </p>

                            <h2 className="text-5xl md:text-8xl font-black tracking-[0.05em] leading-none" style={{
                                fontFamily: "Eyekons",
                            }}>
                                MUSIC
                                <br />
                                PRODUCER
                            </h2>

                        </div>

                        <div className="flex flex-col justify-end">

                            <p className="text-white/50 text-base md:text-lg leading-relaxed">
                                Started producing in 2024 and rapidly evolved
                                into creating dark cinematic sound experiences
                                inspired by emotion, chaos and underground
                                energy.
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

                <div className="max-w-7xl mx-auto text-center" style={{
                    fontFamily: "Eyekons",
                }}>

                    <p className="text-red-500 tracking-[0.3em] text-sm mb-6">
                        CONTACT
                    </p>

                    <h2 className="text-[4rem] md:text-[8rem] font-black tracking-[0.05em] leading-none mb-12">
                        LET'S
                        <br />
                        CREATE
                    </h2>

                    <div className="flex justify-center gap-4 md:gap-6">

                        <a
                            href="https://instagram.com"
                            className="w-14 h-14 md:w-16 md:h-16 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://youtube.com"
                            className="w-14 h-14 md:w-16 md:h-16 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all"
                        >
                            <FaYoutube />
                        </a>

                        <a
                            href="https://spotify.com"
                            className="w-14 h-14 md:w-16 md:h-16 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all"
                        >
                            <FaSpotify />
                        </a>

                    </div>

                </div>

            </section>

            {/* ================= FOOTER ================= */}

            <footer className="py-10 border-t border-white/10 text-center text-white/30 text-xs md:text-sm tracking-[0.2em] relative z-10 px-6">

                BUILT FROM SOUND, EMOTION & SLEEPLESS NIGHTS

            </footer>

            {/* ================= CSS ================= */}

            <style>
                {`

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

                    .rhap_container {
                        background: transparent !important;
                        box-shadow: none !important;
                        border: none !important;
                        padding: 0 !important;
                    }

                    .rhap_progress-filled {
                        background-color: #ef4444 !important;
                    }

                    .rhap_progress-indicator {
                        background: #ef4444 !important;
                    }

                    .rhap_time {
                        color: #ffffff50 !important;
                    }

                    .rhap_button-clear {
                        color: white !important;
                    }

                    @keyframes marquee {
                        from {
                            transform: translateX(0%);
                        }

                        to {
                            transform: translateX(-50%);
                        }
                    }

                    .animate-marquee {
                        animation: marquee 18s linear infinite;
                    }

                `}
            </style>

        </div>
    );
};

export default Portfolio;