/*
Esercizio

Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.

Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog! ✅

Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)✅

Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.✅

La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )

Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

Testare nel browser.
Bonus
Spostiamo l’array dei post in un file separato da importare poi dentro il controller
Creare una nuova rotta con cui stampare la lista in html come ul
Create una pagina statica html da cui far partire una chiamata ajax per consumare il vostro enpoint json.
*/

const express = require('express')
const postsController = require('./controllers/postscontroller.js')
const app = express()
const port = 3000
const host = 'http://127.0.0.1'

app.get('/', (req, res) => {
  res.send('<h1>Benvenuto nel mio blog</h1>')
})
app.get('/posts',postsController.index)

app.listen(port, () => {
  console.log(`Example app listening on port ${host}:${port}`)
})


