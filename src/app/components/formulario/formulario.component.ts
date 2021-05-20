import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() paramsSelected = new EventEmitter<any>();

  public countrySelected : string = 'ar';
  public categorySelected : string = 'general';

  public countries: any[] = [
    { value: 'ar', name: 'Argentina' },
    { value: 'br', name: 'Brasil' },
    { value: 'fr', name: 'Francia' },
    { value: 'hu', name: 'Hungría' },
    { value: 'mx', name: 'México' },
    { value: 'gb', name: 'Reino Unido' },
  ];
  public categories: any[] = [
    { value: 'general', name: 'General' },
    { value: 'business', name: 'Negocios' },
    { value: 'entertaiment', name: 'Entretenimiento' },
    { value: 'health', name: 'Salud' },
    { value: 'science', name: 'Ciencia' },
    { value: 'sports', name: 'Deportes' },
    { value: 'technology', name: 'Tecnología' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  sendInfo() {
    const params = {
      category : this.categorySelected,
      country : this.countrySelected
    };

    this.paramsSelected.emit(params);
  }

}
