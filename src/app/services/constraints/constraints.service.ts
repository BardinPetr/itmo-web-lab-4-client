import {Injectable} from "@angular/core";
import {RangeConstraint} from "./RangeConstraint";

@Injectable({
  providedIn: "root"
})
export class ConstraintsService {

  xConstraint: RangeConstraint = {min: -4, max: 4, minInclusive: true, maxInclusive: true}
  yConstraint: RangeConstraint = {min: -3, max: 3, minInclusive: false, maxInclusive: false}
  rConstraint: RangeConstraint = {min: -4, max: 4, minInclusive: true, maxInclusive: true}

}
