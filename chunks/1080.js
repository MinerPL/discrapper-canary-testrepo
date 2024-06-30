n.d(t, {
    Z: function () {
        return B;
    }
}), n(47120), n(653041);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(392711), o = n.n(l), c = n(399606), d = n(481060), u = n(239091), _ = n(749210), E = n(479531), I = n(110924), T = n(410030), m = n(367907), N = n(906732), S = n(733026), h = n(246946), g = n(594174), C = n(695464), x = n(154921), p = n(626135), R = n(136015), f = n(51144), L = n(434404), O = n(999382), A = n(84613), M = n(740903), v = n(981631), D = n(689938), j = n(272552);
function Z(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function b(e) {
    var t;
    let {
            transitionState: n,
            guild: i,
            user: r,
            ban: l,
            hideDiscriminator: o,
            onClose: c
        } = e, [u, I] = a.useState(!1), [T, S] = a.useState(null), {analyticsLocations: h} = (0, N.ZP)(), g = null !== (t = null == h ? void 0 : h[0]) && void 0 !== t ? t : null;
    async function C() {
        if (null != i) {
            S(null), I(!0);
            try {
                await _.Z.unbanUser(i.id, r.id), c(), p.default.track(v.rMx.GUILD_BAN_REMOVED, {
                    ...(0, m.hH)(i.id),
                    target_user_id: r.id,
                    reason: l.reason,
                    location: g
                });
            } catch (e) {
                S(new E.Z(e)), I(!1);
            }
        }
    }
    return (0, s.jsxs)(d.ModalRoot, {
        className: j.bannedUserModal,
        transitionState: n,
        children: [
            (0, s.jsxs)(d.ModalHeader, {
                className: j.header,
                separator: !1,
                children: [
                    (0, s.jsx)(x.Z, {
                        size: x.Z.Sizes.SIZE_24,
                        className: j.userUsername,
                        children: f.ZP.getUserTag(r, {
                            mode: 'username',
                            identifiable: o ? 'never' : 'always'
                        })
                    }),
                    o || r.isPomelo() ? null : (0, s.jsxs)(x.Z, {
                        size: x.Z.Sizes.SIZE_24,
                        className: j.userDiscrim,
                        children: [
                            '#',
                            r.discriminator
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(d.ModalContent, {
                className: j.content,
                children: [
                    (0, s.jsx)(d.Text, {
                        className: j.reasonHeader,
                        variant: 'text-xs/normal',
                        children: D.Z.Messages.BAN_REASON
                    }),
                    (0, s.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        children: null != l.reason && '' !== l.reason ? l.reason : D.Z.Messages.NO_BAN_REASON
                    }),
                    null != T ? (0, s.jsx)(d.Text, {
                        className: j.error,
                        color: 'text-danger',
                        variant: 'text-sm/normal',
                        children: T.getAnyErrorMessage()
                    }) : null
                ]
            }),
            (0, s.jsxs)(d.ModalFooter, {
                className: j.footer,
                children: [
                    (0, s.jsx)(d.Button, {
                        onClick: C,
                        look: d.Button.Looks.LINK,
                        color: d.Button.Colors.RED,
                        submitting: u,
                        children: D.Z.Messages.REVOKE_BAN
                    }),
                    (0, s.jsx)(d.Button, {
                        onClick: c,
                        children: D.Z.Messages.DONE
                    })
                ]
            })
        ]
    });
}
class U extends a.PureComponent {
    render() {
        let {
                user: e,
                hideDiscriminator: t,
                guild: n
            } = this.props, a = f.ZP.getGlobalName(e);
        return (0, s.jsxs)(d.Clickable, {
            className: r()(j.bannedUser),
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, s.jsx)(d.Avatar, {
                    src: e.getAvatarURL(null == n ? void 0 : n.id, 40),
                    'aria-label': e.username,
                    size: d.AvatarSizes.SIZE_40,
                    className: j.bannedUserAvatar
                }),
                (0, s.jsxs)('div', {
                    className: j.username,
                    children: [
                        f.ZP.getUserTag(e, {
                            mode: 'username',
                            identifiable: t ? 'never' : 'always'
                        }),
                        !t && !e.isPomelo() && (0, s.jsxs)('span', {
                            className: j.discrim,
                            children: [
                                '#',
                                e.discriminator
                            ]
                        }),
                        e.isPomelo() && (0, s.jsxs)('span', {
                            className: j.discrim,
                            children: [
                                '(',
                                a,
                                ')'
                            ]
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), Z(this, 'handleShowModal', () => {
            let {
                guild: e,
                user: t,
                hideDiscriminator: n,
                ban: a
            } = this.props;
            (0, d.openModal)(i => (0, s.jsx)(b, {
                ...i,
                guild: e,
                user: t,
                ban: a,
                hideDiscriminator: n
            }));
        }), Z(this, 'handleContextMenu', e => {
            (0, u.jW)(e, async () => {
                let {default: e} = await n.e('23835').then(n.bind(n, 768079));
                return t => (0, s.jsx)(e, {
                    ...t,
                    user: this.props.user
                });
            });
        });
    }
}
let G = a.forwardRef(function (e, t) {
    let {
            guild: n,
            sortedBans: i,
            bans: r
        } = e, l = (0, c.e7)([h.Z], () => h.Z.hidePersonalInformation, []), o = a.useCallback(e => {
            var t;
            if (null == r && 0 === e)
                return 60;
            let n = i[e], s = null == r ? void 0 : r.get(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '');
            return null == n || null == s ? 0 : 60;
        }, [
            r,
            i
        ]), u = a.useCallback(e => {
            var t;
            if (null == r && 0 === e)
                return (0, s.jsx)(d.Spinner, {
                    className: j.spinner,
                    type: d.Spinner.Type.SPINNING_CIRCLE
                }, 'spinner');
            let a = i[e], o = null == r ? void 0 : r.get(null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : '');
            if (null != a && null != o)
                return (0, s.jsx)(U, {
                    user: a,
                    ban: o,
                    hideDiscriminator: l,
                    guild: n
                }, a.id);
        }, [
            r,
            n,
            i,
            l
        ]);
    return (0, s.jsx)(C.Z, {
        role: 'listbox',
        listPadding: [
            8,
            8,
            8,
            8
        ],
        rowCount: i.length,
        rowHeight: o,
        renderRow: u,
        ref: t
    });
});
function P(e) {
    let {
            guildId: t,
            storedSearchQuery: n
        } = e, [i, r] = a.useState(null != n ? n : ''), [l, o] = a.useState(!1), c = a.useCallback(() => {
            L.Z.setSection(v.pNK.SAFETY), (0, A.K)(M.u.DM_AND_SPAM_PROTECTION);
        }, []), u = a.useCallback(e => {
            r(e), 0 === e.trim().length && L.Z.setSearchQuery(e);
        }, []), E = a.useCallback(() => {
            r(''), L.Z.setSearchQuery('');
        }, []), I = a.useCallback(async () => {
            if (0 === i.trim().length) {
                L.Z.setSearchQuery(i), o(!1);
                return;
            }
            if (!l)
                try {
                    o(!0);
                    let [e, n] = (0, S.C)(i), s = e[0];
                    L.Z.setSearchQuery(i), await _.Z.searchGuildBans(t, s, n), o(!1);
                } catch (e) {
                    o(!1);
                }
        }, [
            t,
            l,
            i
        ]), T = a.useCallback(e => {
            'Enter' === e.key && (e.preventDefault(), e.stopPropagation(), I());
        }, [I]);
    return (0, s.jsxs)(d.FormSection, {
        tag: d.FormTitleTags.H1,
        title: D.Z.Messages.BANS_HEADER_NEW,
        children: [
            (0, s.jsx)('div', {
                className: j.settingsHeader,
                children: (0, s.jsx)(d.FormText, {
                    type: d.FormTextTypes.DESCRIPTION,
                    className: j.description,
                    children: D.Z.Messages.BANS_HINT.format({ onModerationClick: c })
                })
            }),
            (0, s.jsxs)('div', {
                className: j.bansSearchContainer,
                children: [
                    (0, s.jsx)(d.SearchBar, {
                        className: j.searchBar,
                        query: null != i ? i : '',
                        placeholder: D.Z.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
                        'aria-label': D.Z.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
                        onChange: u,
                        onKeyDown: T,
                        onClear: E,
                        size: d.SearchBar.Sizes.MEDIUM,
                        isLoading: l
                    }),
                    (0, s.jsx)(d.Button, {
                        color: d.Button.Colors.BRAND,
                        onClick: I,
                        size: d.Button.Sizes.SMALL,
                        disabled: l,
                        submitting: l,
                        className: j.searchButton,
                        children: D.Z.Messages.SEARCH
                    })
                ]
            })
        ]
    }, 'bans-header');
}
function B() {
    var e, t;
    let {
            guild: i,
            searchQuery: u
        } = (0, c.e7)([O.Z], () => O.Z.getProps(), [], l.isEqual), E = null != u && u.trim().length > 0, m = (0, I.Z)(E), N = E !== m, [h] = (0, c.e7)([O.Z], () => O.Z.getBans(), [], R.Q), C = null !== (e = null == h ? void 0 : h.size) && void 0 !== e ? e : 0, x = (0, T.ZP)(), p = null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : v.lds, f = a.useRef(null), L = a.useCallback(e => null == e || 0 === e.length ? e => null != e : t => {
            if (null == t || 0 === e.trim().length)
                return !1;
            let [[n], s] = (0, S.C)(e);
            return !!s.includes(t.id) || null != n && (!!(t.username.toLowerCase().includes(n.toLowerCase()) || null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase())) || !1);
        }, []), A = a.useCallback((e, t, n) => {
            if (null == e || 0 === n)
                return [];
            let s = [];
            for (let n of e.keys()) {
                let e = g.default.getUser(n);
                null != e && L(t)(e) && s.push(e);
            }
            return s;
        }, [L]), M = a.useMemo(() => A(h, u, C), [
            h,
            A,
            u,
            C
        ]), Z = null != h, b = M.length % 1000 == 0 && M.length > 0 && Z, U = 0 === M.length, [B, y] = a.useState({
            currentPage: 1,
            pageSize: 100
        });
    a.useEffect(() => {
        N && 1 !== B.currentPage && y(e => ({
            ...e,
            currentPage: 1
        }));
    }, [
        N,
        B.currentPage
    ]);
    let F = a.useCallback(e => {
            _.Z.fetchGuildBansBatch(p, 1000, e);
        }, [p]), k = a.useMemo(() => o().chunk(M, B.pageSize), [
            B.pageSize,
            M
        ]), w = a.useCallback(e => {
            var t, n, s;
            if (null === (t = f.current) || void 0 === t || t.scrollToSectionTop(0), (e + 1) * B.pageSize > M.length && b && !E && (H.current = null !== (s = null === (n = M[M.length - 1]) || void 0 === n ? void 0 : n.id) && void 0 !== s ? s : null, F(H.current)), null != k[e - 1] || !!b)
                y(t => ({
                    ...t,
                    currentPage: e
                }));
        }, [
            B.pageSize,
            M,
            b,
            k,
            F,
            E
        ]), H = a.useRef(null);
    a.useEffect(() => {
        F(H.current);
    }, [F]);
    let V = a.useMemo(() => {
        var e;
        return null !== (e = k[B.currentPage - 1]) && void 0 !== e ? e : [];
    }, [
        k,
        B.currentPage
    ]);
    return null == i ? null : (0, s.jsxs)('div', {
        className: r()(j.container),
        children: [
            (0, s.jsx)(P, {
                guildId: p,
                storedSearchQuery: u
            }),
            (0, s.jsxs)('div', {
                className: r()(j.scrollerContainer),
                children: [
                    !U && (0, s.jsx)(G, {
                        guild: i,
                        bans: h,
                        sortedBans: V,
                        ref: f
                    }),
                    !b && U && (0, s.jsxs)(d.EmptyState, {
                        theme: x,
                        className: j.emptyState,
                        children: [
                            (0, s.jsx)(d.EmptyStateImage, {
                                darkSrc: n(532747),
                                lightSrc: n(433466),
                                width: 256,
                                height: 212
                            }),
                            (0, s.jsx)(d.EmptyStateText, {
                                note: D.Z.Messages.BANS_NO_USERS_BANNED,
                                style: { maxWidth: 300 },
                                children: D.Z.Messages.NO_BANS
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: r()(j.__invalid_paginationContainer),
                children: (0, s.jsx)(d.Paginator, {
                    className: r()(j.paginationInput),
                    totalCount: M.length + (b ? B.pageSize : 0),
                    pageSize: B.pageSize,
                    currentPage: B.currentPage,
                    onPageChange: w,
                    maxVisiblePages: 9
                })
            })
        ]
    });
}
