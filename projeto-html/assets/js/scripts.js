const BASE_URL = 'https://cataas.com/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {

    try {
        const data = await fetch(BASE_URL + 'cat?json=true');
        const json = await data.json();
        return BASE_URL + json.url;
        }catch(e) {
        	console.log(e.message);
	    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();

console.log(getCats());