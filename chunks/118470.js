n.d(t, {
  Z: function() {
return E;
  }
}), n(47120), n(653041);
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(812206),
  l = n(82950),
  o = n(434404),
  c = n(106976),
  d = n(270144),
  u = n(981631),
  _ = n(689938),
  h = n(466389);

function E(e) {
  let {
guild: t
  } = e, n = (0, d.h6)(t), E = () => (0, c.sB)(t.id), I = s.useMemo(() => new Set(n.map(e => e.applicationId)), [n]), m = (0, a.Wu)([r.Z], () => {
let e = [];
for (let t of I) {
  let n = r.Z.getApplication(t);
  null != n && e.push(n);
}
return e;
  }, [I]);
  if (0 === m.length)
return null;
  let g = '';
  return g = 1 === m.length ? _.Z.Messages.ONE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
a: m[0].name
  }) : 2 === m.length ? _.Z.Messages.TWO_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
a: m[0].name,
b: m[1].name
  }) : 3 === m.length ? _.Z.Messages.THREE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
a: m[0].name,
b: m[1].name,
c: m[2].name
  }) : _.Z.Messages.MORE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT, (0, i.jsx)(l.Z, {
guild: t,
onDismissed: E,
message: g,
type: u.vID.APPLICATION_SUBSCRIPTION_EXPIRATION,
image: h,
onClick: () => {
  E(), o.Z.open(t.id, u.pNK.INTEGRATIONS);
},
imageMarginTop: 6,
imageMarginX: 46,
cta: _.Z.Messages.APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CTA
  });
}