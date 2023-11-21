import {Component, OnInit} from '@angular/core';
import {PointsService} from "../../../services/points.service";
import {AuthService} from "../../../auth/auth.service";

const BASE_COLUMNS = [
  {header: "Timestamp", sort: "timestamp"},
  {header: "User", sort: ""},
  {header: "Inside", sort: ""},
  {header: "R", sort: "areaR"},
  {header: "X", sort: "pointX"},
  {header: "Y", sort: "pointY"},
  {header: "Execution Time, ms", sort: ""}
]

const ADMIN_COLUMNS = ["User"]

@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.sass']
})
export class PointTableComponent implements OnInit {
  public columns = BASE_COLUMNS

  constructor(private pointService: PointsService,
              public auth: AuthService) {
    auth
      .isInRole('admin')
      .subscribe(admin =>
        this.columns = BASE_COLUMNS.filter(({header}) => admin || !ADMIN_COLUMNS.includes(header))
      );
  }

  get points() {
    return this.pointService.data
  }

  ngOnInit(): void {

  }

  removeAll() {
    this.pointService.removeAll()
  }

  remove(id: number) {
    this.pointService.remove(id)
  }
}
