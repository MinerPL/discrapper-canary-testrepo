n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(739566),
  l = n(492593),
  o = n(930282),
  c = n(464891),
  u = n(444190);

function d(e) {
  let {
message: t,
channel: n,
content: s,
className: d,
compact: _,
popoutProps: E,
hideTimestamp: I = !1,
withFooter: m = !1,
...T
  } = e, h = (0, r.ZP)(t);
  return (0, i.jsx)('div', {
className: a()({
  [u.withFooter]: m
}, u.embedCard, {
  [u.compact]: _
}, d),
children: (0, i.jsx)(l.Z, {
  ...T,
  className: a()(u.messageContainer, {
    [u.compact]: _
  }),
  childrenMessageContent: (0, i.jsx)(o.ZP, {
    className: a()(u.__invalid_messageContent, {
      [u.compact]: _
    }),
    message: t,
    content: s
  }),
  childrenHeader: (0, i.jsx)(c.ZP, {
    message: t,
    channel: n,
    author: h,
    guildId: null == n ? void 0 : n.guild_id,
    compact: _,
    hideTimestamp: I,
    className: a()(u.header, {
      [u.compact]: _
    }),
    ...null != E ? E : {}
  }),
  compact: _
})
  });
}