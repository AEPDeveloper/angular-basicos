import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent  {

heroes : string [] = ['Spiderman', 'Iroman', 'Hercules', 'Superman','Superwoman'];
heroeBorrado:string ='';

//heroeBorrado:string| undefined='';

borrarHeroe() {
  //this.heroes.length = this.heroes.length -1 ; // elimina el ultimo en el array
 
    this.heroeBorrado = this.heroes.shift() || '';  // elimina el primer item en el array
   
    //this.heroeBorrado = this.heroes.shift() ;
    //console.log(heroeBorrado);
   
}

}


// for (let heroe of heroes) {

// }