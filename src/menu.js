export default function() {
    const body = document.querySelector('body');
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    const courseList = document.createElement('ul');

    const course = ['Appetizer', 'Soup Cleanser', 'Main', 'Entree', 'Dessert'];
    const menu = ['Kinilaw na Tuna', 'Sinigang Consommé', 'Bistek Tagalog Duet', 'Kare-Kare Crustacean', 'Deconstructed Halo-Halo'];
    
    course.forEach((item, index) => {
        const courseItem = document.createElement('li');
        const menuList = document.createElement('ul');
        const menuItem = document.createElement('li');

        courseItem.textContent = item;
        menuItem.textContent = menu[index];
        menuList.classList.add('menuList');
  
        menuList.appendChild(menuItem);
        courseItem.appendChild(menuList);
        courseList.appendChild(courseItem);
    })  
    
    body.classList.add('menuImg');
    title.classList.add('menuTitle');
    courseList.classList.add('courseList');

    title.textContent = 'The Heritage Menu';

    content.appendChild(title);
    content.appendChild(courseList);
}