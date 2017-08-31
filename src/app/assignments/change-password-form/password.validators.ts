import { ValidationErrors, AbstractControl } from '@angular/forms';
export class PasswordValidators {

    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value !== '1212') {
                    resolve({ invalidOldPassword: true })
                }
                else
                    resolve(null);
            }, 2000);
        });
    }

    static passwordShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value)
            return { passwordShouldMatch: true };
        else
            return null;
    }
}