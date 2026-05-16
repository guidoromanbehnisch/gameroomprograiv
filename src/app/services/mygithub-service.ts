import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mygithub } from '../models/myGithubInterface';

@Injectable({
  providedIn: 'root',
})
export class MygithubService {
  private apiUrl = "https://api.github.com/users/guidoromanbehnisch"
  constructor(private htpp: HttpClient){}
  getProfile(): Observable<Mygithub>{
    return this.htpp.get<Mygithub>(this.apiUrl);
  }
}
