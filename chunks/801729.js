"use strict";
n.d(t, {
  Dv: function() {
    return l
  },
  G2: function() {
    return I
  },
  IG: function() {
    return c
  },
  NG: function() {
    return _
  },
  OV: function() {
    return u
  },
  fW: function() {
    return T
  },
  lB: function() {
    return E
  },
  mA: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(377171),
  a = n(254474);
let l = {
  ROUND: a.baseShapeRound,
  ROUND_LEFT: a.baseShapeRoundLeft,
  ROUND_RIGHT: a.baseShapeRoundRight,
  SQUARE: ""
};

function u(e) {
  return e < 10 ? 16 : e < 100 ? 22 : 30
}

function _(e) {
  return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
}
let d = e => {
    let {
      count: t,
      color: n = o.Z.STATUS_DANGER,
      disableColor: r = !1,
      shape: d = l.ROUND,
      className: c,
      style: E,
      ...I
    } = e;
    return (0, i.jsx)("div", {
      className: s()(c, a.numberBadge, d),
      style: {
        backgroundColor: r ? void 0 : n,
        width: u(t),
        paddingRight: function(e) {
          switch (e) {
            case 1:
            case 4:
            case 6:
              return 1;
            default:
              return
          }
        }(t),
        ...E
      },
      ...I,
      children: _(t)
    })
  },
  c = e => {
    let {
      text: t,
      className: n,
      color: r = o.Z.STATUS_DANGER,
      shape: u = l.ROUND,
      disableColor: _ = !1,
      style: d,
      ...c
    } = e;
    return (0, i.jsx)("div", {
      className: s()(n, a.textBadge, u),
      style: {
        backgroundColor: _ ? void 0 : r,
        ...d
      },
      ...c,
      children: t
    })
  },
  E = e => {
    let {
      text: t,
      className: n,
      ...r
    } = e;
    return (0, i.jsx)(c, {
      className: s()(a.premiumBadge, n),
      text: t,
      ...r
    })
  },
  I = e => {
    let {
      icon: t,
      className: n,
      color: r = o.Z.STATUS_DANGER,
      shape: u = l.ROUND,
      disableColor: _ = !1,
      style: d
    } = e;
    return (0, i.jsx)("div", {
      className: s()(n, a.iconBadge, u),
      style: {
        backgroundColor: _ ? void 0 : r,
        ...d
      },
      children: (0, i.jsx)(t, {
        className: a.icon
      })
    })
  },
  T = e => {
    let {
      className: t,
      color: n = o.Z.INTERACTIVE_ACTIVE,
      shape: r = l.ROUND,
      disableColor: u = !1,
      style: _,
      ...d
    } = e;
    return (0, i.jsx)("div", {
      className: s()(t, a.circleBadge, r),
      style: {
        backgroundColor: u ? void 0 : n,
        ..._
      },
      ...d
    })
  }