# HapticJS

(Haptic feedback npm module for macOS touchpads)

### Description
HapticJS was developed in order to provide haptic (vibration) feedback to users when certain events happen. These events are set by the developer of the app, but for example, I enabled haptic feedback in my [HAAT](https://github.com/hanayik/HAAT) application when users "bump" into the falling shapes or words.

This npm module was designed to work with any macOS electron app so long as you ``` require ``` it before using.  

### To use

``` npm install --save hapticjs ```

``` var hapticjs = require('hapticjs') ```

``` hapticjs.vibrate() ```

The vibration will occur instantly. If haptic feedback isn't supported on your system then the module will simply just not vibrate when called. It will not stop the rest of your code execution. 

### License
[MIT](https://github.com/hanayik/HapticJS/blob/master/LICENSE)

### Developers
This npm module is currently only developed for MacOS

##### To clone repo:

``` cd /to/your/desired/install/location ```

``` git clone https://github.com/hanayik/HapticJS.git ```
