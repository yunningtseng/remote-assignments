function App() {
  const [showNav, setShowNav] = React.useState(false);
  const [expandBox, setExpandBox] = React.useState(false);
  const [welcomeMessage, setWelcomeMessage] = React.useState("Welcome Message");

  const switchNavExpandHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  const switchBoxExpandHandler = () => {
    setExpandBox((prevState) => !prevState);
  };

  const setWelcomeMessageHandler = () => {
    setWelcomeMessage("Have a Good Time!");
  };

  return (
    <div>
      <div className="nav">
        <div className="nav__title">
          <p>Website Title/Logo</p>
        </div>
        {/* * pc nav */}
        <nav className="nav--pc">
          <ul>
            <li>
              <a href="#item1">Item 1</a>
            </li>
            <li>
              <a href="#item2">Item 2</a>
            </li>
            <li>
              <a href="#item3">Item 3</a>
            </li>
            <li>
              <a href="#item4">Item 4</a>
            </li>
          </ul>
        </nav>

        {/* * mobile hamburger */}
        <div className="nav--mobile">
          <button
            type="button"
            className="nav__btn"
            onClick={switchNavExpandHandler}
          >
            <img
              id="nav__image"
              src={`img/${showNav ? "x" : "menu"}.png`}
              className="nav__btn--mobile"
              alt=""
            />
          </button>
        </div>

        {/* * mobile nav */}
        {showNav && (
          <div className="nav__item--mobile">
            <ul>
              <li>
                <a href="#item1">Item 1</a>
              </li>
              <li>
                <a href="#item2">Item 2</a>
              </li>
              <li>
                <a href="#item3">Item 3</a>
              </li>
              <li>
                <a href="#item4">Item 4</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* * context box */}
      <div className="context">
        <div
          id="context__message"
          className="context__message"
          onClick={setWelcomeMessageHandler}
        >
          {welcomeMessage}
        </div>
      </div>
      <div className="context__section">
        <h2>Section Title</h2>
      </div>
      <div className="context__container">
        <div className="context__container__content">
          <div className="context__contentBox">
            <p>Content Box 1</p>
          </div>

          <div className="context__contentBox">
            <p>Content Box 2</p>
          </div>
        </div>

        <div className="context__container__content">
          <div className="context__contentBox">
            <p>Content Box 3</p>
          </div>

          <div className="context__contentBox">
            <p>Content Box 4</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="context__btn"
            onClick={switchBoxExpandHandler}
          >
            Call to Action
          </button>
        </div>
      </div>

      {/* * click 展開 second section */}
      {expandBox && (
        <div className="context__section2">
          <div className="context__container">
            <div className="context__container__content">
              <div className="context__contentBox">
                <p>Content Box 5</p>
              </div>

              <div className="context__contentBox">
                <p>Content Box 6</p>
              </div>
            </div>

            <div className="context__container__content">
              <div className="context__contentBox">
                <p>Content Box 7</p>
              </div>

              <div className="context__contentBox">
                <p>Content Box 8</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
