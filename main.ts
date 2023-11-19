radio.onReceivedNumber(function (receivedNumber) {
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
})
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        robotbit.GeekServo(robotbit.Servos.S1, 99)
        basic.pause(500)
        robotbit.GeekServo(robotbit.Servos.S1, 225)
        basic.pause(500)
    } else {
        robotbit.GeekServo(robotbit.Servos.S1, 140)
    }
})
while (!(input.buttonIsPressed(Button.AB))) {
    robotbit.MotorRun(robotbit.Motors.M1A, pins.analogReadPin(AnalogPin.P1) / 4.5)
    if (pins.analogReadPin(AnalogPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    if (pins.analogReadPin(AnalogPin.P1) > 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P1),
    1023
    )
    if (input.logoIsPressed()) {
        robotbit.GeekServo(robotbit.Servos.S1, 99)
        basic.pause(500)
        robotbit.GeekServo(robotbit.Servos.S1, 225)
        basic.pause(500)
    } else {
        robotbit.GeekServo(robotbit.Servos.S1, 140)
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
radio.setGroup(146)
