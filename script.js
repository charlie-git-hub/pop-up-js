
document.querySelector('#popup').style.display = 'block';



    document.querySelector('#popup-close').onclick = e => {
        e.preventDefault();
        var popup = document.querySelector('#popup');
        popup.style.display = 'none';
        azertyuiop();
    }


