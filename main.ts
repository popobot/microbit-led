input.onButtonPressed(Button.A, function () {
    luminosity = Math.min(luminosity + 10, 100)
    light()
})
input.onButtonPressed(Button.AB, function () {
    luminosity = 50
    hue = 0
    saturation = 0
    light()
})
input.onButtonPressed(Button.B, function () {
    luminosity = Math.max(luminosity - 10, 0)
    light()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    hue = randint(0, 360)
    saturation = 100
    light()
})
function light () {
    p0.showColor(neopixel.hsl(hue, saturation, luminosity))
    p8.showColor(neopixel.hsl(hue, saturation, luminosity))
}
let saturation = 0
let hue = 0
let luminosity = 0
let p8: neopixel.Strip = null
let p0: neopixel.Strip = null
p0 = neopixel.create(DigitalPin.P0, 25, NeoPixelMode.RGB)
p8 = neopixel.create(DigitalPin.P8, 25, NeoPixelMode.RGB)
luminosity = 50
hue = 0
saturation = 0
light()
