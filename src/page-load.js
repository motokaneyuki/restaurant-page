export default function() {
    const content = document.querySelector('#content');
    const restaurantName = document.createElement('h1');
    const description = document.createElement('h3');
    const buttonDiv = document.createElement('div');
    const reservationButton = document.createElement('button');
    const orderButton = document.createElement('button');

    buttonDiv.classList.add('contentButtons');
    reservationButton.classList.add('coloredButton');
    orderButton.classList.add('transparentButton');

    restaurantName.textContent = 'Lasa Restaurant';
    description.textContent = 'Experience the rich heritage and soulful flavors of the Philippines right in the heart of your neighborhood.';
    reservationButton.textContent = 'Reservation';
    orderButton.textContent = 'Order Online'

    content.appendChild(restaurantName);
    content.appendChild(description);
    buttonDiv.appendChild(reservationButton);
    buttonDiv.appendChild(orderButton);
    content.appendChild(buttonDiv);
}