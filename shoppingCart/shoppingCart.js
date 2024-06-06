//считаем общую сумму всех товаров
function totalPrice() {
    // получаем все элементы с ценой и преобразовываем текст в число
    const price1 = +(document.getElementById('price1').textContent.replace(/[€,.]/g, ''));
    const price2 = +(document.getElementById('price2').textContent.replace(/[€,.]/g, ''));
    const price3 = +(document.getElementById('price3').textContent.replace(/[€,.]/g, ''));
    const price4 = +(document.getElementById('price4').textContent.replace(/[€,.]/g, ''));

    // складываем все цены
    const totalPrice = (price1 + price2 + price3 + price4) / 100; // делим, чтобы преобразовать число обратно в евро

    // полученная общая сумма форматируется как денежная сумма в евро по стандартам Германии
    const formattedTotalPrice = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(totalPrice);

    // полученная общая сумма помещается в элемент и отображается на экране
    const priceHolder = document.getElementById('total-price');
    priceHolder.textContent = formattedTotalPrice;
}
document.addEventListener('DOMContentLoaded', totalPrice); //вызываем функцию сразу при загрузке DOM-дерева



//получаем кнопку
const discountButton = document.querySelector('.discount-button');
//добавляем к ней слушатель 
discountButton.addEventListener('click', function() {
    const totalPriceElement = document.getElementById('total-price'); //берёт получившуюся ранее сумму из элемента как текст
    const totalPriceText = totalPriceElement.textContent;
    const totalPrice = +(totalPriceText.replace(/[€,.]/g, '')) / 100; // преобразовывает текст в число и сразу делит, чтобы преобразовать число в евро

    // применяем скидку 20%
    const discountPrice = totalPrice * 0.8;

    // полученная общая сумма форматируется как денежная сумма в евро по стандартам Германии
    const formattedDiscountPrice = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(discountPrice);

    // элемент с суммой обновляется и виден пользователю с учётом скидки
    totalPriceElement.textContent = formattedDiscountPrice;
    //чтобы кнопочку больше нельзя было нажать
    discountButton.disabled = true;
});

