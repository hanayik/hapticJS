var exec = require('child_process').exec
var path = require('path')
var platform = require('platform')
var cmd = path.join(__dirname, 'hapticJS', 'DerivedData', 'hapticJS', 'Build', 'Products', 'Release', 'hapticJS')
var os = platform.os

exports.vibrate = function() {
  if (os.includes('Mac')) {
    console.log('vibrating now...')
    exec(cmd, function(error, stdout, stderr) {
      // command output is in stdout
    })
  }

}
