n.d(t, {
  Z: function() {
return p;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(481060),
  l = n(904245),
  o = n(541716),
  c = n(419922),
  u = n(665906),
  d = n(271383),
  _ = n(496675),
  E = n(594174),
  I = n(626135),
  m = n(709054),
  T = n(838440),
  h = n(981631),
  N = n(609727);

function C(e) {
  let {
assets: t,
currentUser: n,
message: i
  } = e, s = (m.default.extractTimestamp(n.id) + m.default.extractTimestamp(i.id)) % t.length;
  return t[s];
}

function f(e) {
  let {
currentUser: t,
channel: n,
message: a,
buttonLabels: u,
stickers: d,
event: _,
eventProperties: E
  } = e, [m, h] = s.useState(!1), f = s.useMemo(() => C({
assets: d,
currentUser: t,
message: a
  }), [
d,
t,
a
  ]), p = s.useMemo(() => C({
assets: u,
currentUser: t,
message: a
  }), [
u,
t,
a
  ]), g = s.useCallback(async () => {
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
  message: a,
  sticker: f
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
  sticker: f,
  event: _,
  eventProperties: E
}));
  }, [
n,
a,
f,
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
    sticker: f,
    size: 28
  }),
  p
]
  });
}

function p(e) {
  let {
channel: t,
message: n,
buttonLabels: s,
stickers: r,
event: l,
eventProperties: o
  } = e, c = E.default.getCurrentUser(), I = function(e) {
let {
  channel: t,
  message: n,
  currentUser: i
} = e;
return (0, a.e7)([
  _.Z,
  d.ZP
], () => {
  var e;
  let s = t.guild_id;
  if (null == i || null == s)
    return !1;
  let a = (0, u.xl)(t),
    r = _.Z.can(h.Plq.SEND_MESSAGES, t),
    l = null === (e = d.ZP.getMember(s, i.id)) || void 0 === e ? void 0 : e.isPending,
    o = n.author.bot;
  return r && !a && !l && !o;
});
  }({
channel: t,
message: n,
currentUser: c
  });
  return null != c && I ? (0, i.jsx)('div', {
className: N.CTAMessage,
children: (0, i.jsx)(f, {
  currentUser: c,
  channel: t,
  message: n,
  buttonLabels: s,
  stickers: r,
  event: l,
  eventProperties: o
})
  }) : null;
}