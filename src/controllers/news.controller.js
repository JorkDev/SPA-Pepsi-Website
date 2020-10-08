import view from '../views/news.html'

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  return divElement;
}