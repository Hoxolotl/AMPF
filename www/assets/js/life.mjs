import {signal, effect, batch} from '/assets/js/simplyflow/src/state.mjs'
import {bind} from '/assets/js/simplyflow/src/bind.mjs'
import {model, paging, sort, filter, columns, scroll} from '/assets/js/simplyflow/src/model.mjs'

console.log("Alive!")

function GOLMStart() {
	//visualiser:
	let GOLMap = document.querySelector('.GOLMap')
	GOLMap.innerHTML = "HERE COMES A MAP"

}