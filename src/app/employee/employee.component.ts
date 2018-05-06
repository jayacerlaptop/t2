import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    template: ` <table>
    <tr>
        <td>First Name</td>
        <td>{{firstName}}</td>
    </tr>
    <tr>
        <td>Last Name</td>
        <td>{{lastName}}</td>
    </tr>
    <tr>
        <td>Gender</td>
        <td>{{gender}}</td>
    </tr>
    <tr>
        <td>Aggg</td>
        <td>{{age}}</td>
    </tr>
</table> `
})
//*
export class EmployeeComponent {
    firstName: string = 'Tffhhhhhgggggffomvy';
    lastName: string = 'Hopyykcccins';
    gender: string = 'Male';
    age: number = 20;
}
