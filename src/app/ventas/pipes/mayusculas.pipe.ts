import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayus'
})
export class MayusculasPipe implements PipeTransform{
    transform(value: string,isMayus: boolean = true):string {
        return  isMayus ? value.toUpperCase() : value.toLocaleLowerCase()
    }

}