document.addEventListener('click', function(event) {
    if (event.target.classList.contains('like')) {
        const likeButton = event.target;
        likeButton.classList.add('clicked');
        likeButton.disabled = true;

        const messageBox = document.querySelector('.notification');
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
    const perepiska = document.querySelector('.perepiska');
    const chatDivs = document.querySelectorAll('.chat');
    const lentaPage = document.querySelector('.lenta-page');
    const profilPage = document.querySelector('.profil-page');
    const chatsPage = document.querySelector('.chats-page');

    chatDivs.forEach(function(chatDiv) {
        chatDiv.addEventListener('click', function(event) {
            perepiska.classList.remove('closed');
            lentaPage.classList.add('closed');
            profilPage.classList.add('closed');
            chatsPage.classList.add('closed');
        })
    });

    chatsBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            lentaPage.classList.add('closed');
            profilPage.classList.add('closed');
            chatsPage.classList.remove('closed');
            perepiska.classList.add('closed');
        });
    });

    lentaButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            lentaPage.classList.remove('closed');
            profilPage.classList.add('closed');
            chatsPage.classList.add('closed');
            perepiska.classList.add('closed');
        });
    });
});



// Находим все элементы с классом messange
const messages = document.querySelectorAll('.messange');

// Для каждого из найденных элементов
messages.forEach(message => {
    if (message.classList.contains('cheked')) {
        // Если есть класс cheked, находим конкретный div с классом chek-icon и добавляем класс chek
        const icon = message.parentElement.querySelector('.chek-icon');
        icon.classList.add('chek');
    } else if (message.classList.contains('uncheked')) {
        // Если есть класс uncheked, находим конкретный div с классом chek-icon и добавляем класс unchek
        const icon = message.parentElement.querySelector('.chek-icon');
        icon.classList.add('unchek');
    }
});

messages.forEach(message => {
    if (message.classList.contains('newmessange')) {
        // Если есть класс cheked, находим конкретный div с классом chek-icon и добавляем класс chek
        const icon = message.parentElement.querySelector('.chek-icon');
        icon.classList.add('hide');
    }
});
