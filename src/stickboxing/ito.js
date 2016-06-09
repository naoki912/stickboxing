var _ = require("enchant")

enchant()

window.onload = function () {
    var game = new Game(400, 300)
    game.onload = function () {
        var scene = new Scene()

        var label1 = new Label("Stick Boxing")

        scene.addChild(label1)

        game.pushScene(scene)
    }
    game.start()
}
