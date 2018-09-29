import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as moment from 'moment';

const QUESTIONS = [
    {
        id: 1,
        type: 'image',
        url: '/assets/images/table.jpg',
        options: [
            [
                {
                    name: 'la',
                    url: '/assets/sounds/la.mp3'
                },
                {
                    name: 'lab',
                    url: '/assets/sounds/lab.mp3'
                },
            ],
            [
                {
                    name: 'label',
                    url: '/assets/sounds/label.mp3'
                },
                {
                    name: 'labia',
                    url: '/assets/sounds/labia.mp3'
                }
            ]

        ],
        answer: 'la'
    },
    {
        id: 2,
        type: 'audio',
        url: '/assets/sounds/xe.mp3',
        answer: 'chair',
        options: [
            [
                {
                    name: 'chair',
                    url: '/assets/images/chair.jpg'
                },
                {
                    name: 'baby',
                    url: '/assets/images/baby.jpg'
                },
            ],
            [
                {
                    name: 'dog',
                    url: '/assets/images/dog.jpeg'
                },
                {
                    name: 'house',
                    url: '/assets/images/house.jpg'
                }
            ]

        ]
    },
    {
        id: 3,
        type: 'video',
        url: '/assets/videos/lala.mp4',
        answer: 'lala',
        options: [
            [
                {
                    name: 'lala',
                    url: '/assets/videos/lala.mp4'
                },
                {
                    name: 'lala2',
                    url: '/assets/videos/lala.mp4'
                },
            ],
            [
                {
                    name: 'lala3',
                    url: '/assets/videos/lala.mp4'
                },
                {
                    name: 'lala4',
                    url: '/assets/videos/lala.mp4'
                }
            ]
        ]
    }
];

@Component({
    selector: 'app-test',
    templateUrl: 'test.component.html',
    styleUrls: ['test.component.scss']
})

export class TestComponent implements OnDestroy, AfterViewInit {


    remainTime = 1000;

    idInterval: number;

    QUESTIONS = QUESTIONS;

    isVisible = false;

    showV = false;

    @ViewChild('video') video: ElementRef;

    constructor() {
        this.countDown();
    }

    ngAfterViewInit() {
        this.video.nativeElement.onplay = this.showVideo;
    }

    playAudio(src: string) {
        const audio = new Audio(src);
        audio.play();
    }

    countDown() {
        this.idInterval = setInterval(() => {
            if (this.remainTime > 0) {
                this.remainTime = this.remainTime - 1;
            } else {
                clearInterval(this.idInterval);
            }
        }, 1000)
    }

    showVideo = () => {
        console.log('play')
        setTimeout(() => {
            this.showV = true;
        }, 2500);
    }

    ngOnDestroy() {
        clearInterval(this.idInterval);
    }

    getRemainTime(): string {
        return moment(this.remainTime, 'X').format('HH : mm : ss')
    }

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        window.open('https://wepay.vn/', '_blank');
        this.isVisible = false;
    }

    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
}
