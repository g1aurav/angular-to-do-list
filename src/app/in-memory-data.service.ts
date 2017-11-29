import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
 createDb() {
    let todos = [
        {
            id: 1,
            text: 'First Task',
            isCompleted: false,
        },{
            id: 2,
            text: 'Second Task',
            isCompleted: false,
        },{
            id: 3,
            text: 'Third Task',
            isCompleted: false,
        },{
            id: 4,
            text: 'Fourth Task',
            isCompleted: false,
        },{
            id: 5,
            text: 'Fifth Task',
            isCompleted: false,
        }
    ]
   return {todos};
 }
}