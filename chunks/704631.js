n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(82950),
  r = n(981631),
  l = n(921944),
  o = n(689938),
  c = n(524094);

function d(e) {
  let {
guild: t,
markAsDismissed: d
  } = e;
  return (0, i.jsx)(a.Z, {
guild: t,
onDismissed: () => d(l.L.UNKNOWN),
onClick: function() {
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 650233));
    return t => (0, i.jsx)(e, {
      ...t
    });
  });
},
message: o.Z.Messages.HUB_LINK_CHANNEL_NOTICE_BODY,
cta: o.Z.Messages.LEARN_MORE,
trackingSource: r.PsQ.HUB_LINK_NOTICE,
type: r.vID.HUB_LINK,
image: c
  });
}