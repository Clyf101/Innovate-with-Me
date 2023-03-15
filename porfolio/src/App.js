import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <div class="d-flex flex-column">
              <a href="#" class="btn btn-primary mb-1">Contact Me</a>
              <a href="#" class="btn btn-primary mb-1">Work</a>
              <a href="#" class="btn btn-primary mb-1">Resume</a>
            </div>
          </div>
          <div className="col-10 main">
            <h3 className="text-center">Clyford Portfolio</h3>
            <h4>About me</h4>
            <article><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec fringilla turpis. Sed maximus leo nec massa auctor venenatis. Fusce dapibus nibh in ex rhoncus, vel feugiat nibh pulvinar. Nam a tellus nulla. Nam sit amet augue aliquam, venenatis velit et, ultrices nisi.</p></article>
            <h5>Projects</h5>
            <a href="https://hezakai.github.io/CGD/" className="text-dark">
              <article>
                <div className="card">
                  <img src="img_avatar.png" alt="Pic1" className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title"><b>Project1</b></h4>
                    <p className="card-text">Cheap game deals</p>
                  </div>
                </div>
              </article>
            </a>
            <a href="#" className="text-dark">
              <article>
                <div className="card">
                  <img src="img_avatar.png" alt="Pic2" className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title"><b>Project2</b></h4>
                    <p className="card-text">Coming soon</p>
                  </div>
                </div>
              </article>
            </a>
            <a href="#" className="text-dark">
              <article>
                <div className="card">
                  <img src="img_avatar.png" alt="Pic3" className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title"><b>Project3</b></h4>
                    <p className="card-text">Coming soon</p>
                  </div>
                </div>
              </article>
            </a>
            <section className="info">
              <footer>
                <ul>
                  <li><b>PhoneNumber:</b> (555) 555-5555</li>
                  <li><b>Email:</b> myemail@gmail.com</li>
                  <li><b>Github:</b> github.com/myusername</li>
                </ul>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
