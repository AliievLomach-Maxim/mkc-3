import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com'

export const fetchPosts = async () => {
	const { data } = await axios('/posts')
	return data.posts
}

export const fetchPost = async (id) => {
	const { data } = await axios(`/post/${id}`)
	return data
}

export const fetchUser = async (id) => {
	const { data } = await axios(`/users/${id}`)
	return data
}
