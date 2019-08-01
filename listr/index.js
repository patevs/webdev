/**
 *  `listr/index.js`
 */

const Listr = require('listr');

const tasks = new Listr([
  {
    title: 'Success',
    task: () => 'Foo'
  }
]);

tasks.run().catch(error => {
	console.error(error.message);
});

// EOF //
