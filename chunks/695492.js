n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  l = n(607187),
  s = n(112560),
  r = n(981631),
  o = n(689938),
  c = n(194791),
  d = n(800350);

function u(e) {
  let {
channel: t,
guild: u,
width: h,
inPopout: p
  } = e;
  return (0, i.jsx)(l.Z, {
className: c.root,
children: (0, i.jsx)(s.Z, {
  artURL: d,
  size: (0, s.L)(h),
  header: o.Z.Messages.STREAM_SINGLE_PERSON_BODY,
  onCTAClick: () => (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('7654'),
      n.e('21026')
    ]).then(n.bind(n, 560114));
    return n => (0, i.jsx)(e, {
      ...n,
      guild: u,
      channel: t,
      source: r.t4x.CHANNEL_CALL
    });
  }, {
    contextKey: p ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
  }),
  callToAction: o.Z.Messages.INSTANT_INVITE
})
  });
}