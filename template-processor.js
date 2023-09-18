//TemplateProcessor Class
class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    //method
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