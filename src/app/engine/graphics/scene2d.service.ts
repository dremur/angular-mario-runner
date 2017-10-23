import {Drawable2D} from './drawable2d.model';
import {Scene2D} from './scene2d.model';

export class Scene2DService {
    scene2d: Scene2D;
    getScene() {
        return this.scene2d;
    }
    addDrawable(drawable2d: Drawable2D) {
        this.scene2d.drawables.push(drawable2d);
    }
}
