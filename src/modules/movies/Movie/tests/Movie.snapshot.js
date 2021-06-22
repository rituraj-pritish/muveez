const PercyScript = require('@percy/script')

PercyScript.run(async (page, percySnapshot) => {
	await page.goto('http://localhost:3000/movie/460465')
	// ensure the page has loaded before capturing a snapshot
	await page.waitFor(3000)
	await percySnapshot('Movie')
})