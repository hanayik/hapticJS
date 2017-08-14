var exec = require('child_process').exec
var path = require('path')
var cmd = path.join(__dirname, 'hapticJS', 'DerivedData', 'hapticJS', 'Build', 'Products', 'Release', 'hapticJS')

exports.vibrate = function() {
  if (os.platform().includes('darwin')) {
    console.log('vibrating now...')
    exec(cmd, function(error, stdout, stderr) {
      // command output is in stdout
    })
  }

}
