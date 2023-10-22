radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        I2C_LCD1602.ShowNumber(input.temperature(), 6, 1)
        I2C_LCD1602.ShowString("temp.", 1, 1)
    }
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P9, 180)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P9, 0)
    }
})
basic.showLeds(`
    . . # . .
    . # . # .
    # # # # #
    # . # . #
    # . # # #
    `)
let strip = neopixel.create(DigitalPin.P14, 4, NeoPixelMode.RGB)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.ShowString("Hallo Max und", 1, 0)
I2C_LCD1602.ShowString("Stefan.", 5, 1)
strip.showRainbow(1, 360)
basic.pause(5000)
I2C_LCD1602.clear()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
