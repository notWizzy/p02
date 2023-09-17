class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        return this.template.replace(/\{\{(\w+)}}/g, (match, value) =>{
            if (dictionary.hasOwnProperty(value)){
                return dictionary[value];
            } else{
                return " ";
            }
        });
    }
}

//EXAMPLE
// var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
// var dateTemplate = new TemplateProcessor(template);
//
// var dictionary = {month: 'July', day: '1', year: '2016'};
// var str = dateTemplate.fillIn(dictionary);
//
// assert(str === 'My favorite month is July but not the day 1 or the year 201