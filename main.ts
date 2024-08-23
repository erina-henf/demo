controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, fish, 200, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let fish: Sprite = null
info.setLife(5)
fish = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . . c d d d d c c . . . . . . 
    . . . c d c c c c c c . . . . . 
    . . . c c d 4 4 4 4 c c . . . . 
    c c . c 1 4 4 4 4 4 d 4 c . . . 
    c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
    c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
    f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
    f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
    f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
    f f f f d 4 f 4 c 1 4 4 4 4 f . 
    . . c f c 4 f f 4 4 d 4 f f . . 
    . . c b d c 4 4 4 4 f f . . . . 
    . . c d d d f f f f . . . . . . 
    . . . c c c . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(fish, 100, 100)
fish.setStayInScreen(true)
scene.setBackgroundColor(5)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        ....................ccfff...........
        ..........fffffffffcbbbbf...........
        .........fbbbbbbbbbfffbf............
        .........fbb111bffbbbbff............
        .........fb11111ffbbbbbcff..........
        .........f1cccc11bbcbcbcccf.........
        ..........fc1c1c1bbbcbcbcccf...ccccc
        ............c3331bbbcbcbccccfccddbbc
        ...........c333c1bbbbbbbcccccbddbcc.
        ...........c331c11bbbbbcccccccbbcc..
        ..........cc13c111bbbbccccccffbccf..
        ..........c111111cbbbcccccbbc.fccf..
        ...........cc1111cbbbfdddddc..fbbcf.
        .............cccffbdbbfdddc....fbbf.
        ..................fbdbbfcc......fbbf
        ...................fffff.........fff
        `, SpriteKind.Enemy)
    bogey.setPosition(160, randint(0, 115))
    bogey.setVelocity(-100, 0)
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
