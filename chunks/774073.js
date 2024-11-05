n.d(t, {
    z6: function () {
        return S;
    }
}),
    n(789020),
    n(653041);
var r,
    i,
    a = n(192379),
    s = n(512722),
    o = n.n(s),
    l = n(683076),
    u = n(442837),
    c = n(224706),
    d = n(812206),
    f = n(835473),
    _ = n(669764),
    h = n(626135),
    p = n(630388),
    m = n(539746),
    g = n(981631);
((i = r || (r = {})).NoMatch = 'no match'), (i.NSFW = 'nsfw'), (i.NoSummary = 'no summary'), (i.NoReleaseDate = 'no release date'), (i.NoCoverImage = 'no cover image'), (i.Disabled = 'profile disabled');
let E = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0;
        h.default.track(g.rMx.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: t,
            rejection_reason: n,
            source: r
        });
    },
    v = (e, t) => {
        let n = [];
        return null == e || null == t ? ['no match'] : ((0, p.yE)(t.flags, g.udG.GAME_PROFILE_DISABLED) && n.push('profile disabled'), e.themes.includes(l.i.EROTIC) && n.push('nsfw'), (null == e.summary || 0 === e.summary.length) && n.push('no summary'), (null == e.summary || 0 === e.summary.length) && n.push('no summary'), n);
    },
    I = (e, t) => 0 === v(e, t).length,
    S = (e) => {
        let t = _.Z.getGame(e);
        return I(t, d.Z.getApplication(e));
    };
t.ZP = (e) => {
    let { location: t, applicationId: n = '', autoTrackExposure: r = !0, source: i, trackEntryPointImpression: s = !0 } = e,
        l = a.useRef(!1),
        d = (0, m.xG)(t, r);
    a.useEffect(() => {
        d && null != n && '' !== n && c.Z.getDetectableGamesSupplemental([n]);
    }, [n, d]);
    let h = (0, u.e7)([_.Z], () => _.Z.getGame(n)),
        p = (0, f.q)(n),
        g = a.useMemo(() => (null != h && null != p ? I(h, p) : null), [p, h]);
    return (
        a.useEffect(() => {
            !l.current && d && s && !1 === _.Z.isFetching(n) && null != h && null != g && (o()(null != i, 'Cannot track a Game Profile Entry Point Impressions without a source.'), E(g, n, v(h), i), (l.current = !0));
        }, [g, n, d, h, i, s]),
        {
            shouldOpenGameProfile: d && !0 === g,
            applicationId: n
        }
    );
};
