const model = document.querySelector('.model');
const closeBtn = document.querySelector('#close');
const previews = document.querySelectorAll('.open-light');
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');

// image src and caption
previews.forEach(preview => {
    preview.addEventListener('click', () => {
        const elementSelect = preview.nextElementSibling
        const originalSrc = elementSelect.src;
        model.classList.add('open');
        original.src = originalSrc;

        let imgWidth = original.naturalWidth;
        let imgHeight = original.naturalHeight;
        const altText = elementSelect.alt;
        if (imgWidth < imgHeight) {
            original.style.maxHeight = model.clientHeight - 120 + 'px'
        }
        imgText.textContent = altText;
    })
})
//open model
closeBtn.addEventListener('click', (e) => {
    if (model.classList.contains('model')) {
        model.classList.remove('open');
    }
})
