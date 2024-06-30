n.r(t), n.d(t, {
    closeUserProfileModal: function () {
        return u;
    },
    openUserProfileModal: function () {
        return l;
    }
});
var r = n(570140), i = n(232567), a = n(594174), o = n(484459), s = n(981631);
function l(e) {
    let {
            userId: t,
            guildId: n = s.ME,
            channelId: l,
            messageId: u,
            roleId: c,
            section: d,
            subsection: _,
            friendToken: E,
            showGuildProfile: f,
            analyticsLocation: h,
            sourceAnalyticsLocations: p
        } = e, m = a.default.getUser(t), I = null != n && n !== s.ME ? n : void 0;
    if (null == m)
        return (0, i.In)(t, {
            guildId: f ? I : void 0,
            withMutualGuilds: !0,
            withMutualFriends: !0,
            friendToken: E
        }).then(() => {
            r.Z.dispatch({
                type: 'USER_PROFILE_MODAL_OPEN',
                userId: t,
                guildId: null != n ? n : void 0,
                channelId: null != l ? l : void 0,
                messageId: null != u ? u : void 0,
                roleId: null != c ? c : void 0,
                section: d,
                subsection: _,
                friendToken: E,
                showGuildProfile: f,
                analyticsLocation: h,
                sourceAnalyticsLocations: p
            });
        });
    (0, o.W)(m, {
        guildId: f ? I : void 0,
        withMutualGuilds: !0,
        withMutualFriends: !0,
        friendToken: E
    }), r.Z.dispatch({
        type: 'USER_PROFILE_MODAL_OPEN',
        userId: t,
        guildId: null != n ? n : void 0,
        channelId: null != l ? l : void 0,
        messageId: null != u ? u : void 0,
        roleId: null != c ? c : void 0,
        section: d,
        subsection: _,
        friendToken: E,
        showGuildProfile: f,
        analyticsLocation: h,
        sourceAnalyticsLocations: p
    });
}
function u() {
    r.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
