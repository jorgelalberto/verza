  // Notice there is no 'import' statement. 'qna' and 'tf' is
  // available on the index-page because of the script tag above.
  // Load the model.
  qna.load().then(model => {
    // Find the answers
    model.findAnswers(question, passage).then(answers => {
      console.log('Answers: ', answers);
    });
  });