import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [ 
        { id: 10, firstName: "Name1", lastName: "last1", email: "name1@liferay.com" },
        { id: 11, firstName: "Name2", lastName: "last2", email: "name2@liferay.com" }
     ];
    return {users};
  }
}


/** User
 *  id: number;
    firstName: string;
    lastName: string;
    email:string;
 */