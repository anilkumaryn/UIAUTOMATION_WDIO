import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pageobjects/home.page';
//const { expect } = require('chai');

Given(/^I am on the calculator page$/, async () => {
    await browser.url('https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/')
    await browser.maximizeWindow()
});

When(/^I select application type as single$/, async () => {
    await HomePage.selectSingleAsApplicationType();
});

Then(/^I select number of dependents as zero$/, async () => {
    await HomePage.selectZeroNumberOfDependents();
});

Given(/^I select property type as home to live in$/, async () => {
    await HomePage.selectHomeToLiveIn(); 
});

When('I enter {int} as the income before tax', async(annualIncomeBT) => {
    await HomePage.enterIncome(annualIncomeBT);
});

When ('I enter {int} as the other income', async (otherIncome) => {
    await HomePage.enterOtherIncome(otherIncome);
});
    
When ('I enter {int} as the living expenses', async (livingExpenses) => {
        await HomePage.enterMonthlyExpenses(livingExpenses);
       
});

When ('I enter {int} as the home loan repayment', async (homeLoanRepay) => {
            await HomePage.enterHomeLoanRepayment(homeLoanRepay);
});
     
When ('I enter {int} as the other loan repayment', async (otherLoanRepay) => {
            await HomePage.enterOtherMonthlyLoanRepayment(otherLoanRepay);
            await  browser.pause(1000);
});

When ('I enter {int} as the other commitment', async (otherCommitment) => {
        await HomePage.enterOtherMonthlyCommitments(otherCommitment);
});
      
When  ('I enter {int} as the total credit card limits', async (totalCreditCardLimits) => {
        await HomePage.entertotalCreditCardLimits(totalCreditCardLimits);
});

When  (/^I select workout how much i could borrow button$/, async () => {
        await HomePage.selectBorrowButton();
});
      
Then(/^I should see the correct estimated borrow amount$/, async() => {
        await expect(await HomePage.lblBorrowAmount).toHaveValue("$479,000");
        // actual value 542,000 vs expected 479,000
});

When  (/^I click on start over button$/, async () => {
        await HomePage.selectStartOverButton();
});
 
Then('All the fields in the calculator are set to default values', async ()=> {
  await expect(await HomePage.txtAnnualIncome).toHaveValue("0");
  await expect(await HomePage.txtAnnualOtherIncome).toHaveValue("0");
  await expect(await HomePage.txtMonthlyLivingExpenses).toHaveValue("0");
  await expect(await HomePage.txtCurrentlyHomeLoanMonthlyExpenses).toHaveValue("0");
  await expect(await HomePage.txtOtherLoanMonthlyExpenses).toHaveValue("0");
  await expect(await HomePage.txtOtherMonthlyCommitments).toHaveValue("0");
  await expect(await HomePage.txtTotalCreditCardLimits).toHaveValue("0");
  await expect(await HomePage.ddnNumberOfDependents).toHaveValue("0");
});

Then('I should see the proper borrow error message', async ()=>  {
    const BORROW_ERROR_MESSAGE = "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500."
    await expect(await HomePage.errorText).toHaveText(BORROW_ERROR_MESSAGE);

});





