"use strict";
n.r(t), n.d(t, {
  getPollState: function() {
    return u
  },
  updatePollState: function() {
    return o
  },
  useChannelPollInteractions: function() {
    return r
  }
});
var s = n("652874"),
  a = n("902704");
let l = {},
  i = (0, s.default)(e => ({
    polls: {},
    updatePollState(t, n, s) {
      e(e => {
        var a;
        return {
          polls: {
            ...e.polls,
            [t]: {
              ...e.polls[t],
              [n]: s(null === (a = e.polls[t]) || void 0 === a ? void 0 : a[n])
            }
          }
        }
      })
    }
  }));

function r(e) {
  return i(t => {
    var n;
    return null !== (n = t.polls[e]) && void 0 !== n ? n : l
  }, a.default)
}

function o(e, t, n) {
  i.getState().updatePollState(e, t, n)
}

function u(e, t) {
  var n;
  return null === (n = i.getState().polls[e]) || void 0 === n ? void 0 : n[t]
}