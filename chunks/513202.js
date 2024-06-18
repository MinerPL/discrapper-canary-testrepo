"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(570140),
  o = n(468026),
  a = n(566620),
  l = n(287545),
  u = n(318891),
  _ = n(719296),
  d = n(689938);
class c extends l.Z {
  showErrorModal(e) {
    let {
      code: t,
      message: n
    } = e;
    (0, r.openModalLazy)(async () => e => (0, i.jsx)(o.default, {
      title: d.Z.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
        code: t
      }),
      body: n,
      ...e
    }))
  }
  showLaunchErrorModal(e) {
    (0, r.openModalLazy)(async () => t => (0, i.jsx)(o.default, {
      title: d.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
      body: e,
      ...t
    }))
  }
  leaveActivity(e) {
    let {
      channelId: t,
      applicationId: n
    } = e;
    s.Z.wait(() => {
      (0, a.mW)({
        channelId: t,
        applicationId: n
      })
    })
  }
  hidePIPEmbed(e) {
    let {
      channelId: t,
      applicationId: n
    } = e, i = (0, _.Z)(t, n);
    (0, u.RI)(i)
  }
  releaseWebView() {}
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "handleRPCDisconnect", i = e => {
      let {
        reason: t,
        application: n
      } = e;
      this.superHandleRPCDisconnect({
        reason: t,
        application: n
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new c