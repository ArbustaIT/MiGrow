$(() => {
    var nowst = window.location.search;

    if (nowst) {
        nowst = atob(nowst.replace('?', ''))

        if (nowst.includes('arbusta.net') || nowst.includes('test')) {
            //Pedir los datos y abrir la pagina

            getInfo(nowst).then((dd) => {
                window.sessionStorage.setItem('info', JSON.stringify(dd))
                window.sessionStorage.setItem('user', nowst)
                getPage('page/grow.htm')
                    .then((r) => {
                        $('body').html('<div id="grow" class="page">' + r + '</div>');
                    })
                    .catch(() => {
                        console.log('Error cargando pagina')
                    })


            })
                .catch(() => {
                    console.log('Error obteniendo info')
                })


        } else {
            //mostrar un mensaje de 404
            getPage('page/404.htm')
                .then((r) => {
                    $('body').html('<div id="error" class="page">' + r + '</div>');
                })
                .catch(() => {
                    console.log('Error cargando los datos :(')
                })
        }

    } else {
        //Ir a la pagina principal
        getPage('page/land.htm')
            .then((r) => {
                $('body').html('<div id="land" class="page">' + r + '</div>');
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

    return xa = new Promise((resolve, regect) => {

        if (window.sessionStorage.getItem('user') == x) {
            console.log('Local')
            resolve(JSON.parse(window.sessionStorage.getItem('info')))
        } else {
            console.log('Batabase')
            fetch('https://script.google.com/a/macros/arbusta.net/s/AKfycbwVeOng24GwZZUuC_Ef6tPJ0HpHlBimimkOhisAxQXMpmVYDsE0Wu3kIg/exec?' + x, { cache: 'no-cache' }).then(Response => {
                Response.json().then(json => {
                    resolve(json)
                })
            }).catch(err => {
                regect(err)
            })
        }

    })
}




//https://script.google.com/a/macros/arbusta.net/s/AKfycbwVeOng24GwZZUuC_Ef6tPJ0HpHlBimimkOhisAxQXMpmVYDsE0Wu3kIg/exec?lalala=kmlkm