(() => {
  'use strict'
  
  this.isMobile = /iPhone|android|hpwos/i.test(navigator.userAgent)
  
  $(document.documentElement).css({
    '--max-width': !isMobile ? 'var(--breakpoint-sm)' : 'auto'
  })

  var loc = window.location.href
  if (!/register|login|forgot|verify|reset|account|more/.test(loc)) {
    sessionStorage.setItem('prevUrl', loc)
  }
  
  this.list = [
    'index',                    // 1
    'result',                   // 2
    'promotions',               // 3
    'features',                 // 4
    'virtual-sports',           // 5
    'sports/football',          // 5
    'sports/snooker',           // 6
    'sports/american-football', // 7
    'sports/boxing',            // 8
    'sports/esports',           // 9
    'sports/golf',              // 10
    'sports/basketball',        // 11
    'sports/tennis',            // 12
    'sports/cricket',           // 13
    'sports/darts',             // 14
    'sports/handball',          // 15
    'sports/baseball',          // 16
    'sports/cycling',           // 17
    'sports/ice-hockey',        // 18
    'sports/specials',          // 19
    'sports/rugby-league',      // 20
    'sports-guide',             // 21
    'betting-rules',            // 22
    'live/betting#l2t01',       // 23
    'live/betting#l2t02',       // 24
    'live/betting#l2t03',       // 25
    'live/betting#l2t04',       // 26
    'live/betting#l2t05',       // 27
    'live/betting#l2t06',       // 28
    'live/betting',             // 29
    'live/schedule',            // 30
    'casino/index',             // 31
    'casino/live',              // 32
    'casino/promotions',        // 33
    'casino/guide',             // 34
    'more/info/about-us',       // 
    'more/info/contact-us',     // 
    'more/info/privacy-policy', // 
    'more/info/fun88',          // 
    'more/info/sponsorship',    // 
    'more/rtps/terms-and-condition',    // 
    'more/rtps/rules',    // 
    'more/rtps/safe-and-secure',    // 
    'more/rtps/deposit-and-withdrawals',    // 
    'more/help/responsible-gambling',    // 
    'more/help/help-centre',    // 
    'more/help/social-media-competitions',    // 
    
    'account',                  // 
    'more',                     // 
    'login',                    // 
    'register',                 // 
    'forgot',                   // 
    'verify',                   // 
    'reset',                    // 
    'error',                    // 
    'template'
  ]

  var loc = window.location.href.toString().replace('.html', '')
  var val = RegExp(list.join('|')).exec(loc)
  var len = loc.substr(loc.indexOf(val[0])).split('/').length - 1

  this.pageIndex = list.indexOf(val[0]) + 1 // page number
  this.dir = '' // top-level directory

  for (var i = 0; i < len; i++) {
    this.dir += '../' // Numbers of top-level directory
  }
})()