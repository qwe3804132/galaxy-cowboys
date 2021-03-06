(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var helloLabel;
    var clickMeButton;
    var currentState;
    assetManifest = [
        { id: "clickMeButton", src: "./assets/images/clickMeButton.png" },
        { id: "startButton", src: "./assets/images/startButton.png" },
        { id: "nextMeButton", src: "./assets/images/nextButton.png" },
        { id: "backButton", src: "./assets/images/backButton.png" }
    ];
    function Init() {
        console.log("Initializing...");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        objects.Game.currentScene = config.Scene.START;
        Main();
    }
    function Update() {
        if (currentScene.Update() != objects.Game.currentScene) {
            Main();
        }
        stage.update();
    }
    function Main() {
        stage.removeAllChildren();
        console.log("rip children");
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                console.log("Start scene");
                currentScene = new scenes.StartScene(assetManager);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map