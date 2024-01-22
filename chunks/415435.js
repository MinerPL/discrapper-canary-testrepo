"use strict";
n.r(t), n.d(t, {
  filterOutMessageRequestsAndSpam: function() {
    return r
  },
  filterOutMessageRequestsAndSpamById: function() {
    return a
  },
  isMessageRequestOrSpamRequest: function() {
    return o
  },
  shouldShowMessageRequests: function() {
    return l
  }
}), n("222007"), n("808653");
var i = n("288518"),
  s = n("486503");

function r(e) {
  let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, s.default], r = function(e) {
    return Object.keys(e).map(t => [t, e[t]])
  }(e), a = r.filter(e => {
    let [, i] = e;
    return !t.isMessageRequest(i.id) && !n.isSpam(i.id)
  });
  return function(e) {
    return Array.from(e).reduce((e, t) => {
      let [n, i] = t;
      return Object.assign(e, {
        [n]: i
      })
    }, {})
  }(a)
}

function a(e) {
  let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, s.default];
  return e.filter(e => !t.isMessageRequest(e) && !n.isSpam(e))
}

function o(e) {
  let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, s.default];
  return t.isMessageRequest(e) || n.isSpam(e)
}

function l() {
  let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.default, s.default], n = t.getSpamChannelsCount(), r = e.getMessageRequestsCount();
  return r > 0 || n > 0
}