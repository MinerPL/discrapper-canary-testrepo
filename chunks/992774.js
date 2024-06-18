"use strict";
let i, r;

function s() {
  if (null == i) throw Error("Native dependencies have not been injected.")
}

function o(e) {
  i = e
}

function a() {
  return s(), i.supported()
}

function l(e) {
  return s(), i.supportsFeature(e)
}

function u(e) {
  s(), i.setProcessPriority(e)
}

function _() {
  return s(), null != r ? r : r = i.getVoiceEngine()
}
n.d(t, {
  Zh: function() {
    return a
  },
  eJ: function() {
    return l
  },
  f3: function() {
    return o
  },
  p8: function() {
    return u
  },
  zS: function() {
    return _
  }
}), n(411104)