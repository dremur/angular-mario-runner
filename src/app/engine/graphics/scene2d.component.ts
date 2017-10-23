import {Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import {Scene2D} from './scene2d.model';
import {Scene2DService} from './scene2d.service';
import {Color} from './color.model';

@Component({
    selector: 'app-component-scene2d',
    template: `<canvas #scene2dCanvas
    [attr.width]='scene2d.width'
    [attr.height]='scene2d.height'></canvas>`
})

export class Scene2DComponent implements OnInit, AfterViewInit {
    scene2d: Scene2D;
    @ViewChild('scene2dCanvas') canvas: ElementRef;
    constructor(private scene2dService: Scene2DService) {}
    ngOnInit() {
        this.scene2d = new Scene2D();
        this.scene2d.scale = 2;
        this.scene2d.height = 224 * this.scene2d.scale;
        this.scene2d.width = 256 * this.scene2d.scale;
        this.scene2d.color = new Color(92, 148, 252, 1);
    }

    ngAfterViewInit() {
        const context: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
        this.FillBackground(context, this.scene2d);
     }

     private FillBackground(context, scene2d) {
        const color = scene2d.color;
        context.fillStyle = 'rgba(' + color.r + ', '
                                    + color.g + ', '
                                    + color.b + ', '
                                    + color.a + ')';
        context.fillRect(0, 0, scene2d.width, scene2d.height);
     }

}
