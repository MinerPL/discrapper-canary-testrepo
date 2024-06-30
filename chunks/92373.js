var a = t(735250), r = t(470079), i = t(120356), s = t.n(i), o = t(481060), l = t(442837), c = t(210753), d = t(77498), u = t(689938), m = t(209367);
n.Z = function (e) {
    let {
            applicationId: n,
            imageContainerClassName: t,
            onClick: i,
            selected: f,
            locked: C = !1,
            otherGamesCount: _ = 0
        } = e, h = (0, o.useToken)(o.tokens.colors.WHITE), {
            isFetching: x,
            coverImageUrl: g
        } = (0, c.$)(n, {
            coverImageHeight: 336,
            coverImageWidth: 252
        }), p = (0, l.e7)([d.Z], () => {
            var e, t;
            return null !== (t = null === (e = d.Z.getDetectableGame(n)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : '';
        }), T = r.useCallback(() => {
            null == i || i(n);
        }, [
            n,
            i
        ]), I = r.useMemo(() => x ? null : null == g ? (0, a.jsx)('div', {
            className: m.gameUnknownImage,
            children: (0, a.jsx)(o.UnknownGameIcon, { size: 'lg' })
        }) : (0, a.jsx)('img', {
            className: m.gameImage,
            alt: p,
            src: g
        }), [
            g,
            x,
            p
        ]);
    return (0, a.jsxs)('div', {
        className: m.selectedGame,
        children: [
            (0, a.jsxs)(o.Clickable, {
                onClick: T,
                className: s()(t, x ? m.gameImageLoading : void 0, m.gameImageBackground),
                children: [
                    f && (0, a.jsx)('div', {
                        className: m.checkBackground,
                        children: (0, a.jsx)(o.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            secondaryColor: h.hex(),
                            className: s()(m.selectedGameCheck, { [m.selectedGameCheckLocked]: C })
                        })
                    }),
                    I,
                    _ > 0 && (0, a.jsx)('div', {
                        className: m.remainingGame,
                        children: (0, a.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'always-white',
                            children: u.Z.Messages.COUNT_REMAINING.format({ count: _ })
                        })
                    })
                ]
            }),
            (0, a.jsxs)(o.Text, {
                className: m.gameName,
                variant: 'text-xs/normal',
                color: 'header-primary',
                children: [
                    p,
                    C && (0, a.jsx)(o.LockIcon, { size: 'xxs' })
                ]
            })
        ]
    });
};
