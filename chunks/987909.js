n.d(t, {
  Z: function() {
return C;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(904245),
  o = n(541716),
  c = n(419922),
  d = n(665906),
  u = n(271383),
  _ = n(496675),
  E = n(594174),
  I = n(626135),
  m = n(709054),
  T = n(838440),
  h = n(981631),
  N = n(609727);

function f(e) {
  let {
assets: t,
currentUser: n,
message: i
  } = e, a = (m.default.extractTimestamp(n.id) + m.default.extractTimestamp(i.id)) % t.length;
  return t[a];
}

function p(e) {
  let {
currentUser: t,
channel: n,
message: s,
buttonLabels: d,
stickers: u,
event: _,
eventProperties: E
  } = e, [m, h] = a.useState(!1), p = a.useMemo(() => f({
assets: u,
currentUser: t,
message: s
  }), [
u,
t,
s
  ]), C = a.useMemo(() => f({
assets: d,
currentUser: t,
message: s
  }), [
d,
t,
s
  ]), g = a.useCallback(async () => {
let {
  valid: e
} = await (0, T.v)({
  type: o.I.FORM,
  content: '',
  channel: n
});
e && (! function(e) {
  let {
    channel: t,
    message: n,
    sticker: i
  } = e;
  l.Z.sendGreetMessage(t.id, i.id, l.Z.getSendMessageOptionsForReply({
    channel: t,
    message: n,
    shouldMention: !0,
    showMentionToggle: !0
  }));
}({
  channel: n,
  message: s,
  sticker: p
}), ! function(e) {
  let {
    sticker: t,
    event: n,
    eventProperties: i
  } = e;
  null != n && I.default.track(n, {
    ...i,
    sticker_id: t.id
  });
}({
  sticker: p,
  event: _,
  eventProperties: E
}));
  }, [
n,
s,
p,
_,
E
  ]);
  return (0, i.jsxs)(r.Button, {
className: N.CTAMessageButtonOuter,
innerClassName: N.CTAMessageButton,
color: r.ButtonColors.PRIMARY,
onMouseEnter: () => h(!0),
onMouseLeave: () => h(!1),
onClick: g,
children: [
  (0, i.jsx)(c.ZP, {
    className: N.CTAMessageSticker,
    isInteracting: m,
    sticker: p,
    size: 28
  }),
  C
]
  });
}

function C(e) {
  let {
channel: t,
message: n,
buttonLabels: a,
stickers: r,
event: l,
eventProperties: o
  } = e, c = E.default.getCurrentUser(), I = function(e) {
let {
  channel: t,
  message: n,
  currentUser: i
} = e;
return (0, s.e7)([
  _.Z,
  u.ZP
], () => {
  var e;
  let a = t.guild_id;
  if (null == i || null == a)
    return !1;
  let s = (0, d.xl)(t),
    r = _.Z.can(h.Plq.SEND_MESSAGES, t),
    l = null === (e = u.ZP.getMember(a, i.id)) || void 0 === e ? void 0 : e.isPending,
    o = n.author.bot;
  return r && !s && !l && !o;
});
  }({
channel: t,
message: n,
currentUser: c
  });
  return null != c && I ? (0, i.jsx)('div', {
className: N.CTAMessage,
children: (0, i.jsx)(p, {
  currentUser: c,
  channel: t,
  message: n,
  buttonLabels: a,
  stickers: r,
  event: l,
  eventProperties: o
})
  }) : null;
}