// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  //Obtenemos el párrafo y la imagen
  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  //Obtenemos el contenido del párrafo y el atributo "src" de la imagen
  const textContent = await text.textContent(); 
  const imageSrc = await image.getAttribute('src');

  //Validamos que el hecho y la URL de la imagen sean correctos
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});
