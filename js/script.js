window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTGabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');

        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
        console.log('ok');
    }

    hideTGabContent();
    showTabContent();
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTGabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadline = '2022-10-30';

    function getTimeremaining(endtime) {
        let days, hours, minutes, seconds;
        //console.log(Date.parse(endtime) - Date.parse(new Date()));
        const t = Date.parse(endtime) - Date.parse(new Date());
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeremaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal window


    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]'),
        test = document.querySelector('.header__link');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.toggle('show');
            document.body.style.overflow = 'hidden';
        });
    });

    function openModel() {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modelTimerId);
    }

    function closeModel() {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModel);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModel();
        };
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModel();
        }
    });

    //const modelTimerId = setTimeout(openModel, 10000);

    // skroll 
    function showModelByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModel();
            window.removeEventListener('scroll', showModelByScroll);
        }

    }

    window.addEventListener('scroll', showModelByScroll);


    // Create Menu 
    const params = {
        nameMenu: "Фитнес",
        text: "hi man",
        price: 229
    };
    // Use class for card

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
        <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
        `;
            this.parent.append(element);
        }
    };


    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"
    ).render();


    // My code

    /*class FormMenuItem {
        constructor(cardItem) {
            this.pathPhoto = cardItem.path;
            this.nameMenu = cardItem.name;
            this.text = cardItem.text;
            this.price = cardItem.price;
        }

        createDivElement() {
            const divMenuItem = document.createElement('div');
            const divMenuItemPrice = document.createElement('div');
            divMenuItem.classList = "menu__item";
            divMenuItem.innerHTML += `<img src="${this.pathPhoto}" alt="vegy">`;
            divMenuItem.innerHTML += `<h3 class="menu__item-subtitle">Меню "${this.nameMenu}"</h3>`;
            divMenuItem.innerHTML += `<div class="menu__item-descr">Меню ${this.nameMenu}" - "${this.text}"</div>`;
            divMenuItem.innerHTML += `<div class="menu__item-divider"></div>`;

            divMenuItemPrice.classList = "menu__item-price";
            divMenuItemPrice.innerHTML += `<div class="menu__item-cost">Цена:</div>`;
            divMenuItemPrice.innerHTML += `<div class="menu__item-total"><span>${this.price}</span> грн/день</div>`;

            divMenuItem.append(divMenuItemPrice);
            return divMenuItem;
        }

    }

    const CardList = [
        {
            name: "Фитнес",
            path: "img/tabs/vegy.jpg",
            text: 'это новый подход к приготовлению блюд:больше свежиховощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальнойценой и высоким качеством',
            price: 229
        },
        {
            name: "Премиум",
            path: "img/tabs/elite.jpg",
            text: "мы используем не только красивый дизайн упаковки, нои качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без походав ресторан!",
            price: 550
        },
        {
            name: "Постное",
            path: "img/tabs/post.jpg",
            text: "это тщательный подбор ингредиентов: полное отсутствиепродуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильноеколичество белков за счет тофу и импортных вегетарианских стейков.",
            price: 430
        },



    ];

    const devMenuList = document.querySelector('.menu .menu__field .container');

    CardList.forEach(element => {
        devMenuList.append(new FormMenuItem(element).createDivElement());


    });

*/

});


