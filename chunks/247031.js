n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120),
    n(653041);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(239091),
    u = n(749210),
    _ = n(493544),
    I = n(479531),
    E = n(112831),
    T = n(210887),
    m = n(246946),
    N = n(594174),
    S = n(251625),
    h = n(226951),
    g = n(51144),
    C = n(434404),
    x = n(372454),
    p = n(999382),
    R = n(84613),
    f = n(740903),
    L = n(1080),
    O = n(981631),
    A = n(689938),
    M = n(173795),
    D = n(440376);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    let { transitionState: t, guild: n, user: i, ban: r, hideDiscriminator: l, onClose: o } = e,
        [d, _] = a.useState(!1),
        [T, m] = a.useState(null);
    async function N() {
        if (null != n) {
            m(null), _(!0);
            try {
                await u.Z.unbanUser(n.id, i.id), o();
            } catch (e) {
                m(new I.Z(e)), _(!1);
            }
        }
    }
    return (0, s.jsxs)(c.ModalRoot, {
        className: M.bannedUserModal,
        transitionState: t,
        children: [
            (0, s.jsxs)(c.ModalHeader, {
                className: M.header,
                separator: !1,
                children: [
                    (0, s.jsx)(E.Z, {
                        size: E.Z.Sizes.SIZE_24,
                        className: M.userUsername,
                        children: g.ZP.getUserTag(i, {
                            mode: 'username',
                            identifiable: l ? 'never' : 'always'
                        })
                    }),
                    l || i.isPomelo()
                        ? null
                        : (0, s.jsxs)(E.Z, {
                              size: E.Z.Sizes.SIZE_24,
                              className: M.userDiscrim,
                              children: ['#', i.discriminator]
                          })
                ]
            }),
            (0, s.jsxs)(c.ModalContent, {
                className: M.content,
                children: [
                    (0, s.jsx)(c.Text, {
                        className: M.reasonHeader,
                        variant: 'text-xs/normal',
                        children: A.Z.Messages.BAN_REASON
                    }),
                    (0, s.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: null != r.reason && '' !== r.reason ? r.reason : A.Z.Messages.NO_BAN_REASON
                    }),
                    null != T
                        ? (0, s.jsx)(c.Text, {
                              className: M.error,
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: T.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, s.jsxs)(c.ModalFooter, {
                className: M.footer,
                children: [
                    (0, s.jsx)(c.Button, {
                        onClick: N,
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.RED,
                        submitting: d,
                        children: A.Z.Messages.REVOKE_BAN
                    }),
                    (0, s.jsx)(c.Button, {
                        onClick: o,
                        children: A.Z.Messages.DONE
                    })
                ]
            })
        ]
    });
}
class Z extends a.PureComponent {
    render() {
        let { user: e, hideDiscriminator: t, guild: n } = this.props;
        return (0, s.jsxs)(c.Clickable, {
            className: r()(M.bannedUser, D.card),
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, s.jsx)(c.Avatar, {
                    src: e.getAvatarURL(null == n ? void 0 : n.id, 40),
                    'aria-label': e.username,
                    size: c.AvatarSizes.SIZE_40,
                    className: M.bannedUserAvatar
                }),
                (0, s.jsxs)('div', {
                    className: M.username,
                    children: [
                        g.ZP.getUserTag(e, {
                            mode: 'username',
                            identifiable: t ? 'never' : 'always'
                        }),
                        !t &&
                            !e.isPomelo() &&
                            (0, s.jsxs)('span', {
                                className: M.discrim,
                                children: ['#', e.discriminator]
                            })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'handleShowModal', () => {
                let { guild: e, user: t, hideDiscriminator: n, ban: a } = this.props;
                (0, c.openModal)((i) =>
                    (0, s.jsx)(j, {
                        ...i,
                        guild: e,
                        user: t,
                        ban: a,
                        hideDiscriminator: n
                    })
                );
            }),
            v(this, 'handleContextMenu', (e) => {
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e('23835').then(n.bind(n, 768079));
                    return (t) =>
                        (0, s.jsx)(e, {
                            ...t,
                            user: this.props.user
                        });
                });
            });
    }
}
class b extends a.PureComponent {
    makeFilter(e) {
        if (null == e || 0 === e.length) return (e) => null != e;
        {
            let t = RegExp('^'.concat(h.Z.escape(e)), 'i');
            return (n) => null != n && (n.id === e || t.test(n.username));
        }
    }
    render() {
        let { bans: e, guild: t, searchQuery: n } = this.props;
        if (null == t) return null;
        let a = this.getSortedBans(e, n);
        return (0, s.jsx)(_.Xi, {
            sections: [Math.max(1, a.length)],
            sectionHeight: this.getSectionHeight,
            renderSection: this.renderSection,
            rowHeight: this.getRowHeight,
            renderRow: this.renderRow
        });
    }
    handleModerationClick() {
        C.Z.setSection(O.pNK.SAFETY), (0, R.K)(f.u.DM_AND_SPAM_PROTECTION);
    }
    handleQueryChange(e) {
        C.Z.setSearchQuery(e);
    }
    handleQueryClear() {
        C.Z.setSearchQuery('');
    }
    constructor(...e) {
        super(...e),
            v(
                this,
                'getSortedBans',
                (0, S.oH)((e, t) => {
                    if (null == e) return [];
                    let n = this.makeFilter(t),
                        s = [];
                    for (let t of e.keys()) {
                        let e = N.default.getUser(t);
                        null != e && n(e) && s.push(e);
                    }
                    return s.sort((e, t) => e.username.localeCompare(t.username));
                })
            ),
            v(this, 'getRowHeight', (e, t) => {
                var n;
                if (e > 0) return 0;
                let { bans: s, searchQuery: a } = this.props,
                    i = this.getSortedBans(s, a);
                if (0 === i.length && 1 === t) return 56;
                let r = i[t],
                    l = null == s ? void 0 : s.get(null !== (n = null == r ? void 0 : r.id) && void 0 !== n ? n : '');
                return null == r || null == l ? 0 : 56;
            }),
            v(this, 'renderRow', (e) => {
                var t;
                let { section: n, row: a } = e,
                    { bans: i, streamerMode: r, guild: l, searchQuery: o } = this.props;
                if (n > 0) return null;
                if (null == i && 0 === a)
                    return (0, s.jsx)(
                        c.Spinner,
                        {
                            className: M.spinner,
                            type: c.Spinner.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let d = this.getSortedBans(i, o)[a],
                    u = null == i ? void 0 : i.get(null !== (t = null == d ? void 0 : d.id) && void 0 !== t ? t : '');
                if (null != d && null != u)
                    return (0, s.jsx)(
                        Z,
                        {
                            user: d,
                            ban: u,
                            hideDiscriminator: r,
                            guild: l
                        },
                        d.id
                    );
            }),
            v(this, 'getSectionHeight', (e) => {
                if (e > 0) return 0;
                let { bans: t } = this.props;
                return null == t ? 462 : 120;
            }),
            v(this, 'renderSection', () => {
                var e;
                let t;
                let { bans: a, theme: i, searchQuery: r } = this.props;
                null == a
                    ? (t = null)
                    : (null == a ? void 0 : a.size) === 0 &&
                      (t = (0, s.jsxs)(c.EmptyState, {
                          theme: i,
                          className: M.emptyState,
                          children: [
                              (0, s.jsx)(c.EmptyStateImage, {
                                  darkSrc: n(532747),
                                  lightSrc: n(433466),
                                  width: 256,
                                  height: 212
                              }),
                              (0, s.jsx)(c.EmptyStateText, {
                                  note: A.Z.Messages.BANS_NO_USERS_BANNED,
                                  style: { maxWidth: 300 },
                                  children: A.Z.Messages.NO_BANS
                              })
                          ]
                      }));
                let l = null !== (e = null == a ? void 0 : a.size) && void 0 !== e ? e : 0;
                return (0, s.jsxs)(
                    c.FormSection,
                    {
                        tag: c.FormTitleTags.H1,
                        title: A.Z.Messages.BANS_HEADER.format({ bans: l }),
                        children: [
                            (0, s.jsxs)('div', {
                                className: M.settingsHeader,
                                children: [
                                    (0, s.jsx)(c.FormText, {
                                        type: c.FormTextTypes.DESCRIPTION,
                                        className: M.description,
                                        children: A.Z.Messages.BANS_HINT.format({ onModerationClick: this.handleModerationClick })
                                    }),
                                    null == t &&
                                        (0, s.jsx)(c.SearchBar, {
                                            className: M.searchBar,
                                            query: null != r ? r : '',
                                            placeholder: A.Z.Messages.BANS_SEARCH_PLACEHOLDER,
                                            'aria-label': A.Z.Messages.BANS_SEARCH_PLACEHOLDER,
                                            onChange: this.handleQueryChange,
                                            onClear: this.handleQueryClear
                                        })
                                ]
                            }),
                            (0, s.jsx)(c.FormDivider, { style: { marginBottom: -1 } }),
                            t
                        ]
                    },
                    'bans-header'
                );
            });
    }
}
let U = o.ZP.connectStores([p.Z, T.Z, m.Z], () => {
    let { bans: e, guild: t, searchQuery: n } = p.Z.getProps();
    return {
        searchQuery: null != n ? n : '',
        bans: e,
        guild: t,
        theme: T.Z.theme,
        streamerMode: m.Z.hidePersonalInformation
    };
})(b);
function G() {
    var e;
    let { guild: t } = (0, o.e7)([p.Z], () => p.Z.getProps(), [], l.isEqual),
        { enabled: n } = x.T.useExperiment(
            {
                guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : O.lds,
                location: '4d6318_1'
            },
            { autoTrackExposure: !0 }
        );
    return n ? (0, s.jsx)(L.Z, {}) : (0, s.jsx)(U, {});
}
