input.onGesture(Gesture.Shake, function () {
    Running += 1
})
let Running = 0
basic.forever(function () {
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # . . . .
        # # # # #
        . # # # #
        . . # # #
        . . . # #
        `)
})
