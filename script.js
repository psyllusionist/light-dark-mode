const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
const imageMode = (mode) => {
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

// Toggle Light/Dark Mode Styles
const toggleDarkLightMode = (isLight) => {
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
            : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isLight ? imageMode('light') : imageMode('dark');
}

// Set Theme and Local Storage
const setTheme = (theme, toggle) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleDarkLightMode(toggle);
}

// Switch Theme Dynamically
const switchTheme = (e) => {
    if(e.target.checked){
        setTheme('dark', false);
    } else {
        setTheme('light', true);
    }
}

// Event Listener 
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(false);
    }
}