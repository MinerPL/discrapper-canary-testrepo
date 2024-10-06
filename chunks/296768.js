t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120);
var a = t(735250),
    r = t(470079),
    s = t(120356),
    i = t.n(s),
    o = t(392711),
    l = t.n(o),
    c = t(442837),
    d = t(481060),
    u = t(224706),
    _ = t(812206),
    E = t(669764),
    m = t(810568),
    I = t(839392),
    A = t(774073),
    p = t(644941),
    g = t(689938),
    f = t(51527),
    T = t(796805);
let O = (e) => {
    let { game: n, onClose: t, trackClick: r } = e,
        s = (0, c.e7)([_.Z], () => _.Z.getApplication(n.applicationId));
    return (0, a.jsx)(d.Tooltip, {
        text: n.name,
        children: (e) => {
            var i;
            return (0, a.jsx)(d.Clickable, {
                ...e,
                className: T.similarGameImageClickable,
                onClick: async () => {
                    r(m.as.ClickSimilarGame, n.applicationId),
                        (0, d.openModalLazy)(() =>
                            Promise.resolve((e) =>
                                (0, a.jsx)(p.default, {
                                    applicationId: n.applicationId,
                                    source: m.m1.SimilarGames,
                                    ...e
                                })
                            )
                        ),
                        await new Promise((e) => setTimeout(e, 10)),
                        t();
                },
                children: (0, a.jsx)('img', {
                    src: n.coverImageUrl,
                    className: T.similarGameImage,
                    alt: g.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (i = null == s ? void 0 : s.name) && void 0 !== i ? i : null == n ? void 0 : n.name })
                })
            });
        }
    });
};
function N(e) {
    let { applicationId: n, onClose: t, trackAction: s, similarGames: o, similarGamesError: _ } = e,
        m = (0, c.e7)([I.Z, E.Z], () => {
            let e = void 0 === I.Z.getSimilarGames(n),
                t = o.some((e) => E.Z.isFetching(e));
            return e || t;
        }),
        p = (0, c.Wu)([E.Z], () =>
            o
                .map((e) => E.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => null != e.coverImageUrl)
                .filter(A.W1)
                .slice(0, 5)
        );
    return (r.useEffect(() => {
        o.length > 0 && u.Z.getDetectableGamesSupplemental([n, ...o]);
    }, [n, o]),
    m && null == _)
        ? (0, a.jsxs)('div', {
              children: [
                  (0, a.jsx)('div', { className: i()(T.loadingHeading, f.sectionHeader) }),
                  (0, a.jsx)('div', {
                      className: i()(f.row, f.gapLg),
                      children: l()
                          .range(0, 5)
                          .map((e) => (0, a.jsx)('div', { className: T.loadingArtwork }, e))
                  })
              ]
          })
        : m || 0 !== p.length
          ? (0, a.jsxs)('div', {
                children: [
                    (0, a.jsx)(d.Heading, {
                        className: f.sectionHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: g.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, a.jsx)('div', {
                        className: i()(f.row, f.gapLg),
                        style: {},
                        children: p.map((e) =>
                            (0, a.jsx)(
                                O,
                                {
                                    game: e,
                                    onClose: t,
                                    trackClick: s
                                },
                                e.applicationId
                            )
                        )
                    })
                ]
            })
          : null;
}
