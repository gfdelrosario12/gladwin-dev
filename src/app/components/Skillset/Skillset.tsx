import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaWindows,
  FaAngleDoubleDown,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiCsharp, SiMysql, SiGooglecloud, SiMicrosoftazure, SiPostman } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { MdNoEncryptionGmailerrorred, MdOutlineSecurity } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";
import { PiNetworkSlashBold } from "react-icons/pi";
import { TbApi } from "react-icons/tb";
import { IoLogoElectron } from "react-icons/io5";

export default function Skillset() {
  return (
    <div className="content">
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(63,94,251,1)" />
            <stop offset="100%" stopColor="rgba(252,70,107,1)" />
          </linearGradient>
        </defs>
      </svg>

      <h1 className="text-center my-3 font-higher">Skillset</h1>
      <div className="skill-category">
        <div className="skill-section">
          <div className="my-1">
            <h2 className="fs-3 text-center my-3">Programming Languages</h2>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
              <div className="mx-3">
                <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                  <FaPython className="fs-1" style={{ fill: "url(#gradient)" }} />
                  <p className="fs-5 my-1 text-center lato-regular fw-bold">Python</p>
                </div>
              </div>
              <div className="mx-3">
                <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                  <RiJavascriptFill className="fs-1" style={{ fill: "url(#gradient)" }} />
                  <p className="fs-5 my-1 text-center lato-regular fw-bold">JavaScript</p>
                </div>
              </div>
              <div className="mx-3">
                <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                  <SiCsharp className="fs-1" style={{ fill: "url(#gradient)" }} />
                  <p className="fs-5 my-1 text-center lato-regular fw-bold">C#</p>
                </div>
              </div>
              <div className="mx-3">
                <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                  <FaJava className="fs-1" style={{ fill: "url(#gradient)" }} />
                  <p className="fs-5 my-1 text-center lato-regular fw-bold">Java</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-1">
            <h2 className="fs-3 text-center my-3">Web Development</h2>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <FaHtml5 className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">HTML</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <FaCss3 className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">CSS</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <RiJavascriptFill className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">JavaScript</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <FaReact className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">React</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <RiNextjsFill className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Next.js</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <IoLogoElectron  className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Electron.js</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <FaBootstrap className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Bootstrap</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <FaJava className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Java EE</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <BiLogoSpringBoot className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Spring Boot</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <MdNoEncryptionGmailerrorred className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Argon2</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <SiMysql className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">MySQL</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <TbApi className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Rest API</p>
              </div>
            </div>
          </div>
          <div className="my-1">
            <h2 className="fs-3 text-center my-3">Cloud Technologies</h2>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <FaAws className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">AWS</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <SiGooglecloud className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Google Cloud</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <SiMicrosoftazure className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Azure</p>
              </div>
            </div>
          </div>
          <div className="my-1">
            <h2 className="fs-3 text-center my-3">Other Technologies</h2>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <FaWindows className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Windows Active Directory</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <MdOutlineSecurity className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Cybersecurity</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <TbNetwork className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Ipv4</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <PiNetworkSlashBold className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Subnetting</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <FaGitAlt className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Git</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <FaGithub className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">GitHub</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <SiPostman className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Postman</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <FaDocker className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fs-2">
        <FaAngleDoubleDown />
        </div>
    </div>
  );
}
