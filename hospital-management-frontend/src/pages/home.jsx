import "../css/Home.css";

function Home() {
  return (
    <>
      <section>
        <div className="container-fluid bg-primary and text-white ">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center text-center justify-content-center">
              
             <div>
              <h1>
                Discover Health: Find Your
                <br />
                Trusted Doctors Today
              </h1>
              <input type="text" class="form-control" placeholder="Search for Medical Procedures, hospitals" aria-label="Search for medical procedures or hospitals" fdprocessedid="n5rjpv"></input>
              </div>
              
              
                
             

            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div>
                <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/banner/banner-doctor.svg" alt="" />
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;