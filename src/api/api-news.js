import axios from 'axios'

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1'

export const fetchNews = async (searchQuery, page) => {
	const response = await axios.get(`/search`, {
		params: {
			query: searchQuery,
			page,
		},
	})
	return response.data.hits
}
