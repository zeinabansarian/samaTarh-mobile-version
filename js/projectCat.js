let projectCatTitle = document.querySelectorAll('.projectCatTitle span');
let i = 1;
projectCatTitle.forEach(e => {
    if(i<10){

        e.textContent = `0${i}`;
    }
    else{
        e.textContent = i;

    }
    i++
});