import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefuncionarioComponent } from './homefuncionario.component';

describe('HomefuncionarioComponent', () => {
  let component: HomefuncionarioComponent;
  let fixture: ComponentFixture<HomefuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomefuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomefuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
