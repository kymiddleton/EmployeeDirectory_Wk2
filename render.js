const render = (...props) => {
  console.log(props)
  props.forEach(e => {  
     append(e);
  });
}

const append = content => {
  const p = document.createElement('p');
  p.textContent = content;
  document.getElementById('content').appendChild(p);
}