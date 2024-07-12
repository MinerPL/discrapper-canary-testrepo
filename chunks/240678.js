n.r(e), n.d(e, {
  default: function() {
return A;
  }
});
var T = n(735250);
n(470079);
var I = n(374470),
  i = n(481060),
  E = n(239091),
  r = n(911969),
  N = n(299206),
  o = n(26737),
  s = n(905041),
  S = n(89013),
  a = n(570870),
  _ = n(449751),
  p = n(601184),
  c = n(168405),
  d = n(134323),
  O = n(689938);

function A(t) {
  var e;
  let n, A, u, {
  channel: G,
  message: h,
  target: l,
  mediaItem: y,
  onSelect: R,
  onHeightUpdate: Z
} = t,
M = l;
  if (null != y)
A = n = y.url;
  else
for (;
  (0, I.k)(M);)
  (0, I.k)(M, HTMLImageElement) && null != M.src && (A = M.src), (0, I.k)(M, HTMLAnchorElement) && null != M.href && (n = M.href, u = M.textContent), M = M.parentNode;
  let f = null === (e = document.getSelection()) || void 0 === e ? void 0 : e.toString(),
C = (0, o.Z)(f),
m = (0, S.Z)(f),
g = (0, a.Z)({
  commandType: r.yU.MESSAGE,
  commandTargetId: h.id,
  channel: G,
  guildId: void 0,
  onHeightUpdate: Z
}),
P = (0, c.Z)(h, G),
D = (0, _.Z)(h, G),
U = (0, p.Z)(h, G),
H = (0, s.Z)(null != n ? n : A, u),
b = (0, N.Z)({
  id: h.id,
  label: O.Z.Messages.COPY_ID_MESSAGE,
  shiftId: ''.concat(h.channel_id, '-').concat(h.id)
}),
W = (0, d.Z)(h, G);
  return (0, T.jsxs)(i.Menu, {
navId: 'message',
onClose: E.Zy,
'aria-label': O.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
onSelect: R,
children: [
  (0, T.jsx)(i.MenuGroup, {
    children: C
  }),
  (0, T.jsx)(i.MenuGroup, {
    children: m
  }),
  (0, T.jsxs)(i.MenuGroup, {
    children: [
      W,
      g,
      P,
      D,
      U
    ]
  }),
  (0, T.jsx)(i.MenuGroup, {
    children: H
  }),
  (0, T.jsx)(i.MenuGroup, {
    children: b
  })
]
  });
}