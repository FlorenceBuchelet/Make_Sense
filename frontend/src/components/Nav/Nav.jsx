import { useState } from "react";
import "./Nav.scss";

function Nav() {
  const [edit, setEdit] = useState(false);
  const [help, setHelp] = useState(false);

  const handleMove = () => {
    setHelp(!help);
  };
  const handleclick = () => {
    setEdit(!edit);
  };

  return (
    <nav className="nav__nav">
      <a href="*" className="nav__logo">
        <img
          className="nav__logo--img"
          src=".\src\assets\logo-makesense-dark.png"
          alt="Make Sense logo"
        />
      </a>
      <ul className="nav__items">
        <ul className="nav__links">
          <li className="nav__list">
            <a className="nav__links--user" type="button" href="*">
              Nouvel utilisateur
            </a>
          </li>
          <li className="nav__list">
            <a className="nav__links--decision" type="button" href="*">
              Nouvelle décision
            </a>
          </li>
        </ul>
        <img
          className="nav__avatar"
          alt="user avatar"
          src="https://placehold.co/600x400"
          onClick={handleclick}
          role="presentation"
        />
        {edit ? (
          <>
            <aside className="buble_profil" />
            <section className="buble_avatar">
              <ul className="buble_list">
                <li>Firstname</li>
                <li>Lastname</li>
                <li>Mail</li>
                <li>Location</li>
                <li>Position</li>
                <li
                  onMouseEnter={handleMove}
                  onMouseLeave={handleMove}
                  className="buble_hover"
                >
                  ?
                </li>
                {help ? (
                  <p className="buble_help">
                    Une erreur ? Contactez l'administrateur.
                  </p>
                ) : null}
                <li id="buble_logout">Log out</li>
              </ul>
            </section>
          </>
        ) : null}
      </ul>
    </nav>
  );
}

export default Nav;
