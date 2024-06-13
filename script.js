document.addEventListener('click', function(event) {
    if (event.target.classList.contains('like')) {
        const likeButton = event.target;
        likeButton.classList.add('clicked');
        likeButton.disabled = true;

        const messageBox = document.querySelector('.messange');
        messageBox.classList.add('open');
        setTimeout(function() {
            messageBox.classList.remove('open');
        }, 2000);
    }
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
    const chatsBtns = document.querySelectorAll('.chats');
    const lentaButtons = document.querySelectorAll('.lenta-button');
    const lentaPage = document.querySelector('.lenta-page');
    const profilPage = document.querySelector('.profil-page');
    const chatsPage = document.querySelector('.chats-page');

    function handleChatsClick(event) {
        // Добавляем/удаляем классы closed у страниц в зависимости от кнопки
        lentaPage.classList.add('closed');
        profilPage.classList.add('closed');
        chatsPage.classList.add('closed');

        if (event.target.classList.contains('chats')) {
            lentaPage.classList.add('closed');
            profilPage.classList.add('closed');
            chatsPage.classList.remove('closed');
        }
    }

    chatsBtns.forEach(function(btn) {
        btn.addEventListener('click', handleChatsClick);
    });

    lentaButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            lentaPage.classList.remove('closed');
            profilPage.classList.add('closed');
            chatsPage.classList.add('closed');
        });
    });
});