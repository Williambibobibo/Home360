import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {ArrowUpRight, Clock} from "lucide-react";
import Upload from "~/components/Upload";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
    return (
        <div className="home">
            <Navbar />

            <section className="hero">
                <div className="announcement">
                    <div className="dot">
                        <div className="pulse"></div>
                    </div>

                    <p>Introducing Home360 2.0</p>
                </div>

                <h1>
                    Find beautiful properties with immersive
                    <br />
                    360° virtual tours
                </h1>

                <p className="subtitle">
                    Home360 is an AI-powered property platform that helps users
                    discover, explore, and compare homes faster than ever.
                </p>

                <div className="actions">
                    <a href="#upload" className="btn btn--primary">
                        Start Building →
                    </a>

                    <a href="#demo" className="btn btn--ghost">
                        Watch Demo
                    </a>
                </div>

                <div id="upload" className="upload-shell">
                    <div className="grid-overlay" />

                    <div className="upload-card">
                        <div className="upload-head">
                            <div className="upload-icon">📦</div>
                        </div>

                        <h3>Upload your floor plan</h3>

                        <p>
                            Supports JPG, PNG formats up to 10MB
                        </p>
                    </div>

                    <Upload onComplete={(base64Data) => {
                            console.log("Upload complete:", base64Data);

                            // Handle redirection or next steps here
                    }} />
                </div>
            </section>

            <section className="projects">
                <div className="section-inner">
                    <div className="section-head">
                        <div className="copy">
                            <h2>Projects</h2>
                            <p>
                                Your latest work and shared community projects, all in one
                                place.
                            </p>
                        </div>
                    </div>

                    <div className="projects-grid">
                        <div className="project-card group">
                            <div className="preview">
                                <img
                                    src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png"
                                    alt="Project"
                                />

                                <div className="badge">
                                    <span>Community</span>
                                </div>
                            </div>

                            <div className="card-body">
                                <div>
                                    <h3>Project L</h3>

                                    <div className="meta">
                                        <Clock size={12} />
                                        <span>
                      {new Date("2027-01-01").toLocaleDateString()}
                    </span>
                                        <span>By William</span>
                                    </div>
                                </div>
                                <div className="arrow">
                                    <ArrowUpRight size={18}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}