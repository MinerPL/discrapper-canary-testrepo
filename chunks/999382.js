let r, i, a, o, s, l, u, c;
n(47120), n(724458);
var d, _, E, f, h = n(392711), p = n.n(h), m = n(913527), I = n.n(m), T = n(442837), g = n(544891), S = n(433517), A = n(570140), N = n(749210), v = n(131704), O = n(601964), R = n(758449), C = n(598077), y = n(430824), D = n(594174), L = n(709054), b = n(372454), M = n(330010), P = n(981631), U = n(731455), w = n(135899);
let x = [
        'name',
        'description',
        'icon',
        'splash',
        'banner',
        'homeHeader',
        'afkChannelId',
        'afkTimeout',
        'systemChannelId',
        'verificationLevel',
        'defaultMessageNotifications',
        'explicitContentFilter',
        'features',
        'systemChannelFlags',
        'preferredLocale',
        'rulesChannelId',
        'safetyAlertsChannelId',
        'discoverySplash',
        'publicUpdatesChannelId',
        'premiumProgressBarEnabled',
        'clan'
    ], G = new Set([
        'icon',
        'splash',
        'banner',
        'discoverySplash',
        'homeHeader'
    ]), k = !1, B = P.QZA.CLOSED, F = {}, V = !1, H = null, Z = null, Y = 0, j = P.BpS.NONE, W = null, K = {
        primaryCategoryId: U.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: U.Vb,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ''
    }, z = !1, q = K, Q = K, X = null, $ = 0, J = null, ee = null, et = null;
function en(e) {
    if (null == s || null == o || o.id !== e)
        return !1;
    let t = y.Z.getGuild(e);
    return null != t && (o === s ? s = o = t : o = t, !0);
}
function er(e) {
    var t;
    let {
            guildId: n,
            section: i,
            subsection: a,
            location: u
        } = e, d = y.Z.getGuild(n);
    if (null == d)
        return ei();
    o = s = d, B = P.QZA.OPEN, F = {}, l = L.default.castGuildIdAsEveryoneGuildRoleId(n), j = s.mfaLevel, Q = q, c = null, W = u;
    ea({
        section: null !== (t = null != i ? i : r) && void 0 !== t ? t : P.pNK.OVERVIEW,
        subsection: null != a ? a : null
    });
}
function ei() {
    k = !1, B = P.QZA.CLOSED, o = s = null, V = !1, H = null, Z = null, Y = 0, X = null, ee = null, et = null, r = null, i = null, a = null, j = P.BpS.NONE, u = void 0;
}
function ea(e) {
    if (null == s)
        return !1;
    let t = r;
    if (r = e.section, i = e.subsection, r === P.pNK.BANS) {
        let {enabled: e} = b.T.getCurrentConfig({
            guildId: s.id,
            location: '7f0c91_1'
        });
        !e && N.Z.fetchGuildBans(s.id);
    } else if (r === P.pNK.INSTANT_INVITES)
        g.tn.get({
            url: P.ANM.GUILD_INSTANT_INVITES(s.id),
            oldFormErrors: !0
        }).then(e => {
            A.Z.dispatch({
                type: 'GUILD_SETTINGS_LOADED_INVITES',
                invites: e.body
            });
        });
    else if (r === P.pNK.WIDGET)
        g.tn.get({
            url: P.ANM.GUILD_WIDGET(s.id),
            oldFormErrors: !0
        }).then(e => {
            A.Z.dispatch({
                type: 'GUILD_SETTINGS_SET_WIDGET',
                enabled: e.body.enabled,
                channelId: e.body.channel_id
            });
        });
    else if (r === P.pNK.INTEGRATIONS || r === P.pNK.ROLES) {
        if (l = null, t !== e.section)
            return es(e);
    } else
        r === P.pNK.MEMBERS ? l = s.getEveryoneRoleId() : r === P.pNK.VANITY_URL ? g.tn.get({
            url: P.ANM.GUILD_VANITY_URL(s.id),
            oldFormErrors: !0
        }).then(e => {
            let {
                body: {
                    code: t,
                    uses: n,
                    error: r
                }
            } = e;
            A.Z.dispatch({
                type: 'GUILD_SETTINGS_SET_VANITY_URL',
                code: t,
                uses: n,
                error: r
            });
        }) : r === P.pNK.SAFETY && A.Z.dispatch({
            type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
            subsection: null == i ? P.KsC.SAFETY_OVERVIEW : i
        });
}
function eo(e) {
    var t;
    return new R.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new C.Z(e.inviter) : null,
        channel: (0, v.jD)(e.channel),
        guild: null != e.guild ? new O.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: I()(null !== (t = e.created_at) && void 0 !== t ? t : void 0)
    });
}
function es(e) {
    if (null == s || B !== P.QZA.OPEN || 'GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== s.id)
        return !1;
    (0, M.i)(s.id);
}
class el extends (d = T.ZP.Store) {
    initialize() {
        this.waitFor(y.Z, D.default);
    }
    getMetadata() {
        return Q;
    }
    hasChanges() {
        return !p().isEqual(s, o) || !p().isEqual(Q, q);
    }
    isOpen() {
        return k;
    }
    getSavedRouteState() {
        return u;
    }
    getSection() {
        return r;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != s ? s.id : null;
    }
    showPublicSuccessModal() {
        return !S.K.get(w.zs);
    }
    getGuild() {
        return s;
    }
    isSubmitting() {
        return B === P.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return z;
    }
    getErrors() {
        return F;
    }
    getSelectedRoleId() {
        return l;
    }
    getSlug() {
        return c;
    }
    getBans() {
        return [
            X,
            $
        ];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: et,
            section: r,
            subsection: i,
            errors: F,
            guild: s,
            bans: X,
            bansVersion: $,
            invites: ee,
            selectedRoleId: l,
            embedEnabled: V,
            embedChannelId: H,
            mfaLevel: j,
            searchQuery: a,
            vanityURLCode: Z,
            vanityURLUses: Y,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: Q,
            analyticsLocation: W,
            isGuildMetadataLoaded: z
        };
    }
}
f = 'GuildSettingsStore', (E = 'displayName') in (_ = el) ? Object.defineProperty(_, E, {
    value: f,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : _[E] = f, t.Z = new el(A.Z, __OVERLAY__ ? {} : {
    GUILD_SETTINGS_INIT: er,
    GUILD_SETTINGS_OPEN: function (e) {
        k = !0, er(e);
    },
    GUILD_SETTINGS_CLOSE: ei,
    GUILD_SETTINGS_UPDATE: function (e) {
        if (null == s)
            return !1;
        x.forEach(t => {
            null != s && e.hasOwnProperty(t) && (s = s.set(t, e[t]));
        }), !function () {
            if (null == s)
                return;
            let e = s.toJS(), t = o.toJS();
            !x.some(n => e[n] !== t[n]) && (s = o);
        }();
    },
    GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
        let {guildId: t} = e;
        F = {};
        let n = y.Z.getGuild(t);
        null != n && (o = s = n);
    },
    GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
        let {state: t} = e;
        return u = t, !1;
    },
    GUILD_SETTINGS_SUBMIT: function () {
        B = P.QZA.SUBMITTING, F = {};
    },
    GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
        B = P.QZA.OPEN;
    },
    GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
        var t;
        B = P.QZA.OPEN, r = null != r ? r : P.pNK.OVERVIEW, i = null, F = null !== (t = e.errors) && void 0 !== t ? t : {};
    },
    GUILD_SETTINGS_SET_SECTION: ea,
    GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
        a = e.searchQuery;
    },
    GUILD_SETTINGS_LOADED_BANS: function (e) {
        X = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map()), $++;
    },
    GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
        let {
            bans: t,
            guildId: n
        } = e;
        (J !== n || null == X) && (J = n, X = new Map()), X = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), X), $++;
    },
    GUILD_SETTINGS_LOADED_INVITES: function (e) {
        ee = e.invites.reduce((e, t) => (e[t.code] = eo(t), e), {});
    },
    GUILD_SETTINGS_SET_WIDGET: function (e) {
        V = e.enabled, H = e.channelId;
    },
    GUILD_SETTINGS_SET_VANITY_URL: function (e) {
        var t;
        Z = null !== (t = e.code) && void 0 !== t ? t : null, Y = e.uses;
    },
    GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
        let {level: t} = e;
        j = t;
    },
    GUILD_SETTINGS_ROLE_SELECT: function (e) {
        let {roleId: t} = e;
        l = null != t ? t : null;
    },
    GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
        et = e.integrations;
    },
    GUILD_BAN_ADD: function (e) {
        let {
            user: t,
            guildId: n
        } = e;
        if (null == X || null == s || s.id !== n)
            return !1;
        X.set(t.id, {
            user: t,
            reason: null
        }), $++;
    },
    GUILD_BAN_REMOVE: function (e) {
        let {
            user: t,
            guildId: n
        } = e;
        if (null == X || null == s || s.id !== n)
            return !1;
        X.delete(t.id), $++;
    },
    GUILD_ROLE_CREATE: function (e) {
        let {guildId: t} = e;
        if (!en(t))
            return !1;
    },
    GUILD_ROLE_UPDATE: function (e) {
        let {guildId: t} = e;
        if (!en(t))
            return !1;
    },
    GUILD_ROLE_DELETE: function (e) {
        let {
            guildId: t,
            roleId: n
        } = e;
        if (!en(t))
            return !1;
        l === n && (l = null);
    },
    GUILD_UPDATE: function (e) {
        if (null == s || s.id !== e.guild.id)
            return !1;
        {
            let e = y.Z.getGuild(s.id);
            if (null == e)
                return !1;
            let t = o = e, n = s.toJS();
            x.forEach(e => {
                if (!G.has(e) && ('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e || n[e] !== w.b4)) {
                    if ('features' === e) {
                        t.set(e, new Set(n[e]));
                        return;
                    }
                    t = t.set(e, n[e]);
                }
            }), s = t;
        }
    },
    GUILD_DELETE: function (e) {
        if (null == s || s.id !== e.guild.id)
            return !1;
        ei();
    },
    USER_CONNECTIONS_UPDATE: es,
    GUILD_INTEGRATIONS_UPDATE: es,
    INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
        ee = { ...ee }, delete ee[e.code];
    },
    INSTANT_INVITE_CREATE_SUCCESS: function (e) {
        ee = {
            ...ee,
            [e.invite.code]: eo(e.invite)
        };
    },
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
        var t, n, r, i, a, o, l, u, c, d;
        let {
            guildId: _,
            metadata: E
        } = e;
        null != s && _ === s.id && (!1 === z && (z = !0), Q = q = {
            primaryCategoryId: null !== (t = E.primaryCategoryId) && void 0 !== t ? t : U.o3,
            secondaryCategoryIds: null !== (n = E.secondaryCategoryIds) && void 0 !== n ? n : [],
            keywords: null !== (r = E.keywords) && void 0 !== r ? r : [],
            emojiDiscoverabilityEnabled: null !== (i = E.emojiDiscoverabilityEnabled) && void 0 !== i ? i : U.Vb,
            partnerActionedTimestamp: null !== (a = E.partnerActionedTimestamp) && void 0 !== a ? a : null,
            partnerApplicationTimestamp: null !== (o = E.partnerApplicationTimestamp) && void 0 !== o ? o : null,
            isPublished: null !== (l = E.isPublished) && void 0 !== l && l,
            reasonsToJoin: null !== (u = E.reasonsToJoin) && void 0 !== u ? u : [],
            socialLinks: null !== (c = E.socialLinks) && void 0 !== c ? c : [],
            about: null !== (d = E.about) && void 0 !== d ? d : ''
        }, F = {});
    },
    GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
        q = Q = K;
    },
    GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
        let {
            guildId: t,
            categoryId: n
        } = e;
        null != s && t === s.id && (Q = {
            ...Q,
            secondaryCategoryIds: [
                ...Q.secondaryCategoryIds,
                n
            ]
        }, q = {
            ...q,
            secondaryCategoryIds: [
                ...q.secondaryCategoryIds,
                n
            ]
        });
    },
    GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
        let t, {
                guildId: n,
                categoryId: r
            } = e;
        if (null == s || n !== s.id)
            return;
        let i = Q.secondaryCategoryIds.indexOf(r);
        -1 !== i && ((t = [...Q.secondaryCategoryIds]).splice(i, 1), Q = {
            ...Q,
            secondaryCategoryIds: t
        }), -1 !== (i = q.secondaryCategoryIds.indexOf(r)) && ((t = [...q.secondaryCategoryIds]).splice(i, 1), q = {
            ...q,
            secondaryCategoryIds: t
        });
    },
    GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
        let {
            guildId: t,
            errors: n
        } = e;
        null != s && t === s.id && (F = null != n ? n : {});
    },
    GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
        let {
            guildId: t,
            primaryCategoryId: n,
            keywords: r,
            emojiDiscoverabilityEnabled: i,
            isPublished: a,
            reasonsToJoin: o,
            socialLinks: l,
            about: u
        } = e;
        null != s && t === s.id && (Q = {
            ...Q,
            primaryCategoryId: null != n ? n : Q.primaryCategoryId,
            keywords: null != r ? r : Q.keywords,
            emojiDiscoverabilityEnabled: null != i ? i : Q.emojiDiscoverabilityEnabled,
            isPublished: null != a ? a : Q.isPublished,
            reasonsToJoin: null != o ? o : Q.reasonsToJoin,
            socialLinks: null != l ? l : Q.socialLinks,
            about: null != u ? u : Q.about
        });
    },
    GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
        let {
            guildId: t,
            errors: n
        } = e;
        null != s && t === s.id && (F = null != n ? n : {});
    },
    GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
        let {slug: t} = e;
        c = t;
    },
    GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
        let {} = e;
        c = null;
    }
});
