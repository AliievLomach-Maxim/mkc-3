import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUser } from '../../api/postsApi'

const Owner = () => {
	const [owner, setOwner] = useState(null)
	const { ownerId } = useParams()

	useEffect(() => {
		const getPost = async () => {
			try {
				const data = await fetchUser(ownerId)
				setOwner(data)
			} catch (error) {
				console.log('error', error)
			}
		}
		ownerId && getPost()
	}, [ownerId])
	return (
		<div>
			Owner
			{owner && <div>firstName: {owner.firstName}</div>}
		</div>
	)
}

export default Owner
