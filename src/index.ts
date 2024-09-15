function sayName(name: string): string | void {
  if (name) return `Hello ${name}`;
  throw `No string parameter was provided, please include a string variable.`;
}

const chuck = sayName('Henry Rothchild');
console.log(chuck);
console.log('Congratulations your application is running correctly! 🏄🏽‍♂️');
