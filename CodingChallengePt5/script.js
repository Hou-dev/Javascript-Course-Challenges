'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const getAnswer = Number(
      prompt(
        `${this.question}${this.options.join('\n')} \n (Write option number) \n`
      )
    );
    if (typeof getAnswer === 'number') {
      this.answers[getAnswer]++;
      //console.log(this.answers);
      this.displayResults();
    } else {
      console.log('NaN try again');
    }
  },
  displayResults() {
    console.log(`Poll results are ${this.answers}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
