"use strict";
n.d(t, {
  Z: function() {
    return r
  },
  s: function() {
    return s
  }
});
var i = n(981631);

function r(e) {
  var t;
  return (null === (t = e.messageReference) || void 0 === t ? void 0 : t.type) === i.Uvt.FORWARD
}

function s(e) {
  var t;
  return (null === (t = e.message_reference) || void 0 === t ? void 0 : t.type) === i.Uvt.FORWARD
}