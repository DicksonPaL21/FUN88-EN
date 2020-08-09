(() => {
  'use strict'
  
  const _profile = 'img/icon/header/user.png'
  
  const user = {
    name: '' || 'Guest',
    id: '' || 'USER ID', //2020040012
    profile: '' || _profile
  }
  
  var container = `
    <div class="container">
      <div class="row">
        <div class="col-12 user-field">
          <div class="d-block text-right pt-2">
            <img class="btn p-0 h-24" src="${this.dir}img/icon/header/close.png" id="close">
          </div>
          <div class="w-100 pb-3">
            <span class="d-inline-block user">
              <img src="${this.dir + user.profile}" />
            </span>
            <p class="text-capitalize text-white w-100 m-0 f-1">${user.name}</p>
            <p class="w-100 m-0 f-4">${user.id}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-0">
          <div class="list-group list-group-flush f-1">
            <a href="${this.dir}account.html" class="list-group-item list-group-item-action">
            <img class="p-0 mr-2 h-16 align-middle" src="${this.dir}img/icon/header/account-info.png">
            <span class="align-middle">Acount Information</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img class="p-0 mr-2 h-16" src="${this.dir}img/icon/header/privacy.png">
              <span class="align-middle">Privacy Protection</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img class="p-0 mr-2 h-16" src="${this.dir}img/icon/header/privacy-policy.png">
              <span class="align-middle">Privacy Policy</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img class="p-0 mr-2 h-16" src="${this.dir}img/icon/header/help.png">
              <span class="align-middle">Help</span>
            </a>
            <a href="${this.dir}more.html" class="list-group-item list-group-item-action">
              <img class="p-0 mr-2 h-16" src="${this.dir}img/icon/header/more.png">
              <span class="align-middle">More</span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="w-100 p-3">
          <a class="btn border-danger text-danger text-center text-uppercase w-100 f-1" href="#" focus>logout</a>
        </div>
      </div>
    </div>
  `
  
  $('.wrapper > .control').html(container)
})()