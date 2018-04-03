import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPlayersPanelComponent } from './sidebar-players-panel.component';

describe('SidebarPlayersPanelComponent', () => {
  let component: SidebarPlayersPanelComponent;
  let fixture: ComponentFixture<SidebarPlayersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarPlayersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPlayersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
