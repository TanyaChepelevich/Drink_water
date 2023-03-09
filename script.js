const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');


updateBigCup();

smallCups.forEach((cup, indx) => {
    cup.addEventListener('click', () => highlightCups(indx));
})

function highlightCups(i) {
    if (smallCups[i].classList.contains('fill') && !smallCups[i].nextElementSibling?.classList.contains('fill')) {
        i--;
    }

    smallCups.forEach((cup, ind) => {
        if(ind <= i) {
            cup.classList.add('fill');
        } else {
            cup.classList.remove('fill');
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.fill').length;
    const totalCups = smallCups.length;
    console.log(fullCups, totalCups)

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups *100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2-(250 * fullCups /1000)}L`
    }
}