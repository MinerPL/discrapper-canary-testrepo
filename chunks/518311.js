n.d(t, {
  Z: function() {
return ep;
  }
}), n(411104), n(653041), n(47120);
var i, a = n(735250),
  s = n(470079),
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
  N = n(461745),
  v = n(40851),
  S = n(367907),
  Z = n(762914),
  A = n(43267),
  M = n(933557),
  b = n(600164),
  R = n(313201),
  j = n(366980),
  L = n(703656),
  P = n(93127),
  O = n(60349),
  y = n(814443),
  D = n(428598),
  k = n(131704),
  U = n(592125),
  w = n(341165),
  B = n(544610),
  H = n(19780),
  G = n(306680),
  V = n(699516),
  F = n(246946),
  W = n(594174),
  z = n(626135),
  Y = n(572004),
  K = n(585483),
  q = n(823379),
  X = n(709054),
  Q = n(51144),
  J = n(73752),
  $ = n(665149),
  ee = n(575464),
  et = n(981631),
  en = n(689938),
  ei = n(715252),
  ea = n(787223),
  es = n(224499);

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let er = (0, R.hQ)(),
  eo = (0, R.hQ)();

function ec(e) {
  let {
className: t,
children: n
  } = e;
  return (0, a.jsxs)(b.Z, {
align: b.Z.Align.CENTER,
justify: b.Z.Justify.CENTER,
direction: b.Z.Direction.VERTICAL,
className: r()(ei.errorState, t),
children: [
  (0, a.jsx)('div', {
    className: r()(ei.errorStateIcon, es.marginBottom20)
  }),
  n
]
  });
}
let eu = e => {
var t;
let {
  channel: n,
  onClose: i
} = e, s = null !== (t = (0, M.ZP)(n)) && void 0 !== t ? t : '', l = (0, m.e7)([G.ZP], () => {
  var e;
  return null !== (e = G.ZP.lastMessageId(n.id)) && void 0 !== e ? e : n.id;
});
return (0, a.jsx)(p.Clickable, {
  onClick: () => {
    (0, L.XU)(et.ME, n.id), i();
  },
  children: (0, a.jsxs)('div', {
    className: ei.confirmChannelItemContainer,
    children: [
      (0, a.jsx)(p.Avatar, {
        src: (0, A.x)(n),
        size: p.AvatarSizes.SIZE_24,
        'aria-label': s
      }),
      (0, a.jsx)('span', {
        className: ei.confirmChannelName,
        children: s
      }),
      (0, a.jsx)('span', {
        className: ei.lastActiveTimestamp,
        children: d()(X.default.extractTimestamp(l)).fromNow()
      })
    ]
  })
});
  },
  ed = e => {
let {
  onConfirm: t,
  channelIds: n,
  ...i
} = e, s = (0, m.Wu)([U.Z], () => Array.from(n).map(U.Z.getChannel), [n]);
return (0, a.jsxs)(p.ConfirmModal, {
  header: en.Z.Messages.GROUP_DM_INVITE_CONFIRM,
  confirmText: en.Z.Messages.GROUP_DM_INVITE_CONFIRM_BUTTON,
  cancelText: en.Z.Messages.CANCEL,
  onConfirm: t,
  confirmButtonColor: p.Button.Colors.BRAND,
  ...i,
  children: [
    (0, a.jsx)(p.Text, {
      variant: 'text-md/normal',
      children: en.Z.Messages.GROUP_DM_INVITE_CONFIRM_DESCRIPTION
    }),
    (0, a.jsx)(p.FormTitle, {
      className: ei.selectExistingFormHeader,
      children: en.Z.Messages.GROUP_DM_INVITE_SELECT_EXISTING
    }),
    (0, a.jsx)(p.Scroller, {
      className: ei.confirmInviteScroller,
      children: s.filter(q.lm).sort((e, t) => {
        var n, i;
        let a = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id,
          s = null !== (i = t.lastMessageId) && void 0 !== i ? i : t.id;
        return X.default.compare(s, a);
      }).map(e => (0, a.jsx)(eu, {
        onClose: i.onClose,
        channel: e
      }, e.id))
    })
  ]
});
  };
class eh extends(i = s.PureComponent) {
  _getAnalyticsEntryPoint() {
let {
  channel: e
} = this.props, t = '', n = '';
return null != e ? e.isDM() ? (t = 'Add Friends to DM', n = 'DM') : (t = 'Add Friends to DM', n = 'Group DM') : (t = 'New Group DM', n = 'Friends List'), {
  entryPointType: t,
  entryPointSource: n
};
  }
  componentDidMount() {
let {
  channel: e
} = this.props;
_.Z.wait(() => I.Z.open(null == e ? void 0 : e.id));
let t = (0, S.v_)(e);
z.default.track(et.rMx.OPEN_POPOUT, {
  ...t,
  type: this._getAnalyticsEntryPoint().entryPointType,
  source: this._getAnalyticsEntryPoint().entryPointSource,
  is_friend: !this.isNotFriends()
}), K.S.subscribe(et.CkL.SCROLL_PAGE_UP, this.scrollPageUp), K.S.subscribe(et.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
  }
  componentWillUnmount() {
K.S.unsubscribe(et.CkL.SCROLL_PAGE_UP, this.scrollPageUp), K.S.unsubscribe(et.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), _.Z.wait(() => I.Z.close());
  }
  isNotFriends() {
let {
  channel: e
} = this.props;
if (null == e || !e.isDM())
  return !1;
let t = e.getRecipientId();
if (null == t)
  throw Error('no recipient in DM');
return !V.Z.isFriend(t);
  }
  createInvite() {
let {
  channel: e
} = this.props;
if (null == e || !e.isMultiUserDM() || this.isPartyFull())
  return;
let {
  inviteMaxAgeSeconds: t
} = J.Z.getCurrentConfig({
  location: '5326c5_1'
}, {
  autoTrackExposure: !1
});
C.Z.createInvite(e.id, {
  max_age: t
}, et.t4x.GROUP_DM);
  }
  isPartyFull() {
let {
  channel: e
} = this.props;
return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
  }
  getMaxParticipants() {
let {
  channel: e
} = this.props, t = W.default.getCurrentUser();
return null != t && t.isStaff() ? et.p3w : null != e && e.isBroadcastChannel() ? et.keq : null != e && e.userLimit > 0 ? e.userLimit : et.pAY;
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
} = this.props, n = this.getRemaining(), i = null != e && 0 === t.size || n < 0, s = t.size > 1 ? en.Z.Messages.CREATE_GROUP_DM : en.Z.Messages.CREATE_DM;
return (0, a.jsx)(p.Button, {
  fullWidth: !0,
  disabled: i,
  onClick: this.handleInviteUsers,
  children: s
});
  }
  renderAddUsersButton() {
let {
  channel: e,
  selectedUsers: t
} = this.props;
if (null == e || e.isDM())
  return;
let n = this.getRemaining(),
  i = 0 === t.size || n < 0;
return (0, a.jsx)('div', {
  className: ei.addButton,
  children: (0, a.jsx)(p.Button, {
    size: p.Button.Sizes.SMALL,
    disabled: i,
    onClick: this.handleInviteUsers,
    children: en.Z.Messages.ADD
  })
});
  }
  renderSubtitle() {
if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull())
  return null;
let e = this.getRemaining(),
  t = e <= 0 ? en.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({
    number: this.getMaxParticipants()
  }) : en.Z.Messages.GROUP_DM_INVITE_REMAINING.format({
    number: e
  });
return (0, a.jsx)(p.Text, {
  variant: 'text-xs/normal',
  className: r()(ei.subtitle, {
    [ei.subtitleWarning]: e < 0
  }, es.marginTop4),
  children: t
});
  }
  renderSearchBar() {
var e;
let {
  query: t,
  hasFriends: n,
  results: i,
  selectedRow: s,
  selectedUsers: l
} = this.props;
if (!n || this.isNotFriends())
  return null;
let o = [];
return l.forEach(e => {
  let t = W.default.getUser(e);
  null != t && o.push(Q.ZP.getName(t));
}), (0, a.jsxs)(b.Z, {
  className: r()(ei.searchBar, es.marginTop20),
  children: [
    (0, a.jsx)(N.ZP, {
      ref: this.searchBarRef,
      className: ei.searchBarComponent,
      autoFocus: !0,
      placeholder: 0 === l.size ? en.Z.Messages.GROUP_DM_SEARCH_PLACEHOLDER : void 0,
      disabled: this.isPartyFull(),
      size: N.ZP.Sizes.MEDIUM,
      query: t,
      selectedRow: s,
      sections: [null !== (e = null == i ? void 0 : i.length) && void 0 !== e ? e : 0],
      tags: o,
      onSelect: this.handleSelect,
      onSelectionChange: this.handleSelectionChange,
      onQueryChange: this.handleQueryChange,
      onRemoveTag: this.handleRemoveUser,
      inputProps: {
        'aria-labelledby': er,
        'aria-controls': eo,
        'aria-expanded': !0,
        'aria-activedescendant': 'user-row-'.concat(s)
      }
    }),
    this.renderAddUsersButton()
  ]
});
  }
  renderHeader() {
let e = null != this.scrollerRef.current && this.state.separator,
  t = this.isNotFriends() ? en.Z.Messages.GROUP_DM_ADD_FRIENDS : en.Z.Messages.GROUP_DM_HEADER;
return (0, a.jsxs)(p.ModalHeader, {
  direction: b.Z.Direction.VERTICAL,
  align: b.Z.Align.STRETCH,
  className: ei.__invalid_header,
  separator: e,
  children: [
    h.tq ? this.renderMobileCloseButton() : null,
    (0, a.jsx)(p.Heading, {
      id: er,
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
  let n = W.default.getUser(t),
    i = null != n ? n.username : '',
    s = null != n && V.Z.getRelationshipType(n.id) === et.OGo.PENDING_OUTGOING;
  return (0, a.jsxs)(ec, {
    className: ei.notFriends,
    children: [
      (0, a.jsx)('div', {
        children: en.Z.Messages.GROUP_DM_INVITE_NOT_FRIENDS.format({
          username: i
        })
      }),
      (0, a.jsx)(p.Button, {
        disabled: s,
        size: p.Button.Sizes.SMALL,
        onClick: () => null != n ? this.handleAddFriend(n) : null,
        className: es.marginTop20,
        children: s ? en.Z.Messages.ADD_FRIEND_BUTTON_AFTER : en.Z.Messages.ADD_FRIEND_BUTTON
      })
    ]
  });
}
return t ? this.isPartyFull() ? (0, a.jsxs)(ec, {
  className: ei.partyFull,
  children: [
    (0, a.jsx)('div', {
      children: en.Z.Messages.GROUP_DM_INVITE_FULL_MAIN
    }),
    (0, a.jsx)('div', {
      children: en.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({
        number: this.getMaxParticipants()
      })
    })
  ]
}) : 0 === n.length ? (0, a.jsx)(ec, {
  className: r()(ei.noResults, es.marginBottom20),
  children: (0, a.jsx)('div', {
    children: en.Z.Messages.GROUP_DM_INVITE_EMPTY
  })
}) : (0, a.jsx)(p.List, {
  ref: this.scrollerRef,
  sections: [n.length],
  className: ei.scroller,
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
  innerId: eo,
  innerAriaMultiselectable: !0,
  innerAriaOrientation: 'vertical'
}) : (0, a.jsxs)(ec, {
  className: ei.noFriends,
  children: [
    (0, a.jsx)('div', {
      children: en.Z.Messages.GROUP_DM_INVITE_NO_FRIENDS
    }),
    (0, a.jsx)(p.Button, {
      autoFocus: !0,
      color: p.Button.Colors.GREEN,
      fullWidth: !0,
      size: p.Button.Sizes.SMALL,
      onClick: this.handleAddFriendNavigation,
      className: es.marginTop20,
      children: en.Z.Messages.ADD_FRIEND
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
} = this.props, {
  copied: i
} = this.state;
if (null == e || !e.isMultiUserDM() || this.isPartyFull())
  return null;
let l = null != t ? (0, j.Z)(t.code) : '';
return (0, a.jsxs)(s.Fragment, {
  children: [
    (0, a.jsx)(p.FormTitle, {
      tag: 'h5',
      className: es.marginBottom8,
      children: en.Z.Messages.GROUP_DM_INVITE_LINK_TITLE
    }),
    (0, a.jsxs)(b.Z, {
      className: r()(ea.input, {
        [ea.success]: i
      }),
      justify: b.Z.Justify.BETWEEN,
      align: b.Z.Align.CENTER,
      children: [
        l.length > 0 ? (0, a.jsx)(p.TextInput, {
          className: ei.copyInput,
          name: 'invite',
          value: n ? en.Z.Messages.INSTANT_INVITE_HIDDEN : l,
          editable: !1,
          inputClassName: ei.input,
          spellCheck: 'false',
          onClick: e => e.currentTarget.select()
        }) : (0, a.jsx)(p.TextInput, {
          className: ei.copyInput,
          name: 'invite',
          value: l,
          placeholder: (0, j.Z)(en.Z.Messages.GROUP_DM_INVITE_LINK_EXAMPLE),
          editable: !1,
          inputClassName: ei.input,
          spellCheck: 'false',
          onClick: () => this.createInvite()
        }),
        Y.wS && l.length > 0 ? (0, a.jsx)(p.Button, {
          size: p.Button.Sizes.SMALL,
          color: i ? p.Button.Colors.GREEN : p.Button.Colors.BRAND,
          className: ei.copyButton,
          onClick: () => this.handleCopyInvite(l),
          children: i ? en.Z.Messages.INVITE_COPIED : en.Z.Messages.COPY
        }) : null,
        0 === l.length ? (0, a.jsx)(p.Button, {
          size: p.Button.Sizes.SMALL,
          color: p.Button.Colors.BRAND,
          className: ei.copyButton,
          onClick: () => this.createInvite(),
          children: en.Z.Messages.GROUP_DM_INVITE_LINK_CREATE
        }) : null
      ]
    }),
    l.length > 0 ? (0, a.jsx)(p.Text, {
      variant: 'text-xs/normal',
      className: r()(es.marginTop8, ei.footerText),
      children: en.Z.Messages.INVITE_EXPIRES_HOURS.format({
        numHours: ''.concat(24)
      })
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
  return (0, a.jsxs)(s.Fragment, {
    children: [
      (0, a.jsx)('div', {
        className: ei.footerSeparator
      }),
      (0, a.jsx)(b.Z, {
        direction: b.Z.Direction.VERTICAL,
        className: ei.footer,
        children: n
      })
    ]
  });
  }
  render() {
let {
  transitionState: e
} = this.props;
return (0, a.jsxs)(p.ModalRoot, {
  transitionState: null != e ? e : p.ModalTransitionState.ENTERED,
  className: ei.popout,
  children: [
    this.renderHeader(),
    this.renderBody(),
    this.renderFooter()
  ]
});
  }
  handleAddFriend(e) {
this.props.onClose(), x.Z.sendRequest({
  discordTag: Q.ZP.getUserTag(e, {
    identifiable: 'always'
  }),
  context: {
    location: 'Group DM'
  }
});
  }
  _getUserAffinities(e) {
return {
  affinities: e.map(e => {
    var t, n, i;
    let a = O.Z.getCurrentConfig({
      location: 'desktop_dm_list'
    }, {
      autoTrackExposure: !1
    });
    if (a.useV1) {
      let n = y.Z.getUserAffinity(e);
      return null !== (t = null == n ? void 0 : n.affinity) && void 0 !== t ? t : -1;
    }
    if (a.useV2Dm) {
      let t = D.Z.getUserAffinity(e);
      return null !== (n = null == t ? void 0 : t.dmProbability) && void 0 !== n ? n : -1;
    }
    if (!a.useV2Communication)
      return -1;
    else {
      let t = D.Z.getUserAffinity(e);
      return null !== (i = null == t ? void 0 : t.communicationProbability) && void 0 !== i ? i : -1;
    }
  })
};
  }
  constructor(...e) {
super(...e), el(this, 'state', {
  separator: !1,
  copied: !1
}), el(this, 'copyTimeout', void 0), el(this, 'scrollerRef', s.createRef()), el(this, 'searchBarRef', s.createRef()), el(this, '_mobileCloseRef', s.createRef()), el(this, '_searchCounter', 0), el(this, '_existingTimeout', null), el(this, 'scrollPageUp', () => {
  var e;
  null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageUp({
    animate: !0
  });
}), el(this, 'scrollPageDown', () => {
  var e;
  null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageDown({
    animate: !0
  });
}), el(this, 'renderMobileCloseButton', () => (0, a.jsx)('div', {
  className: r()(ei.mobileToolsContainer),
  ref: this._mobileCloseRef,
  children: (0, a.jsx)(p.FocusRingScope, {
    containerRef: this._mobileCloseRef,
    children: (0, a.jsx)('div', {
      children: (0, a.jsx)(T.Z, {
        className: ei.mobileToolsCloseIcon,
        closeAction: this.props.onClose,
        keybind: 'ESC'
      })
    })
  })
})), el(this, 'getRowHeight', (e, t) => {
  if (e > 0)
    return 0;
  let {
    results: n
  } = this.props;
  return null != n[t] ? 42 : 0;
}), el(this, 'renderRow', e => {
  let {
    section: t,
    row: n
  } = e;
  if (t > 0)
    return null;
  let {
    results: i,
    selectedUsers: s,
    selectedRow: l,
    hideDiscriminator: r
  } = this.props, o = i[n];
  if (null == o)
    return null;
  let {
    user: c,
    comparator: u
  } = o, d = s.has(c.id);
  return (0, a.jsx)(ee.Z, {
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
  }, c.id);
}), el(this, 'forceFocus', () => {
  let e = this.searchBarRef.current;
  null == e || e.focus();
}), el(this, 'focusResult', e => {
  I.Z.select(e);
}), el(this, 'handleSelect', (e, t) => {
  let {
    results: n,
    channel: i
  } = this.props;
  null == t ? I.Z.clear(null == i ? void 0 : i.id) : null != n && this.handleClick(n[t].user.id);
}), el(this, 'handleSelectionChange', (e, t) => {
  I.Z.select(t);
  let n = this.scrollerRef.current;
  null != n && n.scrollToIndex({
    section: e,
    row: t,
    padding: 8
  });
}), el(this, 'handleQueryChange', e => {
  let {
    channel: t
  } = this.props, n = (0, S.v_)(t);
  I.Z.search(e, null == t ? void 0 : t.id), null != this._existingTimeout && clearTimeout(this._existingTimeout), this._existingTimeout = setTimeout(() => {
    z.default.track(et.rMx.SEARCH_USER_LIST_STARTED, {
      ...n,
      entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
      entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
      search_query_length: e.length
    }), this._searchCounter++;
  }, 500);
}), el(this, 'handleRemoveUser', e => {
  let t = Array.from(this.props.selectedUsers);
  I.Z.removeUser(t[e]), this.forceFocus();
}), el(this, 'handleClick', e => {
  let {
    selectedUsers: t,
    query: n,
    channel: i
  } = this.props;
  t.has(e) ? I.Z.removeUser(e) : (I.Z.addUser(e), n.length > 0 && I.Z.clear(null == i ? void 0 : i.id)), this.forceFocus();
}), el(this, 'handleAddFriendNavigation', () => {
  (0, L.uL)(et.Z5c.FRIENDS), g.Z.setSection(et.pJs.ADD_FRIEND), this.props.onClose();
}), el(this, 'handleScroll', () => {
  let e = this.scrollerRef.current;
  null != e && this.setState({
    separator: !e.isScrolledToTop()
  });
}), el(this, 'createNewDM', e => {
  let t = this._searchCounter,
    {
      channel: n
    } = this.props,
    i = (0, S.v_)(n),
    a = !0;
  1 === e.length && (a = null == E.Z._openCachedDMChannel(e[0])), z.default.track(et.rMx.CREATE_DM_USER_LIST_CLICKED, {
    ...i,
    is_new_dm: a,
    entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
    entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
    recipient_ids: e,
    num_searches: t,
    affinity_score: this._getUserAffinities(e).affinities
  }), E.Z.openPrivateChannel(e, !1, !1, 'New Group DM');
}), el(this, 'pushToExistingDM', (e, t) => {
  let n = this._searchCounter,
    i = (0, S.v_)(e),
    a = H.Z.getChannelId() === e.id;
  E.Z.addRecipients(e.id, t, et.Sbl.ADD_FRIENDS_TO_DM).then(n => {
    if (!!a) {
      if (e.isDM() && n !== e.id) {
        f.Z.call(n, !1, !0);
        return;
      }
      f.Z.ring(n, t);
    }
  }), z.default.track(et.rMx.CREATE_DM_USER_LIST_CLICKED, {
    ...i,
    is_new_dm: !0,
    entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
    entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
    recipient_ids: t,
    num_searches: n,
    affinity_score: this._getUserAffinities(t).affinities
  });
}), el(this, 'handleInviteUsers', () => {
  let {
    channel: e,
    selectedUsers: t,
    onClose: n
  } = this.props, i = Array.from(t);
  if (null != e) {
    let t = e_(Array.from(new Set([
      ...e.recipients,
      ...i
    ])));
    t.size > 0 ? (0, p.openModal)(n => (0, a.jsx)(ed, {
      ...n,
      onConfirm: () => this.pushToExistingDM(e, i),
      channelIds: t
    }), {}, (0, p.modalContextFromAppContext)(this.context.appContext)) : this.pushToExistingDM(e, i);
  } else {
    let e = e_(i);
    i.length > 1 && e.size > 0 ? (0, p.openModal)(t => (0, a.jsx)(ed, {
      ...t,
      onConfirm: () => this.createNewDM(i),
      channelIds: e
    }), {}, (0, p.modalContextFromAppContext)(this.context.appContext)) : this.createNewDM(i);
  }
  n();
}), el(this, 'handleCopyInvite', e => {
  let {
    channel: t,
    invite: n
  } = this.props;
  null != n && (0, Y.JG)(e), null != this.copyTimeout && clearTimeout(this.copyTimeout), this.setState({
    copied: !0
  }), this.copyTimeout = setTimeout(() => {
    this.setState({
      copied: !1
    });
  }, 1000), z.default.track(et.rMx.COPY_INSTANT_INVITE, {
    server: null,
    channel: null != t ? t.id : null,
    channel_type: null != t ? t.type : null,
    location: et.Sbl.ADD_FRIENDS_TO_DM,
    code: null != n ? n.code : null
  });
});
  }
}

function em(e) {
  let {
channel: t,
...n
  } = e;
  O.Z.useExperiment({
location: 'desktop_dm_list'
  });
  let i = (0, m.cj)([
B.Z,
w.Z,
F.Z
  ], () => {
let e;
return null != t && null != (e = w.Z.getInvite(t.id)) && e.isExpired() && (e = null), {
  ...B.Z.getState(),
  invite: e,
  hideDiscriminator: F.Z.hidePersonalInformation,
  hideInstantInvites: F.Z.hideInstantInvites
};
  });
  return (0, a.jsx)(eh, {
channel: t,
...n,
...i
  });
}

function ep(e) {
  let {
channel: t,
iconClassName: n,
icon: i,
tooltip: l,
tooltipPosition: r = 'bottom',
popoutPosition: o = 'bottom',
popoutAlign: c = 'right',
subscribeToGlobalHotkey: u = !1
  } = e, [d, h] = s.useState(null != t && t.isGroupDM() && 0 === t.recipients.length), m = (0, Z.Dd)(null == t ? void 0 : t.id), _ = s.useCallback(() => h(e => !e), []);
  s.useEffect(() => (u && K.S.subscribe(et.CkL.TOGGLE_DM_CREATE, _), () => {
K.S.unsubscribe(et.CkL.TOGGLE_DM_CREATE, _);
  }), [
u,
_
  ]);
  let {
useV1: f,
useV2Dm: E,
useV2Communication: g
  } = O.Z.useExperiment({
location: 'desktop_dm_list'
  }, {
autoTrackExposure: !1
  });
  return (s.useEffect(() => {
f && (0, P.W)(), E && (0, P._)(), g && (0, P._)();
  }, [
f,
E,
g
  ]), m) ? null : (0, a.jsx)(p.Popout, {
renderPopout: e => (0, a.jsx)(em, {
  ...e,
  onClose: e.closePopout,
  channel: t
}),
position: o,
shouldShow: d,
align: c,
onRequestClose: () => h(!1),
animation: p.Popout.Animation.NONE,
children: e => (0, a.jsx)($.ZP.Icon, {
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

function e_(e) {
  let t = ef(e);
  return new Set(c()(U.Z.getMutablePrivateChannels()).values().filter(e => (0, k.bc)(e.type)).filter(e => ef(e.recipients) === t).map(e => e.id).value());
}

function ef(e) {
  return JSON.stringify(e.sort());
}
el(eh, 'contextType', v.ZP);