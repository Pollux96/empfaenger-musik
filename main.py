strip = neopixel.create(DigitalPin.P14, 4, NeoPixelMode.RGB)
I2C_LCD1602.lcd_init(39)
I2C_LCD1602.show_string("Hallo Max und", 1, 0)
I2C_LCD1602.show_string("Stefan.", 5, 1)
strip.show_rainbow(1, 360)
basic.pause(5000)
I2C_LCD1602.clear()

def on_forever():
    strip.rotate(1)
    strip.show()
    basic.pause(100)
basic.forever(on_forever)
