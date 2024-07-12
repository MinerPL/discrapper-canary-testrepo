t.r(n), t.d(n, {
  default: function() {
return k;
  },
  useMessageMenu: function() {
return F;
  }
});
var i = t(735250);
t(470079);
var a = t(374470),
  r = t(481060),
  l = t(239091),
  o = t(911969),
  s = t(299206),
  u = t(26737),
  c = t(29264),
  d = t(905041),
  E = t(89013),
  M = t(988500),
  I = t(570870),
  m = t(786095),
  _ = t(667922),
  g = t(235624),
  f = t(941389),
  Z = t(449751),
  S = t(749339),
  v = t(601184),
  A = t(6148),
  O = t(519110),
  T = t(759875),
  R = t(168405),
  N = t(536639),
  h = t(720904),
  p = t(88791),
  x = t(235047),
  b = t(385302),
  j = t(873699),
  C = t(134323),
  P = t(429260),
  L = t(1626),
  D = t(279329),
  G = t(627938),
  U = t(512303),
  y = t(481300),
  w = t(689938);

function k(e) {
  var n, t;
  let i, r, o, s, {
  channel: u,
  message: c,
  target: d,
  mediaItem: E,
  shouldHideMediaOptions: M,
  onSelect: I,
  onHeightUpdate: m
} = e,
_ = d,
g = d.getAttribute('data-type'),
f = d.getAttribute('data-id'),
Z = d.getAttribute('data-name');
  if (null != E)
r = i = o = E.url;
  else
for (;
  (0, a.k)(_);)
  (0, a.k)(_, HTMLImageElement) && null != _.src && (r = _.src), (0, a.k)(_, HTMLAnchorElement) && null != _.href && (i = _.href, s = _.textContent, null == r && 'img' === _.getAttribute('data-role') && (r = i, _.hasAttribute('data-safe-src') && '' !== _.getAttribute('data-safe-src') && (o = _.getAttribute('data-safe-src')))), _ = _.parentNode;
  return F({
message: c,
channel: u,
mediaItem: E,
textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : '',
favoriteableType: g,
favoriteableId: f,
favoriteableName: Z,
itemHref: i,
itemSrc: r,
itemSafeSrc: o,
itemTextContent: s,
canReport: !0,
onHeightUpdate: m,
onSelect: I,
onClose: l.Zy,
navId: 'message',
ariaLabel: w.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
shouldHideMediaOptions: M
  });
}

function F(e) {
  let {
message: n,
channel: t,
mediaItem: a,
textSelection: l,
favoriteableType: k,
favoriteableId: F,
favoriteableName: K,
itemHref: V,
itemSrc: H,
itemSafeSrc: z,
itemTextContent: X,
canReport: B,
onHeightUpdate: Y,
onSelect: W,
onClose: q,
navId: J,
ariaLabel: $,
shouldHideMediaOptions: Q = !1
  } = e, ee = (0, u.Z)(l), en = (0, E.Z)(l), et = (0, h.Z)(n, t), ei = (0, _.Z)(n, t), ea = (0, A.Z)(n, t), er = (0, N.Z)(n, t), el = (0, O.Z)({
type: k,
id: F,
name: K
  }), eo = (0, L.Z)(n, t), es = (0, R.Z)(n, t), eu = (0, p.Z)(n), ec = (0, f.Z)(n, t), ed = (0, Z.Z)(n, t), eE = (0, b.Z)(n, t), eM = (0, j.Z)(n, t), eI = (0, v.Z)(n, t), em = (0, P.Z)(n), e_ = (0, D.Z)(n, t), eg = (0, d.Z)(null != V ? V : H, X, n, {
shouldHideMediaOptions: Q
  }), ef = (0, c.Z)(z, n, {
shouldHideMediaOptions: Q
  }), eZ = (0, y.Z)(n, a), eS = (0, s.Z)({
id: n.id,
label: w.Z.Messages.COPY_ID_MESSAGE,
shiftId: ''.concat(n.channel_id, '-').concat(n.id)
  }), ev = (0, C.Z)(n, t), eA = (0, T.Z)(n, t), eO = (0, G.Z)(n, t), eT = (0, m.Z)(l, t.getGuildId()), eR = (0, x.Z)(n), eN = (0, g.Z)(n), eh = (0, S.Z)(n), ep = (0, I.Z)({
commandType: o.yU.MESSAGE,
commandTargetId: n.id,
channel: t,
guildId: void 0,
onHeightUpdate: Y
  }), ex = (0, U.Z)(n), eb = (0, M.Z)(n);
  return (0, i.jsxs)(r.Menu, {
navId: J,
onClose: q,
'aria-label': $,
onSelect: W,
children: [
  (0, i.jsx)(r.MenuGroup, {
    children: ee
  }),
  (0, i.jsx)(r.MenuGroup, {
    children: en
  }),
  (0, i.jsxs)(r.MenuGroup, {
    children: [
      '' === l ? et : null,
      ei,
      eu,
      ea,
      er,
      el,
      ev,
      eA,
      eO,
      eh,
      ep,
      eo,
      es,
      eN,
      eR,
      ec,
      ed,
      e_,
      eb,
      eM,
      eE,
      ex,
      eI,
      B && em
    ]
  }),
  null != eT && (0, i.jsx)(r.MenuGroup, {
    children: eT
  }),
  (0, i.jsxs)(r.MenuGroup, {
    children: [
      ef,
      eZ
    ]
  }),
  (0, i.jsx)(r.MenuGroup, {
    children: eg
  }),
  (0, i.jsx)(r.MenuGroup, {
    children: eS
  })
]
  });
}