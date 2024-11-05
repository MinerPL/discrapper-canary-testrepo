n.d(t, {
    o: function () {
        return c;
    }
});
var i = n(192379),
    r = n(970606),
    a = n(41152),
    l = n(116175),
    s = n(308083);
let o = [s.Wy.GAMES, s.Wy.CUSTOMIZE_TAG_BADGE, s.IS.CUSTOMIZE_DISCOVERY, s.IS.THANK_YOU_END];
function c(e) {
    let { guildId: t, progress: n, inSettings: c, updateCurrentStep: d } = e,
        { currentStep: u, gameApplicationIds: h, tag: m } = n,
        p = i.useCallback(
            (e) => {
                switch (e) {
                    case s.Wy.GAMES:
                        (0, r.Gx)({
                            guildId: t,
                            signupPage: (0, a.F)(e),
                            actionType: r.eI.CHOOSE_GAME_IDS,
                            gameApplicationIds: Array.from(n.gameApplicationIds),
                            inSettings: c
                        });
                        break;
                    case s.Wy.CUSTOMIZE_TAG_BADGE:
                        (0, r.Gx)({
                            guildId: t,
                            signupPage: (0, a.F)(e),
                            actionType: r.eI.UPDATE_GUILD_IDENTITY,
                            guildTag: n.tag,
                            badgeName: (0, l.VF)(n.badgeKind),
                            badgePrimaryColor: n.badgePrimaryColor,
                            badgeSecondaryColor: n.badgeSecondaryColor,
                            inSettings: c
                        });
                        break;
                    default:
                        return;
                }
            },
            [t, n, c]
        ),
        g = i.useCallback(() => {
            let e = o.indexOf(u);
            if (-1 === e) {
                d(s.Wy.GAMES);
                return;
            }
            if (e === o.length - 1) {
                d(s.IS.THANK_YOU_END + 1);
                return;
            }
            let t = o[e + 1];
            p(u), d(t);
        }, [u, p, d]),
        f = i.useCallback(() => {
            let e = o.indexOf(u);
            if (-1 === e || 0 === e) {
                d(s.Wy.GAMES);
                return;
            }
            d(o[e - 1]);
        }, [u, d]),
        _ = i.useMemo(() => {
            switch (u) {
                case s.Wy.GAMES:
                    return 0 === h.size;
                case s.Wy.CUSTOMIZE_TAG_BADGE:
                    return m.length < 2;
                default:
                    return !1;
            }
        }, [u, h.size, m.length]),
        E = i.useMemo(() => {
            switch (Number(u)) {
                case s.Wy.GAMES:
                case s.IS.THANK_YOU_END:
                    return !0;
                default:
                    return !1;
            }
        }, [u]);
    return i.useMemo(
        () => ({
            onNextClick: g,
            onBackClick: f,
            isNextDisabled: _,
            isBackDisabled: E
        }),
        [E, _, f, g]
    );
}
