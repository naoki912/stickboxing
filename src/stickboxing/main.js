var _ = require("enchant")

enchant()

window.onload = function () {
    var game = new Game(320, 320)
    game.onload = function () {
        var label = new Label("Stick Boxing")
        
        var scene = new Scene()
        scene.addChild(label)
        
        game.pushScene(scene)
    }
    game.start()
}
