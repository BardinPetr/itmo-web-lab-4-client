import {Pipe, PipeTransform} from "@angular/core";
import {DoubleRange} from "itmo-web-lab4";

@Pipe({
  name: "floatRangeDescription"
})
export class FloatRangeDescriptionPipe implements PipeTransform {
  transform(range: DoubleRange | null): string {
    return range === null ? "Range" :
      `Range ${range.minInclusive ? "[" : "("}${range.min}, ${range.max}${range.maxInclusive ? "]" : ")"}`
  }
}
