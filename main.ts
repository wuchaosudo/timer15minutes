input.onButtonPressed(Button.A, function () {
    fen = 14
    miao = 60
})
input.onButtonPressed(Button.AB, function () {
    fen = 0
    miao = 0
})
input.onButtonPressed(Button.B, function () {
    fen = 0
})
let fen = 0
let miao = 0
basic.showIcon(IconNames.Happy)
miao = 0
fen = 0
basic.forever(function () {
    if (fen >= 0) {
        if (miao >= 0) {
            basic.pause(1000)
            miao += -1
        }
        fen += -1
        miao = 60
        basic.showNumber(fen)
    } else {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(500)
            basic.showIcon(IconNames.Heart)
            basic.pause(500)
        }
    }
})
