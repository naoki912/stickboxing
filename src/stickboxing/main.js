var _ = require("enchant")

enchant()

window.onload = function () {
    var game = new Game(320, 320)
    game.onload = function () {
        var label1 = new Label("Stick Boxing")
        var label2 = new Label("試合")
        var label3 = new Label("装備変更")
        var label4 = new Label("各種設定")
        var scene1 = new Scene()
        var scene2 = new Scene()
        var scene3 = new Scene()
        var scene4 = new Scene()
        var sprite = new Sprite(12, 12)
        game.fps = 30;
        sprite.backgroundColor = 'red'
        sprite.x = 120
        sprite.y = 240
        label1.x = 120
        label1.y = 80
        label2.x = 120
        label2.y = 200
        label3.x = 120
        label3.y = 220
        label4.x = 120
        label4.y = 240
        scene2.backgroundColor = 'black'
        scene3.backgroundColor = 'blue'
        scene4.backgroundColor = 'yellow'
        scene1.addChild(label1)
        scene1.addChild(label2)
        scene1.addChild(label3)
        scene1.addChild(label4)
        game.pushScene(scene1)
       label2.addEventListener('touchend', function() {
           game.popScene(scene1)
           game.pushScene(scene2)
        });
        label3.addEventListener('touchend', function() {
           game.popScene(scene1)
           game.pushScene(scene3)
        });
        label4.addEventListener('touchend', function() {
           game.popScene(scene1)
           game.pushScene(scene4)
        });
        scene2.addChild(sprite)
        sprite.on('enterframe', function() {
            if (game.input.left) this.x -= 5;
            if (game.input.right) this.x += 5;
            if (game.input.up) this.x -= 5;
            if (game.input.down) this.x += 5;
        });
        
    }
    game.start()
}
