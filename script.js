const mushroomData = {
    'manatarka': {
        title: 'Обикновена Манатарка',
        latin: 'Boletus edulis',
        desc: 'Ценна ядлива гъба. Има гугла с кафяв цвят и пънче, което е по-светло и удебелено в основата. Месото е бяло и не променя цвета си при разрязване.',
        warning: 'Може да се сбърка с Жлъчната манатарка (неотровна, но много горчива) или Дяволската гъба.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Boletus_edulis_EtgHolzmoerling.jpg/640px-Boletus_edulis_EtgHolzmoerling.jpg'
    },
    'muhomorka': {
        title: 'Червена Мухоморка',
        latin: 'Amanita muscaria',
        desc: 'Красива, но отровна гъба. Има яркочервена гугла с бели точици. Предизвиква халюцинации и стомашни разстройства.',
        warning: 'Внимание! Силно отровна. Често расте в близост до манатарки.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/2006-10-25_Amanita_muscaria_crop.jpg/640px-2006-10-25_Amanita_muscaria_crop.jpg'
    },
    'pachi': {
        title: 'Пачи Крак',
        latin: 'Cantharellus cibarius',
        desc: 'Една от най-вкусните гъби. Има характерен жълт цвят и форма на фуния. Ухае леко на кайсии. Никога не червясва.',
        warning: 'Може да се сбърка с Омфалотус (силно отровна), която расте на туфи върху дървета.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Pfifferling_Cantharellus_cibarius.jpg/640px-Pfifferling_Cantharellus_cibarius.jpg'
    },
    'deathcap': {
        title: 'Зелена Мухоморка',
        latin: 'Amanita phalloides',
        desc: 'Най-смъртоносната гъба в България! Шапката варира от жълто-зелена до маслинена. Има "чорапче" (волва) в основата.',
        warning: 'СМЪРТОНОСНА! Често се бърка с Печурките или гълъбките. Дори малко парче може да е фатално.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Amanita_phalloides_1.JPG/640px-Amanita_phalloides_1.JPG'
    },
    'surnela': {
        title: 'Сърнела',
        latin: 'Macrolepiota procera',
        desc: 'Много популярна и вкусна гъба. Има голяма шапка с люспи, наподобяваща чадър, и пръстенче на пънчето, което се движи свободно.',
        warning: 'Внимавайте за по-дребни двойници като Пантерката (отровна), чието пръстенче не се движи.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Macrolepiota_procera_pl.jpg/640px-Macrolepiota_procera_pl.jpg'
    },
    'satanas': {
        title: 'Дяволска гъба',
        latin: 'Rubroboletus satanas',
        desc: 'Едра и красива, но отровна гъба. Има сивкава шапка и червено пънче. При разрязване посинява силно.',
        warning: 'Двойник на Манатарката! Различава се по червените пори отдолу и силната синя промяна на цвета при натиск.',
        img: 'images/dqvloska.jpg'
    },
    'maslovka': {
        title: 'Обикновена Масловка',
        latin: 'Suillus luteus',
        desc: 'Вкусна гъба, често срещана в иглолистни гори. Шапката е слузеста и лепкава, с кафява кожа, която лесно се бели.',
        warning: 'Препоръчва се да се обели кожата на шапката преди готвене, защото може да предизвика разстройство.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Suillus_luteus_LC0245.jpg/640px-Suillus_luteus_LC0245.jpg'
    },
    'biasna': {
        title: 'Бясна гъба (Гълъбка)',
        latin: 'Russula emetica',
        desc: 'Малка гъба с яркочервена шапка и снежнобели пластинки. Има много лют, изгарящ вкус.',
        warning: 'Не е смъртоносна, но предизвиква силно повръщане. Лесно се бърка с ядливи червени гълъбки.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Russula_emetica_in_Poland.jpg/640px-Russula_emetica_in_Poland.jpg'
    }
};
function openModal(id) {
    const modal = document.getElementById('modal');
    const data = mushroomData[id];
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-latin').innerText = data.latin;
    document.getElementById('modal-desc').innerText = data.desc;
    document.getElementById('modal-warning').innerText = data.warning;
    document.getElementById('modal-img').src = data.img;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleDarkMode(){
    var element = document.body;
    element.classList.toggle("darkmode");
}

let currentFilter = 'all';

function filterMushrooms(type) {
    const cards = document.querySelectorAll('.card');
    const btnEdible = document.getElementById('btn-edible');
    const btnPoison = document.getElementById('btn-poison');

    if (currentFilter === type) {
        currentFilter = 'all';
        btnEdible.classList.remove('active');
        btnPoison.classList.remove('active');
    } else {
        currentFilter = type;
        if (type === 'edible') {
            btnEdible.classList.add('active');
            btnPoison.classList.remove('active');
        } else {
            btnPoison.classList.add('active');
            btnEdible.classList.remove('active');
        }
    }
    cards.forEach(card => {
        const statusSpan = card.querySelector('.status');
        const isEdible = statusSpan.classList.contains('edible');
        const isPoison = statusSpan.classList.contains('poison');

        if (currentFilter === 'all') {
            card.style.display = 'block'; 
        } else if (currentFilter === 'edible') {
            card.style.display = isEdible ? 'block' : 'none';
        } else if (currentFilter === 'poison') {
            card.style.display = isPoison ? 'block' : 'none';
        }
    });
}