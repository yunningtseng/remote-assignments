import { Fragment, useState } from "react";

function Navigation() {
  const [navExpand, setNavExpand] = useState(false);

  const switchNavExpandHandler = () => {
    setNavExpand((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div className="d-flex bg-light nav">
        <div className="d-flex nav__title">
          <p>Website Title/Logo</p>
        </div>
        {/* NOTE pc */}
        <nav className="nav__pc">
          <ul className="d-flex">
            <li className="mg-10">
              <a className="nav__item--hover" href="#item1">
                Item 1
              </a>
            </li>
            <li className="mg-10">
              <a className="nav__item--hover" href="#item2">
                Item 2
              </a>
            </li>
            <li className="mg-10">
              <a className="nav__item--hover" href="#item3">
                Item 3
              </a>
            </li>
            <li className="mg-10">
              <a className="nav__item--hover" href="#item4">
                Item 4
              </a>
            </li>
          </ul>
        </nav>

        {/* NOTE mobile hamburger */}
        <div className="nav__mobile">
          <button
            type="button"
            className="nav__icon"
            onClick={switchNavExpandHandler}
          >
            <span className="material-icons-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* NOTE mobile nav */}
      <nav>
        {navExpand && (
          <ul className="nav__item__mobile">
            <li className="mg-10">
              <a className="nav__item--hover" href="#item1">
                Item 1
              </a>
            </li>
            <li className="mg-10">
              <a className="nav__item--hover" href="#item2">
                Item 2
              </a>
            </li>
            <li className="mg-10">
              <a className="nav__item--hover" href="#item3">
                Item 3
              </a>
            </li>
            <li className="mg-10">
              <a className="nav__item--hover" href="#item4">
                Item 4
              </a>
            </li>
          </ul>
        )}
      </nav>
    </Fragment>
  );
}

export default Navigation;
