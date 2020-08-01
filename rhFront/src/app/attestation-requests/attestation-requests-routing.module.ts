import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AttestationRequestsComponent} from './attestation-requests.component';
import {NewAttestationComponent} from './new-attestation/new-attestation.component';
import {AttestationDetailComponent} from './attestation-detail/attestation-detail.component';

const routes: Routes = [
  {path: 'attestationrequests' , component: AttestationRequestsComponent},
  {path: 'attestationrequests/new', component: NewAttestationComponent},
  {path: 'attestationrequest/:id', component: AttestationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttestationRequestsRoutingModule { }
