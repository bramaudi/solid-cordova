const LOCAL = 'http://localhost:3001'

/**
 * fetch content inside `assets/data` folder
 * @param path json file path
 * @param callback callback to get content
 */
export const fetchData = (path: string, callback: Function) => {
	const safePath = path.slice(0, 1) !== '/' ? `/${path}` : path
	const request = new XMLHttpRequest();
	const HOST = process.env.NODE_ENV === 'development' ? `${LOCAL}/?data=` : './assets/data'
	request.overrideMimeType('application/json')
	request.open("GET", HOST + safePath);
	console.log('fetchData', HOST + safePath);
	
	request.onreadystatechange = () => {
		if(request.status > 300) {
			alert(request.status)
		}
		else if(request.responseText!=undefined && request.responseText!='') {
			callback(JSON.parse(request.responseText))
		}
	}
	request.send()
}

/**
 * get url/path for `assets/images` folder
 * @param path image path
 */
export const fetchImages = (path: string) => {
	const safePath = path.slice(0, 1) !== '/' ? `/${path}` : path
	const HOST = process.env.NODE_ENV === 'development' ? `${LOCAL}/?images=` : './assets/images'
	return HOST + safePath
}
