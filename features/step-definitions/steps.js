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

When('I enter {int} $ as the income before tax', async(income) => {
    await HomePage.enterIncome(income);
});

When ('I enter {int} $ as the other income', async (otherIncome) => {
    await HomePage.enterOtherIncome(otherIncome);
});
    
When ('I enter {int} $ as the living expenses', async (livingExpenses) => {
        await HomePage.enterMonthlyExpenses(livingExpenses);
        await  browser.pause(2000);
});

When ('I enter {int} $ as the home loan repayment', async (homeLoanRepay) => {
            await HomePage.enterHomeLoanRepayment(homeLoanRepay);
});
     
When ('I enter {int} $ as the other loan repayment', async (otherLoanRepay) => {
            await HomePage.enterOtherMonthlyLoanRepayment(otherLoanRepay);
});

When ('I enter {int} $ as the other commitment', async (otherCommitment) => {
        await HomePage.enterOtherMonthlyCommitments(otherCommitment);
});
      
When  ('I enter {int} $ as the total credit card limits', async (totalCreditCardLimits) => {
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
    expect("0").equals(HomePage.getIncomeValue(),"income filed not cleared");
    expect("0").equals(HomePage.getOtherIncomeValue(),"other income filed not cleared");
    expect("0").equals(HomePage.getLivingExpensesValue(),"living expenses filed not cleared");
    expect("0").equals(HomePage.getCurrentHomeLoanRepaymentValue(),"current home loan repay filed not cleared");
    expect("0").equals(HomePage.getOtherLoanRepaymentValue(),"other loan repay filed not cleared");
    expect("0").equals(HomePage.getOtherCommitmentValue(),"other commitment filed not cleared");
    expect("0").equals(HomePage.getTotalCreditCardsLimitValue(),"credit cards limit filed not cleared");
});

      






















Then(/^I should navigate to the personal information page$/, async () => {
    await expect(PersonalInfoPage.personalInfo).toBeExisting();
});

Given(/^I am on the personal information page$/, async () => {
    await expect(PersonalInfoPage.personalInfo).toBeExisting();
});

When(/^User enters the mandatory fields and click on Register button$/, async () => {
    await PersonalInfoPage.enterPersonalInfo();
});

Then(/^The user should be registered and logged in successfully$/, async () => {
    await expect(PersonalInfoPage.verifyloggedinUser).toBeExisting();
});

Given(/^User is logged in and on home page$/, async () => {
    await expect(PersonalInfoPage.verifyloggedinUser).toBeExisting();
    await MyAccountPage.clickHome();
});

When(/^User views the product and clicks on add to cart$/, async () => {
    await AddToCartPage.checkoutproduct();
    await expect(ShoppingCartPage.shoppingCartSummary).toBeExisting();
});

Then(/^The user should be able to complete the purchase$/, async () => {
    await ShoppingCartPage.proceedToCheckoutButton();
    await expect(ShoppingCartPage.orderSuccessMsg).toBeExisting();
});
