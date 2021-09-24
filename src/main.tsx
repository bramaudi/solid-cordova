//@ts-ignore
import "../scripts/tailwind.css" // <- auto-generated
import { render } from "solid-js/web"
import { createSignal, Component } from "solid-js"
import PageJS from "page"
import routes from "./routes"

const Router = () => {
	const [page, setPage] = createSignal<Component>()
	const Page = (path, component) => {
		PageJS(path, async () => {
			const page = (await component).default
			setPage(() => page)
		})
	}
	Object.keys(routes).forEach(path => {
		Page(path, routes[path])
	})
	PageJS({ hashbang: true })
	return page
}

const App = () => {
	return <>{Router()}</>
}

const $app = document.getElementById('app')
render(() => <App />, $app)