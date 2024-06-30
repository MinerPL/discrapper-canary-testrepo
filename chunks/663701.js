n.d(t, {
    Z: function () {
        return ea;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(143927), o = n(91192), c = n(873546), d = n(442837), u = n(704215), _ = n(952265), E = n(481060), h = n(493683), I = n(348600), m = n(257968), p = n(367907), g = n(770471), T = n(158631), S = n(143614), C = n(463119), N = n(377171), f = n(243778), A = n(922409), Z = n(899740), L = n(28476), v = n(880257), O = n(631885), R = n(457396), x = n(51596), P = n(905423), b = n(155409), M = n(210887), D = n(695346), y = n(283595), j = n(699516), U = n(923834), G = n(55563), w = n(774343), k = n(517802), B = n(436088), H = n(814225), V = n(515753), F = n(831218), Y = n(339149), W = n(981631), z = n(689938), K = n(422009);
let q = e => {
        let {
                selected: t,
                ...n
            } = e, s = (0, o.JA)('friends'), a = (0, d.e7)([j.Z], () => j.Z.getPendingCount()), r = (0, S.Z)(), {canViewBroadcasts: l} = g.Z.useExperiment({ location: 'friends_tab_no_track' }), c = (0, T.ZP)();
        return (0, i.jsxs)(V.Qj, {
            selected: t,
            route: W.Z5c.FRIENDS,
            icon: E.FriendsIcon,
            text: z.Z.Messages.FRIENDS,
            onClick: () => {
                p.ZP.trackWithMetadata(W.rMx.BROADCAST_LIST_VISITED, {
                    num_active_broadcasts: r.length,
                    friends_tab_clicked: !0,
                    is_broadcasting: c
                });
            },
            ...n,
            ...s,
            children: [
                r.length > 0 && l && (0, i.jsx)(E.TextBadge, {
                    color: N.Z.BG_BRAND,
                    text: (0, i.jsxs)('div', {
                        className: K.broadcastingBadge,
                        children: [
                            (0, i.jsx)(B.Z, { className: K.broadcastingIcon }),
                            (0, i.jsx)(E.Text, {
                                variant: 'text-xs/semibold',
                                color: 'always-white',
                                children: r.length.toLocaleString()
                            })
                        ]
                    })
                }),
                a > 0 ? (0, i.jsx)(E.NumberBadge, { count: a }) : null
            ]
        });
    }, Q = e => {
        let {
                selected: t,
                hideGameUpdateProgressIndicator: n,
                ...s
            } = e, a = (0, o.JA)('library');
        return (0, i.jsx)(V.Qj, {
            selected: t,
            route: W.Z5c.APPLICATION_LIBRARY,
            icon: E.InventoryIcon,
            text: z.Z.Messages.LIBRARY,
            ...s,
            ...a,
            children: (0, i.jsx)(Y.Z, { className: r()(K.downloadProgressCircle, { [K.hideGameUpdateProgressIndicator]: n }) })
        });
    }, X = e => {
        let {
                selected: t,
                route: n,
                locationState: s,
                ...a
            } = e, l = (0, o.JA)('activities'), c = (0, d.e7)([M.Z], () => M.Z.getState().theme), u = (0, m.p)();
        return (0, i.jsx)(V.Qj, {
            selected: t,
            route: n,
            icon: (0, E.makeIconCompat)(k.Z),
            iconClassName: r()(K.activitiesBirthdayIcon, { [K.activitiesBirthdayIconLight]: 'light' === c }),
            text: z.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE,
            locationState: s,
            ...a,
            ...l,
            children: u > 0 ? (0, i.jsx)(E.NumberBadge, { count: u }) : null
        });
    }, J = () => {
        let e = (0, Z.q)(), t = (0, Z.T)();
        return e > 0 ? (0, i.jsx)(E.NumberBadge, {
            count: e,
            color: 0 === t ? N.Z.ICON_MUTED : void 0
        }) : null;
    }, $ = e => {
        let {selected: t} = e, n = (0, o.JA)('messageRequests'), {channelId: s} = (0, A._)();
        if (!(0, L.a)())
            return null;
        let a = null == s ? void 0 : () => h.Z.preload(W.ME, s);
        return (0, i.jsx)(V.Qj, {
            selected: t,
            route: W.Z5c.MESSAGE_REQUESTS,
            icon: E.EnvelopeIcon,
            text: z.Z.Messages.MESSAGE_REQUESTS,
            onClick: a,
            ...n,
            children: (0, i.jsx)(J, {})
        });
    }, ee = e => {
        let {selected: t} = e, n = z.Z.Messages.FAMILY_CENTER_SIDEBAR_TITLE, a = (0, o.JA)('family-center'), r = D.Ex.useSetting(), l = (0, v.Z)(), [c, d] = s.useState(!0);
        return r && l ? (0, i.jsx)(V.Qj, {
            selected: t,
            route: W.Z5c.FAMILY_CENTER,
            icon: E.GroupIcon,
            text: n,
            onMouseEnter: () => {
                d(!0);
            },
            onMouseLeave: () => {
                d(!1);
            },
            interactiveClassName: K.familyCenterLinkButton,
            ...a,
            children: (0, i.jsx)(et, { isParentHovered: c })
        }) : null;
    }, et = e => {
        let {isParentHovered: t} = e, s = (0, O.gU)();
        return t ? (0, i.jsx)(V.PZ, {
            onClick: () => {
                (0, _.ZD)(async () => {
                    let {default: e} = await n.e('44153').then(n.bind(n, 760949));
                    return t => (0, i.jsx)(e, { ...t });
                });
            },
            'aria-label': z.Z.Messages.CLOSE
        }) : s > 0 ? (0, i.jsx)('div', {
            className: K.familyCenterPendingBadge,
            children: (0, i.jsx)(E.NumberBadge, { count: s })
        }) : (0, i.jsx)(f.Z, {
            contentTypes: [u.z.FAMILY_CENTER_NEW_BADGE],
            children: e => {
                let {visibleContent: t} = e;
                return t === u.z.FAMILY_CENTER_NEW_BADGE ? (0, i.jsx)(E.TextBadge, {
                    text: z.Z.Messages.NEW,
                    color: N.Z.BG_BRAND
                }) : null;
            }
        });
    }, en = () => (0, x.$Z)('DM_SEARCH');
function ei(e) {
    switch (e) {
    case W.Z5c.APPLICATION_LIBRARY:
        return W.ZY5.LIBRARY;
    case W.Z5c.FRIENDS:
        return W.ZY5.FRIENDS_LIST;
    case W.Z5c.COLLECTIBLES_SHOP:
        return W.ZY5.COLLECTIBLES_SHOP;
    }
    if (e.startsWith(W.Z5c.APPLICATION_STORE))
        return e === W.Z5c.APPLICATION_STORE ? W.ZY5.STORE_DIRECTORY_HOME : e.startsWith(W.Z5c.APPLICATION_STORE) ? W.ZY5.STORE_DIRECTORY_BROWSE : W.ZY5.STORE_LISTING;
    return W.ZY5.DM_CHANNEL;
}
let es = e => {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: s,
            storeLink: a,
            premiumTabSelected: o
        } = e, [d, u] = (0, P.Z)(e => {
            let {
                channelId: t,
                path: n
            } = e;
            return [
                t,
                n
            ];
        }, l.Z), {enabled: _} = I.Z.useExperiment({ location: 'a718d6_2' }, { autoTrackExposure: !0 });
    return (0, i.jsxs)('nav', {
        className: K.privateChannels,
        'aria-label': z.Z.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
        children: [
            (0, i.jsx)(b.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: r()(K.searchBar, { [K.themedHeaderMobile]: c.tq }),
                    children: (0, i.jsx)('button', {
                        type: 'button',
                        className: r()(K.searchBarComponent, { [K.themedSearchBarMobile]: c.tq }),
                        onClick: en,
                        children: z.Z.Messages.DM_SEARCH_PLACEHOLDER
                    })
                })
            }),
            (0, i.jsxs)(F.Z, {
                ...e,
                version: u,
                selectedChannelId: d,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)(q, { selected: null != u ? u === W.Z5c.FRIENDS : s === W.Z5c.FRIENDS }, 'friends'),
                    n && t ? (0, i.jsx)(Q, {
                        selected: null == u ? null != s && s.startsWith(W.Z5c.APPLICATION_LIBRARY) : u.startsWith(W.Z5c.APPLICATION_LIBRARY),
                        hideGameUpdateProgressIndicator: s === W.Z5c.APPLICATION_LIBRARY
                    }, 'library') : null,
                    (0, i.jsx)(R.g, {
                        selected: null == u ? o : u.startsWith(W.Z5c.APPLICATION_STORE),
                        route: null == a || location.pathname.startsWith(W.Z5c.ACTIVITIES) || location.pathname.startsWith(W.Z5c.APPLICATION_STORE) ? W.Z5c.APPLICATION_STORE : a,
                        locationState: {
                            analyticsSource: {
                                page: ei(s),
                                section: W.jXE.NAVIGATION,
                                object: W.qAy.NAVIGATION_LINK
                            }
                        }
                    }, 'premium'),
                    _ ? (0, i.jsx)(X, {
                        selected: null != u && u.startsWith(W.Z5c.ACTIVITIES) || null != s && s.startsWith(W.Z5c.ACTIVITIES),
                        route: W.Z5c.ACTIVITIES,
                        locationState: {
                            analyticsSource: {
                                page: ei(s),
                                section: W.jXE.NAVIGATION,
                                object: W.qAy.NAVIGATION_LINK
                            }
                        }
                    }, 'activities') : null,
                    (0, i.jsx)($, { selected: null == u ? null != s && s.startsWith(W.Z5c.MESSAGE_REQUESTS) : u === W.Z5c.MESSAGE_REQUESTS }, 'message-requests'),
                    (0, i.jsx)(C.i, {
                        selected: u === W.Z5c.COLLECTIBLES_SHOP || (null == s ? void 0 : s.startsWith(W.Z5c.COLLECTIBLES_SHOP)),
                        locationState: {
                            analyticsSource: {
                                page: ei(s),
                                section: W.jXE.NAVIGATION,
                                object: W.qAy.NAVIGATION_LINK
                            }
                        }
                    }, 'discord-shop'),
                    (0, i.jsx)(ee, { selected: null != s && s.startsWith(W.Z5c.FAMILY_CENTER) || null != u && u.startsWith(W.Z5c.FAMILY_CENTER) }, 'family-center')
                ]
            })
        ]
    });
};
function ea() {
    let e = (0, d.e7)([w.Z], () => w.Z.getHomeLink()), t = (0, d.e7)([G.Z], () => {
            if (e === W.Z5c.APPLICATION_STORE)
                return !0;
            let t = (0, H.ZK)(e);
            if (null != t) {
                var n, i;
                return null !== (i = null === (n = G.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
            }
            return !1;
        }, [e]), n = !D.bm.useSetting(), {theme: s} = (0, d.cj)([M.Z], () => ({ theme: M.Z.theme })), a = (0, d.e7)([y.Z], () => y.Z.hasLibraryApplication()), r = (0, d.e7)([U.Z], () => U.Z.getCurrentPath());
    return (0, i.jsx)(es, {
        theme: s,
        showLibrary: n,
        hasLibraryApplication: a,
        storeLink: r,
        homeLink: e,
        premiumTabSelected: t
    });
}
