export function sayHi(){
  return console.log("hi");
 
};

export const warn = "123";

import { createServer } from './database';

const server = createServer();

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
