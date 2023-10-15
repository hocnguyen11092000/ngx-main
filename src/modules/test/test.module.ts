import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { LazyElementsModule } from '@angular-extensions/elements';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: TestComponent }];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LazyElementsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TestComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestModule {}
