//import PageNew from './pagenew';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
     get numberOfDependents () { return $("//select[@title='Number of dependants']") }
     get singleApplicationTypeOption() {return $("//input[@id='application_type_single']")}
     get homeToLiveIn() {return $("//input[@id='borrow_type_home']")}
     get annualIncome() {return $("//label[contains(text(),'Your annual income (before tax)')]/../div/input")}
     get annualOtherIncome() {return $("//label[contains(text(),'Your annual other income (optional)')]/../div/input")}
     get monthlyLivingExpenses() {return $("//label[contains(text(),'Monthly living expenses')]/../div/input")}
     get currentHomeLoanRepayment() {return $('#homeloans')}
     get otherMonthlyLoanRepayment() {return $('#otherloans')}
     get otherMonthlyCommitments() {return $('//label[contains(text(),"Other monthly commitments")]/../div/input')}
     get totalCreditCardLimits() {return $('//label[contains(text(),"Total credit card limits")]/../div/input')}
     get workOutHowMuchICouldBorrowButton() {return $('#btnBorrowCalculater')}
     get borrowingEstimateText() {return $('//span[@id="borrowResultTextAmount"]')}
     get borrowErrorText() {return $('.borrow__error__text')}
     get startOverButton() {return $('.start-over')}
     get signIn () { return $("//a[contains(text(),'Sign in')]") }
 
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signInClick () {
        await (await this.signIn).click();
    }

    async selectSingleAsApplicationType(){
        await (await this.singleApplicationTypeOption).click();
    }
    async selectZeroNumberOfDependents() {
        await (await this.numberOfDependents).selectByVisibleText("0");
    }
    async  selectHomeToLiveIn() {
        await (await this.homeToLiveIn).scrollIntoView();
        await (await this.homeToLiveIn).click();
        
    }
    async enterIncome(income) {
        await (await this.annualIncome).setValue(income);
    }
  
  async enterOtherIncome(otherIncome) {
        await (await this.annualOtherIncome).setValue(otherIncome);
    }
    async enterMonthlyExpenses(livingExpenses) {
        await (await this.monthlyLivingExpenses).setValue(livingExpenses);
    }
    async enterHomeLoanRepayment(homeLoanRepay) {
        await (await this.currentHomeLoanRepayment).setValue(homeLoanRepay);
    }
    async enterOtherMonthlyLoanRepayment(otherLoanRepay) {
        await (await this.otherMonthlyLoanRepayment).setValue(otherLoanRepay);
    }
    async enterOtherMonthlyCommitments(otherCommitment) {
        await (await this.otherMonthlyCommitments).setValue(otherCommitment);
    }
    async entertotalCreditCardLimits(totalCreditCardLimits) {
        await (await this.totalCreditCardLimits).setValue(totalCreditCardLimits);
    }
    async  selectBorrowButton() {
        await (await this.workOutHowMuchICouldBorrowButton).scrollIntoView();
        await (await this.workOutHowMuchICouldBorrowButton).click();
    }
    async getTextforEestimated() {
       
      return (await this.borrowingEstimateText).getText();
        //await (await this.totalCreditCardLimits).setValue(10000);
    }

    async selectStartOverButton(){
        await (await this.startOverButton).click();
    }

    //****************************************
    getIncomeValue() {
        console.log("output"+ this.annualIncome);
        return (this.annualIncome).getText();   
     }

    getOtherIncomeValue() {
        return (this.annualOtherIncome).getValue();
    }

    getLivingExpensesValue(){
        return (this.monthlyLivingExpenses).getValue();
    }

    getCurrentHomeLoanRepaymentValue() {
        return (this.currentHomeLoanRepayment).getValue();
    }

    getOtherLoanRepaymentValue(){
        return (this.otherMonthlyLoanRepayment).getValue();
    }

    getOtherCommitmentValue(){
        return (this.otherMonthlyCommitments).getValue();
    }

    getTotalCreditCardsLimitValue() {
        return (this.totalCreditCardLimits).getValue();
    }

    getBorrowErrorMessageText() {
        return (this.borrowErrorText).getText();
    }

}

export default new HomePage();
