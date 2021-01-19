import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateCommentPage } from './update-comment.page';

describe('UpdateCommentPage', () => {
  let component: UpdateCommentPage;
  let fixture: ComponentFixture<UpdateCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCommentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
