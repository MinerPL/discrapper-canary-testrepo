t.d(n, {
  Z: function() {
return u;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  l = t(111618),
  r = t(730954),
  s = t(981631),
  o = t(689938);

function u(e, n) {
  return e.state !== s.yb.SEND_FAILED ? null : (0, i.jsx)(a.MenuItem, {
id: 'resend',
label: o.Z.Messages.RESEND_MESSAGE,
action: () => (0, r.Z)(n, e, void 0, l.Z.getOptions(e.id))
  });
}