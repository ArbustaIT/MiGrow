$(() => {
    var nowst = window.location.search;

    if (nowst) {
        nowst = atob(nowst.replace('?', ''))

        if (nowst.includes('arbusta.net')) {
            //pedir datos y enviar mail
            fetch('https://script.google.com/a/macros/arbusta.net/s/AKfycbwVeOng24GwZZUuC_Ef6tPJ0HpHlBimimkOhisAxQXMpmVYDsE0Wu3kIg/exec?' + nowst, { cache: 'no-cache' }).then(Response => {
                Response.json().then(json => {
                    sendmail(nowst, (json.name.split(', ')[1].includes(' ')) ? json.name.split(', ')[1].split(' ')[0] : json.name.split(', ')[1], nowst)
                })
                $('#info').html('Enviando...')
            }).catch(err => {
                console.log(err)
                $('#info').html('Error :(')
            })

        } else {
            window.close()
        }

    } else {
        window.close()
    }
})

sendmail = (to, nam, toto) => {
    Email.send({
        SecureToken: "ec551810-4c3a-4472-bbba-37e8ba7098ff",
        To: to,
        From: "Grow <migrow@arbusta.net>",
        Subject: "¡Tu GROW en Arbusta! 🚀",
        Body: '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #eeeeee;font-family: Arial, Helvetica, sans-serif;"><tr><td align="center"><div style="width: 600px!important; background-color: #ffff;text-align: left;"><img src="https://migrow.arbusta.net/lib/img/Header_2020_Arbusta_mail.jpg" style="width: 600px;"><br><h2 style="margin-left: 50px;">Hola ' + nam + ', </h2><p style="margin-left: 50px;margin-right: 50px; text-align: justify;font-size: 20px;;line-height: 24px;">En este comienzo de año, queremos celebrar con vos lo que juntos/as hemos logrado.<br><br> CRECIMOS, nos desafiamos, abrazamos nuestra vulnerabilidad, develamos nuestros talentos, y nos asumimos protagonistas de nuestro propio crecimiento. Te presentamos MI GROW, para compartirte nuestra mirada sobre tu crecimiento. <br><br> Mi GROW está basado en los datos registrados en Arbusta. Cualquier reflexión y/o información que te parezca relevante modificar o agregar, es muy bienvenida en este <a href="https://docs.google.com/forms/d/e/1FAIpQLSevSiCcHOIckm0SfmL7V7auFcx_1eVj5Of2vdoAPSv00vq4_Q/viewform">formulario.</a> <br><br> Te invitamos a abrir este regalo poniendo una música que te guste de fondo, o tomando algo rico, o prendiendo una velita. Es una celebración a tu persona. Esperamos que la disfrutes. </p><br><div class="but" style="width: 600px;height: auto;text-align: center!important;"><a href="https://migrow.arbusta.net/?' + encodeURI(btoa(toto)) + '"><img src="https://migrow.arbusta.net/lib/img/Boton_mail_migrow.jpg"></a><br><h2>¡Te deseamos un hermoso 2021!</h2><br></div><img src="https://migrow.arbusta.net/lib/img/Footer_mail_miGrow.jpg" style="width: 600px;"></div></td></tr></table>'
    }).then(
        (message) => {
            $('#info').html('Listo!')
            if(message == 'OK'){
                fetch('https://script.google.com/a/macros/arbusta.net/s/AKfycbwVeOng24GwZZUuC_Ef6tPJ0HpHlBimimkOhisAxQXMpmVYDsE0Wu3kIg/exec?TODOKI' + to, { cache: 'no-cache' }).then(Response => {
                        window.close()
                }).catch(err => {
                    console.log(err);
                    window.close()
                })
            }else{
                fetch('https://script.google.com/a/macros/arbusta.net/s/AKfycbwVeOng24GwZZUuC_Ef6tPJ0HpHlBimimkOhisAxQXMpmVYDsE0Wu3kIg/exec?TODOMAL' + nowst, { cache: 'no-cache' }).then(ok => {
                    window.close()
                }).catch(err => {
                    console.log(err);
                    window.close()
                })
            }
        })
};