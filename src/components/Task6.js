import React, { Component } from 'react'
import "./bootstrap.css"
import "./Task6.css"
import {FaCode, FaGithub, FaInstagram, FaLinkedin, FaTelegram} from "react-icons/fa";
class Task6 extends Component {
  render() {
    return (
    <body className="body" oncontextmenu="return false" style={{backgroundColor: '#f7f7f7'}}>
    <div className="container">
      <div className="row shadow-lg sticky-top bg-dark rounded">
        <div className="col-12">
          <nav className="navbar navbar-expand">
              <div className="col-2">
                <a href="#" className="nav-link fs-3 fw-bold text-white">Guna Nalam</a>
              </div>
              <div className="offset-6 col-4">
                <ul className="ps-5 navbar-nav mr-auto">
                  <li className="new-item">
                    <a href="#home-custom" className="nav-link text-white fs-5">Home</a>
                  </li>
                  <li className="new-item">
                    <a href="#about-custom" className="nav-link text-white fs-5">About</a>
                  </li>
                  <li className="new-item">
                    <a href="#skills-custom1" className="nav-link text-white fs-5">Skills</a>
                  </li>
                  <li className="new-item">
                    <a href="#education-details" className="nav-link text-white fs-5">Education</a>
                  </li>
                  <li className="new-item">
                    <a href="#contact-us" className="nav-link text-white fs-5">Contact</a>
                  </li>
                </ul>
              </div>
          </nav>
        </div>
      </div>
       <div className="row home-custom" id="home-custom">
        <div className="col-6 user-content">
          <h1 className="fw-bold">
            Hi There<br />
            I'm Nalam <span style={{color: 'orange'}}>Guna</span> Sri Krishna
          </h1>
          <p className="fs-4 fw-bold">
            I Am a <span style={{color: '#940808'}}>Tech Enthusiast</span>
          </p>
          <div className="row">
            <div className="col-6 mt-2">
              <a href="https://www.linkedin.com/in/guna-nalam-11ab27290/" target="_blank" className="fs-2"><FaLinkedin /></a>
              <a href="https://github.com/GunaNalam" target="_blank" className="fs-2 ms-2"><FaGithub /></a>
              <a href="#home-custom" className="fs-2 ms-2"><FaTelegram /></a>
              <a href="https://instagram.com/guna_nalam/" target="_blank" className="fs-2 ms-2"><FaInstagram /></a>
              <a href="https://leetcode.com/guna_nalam/" target="_blank" className="fs-2 ms-2"><FaCode></FaCode></a>
            </div>
          </div>
        </div>
        <div className="offset-2 col-4">
          <img src={"http://rb.gy/3vlxu"} alt="Image" className="img-fluid rounded-circle" width="500rem" height="500rem" />
        </div>
      </div>
       <div className="row about-custom  pt-4 pb-5 mb-5 " id="about-custom">
        <div className="col-12 pt-4 mt-4 text-center fs-2">
          <i className="fa-solid fa-user"></i>
          <span>About Me</span>
        </div>
        <div className="offset-1 col-4 pt-4">
          <img src={"http://rb.gy/k001t"} alt="Photo" className="img-fluid rounded-circle" height="10rem" width="500rem" />
        </div>
        <div className="offset-1 pt-4 fs-5 col-5 mt-5 text-start">
          Cognizant and resourceful scholar adept in an array of cutting-edge
          programming languages, demonstrating a remarkable mastery of the craft
          Eagerly pursuing opportunities to garner invaluable experience and
          profound expertise in the field of work.
          Consistently lauded for unwavering dedication and a relentless
          commitment to excellence.
          Exhibiting astute problem-solving prowess and a formidable aptitude for
          analytical thinking.
          Seasoned in fostering collaborative synergy and adeptly overseeing team
          dynamics to achieve exceptional outcomes.
          Demonstrates exceptional acumen in problem-solving and exercises
          razor-sharp critical thinking skills.
          Exhibits a remarkable capacity to deftly maneuver intricate and nuanced
          concepts.
        </div>
        <div className="offset-6 mt-2 fs-5 col-2 text-start">
          <a className="btn btn-primary" href="">Resume <i className="fa fa-angle-right"></i></a>
        </div>
      </div>
       <div id="skills-custom1">
        <div className="row pb-4"></div>
      <div className="row skills-custom mt-5 pt-5 pb-5 mb-5">
        <div className="col-12 text-white text-center pb-3 fs-2">
          <i className="fa-solid fa-laptop-code"></i>
          <span>Skills and <span className="text-warning">Abilities</span></span>
        </div>
        <div className="offset-1 col-10 rounded mb-4" style={{backgroundColor: '#33026d'}}>
            <div className="row my-4">
                <div className="ms-5 col-2 bg-dark text-white text-center rounded">
                    <img src="https://rb.gy/8r7d1" alt="C++" className="img-fluid rounded mb-3 mt-3" width="100rem" height="100rem" />
                    <div className="fs-4 fw-bold">C++</div>
                </div>
                <div className="offset-1 col-2 bg-dark text-white text-center rounded">
                    <img src="https://rb.gy/xhl6n" alt="C" className="img-fluid rounded mb-3 mt-3" width="100rem" height="100rem" />
                    <div className="fs-4 fw-bold">C</div>
                </div>
                <div className="offset-1 col-2 bg-dark text-white text-center rounded">
                    <img src="http://rb.gy/tsd0j" alt="Java" className="img-fluid rounded mb-3 mt-3" width="100rem" height="100rem" />
                    <div className="fs-4 fw-bold pt-5">Java</div>
                </div>
                <div className="offset-1 col-2 bg-dark text-white text-center rounded">
                    <img src="http://rb.gy/htf0f" alt="SQL" className="img-fluid rounded mb-3 mt-3" width="100rem" height="100rem" />
                    <div className="fs-4 fw-bold">SQL</div>
                </div>
            </div>
            <div className="row my-4">
                <div className="ms-5 col-2 bg-dark text-white text-center rounded">
                    <img src="http://rb.gy/zgi2o" alt="JavaScript" className="img-fluid rounded mb-3 mt-3" width="100rem" height="100rem" />
                    <div className="fs-4 fw-bold">JavaScript</div>
                </div>
                <div className="offset-1 col-2 bg-dark text-white text-center rounded">
                    <img src="http://rb.gy/yfk6m" alt="HTML" className="img-fluid rounded mb-3 mt-3" width="100rem" height="100rem" />
                    <div className="fs-4 fw-bold">HTML</div>
                </div>
                <div className="offset-1 col-2 bg-dark text-white text-center rounded">
                    <img src="http://rb.gy/kyw12" alt="CSS" className="img-fluid rounded mb-3 mt-3" width="100rem" height="70rem" />
                    <div className="fs-4 fw-bold">CSS</div>
                </div>
                <div className="offset-1 col-2 bg-dark text-white text-center rounded">
                    <img src="http://rb.gy/8o5ht" alt="Bootstrap" className="img-fluid rounded mb-3 mt-3" width="100rem" height="100rem" />
                    <div className="fs-4 fw-bold pt-4">Bootstrap</div>
                </div>
             </div>
             <div className="row my-4">
                <div className="ms-5 col-2 bg-dark text-white text-center rounded">
                    <img src="http://rb.gy/oy8hr" alt="ReactJs" className="img-fluid rounded mb-3 mt-3" width="100rem" height="100rem" />
                    <div className="fs-4 fw-bold">ReactJs</div>
                </div>
                <div className="offset-1 col-2 bg-dark text-white text-center rounded">
                    <img src="http://rb.gy/ccjh6" alt="Python" className="img-fluid rounded mb-3 mt-3" width="100rem" height="100rem" />
                    <div className="fs-4 fw-bold">Python</div>
                </div>
             </div>
            </div>
        </div>
    </div>
        <div className="row mt-4" id="education-details">
            <div className="col-12 pt-5 mt-5 rounded shadow-lg mb-3 text-start">
                <div className="row">
                    <div className="col-4">
                        <img src="http://rb.gy/rnheg" alt="Collage" width="100%" height="200rem" />
                    </div>
                    <div className="ms-2 col-7">
                        <div className="text-secondary mb-2 fs-4">
                            VELLORE INSTITUTE OF TECHNOLOGY<span className="ps-5">Vellore, Tamil Nadu</span>
                        </div>
                        <div className="text-success fs-5 mb-2">Bachelor of Technology<span className="ps-5">2021-2025</span>
                        </div>
                        <div className="text-success fs-5">Majors in Computer Science and Engineering </div>
                    </div>
                </div>

            </div>
            <div className="col-12 rounded shadow-lg mb-3 text-start">
                <div className="row">
                    <div className="col-4">
                        <img src="http://rb.gy/t0e6u" alt="Collage" width="100%" height="200rem" />
                    </div>
                    <div className="ms-2 col-7">
                        <div className="text-secondary mb-2 fs-4">FIITJEE JUNIOR COLLEGE<span className="ps-5">Vijayawada, Andhra Pradesh</span></div>
                        <div className="text-success fs-5">Intermediate/ HSC<span className="ps-5">2019-2021</span></div>
                    </div>
                </div>
                
            </div>
            <div className="col-12 rounded shadow-lg mb-3 text-start">
                <div className="row">
                    <div className="col-4">
                        <img src="http://rb.gy/zss0l" alt="Collage" width="100%" height="200rem" />
                    </div>
                    <div className="ms-2 col-7">
                        <div className="text-secondary mb-2 fs-4">NSM PUBLIC SCHOOL<span className="ps-5">Vijayawada, Andhra Pradesh</span></div>
                        <div className="text-success fs-5">10th Grade/ SSC<span className="ps-5">2008-2019</span></div>

                    </div>
                </div>
            </div>
        </div> 
    </div>
  </body>
    )
  }
}

export default Task6
