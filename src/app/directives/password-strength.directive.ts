import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { createPasswordStrengthValidator } from "../validators/password-strength.validator";

@Directive({
    selector: '[passwordStrength]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PasswordStrengthDiirective, multi: true }]
})

export class PasswordStrengthDiirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return createPasswordStrengthValidator()(control);
    }

}