import images from "./*.png"
import { For, createSignal } from "solid-js"
import { fetchData } from "../server"

const IndexPage = () => {
	const [data, setData] = createSignal({})
	fetchData('/npc/boss/king-slime.json', setData)
	return (
		<>
			<a href="/about">About</a>
			{JSON.stringify(data())}
			<h1>
				Index
			</h1>
			<For each={Object.keys(images)}>
				{file => (
					<img src={images[file]} alt={file} />
				)}
			</For>
		</>
	)
}

export default IndexPage