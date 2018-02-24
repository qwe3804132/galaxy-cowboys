module scenes {
    export abstract class PlayScene extends objects.Scene {
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            window.addEventListener("keypress", this._checkKeypress);
            this.Start();
        }

        private _checkKeypress(event:KeyboardEvent) {
            switch (event.key) {
                case "w":
                    
            }
        }

        protected _checkCollision(a:objects.GameObject, b:objects.GameObject):void {
            let pointA: createjs.Point = a.position;
            let pointB: createjs.Point = b.position;

            if ((Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2))) <
            (a.halfHeight + b.halfHeight)) {
                // collision
            }
        }

        public Start():void {

        }

        public Update():number {
            return 0;
        }

        public Main():void {
            
        }
    }
}