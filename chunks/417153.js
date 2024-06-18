"use strict";
n.d(t, {
  CF: function() {
    return r
  },
  Es: function() {
    return i
  },
  z5: function() {
    return s
  }
}), n(47120);
let i = (0, n(652874).Z)(() => ({
  currentToast: null,
  queuedToasts: []
}));

function r(e) {
  i.setState(t => null != t.currentToast ? {
    ...t,
    queuedToasts: [...t.queuedToasts, e]
  } : {
    currentToast: e,
    queuedToasts: []
  })
}

function s() {
  i.setState(e => {
    let t = e.queuedToasts;
    return t.length > 0 ? {
      currentToast: t[0],
      queuedToasts: t.slice(1)
    } : {
      currentToast: null,
      queuedToasts: []
    }
  })
}