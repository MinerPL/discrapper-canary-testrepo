n.d(t, {
    u: function () {
        return H;
    }
}), n(47120);
var i = n(735250), l = n(470079), r = n(91192), a = n(442837), s = n(433517), o = n(481060), c = n(339149), u = n(327943), d = n(864682), h = n(67212), p = n(770471), _ = n(292584), f = n(835865), m = n(456541), g = n(143614), C = n(544803), I = n(899740), E = n(155409), N = n(699516), x = n(944486), S = n(594174), Z = n(295226), v = n(774343), T = n(417363), L = n(941128), A = n(436088), b = n(880080), M = n(780570), R = n(557177), y = n(278464), O = n(682662), P = n(662146), j = n(674552), D = n(981631), U = n(474936), G = n(871465), w = n(689938), k = n(496540);
let B = {
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
function V(e) {
    let {
            selected: t,
            user: n,
            badge: h,
            link: _,
            showProgressBadge: f
        } = e, I = (0, a.e7)([u.Z], () => u.Z.isEditorOpen), [N, x] = l.useState(!1), [S, Z] = l.useState(!1), [v, T] = l.useState(null), [L, M] = l.useState(0), [y, U] = l.useState(!1), {canViewBroadcasts: V} = p.Z.useExperiment({ location: 'home_button_no_track' }, { autoTrackExposure: !1 }), H = (0, g.Z)(), F = H.length > 0 && V;
    (0, m.P)();
    let W = (0, r.Ie)('home'), Y = () => {
            T(null), M(0), clearTimeout(v);
        };
    if (null == n)
        return null;
    let z = w.Z.Messages.DIRECT_MESSAGES;
    S && (z = s.K.get(D.wli) ? w.Z.Messages.DISCODO_ENABLED : w.Z.Messages.DISCODO_DISABLED), H.length > 0 && p.Z.trackExposure({ location: 'home_button' });
    let K = null;
    !t && f ? K = (0, i.jsx)(c.Z, {
        className: k.downloadProgress,
        determineOwnVisibility: !1
    }) : F && (K = (0, i.jsx)(A.Z, { className: k.broadcastBadge }));
    let q = t || N || I, Q = (0, i.jsx)(o.BlobMask, {
            highlight: F,
            selected: q,
            lowerBadge: h > 0 ? (0, j.Ne)(h) : null,
            upperBadge: K,
            lowerBadgeSize: { width: (0, o.getBadgeWidthForValue)(h) },
            children: (0, i.jsx)(o.NavItem, {
                onMouseEnter: () => x(!0),
                onMouseLeave: () => x(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != v && clearTimeout(v), T(setTimeout(Y, 500)), M(L + 1), 15 === L)) {
                        Y();
                        let e = !s.K.get(D.wli);
                        s.K.set(D.wli, e), e && s.K.set(G.O5, !0), e ? (0, R.GN)('discodo') : (0, R.GN)('user_leave'), Z(!0), setTimeout(() => {
                            Z(!1);
                        }, 1000);
                    }
                },
                selected: q,
                ariaLabel: w.Z.Messages.DIRECT_MESSAGES,
                ...W,
                to: {
                    pathname: _,
                    state: {
                        analyticsSource: {
                            page: D.ZY5.GUILD_CHANNEL,
                            section: D.jXE.NAVIGATION,
                            object: D.qAy.BUTTON_HOME
                        }
                    }
                },
                children: (0, i.jsx)(d.Z, {})
            })
        }), J = F ? (0, i.jsx)(o.Popout, {
            position: 'right',
            renderPopout: e => {
                let {closePopout: t} = e;
                return (0, i.jsx)(C.Z, { closePopout: t });
            },
            onRequestClose: () => {
                U(!1);
            },
            spacing: 8,
            shouldShow: y,
            children: () => Q
        }) : null;
    return (0, i.jsx)('div', {
        className: k.tutorialContainer,
        onMouseEnter: () => {
            U(!0);
        },
        onMouseLeave: () => {
            setTimeout(() => {
                U(!1);
            }, 250);
        },
        children: (0, i.jsx)(E.Z, {
            inlineSpecs: B,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, i.jsxs)(O.H, {
                children: [
                    (0, i.jsx)(b.Z, {
                        selected: t,
                        hovered: N,
                        className: k.pill
                    }),
                    null != J ? J : (0, i.jsx)(P.Z, {
                        color: o.Tooltip.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: z,
                        selected: t,
                        children: Q
                    })
                ]
            })
        })
    });
}
function H() {
    let e = (0, y.n)(), t = (0, a.e7)([
            L.Z,
            T.Z
        ], () => {
            let e = (0, c.E)(L.Z.activeItems, T.Z), {
                    total: t,
                    progress: n
                } = M.lK(e), i = M.xI(n, t);
            return i > 0 && i < 100;
        }), n = (0, a.e7)([_.Z], () => _.Z.getUserIdsToValidate()), r = (0, a.e7)([N.Z], () => N.Z.getPendingCount()), s = Object.keys(U.nG), {
            unviewedTrialCount: o,
            unviewedDiscountCount: u
        } = (0, a.cj)([Z.Z], () => ({
            unviewedTrialCount: Z.Z.getUnacknowledgedOffers(s).length,
            unviewedDiscountCount: Z.Z.getUnacknowledgedDiscountOffers().length
        })), d = o + u, p = (0, a.e7)([S.default], () => S.default.getCurrentUser()), m = (0, I.T)(), g = r + d + m, C = g === d && d > 0 && r + m === 0;
    l.useEffect(() => {
        n.length > 0 && (0, h.E7)();
    }, [n]), (0, f.Z)();
    let E = v.Z.getHomeLink();
    return C && (E = D.Z5c.APPLICATION_STORE), (0, i.jsx)(V, {
        selected: e,
        user: p,
        selectedChannelId: x.Z.getChannelId(D.ME),
        badge: g,
        link: E,
        showProgressBadge: t
    });
}
