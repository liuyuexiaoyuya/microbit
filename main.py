def 摇头():
    while not (input.button_is_pressed(Button.B)):
        robotbit.geek_servo(robotbit.Servos.S1, 149)
        basic.pause(500)
        robotbit.geek_servo(robotbit.Servos.S1, 225)
        basic.pause(500)

def on_received_value(name, value):
    while 0 == 0:
        robotbit.motor_run(robotbit.Motors.M1A, value / 4.5)
        if value == 0:
            pins.digital_write_pin(DigitalPin.P0, 0)
            pins.digital_write_pin(DigitalPin.P2, 1)
        if value > 0:
            pins.digital_write_pin(DigitalPin.P0, 1)
            pins.digital_write_pin(DigitalPin.P2, 0)
        led.plot_bar_graph(value, 1023)
radio.on_received_value(on_received_value)

while not (input.button_is_pressed(Button.AB)):
    robotbit.motor_run(robotbit.Motors.M1A,
        pins.analog_read_pin(AnalogPin.P1) / 4.5)
    if pins.analog_read_pin(AnalogPin.P1) == 0:
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
    if pins.analog_read_pin(AnalogPin.P1) > 0:
        pins.digital_write_pin(DigitalPin.P0, 1)
        pins.digital_write_pin(DigitalPin.P2, 0)
    if input.button_is_pressed(Button.A):
        摇头()
    led.plot_bar_graph(pins.analog_read_pin(AnalogPin.P1), 1023)
robotbit.motor_run(robotbit.Motors.M1A, 0)
pins.digital_write_pin(DigitalPin.P0, 0)
pins.digital_write_pin(DigitalPin.P2, 0)
basic.show_leds("""
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    """)
while 0 == 0:
    radio.set_group(146)

def on_forever():
    pass
basic.forever(on_forever)
