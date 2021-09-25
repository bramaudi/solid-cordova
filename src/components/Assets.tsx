import { fetchImages } from "../assets"

const Assets = ({ src, type, ...rest }: {
	type: string
	src: string
}) => {
	return (
		<img
			src={fetchImages(`/${type}/${src}`)}
			alt="?"
			{...rest}
		/>
	)
}

export default Assets