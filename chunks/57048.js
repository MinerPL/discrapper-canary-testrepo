n.d(t, {
    U: function () {
        return o;
    },
    a: function () {
        return c;
    }
});
var i = n(199902), a = n(158776), s = n(699516), l = n(626135), r = n(981631);
let o = e => {
        let {
            displayProfile: t,
            isMobile: n,
            loadDurationMs: i,
            activity: a,
            customStatusActivity: s,
            status: o
        } = e;
        l.default.track(r.rMx.DM_PROFILE_VIEWED, {
            has_mobile_indicator: n,
            has_activity: null != a && (null == a ? void 0 : a.type) !== r.IIU.CUSTOM_STATUS,
            has_game_activity: (null == a ? void 0 : a.type) === r.IIU.PLAYING,
            load_duration_ms: i,
            profile_user_status: o,
            has_custom_status: null != s,
            has_profile_effect: null != t.profileEffectId,
            ...d(t)
        });
    }, c = (e, t) => {
        l.default.track(r.rMx.DM_PROFILE_TOGGLED, {
            is_profile_open: t,
            ...d(e)
        });
    }, d = e => {
        var t;
        if (null == e)
            return {};
        let n = e.userId, l = null != i.Z.getAnyStreamForUser(n), o = a.Z.findActivity(n, e => {
                let {type: t} = e;
                return l ? t === r.IIU.PLAYING : t !== r.IIU.CUSTOM_STATUS;
            }), c = null == o ? void 0 : o.assets, d = s.Z.isFriend(n);
        return {
            has_images: !!(null !== (t = null == c ? void 0 : c.large_image) && void 0 !== t ? t : null == c ? void 0 : c.small_image),
            is_friend: d,
            viewed_profile_user_id: n,
            profile_has_nitro_customization: e.hasPremiumCustomization(),
            profile_has_theme_color_customized: e.hasThemeColors(),
            profile_has_theme_animation: null != e.popoutAnimationParticleType
        };
    };
