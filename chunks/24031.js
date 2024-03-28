"use strict";
e.r(n), e.d(n, {
  openMFAModal: function() {
    return p
  }
}), e("51350");
var o = e("658550"),
  i = e("48550");

function p(t, n, p) {
  t.methods = t.methods.filter(t => Object.hasOwn(i.SELECT_NAMES, t.type)), e("124860").openMFAModal(t, t => (0, o.trySubmit)(t, n), p)
}