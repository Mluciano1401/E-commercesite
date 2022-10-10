import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, Input, OnInit } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';

export interface GridColumns {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

@Directive({
  selector: '[gridCols]'
})

export class GridColsDirective implements OnInit {
  private gridCols: GridColumns = {xs: 1, sm: 1, md: 2, lg: 3, xl: 4};

  public get cols(): GridColumns {
    return this.gridCols;
  }

  @Input('gridCols')
  public set cols(map: GridColumns) {
    if (map && ('object' === (typeof map))) {
      this.gridCols = map;
    }
  }
  
  constructor(private grid: MatGridList, private breakpointObserver: BreakpointObserver) {
    if(this.grid != null) {
      this.grid.cols = this.gridCols.md;
    }
  }
  
  ngOnInit(): void {
    if(this.grid != null) {
      this.grid.cols = this.gridCols.md;
    }
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {

      if (result.breakpoints[Breakpoints.XSmall]) {
        this.grid.cols = this.gridCols.xs;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        this.grid.cols = this.gridCols.sm;
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        this.grid.cols = this.gridCols.md;
      }
      if (result.breakpoints[Breakpoints.Large]) {
        this.grid.cols = this.gridCols.lg;
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        this.grid.cols = this.gridCols.xl;
      }
    });
  }

}
