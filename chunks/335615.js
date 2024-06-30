n.d(t, {
    Z: function () {
        return el;
    }
}), n(47120), n(724458);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(392711), o = n.n(r), c = n(91192), u = n(924826), d = n(873546), h = n(442837), p = n(902704), m = n(481060), _ = n(239091), f = n(941028), E = n(144144), C = n(276264), g = n(607070), I = n(100527), x = n(367907), T = n(906732), N = n(493324), v = n(611064), S = n(677432), Z = n(178762), A = n(868671), M = n(623624), b = n(518738), R = n(280234), j = n(480384), L = n(155409), P = n(484459), O = n(103575), y = n(439170), D = n(430824), k = n(111583), U = n(594174), w = n(153124), B = n(151827), H = n(176278), G = n(585483), V = n(823379), F = n(51144), W = n(998502), z = n(981631), Y = n(689938), K = n(279691);
function q(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let X = W.ZP.getEnableHardwareAcceleration(), Q = 44 + C.x, J = {
        origin: {
            x: 38,
            y: 11
        },
        targetWidth: 232,
        targetHeight: 40,
        offset: {
            x: 0,
            y: 0
        }
    };
class $ extends a.Component {
    shouldComponentUpdate(e) {
        return !(0, p.Z)(this.props, e, ['channelId']);
    }
    render() {
        let {
                colorString: e,
                colorRoleName: t,
                isOwner: n,
                nick: a,
                user: l,
                currentUser: s,
                activities: r,
                applicationStream: o,
                status: c,
                channel: u,
                guildId: h,
                isTyping: p,
                isMobileOnline: _,
                lastOnlineTimestamp: f,
                premiumSince: E,
                ...g
            } = this.props, I = null != E ? new Date(E) : null;
        return (0, i.jsx)(m.Popout, {
            preload: () => (0, P.W)(l, {
                channelId: u.id,
                guildId: h
            }),
            renderPopout: this.renderUserPopout,
            position: d.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: this.handleShiftClick,
            children: (d, m) => {
                let {isShown: E} = m;
                return (0, i.jsx)(C.Z, {
                    className: K.member,
                    onContextMenu: this.renderUserContextMenu,
                    shouldAnimateStatus: X,
                    user: l,
                    currentUser: s,
                    nick: a,
                    status: c,
                    activities: r,
                    applicationStream: o,
                    isOwner: n,
                    premiumSince: I,
                    colorString: e,
                    colorRoleName: t,
                    isTyping: p,
                    channel: u,
                    guildId: h,
                    isMobile: _,
                    onClickPremiumGuildIcon: this.openGuildSubscriptionModal,
                    selected: E,
                    itemProps: g,
                    lastOnlineTimestamp: f,
                    ...d
                });
            }
        });
    }
    constructor(...e) {
        super(...e), q(this, 'renderUserContextMenu', e => {
            (0, _.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('79695'),
                    n.e('17400'),
                    n.e('12435'),
                    n.e('47195')
                ]).then(n.bind(n, 757387));
                return t => (0, i.jsx)(e, {
                    ...t,
                    user: this.props.user,
                    guildId: this.props.guildId,
                    channel: this.props.channel,
                    showMediaItems: !0
                });
            });
        }), q(this, 'handleShiftClick', () => {
            let {
                    user: e,
                    channel: t
                } = this.props, n = '@'.concat(F.ZP.getUserTag(e, { decoration: 'never' })), i = '<@'.concat(e.id, '>');
            G.S.dispatchToLastSubscribed(z.CkL.INSERT_TEXT, {
                plainText: n,
                rawText: i
            }), E.Z.startTyping(t.id);
        }), q(this, 'openGuildSubscriptionModal', e => {
            let {guildId: t} = this.props;
            if (null != t)
                e.stopPropagation(), (0, M.f)({
                    guildId: t,
                    location: {
                        section: z.jXE.MEMBER_LIST,
                        object: z.qAy.BOOST_GEM_ICON
                    }
                });
        }), q(this, 'renderUserPopout', e => (0, i.jsx)(O.Z, {
            ...e,
            location: 'ChannelMembers',
            userId: this.props.user.id,
            guildId: this.props.guildId,
            channelId: this.props.channel.id,
            roleId: this.props.colorRoleId,
            analyticsParams: {
                location: {
                    page: z.ZY5.GUILD_CHANNEL,
                    section: z.jXE.MEMBER_LIST
                }
            }
        }));
    }
}
let ee = a.memo(e => {
        let {
                colorRoleId: t,
                ...n
            } = e, {
                channel: l,
                user: s,
                status: r,
                isGuildEligibleForRecentlyOnline: o,
                index: u
            } = e, d = (0, c.JA)(''.concat(u)), p = (0, h.e7)([k.Z], () => k.Z.isTyping(l.id, s.id)), m = (0, h.e7)([U.default], () => U.default.getCurrentUser()), _ = (0, h.e7)([D.Z], () => {
                var e;
                return null != t ? null === (e = D.Z.getRole(l.guild_id, t)) || void 0 === e ? void 0 : e.name : void 0;
            }, [
                l,
                t
            ]);
        return a.useEffect(() => {
            r === z.Skl.OFFLINE && o && R.Z.trackExposure({ location: 'guild_member_list' });
        }, [
            o,
            r
        ]), (0, i.jsx)($, {
            ...n,
            ...d,
            isTyping: p,
            currentUser: m,
            colorRoleName: _
        });
    }), et = a.memo(function (e) {
        let {
                id: t,
                title: n,
                count: a,
                guildId: l
            } = e, s = (0, b.p9)({
                roleId: t,
                guildId: l,
                size: 16
            });
        return t === z.Skl.UNKNOWN ? (0, i.jsx)('div', {
            className: K.membersGroup,
            children: (0, i.jsx)('div', { className: K.memberGroupsPlaceholder })
        }) : (0, i.jsxs)(B.Z, {
            className: K.membersGroup,
            children: [
                (0, i.jsx)(m.HiddenVisually, {
                    children: Y.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                        title: n,
                        count: a
                    })
                }),
                (0, i.jsxs)('span', {
                    'aria-hidden': !0,
                    children: [
                        null != s ? (0, i.jsx)(H.Z, {
                            className: K.roleIcon,
                            ...s
                        }) : null,
                        n,
                        ' \u2014 ',
                        a
                    ]
                })
            ]
        });
    });
function en(e) {
    let {index: t} = e, n = (0, c.JA)(''.concat(t));
    return (0, i.jsx)(C.Z, { itemProps: n });
}
class ei extends a.Component {
    shouldComponentUpdate(e) {
        return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length;
    }
    componentDidMount() {
        this.updateSubscription(), this.trackMemberListViewed(), this._areActivitiesExperimentallyHidden = (0, N.$)('ChannelMembers');
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen();
    }
    getContentFeedAdjustedDimensions(e) {
        let {
                height: t,
                rowHeight: n,
                y: i
            } = e, a = this.getContentFeedHeight(), l = Math.max(0, t - Math.max(0, a - i)), s = Math.floor(l / n);
        return {
            height: l,
            rowHeight: n,
            rowsVisible: s,
            y: Math.max(0, i - a)
        };
    }
    getDimensions() {
        let e = this._list;
        if (null == e)
            return {
                y: 0,
                height: 0,
                rowHeight: 0
            };
        let {
                offsetHeight: t,
                scrollTop: n
            } = e.getScrollerState(), i = Math.floor(t / Q);
        return this.getContentFeedAdjustedDimensions({
            height: t,
            rowHeight: Q,
            rowsVisible: i,
            y: n
        });
    }
    render() {
        let {
            groups: e,
            listId: t,
            channel: n
        } = this.props;
        return (0, i.jsx)(m.FocusJumpSection, {
            children: a => (0, i.jsx)(w.FG, {
                children: l => (0, i.jsx)('aside', {
                    className: s()(K.membersWrap, K.hiddenMembers),
                    'aria-labelledby': l,
                    children: (0, i.jsx)(m.HeadingLevel, {
                        component: (0, i.jsx)(m.HiddenVisually, {
                            children: (0, i.jsx)(m.H, {
                                id: l,
                                children: Y.Z.Messages.MEMBERS_LIST_LANDMARK_LABEL.format({ channel: n.name })
                            })
                        }),
                        children: (0, i.jsx)(c.SJ, {
                            children: n => {
                                let {
                                    ref: l,
                                    role: r,
                                    ...o
                                } = n;
                                return (0, i.jsx)(m.List, {
                                    innerRole: r,
                                    innerAriaLabel: Y.Z.Messages.MEMBERS,
                                    ref: e => {
                                        var t;
                                        this._list = e, this.props.listRef.current = e, l.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
                                    },
                                    className: s()(K.members, { [K.fullWidth]: d.tq }),
                                    paddingTop: 0,
                                    sectionHeight: 40,
                                    rowHeight: this.getRowHeightComputer(),
                                    renderSection: this.renderSection,
                                    renderRow: this.renderRow,
                                    sections: e.map(e => e.count),
                                    onScroll: this.handleScroll,
                                    fade: !0,
                                    customTheme: !0,
                                    ...o,
                                    ...a
                                }, t);
                            }
                        })
                    })
                })
            })
        });
    }
    constructor(...e) {
        super(...e), q(this, '_list', null), q(this, '_areActivitiesExperimentallyHidden', !1), q(this, 'lastReportedAnalyticsChannel', void 0), q(this, 'setList', e => {
            this._list = e, this.props.listRef.current = e;
        }), q(this, 'renderSection', e => {
            let {section: t} = e, {
                    groups: n,
                    channel: l
                } = this.props, s = n[t];
            return (0, v.R)(s) ? (0, a.createElement)(v.Z, {
                ...s,
                key: 'section-'.concat(t)
            }) : 0 === t ? (0, i.jsx)(L.Z, {
                tutorialId: 'whos-online',
                position: 'left',
                inlineSpecs: J,
                children: (0, i.jsx)(et, {
                    ...s,
                    guildId: l.guild_id
                })
            }, 'section-'.concat(t)) : (0, a.createElement)(et, {
                ...s,
                key: 'section-'.concat(t),
                guildId: l.guild_id
            });
        }), q(this, 'getRowProps', e => {
            let {
                    groups: t,
                    rows: n
                } = this.props, i = t[e.section];
            if (null == i)
                return null;
            let {index: a} = i;
            return null == a || 'row' !== e.type ? null : n[a + 1 + e.row];
        }), q(this, 'renderRow', e => {
            let {
                    section: t,
                    row: n,
                    rowIndex: a
                } = e, {
                    channel: l,
                    isRecentlyOnlineEnabled: s
                } = this.props, r = this.getRowProps(e);
            if (null != r) {
                if (r.type === y.so.MEMBER && 'user' in r) {
                    let {
                        colorString: e,
                        colorRoleId: t,
                        user: n,
                        status: o,
                        isOwner: c,
                        isMobileOnline: u,
                        nick: d,
                        activities: h,
                        applicationStream: p,
                        premiumSince: m,
                        lastOnlineTimestamp: _
                    } = r;
                    return (0, i.jsx)(ee, {
                        colorString: e,
                        colorRoleId: t,
                        user: n,
                        status: o,
                        isOwner: c,
                        nick: d,
                        activities: this._areActivitiesExperimentallyHidden ? [] : h,
                        applicationStream: p,
                        channel: l,
                        guildId: l.guild_id,
                        premiumSince: m,
                        isMobileOnline: u,
                        index: a,
                        lastOnlineTimestamp: s ? _ : void 0,
                        isGuildEligibleForRecentlyOnline: this.props.isGuildEligibleForRecentlyOnline
                    }, 'member-'.concat(r.user.id));
                }
                if (r.type === y.so.CONTENT_INVENTORY) {
                    let e = 'content-inventory-'.concat(r.entry.id);
                    return null != r.entry.original_id && (e += '-'.concat(r.entry.original_id)), (0, i.jsx)(Z.ZP, {
                        ...r,
                        channel: this.props.channel,
                        index: a
                    }, e);
                }
                if (r.type === y.so.HIDDEN_CONTENT_INVENTORY)
                    return (0, i.jsx)(S.Z, {}, 'content-inventory-hidden-entry');
            }
            return (0, i.jsx)(en, { index: a }, 'placeholder-'.concat(t, ':').concat(n));
        }), q(this, 'handleScroll', () => {
            this.updateSubscription(), this.updateMaxContentFeedRowSeen();
        }), q(this, 'updateMaxContentFeedRowSeen', o().debounce(() => {
            let e = this._list;
            if (null == e)
                return;
            let {
                offsetHeight: t,
                scrollTop: n
            } = e.getScrollerState();
            this.props.updateMaxContentFeedRowSeen(n + t - 40);
        }, 50)), q(this, 'getContentFeedGroup', () => {
            let e = this.props.groups[A.T];
            if ((0, v.R)(e))
                return e;
        }), q(this, 'hasContentFeed', () => null != this.getContentFeedGroup()), q(this, 'getRowHeightComputer', () => {
            let e = this.getContentFeedGroup();
            if (null != e) {
                let {rows: t} = this.props, n = e.index;
                return function (e, i) {
                    if (e === A.T) {
                        let e = t[n + 1 + i];
                        return (0, Z.iZ)(e);
                    }
                    return Q;
                };
            }
            return Q;
        }), q(this, 'getContentFeedHeight', () => {
            let e = this.getContentFeedGroup();
            return null != e ? e.feedHeight + 40 : 0;
        }), q(this, 'updateSubscription', o().debounce(() => {
            if (null == this._list)
                return;
            let {channel: e} = this.props, {
                    rowHeight: t,
                    y: n,
                    height: i
                } = this.getDimensions();
            (0, f.TV)({
                guildId: e.guild_id,
                channelId: e.id,
                y: n,
                height: i,
                rowHeight: t
            });
        }, 50)), q(this, 'trackMemberListViewed', () => {
            var e;
            if (this.lastReportedAnalyticsChannel === this.props.channel.id)
                return;
            let t = null === (e = this._list) || void 0 === e ? void 0 : e.getItems(), {rowsVisible: n} = this.getDimensions();
            if (void 0 === n || 0 === n || null == t)
                return;
            this.hasContentFeed() && (t = t.filter(e => e.section !== A.T));
            let i = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(V.lm);
            if (0 === i.length)
                return;
            let a = i.reduce((e, t) => t.type !== y.so.MEMBER ? e : (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === z.IIU.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, e), {
                num_users_visible: 0,
                num_users_visible_with_mobile_indicator: 0,
                num_users_visible_with_game_activity: 0,
                num_users_visible_with_activity: 0,
                num_users_visible_with_avatar_decoration: 0
            });
            this.lastReportedAnalyticsChannel = this.props.channel.id, x.ZP.trackWithMetadata(z.rMx.MEMBER_LIST_VIEWED, { ...a });
        });
    }
}
function ea(e) {
    let {
            channel: t,
            className: n
        } = e, {analyticsLocations: l} = (0, T.ZP)(I.Z.MEMBER_LIST), r = (0, h.e7)([g.Z], () => g.Z.keyboardModeEnabled), o = (0, h.cj)([y.ZP], () => y.ZP.getProps(t.guild_id, t.id)), {
            rows: d,
            groups: p,
            version: m,
            updateMaxRowSeen: _
        } = (0, A.H)({
            memberStoreProps: o,
            channelId: t.id,
            guildId: t.guild_id
        }), f = a.useRef(null), E = a.useCallback((e, t) => {
            let n = f.current;
            if (null == n)
                return;
            let i = parseInt(t, 10), [a, l] = n.getSectionRowFromIndex(i), s = 0 === a && 0 === l ? Q : 0;
            n.scrollToIndex({
                section: a,
                row: l,
                padding: s,
                callback: () => {
                    requestAnimationFrame(() => {
                        var t;
                        return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({ preventScroll: !0 });
                    });
                }
            });
        }, []), C = a.useCallback(() => new Promise(e => {
            let t = f.current;
            if (null == t)
                return e();
            t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
        }), []), x = a.useCallback(() => new Promise(e => {
            let t = f.current;
            if (null == t)
                return e();
            t.scrollToBottom({
                callback() {
                    requestAnimationFrame(() => setTimeout(e, 100));
                }
            });
        }), []), N = (0, u.ZP)({
            id: 'members-'.concat(t.id),
            setFocus: E,
            isEnabled: r,
            scrollToStart: C,
            scrollToEnd: x
        }), v = (0, h.e7)([j.Z], () => j.Z.getPriorityGuilds().includes(t.guild_id));
    return (0, i.jsx)(T.Gt, {
        value: l,
        children: (0, i.jsx)('div', {
            className: s()(K.container, n),
            children: (0, i.jsx)(c.bG, {
                navigator: N,
                children: (0, i.jsx)(ei, {
                    ...e,
                    ...o,
                    version: m,
                    groups: p,
                    rows: d,
                    listRef: f,
                    isGuildEligibleForRecentlyOnline: v,
                    updateMaxContentFeedRowSeen: _
                })
            })
        })
    });
}
function el(e) {
    let {
            channel: t,
            className: n
        } = e, l = a.useDeferredValue(t);
    return a.useMemo(() => (0, i.jsx)(ea, {
        channel: l,
        className: n
    }), [
        l,
        n
    ]);
}
