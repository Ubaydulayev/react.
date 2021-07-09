import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '../../react-new-js/node_modules/@fortawesome/react-fontawesome';
import {faStar} from '../../react-new-js/node_modules/@fortawesome/free-solid-svg-icons'
import { faPlay } from '../../react-new-js/node_modules/@fortawesome/free-solid-svg-icons';
import rasm1 from "../src/img/user.1.png"
import rasm2 from "../src/img/user.2.png"
import vector from "../src/img/Vector.png"
import vector2 from "../src/img/Vector-2.png"
import vector3 from "../src/img/Vector-3.png"
import vector4 from "../src/img/Vector-2 — копия.png"
import vector5 from "../src/img/Vector-3 — копия.png"
import offstar from "../src/img/Vector 2.png"
import video from "../src/img/video.1.jpg"
import yes from "../src/img/icn-circle circle-xs secondary-color-1.png"
import no from "../src/img/icn-circle circle-xs mute.png"
import call from "../src/img/Vector — копия.png"
import local from "../src/img/Vector-2 — копия 2.png"
import cmc from "../src/img/Vector-3 — копия 2.png"


function App() {
  return (
    <div className="App">
      <div className="Head">
        <div className="container">
          <div className="navbar d-flex justify-content-between align-items-center">
            <div className="left">
              <h3 className="lnk text-white">Algorismic</h3>
            </div>
            <div className="center d-flex">
              <a className="btn-text link text-white">Home</a>
              <a className="btn-text link text-white">Product</a>
              <a className="btn-text link text-white">Pricing</a>
              <a className="btn-text link text-white">Contact</a>
            </div>
            <div className="right lnk">
                <a className="btn-text">Login</a>
                <button className="btn btn-primary">
                  Become a member
                </button>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="main-content d-flex align-items-center justify-content-center">
              <h1 className="mrg">Creating a Beautifull<br/>& Usefull Solutitons</h1>
              <h4 className="mng">We know how large objects will act, but things on a<br/>small scale just do not act that way.</h4>
              <div className="cta">
                <button className="btn btn-primary btn-outline">Get Quote Now</button>
                <button className="btn btn-outline-light">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footers">
        <div>
          <div className="container">
            <div className="row">
              <div className="main">
                <h2 className="prg">
                  Better Strategy With<br/>Quality Business
                </h2>
                <p className="text-secondary text-center">Problems trying to resolve the conflict between<br/>
                  the two major realms of Classical physics: Newtonian mechanics
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card-item">
                  <div className="flex-row d-flex">
                    <div className="icn">
                      <img src={ vector } alt="rasm" className="icon" />
                    </div>
                    <div className="text justify-content-center align-items-center">
                      <h5 className="text7">Investment Trading</h5>
                      <p>the quick fox jumps over the<br/>
                        lazy dog
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-item">
                  <div className="flex-row d-flex">
                  <div className="icn">
                    <img src={ vector } alt="rasm" className="icon" />
                    </div>
                    <div className="text">
                      <h5 className="text7">Raising Funds</h5>
                      <p>the quick fox jumps over the<br/>lazy dog
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-item">
                  <div className="flex-row d-flex">
                  <div className="icn">
                    <img src={ vector } alt="rasm" className="icon" /></div>
                    <div className="text">
                      <h5 className="text7">Financial Analysis</h5>
                      <p>the quick fox jumps over the<br/>
                        lazy dog
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card-item">
                  <div className="flex-row d-flex">
                  <div className="icn">
                    <img src={ vector } alt="rasm" className="icon" /></div>
                    <div className="text">
                      <h5 className="text7">Taxation Planning</h5>
                      <p>the quick fox jumps over the<br/>
                        lazy dog
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-item">
                  <div className="flex-row d-flex">
                  <div className="icn">
                    <img src={ vector } alt="rasm" className="icon" /></div>
                    <div className="text">
                      <h5 className="text7">Save money and time</h5>
                      <p>the quick fox jumps over the<br/>lazy dog
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-item">
                  <div className="flex-row d-flex">
                  <div className="icn">
                    <img src={ vector } alt="rasm" className="icon" /></div>
                    <div className="text">
                      <h5 className="text7">Outsourced Consulting</h5>
                      <p>the quick fox jumps over the<br/>
                        lazy dog
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Testimonials">
        <div className="container">
          <div className="row">
            <div className="mn-cnt">
              <h2 className="text7 prg text-white">
              What Clients Say
              </h2>
              <p className="p">Problems trying to resolve the conflict between<br/>
                the two major realms of Classical physics: Newtonian mechanics 
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card-item1 d-flex">
                <div className="media">
                  <img src={ rasm1 } alt="rasm" className="rasm" />
                </div>
                <div className="card-content">
                  <div className="div">
                    <h3 className="text-black-50">Regina Miles</h3>
                    <h6 className="text-secondary">Designer</h6>
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <img src={ offstar } alt="o`chiq yulduz" className="offstar" />
                    <p className="text-secondary">This proved to be impossible using<br/>
                      concepts of space and time. Einstein<br/>
                      new view of time first and then
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-item1 d-flex">
                <div className="media">
                  <img src={ rasm2 } alt="rasm" className="rasm" />
                </div>
                <div className="card-content">
                  <div className="div">
                    <h3 className="text-black-50">Regina Miles</h3>
                    <h6 className="text-secondary">Designer</h6>
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <img src={ offstar } alt="o`chiq yulduz" className="offstar" />
                    <p className="text-secondary">This proved to be impossible using<br/>
                      concepts of space and time. Einstein<br/>
                      new view of time first and then
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="About-2">
        <div className="container">
          <div className="row">
            <div className="mn-cnt">
              <h2 className="text-white text7 prg">What Clients Say</h2>
              <p className="p">Problems trying to resolve the conflict between<br/>
                the two major realms of Classical physics: Newtonian mechanics<br/>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="card-item2">
                <div className="media">
                  <img src={ video } alt="video" className="video"/>
                </div>
                <button className="btn btn-primary play">
                  <FontAwesomeIcon icon={ faPlay } />
                </button>
              </div>
            </div>
            <div className="col-md-4 cmd">
              <div className="txt">
                <h3 className="text-white text7">
                  Most trusted in our field
                </h3>
                <p>
                Most calendars are designed for teams. Slate<br/>
                is designed for freelancers who want a<br/>
                simple way to plan their schedule.
                </p>
              </div>
              <div className="card-items">
                <div className="flex-row d-flex">
                  <div className="icn">
                    <img src={ vector2 } className="vector2 position-absolute" />
                    <img src={ vector3 } className="vector3 position-relative" />
                  </div>
                  <div className="lft">
                    <h5>the quick fox jumps over the lazy<br/>
                      dog
                    </h5>
                    <h6>Things on a very small scale ...</h6>
                  </div>
                </div>
              </div>
              <br/>
              <div className="card-items">
                <div className="flex-row d-flex">
                  <div className="icn">
                    <img src={ vector4 } className="vector4 position-absolute" />
                    <img src={ vector5 } className="vector5 position-relative" />
                  </div>
                  <div>
                    <h5>the quick fox jumps over the lazy<br/>
                      dog
                    </h5>
                    <h6>Things on a very small scale ...</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Pricing">
        <div className="container">
          <div className="row">
            <div className="mn-cnt">
              <h2 className="text-white text7 prg">Pricing</h2>
              <p className="p">Problems trying to resolve the conflict between<br/>
                the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <div className="pricing-style">
                <div className="card-item bagr">
                  <h3 className="text-dark text8">FREE</h3>
                  <p className="text-dark pa text-center">Organize across all<br/>
                    apps by hand
                  </p>
                  <h2 className="text-primary text-center">0$</h2>
                  <p className="text-primary text-center pa">Per Month</p>
                  <button className="btn btn-primary try">Try for Free</button>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={yes} className="no" />
                   <h6 className="text-dark yes">Unlimited product updates</h6>
                </div>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={yes} className="no" />
                   <h6 className="text-dark yes">Unlimited product updates</h6>
                </div>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={yes} className="no" />
                   <h6 className="text-dark yes">Unlimited product updates</h6>
                </div>
                <div className="ball d-flex align-items-centerjustify-content-center">
                   <img src={no} className="no" />
                   <h6 className="text-dark yes">1GB Cloud storage</h6>
                </div>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={no} className="no" />
                   <h6 className="text-dark yes">Email and community support</h6>
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
                <h2 className="circle">New</h2>
              <div className="pricing-style">
                <div className="card-item bagr">
                  <h3 className="text-dark text8">Silver</h3>
                  <p className="text-dark pa text-center">Organize across all<br/>
                    apps by hand
                  </p>
                  <h2 className="text-primary text-center">9.99$</h2>
                  <p className="text-primary text-center pa">Per Month</p>
                  <button className="btn btn-primary try">Try for Free</button>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={yes} className="no" />
                   <h6 className="text-dark yes">Unlimited product updates</h6>
                </div>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={yes} className="no" />
                   <h6 className="text-dark yes">Unlimited product updates</h6>
                </div>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={yes} className="no" />
                   <h6 className="text-dark yes">Unlimited product updates</h6>
                </div>
                <div className="ball d-flex align-items-centerjustify-content-center">
                   <img src={no} className="no" />
                   <h6 className="text-dark yes">1GB Cloud storage</h6>
                </div>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={no} className="no" />
                   <h6 className="text-dark yes">Email and community support</h6>
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-style">
                <div className="card-item bagr">
                  <h3 className="text-dark text8">GOLD</h3>
                  <p className="text-dark pa text-center">Organize across all<br/>
                    apps by hand
                  </p>
                  <h2 className="text-primary text-center">19.99$</h2>
                  <p className="text-primary text-center pa">Per Month</p>
                  <button className="btn btn-primary try">Try for Free</button>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={yes} className="no" />
                   <h6 className="text-dark yes">Unlimited product updates</h6>
                </div>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={yes} className="no" />
                   <h6 className="text-dark yes">Unlimited product updates</h6>
                </div>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={yes} className="no" />
                   <h6 className="text-dark yes">Unlimited product updates</h6>
                </div>
                <div className="ball d-flex align-items-centerjustify-content-center">
                   <img src={no} className="no" />
                   <h6 className="text-dark yes">1GB Cloud storage</h6>
                </div>
                <div className="ball d-flex align-items-center justify-content-center">
                   <img src={no} className="no" />
                   <h6 className="text-dark yes">Email and community support</h6>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Contact">
        <div className="container">
          <div className="row">
            <h2 className="text-center text-white prg">Get In Touch</h2>
            <p className="p">Problems trying to resolve the conflict between<br/>
              the two major realms of Classical physics: Newtonian mechanics 
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 cess">
              <div className="card-itens">
                <img src={ call } className="call" />
                <p className="text-dark txtsize">georgia.young@example.com</p>
                <p className="text-dark txtsize">georgia.young@ple.com</p>
                <h3 className="txtsiz text-dark">Get Support</h3>
                <button className="btn btn-primary buton">Submit Request</button>
              </div>
            </div>
            <div className="col-md-4 ces">
              <div className="card-itens">
                <img src={ local } className="local" />
                <p className="text-dark txtsize">georgia.young@example.com</p>
                <p className="text-dark txtsize">georgia.young@ple.com</p>
                <h3 className="txtsiz text-dark">Get Support</h3>
                <button className="btn btn-primary buton">Submit Request</button>
              </div>
            </div>
            <div className="col-md-4 cess">
              <div className="card-itens">
                <img src={ cmc } className="cmc" />
                <p className="text-dark txtsize">georgia.young@example.com</p>
                <p className="text-dark txtsize">georgia.young@ple.com</p>
                <h3 className="txtsiz text-dark">Get Support</h3>
                <button className="btn btn-primary buton">Submit Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
