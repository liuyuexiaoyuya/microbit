radio.onReceivedNumber(function (receivedNumber) {
    while (0 == 0) {
        robotbit.MotorRun(robotbit.Motors.M1A, receivedNumber / 4.5)
        if (receivedNumber == 0) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
        if (receivedNumber > 0) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
        led.plotBarGraph(
        receivedNumber,
        1023
        )
    }
})
while (!(input.buttonIsPressed(Button.A))) {
    robotbit.MotorRun(robotbit.Motors.M1A, pins.analogReadPin(AnalogPin.P1) / 4.5)
    if (pins.analogReadPin(AnalogPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    if (pins.analogReadPin(AnalogPin.P1) > 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P1),
        1023
        )
    }
}
robotbit.MotorRun(robotbit.Motors.M1A, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
while (0 == 0) {
    radio.setGroup(146)
}
basic.forever(function () {
	
})
