import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [ 
        {id:2, firstName: "Leonard", lastName: "Fish", email: "leo.fish@liferay.com"}
     ];
    return {users};
  }
}


/**
 *  id: number;
    firstName: string;
    lastName: string;
    email:string;
 */