module.exports = {
	e2e: {
		setupNodeEvents(on, config) {
			on('before:run', () => {
				startNextcloud().then((ip) => {
					// Setting container's IP as base Url
					config.baseUrl = `http://${ip}/index.php`
					console.log(config)
				})
			})
		}
	},
}

// dummy method for testing purpose
const startNextcloud = async function() {
	return '172.10.11.12'
}