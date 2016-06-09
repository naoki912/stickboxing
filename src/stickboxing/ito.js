var _ = require("enchant")

enchant()

window.onload = () => {
    var game = new Game(400, 300)
    game.onload = () => {
        var scene = new Scene()

        var titleLabel = new Label("Stick Boxing")

        scene.addChild(titleLabel)

        game.pushScene(scene)
    }
    game.start()
}
