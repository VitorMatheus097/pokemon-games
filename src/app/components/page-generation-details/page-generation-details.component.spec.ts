import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGenerationDetailsComponent } from './page-generation-details.component';

describe('PageGenerationDetailsComponent', () => {
  let component: PageGenerationDetailsComponent;
  let fixture: ComponentFixture<PageGenerationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGenerationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGenerationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
