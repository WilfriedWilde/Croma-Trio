// Navbar Display 

const navbar = document.getElementById('navbar');

let lastScrollY = 0;

const handleNavbarDisplay = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        navbar.classList.add('hide-navbar');
    } else if (currentScrollY < lastScrollY) {
        navbar.classList.remove('hide-navbar');
    }

    lastScrollY = currentScrollY;
};

document.documentElement.style.setProperty('--scroll-padding', `${navbar.offsetHeight}px`);

document.addEventListener('scroll', handleNavbarDisplay);

// Scroll Animation

const scrollTexts = document.querySelectorAll('.scroll-text')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
        entry.target.getBoundingClientRect();
    }),
    {
        threshold: 1
    }
});

scrollTexts.forEach((text) => {
    observer.observe(text)
})

// Translation 

const textToTranslate = document.querySelectorAll('.text');
const menuOptions = document.querySelectorAll('.menu-option');
const sectionTitles = document.querySelectorAll('.section-title');
const aboutUs = document.getElementById('about-us-text');
const concertTexts = document.querySelectorAll('.concert-text');
const storyTitle = document.querySelector('.story-title');
const storyText = document.querySelector('.story-text');

/*const handleStoriesTranslation = async (lang) => {
    const response = await fetch('/stories.txt');
    const translations = await response.text();

    const appendTranslations = (lang, titleIndex, textTitle) => {
        if (lang === 'ca') {
            storyTitle.innerHTML = translations
            storyText.innerHTML = translations
        } else if (lang === 'es') {
            storyTitle.innerHTML = translations[lang].title[titleIndex];
            storyText.innerHTML = translations[lang].text[textTitle]
        } else if (lang === 'en') {
            storyTitle.innerHTML = translations[lang].title[titleIndex];
            storyText.innerHTML = translations[lang].text[textTitle]
        }; 
    };

    if (document.location.pathname.includes("l'ampolla.html")) {
        appendTranslations('ca', 0, lampolla);
        appendTranslations('es', 0, lampolla);
        appendTranslations('en', 0, lampolla);
    } else if (document.location.pathname.includes("triàfobia.html")) {
        appendTranslations('ca', 1, triafobia);
        appendTranslations('es', 1, triafobia);
        appendTranslations('en', 1, triafobia);
    } else if (document.location.pathname.includes("fum.html")) {
        appendTranslations('ca', 2, fum);
        appendTranslations('es', 2, fum);
        appendTranslations('en', 2, fum);
    } else if (document.location.pathname.includes("uns segons de silenci.html")) {
        appendTranslations('ca', 3, silenci);
        appendTranslations('es', 3, silenci);
        appendTranslations('en', 3, silenci);
    };
};

handleStoriesTranslation('ca')*/

const translation = {
    ca: {
        menu: ["vídeo", "música", "relats", "sobre nosaltres", "concerts", "galeria", "contacte"],
        about: `<div class="small-text scroll-text left">
                    <div>
                        Cromo -Croma
                    </div>
                    <div>
                        [LC] Forma sufixada del terme grec <span class='italic'>khrôma</span>, 'color'. (DIEC2)
                    </div>
                </div>
                <p class="scroll-text right">
                    Croma és la meva realitat distorsionada, allò que em van dir que mai veuria com els altres. La meva condició de daltònic sempre m’ha provocat una fascinació diferent pels colors.
                </p>
                <p class="scroll-text left">
                    Croma és un projecte en trio que es mou entre el jazz contemporani i la literatura. La idiosincràsia del projecte es basa en la composició inspirada en diversos microrelats escrits per Guillem Salles, que transiten entre la ficció distòpica i el costumisme.
                </p>
                <p class="scroll-text right">
                    ‘Cambra Blanca’ <span class='italic'>(AMP Music & Records)</span> és el primer treball de la formació, un disc argumental i també descriptiu, enèrgic i emocional. El disc és una fotografia sonora de la música acústica del trio amb petites pinzellades de postproducció. 4 suites per a 4 relats breus.
                    Cada tema està inspirat en una història fictícia, en un personatge o en una societat que perceben la realitat distorsionada d’alguna manera.
                </p>
                <p class="scroll-text left">
                    Igual que jo, i igual que tots.
                </p>`,
        concert: ["avui", "passats", "propers", "no hi ha concerts programats"]
    },
    es: {
        menu: ["vídeo", "música", "relatos", "sobre nosotros", "conciertos", "galería", "contacto"],
        about: `<div class="small-text scroll-text left">
                    <div>
                        Cromo -Croma
                    </div>
                    <div>
                        [LC] Forma sufijada del término griego <span class='italic'>khrôma</span>, 'color'.
                        (DIEC2)
                    </div>
                </div>
                <p class="scroll-text right">
                    Croma es mi realidad distorsionada, aquello que me dijeron que nunca vería
                    como los
                    demás. Mi condición de daltónico siempre me ha provocado una fascinación diferente
                    por los colores.
                </p>
                <p class="scroll-text left">
                    Croma es un proyecto en trío que se mueve entre el jazz contemporáneo y la
                    literatura.
                    La idiosincrasia del proyecto se basa en la composición inspirada en diversos
                    microrrelatos escritos por Guillem Salles, los cuales transitan entre la ficción distópica y
                    el costumbrismo.
                </p>
                <p class="scroll-text right">
                    ‘Cambra Blanca’ <span class='italic'>(AMP Music & Records)</span> es el
                    primer trabajo de la formación, un
                    disco argumental y también descriptivo, enérgico y emocional. El disco es una
                    fotografía sonora de la música acústica del trío con pequeñas pinceladas de
                    postproducción.4 suites para 4 relatos breves. Cada tema está inspirado en una historia ficticia, en un
                    personaje o en una sociedad que perciben la realidad distorsionada de alguna manera.
                </p>
                <p class="scroll-text left">
                    Igual que yo, e igual que todos.
                </p>`,
        concert: ["hoy", "pasados", "próximos", "no hay conciertos programados"]
    },
    en: {
        menu: ["video", "music", "stories", "about us", "concerts", "gallery", "contact"],
        about: `<div class="small-text scroll-text left">
                    <div>
                        Cromo -Croma
                    </div>
                    <div>
                        [LC] Suffix form of the Greek term khrôma, 'color'. (DIEC2) (DIEC2)
                    </div>
                </div>
                <p class="scroll-text right">
                    Croma is my distorted reality, what they told me I would never see like others do. My condition as a colorblind person has always given me a different fascination with colors.
                </p>
                <p class="scroll-text left">
                    Croma is a trio project that moves between contemporary jazz and literature. The idiosyncrasy of the project is based on compositions inspired by various micro-stories written by Guillem Salles, which range from dystopian fiction to everyday realism.
                </p>
                <p class="scroll-text right">
                    ‘Cambra Blanca’ <span class='italic'>(AMP Music & Records)</span> is the first work by the group, a conceptual and descriptive album, energetic and emotional. The album is a sonic photograph of the trio's acoustic music with small touches of post-production. 4 suites for 4 short stories.
                    Each track is inspired by a fictional story, a character, or a society that perceives reality in a distorted way.
                </p>
                <p class="scroll-text left">
                    Just like me, and just like everyone else.
                </p>`,
        concert: ["today", "past", "upcoming", "no concerts scheduled"]
    }
};

const setTranslation = async (language) => {
    scrollTexts.forEach((text) => {
        observer.unobserve(text)
    });

    if (language === languageIcons[0]) {
        for (let i = 0; i < textToTranslate.length; i++) {
            textToTranslate[i].style.animation = '';
            textToTranslate[i].offsetHeight;
            textToTranslate[i].style.animation = 'fade-in 1s ease-in-out forwards';
        };
        for (let i = 0; i < menuOptions.length; i++) {
            menuOptions[i].innerText = translation.ca.menu[i];
            sectionTitles[i].innerText = translation.ca.menu[i];
        };
        aboutUs.innerHTML = translation.ca.about;
        for (let i = 0; i < concertTexts.length; i++) {
            concertTexts[i].innerText = translation.ca.concert[i];
        };
    } else if (language === languageIcons[1]) {
        for (let i = 0; i < textToTranslate.length; i++) {
            textToTranslate[i].style.animation = '';
            textToTranslate[i].offsetHeight;
            textToTranslate[i].style.animation = 'fade-in 1s ease-in-out forwards';
        };
        for (let i = 0; i < menuOptions.length; i++) {
            menuOptions[i].innerText = translation.es.menu[i];
            sectionTitles[i].innerText = translation.es.menu[i];
        };
        aboutUs.innerHTML = translation.es.about;
        for (let i = 0; i < concertTexts.length; i++) {
            concertTexts[i].innerText = translation.es.concert[i];
        };
    } else if (language === languageIcons[2]) {
        for (let i = 0; i < textToTranslate.length; i++) {
            textToTranslate[i].style.animation = '';
            textToTranslate[i].offsetHeight;
            textToTranslate[i].style.animation = 'fade-in 1s ease-in-out forwards';
        };
        for (let i = 0; i < menuOptions.length; i++) {
            menuOptions[i].innerText = translation.en.menu[i];
            sectionTitles[i].innerText = translation.en.menu[i];
        };
        aboutUs.innerHTML = translation.en.about;
        for (let i = 0; i < concertTexts.length; i++) {
            concertTexts[i].innerText = translation.en.concert[i];
        };
    };

    const newScrollTexts = document.querySelectorAll('.scroll-text');
    newScrollTexts.forEach((text) => {
        observer.observe(text);
    });
};

// Flags Hover 

const languageIcons = document.querySelectorAll('.language-container');
const flags = document.querySelectorAll('.language-flag');

const handleFlagDisplay = (icon) => {
    (languageIcons[1])
    for (let i = 0; i < languageIcons.length; i++) {
        if (icon === languageIcons[i]) {
            flags[i].classList.add('show-flag');
            flags[(i + 1) % 3].classList.remove('show-flag');
            flags[(i + 2) % 3].classList.remove('show-flag');
        };
    };
};

languageIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        handleFlagDisplay(icon);
        setTranslation(icon);
    });
});


// Instagram Icon Hover

const instagramIcon = document.getElementById('instagram-icon');
let isHovered = false;

changeIconColor = () => {
    const instaStops = instagramIcon.querySelectorAll('.grad-insta-stop');
    const instaStopsOne = [];
    const instaStopsTwo = [];
    const instaStopsThree = [];
    const instaStopsFour = [];

    for (let i = 0; i < instaStops.length; i++) {
        if (instaStops[i].classList.contains("one")) {
            instaStopsOne.push(instaStops[i]);
        } else if (instaStops[i].classList.contains("two")) {
            instaStopsTwo.push(instaStops[i]);
        } else if (instaStops[i].classList.contains("three")) {
            instaStopsThree.push(instaStops[i]);
        } else if (instaStops[i].classList.contains("four")) {
            instaStopsFour.push(instaStops[i]);
        }

    };

    if (isHovered) {
        for (let i = 0; i < instaStopsOne.length; i++) {
            instaStopsOne[i].classList.remove('animation-insta-out-one');
            instaStopsOne[i].classList.add('animation-insta-in-one');
        };
        for (let i = 0; i < instaStopsTwo.length; i++) {
            instaStopsTwo[i].classList.remove('animation-insta-out-two');
            instaStopsTwo[i].classList.add('animation-insta-in-two');
        };
        for (let i = 0; i < instaStopsThree.length; i++) {
            instaStopsThree[i].classList.remove('animation-insta-out-three');
            instaStopsThree[i].classList.add('animation-insta-in-three');
        };
        for (let i = 0; i < instaStopsFour.length; i++) {
            instaStopsFour[i].classList.remove('animation-insta-out-four');
            instaStopsFour[i].classList.add('animation-insta-in-four');
        };
    } else {
        for (let i = 0; i < instaStopsOne.length; i++) {
            instaStopsOne[i].classList.add('animation-insta-out-one');
            instaStopsOne[i].classList.remove('animation-insta-in-one');
        };
        for (let i = 0; i < instaStopsTwo.length; i++) {
            instaStopsTwo[i].classList.add('animation-insta-out-two');
            instaStopsTwo[i].classList.remove('animation-insta-in-two');
        };
        for (let i = 0; i < instaStopsThree.length; i++) {
            instaStopsThree[i].classList.add('animation-insta-out-three');
            instaStopsThree[i].classList.remove('animation-insta-in-three');
        };
        for (let i = 0; i < instaStopsFour.length; i++) {
            instaStopsFour[i].classList.add('animation-insta-out-four');
            instaStopsFour[i].classList.remove('animation-insta-in-four');
        };
    };
};

instagramIcon.addEventListener('mouseenter', () => {
    isHovered = true;
    changeIconColor();
});
instagramIcon.addEventListener('mouseleave', () => {
    isHovered = false;
    changeIconColor();
});

// Parallax 

const homeSection = document.getElementById('home');
const storiesSection = document.getElementById('stories');
const aboutUsSection = document.getElementById('about-us');

const handleParallax = () => {
    const offset = window.scrollY;

    homeSection.style.backgroundPositionY = -435 + offset * 0.7 + "px";
    storiesSection.style.backgroundPositionY = 800 + offset * 0.7 + "px";
    aboutUsSection.style.backgroundPositionY = -400 + offset * 0.7 + "px";
}

window.addEventListener('scroll', handleParallax);

// Stories Movement

const stories = document.querySelectorAll('.story-link');

let isMoving = true;

const getDirection = () => {
    const directions = ['up', 'right', 'down', 'left'];
    const getRandomIndex = () => {
        return Math.round(Math.random() * 3)
    };
    const getRandomNext = (currentIndex) => {
        const change = Math.round(Math.random() * 2) - 1;
        return (currentIndex + change + directions.length) % directions.length;
    };

    let randomDirections = {
        x: '',
        y: ''
    };

    const randomIndex = getRandomIndex();

    if ([0, 2].includes(randomIndex)) {
        randomDirections.y = directions[randomIndex];
        randomDirections.x = directions[getRandomNext(randomIndex)];
    } else {
        randomDirections.x = directions[randomIndex];
        randomDirections.y = directions[getRandomNext(randomIndex)];
    }
    return randomDirections;
};

const getSpeed = () => {
    return (Math.random() * 1.5) + 0.4;
};

const move = (element, parent, directionX, directionY, speed) => {
    let isMoving = true;

    element.addEventListener('mouseenter', () => {
        isMoving = false;
    });
    element.addEventListener('mouseleave', () => {
        isMoving = true;
        requestAnimationFrame(moveStory);
    });

    const parentRect = parent.getBoundingClientRect();

    let xPosition = parseInt(element.style.left) || 0;
    let yPosition = parseInt(element.style.top) || 0;

    let dx = directionX === 'right' ? 1 : directionX === 'left' ? -1 : 0;
    let dy = directionY === 'down' ? 1 : directionY === 'up' ? -1 : 0;

    const moveStory = () => {
        if (!isMoving) {
            return;
        };

        xPosition += dx * speed;
        yPosition += dy * speed;

        if (xPosition < 0 || xPosition > parentRect.width - element.offsetWidth) {
            dx = -dx;
        }

        if (yPosition < 0 || yPosition > parentRect.height - element.offsetHeight) {
            dy = -dy;
        }

        element.style.left = `${xPosition}px`;
        element.style.top = `${yPosition}px`;

        requestAnimationFrame(moveStory);

    };

    requestAnimationFrame(moveStory);
};


const moveAllStories = () => {
    stories.forEach((story) => {
        const parent = story.parentNode;
        const directionX = getDirection().x;
        const directionY = getDirection().y;
        const speed = getSpeed();

        move(story, parent, directionX, directionY, speed);
    });
};

moveAllStories();

storiesSection.addEventListener('click', moveAllStories);

// Concerts 

const concertsLists = document.querySelectorAll('.concerts-list');

let concerts = [];
let pastConcerts = [];
let todayConcerts = [];
let upcomingConcerts = [];
let years = {
    past: new Set(),
    today: new Set(),
    upcoming: new Set()
};

const fetchSheetData = async () => {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQAV5kqu-WfugA8JDQj2r7WNAWq4YngYttf69SlZGj7OLDwbJw2isuZO1sFSpLvn76arcQbB8-hVkBK/pubhtml';

    try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const table = doc.querySelector('tbody');
        const rows = Array.from(table.querySelectorAll('tr')).splice(1);

        concerts = rows.map((row) => {
            const cells = row.querySelectorAll('td');

            return {
                date: cells[0]?.innerText || 'N/A',
                venue: cells[1]?.innerText || 'N/A',
                venueLink: cells[2]?.innerText || 'N/A',
                city: cells[3]?.innerText || 'N/A',
                country: cells[4]?.innerText || 'N/A'
            };
        });
        return concerts;
    } catch (error) {
        console.log('Error fetching sheet data', error);
        return [];
    }
};

const sortDates = async () => {
    await fetchSheetData();

    concerts.forEach((concert) => {
        concert.date = Number(`${concert.date.split('/').reverse().join('')}`)
    })

    concerts.sort((a, b) => a.date - b.date);

    concerts.forEach(concert => {
        concert.date = `${String(concert.date).slice(0, 4)}-${String(concert.date).slice(4, 6)}-${String(concert.date).slice(6, 8)}`;
    });
};

const sortConcerts = async () => {
    await sortDates();

    const today = new Date();

    const formatDate = (object) => {
        object.date = object.date.split('-').join('');
        object.year = String(object.date).slice(0, 4);
        object.date = `${String(object.date).slice(6, 8)}.${String(object.date).slice(4, 6)}`;
    }

    const handleSorting = (concert, concertsArray, timePeriod) => {
        formatDate(concert);
        concertsArray.push(concert);
        years[timePeriod].add(concert.year);
    };

    concerts.forEach(concert => {
        const concertDate = new Date(concert.date);

        if (concertDate.getYear() === today.getYear()
            && concertDate.getMonth() === today.getMonth()
            && concertDate.getDate() === today.getDate()) {
            handleSorting(concert, todayConcerts, 'today');
        } else if (concertDate.toISOString() < today.toISOString()) {
            handleSorting(concert, pastConcerts, 'past');
        } else if (concertDate.toISOString() > today.toISOString()) {
            handleSorting(concert, upcomingConcerts, 'upcoming');
        }
    });
};

const displayConcerts = async () => {
    await sortConcerts();

    const templateYear = (year) => {
        return `<div class="year-container"><div class="year">${year}</div></div>`;
    };
    const templateCard = (concert) => {
        return `<div class="concert-card">
                    <div class="date">${concert.date}</div>
                    <div class="venue">
                        <a class="venue-link" href="${concert.venueLink}">${concert.venue}</a>
                    </div>
                    <div class="location-container">
                        <div class="city">${concert.city}</div>
                        <div>(<span class="country">${concert.country}</span>)</div>
                    </div>
                </div>`;
    };

    const appendConcerts = (list, concertsArray, timePeriod) => {
        list.style.display = 'block';

        years[timePeriod].forEach(year => {
            list.lastElementChild.innerHTML += templateYear(year);
        });

        concertsArray.forEach(concert => {
            const yearTexts = list.querySelectorAll('.year');

            yearTexts.forEach(yearText => {
                if (concert.year === yearText.innerText) {
                    yearText.parentNode.innerHTML += templateCard(concert);
                };
            });
        });
    };

    concertsLists.forEach(list => {
        if (list.id === "today-concert") {
            if (!todayConcerts.length) {
                return;
            } else {
                appendConcerts(list, todayConcerts, 'today');
            };
        } else if (list.id === "past-concerts") {
            if (!pastConcerts.length) {
                return;
            } else {
                appendConcerts(list, pastConcerts, 'past');
            };
        } else if (list.id === "upcoming-concerts") {
            if (!upcomingConcerts.length) {
                document.getElementById('no-concert-text').style.display = 'flex';
            } else {
                appendConcerts(list, upcomingConcerts, 'upcoming');
            };
        };
    });
};

displayConcerts();

concertsLists.forEach((list) => {
    const name = list.querySelector('.concerts-list-name');
    const selector = list.querySelector('.concerts-list-selector');
    const content = list.querySelector('.concerts-list-content');

    const showConcerts = () => {
        list.classList.toggle('shadow');
        selector.classList.toggle('time-period-selected');
        content.classList.toggle('show-concerts-content');
    };

    name.addEventListener('click', showConcerts)
});

// Gallery 

const images = Array.from(document.querySelectorAll('.image-container'));

const displayFullScreen = (event) => {
    const selectedImage = event.target;
    console.log(selectedImage)
}

images.forEach(image => {
    image.addEventListener('click', displayFullScreen)
})

// Stories 

