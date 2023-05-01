//reporter.ts
import {FullConfig, FullResult, Reporter, Suite, TestCase, TestResult} from '@playwright/test/reporter';

class MyReporter implements Reporter {
    onBegin(config: FullConfig, suite: Suite) {
        return;
        //console.log(`Starting the run with ${suite.allTests().length} tests`);
    }

    onTestBegin(test: TestCase, result: TestResult) {
        return;
        //console.log(`Starting test ${test.title}`);
    }

    /*onTestEnd(test: TestCase, result: TestResult) {
        //return;
        console.log(`Finished test ${test.title}: ${result.status}`);
    }*/

    onEnd(result: FullResult) {
        //return;
        console.log(`Finished the run: ${result.status}`);
    }

    /*onStdErr(chunk, test, result) {
        if (chunk) {
            console.error(`${chunk}`);
        }
    };*/

    /*onStdOut(chunk, test, result) {
        if (chunk) {
            console.log(`${chunk}`);
        }
    };*/

    printsToStdio() {
        return false;
    };
}

export default MyReporter;
