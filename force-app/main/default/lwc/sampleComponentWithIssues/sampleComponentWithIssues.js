import { LightningElement } from 'lwc';

export default class SampleComponentWithIssues extends LightningElement {
    // Issue 2: Unused variable
    unusedVariable = 'This variable is not used';

    @api
    handleAction() {
        // Issue 1: Console log left in production code
        console.log('Action handled in SonarTestComponent');
    }
    
    // Issue 3: Hardcoded credentials (Security issue)
    getSensitiveData() {
        const password = '12345'; // Hardcoded password
        return password;
    }

    // Issue 4: Unreachable code
    problematicFunction() {
        return;
        console.log('This code will never execute'); // Unreachable code
    }
}