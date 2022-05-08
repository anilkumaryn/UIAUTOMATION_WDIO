import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pageobjects/home.page';
const { expect } = require('chai');

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
        await  browser.pause(1000);
});

When ('I enter {int} as the home loan repayment', async (homeLoanRepay) => {
            await HomePage.enterHomeLoanRepayment(homeLoanRepay);
});
     
When ('I enter {int} as the other loan repayment', async (otherLoanRepay) => {
            await HomePage.enterOtherMonthlyLoanRepayment(otherLoanRepay);
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
   // await HomePage.borrowingEstimateText
     console.log(await HomePage.getTextforEestimated());
        expect("$479,000").equals(await HomePage.getTextforEestimated(),"estimate not matched")
});

When  (/^I click on start over button$/, async () => {
        await HomePage.selectStartOverButton();
});
 
Then('All the fields in the calculator are set to default values', async ()=> {
    console.log("output of income value"+ await HomePage.getIncomeValue());
    expect("0").equals(await HomePage.getIncomeValue(),"Your annual income (before tax) not cleared");
    expect("0").equals(await HomePage.getOtherIncomeValue(),"Your annual other income not cleared");
    expect("0").equals(await HomePage.getLivingExpensesValue(),"Monthly living expenses not cleared");
    expect("0").equals(await HomePage.getCurrentHomeLoanRepaymentValue(),"current home loan repayments  not cleared");
    expect("0").equals(await HomePage.getOtherLoanRepaymentValue(),"other loan repayments not cleared");
    expect("0").equals(await HomePage.getOtherCommitmentValue(),"other monthly commitment not cleared");
    expect("0").equals(await HomePage.getTotalCreditCardsLimitValue(),"Total credit cards limits not cleared");
});

Then('I should see the proper borrow error message', function() {
    const BORROW_ERROR_MESSAGE = "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500."
    expect(BORROW_ERROR_MESSAGE).equals(HomePage.getBorrowErrorMessageText(),"Borrow error message not matched")
});


















