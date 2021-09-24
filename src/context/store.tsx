import { createContext, useContext, Component } from "solid-js"
import { createStore, Store, SetStoreFunction } from "solid-js/store"

type GlobalStore = {
	select: {},
	dark: boolean
}

type Context = [
	Store<GlobalStore>,
	SetStoreFunction<GlobalStore>
]

const StoreContext = createContext<Context>()

export const StoreProvider = (props: {
	children: Component | unknown
}) => {
	const [store, setStore] = createStore({
		select: {},
		dark: false
	})

	return (
		<StoreContext.Provider value={[store, setStore]}>
			{props.children}
		</StoreContext.Provider>
	)
}

export const useStore = () => useContext(StoreContext)