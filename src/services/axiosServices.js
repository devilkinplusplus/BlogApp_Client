import axios from 'axios';
axios.defaults.baseURL = 'https://localhost:7238';
const token = localStorage.getItem("accessToken");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const loginUser = (data) => {
    return axios.post('/user/login', data);
};

export const createUser = (data) =>{
    return axios.post("/user",data);
}

export const getBlogById = (id) =>{
    return axios.get(`/blogs/${id}`);
}

export const getBlogs = ()=>{
    return axios.get("/blogs");
}

export const createBlog = (data) => {
   return axios.post("/blog", data);
}

export const getMyBlogs = () =>{
    return axios.get("/user/blogs")
}

export const deleteBlog = (id) =>{
    return axios.delete(`/blogs/${id}`);
}

export const getRecommendeds = (id) => {
    return axios.get(`/blogs/recommendeds/${id}`)
}

export default axios;
