import { useState } from "react";
import { User } from "../../models/User";

type propsUser = {
  userData: User | null;
};

const Header: React.FC<propsUser> = ({ userData }) => {
  const [hasUserClickedOnEditButton, setHasUserClickedOnEditButton] =
    useState(false);

  return (
    <div className="header">
      {userData ? (
        <h1>
          Welcome back
          <br />
          {!hasUserClickedOnEditButton ? (
            <p>{userData.fullname}</p>
          ) : (
            <div className="user-fullname">
              <label></label>
              <input type="text" id="fullname" />
            </div>
          )}
        </h1>
      ) : (
        <p>Erreur dans la récupération des données de l'utilisateur</p>
      )}
      {!hasUserClickedOnEditButton ? (
        <button
          className="edit-button"
          onClick={() =>
            setHasUserClickedOnEditButton(!hasUserClickedOnEditButton)
          }
        >
          Edit Name
        </button>
      ) : (
        <button
          className="edit-button"
          onClick={() =>
            setHasUserClickedOnEditButton(!hasUserClickedOnEditButton)
          }
        >
          Validate
        </button>
      )}
    </div>
  );
};

export default Header;
