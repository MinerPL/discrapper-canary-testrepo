n.d(t, {
    u: function () {
        return D;
    }
}),
    n(47120);
var i = n(735250),
    l = n(470079),
    r = n(91192),
    a = n(442837),
    s = n(433517),
    o = n(481060),
    c = n(339149),
    u = n(327943),
    d = n(864682),
    h = n(899740),
    p = n(155409),
    f = n(699516),
    _ = n(944486),
    m = n(594174),
    g = n(295226),
    C = n(774343),
    I = n(417363),
    E = n(941128),
    N = n(780570),
    S = n(557177),
    x = n(278464),
    v = n(276952),
    T = n(682662),
    Z = n(662146),
    A = n(674552),
    b = n(981631),
    R = n(474936),
    M = n(871465),
    L = n(689938),
    P = n(342824);
let O = {
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
function y(e) {
    let { selected: t, user: n, badge: h, link: f, showProgressBadge: _ } = e,
        m = (0, a.e7)([u.Z], () => u.Z.isEditorOpen),
        [g, C] = l.useState(!1),
        [I, E] = l.useState(!1),
        [N, x] = l.useState(null),
        [R, y] = l.useState(0),
        D = (0, r.Ie)('home'),
        j = () => {
            x(null), y(0), clearTimeout(N);
        };
    if (null == n) return null;
    let w = L.Z.Messages.DIRECT_MESSAGES;
    I && (w = s.K.get(b.wli) ? L.Z.Messages.DISCODO_ENABLED : L.Z.Messages.DISCODO_DISABLED);
    let U = null;
    !t &&
        _ &&
        (U = (0, i.jsx)(c.Z, {
            className: P.downloadProgress,
            determineOwnVisibility: !1
        }));
    let G = t || g || m,
        k = (0, i.jsx)(o.BlobMask, {
            selected: G,
            lowerBadge: h > 0 ? (0, A.Ne)(h) : null,
            upperBadge: U,
            lowerBadgeSize: { width: (0, o.getBadgeWidthForValue)(h) },
            children: (0, i.jsx)(o.NavItem, {
                onMouseEnter: () => C(!0),
                onMouseLeave: () => C(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != N && clearTimeout(N), x(setTimeout(j, 500)), y(R + 1), 15 === R)) {
                        j();
                        let e = !s.K.get(b.wli);
                        s.K.set(b.wli, e),
                            e && s.K.set(M.O5, !0),
                            e ? (0, S.GN)('discodo') : (0, S.GN)('user_leave'),
                            E(!0),
                            setTimeout(() => {
                                E(!1);
                            }, 1000);
                    }
                },
                selected: G,
                ariaLabel: L.Z.Messages.DIRECT_MESSAGES,
                ...D,
                to: {
                    pathname: f,
                    state: {
                        analyticsSource: {
                            page: b.ZY5.GUILD_CHANNEL,
                            section: b.jXE.NAVIGATION,
                            object: b.qAy.BUTTON_HOME
                        }
                    }
                },
                children: (0, i.jsx)(d.Z, {})
            })
        });
    return (0, i.jsx)('div', {
        className: P.tutorialContainer,
        children: (0, i.jsx)(p.Z, {
            inlineSpecs: O,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, i.jsxs)(T.H, {
                children: [
                    (0, i.jsx)(v.Z, {
                        selected: t,
                        hovered: g,
                        className: P.pill
                    }),
                    (0, i.jsx)(Z.Z, {
                        color: o.Tooltip.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: w,
                        selected: t,
                        children: k
                    })
                ]
            })
        })
    });
}
function D() {
    let e = (0, x.n)(),
        t = (0, a.e7)([E.Z, I.Z], () => {
            let e = (0, c.E)(E.Z.activeItems, I.Z),
                { total: t, progress: n } = N.lK(e),
                i = N.xI(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, a.e7)([f.Z], () => f.Z.getPendingCount()),
        l = Object.keys(R.nG),
        { unviewedTrialCount: r, unviewedDiscountCount: s } = (0, a.cj)([g.Z], () => ({
            unviewedTrialCount: g.Z.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: g.Z.getUnacknowledgedDiscountOffers().length
        })),
        o = r + s,
        u = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        d = (0, h.q)(),
        p = n + o + d,
        S = p === o && o > 0 && n + d === 0,
        v = C.Z.getHomeLink();
    return (
        S && (v = b.Z5c.APPLICATION_STORE),
        (0, i.jsx)(y, {
            selected: e,
            user: u,
            selectedChannelId: _.Z.getChannelId(b.ME),
            badge: p,
            link: v,
            showProgressBadge: t
        })
    );
}
