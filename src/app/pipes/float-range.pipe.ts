import {Pipe, PipeTransform} from "@angular/core";
import {RangeConstraint} from "../services/constraints/range-constraint";

@Pipe({
  name: "floatRangeDescription"
})
export class FloatRangeDescriptionPipe implements PipeTransform {
  transform({min, max, minInclusive, maxInclusive}: RangeConstraint): string {
    return `Range ${minInclusive ? "[" : "("}${min}, ${max}${maxInclusive ? "]" : ")"}`
  }
}
