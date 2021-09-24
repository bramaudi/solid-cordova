import { createSignal } from "solid-js"

const IndexPage = () => {
	const [count, setCount] = createSignal(0)
	return (
		<h1>Index - <button className="p-2 m-2 rounded bg-green-700 text-white" onclick={() => setCount(c => c + 1)}>{count()}</button></h1>
	)
}

export default IndexPage