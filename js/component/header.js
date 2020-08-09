(() => {
  'use strict'
  
  var header = `
    <nav class="navbar navbar-light bg-light border-bottom pl-0 pr-0">
      <div class="container">
        <div class="float-left">
          <div class="btn p-0 align-middle d-inline-block" id="sidebar-menu" style="margin-left: -10px">
            <img class="h-24" src="${this.dir}img/icon/header/elipse-menu.png">
          </div>
          <div class="navbar-brand align-middle">
            <img class="h-26 d-block" src="${this.dir}img/fun88.png" alt="">
          </div>
        </div>
        <div class="float-right">
          <div class="btn h-28 mr-1 align-middle d-inline-block search">
            <div class="clearfix">
              <span class="text-muted pl-1 pr-1 f-1">Search</span>
              <img class="pb-1 h-20" src="${this.dir}img/icon/header/search.png">
            </div>
          </div>
          <div class="btn p-0 align-middle d-inline-block user" id="user-profile">
            <img src="${this.dir}img/icon/header/user.png" />
          </div>
        </div>
      </div>
    </nav>
    <div class="container" id="search-field" focus>
      <div class="border-bottom bg-light d-block">
        <form class="form-inline pt-2 pb-2" method="POST">
          <div class="form-group align-middle btn m-0 col-1" id="back">
            <img class="h-24" src="${this.dir}img/icon/header/left.png">
          </div>
          <div class="form-group align-middle m-0 col-11">
            <input type="text" id="search" class="form-control form-control-sm no-shadow w-100 f-1" placeholder="Search" autofocus>
          </div>
        </form>
      </div>
      <div class="history y-scroll sb-1">
        <ul class="text-dark">
          <li class="text-muted text-center pt-2 pb-2 f-5">
            - No search found -
          </li>
          <!--li class="btn w-100 text-left f-1">
            <div class="float-left mr-3">
              <img class="h-20 align-middle pb-1"
              src="${this.dir}img/icon/header/history.png">
            </div>
            <p class="float-left m-0">lorem</p>
            <div class="float-right ml-3 edit">
              <img class="h-20 align-middle pb-1"
              src="${this.dir}img/icon/header/up-left.png">
            </div>
          </li-->
        </ul>
      </div>
    </div>
  `
  
  $('body header').html(header)
  
  
})()