// @ts-ignore
import Router from "../scripts/router" // <- auto-generated
import "../scripts/tailwind.css" // <- auto-generated
import { render } from "solid-js/web"
import { onMount, createSignal } from "solid-js"
import { fetchData } from "./api"

const App = () => {
	const [data, setData] = createSignal()
	onMount(async () => {
		fetchData('/npc/boss/king-slime.json', setData)
	})
	return (
		<>
			<h1>{process.env.NODE_ENV}</h1>
			{JSON.stringify(data())}
			{Router()}
		</>
	)
}

const $app = document.getElementById('app')
render(() => <App />, $app)