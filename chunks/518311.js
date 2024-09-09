n.d(t, {
    Z: function () {
        return em;
    }
}),
    n(411104),
    n(653041),
    n(47120);
var i,
    s = n(735250),
    a = n(470079),
    l = n(120356),
    r = n.n(l),
    o = n(392711),
    c = n.n(o),
    u = n(913527),
    d = n.n(u),
    h = n(873546),
    m = n(442837),
    p = n(481060),
    _ = n(570140),
    f = n(26151),
    E = n(493683),
    g = n(758059),
    C = n(447543),
    I = n(708690),
    x = n(194359),
    T = n(425493),
    v = n(461745),
    S = n(40851),
    N = n(367907),
    A = n(762914),
    Z = n(43267),
    M = n(933557),
    b = n(600164),
    R = n(313201),
    L = n(366980),
    j = n(703656),
    P = n(93127),
    O = n(60349),
    y = n(428598),
    D = n(131704),
    k = n(592125),
    U = n(341165),
    w = n(544610),
    B = n(19780),
    H = n(306680),
    G = n(699516),
    V = n(246946),
    F = n(594174),
    W = n(626135),
    z = n(572004),
    Y = n(585483),
    K = n(823379),
    q = n(709054),
    X = n(51144),
    Q = n(73752),
    J = n(665149),
    $ = n(575464),
    ee = n(981631),
    et = n(689938),
    en = n(715252),
    ei = n(787223),
    es = n(224499);
function ea(e, t, n) {
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
let el = (0, R.hQ)(),
    er = (0, R.hQ)();
function eo(e) {
    let { className: t, children: n } = e;
    return (0, s.jsxs)(b.Z, {
        align: b.Z.Align.CENTER,
        justify: b.Z.Justify.CENTER,
        direction: b.Z.Direction.VERTICAL,
        className: r()(en.errorState, t),
        children: [(0, s.jsx)('div', { className: r()(en.errorStateIcon, es.marginBottom20) }), n]
    });
}
let ec = (e) => {
        var t;
        let { channel: n, onClose: i } = e,
            a = null !== (t = (0, M.ZP)(n)) && void 0 !== t ? t : '',
            l = (0, m.e7)([H.ZP], () => {
                var e;
                return null !== (e = H.ZP.lastMessageId(n.id)) && void 0 !== e ? e : n.id;
            });
        return (0, s.jsx)(p.Clickable, {
            onClick: () => {
                (0, j.XU)(ee.ME, n.id), i();
            },
            children: (0, s.jsxs)('div', {
                className: en.confirmChannelItemContainer,
                children: [
                    (0, s.jsx)(p.Avatar, {
                        src: (0, Z.x)(n),
                        size: p.AvatarSizes.SIZE_24,
                        'aria-label': a
                    }),
                    (0, s.jsx)('span', {
                        className: en.confirmChannelName,
                        children: a
                    }),
                    (0, s.jsx)('span', {
                        className: en.lastActiveTimestamp,
                        children: d()(q.default.extractTimestamp(l)).fromNow()
                    })
                ]
            })
        });
    },
    eu = (e) => {
        let { onConfirm: t, channelIds: n, ...i } = e,
            a = (0, m.Wu)([k.Z], () => Array.from(n).map(k.Z.getChannel), [n]);
        return (0, s.jsxs)(p.ConfirmModal, {
            header: et.Z.Messages.GROUP_DM_INVITE_CONFIRM,
            confirmText: et.Z.Messages.GROUP_DM_INVITE_CONFIRM_BUTTON,
            cancelText: et.Z.Messages.CANCEL,
            onConfirm: t,
            confirmButtonColor: p.Button.Colors.BRAND,
            ...i,
            children: [
                (0, s.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    children: et.Z.Messages.GROUP_DM_INVITE_CONFIRM_DESCRIPTION
                }),
                (0, s.jsx)(p.FormTitle, {
                    className: en.selectExistingFormHeader,
                    children: et.Z.Messages.GROUP_DM_INVITE_SELECT_EXISTING
                }),
                (0, s.jsx)(p.Scroller, {
                    className: en.confirmInviteScroller,
                    children: a
                        .filter(K.lm)
                        .sort((e, t) => {
                            var n, i;
                            let s = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id,
                                a = null !== (i = t.lastMessageId) && void 0 !== i ? i : t.id;
                            return q.default.compare(a, s);
                        })
                        .map((e) =>
                            (0, s.jsx)(
                                ec,
                                {
                                    onClose: i.onClose,
                                    channel: e
                                },
                                e.id
                            )
                        )
                })
            ]
        });
    };
class ed extends (i = a.PureComponent) {
    _getAnalyticsEntryPoint() {
        let { channel: e } = this.props,
            t = '',
            n = '';
        return (
            null != e ? (e.isDM() ? ((t = 'Add Friends to DM'), (n = 'DM')) : ((t = 'Add Friends to DM'), (n = 'Group DM'))) : ((t = 'New Group DM'), (n = 'Friends List')),
            {
                entryPointType: t,
                entryPointSource: n
            }
        );
    }
    componentDidMount() {
        let { channel: e } = this.props;
        _.Z.wait(() => I.Z.open(null == e ? void 0 : e.id));
        let t = (0, N.v_)(e);
        W.default.track(ee.rMx.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends()
        }),
            Y.S.subscribe(ee.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            Y.S.subscribe(ee.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        Y.S.unsubscribe(ee.CkL.SCROLL_PAGE_UP, this.scrollPageUp), Y.S.unsubscribe(ee.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), _.Z.wait(() => I.Z.close());
    }
    isNotFriends() {
        let { channel: e } = this.props;
        if (null == e || !e.isDM()) return !1;
        let t = e.getRecipientId();
        if (null == t) throw Error('no recipient in DM');
        return !G.Z.isFriend(t);
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = Q.Z.getCurrentConfig({ location: '5326c5_1' }, { autoTrackExposure: !1 });
        C.Z.createInvite(e.id, { max_age: t }, ee.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = F.default.getCurrentUser();
        return null != t && t.isStaff() ? ee.p3w : null != e && e.isBroadcastChannel() ? ee.keq : null != e && e.userLimit > 0 ? e.userLimit : ee.pAY;
    }
    getRemaining() {
        let { channel: e, selectedUsers: t } = this.props,
            n = (null == e ? 0 : e.recipients.length) + 1;
        return this.getMaxParticipants() - t.size - n;
    }
    renderCreateGroupButton() {
        let { channel: e, selectedUsers: t } = this.props,
            n = this.getRemaining(),
            i = (null != e && 0 === t.size) || n < 0,
            a = t.size > 1 ? et.Z.Messages.CREATE_GROUP_DM : et.Z.Messages.CREATE_DM;
        return (0, s.jsx)(p.Button, {
            fullWidth: !0,
            disabled: i,
            onClick: this.handleInviteUsers,
            children: a
        });
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            i = 0 === t.size || n < 0;
        return (0, s.jsx)('div', {
            className: en.addButton,
            children: (0, s.jsx)(p.Button, {
                size: p.Button.Sizes.SMALL,
                disabled: i,
                onClick: this.handleInviteUsers,
                children: et.Z.Messages.ADD
            })
        });
    }
    renderSubtitle() {
        if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
        let e = this.getRemaining(),
            t = e <= 0 ? et.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({ number: this.getMaxParticipants() }) : et.Z.Messages.GROUP_DM_INVITE_REMAINING.format({ number: e });
        return (0, s.jsx)(p.Text, {
            variant: 'text-xs/normal',
            className: r()(en.subtitle, { [en.subtitleWarning]: e < 0 }, es.marginTop4),
            children: t
        });
    }
    renderSearchBar() {
        var e;
        let { query: t, hasFriends: n, results: i, selectedRow: a, selectedUsers: l } = this.props;
        if (!n || this.isNotFriends()) return null;
        let o = [];
        return (
            l.forEach((e) => {
                let t = F.default.getUser(e);
                null != t && o.push(X.ZP.getName(t));
            }),
            (0, s.jsxs)(b.Z, {
                className: r()(en.searchBar, es.marginTop20),
                children: [
                    (0, s.jsx)(v.ZP, {
                        ref: this.searchBarRef,
                        className: en.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === l.size ? et.Z.Messages.GROUP_DM_SEARCH_PLACEHOLDER : void 0,
                        disabled: this.isPartyFull(),
                        size: v.ZP.Sizes.MEDIUM,
                        query: t,
                        selectedRow: a,
                        sections: [null !== (e = null == i ? void 0 : i.length) && void 0 !== e ? e : 0],
                        tags: o,
                        onSelect: this.handleSelect,
                        onSelectionChange: this.handleSelectionChange,
                        onQueryChange: this.handleQueryChange,
                        onRemoveTag: this.handleRemoveUser,
                        inputProps: {
                            'aria-labelledby': el,
                            'aria-controls': er,
                            'aria-expanded': !0,
                            'aria-activedescendant': 'user-row-'.concat(a)
                        }
                    }),
                    this.renderAddUsersButton()
                ]
            })
        );
    }
    renderHeader() {
        let e = null != this.scrollerRef.current && this.state.separator,
            t = this.isNotFriends() ? et.Z.Messages.GROUP_DM_ADD_FRIENDS : et.Z.Messages.GROUP_DM_HEADER;
        return (0, s.jsxs)(p.ModalHeader, {
            direction: b.Z.Direction.VERTICAL,
            align: b.Z.Align.STRETCH,
            className: en.__invalid_header,
            separator: e,
            children: [
                h.tq ? this.renderMobileCloseButton() : null,
                (0, s.jsx)(p.Heading, {
                    id: el,
                    variant: 'heading-lg/semibold',
                    children: t
                }),
                this.renderSubtitle(),
                this.renderSearchBar()
            ]
        });
    }
    renderBody() {
        let { channel: e, hasFriends: t, results: n } = this.props;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error('no recipient in DM');
            let n = F.default.getUser(t),
                i = null != n ? n.username : '',
                a = null != n && G.Z.getRelationshipType(n.id) === ee.OGo.PENDING_OUTGOING;
            return (0, s.jsxs)(eo, {
                className: en.notFriends,
                children: [
                    (0, s.jsx)('div', { children: et.Z.Messages.GROUP_DM_INVITE_NOT_FRIENDS.format({ username: i }) }),
                    (0, s.jsx)(p.Button, {
                        disabled: a,
                        size: p.Button.Sizes.SMALL,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                        className: es.marginTop20,
                        children: a ? et.Z.Messages.ADD_FRIEND_BUTTON_AFTER : et.Z.Messages.ADD_FRIEND_BUTTON
                    })
                ]
            });
        }
        return t
            ? this.isPartyFull()
                ? (0, s.jsxs)(eo, {
                      className: en.partyFull,
                      children: [(0, s.jsx)('div', { children: et.Z.Messages.GROUP_DM_INVITE_FULL_MAIN }), (0, s.jsx)('div', { children: et.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({ number: this.getMaxParticipants() }) })]
                  })
                : 0 === n.length
                  ? (0, s.jsx)(eo, {
                        className: r()(en.noResults, es.marginBottom20),
                        children: (0, s.jsx)('div', { children: et.Z.Messages.GROUP_DM_INVITE_EMPTY })
                    })
                  : (0, s.jsx)(p.List, {
                        ref: this.scrollerRef,
                        sections: [n.length],
                        className: en.scroller,
                        renderRow: this.renderRow,
                        rowHeight: this.getRowHeight,
                        renderSection: this.renderSection,
                        sectionHeight: 0,
                        onScroll: this.handleScroll,
                        paddingTop: 0,
                        paddingBottom: 14,
                        fade: !0,
                        role: void 0,
                        innerRole: 'listbox',
                        innerId: er,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: 'vertical'
                    })
            : (0, s.jsxs)(eo, {
                  className: en.noFriends,
                  children: [
                      (0, s.jsx)('div', { children: et.Z.Messages.GROUP_DM_INVITE_NO_FRIENDS }),
                      (0, s.jsx)(p.Button, {
                          autoFocus: !0,
                          color: p.Button.Colors.GREEN,
                          fullWidth: !0,
                          size: p.Button.Sizes.SMALL,
                          onClick: this.handleAddFriendNavigation,
                          className: es.marginTop20,
                          children: et.Z.Messages.ADD_FRIEND
                      })
                  ]
              });
    }
    renderSection() {
        return null;
    }
    renderInviteLink() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: i } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let l = null != t ? (0, L.Z)(t.code) : '';
        return (0, s.jsxs)(a.Fragment, {
            children: [
                (0, s.jsx)(p.FormTitle, {
                    tag: 'h5',
                    className: es.marginBottom8,
                    children: et.Z.Messages.GROUP_DM_INVITE_LINK_TITLE
                }),
                (0, s.jsxs)(b.Z, {
                    className: r()(ei.input, { [ei.success]: i }),
                    justify: b.Z.Justify.BETWEEN,
                    align: b.Z.Align.CENTER,
                    children: [
                        l.length > 0
                            ? (0, s.jsx)(p.TextInput, {
                                  className: en.copyInput,
                                  name: 'invite',
                                  value: n ? et.Z.Messages.INSTANT_INVITE_HIDDEN : l,
                                  editable: !1,
                                  inputClassName: en.input,
                                  spellCheck: 'false',
                                  onClick: (e) => e.currentTarget.select()
                              })
                            : (0, s.jsx)(p.TextInput, {
                                  className: en.copyInput,
                                  name: 'invite',
                                  value: l,
                                  placeholder: (0, L.Z)(et.Z.Messages.GROUP_DM_INVITE_LINK_EXAMPLE),
                                  editable: !1,
                                  inputClassName: en.input,
                                  spellCheck: 'false',
                                  onClick: () => this.createInvite()
                              }),
                        z.wS && l.length > 0
                            ? (0, s.jsx)(p.Button, {
                                  size: p.Button.Sizes.SMALL,
                                  color: i ? p.Button.Colors.GREEN : p.Button.Colors.BRAND,
                                  className: en.copyButton,
                                  onClick: () => this.handleCopyInvite(l),
                                  children: i ? et.Z.Messages.INVITE_COPIED : et.Z.Messages.COPY
                              })
                            : null,
                        0 === l.length
                            ? (0, s.jsx)(p.Button, {
                                  size: p.Button.Sizes.SMALL,
                                  color: p.Button.Colors.BRAND,
                                  className: en.copyButton,
                                  onClick: () => this.createInvite(),
                                  children: et.Z.Messages.GROUP_DM_INVITE_LINK_CREATE
                              })
                            : null
                    ]
                }),
                l.length > 0
                    ? (0, s.jsx)(p.Text, {
                          variant: 'text-xs/normal',
                          className: r()(es.marginTop8, en.footerText),
                          children: et.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: ''.concat(24) })
                      })
                    : null
            ]
        });
    }
    renderFooter() {
        let { hasFriends: e, channel: t } = this.props;
        if (this.isNotFriends() || !e || this.isPartyFull()) return null;
        let n = null == t || t.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
        if (null != n)
            return (0, s.jsxs)(a.Fragment, {
                children: [
                    (0, s.jsx)('div', { className: en.footerSeparator }),
                    (0, s.jsx)(b.Z, {
                        direction: b.Z.Direction.VERTICAL,
                        className: en.footer,
                        children: n
                    })
                ]
            });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, s.jsxs)(p.ModalRoot, {
            transitionState: null != e ? e : p.ModalTransitionState.ENTERED,
            className: en.popout,
            children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            x.Z.sendRequest({
                discordTag: X.ZP.getUserTag(e, { identifiable: 'always' }),
                context: { location: 'Group DM' }
            });
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = y.Z.getUserAffinity(e);
                return null !== (t = null == n ? void 0 : n.communicationProbability) && void 0 !== t ? t : -1;
            })
        };
    }
    constructor(...e) {
        super(...e),
            ea(this, 'state', {
                separator: !1,
                copied: !1
            }),
            ea(this, 'copyTimeout', void 0),
            ea(this, 'scrollerRef', a.createRef()),
            ea(this, 'searchBarRef', a.createRef()),
            ea(this, '_mobileCloseRef', a.createRef()),
            ea(this, '_searchCounter', 0),
            ea(this, '_existingTimeout', null),
            ea(this, 'scrollPageUp', () => {
                var e;
                null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
            }),
            ea(this, 'scrollPageDown', () => {
                var e;
                null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
            }),
            ea(this, 'renderMobileCloseButton', () =>
                (0, s.jsx)('div', {
                    className: r()(en.mobileToolsContainer),
                    ref: this._mobileCloseRef,
                    children: (0, s.jsx)(p.FocusRingScope, {
                        containerRef: this._mobileCloseRef,
                        children: (0, s.jsx)('div', {
                            children: (0, s.jsx)(T.Z, {
                                className: en.mobileToolsCloseIcon,
                                closeAction: this.props.onClose,
                                keybind: 'ESC'
                            })
                        })
                    })
                })
            ),
            ea(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return null != n[t] ? 42 : 0;
            }),
            ea(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: i, selectedUsers: a, selectedRow: l, hideDiscriminator: r } = this.props,
                    o = i[n];
                if (null == o) return null;
                let { user: c, comparator: u } = o,
                    d = a.has(c.id);
                return (0, s.jsx)(
                    $.Z,
                    {
                        row: n,
                        user: c,
                        hideDiscriminator: r,
                        comparator: u,
                        checked: d,
                        selected: n === l,
                        onClick: this.handleClick,
                        onMouseEnter: this.focusResult,
                        'aria-posinset': n + 1,
                        'aria-setsize': i.length
                    },
                    c.id
                );
            }),
            ea(this, 'forceFocus', () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            ea(this, 'focusResult', (e) => {
                I.Z.select(e);
            }),
            ea(this, 'handleSelect', (e, t) => {
                let { results: n, channel: i } = this.props;
                null == t ? I.Z.clear(null == i ? void 0 : i.id) : null != n && this.handleClick(n[t].user.id);
            }),
            ea(this, 'handleSelectionChange', (e, t) => {
                I.Z.select(t);
                let n = this.scrollerRef.current;
                null != n &&
                    n.scrollToIndex({
                        section: e,
                        row: t,
                        padding: 8
                    });
            }),
            ea(this, 'handleQueryChange', (e) => {
                let { channel: t } = this.props,
                    n = (0, N.v_)(t);
                I.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        W.default.track(ee.rMx.SEARCH_USER_LIST_STARTED, {
                            ...n,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            search_query_length: e.length
                        }),
                            this._searchCounter++;
                    }, 500));
            }),
            ea(this, 'handleRemoveUser', (e) => {
                let t = Array.from(this.props.selectedUsers);
                I.Z.removeUser(t[e]), this.forceFocus();
            }),
            ea(this, 'handleClick', (e) => {
                let { selectedUsers: t, query: n, channel: i } = this.props;
                t.has(e) ? I.Z.removeUser(e) : (I.Z.addUser(e), n.length > 0 && I.Z.clear(null == i ? void 0 : i.id)), this.forceFocus();
            }),
            ea(this, 'handleAddFriendNavigation', () => {
                (0, j.uL)(ee.Z5c.FRIENDS), g.Z.setSection(ee.pJs.ADD_FRIEND), this.props.onClose();
            }),
            ea(this, 'handleScroll', () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            ea(this, 'createNewDM', (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    i = (0, N.v_)(n),
                    s = !0;
                1 === e.length && (s = null == E.Z._openCachedDMChannel(e[0])),
                    W.default.track(ee.rMx.CREATE_DM_USER_LIST_CLICKED, {
                        ...i,
                        is_new_dm: s,
                        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                        recipient_ids: e,
                        num_searches: t,
                        affinity_score: this._getUserAffinities(e).affinities
                    }),
                    E.Z.openPrivateChannel(e, !1, !1, 'New Group DM');
            }),
            ea(this, 'pushToExistingDM', (e, t) => {
                let n = this._searchCounter,
                    i = (0, N.v_)(e),
                    s = B.Z.getChannelId() === e.id;
                E.Z.addRecipients(e.id, t, ee.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (!!s) {
                        if (e.isDM() && n !== e.id) {
                            f.Z.call(n, !1, !0);
                            return;
                        }
                        f.Z.ring(n, t);
                    }
                }),
                    W.default.track(ee.rMx.CREATE_DM_USER_LIST_CLICKED, {
                        ...i,
                        is_new_dm: !0,
                        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                        recipient_ids: t,
                        num_searches: n,
                        affinity_score: this._getUserAffinities(t).affinities
                    });
            }),
            ea(this, 'handleInviteUsers', () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    i = Array.from(t);
                if (null != e) {
                    let t = ep(Array.from(new Set([...e.recipients, ...i])));
                    t.size > 0
                        ? (0, p.openModal)(
                              (n) =>
                                  (0, s.jsx)(eu, {
                                      ...n,
                                      onConfirm: () => this.pushToExistingDM(e, i),
                                      channelIds: t
                                  }),
                              {},
                              (0, p.modalContextFromAppContext)(this.context.appContext)
                          )
                        : this.pushToExistingDM(e, i);
                } else {
                    let e = ep(i);
                    i.length > 1 && e.size > 0
                        ? (0, p.openModal)(
                              (t) =>
                                  (0, s.jsx)(eu, {
                                      ...t,
                                      onConfirm: () => this.createNewDM(i),
                                      channelIds: e
                                  }),
                              {},
                              (0, p.modalContextFromAppContext)(this.context.appContext)
                          )
                        : this.createNewDM(i);
                }
                n();
            }),
            ea(this, 'handleCopyInvite', (e) => {
                let { channel: t, invite: n } = this.props;
                null != n && (0, z.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    W.default.track(ee.rMx.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: ee.Sbl.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null
                    });
            });
    }
}
function eh(e) {
    let { channel: t, ...n } = e;
    O.Z.useExperiment({ location: 'desktop_dm_list' });
    let i = (0, m.cj)([w.Z, U.Z, V.Z], () => {
        let e;
        return (
            null != t && null != (e = U.Z.getInvite(t.id)) && e.isExpired() && (e = null),
            {
                ...w.Z.getState(),
                invite: e,
                hideDiscriminator: V.Z.hidePersonalInformation,
                hideInstantInvites: V.Z.hideInstantInvites
            }
        );
    });
    return (0, s.jsx)(ed, {
        channel: t,
        ...n,
        ...i
    });
}
function em(e) {
    let { channel: t, iconClassName: n, icon: i, tooltip: l, tooltipPosition: r = 'bottom', popoutPosition: o = 'bottom', popoutAlign: c = 'right', subscribeToGlobalHotkey: u = !1 } = e,
        [d, h] = a.useState(null != t && t.isGroupDM() && 0 === t.recipients.length),
        m = (0, A.Dd)(null == t ? void 0 : t.id),
        _ = a.useCallback(() => h((e) => !e), []);
    return (a.useEffect(
        () => (
            u && Y.S.subscribe(ee.CkL.TOGGLE_DM_CREATE, _),
            () => {
                Y.S.unsubscribe(ee.CkL.TOGGLE_DM_CREATE, _);
            }
        ),
        [u, _]
    ),
    a.useEffect(() => {
        (0, P._)();
    }, []),
    m)
        ? null
        : (0, s.jsx)(p.Popout, {
              renderPopout: (e) =>
                  (0, s.jsx)(eh, {
                      ...e,
                      onClose: e.closePopout,
                      channel: t
                  }),
              position: o,
              shouldShow: d,
              align: c,
              onRequestClose: () => h(!1),
              animation: p.Popout.Animation.NONE,
              children: (e) =>
                  (0, s.jsx)(J.ZP.Icon, {
                      ...e,
                      onClick: _,
                      icon: null != i ? i : null == t ? p.ChatPlusIcon : p.GroupPlusIcon,
                      className: n,
                      iconClassName: n,
                      tooltip: l,
                      tooltipPosition: r
                  })
          });
}
function ep(e) {
    let t = e_(e);
    return new Set(
        c()(k.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, D.bc)(e.type))
            .filter((e) => e_(e.recipients) === t)
            .map((e) => e.id)
            .value()
    );
}
function e_(e) {
    return JSON.stringify(e.sort());
}
ea(ed, 'contextType', S.ZP);
