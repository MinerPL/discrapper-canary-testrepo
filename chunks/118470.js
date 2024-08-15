n.d(t, {
  Z: function() {
return h;
  }
}), n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(812206),
  l = n(82950),
  o = n(434404),
  c = n(106976),
  d = n(270144),
  u = n(981631),
  _ = n(689938),
  E = n(466389);

function h(e) {
  let {
guild: t
  } = e, n = (0, d.h6)(t), h = () => (0, c.sB)(t.id), m = a.useMemo(() => new Set(n.map(e => e.applicationId)), [n]), I = (0, s.Wu)([r.Z], () => {
let e = [];
for (let t of m) {
  let n = r.Z.getApplication(t);
  null != n && e.push(n);
}
return e;
  }, [m]);
  if (0 === I.length)
return null;
  let g = '';
  return g = 1 === I.length ? _.Z.Messages.ONE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
a: I[0].name
  }) : 2 === I.length ? _.Z.Messages.TWO_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
a: I[0].name,
b: I[1].name
  }) : 3 === I.length ? _.Z.Messages.THREE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
a: I[0].name,
b: I[1].name,
c: I[2].name
  }) : _.Z.Messages.MORE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT, (0, i.jsx)(l.Z, {
guild: t,
onDismissed: h,
message: g,
type: u.vID.APPLICATION_SUBSCRIPTION_EXPIRATION,
image: E,
onClick: () => {
  h(), o.Z.open(t.id, u.pNK.INTEGRATIONS);
},
imageMarginTop: 6,
imageMarginX: 46,
cta: _.Z.Messages.APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CTA
  });
}