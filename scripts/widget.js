const tasteButtons = document.querySelectorAll('.taste-button');
const iceCreamImages = document.querySelectorAll('.ice-cream-image');
const names = document.querySelectorAll('.name');

tasteButtons.forEach((tasteButton, buttonIndex) => {
    tasteButton.addEventListener('click', () => {
        //удаляем увеличение всем шариками мороженого
        iceCreamImages.forEach((iceCream) => {
            iceCream.classList.remove('ice-current');
        });
        //удаляем подписи
        names.forEach((name) => {
            name.classList.remove('name-current');
        });


//увеличиваем шарик мороженого, на кнопке которого вы щелкнули
        iceCreamImages.forEach((iceCream, iceCreamIndex) => {
            if(iceCreamIndex === buttonIndex) {
                iceCream.classList.add('ice-current');
            }
        });
        //показываем подпись
        names.forEach((name, nameIndex) => {
            if(nameIndex === buttonIndex) {
                name.classList.add('name-current');
            }
        });
    });
});



