t.r(n), t.d(n, {
  default: function() {
return E;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  r = t(522664),
  l = t(651530),
  o = t(163268),
  s = t(668058),
  u = t(112554),
  c = t(160877),
  d = t(689938);

function E(e) {
  let {
channelId: n,
messageId: t,
mediaItemUrl: E,
embedId: M,
transitionState: I,
onClose: m
  } = e, _ = (0, l.yh)(), g = (0, u.K)(n, t, E), f = (0, u.b)(n, t, M), {
reportFalsePositive: Z,
isReportFalsePositiveLoading: S
  } = (0, s.$)({
onSuccess: () => (0, c.s)(m),
onError: () => {
  (0, a.showToast)((0, a.createToast)(d.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE));
},
report: () => {
  (0, r.Uj)(n, t, g.map(e => e.id), f.map(e => e.id));
}
  });
  return !(_ && (g.length > 0 || f.length > 0)) && m(), (0, i.jsx)(c.$, {
messageId: t,
channelId: n,
isReportFalsePositiveLoading: S,
analyticsContext: o.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
onConfirmPress: Z,
attachmentPreview: 1 === g.length && 0 === f.length ? g[0] : void 0,
embedPreview: 1 === f.length && 0 === g.length ? f[0] : void 0,
transitionState: I,
onClose: m
  });
}