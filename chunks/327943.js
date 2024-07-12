var r, i = n(442837),
  a = n(570140),
  o = n(594174),
  s = n(626135),
  l = n(74538),
  u = n(997945),
  c = n(981631),
  d = n(921944),
  _ = n(474936);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let f = {
client: {
  desktop: u.aH.DEFAULT,
  coachmarkImpressions: 0
}
  },
  h = !1,
  p = !0,
  m = () => {
p = !l.ZP.canUsePremiumAppIcons(o.default.getCurrentUser());
  },
  I = e => {
if (f.client.desktop = e, !p) {
  var t;
  s.default.track(c.rMx.APP_ICON_UPDATED, {
    icon_id: e,
    user_premium_tier: null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.premiumType,
    icon_premium_tier: e !== u.aH.DEFAULT ? _.p9.TIER_2 : null
  });
}
  };

function T() {
  p && (f.client = {
desktop: u.aH.DEFAULT,
coachmarkImpressions: 2
  }), h = !1;
}
class g extends(r = i.ZP.PersistedStore) {
  initialize(e) {
null != e && (f = e), this.waitFor(o.default), this.syncWith([o.default], m);
  }
  get isEditorOpen() {
return h;
  }
  get isUpsellPreview() {
return p;
  }
  getState() {
return f;
  }
  getCurrentDesktopIcon() {
var e;
return null == f ? void 0 : null === (e = f.client) || void 0 === e ? void 0 : e.desktop;
  }
}
E(g, 'displayName', 'AppIconPersistedStoreState'), E(g, 'persistKey', 'AppIconPersistedStoreState'), t.Z = new g(a.Z, {
  APP_ICON_UPDATED: function(e) {
let {
  id: t
} = e;
null != t && I(t);
  },
  APP_ICON_EDITOR_OPEN: function() {
h = !0;
  },
  APP_ICON_EDITOR_CLOSE: T,
  APP_ICON_TRACK_IMPRESSION: function(e) {
let {
  markAsDismissed: t
} = e;
f.client.coachmarkImpressions += 1, f.client.coachmarkImpressions >= 2 && (null == t || t(d.L.UNKNOWN), T());
  }
});