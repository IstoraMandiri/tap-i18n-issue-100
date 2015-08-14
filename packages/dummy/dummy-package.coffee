
Template.dummyPackageTemplate.events
  'click .test-button' : ->
    console.log 'expecting -> THIS IS A TEST'
    console.log "TAPi18n.__('test') -> ", TAPi18n.__ 'test'
    console.log "TAPi18n.__('test', {}, 'en') -> ", TAPi18n.__ 'test', {}, 'en'