import axios from "axios";

const API = axios.create({ baseURL: "https://fitnesstrackerbackend.rockeybiswas.repl.co/api" });

API.interceptors.request.use(function (config) {
    const profile = localStorage.getItem('profile');

    if (profile) {
        const auth = JSON.parse(profile).token;
        config.headers.authorization = 'Bearer ' + auth
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export const signin = (formData) => API.post('/signin', formData)
export const signup = (formData,) => API.post('/signup', formData)

export const getExercises = () => API.get('/exercises');
export const addExercise = (exerciseDetails) => API.post('/exercises', exerciseDetails);
export const deleteExercise = (exerciseId) => API.delete(`/exercises/${exerciseId}`);

export const getFood = () => API.get('/food');
export const addFood = (foodDetails) => API.post('/food', foodDetails);
export const deleteFood = (foodId) => API.delete(`/food/${foodId}`);

export const getGoals = () => API.get('/goals');
export const addGoal = (goalDetails) => API.post('/goals', goalDetails);
export const deleteGoal = (goalId) => API.delete(`/goals/${goalId}`);