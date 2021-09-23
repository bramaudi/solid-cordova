import { useParams } from "solid-app-router"

const BossDetailPage = () => {
	const { slug } = useParams()
	return (
		<h1>Boss Slug - {JSON.stringify(slug)}</h1>
	)
}

export default BossDetailPage