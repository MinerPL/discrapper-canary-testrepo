var i = t(735250),
  r = t(470079),
  o = t(120356),
  l = t.n(o),
  u = t(628238),
  s = t(492593),
  a = t(25015),
  c = t(963550),
  d = t(845080),
  _ = t(848509);
n.Z = r.memo(function(e) {
  var n;
  let {
message: t,
channel: r,
compact: o,
className: f,
isGroupStart: E,
hideSimpleEmbedContent: I = !0,
disableInteraction: g
  } = e, p = (0, u.A)((null !== (n = t.editedTimestamp) && void 0 !== n ? n : t.timestamp).valueOf()), {
content: S
  } = (0, a.Z)(t, {
hideSimpleEmbedContent: I,
allowList: p,
allowHeading: p,
allowLinks: !0,
previewLinkTarget: !0
  });
  return (0, i.jsx)(s.Z, {
compact: o,
className: l()(f, {
  [_.message]: !0,
  [_.cozyMessage]: !o,
  [_.groupStart]: E
}),
childrenHeader: (0, d.Z)({
  ...e,
  channel: r,
  guildId: void 0
}),
childrenMessageContent: (0, c.Z)(e, S),
disableInteraction: g
  });
});