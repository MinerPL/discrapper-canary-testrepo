n.d(t, {
  Dv: function() {
return l;
  },
  G2: function() {
return f;
  },
  IG: function() {
return _;
  },
  NG: function() {
return c;
  },
  OV: function() {
return u;
  },
  fW: function() {
return h;
  },
  lB: function() {
return E;
  },
  mA: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(377171),
  s = n(121827);
let l = {
  ROUND: s.baseShapeRound,
  ROUND_LEFT: s.baseShapeRoundLeft,
  ROUND_RIGHT: s.baseShapeRoundRight,
  SQUARE: ''
};

function u(e) {
  return e < 10 ? 16 : e < 100 ? 22 : 30;
}

function c(e) {
  return e < 1000 ? ''.concat(e) : ''.concat(Math.min(Math.floor(e / 1000), 9), 'k+');
}
let d = e => {
let {
  count: t,
  color: n = o.Z.STATUS_DANGER,
  disableColor: i = !1,
  shape: d = l.ROUND,
  className: _,
  style: E,
  ...f
} = e;
return (0, r.jsx)('div', {
  className: a()(_, s.numberBadge, d),
  style: {
    backgroundColor: i ? void 0 : n,
    width: u(t),
    paddingRight: function(e) {
      switch (e) {
        case 1:
        case 4:
        case 6:
          return 1;
        default:
          return;
      }
    }(t),
    ...E
  },
  ...f,
  children: c(t)
});
  },
  _ = e => {
let {
  text: t,
  className: n,
  color: i = o.Z.STATUS_DANGER,
  shape: u = l.ROUND,
  disableColor: c = !1,
  style: d,
  ..._
} = e;
return (0, r.jsx)('div', {
  className: a()(n, s.textBadge, u),
  style: {
    backgroundColor: c ? void 0 : i,
    ...d
  },
  ..._,
  children: t
});
  },
  E = e => {
let {
  text: t,
  className: n,
  ...i
} = e;
return (0, r.jsx)(_, {
  className: a()(s.premiumBadge, n),
  text: t,
  ...i
});
  },
  f = e => {
let {
  icon: t,
  className: n,
  color: i = o.Z.STATUS_DANGER,
  shape: u = l.ROUND,
  disableColor: c = !1,
  style: d
} = e;
return (0, r.jsx)('div', {
  className: a()(n, s.iconBadge, u),
  style: {
    backgroundColor: c ? void 0 : i,
    ...d
  },
  children: (0, r.jsx)(t, {
    className: s.icon,
    color: 'currentColor'
  })
});
  },
  h = e => {
let {
  className: t,
  color: n = o.Z.INTERACTIVE_ACTIVE,
  shape: i = l.ROUND,
  disableColor: u = !1,
  style: c,
  ...d
} = e;
return (0, r.jsx)('div', {
  className: a()(t, s.circleBadge, i),
  style: {
    backgroundColor: u ? void 0 : n,
    ...c
  },
  ...d
});
  };