t(47120);
var a, r, i, s, o = t(392711), l = t.n(o), c = t(906280), d = t.n(c), u = t(442837), m = t(570140), f = t(944163), C = t(116175), _ = t(308083);
let h = () => ({
        gameApplicationIds: new Set(),
        playstyle: _.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [
            _.U6,
            _.U6,
            _.U6
        ],
        tag: '',
        verificationForm: { ...f.t },
        badgeKind: C.ZD.SWORD,
        badgePrimaryColor: C.sg['0'].primary,
        badgeSecondaryColor: C.sg['0'].secondary,
        banner: _.qC.NIGHT_SKY,
        brandPrimaryColor: _.ym['0'].primary,
        brandSecondaryColor: _.ym['0'].secondary
    }), x = h(), g = d()(x), p = !1, T = !1, I = {};
class E extends (a = u.ZP.Store) {
    getState() {
        return {
            initialSettings: x,
            settings: g,
            dirty: p,
            errors: I,
            submitting: T
        };
    }
}
s = 'ClanSettingsStore', (i = 'displayName') in (r = E) ? Object.defineProperty(r, i, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[i] = s, n.Z = new E(m.Z, {
    CLAN_SETTINGS_FETCH_START: function () {
        T = !1, x = h(), g = d()(x), p = !1, I = {};
    },
    CLAN_SETTINGS_FETCH_SUCCESS: function (e) {
        let {settings: n} = e;
        x = {
            ...h(),
            ...n
        }, g = d()(x), p = !1;
    },
    CLAN_SETTINGS_UPDATE: function (e) {
        let {updates: n} = e;
        for (let e in (g = {
                ...g,
                ...d()(n)
            }, n))
            delete I[e], I = { ...I };
        p = !l().isEqual(l().omit(g, 'verificationForm'), l().omit(x, 'verificationForm'));
    },
    CLAN_SETTINGS_SUBMIT: function () {
        T = !0, I = {};
    },
    CLAN_SETTINGS_SUBMIT_SUCCESS: function () {
        T = !1, x = d()(g), p = !1, I = {};
    },
    CLAN_SETTINGS_SUBMIT_ERROR: function (e) {
        let {error: n} = e;
        T = !1, I = {
            gameApplicationIds: n.getFirstFieldErrorMessage('game_application_ids'),
            playstyle: n.getFirstFieldErrorMessage('play_style'),
            description: n.getFirstFieldErrorMessage('description'),
            wildcardDescriptors: n.getFirstFieldErrorMessage('wildcard_descriptors'),
            interests: n.getFirstFieldErrorMessage('search_terms'),
            tag: n.getFirstFieldErrorMessage('tag'),
            verificationForm: n.getFirstFieldErrorMessage([
                'verification_form',
                'form_fields'
            ])
        };
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let {
            form: n,
            isLocalUpdate: t
        } = e;
        if (null == g.verificationForm)
            return !1;
        if (g = {
                ...g,
                verificationForm: {
                    ...g.verificationForm,
                    ...n
                }
            }, t) {
            var a;
            p = !l().isEqual(g.verificationForm.formFields, null === (a = x.verificationForm) || void 0 === a ? void 0 : a.formFields);
        } else
            p = !1;
    }
});
