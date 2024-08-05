n.d(t, {
  cE: function() {
return o;
  },
  eu: function() {
return c;
  },
  fU: function() {
return u;
  }
});
var i = n(652874),
  s = n(731965),
  a = n(902704);
let r = {},
  l = (0, i.Z)(e => ({
polls: {},
updatePollState(t, n, i) {
  (0, s.j)(() => {
    e(e => {
      var s;
      return {
        polls: {
          ...e.polls,
          [t]: {
            ...e.polls[t],
            [n]: i(null === (s = e.polls[t]) || void 0 === s ? void 0 : s[n])
          }
        }
      };
    });
  });
}
  }));

function o(e) {
  return l(t => {
var n;
return null !== (n = t.polls[e]) && void 0 !== n ? n : r;
  }, a.Z);
}

function c(e, t, n) {
  l.getState().updatePollState(e, t, n);
}

function u(e, t) {
  var n;
  return null === (n = l.getState().polls[e]) || void 0 === n ? void 0 : n[t];
}