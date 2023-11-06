import {Component, OnInit} from '@angular/core';
import {PointResultDTO} from "../../../libmodel/pointResultDTO";

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
    {header: "Execution Time, ns", sort: ""}
  ]
  points: PointResultDTO[] = []

  ngOnInit(): void {
    for (let i = 0; i < 1000; i++)
      this.points.push({
        id: i,
        pointX: Math.random() * 4 - 2,
        pointY: Math.random() * 4 - 2,
        areaR: Math.random() * 3,
        executionTimeNs: Math.round(Math.random() * 1000),
        owner: "test",
        inside: Math.random() > 0.5,
        timestamp: Date.now() + i * 10000
      })
  }

  deleteAll() {
    alert(1)
  }
}
