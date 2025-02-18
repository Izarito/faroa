input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.House)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
