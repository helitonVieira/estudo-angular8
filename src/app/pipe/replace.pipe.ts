import { Pipe, PipeTransform } from "@angular/core";
 @Pipe({
    name:'replaceCriado' // nome que vai ser usado no html ex(|replaceCriado)
  })
export class ReplacePipe implements PipeTransform{
  transform(value:string, char:string, valueToReplace:string){
    return value.replace(char,valueToReplace);
  }

}
