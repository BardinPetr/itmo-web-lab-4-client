import {Injectable} from "@angular/core";
import {ConstraintsControllerService, DoubleRange} from "itmo-web-lab4";
import {BehaviorSubject, filter, map, Observable, zip} from "rxjs";

export class Constraints {
  public x!: DoubleRange;
  public y!: DoubleRange;
  public r!: DoubleRange;
}

@Injectable({
  providedIn: "root"
})
export class ConstraintsService {

  public readonly constraints = new BehaviorSubject<Constraints | null>(null);

  constructor(private service: ConstraintsControllerService) {
    this.update()
  }

  get xConstraint(): Observable<DoubleRange> {
    return this.extract("x")
  }

  get yConstraint(): Observable<DoubleRange> {
    return this.extract("y")
  }

  get rConstraint(): Observable<DoubleRange> {
    return this.extract("r")
  }

  public update() {
    zip(["x", "y", "r"].map(i =>
      this.service.getConstraint(i as ('x' | 'y' | 'r'), 'body') as (Observable<DoubleRange>)
    ))
      .subscribe(([x, y, r]: DoubleRange[]) =>
        this.constraints.next({x, y, r})
      )
  }

  private extract(type: "x" | "y" | "r"): Observable<DoubleRange> {
    return this
      .constraints
      .asObservable()
      .pipe(filter(c => c !== null))
      .pipe(map(c => c![type]))
  }
}
