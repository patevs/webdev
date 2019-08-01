/**
 *  `listr/index.js`
 */

const Listr = require('listr');
const Observable = require('rxjs').Observable;

const tasks = new Listr([
  {
    title: 'Task 1',
    task: () => 'Task 1'
  },
  {
    title: 'Success',
    task: () => {
      return new Observable(observer => {
        observer.next('Foo');

        setTimeout(() => {
          observer.next('Bar');
        }, 2000);

        setTimeout(() => {
          observer.complete();
        }, 4000);
      });
    }
  },
  {
    title: 'Failure',
    task: () => Promise.reject(new Error('Bar'))
  }
]);

tasks.run().catch(error => {
  console.error(error.message);
});

// EOF //
