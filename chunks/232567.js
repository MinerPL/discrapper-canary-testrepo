n.d(t, {
    In: function () {
        return T;
    },
    Lr: function () {
        return p;
    },
    PR: function () {
        return m;
    },
    k: function () {
        return h;
    },
    mB: function () {
        return I;
    }
}),
    n(789020);
var r = n(512722),
    i = n.n(r),
    a = n(525769),
    s = n(259443),
    o = n(544891),
    l = n(570140),
    u = n(881052),
    c = n(598077),
    d = n(594174),
    _ = n(573261),
    E = n(981631);
let f = new s.Y('UserProfileModalActionCreators');
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { withAnalyticsToken: t = !1 } = e;
    return o.tn
        .get({
            url: E.ANM.ME,
            query: { with_analytics_token: t },
            oldFormErrors: !0
        })
        .then(
            (e) => (
                l.Z.dispatch({
                    type: 'CURRENT_USER_UPDATE',
                    user: e.body,
                    analyticsToken: t ? e.body.analytics_token : void 0
                }),
                new c.Z(e.body)
            )
        );
}
function p() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return _.Z.patch({
        url: E.ANM.USER_AGREEMENTS,
        trackedActionData: { event: a.a.USER_ACCEPT_AGREEMENTS },
        body: {
            terms: e,
            privacy: t
        },
        oldFormErrors: !0
    }).then(
        () => !0,
        () => !1
    );
}
function I(e, t) {
    let n = d.default.getCurrentUser();
    i()(null != n, 'setFlag: user cannot be undefined');
    let r = t ? n.flags | e : n.flags & ~e;
    return o.tn.patch({
        url: E.ANM.ME,
        oldFormErrors: !0,
        body: { flags: r }
    });
}
function m(e) {
    let t = d.default.getUser(e);
    return null != t
        ? Promise.resolve(t)
        : o.tn
              .get({
                  url: E.ANM.USER(e),
                  oldFormErrors: !0
              })
              .then(
                  (t) => (
                      l.Z.dispatch({
                          type: 'USER_UPDATE',
                          user: t.body
                      }),
                      d.default.getUser(e)
                  )
              );
}
async function T(e) {
    let { friendToken: t, withMutualGuilds: n, withMutualFriendsCount: r, withMutualFriends: i, guildId: a, connectionsRoleId: s, joinRequestId: c, abortSignal: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        _ = arguments.length > 2 ? arguments[2] : void 0;
    l.Z.dispatch({
        type: 'USER_PROFILE_FETCH_START',
        userId: e,
        guildId: a
    });
    try {
        let u = await o.tn.get({
            url: E.ANM.USER_PROFILE(e),
            query: {
                friend_token: t,
                with_mutual_guilds: n,
                with_mutual_friends: i,
                with_mutual_friends_count: r && (null == i || !i),
                guild_id: a,
                connections_role_id: s,
                join_request_id: c
            },
            oldFormErrors: !0,
            signal: d
        });
        return (
            null == _ || _(u.body, a),
            l.Z.dispatch({
                type: 'USER_UPDATE',
                user: u.body.user
            }),
            l.Z.dispatch({
                type: 'USER_PROFILE_FETCH_SUCCESS',
                ...u.body
            }),
            null != a &&
                null != u.body.guild_member &&
                l.Z.dispatch({
                    type: 'GUILD_MEMBER_PROFILE_UPDATE',
                    guildId: a,
                    guildMember: u.body.guild_member
                }),
            u.body
        );
    } catch (t) {
        throw (
            (null != t && (null == t ? void 0 : t.body) != null && f.warn('fetchProfile error: '.concat(t.body.code, ' - ').concat(t.body.message)),
            l.Z.dispatch({
                type: 'USER_PROFILE_FETCH_FAILURE',
                apiError: new u.Hx(t),
                userId: e,
                guildId: a
            }),
            t)
        );
    }
}
