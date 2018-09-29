import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../../shared/animation/fade-in.animation';


const TEST_LIST = [
    [
        {
        id: 1,
        name: 'Bài kiểm tra số 1',
        duration: 15,
        questionsNumber: 3,
        testedCount: 100,
        questions: []
    },
        {
            id: 2,
            name: 'Bài kiểm tra số 2',
            duration: 25,
            questionsNumber: 7,
            testedCount: 60,
            questions: []
        }
    ],
    [
        {
            id: 3,
            name: 'Bài kiểm tra số 3',
            duration: 15,
            questionsNumber: 3,
            testedCount: 100,
            questions: []
        },
        {
            id: 4,
            name: 'Bài kiểm tra số 4',
            duration: 25,
            questionsNumber: 7,
            testedCount: 60,
            questions: []
        }
    ],
    [
        {
            id: 5,
            name: 'Bài kiểm tra số 5',
            duration: 15,
            questionsNumber: 3,
            testedCount: 100,
            questions: []
        },
        {
            id: 6,
            name: 'Bài kiểm tra số 6',
            duration: 25,
            questionsNumber: 7,
            testedCount: 60,
            questions: []
        }
    ],

];

@Component({
    selector: 'test-list',
    templateUrl: 'test-list.component.html',
    styleUrls: ['test-list.component.scss'],
    animations: [fadeInAnimation]
})

export class TestListComponent {

    TEST_LIST = TEST_LIST;

    constructor(private router: Router) {
    }

    goToTest() {
        this.router.navigate(['/test']);
    }

}
