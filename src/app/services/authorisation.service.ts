import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AuthorisationService{
    canAccessProductDetails(idValue: string){
        const parsedNumber: number = parseInt(idValue);

        if(!isNaN(parsedNumber) && parsedNumber > 0)
            return true
        
        alert("Invalid Value");
        return false
    }
}