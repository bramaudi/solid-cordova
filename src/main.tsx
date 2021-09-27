import type { JSXElement } from "solid-js"
//@ts-ignore
import "../scripts/tailwind.css" // <- auto-generated
import "sidebarjs/lib/sidebarjs.min.css"
import { render } from "solid-js/web"
import PageJS from "page"
import routes from "./routes"
import { createSignal } from "solid-js"
import Layout from "./components/layout"

const Router = () => {
	const [page, setPage] = createSignal<() => JSXElement>()
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

const $app = document.getElementById('app')
render(() => <Layout view={Router} />, $app)