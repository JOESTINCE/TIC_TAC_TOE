import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { windowTime } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
})
export class HomeComponent implements OnInit {
  player: any;
  winner: any = null;
  constructor() {}
  data: any = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  turn: number = 0;
  ngOnInit() {}
  onClick(i: number, j: number) {
    if (this.data[i][j]) return;
    this.turn++;
    this.player = this.turn % 2 === 0 ? 'O' : 'X';
    this.data[i][j] = this.turn % 2 === 0 ? 'O' : 'X';
    const tempWinner = this.checkWinner();
    if (tempWinner) {
      setTimeout(() => {
        this.winner = tempWinner;
      }, 200);
    } else if (this.turn === 9) {
      this.winner = 'Draw';
    }
  }

  checkWinner() {
    if (this.turn >= 3) {
      if (
        this.data[0][0] === this.player &&
        this.data[1][1] === this.player &&
        this.data[2][2] === this.player
      ) {
        // window.alert(`${this.player} won`);
        return this.player;
      } else if (
        this.data[0][2] === this.player &&
        this.data[1][1] === this.player &&
        this.data[2][0] === this.player
      ) {
        // window.alert(`${this.player} won`);
        return this.player;
      } else {
        for (let i = 0; i < 3; i++) {
          if (
            this.data[i][0] === this.player &&
            this.data[i][1] === this.player &&
            this.data[i][2] === this.player
          ) {
            // window.alert(`${this.player} won`);
            return this.player;
          } else if (
            this.data[0][i] === this.player &&
            this.data[1][i] === this.player &&
            this.data[2][i] === this.player
          ) {
            // window.alert(`${this.player} won`);
            return this.player;
          }
        }
      }
    }
  }
  reset() {
    this.player = undefined;
    this.winner = null;
    this.data = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.turn = 0;
  }
  allValuesAreNull(matrix: any[]) {
    return matrix.every((row) => row.every((cell: any) => cell !== null));
  }
}
