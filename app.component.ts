import {Component} from '@angular/core';

@Component({
    selector:'app-comp',
    template: `<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse">
        </button>
        <a class="navbar-brand" href="#">Angular</a>
      </div>
      <div id="navbar" class="navbar-collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#Movies">Movies</a></li>
          <li><a href="#Music">Music</a></li>
          <li><a href="./prod.component.html">Product</a></li>
          <li><a href="#order">Order</a></li>
        </ul>
      </div>
    </div>
</nav>
<prod-comp></prod-comp>`
           
})
export class AppComponent{

}
