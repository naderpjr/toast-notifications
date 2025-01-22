const body = document.body;
body.style.overflow = 'hidden';    

const createShapeElement = () => {
    const shapeElement = document.createElement('div');
    shapeElement.style.position = 'absolute';
    shapeElement.style.left = `${Math.random() * window.innerWidth}px`;
    shapeElement.style.top = `${Math.random() * window.innerHeight}px`;
    shapeElement.style.fontSize = `${Math.floor(Math.random() * 20) + 30}px`;
    shapeElement.style.color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`;
    shapeElement.style.pointerEvents = 'none'; 
    shapeElement.style.userSelect = 'none';  
    shapeElement.style.zIndex = '-1';   
    shapeElement.innerText = '●'; 
    body.appendChild(shapeElement);

    let direction = Math.random() > 0.5 ? 1 : -1;
    const speed = Math.random() * 2 + 1;

    const moveShape = () => {
        const rect = shapeElement.getBoundingClientRect();
        if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
            direction *= -1;
        }
        shapeElement.style.transform = `translateY(${direction * speed}px)`;
        requestAnimationFrame(moveShape);
    };
    moveShape();

    setTimeout(() => {
        shapeElement.remove();
    }, 15000);
};

setInterval(createShapeElement, 500);


let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="bi bi-check2-circle"></i> Successfully Submitted';
let errorMsg = '<i class="bi bi-x-circle"></i> Please Fix the Error';
let invalidMsg = '<i class="bi bi-exclamation-circle"></i> Invalid Input, Check Again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;

    toastBox.appendChild(toast);

    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },5000)
}

