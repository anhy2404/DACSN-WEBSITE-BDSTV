import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Abount } from '../../../utils/abount-item';
import { log } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-dacsan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-dacsan.component.html',
  styleUrl: './detail-dacsan.component.css'
})
export class DetailDacsanComponent implements OnInit {
  AboutData: any[] = Abount
  filterData: any;
  constructor(private routerActive: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.routerActive.params.subscribe((params: any) => {
      if (params) {
        this.filterData = this.AboutData.filter(x => x.id == params.id)

      }
    });
  }
}
