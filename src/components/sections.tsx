"use client";
import { Button, Modal } from "antd";
import React, { useRef, useState } from "react";
import { useEffect } from "react";

const Sections = ({
  setActiveSection,
}: {
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const sections = ["Service", "Projects", "Contact"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [modalTitle, setModalTitle] = useState("");
  const [modalURL, setModalURl] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { y, height } = element.getBoundingClientRect();
          console.log(element.id, y, height);
          if (element.id === "Contact" && y <= 250 && y >= height * -1) {
            setActiveSection(section);
          } else if (y <= 0 && y >= height * -1) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    videoRef.current?.pause();
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title={modalTitle}
        footer={
          <Button onClick={handleCancel} type="primary">
            Close
          </Button>
        }
        onCancel={handleCancel}
        open={isModalOpen}
      >
        <div className="videoWrapper">
          <video
            src={`/videos/${modalURL}`}
            ref={videoRef}
            className="video"
            width={
              modalTitle === "Around Admin Dashboard" || modalTitle === "Wynt"
                ? "90%"
                : "auto"
            }
            controls
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
      <section className="cards" id="Service">
        <h2 className="title">Services</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-laptop-code" />
            </div>
            <div className="info">
              <h3>Front-End Web Development</h3>
              <ul>
                <li>
                  Working with clients to develop the overall look and design of
                  a website
                </li>
                <li>
                  Producing, maintaining and modifying websites and user
                  interfaces
                </li>
                <li>
                  Incorporating applications, graphics, audio and video clips
                  into client websites
                </li>
                <li>
                  Creating tools that enhance the user’s website experience
                </li>
                <li>
                  Ensuring websites are accessible across many platforms,
                  including laptops and smartphones
                </li>
                <li>
                  Routinely testing websites for ease of use, speed and other
                  quality factors
                </li>
                <li>Fixing any website issues or bugs that arise</li>
              </ul>

              <h3>Technologies & Tools</h3>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Redux</li>
                <li>React Router</li>
                <li>React Query</li>
                <li>Axios</li>
                <li>tRPC</li>
                <li>Tailwind CSS</li>
                <li>Ant Design</li>
                <li>WebSocket</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-laptop-code" />
            </div>
            <div className="info">
              <h3>Back-End Development</h3>
              <ul>
                <li>
                  Collaborating with clients and front-end developers to design
                  and build efficient and scalable server-side applications
                </li>
                <li>
                  Developing RESTful APIs to facilitate communication between
                  client applications and the server
                </li>
                <li>
                  Integrating databases, authentication services, and other
                  backend services to manage data effectively
                </li>
                <li>
                  Ensuring data security, handling authentication and
                  authorization, and implementing role-based access control
                </li>
                <li>
                  Writing reusable and well-documented code for maintainable,
                  long-term backend solutions
                </li>
                <li>
                  Optimizing server performance for improved load times and
                  server response rates
                </li>
                <li>
                  Troubleshooting and debugging server issues to ensure smooth
                  operation and reliability
                </li>
              </ul>

              <h3>Technologies & Tools</h3>
              <ul className="skills-list grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <li>Node.js (Express)</li>
                <li>Prisma</li>
                <li>REST APIs</li>
                <li>MongoDB</li>
                <li>tRPC</li>
                <li>PostgreSQL</li>
                <li>AWS (Lambda, S3, EC2)</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-laptop-code" />
            </div>
            <div className="info">
              <h3>Mobile App Development</h3>
              <ul>
                <li>
                  Developing user-friendly and dynamic mobile applications using
                  React Native (Expo) for cross-platform functionality.
                </li>
                <li>
                  Integrating advanced libraries such as Redux for efficient
                  state management and react-hook-form for seamless client-side
                  form handling and validation.
                </li>
                <li>
                  Building data-driven mobile apps that incorporate real-time
                  features, analytics, and enhanced UX/UI.
                </li>
                <li>
                  Conducting tests to ensure app performance and stability
                  across various devices.
                </li>
                <li>
                  Collaborating with backend developers to connect mobile
                  applications with REST APIs for efficient server
                  communication.
                </li>
              </ul>

              <h3>Technologies & Tools</h3>
              <ul>
                <li>React Native Expo</li>
                <li>Redux</li>
                <li>Axios</li>
                <li>React Native Chart Kit</li>
                <li>react-hook-form</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="Projects" id="Projects">
        <h2 className="title">Projects</h2>
        <div className="content">
          {/* Ecommerce */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className="project-card">
              <div className="project-image">
                <img src="images/natours.png" alt="" />
              </div>
              <div className="project-info">
                <strong className="project-title">
                  <span>Backend Tours Express Server</span>
                </strong>
                <strong className="project-title" style={{ marginBottom: 20 }}>
                  <a
                    href="https://tours-lac-theta.vercel.app/"
                    className="more-details text-xs"
                    target="_blank"
                  >
                    Visit SSR Pages
                  </a>
                  <a
                    href="https://documenter.getpostman.com/view/20648191/2sAXxV5pkR"
                    className="more-details text-lg"
                    target="_blank"
                  >
                    Visit Api Collection
                  </a>
                </strong>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="images/Ecommerce.png" alt="" />
              </div>
              <div className="project-info">
                <strong className="project-title">
                  <span>Ecommerce Website</span>
                  <a
                    href="https://ecommerce-39b.pages.dev/"
                    className="more-details"
                    target="_blank"
                  >
                    Visit my Website
                  </a>
                </strong>
              </div>
            </div>
          </div>
          {/* books */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className="project-card">
              <div className="project-image">
                <img src="images/Screenshot 2022-08-30 200442.png" alt="" />
              </div>
              <div className="project-info">
                <strong className="project-title">
                  <span>Dynamic React Bookstore App</span>
                  <a
                    href="https://bookstore-erh.pages.dev/"
                    className="more-details"
                    target="_blank"
                  >
                    Visit My Bookstore
                  </a>
                </strong>
              </div>
            </div>
            {/* contacts */}
            <div className="project-card">
              <div className="project-image">
                <img src="images/Screenshot 2022-08-30 201301.png" alt="" />
              </div>
              <div className="project-info">
                <p>
                  You Should Run this
                  <a
                    href="https://github.com/udacity/reactnd-contacts-server2"
                    target="_blank"
                  >
                    {" "}
                    server
                  </a>
                </p>
                <strong className="project-title">
                  <span>React Contacts App</span>
                  <a
                    href="https://contacts-7p5.pages.dev/"
                    className="more-details"
                    target="_blank"
                  >
                    Visit My App
                  </a>
                </strong>
              </div>
            </div>
          </div>
          {/* landing page */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className="project-card">
              <div className="project-image">
                <img src="images/Screenshot 2022-08-30 202928.png" alt="" />
              </div>
              <div className="project-info">
                <strong className="project-title">
                  <span>Landing Page</span>
                  <a
                    href="https://landingpagee.pages.dev/"
                    className="more-details"
                    target="_blank"
                  >
                    Visit My Page
                  </a>
                </strong>
              </div>
            </div>
            {/* chat app */}
            <div className="project-card">
              <div className="project-image">
                <img src="images/Screenshot 2022-08-30 211249.png" alt="" />
              </div>
              <div className="project-info">
                <strong className="project-title">
                  <span>React Chat App</span>
                  <a
                    href="https://chatapp-5ka.pages.dev/"
                    className="more-details"
                    target="_blank"
                  >
                    Visit My App
                  </a>
                </strong>
              </div>
            </div>
          </div>
          {/* youtube */}
          <div className="project-card">
            <div className="project-image">
              <img src="images/youtube.png" alt="" />
            </div>
            <div className="project-info">
              <strong className="project-title">
                <span>Youtube</span>
                <a
                  href="https://youtube-a0f.pages.dev/"
                  className="more-details"
                  target="_blank"
                >
                  Visit My Youtube
                </a>
              </strong>
            </div>
          </div>
        </div>
        <h2 className="title" style={{ marginTop: 50 }}>
          Contributions In Production Projects
        </h2>
        <div className="content">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              className="project-card"
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 35,
              }}
            >
              <div
                className="project-image"
                style={{
                  height: "80%",
                }}
              >
                <img src="images/around.png" alt="" />
              </div>
              <div
                className="project-info"
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <strong className="project-title">
                  <span>Around App (React Native + Expo)</span>
                </strong>
                <p
                  style={{
                    fontSize: 14,
                    color: "gray",
                    marginTop: 5,
                    marginBottom: 5,
                    flexGrow: 1,
                  }}
                >
                  An all-in-one platform for studios and clients to manage and
                  streamline product and service transactions effortlessly and
                  bookings
                </p>
                <strong className="project-title ">
                  <p
                    className="more-details"
                    onClick={() => {
                      setModalURl("Around.mp4");
                      setModalTitle("Around App");
                      showModal();
                    }}
                    style={{ cursor: "pointer", marginTop: "auto" }}
                  >
                    Show Demo
                  </p>
                </strong>
              </div>
            </div>
            {/* <div
              className="project-card"
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 35,
              }}
            >
              <div
                className="project-image"
                style={{
                  height: "80%",
                }}
              >
                <img src="images/Tantt.jpeg" style={{ marginTop: 10 }} alt="" />
              </div>
              <div
                className="project-info"
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <strong className="project-title">
                  <span>Tantt App (React Native + Expo)</span>
                </strong>
                <p
                  style={{
                    fontSize: 14,
                    color: "gray",
                    marginTop: 5,
                    marginBottom: 5,
                    flexGrow: 1,
                  }}
                >
                  A comprehensive platform connecting professionals with
                  industry experts to share knowledge, book consultations, and
                  access personalized insights, empowering career and business
                  growth effortlessly.
                </p>
                <strong className="project-title ">
                  <p
                    className="more-details"
                    onClick={() => {
                      setModalURl("Tantt.mp4");
                      setModalTitle("Tantt App");
                      showModal();
                    }}
                    style={{ cursor: "pointer", marginTop: "auto" }}
                  >
                    Show Demo
                  </p>
                </strong>
              </div>
            </div> */}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              className="project-card"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                className="project-image"
                style={{
                  height: "80%",
                }}
              >
                <img
                  src="images/AroundAdmin.png"
                  style={{ marginTop: 10, objectFit: "fill" }}
                  alt=""
                />
              </div>
              <div
                className="project-info"
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <strong className="project-title">
                  <span>around admin dashboard (React + Node)</span>
                </strong>
                <p
                  style={{
                    fontSize: 14,
                    color: "gray",
                    marginTop: 5,
                    marginBottom: 5,
                    flexGrow: 1,
                  }}
                >
                  A powerful and intuitive admin dashboard designed to manage
                  the platform seamlessly. It includes features for overseeing
                  user accounts, monitoring bookings, orders and pushing
                  notifications. The dashboard empowers administrators to
                  maintain platform quality, ensure user satisfaction, and
                  support smooth operations with ease.
                </p>
                <strong className="project-title ">
                  <p
                    className="more-details"
                    onClick={() => {
                      setModalURl("RecordingAroundAdmin.mp4");
                      setModalTitle("Around Admin Dashboard");
                      showModal();
                    }}
                    style={{ cursor: "pointer", marginTop: "auto" }}
                  >
                    Show Demo
                  </p>
                </strong>
              </div>
            </div>

            {/* <div
              className="project-card"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                className="project-image"
                style={{
                  height: "80%",
                }}
              >
                <img
                  src="images/wynt.png"
                  style={{ marginTop: 10, objectFit: "fill" }}
                  alt=""
                />
              </div>
              <div
                className="project-info"
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <strong className="project-title">
                  <span>Wynt (Next + tRPC)</span>
                </strong>
                <p
                  style={{
                    fontSize: 14,
                    color: "gray",
                    marginTop: 5,
                    marginBottom: 5,
                    flexGrow: 1,
                  }}
                >
                  An innovative recruitment platform that leverages AI to
                  transform the hiring process. Users can upload their CVs to
                  automatically extract experiences and skills, creating a
                  comprehensive profile. Companies can post job openings and,
                  using AI, match candidates to roles with personalized scores
                  based on their qualifications and fit. This intelligent system
                  streamlines talent acquisition, enabling efficient and
                  data-driven hiring for both candidates and companies.
                </p>
                <strong className="project-title ">
                  <p
                    className="more-details"
                    onClick={() => {
                      setModalURl("wynt.mp4");
                      setModalTitle("Wynt");
                      showModal();
                    }}
                    style={{ cursor: "pointer", marginTop: "auto" }}
                  >
                    Show Demo
                  </p>
                </strong>
              </div>
            </div> */}
          </div>

          <div
            className="project-card"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 35,
            }}
          >
            <div
              className="project-image"
              style={{
                height: "80%",
              }}
            >
              <img src="images/auth.png" alt="" />
            </div>
            <div
              className="project-info"
              style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <strong className="project-title">
                <span>Full Stack Auth Module (Next + Nest )</span>
              </strong>
              <p
                style={{
                  fontSize: 14,
                  color: "gray",
                  marginTop: 5,
                  marginBottom: 5,
                  flexGrow: 1,
                }}
              >
                Secure Authentication System with Token-Based Authorization A
                robust and secure authentication system built with NestJS and
                Next.js, implementing JWT-based authentication with access and
                refresh tokens. The system ensures secure user sign-in and
                sign-up, with tokens stored in HTTP-only cookies for enhanced
                security. It features automatic token refresh, password hashing
                with bcrypt, and strict CORS policies for cross-domain requests.
                Designed with security best practices, this project demonstrates
                seamless frontend-backend integration, ensuring a smooth and
                secure user experience.
              </p>
              <strong className="project-title ">
                <a
                  href="https://auth-module-mu.vercel.app/"
                  className="more-details"
                  target="_blank"
                >
                  Try Module
                </a>
              </strong>
            </div>
          </div>
          <div
            className="project-card"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 35,
            }}
          >
            <div
              className="project-image"
              style={{
                height: "80%",
              }}
            >
              <img src="images/legalzard.jpeg" alt="" />
            </div>
            <div
              className="project-info"
              style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <strong className="project-title">
                <span>DoWell Legalzard (React Native )</span>
              </strong>
              <p
                style={{
                  fontSize: 14,
                  color: "gray",
                  marginTop: 5,
                  marginBottom: 5,
                  flexGrow: 1,
                }}
              >
                A comprehensive platform offering a database of popular software
                licenses (e.g., MIT, Apache, GNU GPL) with detailed information
                on their text, categories, and key details. It also provides
                templates and a policy generator for creating essential legal
                documents like Software License Policies, Privacy Policies, and
                Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cards-contact" id="Contact">
        <h2 className="title">Let&apos;s Work</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-phone" />
            </div>
            <div className="info">
              <h3>phone</h3>
              <p style={{ fontSize: 16, textAlign: "center" }}>+201117600220</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="info">
              <h3>Email</h3>
              <p style={{ fontSize: 16, textAlign: "center" }}>
                omairwaleed17@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sections;
