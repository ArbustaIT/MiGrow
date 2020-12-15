$(() => {
    var nowst = window.location.search;

    if (nowst) {
        nowst = atob(nowst.replace('?', ''))

        if (nowst.includes('arb-id/')) {
            //Pedir los datos y abrir la pagina 

            getInfo(btoa(nowst.replace('arb-id/', '').replace('@arbusta.net', ''))).then((r) => {
               console.log(r)
            })
                .catch(() => {
                    console.log('Error obteniendo info')
                })

            getPage('page/grow.htm')
                .then((r) => {
                    $('body').html('<div id="grow" class="page">' + r + '</div>');
                    setTimeout(() => { $('#loading').hide('fade', 150) }, 150);
                })
                .catch(() => {
                    console.log('Error cargando pagina')
                })
        } else {
            //mostrar un mensaje de 404
            getPage('page/land.htm')
                .then((r) => {
                    $('body').html('<div id="land" class="page">' + r + '</div>');
                    setTimeout(() => { $('#loading').hide('fade', 150) }, 150);
                })
                .catch(() => {
                    console.log('Error cargando pagina')
                })
        }

    } else {
        //Ir a la pagina principal
        getPage('page/land.htm')
            .then((r) => {
                $('body').html('<div id="land" class="page">' + r + '</div>');
                setTimeout(() => { $('#loading').hide('fade', 150) }, 150);
            })
            .catch(() => {
                console.log('Error cargando pagina')
            })

    }
})


// obteniendo pagina
getPage = (x) => {
    return new Promise((resolve, regect) => {
        fetch(x, { cache: 'no-cache' }).then(Response => {
            Response.text().then(text => {
                resolve(text)
            })
        }).catch(err => {
            regect(err)
        })
    })
}

//Obteniendo json del user
getInfo = (x) => {
    return new Promise((resolve, regect) => {
        fetch('https://script.google.com/a/macros/arbusta.net/s/AKfycbwVeOng24GwZZUuC_Ef6tPJ0HpHlBimimkOhisAxQXMpmVYDsE0Wu3kIg/exec?' + x, { cache: 'no-cache' }).then(Response => {
            Response.json().then(json => {
                resolve(json)
            })
        }).catch(err => {
            regect(err)
        })
    })
}



//https://script.google.com/a/macros/arbusta.net/s/AKfycbwVeOng24GwZZUuC_Ef6tPJ0HpHlBimimkOhisAxQXMpmVYDsE0Wu3kIg/exec?lalala=kmlkm