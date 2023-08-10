const buyBtn = document.querySelectorAll('.btn-js')
const getModal = document.querySelector('.modal-js')
const getModalContainer = document.querySelector('.modal-container')

for(let i=0;i<buyBtn.length;i++){
    buyBtn[i].onclick = function(){
        getModal.style.display = 'flex';
    }
}

const modalClose = document.querySelector('.modal-close')
console.log(modalClose)
modalClose.onclick = function(){
    getModal.style.display = 'none'
}

const off = document.querySelector('#off')
console.log(off)

off.onclick = function(){
    getModal.style.display = 'none'
}

getModal.onclick = function(){
    getModal.style.display = 'none';
}

getModalContainer.onclick = function(e){
    e.stopPropagation();
}
