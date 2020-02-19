import choo from '/web_modules/choo/dist/bundle.js'
import html from '/web_modules/nanohtml/dist/bundle.js'

var app = choo()
app.use(countStore)
app.route('/', mainView)
app.mount('body')

function mainView(state, emit) {
    return html`
    <body>
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </body>
  `

    function onclick() {
        emit('increment', 1)
    }
}

function countStore(state, emitter) {
    state.count = 0
    emitter.on('increment', function (count) {
        state.count += count
        emitter.emit('render')
    })
}