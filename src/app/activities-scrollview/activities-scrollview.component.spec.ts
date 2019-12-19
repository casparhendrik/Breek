import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivitiesScrollviewComponent } from './activities-scrollview.component';

describe('ActivitiesScrollviewComponent', () => {
  let component: ActivitiesScrollviewComponent;
  let fixture: ComponentFixture<ActivitiesScrollviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesScrollviewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitiesScrollviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
