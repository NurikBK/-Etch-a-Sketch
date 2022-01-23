// clear Button
const body = document.body
const btnReset = document.createElement('button');
body.appendChild(btnReset);
btnReset.classList.add('reset');
btnReset.textContent = "Clear";
btnReset.addEventListener("click",function(e){
    location.reload(); 
});
// grid
const container = document.querySelector('#container');
const grid = () => {
    for(let i = 0; i < 16; i++) {
        for( let j = 0; j < 16;j++){
            const addGrid = document.createElement('div');
            addGrid.classList.add('square');
            container.appendChild(addGrid);
            addGrid.addEventListener('mouseover', e => {
                e.target.style.background = 'black';
                })
        }
            
    }
};
grid()
