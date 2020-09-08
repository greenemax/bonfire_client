'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $(document).ready(function () {
    $('#button_odd').click(function () {
      $('.even').hide()
      $('.odd').show()
      $('#button_odd').css('background', '#fdecca')
      $('#button_odd').css('color', '#696579')
      $('#button_even').css('background', '#696579')
      $('#button_even').css('color', '#fdecca')
    })
  })

  $(document).ready(function () {
    $('#button_even').click(function () {
      $('.odd').hide()
      $('.even').show()
      $('#button_even').css('background', '#fdecca')
      $('#button_even').css('color', '#696579')
      $('#button_odd').css('color', '#fdecca')
      $('#button_odd').css('background', '#696579')
      $('#button_all').css('color', '#fdecca')
      $('#button_all').css('background', '#696579')
    })
  })

  $(document).ready(function () {
    $('#button_all').click(function () {
      $('#button_all').css('background', '#fdecca')
      $('#button_all').css('color', '#696579')
      $('#button_odd').css('color', '#fdecca')
      $('#button_odd').css('background', '#696579')
      $('#button_even').css('color', '#fdecca')
      $('#button_even').css('background', '#696579')
    })
  })

  $(document).ready(function () {
    $('#button_all').click(function () {
      $('.flex-item').show()
    })
  })
})
