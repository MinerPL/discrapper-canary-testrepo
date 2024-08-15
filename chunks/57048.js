t.d(n, {
	a: function () {
		return o;
	}
});
var l = t(199902),
	i = t(158776),
	a = t(699516),
	r = t(626135),
	s = t(981631);
let o = (e, n) => {
		r.default.track(s.rMx.DM_PROFILE_TOGGLED, {
			is_profile_open: n,
			...u(e)
		});
	},
	u = (e) => {
		var n;
		if (null == e) return {};
		let t = e.userId,
			r = null != l.Z.getAnyStreamForUser(t),
			o = i.Z.findActivity(t, (e) => {
				let { type: n } = e;
				return r ? n === s.IIU.PLAYING : n !== s.IIU.CUSTOM_STATUS;
			}),
			u = null == o ? void 0 : o.assets,
			c = a.Z.isFriend(t);
		return {
			has_images: !!(null !== (n = null == u ? void 0 : u.large_image) && void 0 !== n
				? n
				: null == u
					? void 0
					: u.small_image),
			is_friend: c,
			viewed_profile_user_id: t,
			profile_has_nitro_customization: e.hasPremiumCustomization(),
			profile_has_theme_color_customized: e.hasThemeColors(),
			profile_has_theme_animation: null != e.popoutAnimationParticleType
		};
	};
