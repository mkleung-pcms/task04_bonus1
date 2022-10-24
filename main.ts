let y = 0
let x = 0
let x_dir = 1
let y_dir = 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(x, 0)
        basic.pause(500)
        x += x_dir
        if (x >= 4) {
            x = 4
            x_dir = -1
        } else if (x <= 0) {
            x = 0
            x_dir = 1
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, y)
        basic.pause(500)
        y += y_dir
        if (y >= 4) {
            y = 4
            y_dir = -1
        } else if (y <= 0) {
            y = 0
            y_dir = 1
        }
    }
})
