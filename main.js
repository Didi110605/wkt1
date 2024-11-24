'use strict';


// Массив с данными контактов
const contacts = [
    {
        img: 'photo/BD694B2E-DF85-4972-8159-8A52FC489255_4_5005_c.jpeg',
        name: 'Алёнчик',
        email: 'alenchik.chika@yandex.ru',
        phone: '+7(926)-333-42-58'
    },
    {
        img: 'photo/CA9CF51F-A732-470A-9489-DB59564CAB2D_1_105_c.jpeg',
        name: 'Авдотья',
        email: 'avdotya.krasotylka@gmail.com',
        phone: '+7(993)-595-68-27'
    },
    {
        img: 'photo/6281FEEF-6FAE-4488-9DD6-1BAD1F572161_1_105_c.jpeg',
        name: 'Дашок',
        email: 'dashok.oyeshka@gmail.com',
        phone: '+7(964)-552-80-83'
    }
];


const template = document.getElementById('contact-card');


// Метод генерации контактой карточки
function createContactCard(contact) {
    const clone = template.content.cloneNode(true);

    clone.querySelector('img').src = contact.img;
    clone.querySelector('.name').textContent = contact.name;
    
    clone.querySelector('.email').textContent = contact.email;
    clone.querySelector('.email').setAttribute(
        'href', `mailto:${contact.email}`
    );
    
    clone.querySelector('.phone').textContent = contact.phone;
    clone.querySelector('.phone').setAttribute(
        'href', `tel:${contact.phone}`
    );

    document.body.appendChild(clone);
}


// Через цикл пробегаемся по массиву и создаём карточки
for(const contact of contacts) {
    createContactCard(contact);
}