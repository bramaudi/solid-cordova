import { fetchImages } from "../assets"

const Images = ({ src, type, ...rest }: {
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

export default Images