import { createSignal } from "solid-js"

const IndexPage = () => {
	const [count, setCount] = createSignal(0)
	return (
		<h1>Index - <button onclick={() => setCount(c => c + 1)}>{count()}</button></h1>
	)
}

export default IndexPage