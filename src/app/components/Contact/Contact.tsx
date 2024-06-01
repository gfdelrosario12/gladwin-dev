import { SiGmail } from "react-icons/si";
import { FaAngleDoubleUp, FaLinkedin } from "react-icons/fa";

export default function Contac() {
    return (
        <div className="content">
          <h1 className="text-center my-3 font-higher">Reach Me At</h1>
          <div className="d-flex flex-row flex-wrap justify-content-center align-items-center my-3">
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <SiGmail className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">GMAIL</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-3">
                <FaLinkedin className="fs-1" style={{ fill: "url(#gradient)" }} />
                <p className="fs-5 my-1 text-center lato-regular fw-bold">LinkedIn</p>
              </div>
            </div>
            <div className="fs-2 my-3">
        <FaAngleDoubleUp />
        </div>
        </div>
      );
}