var i = n(735250);
n(470079);
var s = n(481060),
  a = n(813615),
  r = n(812206),
  l = n(69580),
  o = n(358085),
  c = n(998502),
  d = n(996106),
  u = n(703912),
  _ = n(981631);
t.Z = (0, u.Z)(e => {
  var t;
  let {
clientId: n,
authorizations: o,
scopes: c,
parsedPermissions: u,
responseType: h,
redirectUri: E,
codeChallenge: I,
codeChallengeMethod: m,
state: g,
guildId: p,
channelId: T,
prompt: S,
disableGuildSelect: C,
disclosures: f,
integrationType: N
  } = e, A = 'OAuth2Authorize_'.concat(n, '_').concat(p, '_').concat(T), Z = null != N ? null == o ? void 0 : o.get(N) : void 0, L = null !== (t = null == Z ? void 0 : Z.application) && void 0 !== t ? t : r.Z.getApplication(n);
  return new Promise((e, t) => {
let r = n => {
  let {
    location: i
  } = n;
  null != location ? e(i) : t(new d.Z({
    errorCode: _.lTL.OAUTH2_ERROR
  }, 'User cancelled authorization'));
};
(0, s.openModal)(e => (0, i.jsx)(l.OAuth2AuthorizeModal, {
  ...e,
  authorizations: o,
  clientId: n,
  scopes: null != c ? c : [],
  disclosures: null != f ? f : [],
  callback: r,
  responseType: h,
  redirectUri: E,
  codeChallenge: I,
  codeChallengeMethod: m,
  state: g,
  permissions: u,
  guildId: p,
  channelId: T,
  prompt: S,
  disableGuildSelect: 'boolean' == typeof C ? C : 'true' === C,
  integrationType: N
}), {
  modalKey: A,
  onCloseRequest: () => {
    (0, s.closeModal)(A), t(new d.Z({
      errorCode: _.lTL.OAUTH2_ERROR
    }, 'User cancelled authorization'));
  }
}, null != L && (0, a.Z)(L, T) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT);
  });
}, function(e, t) {
  if (o.isPlatformEmbedded) {
let n = (0, a.Z)(e, t) ? _.KJ3.CHANNEL_CALL_POPOUT : null;
(0, o.isWindows)() ? c.ZP.minimize(n): c.ZP.restore(n), c.ZP.focus(n);
  }
});