"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("392711"),
  l = n.n(o),
  u = n("481060"),
  d = n("110577"),
  _ = n("997945"),
  c = n("630117"),
  E = n("441319"),
  I = n("981631"),
  T = n("689938"),
  f = n("761064");
let S = () => [T.default.Messages.APP_ICON_PIRATE, T.default.Messages.APP_ICON_PIRATE_1, T.default.Messages.APP_ICON_PIRATE_2, T.default.Messages.APP_ICON_PIRATE_3, T.default.Messages.APP_ICON_PIRATE_4],
  h = () => {
    var e;
    return null !== (e = l().sample(S())) && void 0 !== e ? e : T.default.Messages.APP_ICON_PIRATE
  };

function A(e) {
  let {
    id: t,
    className: n,
    onSelect: a,
    isSelected: o = !1,
    tabIndex: l,
    children: c,
    isNew: T = !1
  } = e, [S, A] = r.useState(E.ICONS_BY_ID[t].name), m = t === _.PremiumAppIconIds.PIRATE, N = (0, u.useRadioItem)({
    label: S,
    isSelected: o
  });
  return (0, i.jsx)(u.Tooltip, {
    text: S,
    onTooltipShow: () => m && A(h()),
    children: e => (0, i.jsxs)("div", {
      className: f.appIconSelectionContainer,
      children: [!o && T && (0, i.jsx)("div", {
        className: f.newBadgeCircle
      }), (0, i.jsx)(u.Clickable, {
        ...e,
        ...N,
        tabIndex: null != l ? l : N.tabIndex,
        className: s()(f.appIconSelection, {
          [f.selected]: o
        }, n),
        onClick: o ? I.NOOP : () => null == a ? void 0 : a(t),
        children: c
      }), o && (0, i.jsx)(d.SelectionCircle, {})]
    })
  })
}

function m(e) {
  let {
    icon: t,
    isSelected: n,
    disabled: r,
    tabIndex: a,
    onSelect: s,
    isNew: o
  } = e;
  return (0, i.jsx)(A, {
    onSelect: r ? void 0 : s,
    isSelected: n,
    id: t.id,
    className: r ? f.disabled : void 0,
    tabIndex: a,
    isNew: o,
    children: (0, i.jsx)(c.default, {
      id: t.id,
      width: E.CUSTOM_BASE_SIZE
    })
  })
}