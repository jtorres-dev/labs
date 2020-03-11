const formId = '1FAIpQLScQqvaE_GOAgy34yLjapOMGbclnl5DokO6dFVCM56IfZUzKWw'
const entry1 = 'entry.1228623646'
const entry2 = 'entry.2058991321'
const entry3 = 'entry.377207578'

const getPath = formId => `https://docs.google.com/forms/d/e/${formId}/formResponse`
const responseEvent = response => alert('Success!')

const getURL = function(path, params) {
	const url = new URL(path)
	for(let key in params)
		url.searchParams.set(key, params[key])
	return url
}

const initRequest = function(verb, url) {
	const init = new Object()
	init.method = verb
	init.mode = 'no-cors'
	return new Request(url, init)
}

const sendRequest = async function(verb, url) {
	const request = initRequest(verb, url)
	const response = await fetch(request)
	return response
}

const postToGoogleDB = function(data) {
	const path = getPath(formId)
	const url = getURL(path, data)
	sendRequest('POST', url)
		.then(responseEvent)
}