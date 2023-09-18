'use strict';
// ADDED THIS FUNCTION SO THAT THE VARIABLES ARE ONLY ACCESSIBLE IN THIS FILE AND THEN CALLED THE TEST FUNCTION AT THE END
function project2test() {

  /*
   * This file tests the Project #2 JavaScript assignment problems. It prints what
   * it finds to the console log and updates the text being displayed in the window with a
   * summary of the results.
   */

  /* eslint-env browser, node */

  // Result message for Problems 1-3
  let p1Message = 'SUCCESS';
  let p2Message = 'SUCCESS';
  let p3Message = 'SUCCESS';

  // Keep track of all the var statements
  const varDeclared = ['varDeclared', 'p1Message', 'p2Message', 'p3Message'];

  // Utility functions
  function arraysAreTheSame(a1, a2) {
    if (!Array.isArray(a1) || !Array.isArray(a2) || (a1.length !== a2.length)) {
      return false;
    }
    for (var i = 0; i < a1.length; i += 1) {
      if (a1[i] !== a2[i]) {
        return false;
      }
    }
    return true;
  }

  // ********************* Test MakeMultiFilter

  if (typeof MakeMultiFilter !== 'function') {
    console.error('MakeMultiFilter is not a function', typeof MakeMultiFilter);
    p1Message = 'FAILURE';
  } else {
    const originalArray = [1, 2, 3];
    const filterFunc = window.MakeMultiFilter(originalArray);

    const secondArray = [1, 2, 3, 4];
    const filterFuncTwo = window.MakeMultiFilter(secondArray);

    if (typeof filterFunc !== 'function') {
      console.error('MakeMultiFilter does not return a function', filterFunc);
      p1Message = 'FAILURE';
    } else {
      let result = filterFunc();
      if (!arraysAreTheSame([1, 2, 3], result)) {
        console.error('filter function with no args does not return the original array', result);
        p1Message = 'FAILURE';
      }

      let callbackPerformed = false;
      result = filterFunc(function (item) {
        return item !== 2;
      }, function (callbackResult) {
        callbackPerformed = true;
        if (!arraysAreTheSame([1, 3], callbackResult)) {
          console.error('filter function callback does not filter 2 correctly', callbackResult);
          p1Message = 'FAILURE';
        }
        if (!arraysAreTheSame([1, 2, 3], this)) {
          console.error('filter function callback does not pass original array as this', this);
          p1Message = 'FAILURE';
        }
      });

      if (!callbackPerformed) {
        console.error('filter function callback not performed');
        p1Message = 'FAILURE';
      }

      if (result !== filterFunc) {
        console.error('filter function does not return itself', result);
        p1Message = 'FAILURE';
      }

      result = filterFunc(function (item) {
        return item !== 3;
      });
      if (result !== filterFunc) {
        console.error('filter function does not return itself 2', result);
        p1Message = 'FAILURE';
      }

      result = filterFunc();
      if (!arraysAreTheSame([1], result)) {
        console.error('filter function callback does not filter 3 correctly', result);
        p1Message = 'FAILURE';
      }
      result = filterFuncTwo(function (item) {
        return item !== 1;
      }, function (callbackResult) {
        if (!arraysAreTheSame([2, 3, 4], callbackResult)) {
          console.error('second filter does not filter 1 (check for global variable usage)', callbackResult);
          p1Message = 'FAILURE';
        }
        if (!arraysAreTheSame([1, 2, 3, 4], this)) {
          console.error('filter function callback does not pass original array as this', this);
          p1Message = 'FAILURE';
        }
      });
    }
  }
  console.log('Test MakeMultiFilter:', p1Message);

  // ********************* Test TemplateProcessor

  if (typeof TemplateProcessor !== 'function') {
    console.error('TemplateProcessor is not a function', typeof TemplateProcessor);
    p2Message = 'FAILURE';
  } else {
    const template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
    const dateTemplate = new TemplateProcessor(template);

    const dictionary = {month: 'July', day: '1', year: '2016'};
    const str = dateTemplate.fillIn(dictionary);

    if (str !== 'My favorite month is July but not the day 1 or the year 2016') {
      console.error('TemplateProcessor didn\'t work');
      p2Message = 'FAILURE';
    }
    varDeclared.push('template');
    varDeclared.push('dateTemplate');
    varDeclared.push('dictionary');
    varDeclared.push('str');
  }
  console.log('Test TemplateProcessor:', p2Message);

  // ********************* Test to see if the symbols we defined are in the global address space

  varDeclared.forEach(function (sym) {
    if (window[sym] !== undefined) {
      console.error('Found my symbol', sym, 'in DOM');
      p3Message = 'FAILURE';
    }
  });
  console.log('Test Problem 3:', p3Message);

  // Store the result back into the global space under the object name Project2Results
  window.Project2Results = {
    p1Message: p1Message,
    p2Message: p2Message,
    p3Message: p3Message,
  };

  // Once the browser loads our companion HTML in test-project2.html we
  // update it with the results of our testing. This code will make more
  // sense after the next project.
  window.onload = function () {
    document.getElementById('p1').innerHTML = p1Message;
    document.getElementById('p2').innerHTML = p2Message;
    document.getElementById('p3').innerHTML = p3Message;
  };
}
project2test();