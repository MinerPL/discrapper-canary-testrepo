"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ed
  }
}), n("70102"), n("424973"), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n.n(r),
  o = n("866227"),
  d = n.n(o),
  c = n("394846"),
  f = n("446674"),
  h = n("77078"),
  m = n("913144"),
  p = n("561288"),
  E = n("450911"),
  g = n("630086"),
  S = n("970728"),
  C = n("369008"),
  _ = n("736964"),
  I = n("304580"),
  T = n("137223"),
  v = n("244201"),
  x = n("716241"),
  N = n("274870"),
  A = n("843962"),
  M = n("679653"),
  R = n("52393"),
  j = n("393414"),
  L = n("233069"),
  y = n("42203"),
  O = n("330154"),
  P = n("501090"),
  D = n("945956"),
  b = n("660478"),
  U = n("27618"),
  w = n("102985"),
  F = n("697218"),
  V = n("145131"),
  k = n("476765"),
  H = n("570443"),
  B = n("76539"),
  G = n("664336"),
  W = n("599110"),
  Y = n("306160"),
  z = n("659500"),
  K = n("449008"),
  Z = n("299039"),
  X = n("158998"),
  Q = n("993063"),
  q = n("849324"),
  J = n("49111"),
  $ = n("782340"),
  ee = n("366160"),
  et = n("182893"),
  en = n("890957");
let ea = (0, k.uid)(),
  el = (0, k.uid)();

function es(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsxs)(V.default, {
    align: V.default.Align.CENTER,
    justify: V.default.Justify.CENTER,
    direction: V.default.Direction.VERTICAL,
    className: i(ee.errorState, t),
    children: [(0, a.jsx)("div", {
      className: i(ee.errorStateIcon, en.marginBottom20)
    }), n]
  })
}
let ei = e => {
    var t;
    let {
      channel: n,
      onClose: l
    } = e, s = null !== (t = (0, M.default)(n)) && void 0 !== t ? t : "", i = (0, f.useStateFromStores)([b.default], () => {
      var e;
      return null !== (e = b.default.lastMessageId(n.id)) && void 0 !== e ? e : n.id
    });
    return (0, a.jsx)(h.Clickable, {
      onClick: () => {
        (0, j.transitionToGuild)(J.ME, n.id), l()
      },
      children: (0, a.jsxs)("div", {
        className: ee.confirmChannelItemContainer,
        children: [(0, a.jsx)(h.Avatar, {
          src: (0, A.getChannelIconURL)(n),
          size: h.AvatarSizes.SIZE_24,
          "aria-label": s
        }), (0, a.jsx)("span", {
          className: ee.confirmChannelName,
          children: s
        }), (0, a.jsx)("span", {
          className: ee.lastActiveTimestamp,
          children: d(Z.default.extractTimestamp(i)).fromNow()
        })]
      })
    })
  },
  er = e => {
    let {
      onConfirm: t,
      channelIds: n,
      ...l
    } = e, s = (0, f.useStateFromStoresArray)([y.default], () => Array.from(n).map(y.default.getChannel), [n]);
    return (0, a.jsxs)(h.ConfirmModal, {
      header: $.default.Messages.GROUP_DM_INVITE_CONFIRM,
      confirmText: $.default.Messages.GROUP_DM_INVITE_CONFIRM_BUTTON,
      cancelText: $.default.Messages.CANCEL,
      onConfirm: t,
      confirmButtonColor: h.Button.Colors.BRAND,
      ...l,
      children: [(0, a.jsx)(h.Text, {
        variant: "text-md/normal",
        children: $.default.Messages.GROUP_DM_INVITE_CONFIRM_DESCRIPTION
      }), (0, a.jsx)(h.FormTitle, {
        className: ee.selectExistingFormHeader,
        children: $.default.Messages.GROUP_DM_INVITE_SELECT_EXISTING
      }), (0, a.jsx)(h.Scroller, {
        className: ee.confirmInviteScroller,
        children: s.filter(K.isNotNullish).sort((e, t) => {
          var n, a;
          let l = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id,
            s = null !== (a = t.lastMessageId) && void 0 !== a ? a : t.id;
          return Z.default.compare(s, l)
        }).map(e => (0, a.jsx)(ei, {
          onClose: l.onClose,
          channel: e
        }, e.id))
      })]
    })
  };
class eu extends l.PureComponent {
  componentDidMount() {
    let {
      channel: e
    } = this.props;
    m.default.wait(() => C.default.open(null == e ? void 0 : e.id));
    let t = (0, x.collectChannelAnalyticsMetadata)(e);
    null != e ? e.isDM() ? W.default.track(J.AnalyticEvents.OPEN_POPOUT, {
      ...t,
      type: "Add Friends to DM",
      source: "DM",
      is_friend: !this.isNotFriends()
    }) : W.default.track(J.AnalyticEvents.OPEN_POPOUT, {
      ...t,
      type: "Add Friends to DM",
      source: "Group DM"
    }) : W.default.track(J.AnalyticEvents.OPEN_POPOUT, {
      ...t,
      type: "New Group DM",
      source: "Friends List"
    }), z.ComponentDispatch.subscribe(J.ComponentActions.SCROLL_PAGE_UP, this.scrollPageUp), z.ComponentDispatch.subscribe(J.ComponentActions.SCROLL_PAGE_DOWN, this.scrollPageDown)
  }
  componentWillUnmount() {
    z.ComponentDispatch.unsubscribe(J.ComponentActions.SCROLL_PAGE_UP, this.scrollPageUp), z.ComponentDispatch.unsubscribe(J.ComponentActions.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), m.default.wait(() => C.default.close())
  }
  isNotFriends() {
    let {
      channel: e
    } = this.props;
    if (null == e || !e.isDM()) return !1;
    let t = e.getRecipientId();
    if (null == t) throw Error("no recipient in DM");
    return !U.default.isFriend(t)
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
    S.default.createInvite(e.id, {
      max_age: t
    }, J.InstantInviteSources.GROUP_DM)
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
    } = this.props, t = F.default.getCurrentUser();
    return null != t && t.isStaff() ? J.MAX_GROUP_DM_STAFF_PARTICIPANTS : null != e && e.isBroadcastChannel() ? J.MAX_GROUP_DM_BROADCAST_PARTICIPANTS : null != e && e.userLimit > 0 ? e.userLimit : J.MAX_GROUP_DM_PARTICIPANTS
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
    } = this.props, n = this.getRemaining(), l = null != e && 0 === t.size || n < 0, s = t.size > 1 ? $.default.Messages.CREATE_GROUP_DM : $.default.Messages.CREATE_DM;
    return (0, a.jsx)(h.Button, {
      fullWidth: !0,
      disabled: l,
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
      l = 0 === t.size || n < 0;
    return (0, a.jsx)("div", {
      className: ee.addButton,
      children: (0, a.jsx)(h.Button, {
        size: h.Button.Sizes.SMALL,
        disabled: l,
        onClick: this.handleInviteUsers,
        children: $.default.Messages.ADD
      })
    })
  }
  renderSubtitle() {
    if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
    let e = this.getRemaining(),
      t = e <= 0 ? $.default.Messages.GROUP_DM_INVITE_FULL_SUB2.format({
        number: this.getMaxParticipants()
      }) : $.default.Messages.GROUP_DM_INVITE_REMAINING.format({
        number: e
      });
    return (0, a.jsx)(h.Text, {
      variant: "text-xs/normal",
      className: i(ee.subtitle, {
        [ee.subtitleWarning]: e < 0
      }, en.marginTop4),
      children: t
    })
  }
  renderSearchBar() {
    var e;
    let {
      query: t,
      hasFriends: n,
      results: l,
      selectedRow: s,
      selectedUsers: r
    } = this.props;
    if (!n || this.isNotFriends()) return null;
    let u = [];
    return r.forEach(e => {
      let t = F.default.getUser(e);
      null != t && u.push(X.default.getName(t))
    }), (0, a.jsxs)(V.default, {
      className: i(ee.searchBar, en.marginTop20),
      children: [(0, a.jsx)(T.default, {
        ref: this.searchBarRef,
        className: ee.searchBarComponent,
        autoFocus: !0,
        placeholder: 0 === r.size ? $.default.Messages.GROUP_DM_SEARCH_PLACEHOLDER : void 0,
        disabled: this.isPartyFull(),
        size: T.default.Sizes.MEDIUM,
        query: t,
        selectedRow: s,
        sections: [null !== (e = null == l ? void 0 : l.length) && void 0 !== e ? e : 0],
        tags: u,
        onSelect: this.handleSelect,
        onSelectionChange: this.handleSelectionChange,
        onQueryChange: this.handleQueryChange,
        onRemoveTag: this.handleRemoveUser,
        inputProps: {
          "aria-labelledby": ea,
          "aria-controls": el,
          "aria-expanded": !0,
          "aria-activedescendant": "user-row-".concat(s)
        }
      }), this.renderAddUsersButton()]
    })
  }
  renderHeader() {
    let e = null != this.scrollerRef.current && this.state.separator,
      t = this.isNotFriends() ? $.default.Messages.GROUP_DM_ADD_FRIENDS : $.default.Messages.GROUP_DM_HEADER;
    return (0, a.jsxs)(h.ModalHeader, {
      direction: V.default.Direction.VERTICAL,
      align: V.default.Align.STRETCH,
      className: ee.header,
      separator: e,
      children: [c.isMobile ? this.renderMobileCloseButton() : null, (0, a.jsx)(h.Heading, {
        id: ea,
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
      let n = F.default.getUser(t),
        l = null != n ? n.username : "",
        s = null != n && U.default.getRelationshipType(n.id) === J.RelationshipTypes.PENDING_OUTGOING;
      return (0, a.jsxs)(es, {
        className: ee.notFriends,
        children: [(0, a.jsx)("div", {
          children: $.default.Messages.GROUP_DM_INVITE_NOT_FRIENDS.format({
            username: l
          })
        }), (0, a.jsx)(h.Button, {
          disabled: s,
          size: h.Button.Sizes.SMALL,
          onClick: () => null != n ? this.handleAddFriend(n) : null,
          className: en.marginTop20,
          children: s ? $.default.Messages.ADD_FRIEND_BUTTON_AFTER : $.default.Messages.ADD_FRIEND_BUTTON
        })]
      })
    }
    return t ? this.isPartyFull() ? (0, a.jsxs)(es, {
      className: ee.partyFull,
      children: [(0, a.jsx)("div", {
        children: $.default.Messages.GROUP_DM_INVITE_FULL_MAIN
      }), (0, a.jsx)("div", {
        children: $.default.Messages.GROUP_DM_INVITE_FULL_SUB2.format({
          number: this.getMaxParticipants()
        })
      })]
    }) : 0 === n.length ? (0, a.jsx)(es, {
      className: i(ee.noResults, en.marginBottom20),
      children: (0, a.jsx)("div", {
        children: $.default.Messages.GROUP_DM_INVITE_EMPTY
      })
    }) : (0, a.jsx)(h.List, {
      ref: this.scrollerRef,
      sections: [n.length],
      className: ee.scroller,
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
      innerId: el,
      innerAriaMultiselectable: !0,
      innerAriaOrientation: "vertical"
    }) : (0, a.jsxs)(es, {
      className: ee.noFriends,
      children: [(0, a.jsx)("div", {
        children: $.default.Messages.GROUP_DM_INVITE_NO_FRIENDS
      }), (0, a.jsx)(h.Button, {
        autoFocus: !0,
        color: h.Button.Colors.GREEN,
        fullWidth: !0,
        size: h.Button.Sizes.SMALL,
        onClick: this.handleAddFriendNavigation,
        className: en.marginTop20,
        children: $.default.Messages.ADD_FRIEND
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
      copied: s
    } = this.state;
    if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
    let r = null != t ? (0, R.default)(t.code) : "";
    return (0, a.jsxs)(l.Fragment, {
      children: [(0, a.jsx)(h.FormTitle, {
        tag: "h5",
        className: en.marginBottom8,
        children: $.default.Messages.GROUP_DM_INVITE_LINK_TITLE
      }), (0, a.jsxs)(V.default, {
        className: i(et.input, {
          [et.success]: s
        }),
        justify: V.default.Justify.BETWEEN,
        align: V.default.Align.CENTER,
        children: [r.length > 0 ? (0, a.jsx)(h.TextInput, {
          className: ee.copyInput,
          name: "invite",
          value: n ? $.default.Messages.INSTANT_INVITE_HIDDEN : r,
          editable: !1,
          inputClassName: ee.input,
          spellCheck: "false",
          onClick: e => e.currentTarget.select()
        }) : (0, a.jsx)(h.TextInput, {
          className: ee.copyInput,
          name: "invite",
          value: r,
          placeholder: (0, R.default)($.default.Messages.GROUP_DM_INVITE_LINK_EXAMPLE),
          editable: !1,
          inputClassName: ee.input,
          spellCheck: "false",
          onClick: () => this.createInvite()
        }), Y.SUPPORTS_COPY && r.length > 0 ? (0, a.jsx)(h.Button, {
          size: h.Button.Sizes.SMALL,
          color: s ? h.Button.Colors.GREEN : h.Button.Colors.BRAND,
          className: ee.copyButton,
          onClick: () => this.handleCopyInvite(r),
          children: s ? $.default.Messages.INVITE_COPIED : $.default.Messages.COPY
        }) : null, 0 === r.length ? (0, a.jsx)(h.Button, {
          size: h.Button.Sizes.SMALL,
          color: h.Button.Colors.BRAND,
          className: ee.copyButton,
          onClick: () => this.createInvite(),
          children: $.default.Messages.GROUP_DM_INVITE_LINK_CREATE
        }) : null]
      }), r.length > 0 ? (0, a.jsx)(h.Text, {
        variant: "text-xs/normal",
        className: i(en.marginTop8, ee.footerText),
        children: $.default.Messages.INVITE_EXPIRES_HOURS.format({
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
    if (null != n) return (0, a.jsxs)(l.Fragment, {
      children: [(0, a.jsx)("div", {
        className: ee.footerSeparator
      }), (0, a.jsx)(V.default, {
        direction: V.default.Direction.VERTICAL,
        className: ee.footer,
        children: n
      })]
    })
  }
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, a.jsxs)(h.ModalRoot, {
      transitionState: null != e ? e : h.ModalTransitionState.ENTERED,
      className: ee.popout,
      children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
    })
  }
  handleAddFriend(e) {
    this.props.onClose(), _.default.sendRequest({
      discordTag: X.default.getUserTag(e, {
        identifiable: "always"
      }),
      context: {
        location: "Group DM"
      }
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      separator: !1,
      copied: !1
    }, this.scrollerRef = l.createRef(), this.searchBarRef = l.createRef(), this._mobileCloseRef = l.createRef(), this.scrollPageUp = () => {
      var e;
      null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageUp({
        animate: !0
      })
    }, this.scrollPageDown = () => {
      var e;
      null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageDown({
        animate: !0
      })
    }, this.renderMobileCloseButton = () => (0, a.jsx)("div", {
      className: i(ee.mobileToolsContainer),
      ref: this._mobileCloseRef,
      children: (0, a.jsx)(h.FocusRingScope, {
        containerRef: this._mobileCloseRef,
        children: (0, a.jsx)("div", {
          children: (0, a.jsx)(I.default, {
            className: ee.mobileToolsCloseIcon,
            closeAction: this.props.onClose,
            keybind: "ESC"
          })
        })
      })
    }), this.getRowHeight = (e, t) => {
      if (e > 0) return 0;
      let {
        results: n
      } = this.props, a = n[t];
      return null != a ? 42 : 0
    }, this.renderRow = e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let {
        results: l,
        selectedUsers: s,
        selectedRow: i,
        hideDiscriminator: r
      } = this.props, u = l[n];
      if (null == u) return null;
      let {
        user: o,
        comparator: d
      } = u, c = s.has(o.id);
      return (0, a.jsx)(q.default, {
        row: n,
        user: o,
        hideDiscriminator: r,
        comparator: d,
        checked: c,
        selected: n === i,
        onClick: this.handleClick,
        onMouseEnter: this.focusResult,
        "aria-posinset": n + 1,
        "aria-setsize": l.length
      }, o.id)
    }, this.forceFocus = () => {
      let e = this.searchBarRef.current;
      null == e || e.focus()
    }, this.focusResult = e => {
      C.default.select(e)
    }, this.handleSelect = (e, t) => {
      let {
        results: n,
        channel: a
      } = this.props;
      null == t ? C.default.clear(null == a ? void 0 : a.id) : null != n && this.handleClick(n[t].user.id)
    }, this.handleSelectionChange = (e, t) => {
      C.default.select(t);
      let n = this.scrollerRef.current;
      null != n && n.scrollToIndex({
        section: e,
        row: t,
        padding: 8
      })
    }, this.handleQueryChange = e => {
      let {
        channel: t
      } = this.props;
      C.default.search(e, null == t ? void 0 : t.id)
    }, this.handleRemoveUser = e => {
      let t = Array.from(this.props.selectedUsers);
      C.default.removeUser(t[e]), this.forceFocus()
    }, this.handleClick = e => {
      let {
        selectedUsers: t,
        query: n,
        channel: a
      } = this.props, l = !t.has(e);
      l ? (C.default.addUser(e), n.length > 0 && C.default.clear(null == a ? void 0 : a.id)) : C.default.removeUser(e), this.forceFocus()
    }, this.handleAddFriendNavigation = () => {
      (0, j.transitionTo)(J.Routes.FRIENDS), g.default.setSection(J.FriendsSections.ADD_FRIEND), this.props.onClose()
    }, this.handleScroll = () => {
      let e = this.scrollerRef.current;
      null != e && this.setState({
        separator: !e.isScrolledToTop()
      })
    }, this.createNewDM = e => {
      E.default.openPrivateChannel(e, !1, !1, "New Group DM")
    }, this.pushToExistingDM = (e, t) => {
      let n = D.default.getChannelId() === e.id;
      E.default.addRecipients(e.id, t, J.AnalyticsLocations.ADD_FRIENDS_TO_DM).then(a => {
        if (n) {
          if (e.isDM() && a !== e.id) {
            p.default.call(a, !1, !0);
            return
          }
          p.default.ring(a, t)
        }
      })
    }, this.handleInviteUsers = () => {
      let {
        channel: e,
        selectedUsers: t,
        onClose: n
      } = this.props, l = Array.from(t);
      if (null != e) {
        let t = ec(Array.from(new Set([...e.recipients, ...l])));
        t.size > 0 ? (0, h.openModal)(n => (0, a.jsx)(er, {
          ...n,
          onConfirm: () => this.pushToExistingDM(e, l),
          channelIds: t
        }), {}, (0, h.modalContextFromAppContext)(this.context.appContext)) : this.pushToExistingDM(e, l)
      } else {
        let e = ec(l);
        l.length > 1 && e.size > 0 ? (0, h.openModal)(t => (0, a.jsx)(er, {
          ...t,
          onConfirm: () => this.createNewDM(l),
          channelIds: e
        }), {}, (0, h.modalContextFromAppContext)(this.context.appContext)) : this.createNewDM(l)
      }
      n()
    }, this.handleCopyInvite = e => {
      let {
        channel: t,
        invite: n
      } = this.props;
      null != n && (0, Y.copy)(e), null != this.copyTimeout && clearTimeout(this.copyTimeout), this.setState({
        copied: !0
      }), this.copyTimeout = setTimeout(() => {
        this.setState({
          copied: !1
        })
      }, 1e3), W.default.track(J.AnalyticEvents.COPY_INSTANT_INVITE, {
        server: null,
        channel: null != t ? t.id : null,
        channel_type: null != t ? t.type : null,
        location: J.AnalyticsLocations.ADD_FRIENDS_TO_DM,
        code: null != n ? n.code : null
      })
    }
  }
}
eu.contextType = v.default;
let eo = f.default.connectStores([P.default, O.default, w.default], e => {
  let t, {
    channel: n
  } = e;
  return null != n && null != (t = O.default.getInvite(n.id)) && t.isExpired() && (t = null), {
    ...P.default.getState(),
    invite: t,
    hideDiscriminator: w.default.hidePersonalInformation,
    hideInstantInvites: w.default.hideInstantInvites
  }
})(eu);

function ed(e) {
  let {
    channel: t,
    iconClassName: n,
    icon: s,
    tooltip: i,
    tooltipPosition: r = "bottom",
    popoutPosition: u = "bottom",
    popoutAlign: o = "right",
    subscribeToGlobalHotkey: d = !1
  } = e, [c, f] = l.useState(null != t && t.isGroupDM() && 0 === t.recipients.length), m = (0, N.useIsBroadcastingGDM)(null == t ? void 0 : t.id), p = l.useCallback(() => f(e => !e), []);
  return (l.useEffect(() => (d && z.ComponentDispatch.subscribe(J.ComponentActions.TOGGLE_DM_CREATE, p), () => {
    z.ComponentDispatch.unsubscribe(J.ComponentActions.TOGGLE_DM_CREATE, p)
  }), [d, p]), m) ? null : (0, a.jsx)(h.Popout, {
    renderPopout: e => (0, a.jsx)(eo, {
      ...e,
      onClose: e.closePopout,
      channel: t
    }),
    position: u,
    shouldShow: c,
    align: o,
    onRequestClose: () => f(!1),
    animation: h.Popout.Animation.NONE,
    children: e => (0, a.jsx)(G.default.Icon, {
      ...e,
      onClick: p,
      icon: null != s ? s : null == t ? H.default : B.default,
      className: n,
      iconClassName: n,
      tooltip: i,
      tooltipPosition: r
    })
  })
}

function ec(e) {
  let t = ef(e);
  return new Set(u(y.default.getMutablePrivateChannels()).values().filter(e => (0, L.isMultiUserDM)(e.type)).filter(e => ef(e.recipients) === t).map(e => e.id).value())
}

function ef(e) {
  return JSON.stringify(e.sort())
}