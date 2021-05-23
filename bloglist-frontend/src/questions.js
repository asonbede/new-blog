//javascript implementation of Fisher-Yates shufflew Algorithm
function randomizeArray(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const ran = Math.floor(Math.random() * index);
    const temp = array[index];
    array[index] = array[ran];
    array[ran] = temp;
  }
}

//get all questios that contains the search terms
function transformQuestionArray(arrayOfObject) {
  let result;
  let optionArray;
  result = arrayOfObject.map((item) => {
    if (item.options.optionE === undefined || item.options.optionE === "") {
      optionArray = [
        item.options.optionA,
        item.options.optionB,
        item.options.optionC,
        item.options.optionD,
      ];
      //randomizeArray(optionArray);

      return {
        [item.question]: optionArray,
        correctAnswer: item.correctOption,
      };
    } else {
      optionArray = [
        item.options.optionA,
        item.options.optionB,
        item.options.optionC,
        item.options.optionD,
        item.options.optionE,
      ];
      //randomizeArray(optionArray);
      return {
        [item.question]: optionArray,
        correctAnswer: item.correctOption,
      };
    }
  });

  //shuffle the options
  // randomizeArray(result);
  return result;
}

export { transformQuestionArray };
