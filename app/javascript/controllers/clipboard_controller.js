import {Controller} from "@hotwired/stimulus"

export default class extends Controller {

    static values = {url: String, refreshInterval: Number}

    connect() {
        debugger
        this.load()

        if (this.hasRefreshIntervalValue) {
            this.startRefreshing()
        }
    }

    startRefreshing() {
        setInterval(() => {
            this.load()
        }, this.refreshIntervalValue)
    }

}

// static targets = [ "slide" ]
// static values = { index: Number }
//
// next() {
//     this.indexValue++
// }
//
// previous() {
//     this.indexValue--
// }
//
// indexValueChanged() {
//     this.showCurrentSlide()
// }
//
// showCurrentSlide() {
//
//     this.slideTargets.forEach((element, index) => {
//         element.hidden = index != this.indexValue
//     })
// }


// copy() {
//     debugger
//     navigator.clipboard.writeText(this.sourceTarget.value)
// const element = this.sourceTarget
// const values = element.value
// alert('This is our value' ${values})

// }
// input(){
//      debugger
// }
// submit(){
//      debugger
// }
// copy(event) {
//     event.preventDefault()
//     this.sourceTarget.select()
//     document.execCommand("copy")
// }
// greet() {
//
//     navigator.permissions.query({name: "clipboard-write"}).then((result) => {
//         if (result.state === "granted") {
//             this.element.classList.add(this.supportedClass);
//         }
//     });
// }
// connect() {
//     debugger
//     navigator.permissions.query({name: "clipboard-write"}).then((result) => {
//         if (result.state === "granted") {
//             this.element.classList.add(this.supportedClass);
//         }
//     });
// }