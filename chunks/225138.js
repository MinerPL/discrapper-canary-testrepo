t.r(n), t.d(n, {
  default: function() {
return w;
  },
  useMessageMenu: function() {
return F;
  }
});
var i = t(735250);
t(470079);
var a = t(374470),
  l = t(481060),
  r = t(239091),
  o = t(911969),
  s = t(299206),
  u = t(26737),
  d = t(29264),
  c = t(905041),
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
  T = t(519110),
  O = t(759875),
  R = t(168405),
  h = t(536639),
  N = t(720904),
  p = t(88791),
  x = t(235047),
  C = t(385302),
  b = t(873699),
  j = t(134323),
  P = t(429260),
  L = t(1626),
  D = t(279329),
  G = t(627938),
  U = t(512303),
  y = t(481300),
  k = t(689938);

function w(e) {
  var n, t;
  let i, l, o, s, {
  channel: u,
  message: d,
  target: c,
  mediaItem: E,
  shouldHideMediaOptions: M,
  onSelect: I,
  onHeightUpdate: m
} = e,
_ = c,
g = c.getAttribute('data-type'),
f = c.getAttribute('data-id'),
Z = c.getAttribute('data-name');
  if (null != E)
l = i = o = E.url;
  else
for (;
  (0, a.k)(_);)
  (0, a.k)(_, HTMLImageElement) && null != _.src && (l = _.src), (0, a.k)(_, HTMLAnchorElement) && null != _.href && (i = _.href, s = _.textContent, null == l && 'img' === _.getAttribute('data-role') && (l = i, _.hasAttribute('data-safe-src') && '' !== _.getAttribute('data-safe-src') && (o = _.getAttribute('data-safe-src')))), _ = _.parentNode;
  return F({
message: d,
channel: u,
mediaItem: E,
textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : '',
favoriteableType: g,
favoriteableId: f,
favoriteableName: Z,
itemHref: i,
itemSrc: l,
itemSafeSrc: o,
itemTextContent: s,
canReport: !0,
onHeightUpdate: m,
onSelect: I,
onClose: r.Zy,
navId: 'message',
ariaLabel: k.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
shouldHideMediaOptions: M
  });
}

function F(e) {
  let {
message: n,
channel: t,
mediaItem: a,
textSelection: r,
favoriteableType: w,
favoriteableId: F,
favoriteableName: K,
itemHref: V,
itemSrc: H,
itemSafeSrc: X,
itemTextContent: z,
canReport: B,
onHeightUpdate: Y,
onSelect: W,
onClose: q,
navId: J,
ariaLabel: $,
shouldHideMediaOptions: Q = !1
  } = e, ee = (0, u.Z)(r), en = (0, E.Z)(r), et = (0, N.Z)(n, t), ei = (0, _.Z)(n, t), ea = (0, A.Z)(n, t), el = (0, h.Z)(n, t), er = (0, T.Z)({
type: w,
id: F,
name: K
  }), eo = (0, L.Z)(n, t), es = (0, R.Z)(n, t), eu = (0, p.Z)(n), ed = (0, f.Z)(n, t), ec = (0, Z.Z)(n, t), eE = (0, C.Z)(n, t), eM = (0, b.Z)(n, t), eI = (0, v.Z)(n, t), em = (0, P.Z)(n), e_ = (0, D.Z)(n, t), eg = (0, c.Z)(null != V ? V : H, z, n, {
shouldHideMediaOptions: Q
  }), ef = (0, d.Z)(X, n, {
shouldHideMediaOptions: Q
  }), eZ = (0, y.Z)(n, a), eS = (0, s.Z)({
id: n.id,
label: k.Z.Messages.COPY_ID_MESSAGE,
shiftId: ''.concat(n.channel_id, '-').concat(n.id)
  }), ev = (0, j.Z)(n, t), eA = (0, O.Z)(n, t), eT = (0, G.Z)(n, t), eO = (0, m.Z)(r, t.getGuildId()), eR = (0, x.Z)(n), eh = (0, g.Z)(n), eN = (0, S.Z)(n), ep = (0, I.Z)({
commandType: o.yU.MESSAGE,
commandTargetId: n.id,
channel: t,
guildId: void 0,
onHeightUpdate: Y
  }), ex = (0, U.Z)(n), eC = (0, M.Z)(n);
  return (0, i.jsxs)(l.Menu, {
navId: J,
onClose: q,
'aria-label': $,
onSelect: W,
children: [
  (0, i.jsx)(l.MenuGroup, {
    children: ee
  }),
  (0, i.jsx)(l.MenuGroup, {
    children: en
  }),
  (0, i.jsxs)(l.MenuGroup, {
    children: [
      '' === r ? et : null,
      ei,
      eu,
      ea,
      el,
      er,
      ev,
      eA,
      eT,
      eN,
      ep,
      eo,
      es,
      eh,
      eR,
      ed,
      ec,
      e_,
      eC,
      eM,
      eE,
      ex,
      eI,
      B && em
    ]
  }),
  null != eO && (0, i.jsx)(l.MenuGroup, {
    children: eO
  }),
  (0, i.jsxs)(l.MenuGroup, {
    children: [
      ef,
      eZ
    ]
  }),
  (0, i.jsx)(l.MenuGroup, {
    children: eg
  }),
  (0, i.jsx)(l.MenuGroup, {
    children: eS
  })
]
  });
}