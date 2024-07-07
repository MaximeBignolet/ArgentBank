import { useDispatch, useSelector } from "react-redux";
import {
  fetchedUser,
  udpateFirstname,
  updateLastname,
} from "../../store/slices/UserSlice";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { editUserProfile } from "../../services/users/UserServices";

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const { firstName, lastName } = useSelector((state: RootState) => state.user);
  const [toggleEditUser, setToggleEditUser] = useState(false);
  const [newfirstname, setNewFirstName] = useState(firstName);
  const [newLastname, setNewLastName] = useState(lastName);

  useEffect(() => {
    setNewFirstName(firstName);
    setNewLastName(lastName);
  }, [firstName, lastName]);

  const  handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.id === "firstName") {
      setNewFirstName(e.target.value);
    } else {
      setNewLastName(e.target.value);
    }
  }

  const handleEditFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>  {
    e.preventDefault();
    dispatch(udpateFirstname(newfirstname));
    dispatch(updateLastname(newLastname));
    editUserProfile(newfirstname, newLastname);
    setToggleEditUser(false);
  }

  const handleCancel = () => {
    setToggleEditUser(false);
    setNewFirstName(firstName);
    setNewLastName(lastName);
  }

  useEffect(() => {
    dispatch(fetchedUser());
  }, [dispatch]);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {!toggleEditUser ? (
          <p>
            {firstName} {lastName}
          </p>
        ) : (
          <form onSubmit={handleEditFormSubmit}>
            <div className="user-edit-form">
              <div>
                <label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={newfirstname}
                    className="user-edit-input"
                    onChange={handleEditFormChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={newLastname}
                    className="user-edit-input"
                    onChange={handleEditFormChange}
                  />
                </label>
              </div>
            </div>
            <input type="submit" value="Save" className="edit-button" />
            <button
              type="button"
              className="edit-button cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </form>
        )}
      </h1>
      {!toggleEditUser ? (
        <button
          className="edit-button"
          onClick={() => setToggleEditUser(!toggleEditUser)}
        >
          Edit Name
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
