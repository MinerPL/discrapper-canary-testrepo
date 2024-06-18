"use strict";
n.d(t, {
  Z: function() {
    return i
  }
});
class i {
  acquire(e) {
    return navigator.mediaDevices.getUserMedia(e)
  }
  release(e) {
    e.getTracks().forEach(e => {
      e.onended = function() {}, e.stop()
    })
  }
}