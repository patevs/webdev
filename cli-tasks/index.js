
/**
 *  `cli-listr/index.js`
 */

'use strict';

// IMPORTS /

// const Listr = require('listr');

const taskz = require('taskz');

// CONSTANTS //

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const tasks = taskz(
    [
        {
            text: 'first task',
            task: async () => {
                await sleep(2000);
            }
        },
        {
            text: 'second task',
            task: async () => {
                await sleep(3000);
            }
        },
        {
            text: 'third task',
            task: async () => {
                await sleep(4000);
            }
        },
        {
            text: 'this task will fail and continue',
            task: async () => {
                await sleep(2500);
                throw new Error('this task failed');
            }
        },
        {
            text: 'start running sub tasks',
            tasks: taskz(
                [
                    {
                        text: 'my subtask 1',
                        task: async () => {
                            await sleep(1000);
                        }
                    }
                ],
                { parallel: true }
            )
        }
    ],
    { parallel: true }
);

/*
const listr = new Listr([
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
*/

// FUNCTIONS //

(function () {
    console.log('\n --- CLI TASKS --- \n');
    /*
    console.log('\n ----- LISTR ----- \n');
    listr.run().catch(err => {
        console.error(err);
    });
    */
    console.log('\n ----- TASKZ ----- \n');
    tasks.run();
})();

// EOF //
