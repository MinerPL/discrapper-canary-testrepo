"use strict";
var i, r = n(442837),
  s = n(570140),
  o = n(594174),
  a = n(626135),
  l = n(74538),
  u = n(997945),
  _ = n(981631),
  d = n(921944),
  c = n(474936);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = {
    client: {
      desktop: u.aH.DEFAULT,
      coachmarkImpressions: 0
    }
  },
  T = !1,
  h = !0,
  S = () => {
    h = !l.ZP.canUsePremiumAppIcons(o.default.getCurrentUser())
  },
  f = e => {
    if (I.client.desktop = e, !h) {
      var t;
      a.default.track(_.rMx.APP_ICON_UPDATED, {
        icon_id: e,
        user_premium_tier: null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.premiumType,
        icon_premium_tier: e !== u.aH.DEFAULT ? c.p9.TIER_2 : null
      })
    }
  };

function N() {
  h && (I.client = {
    desktop: u.aH.DEFAULT,
    coachmarkImpressions: 2
  }), T = !1
}
class A extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    null != e && (I = e), this.waitFor(o.default), this.syncWith([o.default], S)
  }
  get isEditorOpen() {
    return T
  }
  get isUpsellPreview() {
    return h
  }
  getState() {
    return I
  }
  getCurrentDesktopIcon() {
    var e;
    return null == I ? void 0 : null === (e = I.client) || void 0 === e ? void 0 : e.desktop
  }
}
E(A, "displayName", "AppIconPersistedStoreState"), E(A, "persistKey", "AppIconPersistedStoreState"), t.Z = new A(s.Z, {
  APP_ICON_UPDATED: function(e) {
    let {
      id: t
    } = e;
    null != t && f(t)
  },
  APP_ICON_EDITOR_OPEN: function() {
    T = !0
  },
  APP_ICON_EDITOR_CLOSE: N,
  APP_ICON_TRACK_IMPRESSION: function(e) {
    let {
      markAsDismissed: t
    } = e;
    I.client.coachmarkImpressions += 1, I.client.coachmarkImpressions >= 2 && (null == t || t(d.L.UNKNOWN), N())
  }
})