import {Component} from "@angular/core";
import {MenuItem} from "primeng/api";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    menuItems: MenuItem[] = [
        {
            title: "Home",
            icon: "pi pi-fw pi-home",
            routerLink: "/"
        },
        {
            title: "Points",
            icon: "pi pi-fw pi-map-marker",
            routerLink: "/points",
            disabled: false
        },
        {
            title: "Logout",
            icon: "pi pi-fw pi-sign-out",
            routerLink: "/login", // TODO: logout
            visible: true
        },
    ];
}
