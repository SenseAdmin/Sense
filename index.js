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
