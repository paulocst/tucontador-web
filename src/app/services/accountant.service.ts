import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountantService {

  accountants:any[] = [
    {
    	name:'Jose', 
    	date:'10/05/02',
    	profile:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique efficitur maximus. Curabitur fermentum purus at venenatis gravida. Mauris ullamcorper efficitur tellus, non tristique lacus. Pellentesque efficitur sit amet odio nec rutrum. Quisque neque nisi, volutpat eget viverra sed, feugiat ac augue. Nam vehicula nunc purus, ut ultricies purus hendrerit eu. Curabitur aliquam a nisi porttitor imperdiet. Cras accumsan dolor arcu, vel sagittis ante efficitur in. Suspendisse viverra non dui ac suscipit. Sed id tortor eget augue varius ultrices eget eget dolor.'
    },
    {
    	name:'Mario', 
    	date:'10/06/02',
    	profile:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique efficitur maximus. Curabitur fermentum purus at venenatis gravida. Mauris ullamcorper efficitur tellus, non tristique lacus. Pellentesque efficitur sit amet odio nec rutrum. Quisque neque nisi, volutpat eget viverra sed, feugiat ac augue. Nam vehicula nunc purus, ut ultricies purus hendrerit eu. Curabitur aliquam a nisi porttitor imperdiet. Cras accumsan dolor arcu, vel sagittis ante efficitur in. Suspendisse viverra non dui ac suscipit. Sed id tortor eget augue varius ultrices eget eget dolor.'

    },
    {
    	name:'Luis', 
    	date:'10/07/02',
    	profile:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique efficitur maximus. Curabitur fermentum purus at venenatis gravida. Mauris ullamcorper efficitur tellus, non tristique lacus. Pellentesque efficitur sit amet odio nec rutrum. Quisque neque nisi, volutpat eget viverra sed, feugiat ac augue. Nam vehicula nunc purus, ut ultricies purus hendrerit eu. Curabitur aliquam a nisi porttitor imperdiet. Cras accumsan dolor arcu, vel sagittis ante efficitur in. Suspendisse viverra non dui ac suscipit. Sed id tortor eget augue varius ultrices eget eget dolor.'
    }
  ]	

  constructor() { 
  	console.log('Servicio funcionando');	
  }

  getAccountants(){
  	return this.accountants
  }

  getAccountant(i){
    return this.accountants[i]
  }
}