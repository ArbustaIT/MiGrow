$(() => {
    var nowst = window.location.search;

    if (nowst) {
        nowst = atob(nowst.replace('?', ''))

        if (nowst.includes('arb-id/')) {
            //Pedir los datos y abrir la pagina 

            nowst = nowst.replace('arb-id/', '')

            getPage('page/grow.htm')
                .then((r) => {
                    $('body').html('<div id="grow" class="page">' + r + '</div>');
                    setTimeout(() => { $('#loading').hide('fade', 150) }, 150);
                })
                .catch(() => {
                    console.log('Intentalo otra vez 😐')
                })
        } else {
            //mostrar un mensaje de 404
            getPage('page/land.htm')
                .then((r) => {
                    $('body').html('<div id="land" class="page">' + r + '</div>');
                    setTimeout(() => { $('#loading').hide('fade', 150) }, 150);
                })
                .catch(() => {
                    console.log('Intentalo otra vez 😐')
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
                console.log('Intentalo otra vez 😐')
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
