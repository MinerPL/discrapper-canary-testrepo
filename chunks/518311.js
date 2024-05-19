"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ef
  }
}), n("411104"), n("653041"), n("47120");
var a, l = n("735250"),
  s = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("392711"),
  u = n.n(o),
  d = n("913527"),
  c = n.n(d),
  f = n("873546"),
  h = n("442837"),
  m = n("115850"),
  p = n("481060"),
  E = n("570140"),
  C = n("26151"),
  g = n("493683"),
  S = n("758059"),
  _ = n("447543"),
  T = n("708690"),
  I = n("194359"),
  A = n("425493"),
  N = n("461745"),
  v = n("40851"),
  x = n("367907"),
  M = n("762914"),
  R = n("43267"),
  y = n("933557"),
  L = n("366980"),
  O = n("703656"),
  j = n("131704"),
  P = n("592125"),
  D = n("341165"),
  b = n("544610"),
  U = n("19780"),
  F = n("306680"),
  w = n("699516"),
  k = n("246946"),
  B = n("594174"),
  H = n("285952"),
  G = n("153124"),
  V = n("917885"),
  W = n("502568"),
  Y = n("626135"),
  z = n("572004"),
  K = n("585483"),
  Z = n("823379"),
  q = n("709054"),
  X = n("51144"),
  Q = n("73752"),
  J = n("575464"),
  $ = n("981631"),
  ee = n("689938"),
  et = n("93923"),
  en = n("12349"),
  ea = n("611273");

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let es = (0, G.uid)(),
  ei = (0, G.uid)();

function er(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, l.jsxs)(H.default, {
    align: H.default.Align.CENTER,
    justify: H.default.Justify.CENTER,
    direction: H.default.Direction.VERTICAL,
    className: r()(et.errorState, t),
    children: [(0, l.jsx)("div", {
      className: r()(et.errorStateIcon, ea.marginBottom20)
    }), n]
  })
}
let eo = e => {
    var t;
    let {
      channel: n,
      onClose: a
    } = e, s = null !== (t = (0, y.default)(n)) && void 0 !== t ? t : "", i = (0, h.useStateFromStores)([F.default], () => {
      var e;
      return null !== (e = F.default.lastMessageId(n.id)) && void 0 !== e ? e : n.id
    });
    return (0, l.jsx)(p.Clickable, {
      onClick: () => {
        (0, O.transitionToGuild)($.ME, n.id), a()
      },
      children: (0, l.jsxs)("div", {
        className: et.confirmChannelItemContainer,
        children: [(0, l.jsx)(p.Avatar, {
          src: (0, R.getChannelIconURL)(n),
          size: p.AvatarSizes.SIZE_24,
          "aria-label": s
        }), (0, l.jsx)("span", {
          className: et.confirmChannelName,
          children: s
        }), (0, l.jsx)("span", {
          className: et.lastActiveTimestamp,
          children: c()(q.default.extractTimestamp(i)).fromNow()
        })]
      })
    })
  },
  eu = e => {
    let {
      onConfirm: t,
      channelIds: n,
      ...a
    } = e, s = (0, h.useStateFromStoresArray)([P.default], () => Array.from(n).map(P.default.getChannel), [n]);
    return (0, l.jsxs)(p.ConfirmModal, {
      header: ee.default.Messages.GROUP_DM_INVITE_CONFIRM,
      confirmText: ee.default.Messages.GROUP_DM_INVITE_CONFIRM_BUTTON,
      cancelText: ee.default.Messages.CANCEL,
      onConfirm: t,
      confirmButtonColor: p.Button.Colors.BRAND,
      ...a,
      children: [(0, l.jsx)(p.Text, {
        variant: "text-md/normal",
        children: ee.default.Messages.GROUP_DM_INVITE_CONFIRM_DESCRIPTION
      }), (0, l.jsx)(p.FormTitle, {
        className: et.selectExistingFormHeader,
        children: ee.default.Messages.GROUP_DM_INVITE_SELECT_EXISTING
      }), (0, l.jsx)(p.Scroller, {
        className: et.confirmInviteScroller,
        children: s.filter(Z.isNotNullish).sort((e, t) => {
          var n, a;
          let l = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id,
            s = null !== (a = t.lastMessageId) && void 0 !== a ? a : t.id;
          return q.default.compare(s, l)
        }).map(e => (0, l.jsx)(eo, {
          onClose: a.onClose,
          channel: e
        }, e.id))
      })]
    })
  };
class ed extends(a = s.PureComponent) {
  componentDidMount() {
    let {
      channel: e
    } = this.props;
    E.default.wait(() => T.default.open(null == e ? void 0 : e.id));
    let t = (0, x.collectChannelAnalyticsMetadata)(e);
    null != e ? e.isDM() ? Y.default.track($.AnalyticEvents.OPEN_POPOUT, {
      ...t,
      type: "Add Friends to DM",
      source: "DM",
      is_friend: !this.isNotFriends()
    }) : Y.default.track($.AnalyticEvents.OPEN_POPOUT, {
      ...t,
      type: "Add Friends to DM",
      source: "Group DM"
    }) : Y.default.track($.AnalyticEvents.OPEN_POPOUT, {
      ...t,
      type: "New Group DM",
      source: "Friends List"
    }), K.ComponentDispatch.subscribe($.ComponentActions.SCROLL_PAGE_UP, this.scrollPageUp), K.ComponentDispatch.subscribe($.ComponentActions.SCROLL_PAGE_DOWN, this.scrollPageDown)
  }
  componentWillUnmount() {
    K.ComponentDispatch.unsubscribe($.ComponentActions.SCROLL_PAGE_UP, this.scrollPageUp), K.ComponentDispatch.unsubscribe($.ComponentActions.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), E.default.wait(() => T.default.close())
  }
  isNotFriends() {
    let {
      channel: e
    } = this.props;
    if (null == e || !e.isDM()) return !1;
    let t = e.getRecipientId();
    if (null == t) throw Error("no recipient in DM");
    return !w.default.isFriend(t)
  }
  createInvite() {
    let {
      channel: e
    } = this.props;
    if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
    let {
      inviteMaxAgeSeconds: t
    } = Q.default.getCurrentConfig({
      location: "5326c5_1"
    }, {
      autoTrackExposure: !1
    });
    _.default.createInvite(e.id, {
      max_age: t
    }, $.InstantInviteSources.GROUP_DM)
  }
  isPartyFull() {
    let {
      channel: e
    } = this.props;
    return null != e && e.recipients.length + 1 >= this.getMaxParticipants()
  }
  getMaxParticipants() {
    let {
      channel: e
    } = this.props, t = B.default.getCurrentUser();
    return null != t && t.isStaff() ? $.MAX_GROUP_DM_STAFF_PARTICIPANTS : null != e && e.isBroadcastChannel() ? $.MAX_GROUP_DM_BROADCAST_PARTICIPANTS : null != e && e.userLimit > 0 ? e.userLimit : $.MAX_GROUP_DM_PARTICIPANTS
  }
  getRemaining() {
    let {
      channel: e,
      selectedUsers: t
    } = this.props, n = (null == e ? 0 : e.recipients.length) + 1;
    return this.getMaxParticipants() - t.size - n
  }
  renderCreateGroupButton() {
    let {
      channel: e,
      selectedUsers: t
    } = this.props, n = this.getRemaining(), a = null != e && 0 === t.size || n < 0, s = t.size > 1 ? ee.default.Messages.CREATE_GROUP_DM : ee.default.Messages.CREATE_DM;
    return (0, l.jsx)(p.Button, {
      fullWidth: !0,
      disabled: a,
      onClick: this.handleInviteUsers,
      children: s
    })
  }
  renderAddUsersButton() {
    let {
      channel: e,
      selectedUsers: t
    } = this.props;
    if (null == e || e.isDM()) return;
    let n = this.getRemaining(),
      a = 0 === t.size || n < 0;
    return (0, l.jsx)("div", {
      className: et.addButton,
      children: (0, l.jsx)(p.Button, {
        size: p.Button.Sizes.SMALL,
        disabled: a,
        onClick: this.handleInviteUsers,
        children: ee.default.Messages.ADD
      })
    })
  }
  renderSubtitle() {
    if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
    let e = this.getRemaining(),
      t = e <= 0 ? ee.default.Messages.GROUP_DM_INVITE_FULL_SUB2.format({
        number: this.getMaxParticipants()
      }) : ee.default.Messages.GROUP_DM_INVITE_REMAINING.format({
        number: e
      });
    return (0, l.jsx)(p.Text, {
      variant: "text-xs/normal",
      className: r()(et.subtitle, {
        [et.subtitleWarning]: e < 0
      }, ea.marginTop4),
      children: t
    })
  }
  renderSearchBar() {
    var e;
    let {
      query: t,
      hasFriends: n,
      results: a,
      selectedRow: s,
      selectedUsers: i
    } = this.props;
    if (!n || this.isNotFriends()) return null;
    let o = [];
    return i.forEach(e => {
      let t = B.default.getUser(e);
      null != t && o.push(X.default.getName(t))
    }), (0, l.jsxs)(H.default, {
      className: r()(et.searchBar, ea.marginTop20),
      children: [(0, l.jsx)(N.default, {
        ref: this.searchBarRef,
        className: et.searchBarComponent,
        autoFocus: !0,
        placeholder: 0 === i.size ? ee.default.Messages.GROUP_DM_SEARCH_PLACEHOLDER : void 0,
        disabled: this.isPartyFull(),
        size: N.default.Sizes.MEDIUM,
        query: t,
        selectedRow: s,
        sections: [null !== (e = null == a ? void 0 : a.length) && void 0 !== e ? e : 0],
        tags: o,
        onSelect: this.handleSelect,
        onSelectionChange: this.handleSelectionChange,
        onQueryChange: this.handleQueryChange,
        onRemoveTag: this.handleRemoveUser,
        inputProps: {
          "aria-labelledby": es,
          "aria-controls": ei,
          "aria-expanded": !0,
          "aria-activedescendant": "user-row-".concat(s)
        }
      }), this.renderAddUsersButton()]
    })
  }
  renderHeader() {
    let e = null != this.scrollerRef.current && this.state.separator,
      t = this.isNotFriends() ? ee.default.Messages.GROUP_DM_ADD_FRIENDS : ee.default.Messages.GROUP_DM_HEADER;
    return (0, l.jsxs)(p.ModalHeader, {
      direction: H.default.Direction.VERTICAL,
      align: H.default.Align.STRETCH,
      className: et.__invalid_header,
      separator: e,
      children: [f.isMobile ? this.renderMobileCloseButton() : null, (0, l.jsx)(p.Heading, {
        id: es,
        variant: "heading-lg/semibold",
        children: t
      }), this.renderSubtitle(), this.renderSearchBar()]
    })
  }
  renderBody() {
    let {
      channel: e,
      hasFriends: t,
      results: n
    } = this.props;
    if (this.isNotFriends()) {
      let t = null != e ? e.getRecipientId() : null;
      if (null == t) throw Error("no recipient in DM");
      let n = B.default.getUser(t),
        a = null != n ? n.username : "",
        s = null != n && w.default.getRelationshipType(n.id) === $.RelationshipTypes.PENDING_OUTGOING;
      return (0, l.jsxs)(er, {
        className: et.notFriends,
        children: [(0, l.jsx)("div", {
          children: ee.default.Messages.GROUP_DM_INVITE_NOT_FRIENDS.format({
            username: a
          })
        }), (0, l.jsx)(p.Button, {
          disabled: s,
          size: p.Button.Sizes.SMALL,
          onClick: () => null != n ? this.handleAddFriend(n) : null,
          className: ea.marginTop20,
          children: s ? ee.default.Messages.ADD_FRIEND_BUTTON_AFTER : ee.default.Messages.ADD_FRIEND_BUTTON
        })]
      })
    }
    return t ? this.isPartyFull() ? (0, l.jsxs)(er, {
      className: et.partyFull,
      children: [(0, l.jsx)("div", {
        children: ee.default.Messages.GROUP_DM_INVITE_FULL_MAIN
      }), (0, l.jsx)("div", {
        children: ee.default.Messages.GROUP_DM_INVITE_FULL_SUB2.format({
          number: this.getMaxParticipants()
        })
      })]
    }) : 0 === n.length ? (0, l.jsx)(er, {
      className: r()(et.noResults, ea.marginBottom20),
      children: (0, l.jsx)("div", {
        children: ee.default.Messages.GROUP_DM_INVITE_EMPTY
      })
    }) : (0, l.jsx)(p.List, {
      ref: this.scrollerRef,
      sections: [n.length],
      className: et.scroller,
      renderRow: this.renderRow,
      rowHeight: this.getRowHeight,
      renderSection: this.renderSection,
      sectionHeight: 0,
      onScroll: this.handleScroll,
      paddingTop: 0,
      paddingBottom: 14,
      fade: !0,
      role: void 0,
      innerRole: "listbox",
      innerId: ei,
      innerAriaMultiselectable: !0,
      innerAriaOrientation: "vertical"
    }) : (0, l.jsxs)(er, {
      className: et.noFriends,
      children: [(0, l.jsx)("div", {
        children: ee.default.Messages.GROUP_DM_INVITE_NO_FRIENDS
      }), (0, l.jsx)(p.Button, {
        autoFocus: !0,
        color: p.Button.Colors.GREEN,
        fullWidth: !0,
        size: p.Button.Sizes.SMALL,
        onClick: this.handleAddFriendNavigation,
        className: ea.marginTop20,
        children: ee.default.Messages.ADD_FRIEND
      })]
    })
  }
  renderSection() {
    return null
  }
  renderInviteLink() {
    let {
      channel: e,
      invite: t,
      hideInstantInvites: n
    } = this.props, {
      copied: a
    } = this.state;
    if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
    let i = null != t ? (0, L.default)(t.code) : "";
    return (0, l.jsxs)(s.Fragment, {
      children: [(0, l.jsx)(p.FormTitle, {
        tag: "h5",
        className: ea.marginBottom8,
        children: ee.default.Messages.GROUP_DM_INVITE_LINK_TITLE
      }), (0, l.jsxs)(H.default, {
        className: r()(en.input, {
          [en.success]: a
        }),
        justify: H.default.Justify.BETWEEN,
        align: H.default.Align.CENTER,
        children: [i.length > 0 ? (0, l.jsx)(p.TextInput, {
          className: et.copyInput,
          name: "invite",
          value: n ? ee.default.Messages.INSTANT_INVITE_HIDDEN : i,
          editable: !1,
          inputClassName: et.input,
          spellCheck: "false",
          onClick: e => e.currentTarget.select()
        }) : (0, l.jsx)(p.TextInput, {
          className: et.copyInput,
          name: "invite",
          value: i,
          placeholder: (0, L.default)(ee.default.Messages.GROUP_DM_INVITE_LINK_EXAMPLE),
          editable: !1,
          inputClassName: et.input,
          spellCheck: "false",
          onClick: () => this.createInvite()
        }), z.SUPPORTS_COPY && i.length > 0 ? (0, l.jsx)(p.Button, {
          size: p.Button.Sizes.SMALL,
          color: a ? p.Button.Colors.GREEN : p.Button.Colors.BRAND,
          className: et.copyButton,
          onClick: () => this.handleCopyInvite(i),
          children: a ? ee.default.Messages.INVITE_COPIED : ee.default.Messages.COPY
        }) : null, 0 === i.length ? (0, l.jsx)(p.Button, {
          size: p.Button.Sizes.SMALL,
          color: p.Button.Colors.BRAND,
          className: et.copyButton,
          onClick: () => this.createInvite(),
          children: ee.default.Messages.GROUP_DM_INVITE_LINK_CREATE
        }) : null]
      }), i.length > 0 ? (0, l.jsx)(p.Text, {
        variant: "text-xs/normal",
        className: r()(ea.marginTop8, et.footerText),
        children: ee.default.Messages.INVITE_EXPIRES_HOURS.format({
          numHours: "".concat(24)
        })
      }) : null]
    })
  }
  renderFooter() {
    let {
      hasFriends: e,
      channel: t
    } = this.props;
    if (this.isNotFriends() || !e || this.isPartyFull()) return null;
    let n = null == t || t.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
    if (null != n) return (0, l.jsxs)(s.Fragment, {
      children: [(0, l.jsx)("div", {
        className: et.footerSeparator
      }), (0, l.jsx)(H.default, {
        direction: H.default.Direction.VERTICAL,
        className: et.footer,
        children: n
      })]
    })
  }
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, l.jsxs)(p.ModalRoot, {
      transitionState: null != e ? e : p.ModalTransitionState.ENTERED,
      className: et.popout,
      children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
    })
  }
  handleAddFriend(e) {
    this.props.onClose(), I.default.sendRequest({
      discordTag: X.default.getUserTag(e, {
        identifiable: "always"
      }),
      context: {
        location: "Group DM"
      }
    })
  }
  constructor(...e) {
    super(...e), el(this, "state", {
      separator: !1,
      copied: !1
    }), el(this, "copyTimeout", void 0), el(this, "scrollerRef", s.createRef()), el(this, "searchBarRef", s.createRef()), el(this, "_mobileCloseRef", s.createRef()), el(this, "scrollPageUp", () => {
      var e;
      null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageUp({
        animate: !0
      })
    }), el(this, "scrollPageDown", () => {
      var e;
      null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageDown({
        animate: !0
      })
    }), el(this, "renderMobileCloseButton", () => (0, l.jsx)("div", {
      className: r()(et.mobileToolsContainer),
      ref: this._mobileCloseRef,
      children: (0, l.jsx)(p.FocusRingScope, {
        containerRef: this._mobileCloseRef,
        children: (0, l.jsx)("div", {
          children: (0, l.jsx)(A.default, {
            className: et.mobileToolsCloseIcon,
            closeAction: this.props.onClose,
            keybind: "ESC"
          })
        })
      })
    })), el(this, "getRowHeight", (e, t) => {
      if (e > 0) return 0;
      let {
        results: n
      } = this.props;
      return null != n[t] ? 42 : 0
    }), el(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let {
        results: a,
        selectedUsers: s,
        selectedRow: i,
        hideDiscriminator: r
      } = this.props, o = a[n];
      if (null == o) return null;
      let {
        user: u,
        comparator: d
      } = o, c = s.has(u.id);
      return (0, l.jsx)(J.default, {
        row: n,
        user: u,
        hideDiscriminator: r,
        comparator: d,
        checked: c,
        selected: n === i,
        onClick: this.handleClick,
        onMouseEnter: this.focusResult,
        "aria-posinset": n + 1,
        "aria-setsize": a.length
      }, u.id)
    }), el(this, "forceFocus", () => {
      let e = this.searchBarRef.current;
      null == e || e.focus()
    }), el(this, "focusResult", e => {
      T.default.select(e)
    }), el(this, "handleSelect", (e, t) => {
      let {
        results: n,
        channel: a
      } = this.props;
      null == t ? T.default.clear(null == a ? void 0 : a.id) : null != n && this.handleClick(n[t].user.id)
    }), el(this, "handleSelectionChange", (e, t) => {
      T.default.select(t);
      let n = this.scrollerRef.current;
      null != n && n.scrollToIndex({
        section: e,
        row: t,
        padding: 8
      })
    }), el(this, "handleQueryChange", e => {
      let {
        channel: t
      } = this.props;
      T.default.search(e, null == t ? void 0 : t.id)
    }), el(this, "handleRemoveUser", e => {
      let t = Array.from(this.props.selectedUsers);
      T.default.removeUser(t[e]), this.forceFocus()
    }), el(this, "handleClick", e => {
      let {
        selectedUsers: t,
        query: n,
        channel: a
      } = this.props;
      t.has(e) ? T.default.removeUser(e) : (T.default.addUser(e), n.length > 0 && T.default.clear(null == a ? void 0 : a.id)), this.forceFocus()
    }), el(this, "handleAddFriendNavigation", () => {
      (0, O.transitionTo)($.Routes.FRIENDS), S.default.setSection($.FriendsSections.ADD_FRIEND), this.props.onClose()
    }), el(this, "handleScroll", () => {
      let e = this.scrollerRef.current;
      null != e && this.setState({
        separator: !e.isScrolledToTop()
      })
    }), el(this, "createNewDM", e => {
      g.default.openPrivateChannel(e, !1, !1, "New Group DM")
    }), el(this, "pushToExistingDM", (e, t) => {
      let n = U.default.getChannelId() === e.id;
      g.default.addRecipients(e.id, t, $.AnalyticsLocations.ADD_FRIENDS_TO_DM).then(a => {
        if (n) {
          if (e.isDM() && a !== e.id) {
            C.default.call(a, !1, !0);
            return
          }
          C.default.ring(a, t)
        }
      })
    }), el(this, "handleInviteUsers", () => {
      let {
        channel: e,
        selectedUsers: t,
        onClose: n
      } = this.props, a = Array.from(t);
      if (null != e) {
        let t = eh(Array.from(new Set([...e.recipients, ...a])));
        t.size > 0 ? (0, p.openModal)(n => (0, l.jsx)(eu, {
          ...n,
          onConfirm: () => this.pushToExistingDM(e, a),
          channelIds: t
        }), {}, (0, p.modalContextFromAppContext)(this.context.appContext)) : this.pushToExistingDM(e, a)
      } else {
        let e = eh(a);
        a.length > 1 && e.size > 0 ? (0, p.openModal)(t => (0, l.jsx)(eu, {
          ...t,
          onConfirm: () => this.createNewDM(a),
          channelIds: e
        }), {}, (0, p.modalContextFromAppContext)(this.context.appContext)) : this.createNewDM(a)
      }
      n()
    }), el(this, "handleCopyInvite", e => {
      let {
        channel: t,
        invite: n
      } = this.props;
      null != n && (0, z.copy)(e), null != this.copyTimeout && clearTimeout(this.copyTimeout), this.setState({
        copied: !0
      }), this.copyTimeout = setTimeout(() => {
        this.setState({
          copied: !1
        })
      }, 1e3), Y.default.track($.AnalyticEvents.COPY_INSTANT_INVITE, {
        server: null,
        channel: null != t ? t.id : null,
        channel_type: null != t ? t.type : null,
        location: $.AnalyticsLocations.ADD_FRIENDS_TO_DM,
        code: null != n ? n.code : null
      })
    })
  }
}
el(ed, "contextType", v.default);
let ec = h.default.connectStores([b.default, D.default, k.default], e => {
  let t, {
    channel: n
  } = e;
  return null != n && null != (t = D.default.getInvite(n.id)) && t.isExpired() && (t = null), {
    ...b.default.getState(),
    invite: t,
    hideDiscriminator: k.default.hidePersonalInformation,
    hideInstantInvites: k.default.hideInstantInvites
  }
})(ed);

function ef(e) {
  let {
    channel: t,
    iconClassName: n,
    icon: a,
    tooltip: i,
    tooltipPosition: r = "bottom",
    popoutPosition: o = "bottom",
    popoutAlign: u = "right",
    subscribeToGlobalHotkey: d = !1
  } = e, [c, f] = s.useState(null != t && t.isGroupDM() && 0 === t.recipients.length), h = (0, M.useIsBroadcastingGDM)(null == t ? void 0 : t.id), E = s.useCallback(() => f(e => !e), []);
  return (s.useEffect(() => (d && K.ComponentDispatch.subscribe($.ComponentActions.TOGGLE_DM_CREATE, E), () => {
    K.ComponentDispatch.unsubscribe($.ComponentActions.TOGGLE_DM_CREATE, E)
  }), [d, E]), h) ? null : (0, l.jsx)(p.Popout, {
    renderPopout: e => (0, l.jsx)(ec, {
      ...e,
      onClose: e.closePopout,
      channel: t
    }),
    position: o,
    shouldShow: c,
    align: u,
    onRequestClose: () => f(!1),
    animation: p.Popout.Animation.NONE,
    children: e => (0, l.jsx)(W.default.Icon, {
      ...e,
      onClick: E,
      icon: null != a ? a : null == t ? V.default : m.GroupPlusIcon,
      className: n,
      iconClassName: n,
      tooltip: i,
      tooltipPosition: r
    })
  })
}

function eh(e) {
  let t = em(e);
  return new Set(u()(P.default.getMutablePrivateChannels()).values().filter(e => (0, j.isMultiUserDM)(e.type)).filter(e => em(e.recipients) === t).map(e => e.id).value())
}

function em(e) {
  return JSON.stringify(e.sort())
}