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
    })
  })

  $(document).ready(function () {
    $('#button_even').click(function () {
      $('.odd').hide()
      $('.even').show()
    })
  })

  $(document).ready(function () {
    $('#button_all').click(function () {
      $('.flex-item').show()
    })
  })


})
