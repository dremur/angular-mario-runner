import {Drawable2D} from './drawable2d.model';
import {Color} from './color.model';

export class Scene2D {
    height: number;
    width: number;
    scale: number;
    drawables: Drawable2D[];
    color: Color;
}
