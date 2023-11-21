import {Injectable} from '@angular/core';
import {PointControllerService, PointResultDTO} from "itmo-web-lab4";
import {BehaviorSubject, map, Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";

type PointRecords = {
  [id: number]: PointResultDTO
}

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private readonly dataSubject = new BehaviorSubject<PointRecords>({});

  constructor(private api: PointControllerService,
              private auth: AuthService) {
    this.pull()
  }

  get data(): Observable<PointResultDTO[]> {
    return this
      .dataSubject
      .asObservable()
      .pipe(map(x => Object.values(x)))
  }

  public remove(id: number) {
    this.api
      .remove(id)
      .subscribe({
        complete: () => {
          let content = this
            .dataSubject
            .getValue();
          delete content[id];
          this.dataSubject.next(content)
        },
        error: (err) => {
          console.error(err) //TODO
        }
      })
  }

  public removeAll() {
    this.api
      .removeAll()
      .subscribe({
        complete: () => {
          this.dataSubject.next({})
        },
        error: (err) => {
          console.error(err) //TODO
        }
      })
  }

  public insertLocal(newResult: PointResultDTO) {
    this
      .dataSubject
      .next({
        ...this.dataSubject.getValue(),
        [newResult.id]: newResult
      })
  }

  public pull() {
    this.auth
      .isInRole("read_points_all")
      .subscribe(readAll => {
        (readAll ? this.api.findAll() : this.api.findOwn())
          .pipe(map(list => Object.fromEntries(list.map(i => [i.id, i]))))
          .subscribe(this.dataSubject.next.bind(this.dataSubject))
      })
  }
}
