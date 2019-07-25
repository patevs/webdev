
/**
 *  `cli-listr/index.js`
 */

const Listr = require('listr');

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

(function () {
    console.log('\n --- CLI LISTR --- \n');
    tasks.run().catch(err => {
        console.error(err);
    });
})();

// EOF //
