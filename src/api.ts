/**
 * fetch content inside `data` folder
 * @param path json file path
 * @param callback callback to get content
 */
export const fetchData = (path: string, callback: Function) => {
	const localhost = 'http://localhost:3001/?data='
	const HOST = process.env.NODE_ENV === 'development' ? localhost : './data'
	const safePath = path.slice(0, 1) !== '/' ? `/${path}` : path
	const request = new XMLHttpRequest();
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
