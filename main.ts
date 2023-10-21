input.onButtonPressed(Button.A, function () {
    radio.sendString("Your mom")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.setGroup(1)
})
basic.forever(function () {
	
})
