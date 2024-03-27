"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  },
  useMessageMenu: function() {
    return w
  }
});
var a = n("37983");
n("884691");
var i = n("118810"),
  l = n("77078"),
  s = n("272030"),
  u = n("798609"),
  r = n("861370"),
  d = n("152298"),
  o = n("447651"),
  c = n("26051"),
  f = n("667358"),
  E = n("22582"),
  m = n("563816"),
  M = n("761136"),
  g = n("126423"),
  p = n("175537"),
  S = n("485598"),
  I = n("518155"),
  v = n("355669"),
  h = n("718381"),
  A = n("442711"),
  _ = n("702495"),
  T = n("875834"),
  C = n("780657"),
  R = n("204462"),
  O = n("487051"),
  x = n("815384"),
  y = n("263879"),
  N = n("604179"),
  b = n("167670"),
  j = n("913274"),
  G = n("514705"),
  D = n("321456"),
  P = n("470254"),
  F = n("678803"),
  L = n("782340");

function U(e) {
  var t, n;
  let a, l, u, r, {
      channel: d,
      message: o,
      target: c,
      attachment: f,
      shouldHideMediaOptions: E,
      onSelect: m,
      onHeightUpdate: M
    } = e,
    g = c,
    p = c.getAttribute("data-type"),
    S = c.getAttribute("data-id"),
    I = c.getAttribute("data-name");
  if (null != f) l = a = u = f.url;
  else
    for (;
      (0, i.isElement)(g);)(0, i.isElement)(g, HTMLImageElement) && null != g.src && (l = g.src), (0, i.isElement)(g, HTMLAnchorElement) && null != g.href && (a = g.href, r = g.textContent, null == l && "img" === g.getAttribute("data-role") && (l = a, g.hasAttribute("data-safe-src") && "" !== g.getAttribute("data-safe-src") && (u = g.getAttribute("data-safe-src")))), g = g.parentNode;
  let v = null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "";
  return w({
    message: o,
    channel: d,
    attachment: f,
    textSelection: v,
    favoriteableType: p,
    favoriteableId: S,
    favoriteableName: I,
    itemHref: a,
    itemSrc: l,
    itemSafeSrc: u,
    itemTextContent: r,
    canReport: !0,
    onHeightUpdate: M,
    onSelect: m,
    onClose: s.closeContextMenu,
    navId: "message",
    ariaLabel: L.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    shouldHideMediaOptions: E
  })
}

function w(e) {
  let {
    message: t,
    channel: n,
    attachment: i,
    textSelection: s,
    favoriteableType: U,
    favoriteableId: w,
    favoriteableName: k,
    itemHref: V,
    itemSrc: K,
    itemSafeSrc: H,
    itemTextContent: Y,
    canReport: B,
    onHeightUpdate: X,
    onSelect: Z,
    onClose: z,
    navId: W,
    ariaLabel: J,
    shouldHideMediaOptions: q = !1
  } = e, $ = (0, d.default)(s), Q = (0, f.default)(s), ee = (0, R.default)(t, n), et = (0, p.default)(t, n), en = (0, A.default)(t, n), ea = (0, C.default)(t, n), ei = (0, _.default)({
    type: U,
    id: w,
    name: k
  }), el = (0, G.default)(t, n), es = (0, T.default)(t, n), eu = (0, O.default)(t), er = (0, S.default)(t, n), ed = (0, I.default)(t, n), eo = (0, y.default)(t, n), ec = (0, N.default)(t, n), ef = (0, h.default)(t, n), eE = (0, j.default)(t), em = (0, D.default)(t, n), eM = (0, c.default)(null != V ? V : K, Y, t, {
    shouldHideMediaOptions: q
  }), eg = (0, o.default)(H, t, {
    shouldHideMediaOptions: q
  }), ep = (0, F.default)(t, i), eS = (0, r.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), eI = (0, b.default)(t, n), ev = (0, P.default)(t, n), eh = (0, g.default)(t, n, {
    hoist: !0
  }), eA = (0, M.default)(s, n.getGuildId()), e_ = (0, x.default)(t), eT = (0, v.default)(t), eC = (0, m.default)({
    commandType: u.ApplicationCommandType.MESSAGE,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: X
  }), eR = (0, E.default)(t, n);
  return (0, a.jsxs)(l.Menu, {
    navId: W,
    onClose: z,
    "aria-label": J,
    onSelect: Z,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: $
    }), (0, a.jsx)(l.MenuGroup, {
      children: Q
    }), (0, a.jsxs)(l.MenuGroup, {
      children: ["" === s ? ee : null, et, eu, en, ea, ei, eI, ev, eT, eC, el, es, e_, er, ed, em, eh, eR, ec, eo, ef, B && eE]
    }), null != eA && (0, a.jsx)(l.MenuGroup, {
      children: eA
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [eg, ep]
    }), (0, a.jsx)(l.MenuGroup, {
      children: eM
    }), (0, a.jsx)(l.MenuGroup, {
      children: eS
    })]
  })
}