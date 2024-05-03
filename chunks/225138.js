"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  },
  useMessageMenu: function() {
    return w
  }
});
var a = n("735250");
n("470079");
var i = n("374470"),
  l = n("481060"),
  s = n("239091"),
  u = n("911969"),
  r = n("299206"),
  o = n("26737"),
  d = n("29264"),
  c = n("905041"),
  f = n("89013"),
  E = n("988500"),
  M = n("570870"),
  m = n("786095"),
  g = n("36829"),
  S = n("667922"),
  p = n("941389"),
  v = n("449751"),
  I = n("749339"),
  h = n("601184"),
  A = n("6148"),
  _ = n("519110"),
  T = n("168405"),
  C = n("536639"),
  R = n("720904"),
  y = n("88791"),
  O = n("235047"),
  x = n("385302"),
  N = n("873699"),
  j = n("134323"),
  b = n("429260"),
  G = n("1626"),
  P = n("279329"),
  D = n("627938"),
  L = n("481300"),
  F = n("689938");

function U(e) {
  var t, n;
  let a, l, u, r, {
      channel: o,
      message: d,
      target: c,
      mediaItem: f,
      shouldHideMediaOptions: E,
      onSelect: M,
      onHeightUpdate: m
    } = e,
    g = c,
    S = c.getAttribute("data-type"),
    p = c.getAttribute("data-id"),
    v = c.getAttribute("data-name");
  if (null != f) l = a = u = f.url;
  else
    for (;
      (0, i.isElement)(g);)(0, i.isElement)(g, HTMLImageElement) && null != g.src && (l = g.src), (0, i.isElement)(g, HTMLAnchorElement) && null != g.href && (a = g.href, r = g.textContent, null == l && "img" === g.getAttribute("data-role") && (l = a, g.hasAttribute("data-safe-src") && "" !== g.getAttribute("data-safe-src") && (u = g.getAttribute("data-safe-src")))), g = g.parentNode;
  return w({
    message: d,
    channel: o,
    mediaItem: f,
    textSelection: null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "",
    favoriteableType: S,
    favoriteableId: p,
    favoriteableName: v,
    itemHref: a,
    itemSrc: l,
    itemSafeSrc: u,
    itemTextContent: r,
    canReport: !0,
    onHeightUpdate: m,
    onSelect: M,
    onClose: s.closeContextMenu,
    navId: "message",
    ariaLabel: F.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    shouldHideMediaOptions: E
  })
}

function w(e) {
  let {
    message: t,
    channel: n,
    mediaItem: i,
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
    navId: J,
    ariaLabel: W,
    shouldHideMediaOptions: q = !1
  } = e, $ = (0, o.default)(s), Q = (0, f.default)(s), ee = (0, R.default)(t, n), et = (0, S.default)(t, n), en = (0, A.default)(t, n), ea = (0, C.default)(t, n), ei = (0, _.default)({
    type: U,
    id: w,
    name: k
  }), el = (0, G.default)(t, n), es = (0, T.default)(t, n), eu = (0, y.default)(t), er = (0, p.default)(t, n), eo = (0, v.default)(t, n), ed = (0, x.default)(t, n), ec = (0, N.default)(t, n), ef = (0, h.default)(t, n), eE = (0, b.default)(t), eM = (0, P.default)(t, n), em = (0, c.default)(null != V ? V : K, Y, t, {
    shouldHideMediaOptions: q
  }), eg = (0, d.default)(H, t, {
    shouldHideMediaOptions: q
  }), eS = (0, L.default)(t, i), ep = (0, r.default)({
    id: t.id,
    label: F.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), ev = (0, j.default)(t, n), eI = (0, D.default)(t, n), eh = (0, g.default)(t, n, {
    hoist: !0
  }), eA = (0, m.default)(s, n.getGuildId()), e_ = (0, O.default)(t), eT = (0, I.default)(t), eC = (0, M.default)({
    commandType: u.ApplicationCommandType.MESSAGE,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: X
  }), eR = (0, E.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: J,
    onClose: z,
    "aria-label": W,
    onSelect: Z,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: $
    }), (0, a.jsx)(l.MenuGroup, {
      children: Q
    }), (0, a.jsxs)(l.MenuGroup, {
      children: ["" === s ? ee : null, et, eu, en, ea, ei, ev, eI, eT, eC, el, es, e_, er, eo, eM, eh, eR, ec, ed, ef, B && eE]
    }), null != eA && (0, a.jsx)(l.MenuGroup, {
      children: eA
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [eg, eS]
    }), (0, a.jsx)(l.MenuGroup, {
      children: em
    }), (0, a.jsx)(l.MenuGroup, {
      children: ep
    })]
  })
}