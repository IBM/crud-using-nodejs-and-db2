import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoadDataComponent } from './load-data/load-data.component';
import { PredictDataComponent } from './predict-data/predict-data.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { PredictOutputComponent } from './predict-output/predict-output.component';
import { ViewEntryComponent } from './view-entry/view-entry.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: '', component: LoadDataComponent},
  {path: 'predictData', component: PredictDataComponent},
  {path: 'viewData', component: ViewDataComponent},
  {path: 'editData/:id', component: EditDataComponent},
  {path: 'predictOutput', component: PredictOutputComponent},
  {path: 'viewEntry/:id', component: ViewEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
