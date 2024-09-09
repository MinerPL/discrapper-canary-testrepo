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
    f = t(116175),
    C = t(308083);
let h = () => ({
        gameApplicationIds: new Set(),
        playstyle: C.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [C.U6, C.U6, C.U6],
        tag: '',
        verificationForm: { ..._.t },
        badgeKind: f.ZD.SWORD,
        badgePrimaryColor: f.sg['0'].primary,
        badgeSecondaryColor: f.sg['0'].secondary,
        banner: C.qC.NIGHT_SKY,
        brandPrimaryColor: C.ym['0'].primary,
        brandSecondaryColor: C.ym['0'].secondary
    }),
    x = h(),
    p = d()(x),
    g = !1,
    T = !1,
    E = {};
class I extends (a = u.ZP.Store) {
    getState() {
        return {
            initialSettings: x,
            settings: p,
            dirty: g,
            errors: E,
            submitting: T
        };
    }
}
(s = 'ClanSettingsStore'),
    (i = 'displayName') in (r = I)
        ? Object.defineProperty(r, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = s),
    (n.Z = new I(m.Z, {
        CLAN_SETTINGS_FETCH_START: function () {
            (T = !1), (x = h()), (p = d()(x)), (g = !1), (E = {});
        },
        CLAN_SETTINGS_FETCH_SUCCESS: function (e) {
            let { settings: n } = e;
            (x = {
                ...h(),
                ...n
            }),
                (p = d()(x)),
                (g = !1);
        },
        CLAN_SETTINGS_UPDATE: function (e) {
            let { updates: n } = e;
            for (let e in ((p = {
                ...p,
                ...d()(n)
            }),
            n))
                delete E[e], (E = { ...E });
            g = !l().isEqual(l().omit(p, 'verificationForm'), l().omit(x, 'verificationForm'));
        },
        CLAN_SETTINGS_SUBMIT: function () {
            (T = !0), (E = {});
        },
        CLAN_SETTINGS_SUBMIT_SUCCESS: function () {
            (T = !1), (x = d()(p)), (g = !1), (E = {});
        },
        CLAN_SETTINGS_SUBMIT_ERROR: function (e) {
            let { error: n } = e;
            (T = !1),
                (E = {
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
            if (null == p.verificationForm) return !1;
            if (
                ((p = {
                    ...p,
                    verificationForm: {
                        ...p.verificationForm,
                        ...n
                    }
                }),
                t)
            ) {
                var a;
                g = !l().isEqual(p.verificationForm.formFields, null === (a = x.verificationForm) || void 0 === a ? void 0 : a.formFields);
            } else g = !1;
        }
    }));
