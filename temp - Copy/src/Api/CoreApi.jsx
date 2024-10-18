import axios from "axios";
import { useParams } from 'react-router-dom';

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// get method
export const getPost = () => {
  return api.get("/images/");
};

export const getPostByCategory = (catname) => {
  return api.get(`/images/category${catname}/`);
}

export const getImageById = (id) => {
  return api.get(`/images/${id}/`);
}

export const getUser = (id) => {

  // const user_id=id.slice(28,-1);
  // console.log(id,typeof(id))
  return api.get(`/users/${id}`);
}

// for user sign up
export const postUser = (user) => {
  // console.log('user',user)
  return api.post("/users/", user,{
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
}

// for user login
export const postUserLogin = () => {
  return api.get("/users/", )
}

export const userPosts=(user)=>{
  // console.log('user posts',user)
  return api.get(`/images/accounts/${user}/`)
  // images/accounts/32/
}

export const postImage=(image)=>{
    return api.post("/images/",image)
}
