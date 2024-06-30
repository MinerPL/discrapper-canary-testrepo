n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(735250), s = n(470079), a = n(442837), r = n(224706), l = n(931240), o = n(650461), c = n(94963), d = n(745628), u = n(950279), _ = n(796918), E = n(513532), h = n(741595), I = n(974842), m = n(363915), p = n(359380), g = n(308083), T = n(689938);
function S(e) {
    let t = (0, o.Wg)(), {
            progress: n,
            errors: i
        } = (0, a.cj)([o.ZP], () => {
            var n;
            let i = o.ZP.getStateForGuild(e);
            return {
                progress: null !== (n = i.progress) && void 0 !== n ? n : t,
                errors: i.errors
            };
        });
    return {
        progress: n,
        errors: i,
        handleClanUpdate: s.useCallback(t => l._9(e, t), [e])
    };
}
let C = {
    [g.Wy.GAMES]: function (e) {
        let {guildId: t} = e;
        s.useEffect(() => {
            r.Z.getDetectableGames();
        }, []);
        let {
            progress: n,
            errors: a,
            handleClanUpdate: l
        } = S(t);
        return (0, i.jsx)(u.Z, {
            title: T.Z.Messages.CLAN_SETUP_GAMES_TITLE,
            description: T.Z.Messages.CLAN_SETUP_GAMES_SUBTITLE,
            handleUpdate: e => l({ gameApplicationIds: e }),
            gameApplicationIds: n.gameApplicationIds,
            requiredGameId: n.requiredGameId,
            error: null == a ? void 0 : a.gameApplicationIds
        });
    },
    [g.Wy.PLAYSTYLE]: function (e) {
        let {guildId: t} = e, {
                progress: n,
                errors: s,
                handleClanUpdate: a
            } = S(t);
        return (0, i.jsx)(h.Z, {
            title: T.Z.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
            description: T.Z.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
            handleUpdate: e => a({ playstyle: e }),
            playstyle: n.playstyle,
            error: null == s ? void 0 : s.playstyle
        });
    },
    [g.Wy.UTILITY_TRAITS]: function (e) {
        let {guildId: t} = e, {
                progress: n,
                handleClanUpdate: s
            } = S(t);
        return (0, i.jsx)(p.Z, {
            guildId: t,
            title: T.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
            description: T.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
            handleUpdate: e => s({ interests: e }),
            requiredGameId: n.requiredGameId,
            progress: n
        });
    },
    [g.Wy.INTERESTS]: function (e) {
        let {guildId: t} = e, {
                progress: n,
                errors: s,
                handleClanUpdate: a
            } = S(t);
        return (0, i.jsx)(_.Z, {
            guildId: t,
            handleUpdate: a,
            progress: n,
            error: null == s ? void 0 : s.interests
        });
    },
    [g.Wy.DESCRIPTION]: function (e) {
        let {guildId: t} = e, {
                progress: n,
                errors: s,
                handleClanUpdate: a
            } = S(t);
        return (0, i.jsx)(d.Z, {
            guildId: t,
            handleUpdate: a,
            progress: n,
            errors: s
        });
    },
    [g.Wy.CUSTOMIZE_TAG_BADGE]: function (e) {
        let {guildId: t} = e, {
                progress: n,
                errors: s,
                handleClanUpdate: a
            } = S(t);
        return (0, i.jsx)(I.Z, {
            handleUpdate: a,
            tag: n.tag,
            error: null == s ? void 0 : s.tag,
            badge: n.badgeKind,
            primaryColor: n.badgePrimaryColor,
            secondaryColor: n.badgeSecondaryColor,
            furthestStep: n.furthestStep
        });
    },
    [g.Wy.CUSTOMIZE_BANNER]: function (e) {
        let {guildId: t} = e, {
                progress: n,
                handleClanUpdate: s
            } = S(t);
        return (0, i.jsx)(c.Z, {
            handleUpdate: s,
            progress: n,
            guildId: t
        });
    },
    [g.Wy.MEMBER_APPLICATION]: function (e) {
        let {guildId: t} = e, {errors: n} = S(t);
        return (0, i.jsx)(E.Z, {
            guildId: t,
            error: null == n ? void 0 : n.verificationForm
        });
    }
};
function N(e) {
    return e.currentStep.toString();
}
function f(e) {
    let t = C[e.currentStep];
    return (0, i.jsx)(t, { guildId: e.guildId });
}
function A(e) {
    let {guildId: t} = e, n = (0, o.Wg)(), r = (0, a.e7)([o.ZP], () => {
            var e, i, s;
            return null !== (s = null === (i = o.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : null === (e = i.progress) || void 0 === e ? void 0 : e.currentStep) && void 0 !== s ? s : n.currentStep;
        }), l = s.useMemo(() => [{
                currentStep: r,
                guildId: t
            }], [
            r,
            t
        ]);
    return (0, i.jsx)(m.Z, {
        currentStep: r,
        items: l,
        renderItem: f,
        getItemKey: N
    });
}
