const contactForm = document.getElementById('contact-form')

const submitEvent = function() {
	const formData = new Object()
	formData[entry1] = document.getElementById('Name').value
	formData[entry2] = document.getElementById('Email').value
	formData[entry3] = document.getElementById('Message').value

	postToGoogleDB(formData)
}

const initControllers = function() {
	const submitButton = document.getElementById('submit')
	submitButton.addEventListener('submit', submitEvent)
}

/* Must be the last line of code */
initControllers()