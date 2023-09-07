/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from "./lazy";

const container = document.querySelector('#images');
const buttonAdd = document.querySelector('button');
const clean = document.getElementById('clean');

async function getFox() {
  const response = await fetch('https://randomfox.ca/floof/');
  const data = response.json();
  return data;
}

async function createImageNode(){
  const fox = await getFox();
  //containerFox
  const containerFox = document.createElement('div');
  containerFox.className = 'p-4';
  //img
  const image = document.createElement('img');
  image.width = '320';
  image.dataset.src = fox.image;
  image.className = 'mx-auto rounded-lg';

  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'bg-gray-300 rounded-lg';
  imageWrapper.style.minHeight = '100px';
  imageWrapper.style.display = 'inline-block';

  imageWrapper.appendChild(image);
  containerFox.appendChild(imageWrapper);

  appendedImages++;
  printLog();

  return containerFox;
}

const addImage = async () =>{
  const newFox = await createImageNode();
  container.append(newFox);
  registerImage(newFox);
}

const cleanContainer = ()=>{
  container.textContent = "";
}

buttonAdd.addEventListener('click', addImage)
clean.addEventListener('click', cleanContainer);