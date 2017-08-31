import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error: any): void {
        alert('An expected error occurred.');
        console.log(error);
    }

}