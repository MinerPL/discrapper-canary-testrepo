n.d(t, {
    Af: function () {
        return T;
    },
    B3: function () {
        return g;
    },
    CK: function () {
        return x;
    },
    EK: function () {
        return L;
    },
    GO: function () {
        return m;
    },
    GS: function () {
        return R;
    },
    Gh: function () {
        return B;
    },
    Lp: function () {
        return I;
    },
    Lx: function () {
        return G;
    },
    Oe: function () {
        return A;
    },
    Pq: function () {
        return y;
    },
    Q2: function () {
        return b;
    },
    Qh: function () {
        return N;
    },
    TE: function () {
        return v;
    },
    Vr: function () {
        return h;
    },
    _9: function () {
        return C;
    },
    _v: function () {
        return F;
    },
    aC: function () {
        return D;
    },
    bH: function () {
        return P;
    },
    dx: function () {
        return S;
    },
    hx: function () {
        return p;
    },
    j$: function () {
        return k;
    },
    jK: function () {
        return E;
    },
    pl: function () {
        return U;
    },
    r: function () {
        return w;
    },
    r2: function () {
        return M;
    },
    tv: function () {
        return O;
    },
    u0: function () {
        return f;
    }
});
var r = n(704215),
    i = n(229893),
    a = n(605236),
    s = n(314897),
    o = n(271383),
    l = n(626135),
    u = n(308083),
    c = n(981631),
    d = n(976757),
    _ = n(921944);
function E(e) {
    let { outcome: t } = null != e ? e : {};
    return {
        recommendation_id: i.Z.getCurrentRecommendationId(),
        recommendation_context: d.Br.GLOBAL_DISCOVERY_TOP_PICKS,
        recommendation_outcome: null != t ? t : d.qz.SHOWN
    };
}
function f(e) {
    let { guildId: t, hasJoinRequest: n, source: r, messageId: i, tagUserId: a, location: u } = e,
        d = s.default.getId(),
        _ = o.ZP.getMember(t, s.default.getId()),
        E = (null == _ ? void 0 : _.joinedAt) != null;
    l.default.track(c.rMx.CLAN_PROFILE_VIEWED, {
        guild_id: t,
        is_member: E,
        has_join_request: n,
        source: r,
        location: u,
        viewing_user_id: d,
        tag_owner_user_id: a,
        message_id: i
    });
}
function h(e) {
    let { guildId: t, source: n, location: r, messageId: i, tagUserId: a } = e,
        o = s.default.getId();
    l.default.track(c.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
        ...E(),
        guild_id: t,
        source: n,
        location: r,
        viewing_user_id: o,
        tag_owner_user_id: a,
        message_id: i
    });
}
function p(e) {
    let { guildId: t, userId: n, source: r } = e;
    l.default.track(c.rMx.CLAN_ADOPT_IDENTITY, {
        guild_id: t,
        user_id: n,
        source: r
    });
}
function I(e, t) {
    l.default.track(c.rMx.CLAN_CONVERT_STEP_VIEWED, {
        guild_id: e,
        step: t
    });
}
function m(e, t) {
    l.default.track(c.rMx.CLAN_SETTINGS_VIEWED, {
        guild_id: e,
        page: t
    });
}
function T(e) {
    l.default.track(c.rMx.CLAN_SETTINGS_SAVED, { guild_id: e });
}
function S(e) {
    l.default.track(c.rMx.CLAN_CONVERT_SUCCESS_MODAL_VIEWED, { guild_id: e });
}
function g(e, t) {
    l.default.track(c.rMx.CLAN_CONVERT_SUCCESS_MODAL_CONFIRM, {
        guild_id: e,
        enable_tag: t
    });
}
function A(e, t) {
    l.default.track(c.rMx.CLAN_DISCOVERY_VIEWED, {
        ...E(),
        section: e,
        application_ids: t.games,
        playstyle: t.playstyle,
        traits: t.traits
    });
}
function N(e) {
    switch (e) {
        case u.Wy.GAMES:
            return 'games';
        case u.Wy.PLAYSTYLE:
            return 'playstyle';
        case u.Wy.UTILITY_TRAITS:
            return 'utility_traits';
        case u.Wy.INTERESTS:
            return 'interests';
        case u.Wy.DESCRIPTION:
            return 'description';
        case u.Wy.CUSTOMIZE_TAG_BADGE:
            return 'tag';
        case u.Wy.CUSTOMIZE_BANNER:
            return 'banner';
        case u.Wy.MEMBER_APPLICATION:
            return 'member_application';
        default:
            return e;
    }
}
function O(e) {
    let { location: t, treatment: n, gameApplicationId: r } = e;
    l.default.track(c.rMx.CLAN_USER_INVITE_VIEWED, {
        location: t,
        treatment: n,
        game_application_id: r
    });
}
function R(e) {
    let { location: t, treatment: n, gameApplicationId: r } = e;
    l.default.track(c.rMx.CLAN_USER_INVITE_CLICKED, {
        location: t,
        treatment: n,
        game_application_id: r
    });
}
function v(e) {
    let { guildId: t, location: n } = e;
    l.default.track(c.rMx.CLAN_ADMIN_INVITE_VIEWED, {
        guild_id: t,
        location: n
    });
}
function C(e) {
    let { guildId: t, location: n } = e;
    l.default.track(c.rMx.CLAN_ADMIN_INVITE_CLICKED, {
        guild_id: t,
        location: n
    });
}
function L(e) {
    let { guildId: t, isMember: n, hasJoinRequest: r, affinity: i, index: a, position: s } = e;
    l.default.track(c.rMx.CLAN_DISCOVERY_CARD_CLICKED, {
        ...E(),
        guild_id: t,
        is_member: n,
        has_join_request: r,
        affinity: i,
        index: a,
        position: s
    });
}
function y(e) {
    l.default.track(c.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id: e });
}
function D(e) {
    var t;
    let { guildId: n, messageId: r, channelId: i, joinRequestStatus: a, joinRequestUserId: u } = e,
        d = s.default.getId(),
        _ = (null === (t = o.ZP.getMember(n, d)) || void 0 === t ? void 0 : t.joinedAt) != null;
    l.default.track(c.rMx.CLAN_SEND_INTERVIEW_MESSAGE, {
        guild_id: n,
        channel_id: i,
        message_id: r,
        message_user_id: d,
        is_member: _,
        join_request_status: a,
        join_request_user_id: u
    });
}
function b(e) {
    let { guildId: t, source: n, tab: r } = e;
    l.default.track(c.rMx.CLAN_APPLICATION_NAVIGATION, {
        guild_id: t,
        source: n,
        tab: r
    });
}
function M(e) {
    let { guildId: t, actionType: n, applicationUserId: r } = e;
    l.default.track(c.rMx.CLAN_APPLICATION_ACTION, {
        guild_id: t,
        action_type: n,
        application_user_id: r,
        viewing_user_id: s.default.getId()
    });
}
function P(e) {
    let { guildId: t, applicationUserId: n, applicationStatus: r } = e;
    l.default.track(c.rMx.CLAN_APPLICATION_VIEWED, {
        guild_id: t,
        viewing_user_id: s.default.getId(),
        application_user_id: n,
        application_status: r
    });
}
function U(e) {
    let { originGuildId: t, tagGuildId: n, tagUserId: i, messageId: o, location: u } = e;
    if (!(0, a.un)(r.z.CLAN_TAG_WAITLIST))
        l.default.track(c.rMx.CLAN_APPLY_WAITLIST, {
            user_id: s.default.getId(),
            origin_guild_id: t,
            tag_guild_id: n,
            tag_user_id: i,
            message_id: o,
            location: u
        }),
            (0, a.EW)(r.z.CLAN_TAG_WAITLIST, {
                dismissAction: _.L.TAKE_ACTION,
                forceTrack: !0
            });
}
function w(e) {
    let { guildId: t, position: n } = e;
    l.default.track(c.rMx.GUILD_APPLICATION_INTENDS_TO_JOIN, {
        ...E({ outcome: d.qz.HIT }),
        guild_id: t,
        position: n
    });
}
function x(e) {
    let { guildId: t, position: n } = e;
    l.default.track(c.rMx.DISCOVERY_GUILD_IMPRESSIONED, {
        ...E(),
        guild_id: t,
        position: n
    });
}
function G(e) {
    let { fromPage: t, toPage: n } = e;
    l.default.track(c.rMx.DISCOVERY_GUILD_PAGINATION_CLICKED, {
        ...E(),
        from_page: t,
        to_page: n
    });
}
function k(e) {
    let { guildId: t, position: n, isFavorited: r } = e;
    l.default.track(c.rMx.DISCOVERY_GUILD_FAVORITED, {
        ...E(),
        guild_id: t,
        position: n,
        favorite: r
    });
}
function B(e) {
    let { feature: t, guildId: n, position: r } = e;
    l.default.track(c.rMx.DISCOVERY_GUILD_CARD_INTERACTION, {
        ...E(),
        guild_id: n,
        feature: t,
        position: r
    });
}
function F(e) {
    let { guildId: t, position: n } = e;
    l.default.track(c.rMx.GUILD_APPLICATION_ABANDONED, {
        ...E({ outcome: d.qz.HIT }),
        guild_id: t,
        position: n
    });
}
