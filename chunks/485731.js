var r, i = n(442837),
  a = n(570140);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let o = {
  hqStreamingFrameAnimationPlayed: !1,
  hqStreamingPopoutDismissed: !1,
  hqStreamingOptInPopoutDismissed: !1,
  hqStreamingIsEnabled: !1,
  hqStreamingDidEnable: !1,
  hqStreamingOptOutPopoutShouldShow: !1
};
class l extends(r = i.ZP.PersistedStore) {
  getState() {
return o;
  }
  initialize(e) {
null != e && (o = e);
  }
}
s(l, 'displayName', 'PerksDemosUIState'), s(l, 'persistKey', 'PerksDemosUIState'), t.Z = new l(a.Z, {
  PERMIUM_PERKS_DEMO_FRAME_ANIMATION: function(e) {
let {
  played: t
} = e;
o.hqStreamingFrameAnimationPlayed = t;
  },
  PREMIUM_PERKS_DEMO_POPOUT_DISMISSED: function(e) {
let {
  dismissed: t
} = e;
o.hqStreamingPopoutDismissed = t;
  },
  PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_DISMISSED: function(e) {
let {
  dismissed: t
} = e;
o.hqStreamingOptInPopoutDismissed = t;
  },
  PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_SHOULD_SHOW: function(e) {
let {
  shouldShow: t
} = e;
o.hqStreamingOptOutPopoutShouldShow = t;
  },
  PREMIUM_PERKS_DEMO_ENABLED: function(e) {
let {
  enabled: t
} = e;
o.hqStreamingIsEnabled = t, o.hqStreamingDidEnable = t || o.hqStreamingDidEnable;
  }
});