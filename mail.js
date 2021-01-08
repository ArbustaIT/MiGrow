
sendmail = async (to, nam, toto) => {
    return new Promise(resolve => setTimeout(() => {
        Email.send({
            SecureToken: "ec551810-4c3a-4472-bbba-37e8ba7098ff",
            To: to,
            From: "migrow@arbusta.net",
            Subject: "TU 2020 EN ARBUSTA",
            Body: '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #eeeeee;font-family: Arial, Helvetica, sans-serif;"><tr><td align="center"><div style="width: 600px!important; background-color: #ffff;text-align: left;"><img src="https://migrow.arbusta.net/lib/img/Header_2020_Arbusta_mail.jpg" style="width: 600px;"><br><h2 style="margin-left: 50px;">Hola ' + nam + ', </h2><p style="margin-left: 50px;margin-right: 50px; text-align: justify;font-size: 20px;;line-height: 24px;">Que año intenso, ¿verdad? No hay duda de que el 2020 fue diferente y cambiaron muchas cosas, como nuestros ábitos y nuestra forma de apreciar la vida, pero no fue lo único. <br><br> También CRECIMOS, nos desafiamos, abrazamos nuestra vulnerabilidad, develamos nuestros talentos, y nos asumimos protagonistas de nuestro propio crecimiento. Por eso te presentamos MI GROW, para compartirte nuestra mirada sobre tu crecimiento. Cualquier reflexión, o información que te parezca relevante modificar o agregar, es muy bienvenida en este formulario. <br><br> Te invitamos a abrir este regalo poniendo una música que te guste de fondo, o tomando algo rico, o prendiendo una velita. Es una celebración a tu persona. Esperamos que la disfrutes.</p><br><div class="but" style="width: 600px;height: auto;text-align: center!important;"><a href="https://migrow.arbusta.net/?' + encodeURI(btoa(toto)) + '"><img src="https://migrow.arbusta.net/lib/img/Boton_mail_migrow.jpg"></a><br><h2>¡Te deseamos un hermoso 2021!</h2><br></div><img src="https://migrow.arbusta.net/lib/img/Footer_mail_miGrow.jpg" style="width: 600px;"></div></td></tr></table>'
        }).then(
            (message) => {
                if (message == 'OK') {
                    console.log("Mail sent successfully to", toto)
                    resolve(true)
                } else {
                    console.error(message, toto)
                    resolve(false)
                }
                
            })
    }, 2000));



};

getdata = () => {
    fetch('https://script.google.com/a/macros/arbusta.net/s/AKfycbwVeOng24GwZZUuC_Ef6tPJ0HpHlBimimkOhisAxQXMpmVYDsE0Wu3kIg/exec?getmail', { cache: 'no-cache' }).then(Response => {
        Response.json().then(inf => {
            var todok = 0, cone = [];

            for (let i = 0; i < inf.length; i++) {

                if (inf[i].mail && inf[i].meses >= 6 && inf[i].talento) {
                    todok++
                    cone.push(inf[i])
                }
            }

            window.sessionStorage.setItem('inf', JSON.stringify(cone));
            //console.log(cone);
            $('#info').html('Colaboradores seleccionados: ' + todok)
            $('button').show()
        })
    }).catch(err => {
        console.log(err)
    })
}

sendIt = (x) => {
    inf = JSON.parse(window.sessionStorage.getItem('inf'));
    again = [];

try{
      if (inf.length >= 1) {
        if (x == 'test') {


            var mailtete = prompt('A que correo quiere enviar el test?')

            for (let i = 0; i < inf.length; i++) {

                nam = (inf[i].name.split(', ')[1].includes(' ')) ? inf[i].name.split(', ')[1].split(' ')[0] : inf[i].name.split(', ')[1]
                sendmail(mailtete, nam, inf[i].mail).then((x) => {
                    if (x) {

                    } else {
                        again.push(inf[i])
                        console.log('error')
                    }
                })
            }

        } else {
            /* if (confirm('Seguro que quieres enviar? Esta opción enviará los mails directamente a los colaboradores')) {
                for (let i = 0; i < inf.length; i++) {
                    setTimeout(() => {
                        nam = (inf[i].name.split(', ')[1].includes(' ')) ? inf[i].name.split(', ')[1].split(' ')[0] : inf[i].name.split(', ')[1]
 
 
                        sendmail(inf[i].mail, nam, inf[i].mail).then((x) => {
                            if (x) {
 
                            } else {
                                again.push(inf[i])
                                console.log('error')
                            }
                        })
                    }, 2000)
                }
            } */
        }
    }
}catch(err){
    console.error(err)
}finally{
    console.log(again)
}
  
}

//var contenido = '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #eeeeee;font-family: Arial, Helvetica, sans-serif;"><tr><td align="center"><div style="width: 600px!important; background-color: #ffff;text-align: left;"><img src="https://migrow.arbusta.net/lib/img/Header_2020_Arbusta_mail.jpg" style="width: 600px;"><br><h2 style="margin-left: 50px;">Hola ' + nam + ', </h2><p style="margin-left: 50px;margin-right: 50px; text-align: justify;font-size: 20px;;line-height: 24px;">Que año intenso, ¿verdad? No hay duda de que el 2020 fue diferente y cambiaron muchas cosas, como nuestros ábitos y nuestra forma de apreciar la vida, pero no fue lo único. <br><br> También CRECIMOS, nos desafiamos, abrazamos nuestra vulnerabilidad, develamos nuestros talentos, y nos asumimos protagonistas de nuestro propio crecimiento. Por eso te presentamos MI GROW, para compartirte nuestra mirada sobre tu crecimiento. Cualquier reflexión, o información que te parezca relevante modificar o agregar, es muy bienvenida en este formulario. <br><br> Te invitamos a abrir este regalo poniendo una música que te guste de fondo, o tomando algo rico, o prendiendo una velita. Es una celebración a tu persona. Esperamos que la disfrutes.</p><br><div class="but" style="width: 600px;height: auto;text-align: center!important;"><a href="https://migrow.arbusta.net/?'+ nam +'"><img src="https://migrow.arbusta.net/lib/img/Boton_mail_migrow.jpg"></a><br><h2>¡Te deseamos un hermoso 2021!</h2><br></div><img src="https://migrow.arbusta.net/lib/img/Footer_mail_miGrow.jpg" style="width: 600px;"></div></td></tr></table>'