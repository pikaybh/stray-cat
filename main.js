const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');
const copyLink = document.querySelector('.copy-link');

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

shareButton.addEventListener('click', event => {
    if (navigator.share) {
        navigator.share({
            title: 'AI 고양이 족보',
            url: 'https://jokbo.netlify.app/cat-jokbo/'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

closeButton.addEventListener('click', event => {
    shareDialog.classList.remove('is-open');
});

copyLink.addEventListener('click', event => {
    document.execCommand("copy");
    if (document.getElementById("link-url")) {
        copyText.select();
        copyText.setSelectionRange(0, 250);
        alert("url이 복사되었습니다. : " + copyText.value);
    }
});

function copyFunction() {
    /* Get the text field */
    var copyText = document.getElementById("link-url");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("url이 복사되었습니다. : " + copyText.value);
}