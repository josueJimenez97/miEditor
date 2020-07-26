import { Component,OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as $ from 'jquery';
//declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myEditor';
  public Editor = ClassicEditor;
  boldOn=false;
  italicOn=false;
  ordenarOn=false;
  justify=1;
  habilitado=true;
  colorActual="#000000";
  tam=4;
  public constructor(){
  }
  
  ngOnInit(): void {
    $('#miDiv').attr('contenteditable','true');
    
  }
  focus(){
    let editor = document.getElementById("miDiv");
    editor.focus();
  }

  bold(){
    if(this.habilitado){
      this.boldOn=!this.boldOn;
      document.execCommand('bold');
      this.focus();
    }
    
   
  }

  italic(){
    if(this.habilitado){
      this.italicOn=!this.italicOn;
      document.execCommand('italic');
      this.focus();
    }
    
  }
  
  seleccionColor(e){
    if(this.habilitado){
      console.log(e);
      this.colorActual=e;
      document.execCommand('foreColor', false, this.colorActual);
      this.focus();
    }
  }

  hizoClick(e){
    if(this.habilitado){
      let val= $("#"+e).text();
      console.log($("#"+e).text())
      this.tam=parseInt(val);
      document.execCommand('fontSize', false, val);
      this.focus();
    }
  }

  ordenarNumericamente(){
    if(this.habilitado){
      this.ordenarOn=!this.ordenarOn;
      console.log("intentando ordenar xd")
      document.execCommand('insertOrderedList');
      this.focus();
    }
  }

  alignLeft(){
    if(this.habilitado){
      this.justify=this.justify==1?0:1;
      document.execCommand('justifyLeft');
      this.focus();
    }
    
  }
  alignCenter(){
    if(this.habilitado){
      this.justify=this.justify==2?0:2;
      document.execCommand('justifyCenter');
      this.focus();
    }
    
  }
  alignFull(){
    if(this.habilitado){
      this.justify=this.justify==3?0:3;
      document.execCommand('justifyFull');
      this.focus();
    }
    
  }
  alignRight(){
    if(this.habilitado){
      this.justify=this.justify==4?0:4;
      document.execCommand('justifyRight');
      this.focus();
    }
  }
  insertarImagen(){
    if(this.habilitado){
      
      document.execCommand('insertimage',null,'https://folimp.com/images/gato/crecen-los-gatos.jpg');
    }
  }
  terminar(){
    this.habilitado=false;
    $('#miDiv').attr('contenteditable','false',);
    $("#titulo").attr('readonly','true');
    $(".dropdown-toggle").attr('disabled','true');
  }
  reanudar(){
    this.habilitado=true;
    $('#miDiv').attr('contenteditable','true');
    $("#titulo").removeAttr('readonly');
    $(".dropdown-toggle").removeAttr('disabled');
  }
}