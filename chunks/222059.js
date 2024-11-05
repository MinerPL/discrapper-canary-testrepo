n.d(t, {
    u: function () {
        return k;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(91192),
    a = n(442837),
    o = n(704215),
    s = n(433517),
    c = n(481060),
    u = n(339149),
    d = n(327943),
    h = n(864682),
    p = n(605236),
    f = n(899740),
    m = n(786397),
    g = n(155409),
    C = n(699516),
    _ = n(944486),
    x = n(594174),
    v = n(431),
    I = n(774343),
    b = n(417363),
    S = n(941128),
    Z = n(780570),
    N = n(557177),
    E = n(278464),
    y = n(276952),
    j = n(682662),
    T = n(662146),
    P = n(674552),
    A = n(981631),
    M = n(474936),
    w = n(871465),
    L = n(388032),
    R = n(342824);
let D = {
    origin: {
        x: -16,
        y: 0
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0
    }
};
function O(e) {
    let { selected: t, user: n, badge: o, link: p, showProgressBadge: f } = e,
        m = (0, a.e7)([d.Z], () => d.Z.isEditorOpen),
        [C, _] = l.useState(!1),
        [x, v] = l.useState(!1),
        [I, b] = l.useState(null),
        [S, Z] = l.useState(0),
        E = (0, r.Ie)('home'),
        M = () => {
            b(null), Z(0), clearTimeout(I);
        };
    if (null == n) return null;
    let O = L.intl.string(L.t.YUU0RE);
    x && (O = s.K.get(A.wli) ? L.intl.string(L.t.nkq1l5) : L.intl.string(L.t.Be8Q5O));
    let k = null;
    !t &&
        f &&
        (k = (0, i.jsx)(u.Z, {
            className: R.downloadProgress,
            determineOwnVisibility: !1
        }));
    let U = t || C || m,
        G = (0, i.jsx)(c.BlobMask, {
            selected: U,
            lowerBadge: o > 0 ? (0, P.Ne)(o) : null,
            upperBadge: k,
            lowerBadgeSize: { width: (0, c.getBadgeWidthForValue)(o) },
            children: (0, i.jsx)(c.NavItem, {
                onMouseEnter: () => _(!0),
                onMouseLeave: () => _(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != I && clearTimeout(I), b(setTimeout(M, 500)), Z(S + 1), 15 === S)) {
                        M();
                        let e = !s.K.get(A.wli);
                        s.K.set(A.wli, e),
                            e && s.K.set(w.O5, !0),
                            e ? (0, N.GN)('discodo') : (0, N.GN)('user_leave'),
                            v(!0),
                            setTimeout(() => {
                                v(!1);
                            }, 1000);
                    }
                },
                selected: U,
                ariaLabel: L.intl.string(L.t.YUU0RE),
                ...E,
                to: {
                    pathname: p,
                    state: {
                        analyticsSource: {
                            page: A.ZY5.GUILD_CHANNEL,
                            section: A.jXE.NAVIGATION,
                            object: A.qAy.BUTTON_HOME
                        }
                    }
                },
                children: (0, i.jsx)(h.Z, {})
            })
        });
    return (0, i.jsx)('div', {
        className: R.tutorialContainer,
        children: (0, i.jsx)(g.Z, {
            inlineSpecs: D,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, i.jsxs)(j.H, {
                children: [
                    (0, i.jsx)(y.Z, {
                        selected: t,
                        hovered: C,
                        className: R.pill
                    }),
                    (0, i.jsx)(T.Z, {
                        color: c.Tooltip.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: O,
                        selected: t,
                        children: G
                    })
                ]
            })
        })
    });
}
function k() {
    let e = (0, E.n)(),
        t = (0, a.e7)([S.Z, b.Z], () => {
            let e = (0, u.E)(S.Z.activeItems, b.Z),
                { total: t, progress: n } = Z.lK(e),
                i = Z.xI(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, a.e7)([C.Z], () => C.Z.getPendingCount()),
        l = Object.keys(M.nG),
        { unviewedTrialCount: r, unviewedDiscountCount: s } = (0, a.cj)([v.Z], () => ({
            unviewedTrialCount: v.Z.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: v.Z.getUnacknowledgedDiscountOffers().length
        })),
        c = (0, m.w)(M.jz),
        d = (0, p.wE)(o.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE),
        h = r + s + (null == c || d ? 0 : 1),
        g = (0, a.e7)([x.default], () => x.default.getCurrentUser()),
        N = (0, f.q)(),
        y = n + h + N,
        j = y === h && h > 0 && n + N === 0,
        T = I.Z.getHomeLink();
    return (
        j && (T = A.Z5c.APPLICATION_STORE),
        (0, i.jsx)(O, {
            selected: e,
            user: g,
            selectedChannelId: _.Z.getChannelId(A.ME),
            badge: y,
            link: T,
            showProgressBadge: t
        })
    );
}
