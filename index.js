//like-btn + modal
const likeBtns = document.querySelectorAll('#like-btn');
const likeModal = document.getElementById('like-modal');

likeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        likeModal.classList.add('open');
        this.setAttribute('disabled', 'disabled'); // Используем this для конкретной кнопки

        setTimeout(() => {
            likeModal.classList.remove('open');
        }, 2000);
    });
});


let moreButtons = document.querySelectorAll("#more");

moreButtons.forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById('more-modal').classList.add('open');
    });
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById('more-modal').classList.remove('open');
});

document.querySelector("#more-modal .more-modal-content").addEventListener("click", event => {
    event._isClickInModal = true;
});

document.getElementById("more-modal").addEventListener('click', event => {
    if (event._isClickInModal) return;
    event.currentTarget.classList.remove("open");
});









document.addEventListener('DOMContentLoaded', function() {
    let savedImage = localStorage.getItem('savedImage');
    if (savedImage) {
        document.getElementById('uploadedImg').style.backgroundImage = `url(${savedImage})`;
    } else {
        document.getElementById('uploadedImg').style.backgroundImage = `url('img/alt-img.png')`;
    }
});

document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('uploadedImg').style.backgroundImage = `url(${e.target.result})`;
        localStorage.setItem('savedImage', e.target.result);
    };

    reader.readAsDataURL(file);
});


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('intrest-label')) {
        const inputId = event.target.getAttribute('for');
        const input = document.getElementById(inputId);
        
        if (input) {
            event.target.remove(); // Remove label
            input.remove(); // Remove input
            // Check if input has a pseudo-element .after and remove it
            const inputStyle = window.getComputedStyle(input, ':after');
            if (inputStyle.content !== 'none') {
                input.style.content = 'none';
            }
        }
        
        const labels = document.querySelectorAll('.intrest-label');
        if (labels.length === 0) {
            const container = document.querySelector('.cont-intrest-index');
            container.classList.add('off');
        }
    }
});
