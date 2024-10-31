import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name: 'convertToSpace',
    standalone: true
})
export class ConvertToSpace implements PipeTransform{

    transform(value: any, ...args: any[]) {
        return value.replaceAll(args[0], ' ')
    }

}