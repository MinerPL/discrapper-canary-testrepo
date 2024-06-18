"use strict";
var i = n(735250);
n(470079);
var r = n(704215),
  s = n(952265),
  o = n(468026),
  a = n(231757),
  l = n(605236),
  u = n(131951),
  _ = n(626135),
  d = n(542238),
  c = n(927923),
  E = n(981631),
  I = n(689938),
  T = n(112995);
let h = "game_console_alert_modal",
  S = "game_console_ptt_alert_modal";
t.Z = {
  maybeShowPTTAlert(e) {
    if (u.Z.getMode() !== E.pM4.PUSH_TO_TALK || (0, l.un)(r.z.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
    let t = {
      [E.ABu.XBOX]: I.Z.Messages.PTT_NOT_SUPPORTED_XBOX,
      [E.ABu.PLAYSTATION]: I.Z.Messages.PTT_NOT_SUPPORTED_PLAYSTATION,
      [E.ABu.PLAYSTATION_STAGING]: I.Z.Messages.PTT_NOT_SUPPORTED_PLAYSTATION
    } [e];
    return null == t ? Promise.resolve() : new Promise(e => {
      let n = () => {
          (0, l.EW)(r.z.CONSOLE_PTT_DISABLE_ALERT), e()
        },
        a = e => (0, i.jsx)(o.default, {
          ...e,
          title: t,
          body: I.Z.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
          onConfirm: n,
          titleClassName: T.title
        });
      (0, s.nf)(S) ? (0, s.o)(S, a) : (0, s.h7)(a, {
        modalKey: S
      })
    })
  },
  showSelfDismissableAlert(e) {
    let {
      title: t,
      body: n,
      errorCodeMessage: r,
      reconnectPlatformType: l
    } = e, u = (0, i.jsx)(d.t, {
      body: n,
      errorCodeMessage: r,
      dismissCallback: () => (0, s.Mr)(h)
    });

    function I() {
      null != l && ((0, a.Z)({
        platformType: l
      }), _.default.track(E.rMx.ACCOUNT_LINK_STEP, {
        previous_step: c.Lw,
        current_step: "desktop oauth",
        platform_type: l
      }))
    }
    let T = e => (0, i.jsx)(o.default, {
      ...e,
      title: t,
      body: u,
      onConfirm: I
    });
    (0, s.nf)(h) ? (0, s.o)(h, T) : (0, s.h7)(T, {
      modalKey: h
    })
  }
}