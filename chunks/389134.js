t(47120);
var a,
    r,
    i,
    s,
    o = t(392711),
    l = t.n(o),
    c = t(906280),
    d = t.n(c),
    u = t(442837),
    m = t(570140),
    _ = t(944163),
    f = t(77498),
    C = t(116175),
    h = t(308083);
function x(e) {
    return new Set(Array.from(e).filter((e) => null != f.Z.getDetectableGame(e)));
}
let p = () => ({
        gameApplicationIds: new Set(),
        playstyle: h.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [h.U6, h.U6, h.U6],
        tag: '',
        verificationForm: { ..._.t },
        badgeKind: C.ZD.SWORD,
        badgePrimaryColor: C.sg['0'].primary,
        badgeSecondaryColor: C.sg['0'].secondary,
        banner: h.qC.NIGHT_SKY,
        brandPrimaryColor: h.ym['0'].primary,
        brandSecondaryColor: h.ym['0'].secondary
    }),
    g = p(),
    T = d()(g),
    E = !1,
    I = !1,
    b = {};
class N extends (a = u.ZP.Store) {
    getState() {
        return {
            initialSettings: g,
            settings: T,
            dirty: E,
            errors: b,
            submitting: I
        };
    }
}
(s = 'ClanSettingsStore'),
    (i = 'displayName') in (r = N)
        ? Object.defineProperty(r, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = s),
    (n.Z = new N(m.Z, {
        CLAN_SETTINGS_FETCH_START: function () {
            (I = !1), (g = p()), (T = d()(g)), (E = !1), (b = {});
        },
        CLAN_SETTINGS_FETCH_SUCCESS: function (e) {
            let { settings: n } = e;
            (g = {
                ...p(),
                ...n
            }),
                ((T = d()(g)).gameApplicationIds = x(T.gameApplicationIds)),
                (E = !1);
        },
        CLAN_SETTINGS_UPDATE: function (e) {
            let { updates: n } = e,
                { gameApplicationIds: t } = n;
            for (let e in (null != t && (n.gameApplicationIds = x(t)),
            (T = {
                ...T,
                ...d()(n)
            }),
            n))
                delete b[e], (b = { ...b });
            E = !l().isEqual(l().omit(T, 'verificationForm'), l().omit(g, 'verificationForm'));
        },
        CLAN_SETTINGS_SUBMIT: function () {
            (I = !0), (b = {});
        },
        CLAN_SETTINGS_SUBMIT_SUCCESS: function () {
            (I = !1), (g = d()(T)), (E = !1), (b = {});
        },
        CLAN_SETTINGS_SUBMIT_ERROR: function (e) {
            let { error: n } = e;
            (I = !1),
                (b = {
                    gameApplicationIds: n.getFirstFieldErrorMessage('game_application_ids'),
                    playstyle: n.getFirstFieldErrorMessage('play_style'),
                    description: n.getFirstFieldErrorMessage('description'),
                    wildcardDescriptors: n.getFirstFieldErrorMessage('wildcard_descriptors'),
                    interests: n.getFirstFieldErrorMessage('search_terms'),
                    tag: n.getFirstFieldErrorMessage('tag'),
                    verificationForm: n.getFirstFieldErrorMessage(['verification_form', 'form_fields'])
                });
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let { form: n, isLocalUpdate: t } = e;
            if (null == T.verificationForm) return !1;
            if (
                ((T = {
                    ...T,
                    verificationForm: {
                        ...T.verificationForm,
                        ...n
                    }
                }),
                t)
            ) {
                var a;
                E = !l().isEqual(T.verificationForm.formFields, null === (a = g.verificationForm) || void 0 === a ? void 0 : a.formFields);
            } else E = !1;
        }
    }));
