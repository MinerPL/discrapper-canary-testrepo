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
  a = n(731965),
  s = n(902704);
let r = {},
  l = (0, i.Z)(e => ({
polls: {},
updatePollState(t, n, i) {
  (0, a.j)(() => {
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
  });
}
  }));

function o(e) {
  return l(t => {
var n;
return null !== (n = t.polls[e]) && void 0 !== n ? n : r;
  }, s.Z);
}

function c(e, t, n) {
  l.getState().updatePollState(e, t, n);
}

function u(e, t) {
  var n;
  return null === (n = l.getState().polls[e]) || void 0 === n ? void 0 : n[t];
}