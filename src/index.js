import _ from 'lodash';
import './index.scss';
import Icon from './img/icon.png';
// import Print from './print'

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const icon = new Image();
  icon.src = Icon;
  element.appendChild(icon);
  // element.onclick = Print.bind(null, 'hello, webpack!')

  new Promise((resolve, reject) => {
    setTimeout(() => alert('worked'), 200);
  });

  return element;
}

document.body.appendChild(component());