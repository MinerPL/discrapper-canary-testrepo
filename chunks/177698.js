"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("813615"),
  i = n("812206"),
  r = n("69580"),
  o = n("358085"),
  u = n("998502"),
  d = n("703912"),
  c = n("981631");
t.default = (0, d.default)(e => {
  var t;
  let {
    clientId: n,
    authorizations: o,
    scopes: u,
    parsedPermissions: d,
    responseType: c,
    redirectUri: f,
    codeChallenge: E,
    codeChallengeMethod: h,
    state: _,
    guildId: C,
    channelId: S,
    prompt: m,
    disableGuildSelect: p,
    disclosures: I,
    integrationType: T
  } = e, g = "OAuth2Authorize_".concat(n, "_").concat(C, "_").concat(S), A = null != T ? null == o ? void 0 : o.get(T) : void 0, N = null !== (t = null == A ? void 0 : A.application) && void 0 !== t ? t : i.default.getApplication(n);
  return new Promise(e => {
    let t = t => {
      let {
        location: n
      } = t;
      e(n)
    };
    (0, s.openModal)(e => (0, a.jsx)(r.OAuth2AuthorizeModal, {
      ...e,
      authorizations: o,
      clientId: n,
      scopes: null != u ? u : [],
      disclosures: null != I ? I : [],
      callback: t,
      responseType: c,
      redirectUri: f,
      codeChallenge: E,
      codeChallengeMethod: h,
      state: _,
      permissions: d,
      guildId: C,
      channelId: S,
      prompt: m,
      disableGuildSelect: "boolean" == typeof p ? p : "true" === p,
      integrationType: T
    }), {
      modalKey: g,
      onCloseRequest: () => {
        (0, s.closeModal)(g), e(void 0)
      }
    }, null != N && (0, l.default)(N, S) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT)
  })
}, function(e, t) {
  if (o.isPlatformEmbedded) {
    let n = (0, l.default)(e, t) ? c.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
    (0, o.isWindows)() ? u.default.minimize(n): u.default.restore(n), u.default.focus(n)
  }
})