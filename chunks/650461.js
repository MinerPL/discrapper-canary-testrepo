E.d(_, {
    Wg: function () {
        return o;
    }
}),
    E(47120);
var s,
    T = E(470079),
    I = E(392711),
    n = E.n(I),
    t = E(442837),
    A = E(570140),
    r = E(944163),
    a = E(709054),
    N = E(116175),
    l = E(308083);
function L(e, _, E) {
    return (
        _ in e
            ? Object.defineProperty(e, _, {
                  value: E,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[_] = E),
        e
    );
}
let S = new Map(),
    D = new Map(),
    U = !1,
    G = Object.freeze({
        gameApplicationIds: new Set(),
        playstyle: l.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [l.U6, l.U6, l.U6],
        tag: '',
        verificationForm: { ...r.t },
        badgeKind: N.ZD.SWORD,
        badgePrimaryColor: void 0,
        badgeSecondaryColor: void 0,
        banner: l.qC.NIGHT_SKY,
        brandPrimaryColor: void 0,
        brandSecondaryColor: void 0,
        currentStep: l.Wy.GAMES,
        furthestStep: l.Wy.GAMES,
        requiredGameId: void 0
    });
function O() {
    let e = n().cloneDeep(G);
    return (e.badgeKind = (0, N.lP)()), (e.banner = (0, l.i1)()), e;
}
function o() {
    return T.useState(() => O())[0];
}
function i(e) {
    var _;
    return null !== (_ = S.get(e)) && void 0 !== _ ? _ : O();
}
function M(e, _) {
    let E = i(e);
    S.set(e, {
        ...E,
        ..._
    });
    let s = D.get(e);
    if (null != s) {
        let E = { ...s };
        Object.keys(_).forEach((e) => {
            delete E[e];
        }),
            D.set(e, E);
    }
}
class u extends (s = t.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            a.default.keys(e.progressByGuild).forEach((_) => {
                var E, s, T, I, n;
                S.set(_, {
                    gameApplicationIds: new Set((E = e.progressByGuild[_]).gameApplicationIds),
                    playstyle: E.playstyle,
                    interests: new Set(E.interests),
                    description: E.description,
                    wildcardDescriptors: null !== (s = E.wildcardDescriptors) && void 0 !== s ? s : [l.U6, l.U6, l.U6],
                    tag: E.tag,
                    verificationForm: null !== (T = E.verificationForm) && void 0 !== T ? T : { ...r.t },
                    badgeKind: null !== (I = E.badgeKind) && void 0 !== I ? I : N.ZD.SWORD,
                    badgePrimaryColor: E.badgePrimaryColor,
                    badgeSecondaryColor: E.badgeSecondaryColor,
                    banner: null !== (n = E.banner) && void 0 !== n ? n : l.qC.NIGHT_SKY,
                    brandPrimaryColor: E.brandPrimaryColor,
                    brandSecondaryColor: E.brandSecondaryColor,
                    currentStep: E.currentStep,
                    furthestStep: E.furthestStep,
                    requiredGameId: E.requiredGameId
                });
            });
    }
    getState() {
        let e = {};
        return (
            S.forEach((_, E) => {
                var s;
                e[E] = {
                    gameApplicationIds: Array.from((s = _).gameApplicationIds),
                    playstyle: s.playstyle,
                    interests: Array.from(s.interests),
                    description: s.description,
                    wildcardDescriptors: s.wildcardDescriptors,
                    tag: s.tag,
                    verificationForm: s.verificationForm,
                    badgeKind: s.badgeKind,
                    badgePrimaryColor: s.badgePrimaryColor,
                    badgeSecondaryColor: s.badgeSecondaryColor,
                    banner: s.banner,
                    brandPrimaryColor: s.brandPrimaryColor,
                    brandSecondaryColor: s.brandSecondaryColor,
                    currentStep: s.currentStep,
                    furthestStep: s.furthestStep,
                    requiredGameId: s.requiredGameId
                };
            }),
            { progressByGuild: e }
        );
    }
    getStateForGuild(e) {
        return {
            progress: S.get(e),
            errors: D.get(e),
            submitting: U
        };
    }
    getGuildIds() {
        return [...S.keys()];
    }
}
L(u, 'displayName', 'ClanSetupStore'),
    L(u, 'persistKey', 'ClanSetupStore'),
    (_.ZP = new u(A.Z, {
        CLAN_SETUP_RESET: function () {
            S.clear(), D.clear();
        },
        CLAN_SETUP_UPDATE: function (e) {
            let { guildId: _, updates: E } = e;
            M(_, E);
        },
        CLAN_SETUP_SUBMIT: function (e) {
            let { guildId: _ } = e;
            (U = !0), D.delete(_);
        },
        CLAN_SETUP_SUCCESS: function (e) {
            let { guildId: _ } = e;
            (U = !1), S.delete(_), D.delete(_);
        },
        CLAN_SETUP_ERROR: function (e) {
            let { guildId: _, error: E } = e;
            (U = !1),
                D.set(_, {
                    gameApplicationIds: E.getFirstFieldErrorMessage('game_application_ids'),
                    playstyle: E.getFirstFieldErrorMessage('play_style'),
                    description: E.getFirstFieldErrorMessage('description'),
                    wildcardDescriptors: E.getFirstFieldErrorMessage('wildcard_descriptors'),
                    interests: E.getFirstFieldErrorMessage('search_terms'),
                    tag: E.getFirstFieldErrorMessage('tag'),
                    verificationForm: E.getFirstFieldErrorMessage(['verification_form', 'form_fields'])
                });
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let _;
            let { form: E, guildId: s, isLocalUpdate: T } = e;
            T &&
                ((_ =
                    null == E
                        ? r.t
                        : {
                              ...i(s).verificationForm,
                              ...E
                          }),
                M(s, { verificationForm: _ }));
        }
    }));
