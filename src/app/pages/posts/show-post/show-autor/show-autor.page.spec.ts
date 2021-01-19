import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowAutorPage } from './show-autor.page';

describe('ShowAutorPage', () => {
  let component: ShowAutorPage;
  let fixture: ComponentFixture<ShowAutorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAutorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowAutorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
