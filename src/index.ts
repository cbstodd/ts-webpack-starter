import { User, users, etone } from './users';

const allUsers: User[] = users;

const allUserNames = etone.filter((name: string): void => {
  if (name === 'Colin' || name === 'Tommy') {
     const index = etone.indexOf(name);
     console.log(`Filtered index of ${name} is ${index}`);
  } else {
    console.info( `${name} is not Colin or Tommy` );
  }
});

allUserNames;