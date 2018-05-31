import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [ 
        { id: 1, firstName: "Name1", lastName: "last1", email: "name1@liferay.com" },
        { id: 2, firstName: "Name2", lastName: "last2", email: "name2@liferay.com" }
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