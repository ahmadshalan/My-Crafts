

function welcomeMessage(){

    var message ='';
    var age = prompt('what is your age?')
    console.log(age);

    if (age>18){ 
        message = 'welcome';
    }else{
        message = 'not allowed';
    }

    return document.write(message);
}
welcomeMessage();



for (i=0; i<=12; i++){

    console.log(i);
}

