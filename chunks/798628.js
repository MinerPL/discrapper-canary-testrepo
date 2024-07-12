n.d(t, {
  cE: function() {
return l;
  },
  eu: function() {
return o;
  },
  fU: function() {
return c;
  }
});
var i = n(652874),
  a = n(902704);
let s = {},
  r = (0, i.Z)(e => ({
polls: {},
updatePollState(t, n, i) {
  e(e => {
    var a;
    return {
      polls: {
        ...e.polls,
        [t]: {
          ...e.polls[t],
          [n]: i(null === (a = e.polls[t]) || void 0 === a ? void 0 : a[n])
        }
      }
    };
  });
}
  }));

function l(e) {
  return r(t => {
var n;
return null !== (n = t.polls[e]) && void 0 !== n ? n : s;
  }, a.Z);
}

function o(e, t, n) {
  r.getState().updatePollState(e, t, n);
}

function c(e, t) {
  var n;
  return null === (n = r.getState().polls[e]) || void 0 === n ? void 0 : n[t];
}