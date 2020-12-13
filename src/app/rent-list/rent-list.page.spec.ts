import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentListPage } from './rent-list.page';

describe('RentListPage', () => {
  let component: RentListPage;
  let fixture: ComponentFixture<RentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
