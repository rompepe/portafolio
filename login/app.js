function inicio(){


    let correo = document.getElementById('correo').value;
    let contrasena =document.getElementById('contrasena').value;

    var personas = [
        {
            nombre : 'samuel',
            gmail : 'samuelitoito@gmail.com',
            contrasena : '123456'
        },
        {
            nombre : 'mesi',
            gmail : 'mesi@gmail.com',
            contrasena : '123456'
        },
        {
            nombre : 'donaldo',
            gmail : 'donaldo@gmail.com',
            contrasena : '123456'
        }
    ];

    personas.forEach(function(persona){
        if(correo == persona.gmail && contrasena == persona.contrasena){
            sessionStorage.setItem('nombre', persona.nombre);
            sessionStorage.setItem('auth', 1);
            location.href = '2index.html'
        }else{
            console.log('el correo o la contrasena estan malas')
        }
    })

}