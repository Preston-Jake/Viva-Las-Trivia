const getQuestions = (data) => {
  let questions = getRandomQuestions(data, 10);
  const questionsWithAnswers = questions.map((question) => {
    const { correct, incorrect } = question;
    const answers = shuffleAnswers(incorrect, correct);
    return { ...question, answers };
  });
  return questionsWithAnswers;
};

const getRandomQuestions = (array, num) => {
  let round = [];
  let randomNumbers = [];
  while (num > randomNumbers.length) {
    const randomNumber = Math.floor(Math.random() * array.length);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
      round.push(array[randomNumber]);
    }
  }
  return round;
};

const shuffleAnswers = (incorrect, correct) => {
  let answers = [...incorrect, correct];
  let counter = answers.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = answers[counter];
    answers[counter] = answers[index];
    answers[index] = temp;
  }
  return answers;
};

export default getQuestions;
