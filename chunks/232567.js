n.d(t, {
    In: function () {
        return I;
    },
    Lr: function () {
        return h;
    },
    PR: function () {
        return m;
    },
    k: function () {
        return f;
    },
    mB: function () {
        return p;
    }
}), n(789020);
var r = n(512722), i = n.n(r), a = n(525769), o = n(259443), s = n(544891), l = n(570140), u = n(598077), c = n(594174), d = n(573261), _ = n(981631);
let E = new o.Y('UserProfileModalActionCreators');
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
            withAnalyticsToken: t = !1
        } = e;
    return s.tn.get({
        url: _.ANM.ME,
        query: { with_analytics_token: t },
        oldFormErrors: !0
    }).then(e => (l.Z.dispatch({
        type: 'CURRENT_USER_UPDATE',
        user: e.body,
        analyticsToken: t ? e.body.analytics_token : void 0
    }), new u.Z(e.body)));
}
function h() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return d.Z.patch({
        url: _.ANM.USER_AGREEMENTS,
        trackedActionData: { event: a.a.USER_ACCEPT_AGREEMENTS },
        body: {
            terms: e,
            privacy: t
        },
        oldFormErrors: !0
    }).then(() => !0, () => !1);
}
function p(e, t) {
    let n = c.default.getCurrentUser();
    i()(null != n, 'setFlag: user cannot be undefined');
    let r = t ? n.flags | e : n.flags & ~e;
    return s.tn.patch({
        url: _.ANM.ME,
        oldFormErrors: !0,
        body: { flags: r }
    });
}
function m(e) {
    let t = c.default.getUser(e);
    return null != t ? Promise.resolve(t) : s.tn.get({
        url: _.ANM.USER(e),
        oldFormErrors: !0
    }).then(t => (l.Z.dispatch({
        type: 'USER_UPDATE',
        user: t.body
    }), c.default.getUser(e)));
}
async function I(e) {
    let {
            friendToken: t,
            withMutualGuilds: n,
            withMutualFriendsCount: r,
            withMutualFriends: i,
            guildId: a,
            connectionsRoleId: o,
            abortSignal: u
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = arguments.length > 2 ? arguments[2] : void 0;
    l.Z.dispatch({
        type: 'USER_PROFILE_FETCH_START',
        userId: e
    });
    try {
        let d = await s.tn.get({
            url: _.ANM.USER_PROFILE(e),
            query: {
                friend_token: t,
                with_mutual_guilds: n,
                with_mutual_friends: i,
                with_mutual_friends_count: r && (null == i || !i),
                guild_id: a,
                connections_role_id: o
            },
            oldFormErrors: !0,
            signal: u
        });
        return null == c || c(d.body, a), l.Z.dispatch({
            type: 'USER_UPDATE',
            user: d.body.user
        }), l.Z.dispatch({
            type: 'USER_PROFILE_FETCH_SUCCESS',
            ...d.body
        }), null != a && null != d.body.guild_member && l.Z.dispatch({
            type: 'GUILD_MEMBER_PROFILE_UPDATE',
            guildId: a,
            guildMember: d.body.guild_member
        }), d.body;
    } catch (t) {
        throw null != t && (null == t ? void 0 : t.body) != null && E.warn('fetchProfile error: '.concat(t.body.code, ' - ').concat(t.body.message)), l.Z.dispatch({
            type: 'USER_PROFILE_FETCH_FAILURE',
            userId: e
        }), t;
    }
}
