(() => {
  'use strict'
  
  var n = this.pageIndex
  var link = this.list
  
  link = link.slice(0, link.length - 6)
  
  link = link.map((e) => {
    e = e.split('#')
    e = e[0] + (e.length > 1 ? `.html#${e[1]}` : '.html')
    return e
  })
  
  var tab1 = n >= 1 && n <= 23
  var tab2 = n >= 24 && n <= 31
  var tab3 = n >= 32 && n <= 35
  
  var i = 0 // Sidebar links(items) indexing
  var k = 0 // Page index iterator
  
  var sidebar = `
    <div class="sidebar-container overlay sb-0">
      <nav class="y-scroll" id="sidebar">
        <div class="pl-3 pr-3" id="ctrl-tab">
          <div class="row">
            <a class="btn text-center d-inline-block p-1 pt-3 pb-3 col-4 ${tab1 ? 'active' : ''}" tabindex="1" href="javascript:void(0)">
              <i class="icon8 sport"></i>
              <p class="text-uppercase m-0 f-5">sports</p>
            </a>
            <a class="btn text-center d-inline-block p-1 pt-3 pb-3 col-4 ${tab2 ? 'active' : ''}" tabindex="2" href="javascript:void(0)">
              <i class="icon8 live"></i>
              <p class="text-uppercase m-0 f-5">live</p>
            </a>
            <a class="btn text-center d-inline-block p-1 pt-3 pb-3 col-4 ${tab3 ? 'active' : ''}" tabindex="3" href="javascript:void(0)">
              <i class="icon8 casino"></i>
              <p class="text-uppercase m-0 f-5">casino</p>
            </a>
          </div>
        </div>

        <div class="sidebar-content">
          <div id="tab-1" class="menu ${tab1 ? 'active' : ''}">
            <ul class="nav flex-column">
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Today's Events
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Results
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Promotions
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Features
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Virtual Sports
                </a>
              </li>

              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Football
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Snooker
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  American Football
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Boxing
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Esports
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Golf
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Basketball
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Tennis
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Cricket
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Darts
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Handball
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Baseball
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Cycling
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Ice Hockey
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Specials
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Rugby League
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Sports Guide
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Betting Rules
                </a>
              </li>
            </ul>
          </div>
          
          <div id="tab-2" class="menu ${tab2 ? 'active' : ''}">
            <ul class="nav flex-column">
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  <span class="badge badge-primary badge-pill float-right">3</span>
                  Football
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  <span class="badge badge-primary badge-pill float-right">1</span>
                  Tennis
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  <span class="badge badge-primary badge-pill float-right">4</span>
                  BasketBall
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  <span class="badge badge-primary badge-pill float-right">1</span>
                  Ice Hockey
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  <span class="badge badge-primary badge-pill float-right">6</span>
                  Volleyball
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  <span class="badge badge-primary badge-pill float-right">6</span>
                  Table Tennis
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  All Live Events
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  Live Schedule
                </a>
              </li>
            </ul>
          </div>

          <div id="tab-3" class="menu ${tab3 ? 'active' : ''}">
            <ul class="nav flex-column">
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  <span class="badge badge-primary float-right">Play</span>
                  Casino
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  <span class="badge badge-primary float-right">Play</span>
                  Live Casino
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  <span class="badge badge-primary float-right">Read More</span>
                  Promotions
                </a>
              </li>
              <li class="item ${(n === ++k ? 'active' : '')}">
                <a class="link btn" href="${this.dir + link[i++]}">
                  <span class="badge badge-primary float-right">Read More</span>
                  Casino Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  `

  $('body').prepend(sidebar)
  $('[src$="sidenav.js"]').remove()
  
  $('#sidebar .btn').click((e) => {
    var href = $(e.currentTarget).attr('href')
    if (href.split('#').length > 1) {
      location.assign(href)
      location.reload()
    }
  })
  
  let tmpIdx = 0
  $('#ctrl-tab .btn').click((e) => {
    const idx = $(e.currentTarget).attr('tabindex')
    
    if (idx !== tmpIdx && !$(e.currentTarget).hasClass('active')) {
      tmpIdx = idx
      
      $('#ctrl-tab .btn').removeClass('active')
      $(e.currentTarget).addClass('active')

      $('#sidebar .menu').hide()
      $(`#tab-${idx}`).fadeIn()
    }
  })

  $('#sidebar-menu').click(() => {
    $('.sidebar-container').css({
      visibility: 'visible',
      opacity: 1
    })
    $('#sidebar').css('width', 'var(--sidebar-width)')
  })
  
  $('#sidebar').click((e) => {
    e.cancelBubble = true
    e.stopPropagation()
  })
  
  $('.sidebar-container').click((e) => {
    e.cancelBubble = true
    e.stopPropagation()
    
    $('.sidebar-container').css({
        visibility: 'hidden',
        opacity: 0
      })
    $('#sidebar').css('width', 0)
  })
})()