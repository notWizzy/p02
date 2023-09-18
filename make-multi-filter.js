'use strict';

// FUNCTION MakeMultiFilter WITH ORIGINAL ARRAY AS PARAMETER
function MakeMultiFilter(originalArray) {

    // FUNCTION arrayFilterer W/ OPTIONAL PARAMETERS OF  filterCriteria and callback
    const arrayFilterer = function (filterCriteria = undefined, callback = undefined) {

        // IF THE currentArray IS UNDEFINED, SET IT TO THE ORIGINAL ARRAY
        if (arrayFilterer.currentArray === undefined) {
            arrayFilterer.currentArray = originalArray;
        }

        // IF originalArray IS AN ARRAY, THEN FILTER IT
        if (Array.isArray(originalArray)) {

            // IF filterCriteria IS A FUNCTION, FILTER THE currentArray
            if ("function" === typeof filterCriteria) {

                // FILTER THE currentArray BASED ON THE filterCriteria PASSED IN TO arrayFilterer
                arrayFilterer.currentArray = arrayFilterer.currentArray.filter(filterCriteria);

            }

            else {

                // IF filterCriteria ISNT A FUNCTION, THEN RETURN currentArray
                return arrayFilterer.currentArray;

            }

        }

        // IF callback IS A FUNCTION, CALL IT WITH THE originalArray.
        if (typeof callback === 'function') {
            callback.call(originalArray, arrayFilterer.currentArray);
        }

        // RETURN arrayFilterer
        return arrayFilterer;
    };

    // RETURN arrayFilterer
    return arrayFilterer;
}
