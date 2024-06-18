"use strict";
n.d(t, {
  ZP: function() {
    return r
  },
  _$: function() {
    return s
  },
  d7: function() {
    return o
  }
}), n(47120);
var i = n(149765);

function r(e) {
  for (let {
      permissionOverwrites_: t
    }
    of e)
    if (null != t)
      for (let e in t) {
        let n = t[e];
        n.allow = i.vB(n.allow), n.deny = i.vB(n.deny)
      }
}

function s(e) {
  for (let [t, n] of e) r(n)
}

function o(e) {
  let {
    permissionOverwrites_: t
  } = e;
  if (null != t)
    for (let e in t) {
      let n = t[e];
      n.allow = i.vB(n.allow), n.deny = i.vB(n.deny)
    }
  return e
}