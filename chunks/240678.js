T.r(e), T.d(e, {
  default: function() {
return A;
  }
});
var n = T(735250);
T(470079);
var I = T(374470),
  E = T(481060),
  i = T(239091),
  N = T(911969),
  r = T(299206),
  s = T(26737),
  o = T(905041),
  S = T(89013),
  _ = T(570870),
  a = T(449751),
  c = T(601184),
  p = T(168405),
  d = T(134323),
  O = T(689938);

function A(t) {
  var e;
  let T, A, u, {
  channel: G,
  message: h,
  target: l,
  mediaItem: y,
  onSelect: R,
  onHeightUpdate: Z
} = t,
M = l;
  if (null != y)
A = T = y.url;
  else
for (;
  (0, I.k)(M);)
  (0, I.k)(M, HTMLImageElement) && null != M.src && (A = M.src), (0, I.k)(M, HTMLAnchorElement) && null != M.href && (T = M.href, u = M.textContent), M = M.parentNode;
  let C = null === (e = document.getSelection()) || void 0 === e ? void 0 : e.toString(),
m = (0, s.Z)(C),
f = (0, S.Z)(C),
g = (0, _.Z)({
  commandType: N.yU.MESSAGE,
  commandTargetId: h.id,
  channel: G,
  guildId: void 0,
  onHeightUpdate: Z
}),
P = (0, p.Z)(h, G),
D = (0, a.Z)(h, G),
U = (0, c.Z)(h, G),
H = (0, o.Z)(null != T ? T : A, u),
b = (0, r.Z)({
  id: h.id,
  label: O.Z.Messages.COPY_ID_MESSAGE,
  shiftId: ''.concat(h.channel_id, '-').concat(h.id)
}),
B = (0, d.Z)(h, G);
  return (0, n.jsxs)(E.Menu, {
navId: 'message',
onClose: i.Zy,
'aria-label': O.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
onSelect: R,
children: [
  (0, n.jsx)(E.MenuGroup, {
    children: m
  }),
  (0, n.jsx)(E.MenuGroup, {
    children: f
  }),
  (0, n.jsxs)(E.MenuGroup, {
    children: [
      B,
      g,
      P,
      D,
      U
    ]
  }),
  (0, n.jsx)(E.MenuGroup, {
    children: H
  }),
  (0, n.jsx)(E.MenuGroup, {
    children: b
  })
]
  });
}