n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(607187),
  l = n(112560),
  r = n(981631),
  o = n(689938),
  c = n(140160),
  u = n(800350);

function d(e) {
  let {
channel: t,
guild: d,
width: h,
inPopout: m
  } = e;
  return (0, i.jsx)(s.Z, {
className: c.root,
children: (0, i.jsx)(l.Z, {
  artURL: u,
  size: (0, l.L)(h),
  header: o.Z.Messages.STREAM_SINGLE_PERSON_BODY,
  onCTAClick: () => (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('7654'),
      n.e('66633')
    ]).then(n.bind(n, 560114));
    return n => (0, i.jsx)(e, {
      ...n,
      guild: d,
      channel: t,
      source: r.t4x.CHANNEL_CALL
    });
  }, {
    contextKey: m ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
  }),
  callToAction: o.Z.Messages.INSTANT_INVITE
})
  });
}