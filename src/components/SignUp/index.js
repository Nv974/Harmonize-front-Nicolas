import React, { useState } from "react";
import PropTypes from "prop-types";
import signUpImg from "../../assets/img/signup/signup.jpeg";
import { editUser } from "../../actions/users";

import "./sign-up.scss";

// TODO Gérer message après inscription et message d'erreur
// Passer par un Field universel

const SignUp = ({
  userName,
  editedUserName,
  setNewUserName,
  editUserName,
  userMail,
  setNewUserMail,
  userPassword,
  setNewUserPassword,
  userDescription,
  setNewUserDescription,
  setNewUserProfil,
  addUser,
  editUser,
  token,
}) => {
  const [confirmation, setConfirmation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSetName = (event) => {
    const newUserName = event.target.value;
    setNewUserName(newUserName);
  };

  const handleEditName = (event) => {
    const newName = event.target.value;
    editUserName(newName);
  };

  const handleSetMail = (event) => {
    const newUserMail = event.target.value;
    setNewUserMail(newUserMail);
  };

  const handleSetConfirmation = (event) => {
    const value = event.target.value;
    setConfirmation(value);
  };

  const handleSetPassword = (event) => {
    const newUserPassword = event.target.value;
    setNewUserPassword(newUserPassword);
  };

  const handleSetDescription = (event) => {
    const newUserDescription = event.target.value;
    setNewUserDescription(newUserDescription);
  };

  const handleSetProfil = (event) => {
    const newUserProfil = event.target.value;
    setNewUserProfil(newUserProfil);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    (confirmation === userPassword) & (userPassword.length > 7)
      ? token
        ? editUser()
        : addUser()
      : handleError();
  };

  const handleError = () => {
    if (confirmation !== userPassword) {
      setErrorMessage("les mots de passe ne sont pas identiques");
    } else if (userPassword.length < 8) {
      setErrorMessage("le mot de passe doit contenir au moins 8 caractères");
    }

    const infos = document.querySelector(".sign-up__form__confirm-infos");
    infos.textContent = errorMessage;
  };

  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <img src={signUpImg}></img>
        <form className="sign-up__form" onSubmit={handleSubmit}>
          <h2 className="sign-up__form__title">
            {token ? "Modifier mes informations" : "INSCRIPTION"}
          </h2>
          <label htmlFor="name" className="sign-up__form__label-name">
            {" "}
            Nom d'utilisateur{" "}
          </label>
          {token ? (
            <input
              className="sign-up__form__name"
              type="text"
              name="name"
              placeholder="Jimi Hendrix"
              value={editedUserName}
              onChange={handleEditName}
            />
          ) : (
            <input
              className="sign-up__form__name"
              type="text"
              name="name"
              placeholder="Jimi Hendrix"
              value={userName}
              onChange={handleSetName}
            />
          )}
          <label htmlFor="email" className="sign-up__form__label-email">
            {" "}
            Adresse e-mail{" "}
          </label>
          <input
            className="sign-up__form__email"
            type="email"
            name="email"
            placeholder="jimihendrix@harmonize.fr"
            value={userMail}
            onChange={handleSetMail}
          />
          {!token && (
            <>
              <label htmlFor="password"> Mot de passe </label>
              <input
                className="sign-up__form__password"
                type="password"
                name="password"
                placeholder="entrez votre mot de passe"
                value={userPassword}
                onChange={handleSetPassword}
              />
            </>
          )}
          <input
            className="sign-up__form__confirmation"
            type="password"
            name="confirmation "
            placeholder="confirmez votre mot de passe"
            onChange={handleSetConfirmation}
            value={confirmation}
          />
          {confirmation && (
            <p className="sign-up__form__confirm-infos">{errorMessage}</p>
          )}
          <label htmlFor="email" className="sign-up__form__label-description">
            {" "}
            Description{" "}
          </label>
          <input
            type="textarea"
            className="sign-up__form__description"
            name="description"
            value={userDescription}
            onChange={handleSetDescription}
          />
          <h3>Profil</h3>
          <div className="sign-up__form__profil">
            <input
              className="sign-up__form__profil--musician"
              type="radio"
              name="profil"
              onChange={handleSetProfil}
              value="1"
              id="musician"
            />
            <label htmlFor="musician"> Musicien </label>
            <input
              className="sign-up__form__profil--technician"
              type="radio"
              name="profil"
              onChange={handleSetProfil}
              value="2"
              id="technician"
            />
            <label htmlFor="technician"> Technicien </label>
            <input
              className="sign-up__form__profil--both"
              type="radio"
              name="profil"
              onChange={handleSetProfil}
              value="3"
              id="both"
            />
            <label htmlFor="both"> Musicien et Technicien </label>
          </div>
          <button className="sign-up__form__submit" type="submit">
            {token ? "Modifier mon profil" : "S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
};
SignUp.propTypes = {
  userName: PropTypes.string.isRequired,
  setNewUserName: PropTypes.func.isRequired,
  userMail: PropTypes.string.isRequired,
  setNewUserMail: PropTypes.func.isRequired,
  userPassword: PropTypes.string.isRequired,
  setNewUserPassword: PropTypes.func.isRequired,
  userDescription: PropTypes.string.isRequired,
  setNewUserDescription: PropTypes.func.isRequired,
  setNewUserProfil: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
};

export default SignUp;
