const mushroomData = {
    'manatarka': {
        title: 'Обикновена Манатарка',
        latin: 'Boletus edulis',
        desc: 'Ценна ядлива гъба. Има гугла с кафяв цвят и пънче, което е по-светло и удебелено в основата. Месото е бяло и не променя цвета си при разрязване.',
        warning: 'Може да се сбърка с Жлъчната манатарка (неотровна, но много горчива) или Дяволската гъба.',
        img: 'images/manatarka.jpg'
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
        img: 'images/pachi-krak.jpg'
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
        img: 'images/surnela.jpg'
    },
    'satanas': {
        title: 'Дяволска гъба',
        latin: 'Rubroboletus satanas',
        desc: 'Едра и красива, но отровна гъба. Има сивкава шапка и червено пънче. При разрязване посинява силно.',
        warning: 'Двойник на Манатарката! Различава се по червените пори отдолу и силната синя промяна на цвета при натиск.',
        img: 'images/dqvolska.jpg'
    },
    'maslovka': {
        title: 'Обикновена Масловка',
        latin: 'Suillus luteus',
        desc: 'Вкусна гъба, често срещана в иглолистни гори. Шапката е слузеста и лепкава, с кафява кожа, която лесно се бели.',
        warning: 'Препоръчва се да се обели кожата на шапката преди готвене, защото може да предизвика разстройство.',
        img: 'images/maslovka.jpg'
    },
    'biasna': {
        title: 'Бясна гъба (Гълъбка)',
        latin: 'Russula emetica',
        desc: 'Малка гъба с яркочервена шапка и снежнобели пластинки. Има много лют, изгарящ вкус.',
        warning: 'Не е смъртоносна, но предизвиква силно повръщане. Лесно се бърка с ядливи червени гълъбки.',
        img: 'images/bqsna.jpg'
    },
    'kladnica': {
        title: 'Кладница',
        latin: 'Pleurotus ostreatus',
        desc: 'Расте на туфи върху широколистни дървета. Шапката е ветрилообразна, сива или кафява. Месото е бяло и плътно.',
        warning: 'Безопасна гъба, но внимавайте да не я берете от замърсени райони край пътища, тъй като попива газове.',
        img: 'images/kladnica.jpg'
    },
    'omfalotus': {
        title: 'Омфалотус (Маслинова гъба)',
        latin: 'Omphalotus olearius',
        desc: 'Красива, оранжева гъба, която расте на туфи върху пънове. Пластинките й светят в тъмното (биолуминесценция).',
        warning: 'ОТРОВЕН двойник на Пачия крак! Различава се по това, че расте на дърво, а не на земята.',
        img: 'images/omfalotus.jpg'
    },
    'cheladinka': {
        title: 'Полска Челадинка',
        latin: 'Marasmius oreades',
        desc: 'Дребна, но вкусна гъба. Расте на "самодивски кръгове" по ливадите. Има приятен аромат на бадеми.',
        warning: 'Внимавайте за отровни двойници от род Clitocybe, които обаче нямат характерната жилавост на пънчето.',
        img: 'images/cheladinka.jpg'
    },
    'karbolova': {
        title: 'Карболова печурка',
        latin: 'Agaricus xanthodermus',
        desc: 'Двойник на ядливите печурки. При натиск в основата на пънчето пожълтява ярко. Мирише неприятно на мастило/карбол.',
        warning: 'Силно отровна! При варене миризмата на химия се засилва. Не яжте печурки, които пожълтяват при нараняване!',
        img: 'images/karbolova.jpg'
    },
    'rijika': {
        title: 'Рижика',
        latin: 'Lactarius deliciosus',
        desc: 'Оранжева гъба, която при разрязване отделя оранжев "млечен" сок. Расте основно в иглолистни гори.',
        warning: 'Сравнително лесна за разпознаване. Внимавайте да не я сбъркате с лъжливата млечница (бял сок).',
        img: 'images/rijika.jpg'
    },
    'panterka': {
        title: 'Пантерка',
        latin: 'Amanita pantherina',
        desc: 'Кафява шапка с множество бели брадавици. Прилича на Бисерната гъба и Сърнелата, но е по-дребна.',
        warning: 'СИЛНО ОТРОВНА! Пръстенчето на пънчето НЕ се движи (за разлика от Сърнелата).',
        img: 'images/panterka.jpg'
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