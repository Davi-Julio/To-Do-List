const input = document.querySelector('#input');
const btn = document.querySelector('#btn')
const ul = document.querySelector('.ul')



btn.addEventListener('click', (e)=>{
    e.preventDefault();


    var inputValue = input.value;

    if(inputValue !== ""){


        const spanElements = document.createElement('span');
        spanElements.innerHTML = inputValue;

        const btnDelete = document.createElement('button');
        btnDelete.innerHTML = 'Remover'

        const liElements = document.createElement('li');
        liElements.appendChild(spanElements);
        liElements.appendChild(btnDelete);


        btnDelete.onclick = ()=>{
            ul.removeChild(liElements);
        }


        ul.appendChild(liElements);

        btnDelete.style.backgroundColor = 'red'
        btnDelete.style.margin = '5px 30px'
        btnDelete.style.width = '10vw'
        btnDelete.style.height ='4vh'
        btnDelete.style.border = '0.3px solid red'
        btnDelete.style.cursor ='pointer'
        btnDelete.style.color ='white'
        btnDelete.style.fontVariant ='small-caps'
        btnDelete.style.borderRadius ='4px'


        input.value = '';
    }


})