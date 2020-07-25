import { Component,OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myEditor';
  public Editor = ClassicEditor;

  ngOnInit(): void {
    $('#divHolaMundo').text('Hola mundo');
    $("#textA").select(function(){		
      console.log("xddddd");
      let selectedText = document.getSelection();
      $("#resultado").html("Se ha seleccionado el texto " + selectedText);
    });
  }
}
