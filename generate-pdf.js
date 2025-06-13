import puppeteer from 'puppeteer'

const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' })

// Wait until the Vue component renders the API data
await page.waitForFunction(() => {
  const list = document.querySelectorAll('.pdf-content li')
  return list.length > 0
})

await page.pdf({
  path: 'output.pdf',
  format: 'A4',
  printBackground: true,
  margin: {
    top: '20mm',
    bottom: '20mm',
    left: '15mm',
    right: '15mm',
  },
})

await browser.close()
console.log('PDF generated')

