import "./UpdateCreateDecisionForm.scss";
import { useEffect, useState } from "react";
import { useDecisionContext } from "../../contexts/decisionContext";

function UpdateCreateDecisionFormExperts() {
  const { decisionId } = useDecisionContext();

  const [updateExperts, setUpdateExperts] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/decisions/${decisionId}/experts`
    )
      .then((response) => response.json())
      .then((data) => setUpdateExperts(data))
      .catch((error) => console.error(error));
  }, [decisionId]);

  return (
    <article className="createDecisionForm__experts">
      <h2 className="createDecisionForm__titles">Expert·e·s</h2>
      <span className="createDecisionForm__content createDecisionForm__content--choiceBoxes">
        <ul className="createDecisionForm__list">
          {updateExperts.map((updateExpert) => (
            <li className="createDecisionForm__chosen">
              <img
                src={updateExpert.picture}
                alt="avatar de l'expert choisi"
                className="createDecisionForm__chosen--avatar"
              />
              <p className="createDecisionForm__chosen--fullname">
                {updateExpert.firstname} {updateExpert.lastname}
              </p>
            </li>
          ))}
        </ul>
        <form className="createDecisionForm__search">
          <input
            className="createDecisionForm__input"
            type="text"
            placeholder="Rechercher expert·e·s"
          />
          <button className="createDecisionForm__submit" type="submit">
            Choisir
          </button>
        </form>
      </span>
    </article>
  );
}

export default UpdateCreateDecisionFormExperts;
