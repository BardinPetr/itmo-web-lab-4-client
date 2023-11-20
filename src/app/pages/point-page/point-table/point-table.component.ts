import {Component, OnInit} from '@angular/core';
import {PointResultDTO} from "itmo-web-lab4";
import {PointsService} from "../../../services/points.service";

@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.sass']
})
export class PointTableComponent implements OnInit {
  columns = [
    {
      header: "Timestamp",
      sort: "timestamp"
    },
    {
      header: "Inside", sort: ""
    },
    {header: "R", sort: "areaR"},
    {header: "X", sort: "pointX"},
    {header: "Y", sort: "pointY"},
    {header: "Execution Time, ms", sort: ""}
  ]

  constructor(private pointService: PointsService) {
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
