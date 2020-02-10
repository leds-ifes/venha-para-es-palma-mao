import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConcursoPage } from './concurso.page';

describe('ConcursoPage', () => {
  let component: ConcursoPage;
  let fixture: ComponentFixture<ConcursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
