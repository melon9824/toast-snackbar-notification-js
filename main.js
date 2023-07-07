let toastBox = document.getElementById('toastBox');

let successMsg = '<i class="fas fa-check-circle"></i> Successfully submitted';
let errorMsg = '<i class="fas fa-times-circle"></i> Please fix the error';
let invalidMsg = '<i class="fas fa-exclamation-circle"></i> Invalid input, check again';

function showToast(msg) {
    let toast =  document.createElement('div');
    toast.classList.add('toast');

    toast.innerHTML = msg;

    toastBox.appendChild(toast);


    if(msg.includes('Successfully')) {
        toast.classList.add('success');
    }

    if(msg.includes('error')) {
        toast.classList.add('error');
    }

    if(msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    },5000);
}