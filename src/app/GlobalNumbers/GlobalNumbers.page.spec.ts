import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlobalNumbersPage } from './GlobalNumbers.page';

describe('GlobalNumbersPage', () => {
  let component: GlobalNumbersPage;
  let fixture: ComponentFixture<GlobalNumbersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalNumbersPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
