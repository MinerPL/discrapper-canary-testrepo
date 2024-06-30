n.d(t, {
    Z: function () {
        return eu;
    }
}), n(411104), n(653041), n(47120);
var i, a = n(735250), l = n(470079), s = n(120356), r = n.n(s), o = n(392711), c = n.n(o), u = n(913527), d = n.n(u), h = n(873546), p = n(442837), m = n(481060), _ = n(570140), f = n(26151), E = n(493683), C = n(758059), g = n(447543), I = n(708690), x = n(194359), T = n(425493), N = n(461745), v = n(40851), S = n(367907), Z = n(762914), A = n(43267), M = n(933557), b = n(366980), R = n(703656), j = n(131704), L = n(592125), P = n(341165), O = n(544610), y = n(19780), D = n(306680), k = n(699516), U = n(246946), w = n(594174), B = n(285952), H = n(153124), G = n(502568), V = n(626135), F = n(572004), W = n(585483), z = n(823379), Y = n(709054), K = n(51144), q = n(73752), X = n(575464), Q = n(981631), J = n(689938), $ = n(994175), ee = n(838009), et = n(331651);
function en(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let ei = (0, H.hQ)(), ea = (0, H.hQ)();
function el(e) {
    let {
        className: t,
        children: n
    } = e;
    return (0, a.jsxs)(B.Z, {
        align: B.Z.Align.CENTER,
        justify: B.Z.Justify.CENTER,
        direction: B.Z.Direction.VERTICAL,
        className: r()($.errorState, t),
        children: [
            (0, a.jsx)('div', { className: r()($.errorStateIcon, et.marginBottom20) }),
            n
        ]
    });
}
let es = e => {
        var t;
        let {
                channel: n,
                onClose: i
            } = e, l = null !== (t = (0, M.ZP)(n)) && void 0 !== t ? t : '', s = (0, p.e7)([D.ZP], () => {
                var e;
                return null !== (e = D.ZP.lastMessageId(n.id)) && void 0 !== e ? e : n.id;
            });
        return (0, a.jsx)(m.Clickable, {
            onClick: () => {
                (0, R.XU)(Q.ME, n.id), i();
            },
            children: (0, a.jsxs)('div', {
                className: $.confirmChannelItemContainer,
                children: [
                    (0, a.jsx)(m.Avatar, {
                        src: (0, A.x)(n),
                        size: m.AvatarSizes.SIZE_24,
                        'aria-label': l
                    }),
                    (0, a.jsx)('span', {
                        className: $.confirmChannelName,
                        children: l
                    }),
                    (0, a.jsx)('span', {
                        className: $.lastActiveTimestamp,
                        children: d()(Y.default.extractTimestamp(s)).fromNow()
                    })
                ]
            })
        });
    }, er = e => {
        let {
                onConfirm: t,
                channelIds: n,
                ...i
            } = e, l = (0, p.Wu)([L.Z], () => Array.from(n).map(L.Z.getChannel), [n]);
        return (0, a.jsxs)(m.ConfirmModal, {
            header: J.Z.Messages.GROUP_DM_INVITE_CONFIRM,
            confirmText: J.Z.Messages.GROUP_DM_INVITE_CONFIRM_BUTTON,
            cancelText: J.Z.Messages.CANCEL,
            onConfirm: t,
            confirmButtonColor: m.Button.Colors.BRAND,
            ...i,
            children: [
                (0, a.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    children: J.Z.Messages.GROUP_DM_INVITE_CONFIRM_DESCRIPTION
                }),
                (0, a.jsx)(m.FormTitle, {
                    className: $.selectExistingFormHeader,
                    children: J.Z.Messages.GROUP_DM_INVITE_SELECT_EXISTING
                }),
                (0, a.jsx)(m.Scroller, {
                    className: $.confirmInviteScroller,
                    children: l.filter(z.lm).sort((e, t) => {
                        var n, i;
                        let a = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id, l = null !== (i = t.lastMessageId) && void 0 !== i ? i : t.id;
                        return Y.default.compare(l, a);
                    }).map(e => (0, a.jsx)(es, {
                        onClose: i.onClose,
                        channel: e
                    }, e.id))
                })
            ]
        });
    };
class eo extends (i = l.PureComponent) {
    componentDidMount() {
        let {channel: e} = this.props;
        _.Z.wait(() => I.Z.open(null == e ? void 0 : e.id));
        let t = (0, S.v_)(e);
        null != e ? e.isDM() ? V.default.track(Q.rMx.OPEN_POPOUT, {
            ...t,
            type: 'Add Friends to DM',
            source: 'DM',
            is_friend: !this.isNotFriends()
        }) : V.default.track(Q.rMx.OPEN_POPOUT, {
            ...t,
            type: 'Add Friends to DM',
            source: 'Group DM'
        }) : V.default.track(Q.rMx.OPEN_POPOUT, {
            ...t,
            type: 'New Group DM',
            source: 'Friends List'
        }), W.S.subscribe(Q.CkL.SCROLL_PAGE_UP, this.scrollPageUp), W.S.subscribe(Q.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        W.S.unsubscribe(Q.CkL.SCROLL_PAGE_UP, this.scrollPageUp), W.S.unsubscribe(Q.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), _.Z.wait(() => I.Z.close());
    }
    isNotFriends() {
        let {channel: e} = this.props;
        if (null == e || !e.isDM())
            return !1;
        let t = e.getRecipientId();
        if (null == t)
            throw Error('no recipient in DM');
        return !k.Z.isFriend(t);
    }
    createInvite() {
        let {channel: e} = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull())
            return;
        let {inviteMaxAgeSeconds: t} = q.Z.getCurrentConfig({ location: '5326c5_1' }, { autoTrackExposure: !1 });
        g.Z.createInvite(e.id, { max_age: t }, Q.t4x.GROUP_DM);
    }
    isPartyFull() {
        let {channel: e} = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let {channel: e} = this.props, t = w.default.getCurrentUser();
        return null != t && t.isStaff() ? Q.p3w : null != e && e.isBroadcastChannel() ? Q.keq : null != e && e.userLimit > 0 ? e.userLimit : Q.pAY;
    }
    getRemaining() {
        let {
                channel: e,
                selectedUsers: t
            } = this.props, n = (null == e ? 0 : e.recipients.length) + 1;
        return this.getMaxParticipants() - t.size - n;
    }
    renderCreateGroupButton() {
        let {
                channel: e,
                selectedUsers: t
            } = this.props, n = this.getRemaining(), i = null != e && 0 === t.size || n < 0, l = t.size > 1 ? J.Z.Messages.CREATE_GROUP_DM : J.Z.Messages.CREATE_DM;
        return (0, a.jsx)(m.Button, {
            fullWidth: !0,
            disabled: i,
            onClick: this.handleInviteUsers,
            children: l
        });
    }
    renderAddUsersButton() {
        let {
            channel: e,
            selectedUsers: t
        } = this.props;
        if (null == e || e.isDM())
            return;
        let n = this.getRemaining(), i = 0 === t.size || n < 0;
        return (0, a.jsx)('div', {
            className: $.addButton,
            children: (0, a.jsx)(m.Button, {
                size: m.Button.Sizes.SMALL,
                disabled: i,
                onClick: this.handleInviteUsers,
                children: J.Z.Messages.ADD
            })
        });
    }
    renderSubtitle() {
        if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull())
            return null;
        let e = this.getRemaining(), t = e <= 0 ? J.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({ number: this.getMaxParticipants() }) : J.Z.Messages.GROUP_DM_INVITE_REMAINING.format({ number: e });
        return (0, a.jsx)(m.Text, {
            variant: 'text-xs/normal',
            className: r()($.subtitle, { [$.subtitleWarning]: e < 0 }, et.marginTop4),
            children: t
        });
    }
    renderSearchBar() {
        var e;
        let {
            query: t,
            hasFriends: n,
            results: i,
            selectedRow: l,
            selectedUsers: s
        } = this.props;
        if (!n || this.isNotFriends())
            return null;
        let o = [];
        return s.forEach(e => {
            let t = w.default.getUser(e);
            null != t && o.push(K.ZP.getName(t));
        }), (0, a.jsxs)(B.Z, {
            className: r()($.searchBar, et.marginTop20),
            children: [
                (0, a.jsx)(N.ZP, {
                    ref: this.searchBarRef,
                    className: $.searchBarComponent,
                    autoFocus: !0,
                    placeholder: 0 === s.size ? J.Z.Messages.GROUP_DM_SEARCH_PLACEHOLDER : void 0,
                    disabled: this.isPartyFull(),
                    size: N.ZP.Sizes.MEDIUM,
                    query: t,
                    selectedRow: l,
                    sections: [null !== (e = null == i ? void 0 : i.length) && void 0 !== e ? e : 0],
                    tags: o,
                    onSelect: this.handleSelect,
                    onSelectionChange: this.handleSelectionChange,
                    onQueryChange: this.handleQueryChange,
                    onRemoveTag: this.handleRemoveUser,
                    inputProps: {
                        'aria-labelledby': ei,
                        'aria-controls': ea,
                        'aria-expanded': !0,
                        'aria-activedescendant': 'user-row-'.concat(l)
                    }
                }),
                this.renderAddUsersButton()
            ]
        });
    }
    renderHeader() {
        let e = null != this.scrollerRef.current && this.state.separator, t = this.isNotFriends() ? J.Z.Messages.GROUP_DM_ADD_FRIENDS : J.Z.Messages.GROUP_DM_HEADER;
        return (0, a.jsxs)(m.ModalHeader, {
            direction: B.Z.Direction.VERTICAL,
            align: B.Z.Align.STRETCH,
            className: $.__invalid_header,
            separator: e,
            children: [
                h.tq ? this.renderMobileCloseButton() : null,
                (0, a.jsx)(m.Heading, {
                    id: ei,
                    variant: 'heading-lg/semibold',
                    children: t
                }),
                this.renderSubtitle(),
                this.renderSearchBar()
            ]
        });
    }
    renderBody() {
        let {
            channel: e,
            hasFriends: t,
            results: n
        } = this.props;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t)
                throw Error('no recipient in DM');
            let n = w.default.getUser(t), i = null != n ? n.username : '', l = null != n && k.Z.getRelationshipType(n.id) === Q.OGo.PENDING_OUTGOING;
            return (0, a.jsxs)(el, {
                className: $.notFriends,
                children: [
                    (0, a.jsx)('div', { children: J.Z.Messages.GROUP_DM_INVITE_NOT_FRIENDS.format({ username: i }) }),
                    (0, a.jsx)(m.Button, {
                        disabled: l,
                        size: m.Button.Sizes.SMALL,
                        onClick: () => null != n ? this.handleAddFriend(n) : null,
                        className: et.marginTop20,
                        children: l ? J.Z.Messages.ADD_FRIEND_BUTTON_AFTER : J.Z.Messages.ADD_FRIEND_BUTTON
                    })
                ]
            });
        }
        return t ? this.isPartyFull() ? (0, a.jsxs)(el, {
            className: $.partyFull,
            children: [
                (0, a.jsx)('div', { children: J.Z.Messages.GROUP_DM_INVITE_FULL_MAIN }),
                (0, a.jsx)('div', { children: J.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({ number: this.getMaxParticipants() }) })
            ]
        }) : 0 === n.length ? (0, a.jsx)(el, {
            className: r()($.noResults, et.marginBottom20),
            children: (0, a.jsx)('div', { children: J.Z.Messages.GROUP_DM_INVITE_EMPTY })
        }) : (0, a.jsx)(m.List, {
            ref: this.scrollerRef,
            sections: [n.length],
            className: $.scroller,
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
            innerId: ea,
            innerAriaMultiselectable: !0,
            innerAriaOrientation: 'vertical'
        }) : (0, a.jsxs)(el, {
            className: $.noFriends,
            children: [
                (0, a.jsx)('div', { children: J.Z.Messages.GROUP_DM_INVITE_NO_FRIENDS }),
                (0, a.jsx)(m.Button, {
                    autoFocus: !0,
                    color: m.Button.Colors.GREEN,
                    fullWidth: !0,
                    size: m.Button.Sizes.SMALL,
                    onClick: this.handleAddFriendNavigation,
                    className: et.marginTop20,
                    children: J.Z.Messages.ADD_FRIEND
                })
            ]
        });
    }
    renderSection() {
        return null;
    }
    renderInviteLink() {
        let {
                channel: e,
                invite: t,
                hideInstantInvites: n
            } = this.props, {copied: i} = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull())
            return null;
        let s = null != t ? (0, b.Z)(t.code) : '';
        return (0, a.jsxs)(l.Fragment, {
            children: [
                (0, a.jsx)(m.FormTitle, {
                    tag: 'h5',
                    className: et.marginBottom8,
                    children: J.Z.Messages.GROUP_DM_INVITE_LINK_TITLE
                }),
                (0, a.jsxs)(B.Z, {
                    className: r()(ee.input, { [ee.success]: i }),
                    justify: B.Z.Justify.BETWEEN,
                    align: B.Z.Align.CENTER,
                    children: [
                        s.length > 0 ? (0, a.jsx)(m.TextInput, {
                            className: $.copyInput,
                            name: 'invite',
                            value: n ? J.Z.Messages.INSTANT_INVITE_HIDDEN : s,
                            editable: !1,
                            inputClassName: $.input,
                            spellCheck: 'false',
                            onClick: e => e.currentTarget.select()
                        }) : (0, a.jsx)(m.TextInput, {
                            className: $.copyInput,
                            name: 'invite',
                            value: s,
                            placeholder: (0, b.Z)(J.Z.Messages.GROUP_DM_INVITE_LINK_EXAMPLE),
                            editable: !1,
                            inputClassName: $.input,
                            spellCheck: 'false',
                            onClick: () => this.createInvite()
                        }),
                        F.wS && s.length > 0 ? (0, a.jsx)(m.Button, {
                            size: m.Button.Sizes.SMALL,
                            color: i ? m.Button.Colors.GREEN : m.Button.Colors.BRAND,
                            className: $.copyButton,
                            onClick: () => this.handleCopyInvite(s),
                            children: i ? J.Z.Messages.INVITE_COPIED : J.Z.Messages.COPY
                        }) : null,
                        0 === s.length ? (0, a.jsx)(m.Button, {
                            size: m.Button.Sizes.SMALL,
                            color: m.Button.Colors.BRAND,
                            className: $.copyButton,
                            onClick: () => this.createInvite(),
                            children: J.Z.Messages.GROUP_DM_INVITE_LINK_CREATE
                        }) : null
                    ]
                }),
                s.length > 0 ? (0, a.jsx)(m.Text, {
                    variant: 'text-xs/normal',
                    className: r()(et.marginTop8, $.footerText),
                    children: J.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: ''.concat(24) })
                }) : null
            ]
        });
    }
    renderFooter() {
        let {
            hasFriends: e,
            channel: t
        } = this.props;
        if (this.isNotFriends() || !e || this.isPartyFull())
            return null;
        let n = null == t || t.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
        if (null != n)
            return (0, a.jsxs)(l.Fragment, {
                children: [
                    (0, a.jsx)('div', { className: $.footerSeparator }),
                    (0, a.jsx)(B.Z, {
                        direction: B.Z.Direction.VERTICAL,
                        className: $.footer,
                        children: n
                    })
                ]
            });
    }
    render() {
        let {transitionState: e} = this.props;
        return (0, a.jsxs)(m.ModalRoot, {
            transitionState: null != e ? e : m.ModalTransitionState.ENTERED,
            className: $.popout,
            children: [
                this.renderHeader(),
                this.renderBody(),
                this.renderFooter()
            ]
        });
    }
    handleAddFriend(e) {
        this.props.onClose(), x.Z.sendRequest({
            discordTag: K.ZP.getUserTag(e, { identifiable: 'always' }),
            context: { location: 'Group DM' }
        });
    }
    constructor(...e) {
        super(...e), en(this, 'state', {
            separator: !1,
            copied: !1
        }), en(this, 'copyTimeout', void 0), en(this, 'scrollerRef', l.createRef()), en(this, 'searchBarRef', l.createRef()), en(this, '_mobileCloseRef', l.createRef()), en(this, 'scrollPageUp', () => {
            var e;
            null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
        }), en(this, 'scrollPageDown', () => {
            var e;
            null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
        }), en(this, 'renderMobileCloseButton', () => (0, a.jsx)('div', {
            className: r()($.mobileToolsContainer),
            ref: this._mobileCloseRef,
            children: (0, a.jsx)(m.FocusRingScope, {
                containerRef: this._mobileCloseRef,
                children: (0, a.jsx)('div', {
                    children: (0, a.jsx)(T.Z, {
                        className: $.mobileToolsCloseIcon,
                        closeAction: this.props.onClose,
                        keybind: 'ESC'
                    })
                })
            })
        })), en(this, 'getRowHeight', (e, t) => {
            if (e > 0)
                return 0;
            let {results: n} = this.props;
            return null != n[t] ? 42 : 0;
        }), en(this, 'renderRow', e => {
            let {
                section: t,
                row: n
            } = e;
            if (t > 0)
                return null;
            let {
                    results: i,
                    selectedUsers: l,
                    selectedRow: s,
                    hideDiscriminator: r
                } = this.props, o = i[n];
            if (null == o)
                return null;
            let {
                    user: c,
                    comparator: u
                } = o, d = l.has(c.id);
            return (0, a.jsx)(X.Z, {
                row: n,
                user: c,
                hideDiscriminator: r,
                comparator: u,
                checked: d,
                selected: n === s,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                'aria-posinset': n + 1,
                'aria-setsize': i.length
            }, c.id);
        }), en(this, 'forceFocus', () => {
            let e = this.searchBarRef.current;
            null == e || e.focus();
        }), en(this, 'focusResult', e => {
            I.Z.select(e);
        }), en(this, 'handleSelect', (e, t) => {
            let {
                results: n,
                channel: i
            } = this.props;
            null == t ? I.Z.clear(null == i ? void 0 : i.id) : null != n && this.handleClick(n[t].user.id);
        }), en(this, 'handleSelectionChange', (e, t) => {
            I.Z.select(t);
            let n = this.scrollerRef.current;
            null != n && n.scrollToIndex({
                section: e,
                row: t,
                padding: 8
            });
        }), en(this, 'handleQueryChange', e => {
            let {channel: t} = this.props;
            I.Z.search(e, null == t ? void 0 : t.id);
        }), en(this, 'handleRemoveUser', e => {
            let t = Array.from(this.props.selectedUsers);
            I.Z.removeUser(t[e]), this.forceFocus();
        }), en(this, 'handleClick', e => {
            let {
                selectedUsers: t,
                query: n,
                channel: i
            } = this.props;
            t.has(e) ? I.Z.removeUser(e) : (I.Z.addUser(e), n.length > 0 && I.Z.clear(null == i ? void 0 : i.id)), this.forceFocus();
        }), en(this, 'handleAddFriendNavigation', () => {
            (0, R.uL)(Q.Z5c.FRIENDS), C.Z.setSection(Q.pJs.ADD_FRIEND), this.props.onClose();
        }), en(this, 'handleScroll', () => {
            let e = this.scrollerRef.current;
            null != e && this.setState({ separator: !e.isScrolledToTop() });
        }), en(this, 'createNewDM', e => {
            E.Z.openPrivateChannel(e, !1, !1, 'New Group DM');
        }), en(this, 'pushToExistingDM', (e, t) => {
            let n = y.Z.getChannelId() === e.id;
            E.Z.addRecipients(e.id, t, Q.Sbl.ADD_FRIENDS_TO_DM).then(i => {
                if (!!n) {
                    if (e.isDM() && i !== e.id) {
                        f.Z.call(i, !1, !0);
                        return;
                    }
                    f.Z.ring(i, t);
                }
            });
        }), en(this, 'handleInviteUsers', () => {
            let {
                    channel: e,
                    selectedUsers: t,
                    onClose: n
                } = this.props, i = Array.from(t);
            if (null != e) {
                let t = ed(Array.from(new Set([
                    ...e.recipients,
                    ...i
                ])));
                t.size > 0 ? (0, m.openModal)(n => (0, a.jsx)(er, {
                    ...n,
                    onConfirm: () => this.pushToExistingDM(e, i),
                    channelIds: t
                }), {}, (0, m.modalContextFromAppContext)(this.context.appContext)) : this.pushToExistingDM(e, i);
            } else {
                let e = ed(i);
                i.length > 1 && e.size > 0 ? (0, m.openModal)(t => (0, a.jsx)(er, {
                    ...t,
                    onConfirm: () => this.createNewDM(i),
                    channelIds: e
                }), {}, (0, m.modalContextFromAppContext)(this.context.appContext)) : this.createNewDM(i);
            }
            n();
        }), en(this, 'handleCopyInvite', e => {
            let {
                channel: t,
                invite: n
            } = this.props;
            null != n && (0, F.JG)(e), null != this.copyTimeout && clearTimeout(this.copyTimeout), this.setState({ copied: !0 }), this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1000), V.default.track(Q.rMx.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: Q.Sbl.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null
            });
        });
    }
}
en(eo, 'contextType', v.ZP);
let ec = p.ZP.connectStores([
    O.Z,
    P.Z,
    U.Z
], e => {
    let t, {channel: n} = e;
    return null != n && null != (t = P.Z.getInvite(n.id)) && t.isExpired() && (t = null), {
        ...O.Z.getState(),
        invite: t,
        hideDiscriminator: U.Z.hidePersonalInformation,
        hideInstantInvites: U.Z.hideInstantInvites
    };
})(eo);
function eu(e) {
    let {
            channel: t,
            iconClassName: n,
            icon: i,
            tooltip: s,
            tooltipPosition: r = 'bottom',
            popoutPosition: o = 'bottom',
            popoutAlign: c = 'right',
            subscribeToGlobalHotkey: u = !1
        } = e, [d, h] = l.useState(null != t && t.isGroupDM() && 0 === t.recipients.length), p = (0, Z.Dd)(null == t ? void 0 : t.id), _ = l.useCallback(() => h(e => !e), []);
    return (l.useEffect(() => (u && W.S.subscribe(Q.CkL.TOGGLE_DM_CREATE, _), () => {
        W.S.unsubscribe(Q.CkL.TOGGLE_DM_CREATE, _);
    }), [
        u,
        _
    ]), p) ? null : (0, a.jsx)(m.Popout, {
        renderPopout: e => (0, a.jsx)(ec, {
            ...e,
            onClose: e.closePopout,
            channel: t
        }),
        position: o,
        shouldShow: d,
        align: c,
        onRequestClose: () => h(!1),
        animation: m.Popout.Animation.NONE,
        children: e => (0, a.jsx)(G.ZP.Icon, {
            ...e,
            onClick: _,
            icon: null != i ? i : null == t ? m.ChatPlusIcon : m.GroupPlusIcon,
            className: n,
            iconClassName: n,
            tooltip: s,
            tooltipPosition: r
        })
    });
}
function ed(e) {
    let t = eh(e);
    return new Set(c()(L.Z.getMutablePrivateChannels()).values().filter(e => (0, j.bc)(e.type)).filter(e => eh(e.recipients) === t).map(e => e.id).value());
}
function eh(e) {
    return JSON.stringify(e.sort());
}
