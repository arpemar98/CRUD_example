import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowPostPage } from './show-post.page';

describe('ShowPostPage', () => {
  let component: ShowPostPage;
  let fixture: ComponentFixture<ShowPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
