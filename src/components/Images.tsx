import type { Component, JSX } from "solid-js"
import { fetchImages } from "../assets"

interface Props extends JSX.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	type: string;	
	[key: string]: unknown;
}

const Images: Component<Props> = ({ src, type, ...rest }) => {
	return (
		<img
			src={fetchImages(`/${type}/${src}`)}
			alt="?"
			{...rest}
		/>
	)
}

export default Images