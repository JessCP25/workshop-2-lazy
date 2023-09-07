const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const accion = (entry) => {
  const nodo = entry.target;
  const image = nodo.firstChild.firstChild;
  const url = image.dataset.src;
  image.src = url;
  
  loadedImages++;
  printLog();

  observer.unobserve(nodo);
};

const observer = new IntersectionObserver((entries)=>{
  entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};