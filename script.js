var fins1 = document.getElementsByClassName("cls-6");
var fins2 = document.getElementsByClassName("cls-4");
var faces = document.getElementsByClassName("cls-5");
var bodies = document.getElementsByClassName("cls-3");
var fins3 = document.getElementsByClassName("cls-2");
var isPink= [0,0,0,0,0];

for (let i = 0; i < fins1.length; i++) {
    fins1[i].addEventListener('click', () => {
        if (isPink[4] == 0){
            fins1[i].style.fill = '#D43750';
            isPink[4] = 1;
        }
        else{
            fins1[i].style.fill = '#003b70';
            isPink[4] = 0;
        }

    });
} 
for (let i = 0; i < faces.length; i++) {
    faces[i].addEventListener('click', () => {
        if (isPink[3] == 0){
            faces[i].style.fill = '#F2C5E0';
            isPink[3] = 1;
        }
        else{
            faces[i].style.fill = '#3fa9f5';
            isPink[3] = 0;
        }
    });
}

for (let i = 0; i < bodies.length; i++) {
    bodies[i].addEventListener('click', () => {
        if(isPink[1] == 0){
            bodies[i].style.fill = '#EC8FD0';
            isPink[1]= 1;
        }
        else{
            bodies[i].style.fill = '#0071bc'
            isPink[1] = 0;
        }
    });
}

for (let i = 0; i < fins3.length; i++) {
    fins3[i].addEventListener('click', () => {
        if (isPink[0] == 0){
            fins3[i].style.fill = '#870A30';
            isPink[0] = 1;
        }
        else {
            fins3[i].style.fill = '#1b1464';
            isPink[0] = 0;
        }

    });
}
for (let i = 0; i < fins2.length; i++) {
    fins2[i].addEventListener('click', () => {
        if (isPink[2] == 0){
            fins2[i].style.fill = '#D43790';
            isPink[2] = 1;
        }
        else{
            fins2[i].style.fill = '#0068bc';
            isPink[2] = 0;
        }
    });
}