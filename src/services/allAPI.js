import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

// upload video - store video in "http://localhost:3000/allvideos"
export const uploadVideoAPI = async (video) => {
    // send response to add component
    return await commonAPI("POST", `${SERVER_URL}/allVideos`, video)
}

// get video api called by view
export const getAllVideosAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos`, "")
}

// store watch history by videocard to "http://localhost:3000/history"
export const saveHistoryAPI = async (videoDetails) => {
    return await commonAPI("POST", `${SERVER_URL}/history`, videoDetails)
}

// get history to watch component to "http://localhost:3000/history"
export const getHistoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/history`, "")
}

// remove history to watch component
export const removeHistoryAPI = async (videoId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/history/${videoId}`, {})
}

// remove video from all video page
export const removeVideoAPI = async (videoId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${videoId}`, {})
}

// Save category to category component
export const addCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST", `${SERVER_URL}/categories`, categoryDetails)
}

// get category to category component
export const getCategoryAPI = async (categoryDetails) => {
    return await commonAPI("GET", `${SERVER_URL}/categories`, "")
}

// Remove category api
export const removeCategoryAPI = async (categoryId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/categories/${categoryId}`, {})
}

// get single video api to add in category section
export const getVideoAPI = async (videoId) => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos/${videoId}`, "")
}

// update category api
export const updateCategoryAPI = async (categoryId, updateCategoryDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/categories/${categoryId}`, updateCategoryDetails)
}

// getSingleCategory api TO DRAG AND DROP VIDEO FROM CATEGORY
export const getSingleCategoryAPI = async (categoryId) => {
    return await commonAPI("GET", `${SERVER_URL}/categories/${categoryId}`,"")
}