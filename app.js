var exec = require('child_process').exec
var path = require('path')
var cmd = path.join(__dirname, 'hapticJS', 'DerivedData', 'hapticJS', 'Build', 'Products', 'Debug', 'hapticJS')


exports.vibrate = function() {
  console.log('vibrating now...')
  exec(cmd, function(error, stdout, stderr) {
    // command output is in stdout
  })
}
