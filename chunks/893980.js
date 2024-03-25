"use strict";
r.r(t), r.d(t, {
  trackProfilePanelViewed: function() {
    return u
  },
  trackProfilePanelToggled: function() {
    return o
  }
});
var n = r("373469"),
  i = r("824563"),
  s = r("27618"),
  l = r("599110"),
  a = r("49111");
let u = e => {
    let {
      displayProfile: t,
      isMobile: r,
      loadDurationMs: n,
      activity: i,
      customStatusActivity: s,
      status: u
    } = e;
    l.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
      has_mobile_indicator: r,
      has_activity: null != i && (null == i ? void 0 : i.type) !== a.ActivityTypes.CUSTOM_STATUS,
      has_game_activity: (null == i ? void 0 : i.type) === a.ActivityTypes.PLAYING,
      load_duration_ms: n,
      profile_user_status: u,
      has_custom_status: null != s,
      has_profile_effect: null != t.profileEffectId,
      ...d(t)
    })
  },
  o = (e, t) => {
    l.default.track(a.AnalyticEvents.DM_PROFILE_TOGGLED, {
      is_profile_open: t,
      ...d(e)
    })
  },
  d = e => {
    var t;
    if (null == e) return {};
    let r = e.userId,
      l = null != n.default.getAnyStreamForUser(r),
      u = i.default.findActivity(r, e => {
        let {
          type: t
        } = e;
        return l ? t === a.ActivityTypes.PLAYING : t !== a.ActivityTypes.CUSTOM_STATUS
      }),
      o = null == u ? void 0 : u.assets,
      d = s.default.isFriend(r);
    return {
      has_images: !!(null !== (t = null == o ? void 0 : o.large_image) && void 0 !== t ? t : null == o ? void 0 : o.small_image),
      is_friend: d,
      viewed_profile_user_id: r,
      profile_has_nitro_customization: e.hasPremiumCustomization(),
      profile_has_theme_color_customized: e.hasThemeColors(),
      profile_has_theme_animation: null != e.popoutAnimationParticleType
    }
  }