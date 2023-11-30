import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-carga',
  templateUrl: './pagina-carga.page.html',
  styleUrls: ['./pagina-carga.page.scss'],
})
export class PaginaCargaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 2875);
  }

}
