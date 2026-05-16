import { Component,Inject,inject,signal } from '@angular/core';
import { MygithubService } from '../../../services/mygithub-service';
import { Mygithub } from '../../../models/myGithubInterface';

@Component({
  selector: 'app-whoami',
  imports: [],
  standalone: true,
  templateUrl:'./whoami.html',
  styleUrl: './whoami.css',
})
export class Whoami {
  private myGithubService = inject(MygithubService)
  myGithub = signal<Mygithub | null> (null);
  loading = signal<boolean> (true);
  error = signal<string | null> (null);
  constructor(){
    this.loadMyGithub();

    
  }
  loadMyGithub(): void{
    this.myGithubService.getProfile().subscribe({
      next: (data) =>{
        this.myGithub.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('fallo carga de perfil', err)
        this.error.set('fallo carga de perfil');
      }
    })
  }


}
