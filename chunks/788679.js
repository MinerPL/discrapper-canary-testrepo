t.r(n), t.d(n, {
  default: function() {
return E;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  l = t(522664),
  r = t(651530),
  s = t(163268),
  o = t(668058),
  u = t(112554),
  d = t(160877),
  c = t(689938);

function E(e) {
  let {
channelId: n,
messageId: t,
mediaItemUrl: E,
embedId: M,
transitionState: I,
onClose: m
  } = e, _ = (0, r.yh)(), g = (0, u.K)(n, t, E), f = (0, u.b)(n, t, M), {
reportFalsePositive: Z,
isReportFalsePositiveLoading: S
  } = (0, o.$)({
onSuccess: () => (0, d.s)(m),
onError: () => {
  (0, a.showToast)((0, a.createToast)(c.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE));
},
report: () => {
  (0, l.Uj)(n, t, g.map(e => e.id), f.map(e => e.id));
}
  });
  return !(_ && (g.length > 0 || f.length > 0)) && m(), (0, i.jsx)(d.$, {
messageId: t,
channelId: n,
isReportFalsePositiveLoading: S,
analyticsContext: s.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
onConfirmPress: Z,
attachmentPreview: 1 === g.length && 0 === f.length ? g[0] : void 0,
embedPreview: 1 === f.length && 0 === g.length ? f[0] : void 0,
transitionState: I,
onClose: m
  });
}