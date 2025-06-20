const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log('Iniciando o navegador...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const url = 'https://provedor.watch.tv.br/isps/packages/2757';
  console.log(`Acessando ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2' });

  await page.waitForSelector('body');

  const content = await page.content();
  fs.writeFileSync('pagina.html', content);
  console.log('Conteúdo salvo em pagina.html');

  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  console.log('Screenshot salva como screenshot.png');

  await browser.close();
})();