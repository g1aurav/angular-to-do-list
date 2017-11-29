export class List {
    id: number;
    text: string;
    isCompleted: boolean;

    constructor(id: number, text: string, isCompleted: boolean) {
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;
    }
}