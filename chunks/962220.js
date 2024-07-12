var r = n(39612),
  i = n(271579),
  l = n(756647),
  u = n(625128),
  o = n(626135),
  a = n(954824),
  c = n(751189),
  _ = n(981631);
let s = 'template';
e.Z = {
  ...c.Z,
  openNativeAppModal(t) {
u.Z.openNativeAppModal(t, _.Etm.GUILD_TEMPLATE_BROWSER);
  },
  openMobileApp(t, e) {
if (null != platform.ua && platform.ua.toLowerCase().indexOf('googlebot') > -1)
  return;
let n = null != t ? (0, r.Oh)(t) : (0, r.Gk)(),
  u = (0, i.WS)(),
  c = (0, i.ZP)(n, {
    utmSource: s,
    fingerprint: e,
    attemptId: u
  });
o.default.track(_.rMx.DEEP_LINK_CLICKED, {
  fingerprint: (0, l.K)(e),
  attempt_id: u,
  source: s,
  guild_template_code: t
}), a.Z.launch(c, () => {});
  }
};