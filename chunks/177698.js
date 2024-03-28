"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("813615"),
  i = n("69580"),
  r = n("358085"),
  o = n("998502"),
  u = n("703912"),
  d = n("981631");
t.default = (0, u.default)((e, t, n, r, o, u, d, c, f, E, h, _, C) => {
  let m = "OAuth2Authorize_".concat(e, "_").concat(E, "_").concat(h);
  return new Promise(S => {
    let I = e => {
      let {
        location: t
      } = e;
      S(t)
    };
    (0, s.openModal)(s => (0, a.jsx)(i.OAuth2AuthorizeModal, {
      ...s,
      authorization: t,
      clientId: e,
      scopes: null != n ? n : [],
      callback: I,
      responseType: o,
      redirectUri: u,
      codeChallenge: d,
      codeChallengeMethod: c,
      state: f,
      permissions: r,
      guildId: E,
      channelId: h,
      prompt: _,
      disableGuildSelect: "boolean" == typeof C ? C : "true" === C
    }), {
      modalKey: m,
      onCloseRequest: () => {
        (0, s.closeModal)(m), S(void 0)
      }
    }, (0, l.default)(t.application, h) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT)
  })
}, function(e, t) {
  if (r.isPlatformEmbedded) {
    let n = (0, l.default)(e, t) ? d.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
    (0, r.isWindows)() ? o.default.minimize(n): o.default.restore(n), o.default.focus(n)
  }
})