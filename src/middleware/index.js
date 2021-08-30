import axios from 'axios';

import {SEND_CONTACT_MESSAGE} from '../actions/middleware';

import {LOAD_PROJECTS_FROM_API,getProjectsList,CREATE_PROJECT,LOAD_PROJECT_FROM_API,getProject, loadProjectsFromAPI,saveTempId,UPLOAD_FILES, 
  EDIT_PROJECT,clearProjectForm,loadProject,
  DELETE_USER_PROJECT,LOAD_GENRE_FROM_API,getGenreList,getHottestProject} from '../actions/projects';

import {LOAD_ARTISTS_FROM_API,getArtistsList,LOAD_ARTIST_FROM_API,getArtist,} from '../actions/artists';

import {CREATE_USER, clearLoginForm,authorizeLogIn,LOG_IN, SEE_MY_INFOS,clearEditForm,
  saveUserInfos, EDIT_USER,UPLOAD_PROFILE_PICTURE,unAuthorizedLog, seeMyInfos, logOut} from '../actions/users';
import { setLoading} from '../actions/loading';

import {SAVE_USER_COMMENT, clearUserComment,UPLOAD_AUDIO, DELETE_USER_COMMENT,clearComment} from '../actions/comments'
import { ADD_NEW_MESSAGE, LOAD_MESSAGES_FROM_API, getReceivedMessages, DELETE_MESSAGE, deleteMessage ,MESSAGE_IS_READ, loadMessagesFromApi,clearMessageForm} from '../actions/messages';
import { openPopUp } from '../actions/popup';



export default (store) => (next) => (action) => {

  switch (action.type) {
    case LOG_IN: {
      const { login, passwordLogin } = store.getState().users;
      axios.post('http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/login_check',
      {
        "username":login,
        "password" : passwordLogin,
      },
      )
      .then(response=>{
          store.dispatch(clearLoginForm());
          store.dispatch(authorizeLogIn(response.data.data.id,response.data.data.username,response.data.token,response.data.data.picture));
          store.dispatch(openPopUp("success","Vous êtes connecté","LOGIN"));
      })
      
      .catch((error) =>{
        console.log(error);
        store.dispatch(openPopUp("alert","Login impossible","LOGIN"));
        store.dispatch(unAuthorizedLog())});
      break;
    }
    case SEND_CONTACT_MESSAGE:{
      store.dispatch(openPopUp("success","Votre message a bien été envoyé",""));
    }
    case LOAD_GENRE_FROM_API:{  
      axios.get('http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/music_genre/')
        .then(response => {store.dispatch(getGenreList(response.data));
              })
          .catch((error) => console.log(error));
          // store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"))
      break;
    }
    case EDIT_USER:{
      const state = store.getState();
      const { email, id, newUserName, profil,description,token } = state.users;
      axios
        .put(
          'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/users/'+id,
          {
            "username": newUserName,
            "email": email,
            "profil": profil,
            "description":description,
            // "password": password,
          },{headers: { 
            "Authorization": `Bearer ${token}`}}
        )
        .then((response) => {
          store.dispatch(openPopUp("success","Les informations ont été modifiées","Mes infos"))
          store.dispatch(clearEditForm());
        }).catch((error) => {
          console.error(error);
          store.dispatch(openPopUp("alert","Une erreur est survenue lors de la modification","Mes infos"))
        });
        break;
    }
    case CREATE_USER: {
      const state = store.getState();
      const { email, password, username, profil, description } = state.users;
      axios
        .post(
          'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/users',
          {
            "username": username,
            "password": password,
            "email": email,
            "profil": profil,
            "description": description,
          },
        )
        .then((response) => {
          store.dispatch(authorizeLogIn(response.data.data.id,response.data.data.username,response.data.token,response.data.data.picture));
          store.dispatch(clearLoginForm());
          store.dispatch(openPopUp("success","Votre inscription est bien réalisée","Inscription"))
        }).catch((error) => {
          store.dispatch(openPopUp("alert","Votre inscription a échouée","Inscription"));
          console.error(error);
        });
      break;
    }
    case CREATE_PROJECT:{
           const { newProjectDescription,newProjectName, newProjectGenre} = store.getState().projects;
           const {id,token } = store.getState().users;
        axios
        .post(
          'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/projects',
          {
            "music_genre" : newProjectGenre,
            "user" : id,
            "name" : newProjectName,
            "description" : newProjectDescription,
          },
          {headers: { 
            "Authorization": `Bearer ${token}`}}
        )
        .then((response) => {
          store.dispatch(saveTempId(response.data.id));
          //Lorsque l'upload sera branché, il faut renvoyer l'id du projet Temporaire au state
          //Créer une action qui envoie l'info au reducer projet.
          }).catch((error) => {
            store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"));
          console.error(error);
        });
      break;
    }
    case DELETE_USER_PROJECT:{
      const {token} = store.getState().users;
      const {projectToDisplay} = store.getState().projects;
      const url = 'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/projects/'+ projectToDisplay.id
      axios.delete(url,
        {headers: { 
          "Authorization": `Bearer ${token}`}})
        .then(response =>{
          store.dispatch(openPopUp("success","Le projet a bien été supprimé"));          
        ;})
        .catch((error) => {console.log(error);
        store.dispatch(openPopUp("alert","Le projet ne peux pas être supprimé"))})
      break;
      };
    case UPLOAD_PROFILE_PICTURE:{
      const {picture} = action;
      
      // console.log(picture);
      const {token,id} = store.getState().users;
      // console.log(token + 'id '+id) 
      const formData = new FormData();
      formData.append(
        "picture",
        picture,
        picture.name
        )
        axios
      .post(
        'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/users/upload/'+id,        
        formData
      ,{headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": `Bearer ${token}`}
        })
        .then(response=>{
          // console.log(response);
          store.dispatch(seeMyInfos());
        store.dispatch(openPopUp("success","Votre photo a été modifiée",""))})
         //rajouter envoie de message plus effacer formulaire
        .catch((error) => {
          store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"));
            console.error(error);
        });
        break;
    }
    case EDIT_PROJECT:{
      const {nameToUpdate,updateDescription,updateGenre,projectToDisplay}=store.getState().projects;
      const {token,id} = store.getState().users;
      axios
        .put(
          'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/projects/'+projectToDisplay.id,
          {
            //envoyer le son et le picture
            "music_genre" :updateGenre,
            "user" : id,
            "name" : nameToUpdate,
            "description" : updateDescription,
          },{headers: { 
            "Authorization": `Bearer ${token}`}}
        )
        .then((response) => {
          // console.log(response);
          store.dispatch(openPopUp("success","Vos informations ont été modifiée","Projet"));
        }).catch((error) => {
          store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"));
          console.error(error);
        });
        break;
    }
    case UPLOAD_FILES:{
      const {audio,picture} = action;
      const {tempId} = store.getState().projects;
      const {token} = store.getState().users;
      
      const formData = new FormData();
      if(audio){
      formData.append(
          "audio_url",
         audio,
         audio.name
        );}
      if(picture){
      formData.append(
        "picture",
        picture,
        picture.name
        );}
        axios
      .post(
        'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/projects/upload/'+tempId,        
        formData
      ,{headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": `Bearer ${token}`}
        })
        .then(response=>{
          // console.log(response);

          
        store.dispatch(openPopUp("success","Vos fichiers ont été uploadés",""));
        store.dispatch(clearProjectForm(response.data.slug));
            
      })
         //rajouter envoie de message plus effacer formulaire
        .catch((error) => {
          store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"))
          store.dispatch(clearProjectForm());
            console.error(error);
        });
        break;
    }
    case UPLOAD_AUDIO:{
      const {audio} = action;
      // console.log(audio);
      const {tempId} = store.getState().comments;
      const {token} = store.getState().users;
      const {projectToDisplay} = store.getState().projects;
      // console.log(audio);
      const formData = new FormData();
      formData.append(
          "audio_url",
         audio,
         audio.name
        )
        axios
      .post(
        'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/comments/upload/'+tempId,        
        formData
      ,{headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": `Bearer ${token}`}
        })
        .then(response=>{
          // console.log(response);
        store.dispatch(openPopUp("success","Votre fichier a été uploadé",""));
        store.dispatch(clearComment());
        store.dispatch(loadProject(projectToDisplay.id));
      })
         //rajouter envoie de message plus effacer formulaire
        .catch((error) => {
          store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"));
            console.error(error);
        });
        break;
    }
    case LOAD_PROJECTS_FROM_API: {
      const { projectsOrder } = store.getState().projects;
      axios.get('http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/projects/'+ projectsOrder )
        .then(response => {store.dispatch(getProjectsList(response.data));
        })
          .catch((error) => console.log(error));
          // store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"))
        axios.get("http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/projects/hottest")
        .then(response =>{
          // console.log(response)
          store.dispatch(getHottestProject(response.data))
          store.dispatch(setLoading(false,"home"));
          store.dispatch(setLoading(false,"projects"));
        })
        .catch((error) => console.log(error));
      break;
    };
    case LOAD_ARTISTS_FROM_API: {
      axios.get('http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/users')
        .then(response =>{
          // console.log(response.data);
          store.dispatch(getArtistsList(response.data))
          store.dispatch(setLoading(false,"artists"))
        })
        .catch((error) => console.log(error));
        // store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"))
      // next(action)
      break;
    };
    case SAVE_USER_COMMENT: {
      const { projectToDisplay } = store.getState().projects;
      const { content } = store.getState().comments;
      const { id,token } = store.getState().users;

      axios
        .post(
          'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/comments',
          {
            "project"  : projectToDisplay.id,
            "user" : id,
            "description": content,
          },
          {headers: { 
            "Authorization": `Bearer ${token}`}}       
        )
        .then((response) => {
          store.dispatch(openPopUp("success","Votre commentaire est envoyé? voulez vous envoyer un fichier audio?",""));
          store.dispatch(clearUserComment(response.data.id));
          // store.dispatch(loadProjectFromAPI(projectToDisplay.id))
        }).catch((error) => {
          store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"));
          console.error(error);
        });
        break;
    }
    case DELETE_USER_COMMENT: {
      const { commentId } = action;
      const { token } = store.getState().users;
      // console.log("middleware" + commentId);

      axios
        .delete(
          'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/comments/'+ commentId,
          {headers: { 
            "Authorization": `Bearer ${token}`}}       
        )
        .then((response) => {
          store.dispatch(loadProjectsFromAPI())
          store.dispatch(openPopUp("success","Le commentaire a été supprimé"))
        }).catch((error) => {
          store.dispatch(openPopUp("alert","Le commentaire n'a pas été supprimé"))
          console.error(error);
        });
        break;
    }
    case ADD_NEW_MESSAGE: {
      const { content , title, recipientId } = store.getState().messages;
      const { id, token } = store.getState().users;
      axios
        .post(
          'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/messages',
          {
            "sender"  : id,
            "recipient" : recipientId, /* A vérifier après l'authentification */
            "title" : title,
            "message":content,
          },
          {headers: { 
            "Authorization": `Bearer ${token}`}}       
        )
        .then((response) => {
          // console.log('coucou');
          store.dispatch(clearMessageForm());
          store.dispatch(openPopUp("success","Votre message est envoyé",""));
        }).catch((error) => {
          store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"));
          console.error(error);
        });
        break;
    }
    case LOAD_MESSAGES_FROM_API:{
      const {id, token} = store.getState().users;
      const url = 'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/messages/browse/'+id;
      axios.get(url,
        {headers: { 
          "Authorization": `Bearer ${token}`}})
        .then(response =>{
          store.dispatch(getReceivedMessages(response.data));
        })
        .catch((error) => {console.log(error);
          store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"));
        });
        
      break;
      };

      case DELETE_MESSAGE:{
        const {token} = store.getState().users;
        const {id} = action;
        const url = 'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/messages/'+id;
        axios.delete(url,
          {headers: { 
            "Authorization": `Bearer ${token}`}})
          .then(response =>{
            store.dispatch(openPopUp("success","Votre message est supprimé",""));
            // console.log('supp message');
          ;})
          .catch((error) => {console.log(error);
            store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"));
          });
        break;
        };

    case LOAD_PROJECT_FROM_API:{
      const id = action.id;
      const url = 'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/projects/'+id;
      axios.get(url)
        .then(response =>{
          // console.log('coucou');
          store.dispatch(getProject(response.data));
          store.dispatch(setLoading(false,"project"));
        })
        .catch((error) => console.log(error));
      break;
      };
    case LOAD_ARTIST_FROM_API:{
        const id = action.id;
        const url = 'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/users/'+id;
        axios.get(url)
          .then(response =>{
             store.dispatch(getArtist(response.data));
            store.dispatch(setLoading(false,"artist"));
          })
            .catch((error) => {console.log(error);
              store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"))
            });
          break;
      };
    case SEE_MY_INFOS :{
        const {id,token} = store.getState().users;
        const url = 'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/users/account/'+id;
        axios.get(url, {headers: { 
          "Authorization": `Bearer ${token}`}}
        )
          .then(response =>{
             store.dispatch(saveUserInfos(response.data))
            })
             .catch((error) => {console.log(error);
              store.dispatch(logOut);
              store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"))
            });        
          break;
    }
    case MESSAGE_IS_READ :{
      const {bool,id} = action;
      const {token} = store.getState().users;
      const url = 'http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/messages/'+id;
      axios.put(url, {
        "is_read": bool,
      },
        {headers: { 
        "Authorization": `Bearer ${token}`}}
      )
        .then(response =>{
          const {token,id} = store.getState().users;
           store.dispatch(
            loadMessagesFromApi(id,token)
            )
          })
           .catch((error) => {console.log(error);
            // store.dispatch(openPopUp("alert","Une erreur s'est produite","Oops"))
          });        
        break;
  }
    default:
      next(action);
  }
    

};
