n.d(t, {
  Z: function() {
return o;
  }
});
var s = n(735250);
n(470079);
var a = n(85960),
  i = n(489776),
  r = n(252121),
  l = n(564488);

function o(e) {
  let {
guildId: t,
rules: n,
triggerType: o,
initWithEdit: c
  } = e, {
perGuildMaxCount: d
  } = a.I6[o], u = 0 === n.length, _ = d > n.length && !u;
  return (0, s.jsxs)(s.Fragment, {
children: [
  u && (0, s.jsx)(r.Z, {
    guildId: t,
    triggerType: o
  }),
  n.map(e => (0, s.jsx)(l.Z, {
    rule: e,
    initWithEdit: c
  }, e.id)),
  _ && (0, s.jsx)(i.Z, {
    guildId: t,
    triggerType: o
  })
]
  });
}