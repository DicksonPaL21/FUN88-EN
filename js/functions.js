(() => {
  'use strict'
  
  $('[focus]').click((e) => {
    e.cancelBubble = true
    e.stopPropagation()
  })
  
  $('[restricted]').on('click', () => {
    if (confirm('Sorry, you could\'nt access to this page. Please login your account to continue.'))
      location.assign(`${dir}login.html`)
    return false;
  })

  $('span#back').click(() => {
    var loc = window.location.href
    
    if (/forgot/.test(loc))
      location.assign('login.html')
    else if (/verify/.test(loc))
      location.assign('forgot.html')
    else if (/reset/.test(loc))
      location.assign('verify.html')
    else
      location.assign(sessionStorage.getItem('prevUrl') || 'index.html')
  })
  
  $.fn.scrollLock = function (e) {
    var style = {
      'pointer-events': e ? 'none' : 'auto',
      'overflow': e ? 'hidden' : 'auto'
    }

    if (e) {
      this.bind('touchmove', touch => touch.preventDefault())
    } else this.unbind('touchmove')

    this.css(style)

    return true
  }
  
  $('header .search').click((e) => {
    $('.wrapper > .content > section').hide()
    $('header #search-field').show()
    
    $('#search-field [autofocus]').focus()
  })

  $('header #search-field #back').click((e) => {
    $('.wrapper > .content > section').show()
    $('header #search-field').hide()
  })
  
  $('header #user-profile').click((e) => {
    e.cancelBubble = true
    e.stopPropagation()
    
    $('.wrapper > .content').scrollLock(true)
    
    $('.wrapper > .content').css({
      '-moz-box-shadow': '4px 0px 6px rgba(0, 0, 0, 0.4)',
      '-webkit-box-shadow': '4px 0px 6px rgba(0, 0, 0, 0.4)',
      'box-shadow': '4px 0px 6px rgba(0, 0, 0, 0.4)',
      'transform': 'translateX(-260px)'
    })

    $('.wrapper > .control').css({
      'transform': 'translateX(0)',
      'transition': '0.3s ease-out'
    })
  })

  $('.control #close').click((e) => {
    e.cancelBubble = true
    e.stopPropagation()

    $('.wrapper > .content').scrollLock(false)

    $('.wrapper > .content').css({
      '-moz-box-shadow': 'none',
      '-webkit-box-shadow': 'none',
      'box-shadow': 'none',
      'transform': 'translateX(0)'
    })

    $('.wrapper > .control').css({
      'transform': 'translateX(260px)',
      'transition': '0.8s ease-out'
    })
  })
})()