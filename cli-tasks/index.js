
/**
 *  `cli-listr/index.js`
 */

'use strict';

// IMPORTS //

const Listr = require('listr');

// CONSTANTS //

const tasks = new Listr([
    {
        title: 'Success',
        task: () => 'Foo'
    },
    {
        title: 'Failure',
        task: () => {
            throw new Error('Bar');
        }
    }
]);

// FUNCTIONS //

(function () {
    console.log('\n --- CLI TASKS --- \n');
    console.log('\n ----- LISTR ----- \n');
    tasks.run().catch(err => {
        console.error(err);
    });
})();

// EOF //
