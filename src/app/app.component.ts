import { Component } from '@angular/core';
import {Map, tileLayer , marker} from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leafletmap';

  ngAfterViewInit(): void {
    
    const map = new Map ("map").setView([48.87045, 2.37273],13);

   tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markeItem = marker([48.87045, 2.37273]).addTo(map);

map.fitBounds ([
  [markeItem.getLatLng().lat,markeItem.getLatLng().lng]
]);
//End.
  }
}
