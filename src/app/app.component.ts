import { Component } from "@angular/core";

@Component({
  selector: "angcur-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "angular-curse";
  luke = { name: "Luke", isJedi: true, temple: "Coruscant" };
  han = { name: "Han Solo", isJedi: false };
  leia = { name: "Leia", isJedi: false };
}
