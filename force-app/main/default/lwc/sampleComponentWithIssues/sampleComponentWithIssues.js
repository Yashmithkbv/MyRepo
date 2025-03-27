import { LightningElement } from 'lwc';

export default class SampleComponentWithIssues extends LightningElement {
    // Issue 2: Unused variable
    unusedVariable = 'This variable is not used';

    @api
    handleAction() {
        // Issue 1: Console log left in production code
        console.log('Action handled in SonarTestComponent');
    }
}