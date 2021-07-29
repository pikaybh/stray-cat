const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
    if (navigator.share) {
        navigator.share({
            title: 'AI 고양이 족보',
            url: 'https://jokbo.netlify.app/'
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