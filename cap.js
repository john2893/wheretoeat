const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');


container.appendChild(content);
const btn = document.querySelector('#btn');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// btn.onclick = () => alert("Hello World");
 


