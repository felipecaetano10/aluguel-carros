import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentModalPage } from './rent-modal.page';

describe('RentModalPage', () => {
  let component: RentModalPage;
  let fixture: ComponentFixture<RentModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
