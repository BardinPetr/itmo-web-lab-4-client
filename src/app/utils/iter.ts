import {RangeConstraint} from "../services/constraints/range-constraint";

export const range = (min: number, max: number): number[] =>
  [...Array(max - min).keys()].map(i => min + i)

export const rangeByConstraint = ({min, max, minInclusive, maxInclusive}: RangeConstraint) =>
  range(min + (minInclusive ? 0 : 1), max + (maxInclusive ? 1 : 0))
