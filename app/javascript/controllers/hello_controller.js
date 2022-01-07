import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name" ]
  static classes = ["supported"]

  greet() {
    debugger
    const element = this.nameTarget
    const name = element.value
    console.log(`Hello, ${name}!`)
  }
}
