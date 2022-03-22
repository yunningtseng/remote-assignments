import { Fragment } from "react";
function Home() {
  return (
    <Fragment>
      <div className="d-flex bg-primary home">
        <div className="home__message">Welcome Message</div>
      </div>
      <div className="d-flex home__section">
        <h2>Section Title</h2>
      </div>
      <div className="home__container">
        <div className="home__container__content">
          <div className="bg-secondary home__contentBox">
            <p style={{ padding: "10px" }}>Content Box 1</p>
          </div>

          <div className="bg-secondary home__contentBox">
            <p style={{ padding: "10px" }}>Content Box 2</p>
          </div>
        </div>

        <div className="home__container__content">
          <div className="bg-secondary home__contentBox">
            <p style={{ padding: "10px" }}>Content Box 3</p>
          </div>

          <div className="bg-secondary home__contentBox">
            <p style={{ padding: "10px" }}>Content Box 4</p>
          </div>
        </div>
        <div className="mg-10">
          <button type="button" className="d-flex bg-primary home__btn">
            Call to Action
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
