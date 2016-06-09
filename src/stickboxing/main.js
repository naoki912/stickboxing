var _ = require("enchant")

enchant()

window.onload = function () {
    var game = new Game(400, 300)
    game.onload = function () {
        game.preload('chara0.gif')
        var label = new Label("Stick Bogggggggggggggxing")
        var sprite = new Sprite(32, 32)
        sprite.image = game.assets['chara0.gif']
        var scene = new Scene()
        scene.addChild(label)

        game.pushScene(scene)
    }
    game.start()
}
