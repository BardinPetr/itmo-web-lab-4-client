import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {RangeConstraint} from "../services/constraints/range-constraint";

const EPS = 1e-6
const PRECISION_LEN = Math.round(1 / EPS)

export const floatRangeValidator = ({min, max, maxInclusive, minInclusive}: RangeConstraint): ValidatorFn =>
  Validators.compose([
    Validators.required,
    Validators.pattern(/^-?\d+(\.\d+)?$/),
    (control: AbstractControl): ValidationErrors | null => {
      const {value} = control;
      if (value === null)
        return null

      const [_, frac] = value.toString().split('.')
      if (frac && frac.length > PRECISION_LEN)
        return {'precision-exceeded': {value}}

      const num = parseFloat(value)
      const maxDelta = max - num
      const minDelta = num - min
      const valid =
        (maxInclusive ? (Math.abs(maxDelta) < EPS || maxDelta > EPS) : maxDelta > EPS) &&
        (minInclusive ? (Math.abs(minDelta) < EPS || minDelta > EPS) : minDelta > EPS)

      if (!valid)
        return {'out-of-range': {value}}

      return null;
    }
  ])!
