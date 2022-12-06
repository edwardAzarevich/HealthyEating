function forms() {
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await this.fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });



        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');

            statusMessage.src = message.loading;

            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;`;

            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            // entries, fromEntries - check use in old browser !!!!!!

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            const obj = { a: 23, b: 50 };
            console.log(Object.entries(obj));
            postData('http://localhost:3000/requests', json)
                .then(data => {
                    //console.log(data);
                    showThancksModal(message.success);
                    //form.reset();
                    statusMessage.remove();
                }).catch(() => {
                    showThancksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
        });
    }

    function showThancksModal() {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModel = document.createElement('div');
        thanksModel.classList.add('modal__dialog');
        thanksModel.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>X</div>
            <div class="modal__title">${message.success}</div></div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModel);
        setTimeout(() => {
            thanksModel.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

}

module.exports = forms;