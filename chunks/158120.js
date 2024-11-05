n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(224706),
    s = n(931240),
    o = n(650461),
    c = n(598131),
    d = n(34993),
    u = n(950279),
    h = n(974842),
    m = n(363915),
    p = n(308083),
    g = n(388032);
function f(e) {
    let t = (0, o.Wg)(),
        { progress: n, errors: i } = (0, a.cj)([o.ZP], () => {
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
        handleClanUpdate: r.useCallback((t) => s._9(e, t), [e])
    };
}
let _ = {
    [p.Wy.GAMES]: function (e) {
        let { guildId: t } = e;
        r.useEffect(() => {
            l.Z.getDetectableGames();
        }, []);
        let { progress: n, errors: a, handleClanUpdate: s } = f(t);
        return (0, i.jsx)(u.Z, {
            title: g.intl.string(g.t.t6Mbq6),
            description: g.intl.string(g.t.E7Ymwc),
            onUpdateGames: (e) => s({ gameApplicationIds: e }),
            gameApplicationIds: n.gameApplicationIds,
            error: null == a ? void 0 : a.gameApplicationIds,
            guildId: t,
            includeSuggestedGames: !0
        });
    },
    [p.Wy.CUSTOMIZE_TAG_BADGE]: function (e) {
        let { guildId: t } = e,
            { progress: n, errors: r, handleClanUpdate: a } = f(t);
        return (0, i.jsx)(h.Z, {
            handleUpdate: a,
            tag: n.tag,
            error: null == r ? void 0 : r.tag,
            badge: n.badgeKind,
            primaryColor: n.badgePrimaryColor,
            secondaryColor: n.badgeSecondaryColor,
            furthestStep: n.furthestStep
        });
    },
    [p.IS.CUSTOMIZE_DISCOVERY]: function (e) {
        let { guildId: t } = e,
            { progress: n } = f(t);
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(c.Z, {
                guildId: t,
                tag: n.tag,
                badge: n.badgeKind,
                primaryColor: n.badgePrimaryColor,
                secondaryColor: n.badgeSecondaryColor
            })
        });
    },
    [p.IS.THANK_YOU_END]: function (e) {
        let { guildId: t } = e;
        return (0, i.jsx)(d.Z, {});
    }
};
function E(e) {
    return e.currentStep.toString();
}
function I(e) {
    if (!_.hasOwnProperty(e.currentStep)) return null;
    let t = _[e.currentStep];
    return (0, i.jsx)(t, { guildId: e.guildId });
}
function C(e) {
    let { guildId: t } = e,
        n = (0, o.Wg)(),
        l = (0, a.e7)([o.ZP], () => {
            var e, i, r;
            return null !== (r = null === (i = o.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : null === (e = i.progress) || void 0 === e ? void 0 : e.currentStep) && void 0 !== r ? r : n.currentStep;
        });
    r.useEffect(() => {
        var e;
        if (((e = l), !_.hasOwnProperty(e))) s.LX();
    }, [l]);
    let c = r.useMemo(
        () => [
            {
                currentStep: l,
                guildId: t
            }
        ],
        [l, t]
    );
    return (0, i.jsx)(m.Z, {
        currentStep: l,
        items: c,
        renderItem: I,
        getItemKey: E
    });
}
