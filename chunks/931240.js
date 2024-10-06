n.d(t, {
    Ii: function () {
        return T;
    },
    LX: function () {
        return f;
    },
    WJ: function () {
        return _;
    },
    Zx: function () {
        return g;
    },
    _9: function () {
        return h;
    },
    aH: function () {
        return m;
    },
    mf: function () {
        return p;
    },
    nE: function () {
        return E;
    },
    nr: function () {
        return S;
    },
    sv: function () {
        return d;
    }
}),
    n(47120);
var r = n(544891),
    i = n(570140),
    a = n(479531),
    s = n(314897),
    o = n(594174),
    l = n(970606),
    u = n(981631),
    c = n(976757);
async function d(e, t) {
    i.Z.dispatch({
        type: 'CLAN_SETUP_SUBMIT',
        guildId: e
    });
    try {
        var n, s, o, l;
        await r.tn.post({
            url: u.ANM.GUILD_CONVERT_TO_CLAN(e),
            body: {
                tag: t.tag,
                description: t.description,
                play_style: t.playstyle,
                search_terms: Array.from(null !== (s = t.interests) && void 0 !== s ? s : new Set()),
                game_application_ids: Array.from(null !== (o = t.gameApplicationIds) && void 0 !== o ? o : new Set()),
                verification_form: { form_fields: null !== (l = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== l ? l : [] },
                badge: t.badgeKind,
                badge_color_primary: t.badgePrimaryColor,
                badge_color_secondary: t.badgeSecondaryColor,
                banner: t.banner,
                brand_color_primary: t.brandPrimaryColor,
                brand_color_secondary: t.brandSecondaryColor,
                wildcard_descriptors: t.wildcardDescriptors
            }
        }),
            i.Z.dispatch({
                type: 'CLAN_SETUP_SUCCESS',
                guildId: e
            });
    } catch (t) {
        throw (
            (i.Z.dispatch({
                type: 'CLAN_SETUP_ERROR',
                guildId: e,
                error: new a.Z(t)
            }),
            t)
        );
    }
}
async function _(e) {
    let t = await r.tn.get({ url: u.ANM.GUILD_CLAN_DISCOVERY_INFO(e) });
    return (0, c.Gh)(t.body);
}
async function E(e, t, n) {
    try {
        null != e &&
            !0 === t &&
            (0, l.hx)({
                guildId: e,
                userId: s.default.getId(),
                source: n
            });
        let a = await r.tn.put({
            url: u.ANM.USER_SET_CLAN_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            }
        });
        i.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: {
                ...o.default.getCurrentUser(),
                ...a.body
            }
        });
    } catch (e) {
        return;
    }
}
function f() {
    i.Z.dispatch({ type: 'CLAN_SETUP_RESET' });
}
function h(e, t) {
    i.Z.dispatch({
        type: 'CLAN_SETUP_UPDATE',
        guildId: e,
        updates: t
    });
}
function p(e, t) {
    i.Z.dispatch({
        type: 'CLAN_SETTINGS_UPDATE',
        guildId: e,
        updates: t
    });
}
let I = (e) => {
    var t, n, r, i, a, s;
    return {
        tag: e.tag,
        gameApplicationIds: new Set(null !== (r = e.game_application_ids) && void 0 !== r ? r : []),
        interests: new Set(null !== (i = e.search_terms) && void 0 !== i ? i : []),
        playstyle: e.play_style,
        description: e.description,
        wildcardDescriptors: e.wildcard_descriptors,
        verificationForm: {
            description: null !== (a = null === (t = e.verification_form) || void 0 === t ? void 0 : t.description) && void 0 !== a ? a : '',
            formFields: null !== (s = null === (n = e.verification_form) || void 0 === n ? void 0 : n.form_fields) && void 0 !== s ? s : [],
            version: ''
        },
        badgeKind: e.badge,
        badgePrimaryColor: e.badge_color_primary,
        badgeSecondaryColor: e.badge_color_secondary,
        banner: e.banner,
        brandPrimaryColor: e.brand_color_primary,
        brandSecondaryColor: e.brand_color_secondary
    };
};
async function m(e) {
    i.Z.dispatch({ type: 'CLAN_SETTINGS_FETCH_START' });
    let t = await r.tn.get({ url: u.ANM.CLAN_SETTINGS(e) });
    i.Z.dispatch({
        type: 'CLAN_SETTINGS_FETCH_SUCCESS',
        guildId: e,
        settings: I(t.body)
    });
}
async function T(e, t) {
    i.Z.dispatch({
        type: 'CLAN_SETTINGS_SUBMIT',
        guildId: e
    });
    try {
        var n, s, o, l;
        let a = await r.tn.patch({
            url: u.ANM.CLAN_SETTINGS(e),
            body: {
                tag: t.tag,
                description: t.description,
                play_style: t.playstyle,
                search_terms: Array.from(null !== (s = t.interests) && void 0 !== s ? s : new Set()),
                game_application_ids: Array.from(null !== (o = t.gameApplicationIds) && void 0 !== o ? o : new Set()),
                verification_form: { form_fields: null !== (l = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== l ? l : [] },
                badge: t.badgeKind,
                badge_color_primary: t.badgePrimaryColor,
                badge_color_secondary: t.badgeSecondaryColor,
                banner: t.banner,
                brand_color_primary: t.brandPrimaryColor,
                brand_color_secondary: t.brandSecondaryColor,
                wildcard_descriptors: t.wildcardDescriptors
            }
        });
        return i.Z.dispatch({ type: 'CLAN_SETTINGS_SUBMIT_SUCCESS' }), a.body;
    } catch (e) {
        throw (
            (i.Z.dispatch({
                type: 'CLAN_SETTINGS_SUBMIT_ERROR',
                error: new a.Z(e)
            }),
            e)
        );
    }
}
async function S(e) {
    try {
        await r.tn.post({ url: u.ANM.DISABLE_CLAN(e) });
    } catch (e) {
        throw e;
    }
}
async function g(e) {
    try {
        await r.tn.post({ url: u.ANM.JOIN_WUMPUS_FEEDBACK_SQUAD(e) });
    } catch (e) {
        throw e;
    }
}
