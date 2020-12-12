import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGenerationListComponent } from './page-generation-list.component';

describe('PageGenerationListComponent', () => {
  let component: PageGenerationListComponent;
  let fixture: ComponentFixture<PageGenerationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGenerationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGenerationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
