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