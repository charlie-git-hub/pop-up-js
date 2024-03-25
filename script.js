
document.querySelector('#popup').style.display = 'block';


var elements = document.getElementsById('spoiler');
elements[i].addEventListener('click', function(e) {
    var elements = document.getElementsByClassName('img_accueil');
    for (var i = 0; i < elements.length; i++) {
            this.style.filter = 'blur(1.5rem)';
            document.getElementById('popup-close').addEventListener('click', function(e) {
                document.getElementById('popup').style.display = 'none'})          
        }});


    document.querySelector('#popup-close').onclick = e => {
        e.preventDefault();
        var popup = document.querySelector('#popup');
        popup.style.display = 'none';
        azertyuiop();
    }