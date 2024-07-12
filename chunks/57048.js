n.d(t, {
  U: function() {
return s;
  },
  a: function() {
return c;
  }
});
var i = n(199902),
  l = n(158776),
  r = n(699516),
  o = n(626135),
  a = n(981631);
let s = e => {
let {
  displayProfile: t,
  isMobile: n,
  loadDurationMs: i,
  activity: l,
  customStatusActivity: r,
  status: s
} = e;
o.default.track(a.rMx.DM_PROFILE_VIEWED, {
  has_mobile_indicator: n,
  has_activity: null != l && (null == l ? void 0 : l.type) !== a.IIU.CUSTOM_STATUS,
  has_game_activity: (null == l ? void 0 : l.type) === a.IIU.PLAYING,
  load_duration_ms: i,
  profile_user_status: s,
  has_custom_status: null != r,
  has_profile_effect: null != t.profileEffectId,
  ...u(t)
});
  },
  c = (e, t) => {
o.default.track(a.rMx.DM_PROFILE_TOGGLED, {
  is_profile_open: t,
  ...u(e)
});
  },
  u = e => {
var t;
if (null == e)
  return {};
let n = e.userId,
  o = null != i.Z.getAnyStreamForUser(n),
  s = l.Z.findActivity(n, e => {
    let {
      type: t
    } = e;
    return o ? t === a.IIU.PLAYING : t !== a.IIU.CUSTOM_STATUS;
  }),
  c = null == s ? void 0 : s.assets,
  u = r.Z.isFriend(n);
return {
  has_images: !!(null !== (t = null == c ? void 0 : c.large_image) && void 0 !== t ? t : null == c ? void 0 : c.small_image),
  is_friend: u,
  viewed_profile_user_id: n,
  profile_has_nitro_customization: e.hasPremiumCustomization(),
  profile_has_theme_color_customized: e.hasThemeColors(),
  profile_has_theme_animation: null != e.popoutAnimationParticleType
};
  };