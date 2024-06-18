"use strict";
n(47120);
var i = n(147913),
  r = n(282397),
  s = n(626135),
  o = n(131595),
  a = n(475774),
  l = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = "interaction_iframe_modal";
async function d(e) {
  let {
    openInteractionModal: t
  } = await Promise.all([n.e("49237"), n.e("99387"), n.e("29549"), n.e("31605"), n.e("77172"), n.e("8739"), n.e("58286"), n.e("30243"), n.e("7137")]).then(n.bind(n, 440934));
  t(e), s.default.track(l.rMx.OPEN_MODAL, {
    type: "interaction_modal",
    application_id: e.application.id
  })
}
class c extends i.Z {
  constructor(...e) {
    super(...e), u(this, "iframeModalOpenTimeMs", void 0), u(this, "actions", {
      INTERACTION_MODAL_CREATE: e => {
        d(e)
      },
      INTERACTION_IFRAME_MODAL_CREATE: e => {
        var t;
        this.iframeModalOpenTimeMs = Date.now(), t = e, (0, a.Z)(t), s.default.track(l.rMx.OPEN_MODAL, {
          type: _,
          application_id: t.application.id
        })
      },
      INTERACTION_IFRAME_MODAL_CLOSE: e => {
        ! function(e, t) {
          let n = null != t ? Date.now() - t : void 0;
          s.default.track(l.rMx.MODAL_DISMISSED, {
            type: _,
            application_id: e.applicationId,
            duration_open_ms: n
          })
        }(e, this.iframeModalOpenTimeMs), this.iframeModalOpenTimeMs = void 0
      },
      RPC_APP_DISCONNECTED: e => {
        ! function(e) {
          let {
            application: t
          } = e, n = r.Z.getIFrameModalApplicationId(), i = r.Z.getIFrameModalKey();
          t.id === n && null != n && (0, o.Z)(n, i)
        }(e)
      }
    })
  }
}
t.Z = new c