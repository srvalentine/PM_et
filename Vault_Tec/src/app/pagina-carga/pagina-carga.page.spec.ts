import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaCargaPage } from './pagina-carga.page';

describe('PaginaCargaPage', () => {
  let component: PaginaCargaPage;
  let fixture: ComponentFixture<PaginaCargaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaCargaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
