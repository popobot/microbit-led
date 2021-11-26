const p0 = neopixel.create(DigitalPin.P0, 25, NeoPixelMode.RGB)
const p8 = neopixel.create(DigitalPin.P8, 25, NeoPixelMode.RGB)

const hue = 0
const saturation = 0
let luminosity = 50

function light() {
    p0.showColor(neopixel.hsl(hue, saturation, luminosity))
    p8.showColor(neopixel.hsl(hue, saturation, luminosity))
}

light()

input.onButtonPressed(Button.AB, function (){
    luminosity = 50
    light()
})
input.onButtonPressed(Button.A, function () {
    luminosity = Math.min(luminosity + 10, 100)
    light()
})
input.onButtonPressed(Button.B, function () {
    luminosity = Math.max(luminosity - 10, 0)
    light()
})
