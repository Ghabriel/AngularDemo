import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

    languages: string[];
    editIndex: number | null;

    ngOnInit() {
        this.languages = ['TypeScript', 'PHP'];
        this.editIndex = null;
    }

    addLanguage(name: string): void {
        this.languages.push(name);
    }

    removeLanguage(index: number): void {
        this.languages.splice(index, 1);
    }

    editLanguage(index: number): void {
        this.editIndex = index;
    }

    finishEdit(): void {
        this.editIndex = null;
    }
}
