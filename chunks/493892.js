"use strict";
n.d(t, {
  DQ: function() {
    return a
  },
  He: function() {
    return o
  },
  P1: function() {
    return s
  }
});
var i = n(594174),
  r = n(981631);

function s(e) {
  return void 0 !== e && e.type !== r.d4z.DM
}

function o(e) {
  var t, n;
  return null !== (n = null === (t = i.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(r.xW$.SPAMMER)) && void 0 !== n && n
}

function a(e) {
  return o(e.author.id)
}