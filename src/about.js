export default function() {
    const body = document.querySelector('body');
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    const text = document.createElement('div');
    const aboutText = document.createElement('p');
    const aboutTextTwo = document.createElement('p');

    body.classList.add('aboutImg');
    text.classList.add('aboutText');
    aboutTextTwo.classList.add('aboutTextTwo');

    title.textContent = 'Get to know us';
    aboutText.textContent = 'Rooted in the rich culinary traditions of the Philippine islands, our kitchen is a tribute to the vibrant flavors, warmth, and hospitality of home. We take time-honored family recipes passed down through generations and elevate them with modern culinary techniques and locally sourced ingredients.'
    aboutTextTwo.textContent = 'From the comforting, slow-braised depth of our adobos to the bright, coastal freshness of our seafood, every dish we serve tells a story of cultural harmony and celebration. We invite you to gather at our table, experience the true spirit of Salu-Salo (togetherness), and discover a refined taste of the Philippines right in your neighborhood.'

    text.appendChild(aboutText);
    text.appendChild(aboutTextTwo);
    content.appendChild(title);
    content.appendChild(text);
}