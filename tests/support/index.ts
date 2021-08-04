import * as addContext from 'mochawesome/addContext';
import './commands';

/**
 * Custom event listeners
 */
Cypress.on('test:after:run', (test, runnable) => {
    // If test fails, we inform mocha runner of the screenshots location and bind it to a test name within the report
    if (test.state === 'failed') {
        const screenshot = `assets/${Cypress.spec.name}/${runnable?.parent?.title} -- ${test.title} (failed).png`;
        const mochaContext = { test } as Mocha.Context;
        addContext(mochaContext, screenshot);
    }
});
