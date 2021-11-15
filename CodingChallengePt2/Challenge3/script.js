const Mark = {
    fisrtName: 'Mark',
    lastName: 'Miller',
    massMark: 78,
    heightMark: 1.69,
    clacBMI: function () {
        this.bmi1 = this.massMark / this.heightMark ** 2;
        return this.bmi1;
    }
};

const John = {
    fisrtName: 'John',
    lastName: 'Smith',
    massJohn: 92,
    heightJohn: 1.95,
    clacBMI: function () {
        this.bmi2 = this.massJohn / this.heightJohn ** 2;
        return this.bmi2;
    }
}

Mark.clacBMI();
John.clacBMI();

if (John.bmi2 > Mark.bm1) {
    console.log(`John has a higher BMI ${John.bmi2} vs ${Mark.bmi1}`)
} else if (Mark.bmi1 > John.bmi2) {
    console.log(`Mark has a higher BMI ${Mark.bmi1} vs ${John.bmi2}`)
} else {
    console.log('Must be the same BMI')
}