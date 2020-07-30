import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teamName : String [] = [
    'CSK', 'MI', 'RR',
    'DC', 'RCB', 'KKR',
    'KXIP', 'SH' 
  ];

  phoneNumber : String [] = [
    '965-144-6018', '1-522-714-2638 x44811', '(038) 030-9641 x7086',
    '005-851-7095-72027', '1-471-836-5871 x5841', '(247) 305-7427',
    '475.071.4608 x101', '070-610-2661' 
  ];

  teamWebsite : String [] = [
    'https://www.chennaisuperkings.com/', 'https://www.mumbaiindians.com/', 'https://www.rajasthanroyals.com/',
    'https://www.delhicapitals.com/', 'https://www.royalchallengers.com/', 'https://www.kkr.com/',
    'https://www.kxip.in/', 'https://www.sunrisershyderabad.in/'
  ];

  teamImages : String [] = [
    '../assets/csk.png', '../assets/mi.png', '../assets/rr.png',
    '../assets/dc.png', '../assets/rcb.png', '../assets/kkr.png',
    '../assets/kxi.png', '../assets/sh.png'
  ];

}
