import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

const URL = environment.URL;

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor() {}
}
