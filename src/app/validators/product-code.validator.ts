import { AbstractControl, ControlContainer, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function productCodeValidator(): ValidatorFn{
    return(control: AbstractControl): ValidationErrors | null => {

        const formControlValue: string = control.value;

        //check type
        if(!formControlValue || typeof formControlValue !== "string"){
            return {invlaidCodeFormat: true}
        }

        // check format (letters - numbers)
        const regex = /^[A-Z]{3}-\d{3}$/
        if(!regex.test(formControlValue)) {
            return {invlaidCodeFormat: true}
        }

        //Check that the numeric part is greater than 100
        const numericPart = parseInt(formControlValue.split('-')[1]);
        if(numericPart <= 100){
            return {invlaidCodeFormat: true}
        }
        return null
    }
}