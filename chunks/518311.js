n.d(t, {
  Z: function() {
return eh;
  }
}), n(411104), n(653041), n(47120);
var i, a = n(735250),
  l = n(470079),
  s = n(120356),
  r = n.n(s),
  o = n(392711),
  c = n.n(o),
  d = n(913527),
  u = n.n(d),
  h = n(873546),
  p = n(442837),
  m = n(481060),
  _ = n(570140),
  f = n(26151),
  E = n(493683),
  C = n(758059),
  g = n(447543),
  I = n(708690),
  x = n(194359),
  T = n(425493),
  v = n(461745),
  N = n(40851),
  S = n(367907),
  Z = n(762914),
  A = n(43267),
  M = n(933557),
  b = n(366980),
  R = n(703656),
  j = n(93127),
  L = n(60349),
  P = n(131704),
  O = n(592125),
  y = n(341165),
  D = n(544610),
  k = n(19780),
  U = n(306680),
  w = n(699516),
  B = n(246946),
  H = n(594174),
  G = n(285952),
  V = n(153124),
  F = n(626135),
  W = n(572004),
  z = n(585483),
  Y = n(823379),
  K = n(709054),
  q = n(51144),
  X = n(73752),
  Q = n(665149),
  J = n(575464),
  $ = n(981631),
  ee = n(689938),
  et = n(620077),
  en = n(216315),
  ei = n(549856);

function ea(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let el = (0, V.hQ)(),
  es = (0, V.hQ)();

function er(e) {
  let {
className: t,
children: n
  } = e;
  return (0, a.jsxs)(G.Z, {
align: G.Z.Align.CENTER,
justify: G.Z.Justify.CENTER,
direction: G.Z.Direction.VERTICAL,
className: r()(et.errorState, t),
children: [
  (0, a.jsx)('div', {
    className: r()(et.errorStateIcon, ei.marginBottom20)
  }),
  n
]
  });
}
let eo = e => {
var t;
let {
  channel: n,
  onClose: i
} = e, l = null !== (t = (0, M.ZP)(n)) && void 0 !== t ? t : '', s = (0, p.e7)([U.ZP], () => {
  var e;
  return null !== (e = U.ZP.lastMessageId(n.id)) && void 0 !== e ? e : n.id;
});
return (0, a.jsx)(m.Clickable, {
  onClick: () => {
    (0, R.XU)($.ME, n.id), i();
  },
  children: (0, a.jsxs)('div', {
    className: et.confirmChannelItemContainer,
    children: [
      (0, a.jsx)(m.Avatar, {
        src: (0, A.x)(n),
        size: m.AvatarSizes.SIZE_24,
        'aria-label': l
      }),
      (0, a.jsx)('span', {
        className: et.confirmChannelName,
        children: l
      }),
      (0, a.jsx)('span', {
        className: et.lastActiveTimestamp,
        children: u()(K.default.extractTimestamp(s)).fromNow()
      })
    ]
  })
});
  },
  ec = e => {
let {
  onConfirm: t,
  channelIds: n,
  ...i
} = e, l = (0, p.Wu)([O.Z], () => Array.from(n).map(O.Z.getChannel), [n]);
return (0, a.jsxs)(m.ConfirmModal, {
  header: ee.Z.Messages.GROUP_DM_INVITE_CONFIRM,
  confirmText: ee.Z.Messages.GROUP_DM_INVITE_CONFIRM_BUTTON,
  cancelText: ee.Z.Messages.CANCEL,
  onConfirm: t,
  confirmButtonColor: m.Button.Colors.BRAND,
  ...i,
  children: [
    (0, a.jsx)(m.Text, {
      variant: 'text-md/normal',
      children: ee.Z.Messages.GROUP_DM_INVITE_CONFIRM_DESCRIPTION
    }),
    (0, a.jsx)(m.FormTitle, {
      className: et.selectExistingFormHeader,
      children: ee.Z.Messages.GROUP_DM_INVITE_SELECT_EXISTING
    }),
    (0, a.jsx)(m.Scroller, {
      className: et.confirmInviteScroller,
      children: l.filter(Y.lm).sort((e, t) => {
        var n, i;
        let a = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id,
          l = null !== (i = t.lastMessageId) && void 0 !== i ? i : t.id;
        return K.default.compare(l, a);
      }).map(e => (0, a.jsx)(eo, {
        onClose: i.onClose,
        channel: e
      }, e.id))
    })
  ]
});
  };
class ed extends(i = l.PureComponent) {
  componentDidMount() {
let {
  channel: e
} = this.props;
_.Z.wait(() => I.Z.open(null == e ? void 0 : e.id));
let t = (0, S.v_)(e);
null != e ? e.isDM() ? F.default.track($.rMx.OPEN_POPOUT, {
  ...t,
  type: 'Add Friends to DM',
  source: 'DM',
  is_friend: !this.isNotFriends()
}) : F.default.track($.rMx.OPEN_POPOUT, {
  ...t,
  type: 'Add Friends to DM',
  source: 'Group DM'
}) : F.default.track($.rMx.OPEN_POPOUT, {
  ...t,
  type: 'New Group DM',
  source: 'Friends List'
}), z.S.subscribe($.CkL.SCROLL_PAGE_UP, this.scrollPageUp), z.S.subscribe($.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
  }
  componentWillUnmount() {
z.S.unsubscribe($.CkL.SCROLL_PAGE_UP, this.scrollPageUp), z.S.unsubscribe($.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), _.Z.wait(() => I.Z.close());
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
return !w.Z.isFriend(t);
  }
  createInvite() {
let {
  channel: e
} = this.props;
if (null == e || !e.isMultiUserDM() || this.isPartyFull())
  return;
let {
  inviteMaxAgeSeconds: t
} = X.Z.getCurrentConfig({
  location: '5326c5_1'
}, {
  autoTrackExposure: !1
});
g.Z.createInvite(e.id, {
  max_age: t
}, $.t4x.GROUP_DM);
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
} = this.props, t = H.default.getCurrentUser();
return null != t && t.isStaff() ? $.p3w : null != e && e.isBroadcastChannel() ? $.keq : null != e && e.userLimit > 0 ? e.userLimit : $.pAY;
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
} = this.props, n = this.getRemaining(), i = null != e && 0 === t.size || n < 0, l = t.size > 1 ? ee.Z.Messages.CREATE_GROUP_DM : ee.Z.Messages.CREATE_DM;
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
let n = this.getRemaining(),
  i = 0 === t.size || n < 0;
return (0, a.jsx)('div', {
  className: et.addButton,
  children: (0, a.jsx)(m.Button, {
    size: m.Button.Sizes.SMALL,
    disabled: i,
    onClick: this.handleInviteUsers,
    children: ee.Z.Messages.ADD
  })
});
  }
  renderSubtitle() {
if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull())
  return null;
let e = this.getRemaining(),
  t = e <= 0 ? ee.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({
    number: this.getMaxParticipants()
  }) : ee.Z.Messages.GROUP_DM_INVITE_REMAINING.format({
    number: e
  });
return (0, a.jsx)(m.Text, {
  variant: 'text-xs/normal',
  className: r()(et.subtitle, {
    [et.subtitleWarning]: e < 0
  }, ei.marginTop4),
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
  let t = H.default.getUser(e);
  null != t && o.push(q.ZP.getName(t));
}), (0, a.jsxs)(G.Z, {
  className: r()(et.searchBar, ei.marginTop20),
  children: [
    (0, a.jsx)(v.ZP, {
      ref: this.searchBarRef,
      className: et.searchBarComponent,
      autoFocus: !0,
      placeholder: 0 === s.size ? ee.Z.Messages.GROUP_DM_SEARCH_PLACEHOLDER : void 0,
      disabled: this.isPartyFull(),
      size: v.ZP.Sizes.MEDIUM,
      query: t,
      selectedRow: l,
      sections: [null !== (e = null == i ? void 0 : i.length) && void 0 !== e ? e : 0],
      tags: o,
      onSelect: this.handleSelect,
      onSelectionChange: this.handleSelectionChange,
      onQueryChange: this.handleQueryChange,
      onRemoveTag: this.handleRemoveUser,
      inputProps: {
        'aria-labelledby': el,
        'aria-controls': es,
        'aria-expanded': !0,
        'aria-activedescendant': 'user-row-'.concat(l)
      }
    }),
    this.renderAddUsersButton()
  ]
});
  }
  renderHeader() {
let e = null != this.scrollerRef.current && this.state.separator,
  t = this.isNotFriends() ? ee.Z.Messages.GROUP_DM_ADD_FRIENDS : ee.Z.Messages.GROUP_DM_HEADER;
return (0, a.jsxs)(m.ModalHeader, {
  direction: G.Z.Direction.VERTICAL,
  align: G.Z.Align.STRETCH,
  className: et.__invalid_header,
  separator: e,
  children: [
    h.tq ? this.renderMobileCloseButton() : null,
    (0, a.jsx)(m.Heading, {
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
let {
  channel: e,
  hasFriends: t,
  results: n
} = this.props;
if (this.isNotFriends()) {
  let t = null != e ? e.getRecipientId() : null;
  if (null == t)
    throw Error('no recipient in DM');
  let n = H.default.getUser(t),
    i = null != n ? n.username : '',
    l = null != n && w.Z.getRelationshipType(n.id) === $.OGo.PENDING_OUTGOING;
  return (0, a.jsxs)(er, {
    className: et.notFriends,
    children: [
      (0, a.jsx)('div', {
        children: ee.Z.Messages.GROUP_DM_INVITE_NOT_FRIENDS.format({
          username: i
        })
      }),
      (0, a.jsx)(m.Button, {
        disabled: l,
        size: m.Button.Sizes.SMALL,
        onClick: () => null != n ? this.handleAddFriend(n) : null,
        className: ei.marginTop20,
        children: l ? ee.Z.Messages.ADD_FRIEND_BUTTON_AFTER : ee.Z.Messages.ADD_FRIEND_BUTTON
      })
    ]
  });
}
return t ? this.isPartyFull() ? (0, a.jsxs)(er, {
  className: et.partyFull,
  children: [
    (0, a.jsx)('div', {
      children: ee.Z.Messages.GROUP_DM_INVITE_FULL_MAIN
    }),
    (0, a.jsx)('div', {
      children: ee.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({
        number: this.getMaxParticipants()
      })
    })
  ]
}) : 0 === n.length ? (0, a.jsx)(er, {
  className: r()(et.noResults, ei.marginBottom20),
  children: (0, a.jsx)('div', {
    children: ee.Z.Messages.GROUP_DM_INVITE_EMPTY
  })
}) : (0, a.jsx)(m.List, {
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
  innerRole: 'listbox',
  innerId: es,
  innerAriaMultiselectable: !0,
  innerAriaOrientation: 'vertical'
}) : (0, a.jsxs)(er, {
  className: et.noFriends,
  children: [
    (0, a.jsx)('div', {
      children: ee.Z.Messages.GROUP_DM_INVITE_NO_FRIENDS
    }),
    (0, a.jsx)(m.Button, {
      autoFocus: !0,
      color: m.Button.Colors.GREEN,
      fullWidth: !0,
      size: m.Button.Sizes.SMALL,
      onClick: this.handleAddFriendNavigation,
      className: ei.marginTop20,
      children: ee.Z.Messages.ADD_FRIEND
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
let s = null != t ? (0, b.Z)(t.code) : '';
return (0, a.jsxs)(l.Fragment, {
  children: [
    (0, a.jsx)(m.FormTitle, {
      tag: 'h5',
      className: ei.marginBottom8,
      children: ee.Z.Messages.GROUP_DM_INVITE_LINK_TITLE
    }),
    (0, a.jsxs)(G.Z, {
      className: r()(en.input, {
        [en.success]: i
      }),
      justify: G.Z.Justify.BETWEEN,
      align: G.Z.Align.CENTER,
      children: [
        s.length > 0 ? (0, a.jsx)(m.TextInput, {
          className: et.copyInput,
          name: 'invite',
          value: n ? ee.Z.Messages.INSTANT_INVITE_HIDDEN : s,
          editable: !1,
          inputClassName: et.input,
          spellCheck: 'false',
          onClick: e => e.currentTarget.select()
        }) : (0, a.jsx)(m.TextInput, {
          className: et.copyInput,
          name: 'invite',
          value: s,
          placeholder: (0, b.Z)(ee.Z.Messages.GROUP_DM_INVITE_LINK_EXAMPLE),
          editable: !1,
          inputClassName: et.input,
          spellCheck: 'false',
          onClick: () => this.createInvite()
        }),
        W.wS && s.length > 0 ? (0, a.jsx)(m.Button, {
          size: m.Button.Sizes.SMALL,
          color: i ? m.Button.Colors.GREEN : m.Button.Colors.BRAND,
          className: et.copyButton,
          onClick: () => this.handleCopyInvite(s),
          children: i ? ee.Z.Messages.INVITE_COPIED : ee.Z.Messages.COPY
        }) : null,
        0 === s.length ? (0, a.jsx)(m.Button, {
          size: m.Button.Sizes.SMALL,
          color: m.Button.Colors.BRAND,
          className: et.copyButton,
          onClick: () => this.createInvite(),
          children: ee.Z.Messages.GROUP_DM_INVITE_LINK_CREATE
        }) : null
      ]
    }),
    s.length > 0 ? (0, a.jsx)(m.Text, {
      variant: 'text-xs/normal',
      className: r()(ei.marginTop8, et.footerText),
      children: ee.Z.Messages.INVITE_EXPIRES_HOURS.format({
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
  return (0, a.jsxs)(l.Fragment, {
    children: [
      (0, a.jsx)('div', {
        className: et.footerSeparator
      }),
      (0, a.jsx)(G.Z, {
        direction: G.Z.Direction.VERTICAL,
        className: et.footer,
        children: n
      })
    ]
  });
  }
  render() {
let {
  transitionState: e
} = this.props;
return (0, a.jsxs)(m.ModalRoot, {
  transitionState: null != e ? e : m.ModalTransitionState.ENTERED,
  className: et.popout,
  children: [
    this.renderHeader(),
    this.renderBody(),
    this.renderFooter()
  ]
});
  }
  handleAddFriend(e) {
this.props.onClose(), x.Z.sendRequest({
  discordTag: q.ZP.getUserTag(e, {
    identifiable: 'always'
  }),
  context: {
    location: 'Group DM'
  }
});
  }
  constructor(...e) {
super(...e), ea(this, 'state', {
  separator: !1,
  copied: !1
}), ea(this, 'copyTimeout', void 0), ea(this, 'scrollerRef', l.createRef()), ea(this, 'searchBarRef', l.createRef()), ea(this, '_mobileCloseRef', l.createRef()), ea(this, 'scrollPageUp', () => {
  var e;
  null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageUp({
    animate: !0
  });
}), ea(this, 'scrollPageDown', () => {
  var e;
  null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageDown({
    animate: !0
  });
}), ea(this, 'renderMobileCloseButton', () => (0, a.jsx)('div', {
  className: r()(et.mobileToolsContainer),
  ref: this._mobileCloseRef,
  children: (0, a.jsx)(m.FocusRingScope, {
    containerRef: this._mobileCloseRef,
    children: (0, a.jsx)('div', {
      children: (0, a.jsx)(T.Z, {
        className: et.mobileToolsCloseIcon,
        closeAction: this.props.onClose,
        keybind: 'ESC'
      })
    })
  })
})), ea(this, 'getRowHeight', (e, t) => {
  if (e > 0)
    return 0;
  let {
    results: n
  } = this.props;
  return null != n[t] ? 42 : 0;
}), ea(this, 'renderRow', e => {
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
    comparator: d
  } = o, u = l.has(c.id);
  return (0, a.jsx)(J.Z, {
    row: n,
    user: c,
    hideDiscriminator: r,
    comparator: d,
    checked: u,
    selected: n === s,
    onClick: this.handleClick,
    onMouseEnter: this.focusResult,
    'aria-posinset': n + 1,
    'aria-setsize': i.length
  }, c.id);
}), ea(this, 'forceFocus', () => {
  let e = this.searchBarRef.current;
  null == e || e.focus();
}), ea(this, 'focusResult', e => {
  I.Z.select(e);
}), ea(this, 'handleSelect', (e, t) => {
  let {
    results: n,
    channel: i
  } = this.props;
  null == t ? I.Z.clear(null == i ? void 0 : i.id) : null != n && this.handleClick(n[t].user.id);
}), ea(this, 'handleSelectionChange', (e, t) => {
  I.Z.select(t);
  let n = this.scrollerRef.current;
  null != n && n.scrollToIndex({
    section: e,
    row: t,
    padding: 8
  });
}), ea(this, 'handleQueryChange', e => {
  let {
    channel: t
  } = this.props;
  I.Z.search(e, null == t ? void 0 : t.id);
}), ea(this, 'handleRemoveUser', e => {
  let t = Array.from(this.props.selectedUsers);
  I.Z.removeUser(t[e]), this.forceFocus();
}), ea(this, 'handleClick', e => {
  let {
    selectedUsers: t,
    query: n,
    channel: i
  } = this.props;
  t.has(e) ? I.Z.removeUser(e) : (I.Z.addUser(e), n.length > 0 && I.Z.clear(null == i ? void 0 : i.id)), this.forceFocus();
}), ea(this, 'handleAddFriendNavigation', () => {
  (0, R.uL)($.Z5c.FRIENDS), C.Z.setSection($.pJs.ADD_FRIEND), this.props.onClose();
}), ea(this, 'handleScroll', () => {
  let e = this.scrollerRef.current;
  null != e && this.setState({
    separator: !e.isScrolledToTop()
  });
}), ea(this, 'createNewDM', e => {
  E.Z.openPrivateChannel(e, !1, !1, 'New Group DM');
}), ea(this, 'pushToExistingDM', (e, t) => {
  let n = k.Z.getChannelId() === e.id;
  E.Z.addRecipients(e.id, t, $.Sbl.ADD_FRIENDS_TO_DM).then(i => {
    if (!!n) {
      if (e.isDM() && i !== e.id) {
        f.Z.call(i, !1, !0);
        return;
      }
      f.Z.ring(i, t);
    }
  });
}), ea(this, 'handleInviteUsers', () => {
  let {
    channel: e,
    selectedUsers: t,
    onClose: n
  } = this.props, i = Array.from(t);
  if (null != e) {
    let t = ep(Array.from(new Set([
      ...e.recipients,
      ...i
    ])));
    t.size > 0 ? (0, m.openModal)(n => (0, a.jsx)(ec, {
      ...n,
      onConfirm: () => this.pushToExistingDM(e, i),
      channelIds: t
    }), {}, (0, m.modalContextFromAppContext)(this.context.appContext)) : this.pushToExistingDM(e, i);
  } else {
    let e = ep(i);
    i.length > 1 && e.size > 0 ? (0, m.openModal)(t => (0, a.jsx)(ec, {
      ...t,
      onConfirm: () => this.createNewDM(i),
      channelIds: e
    }), {}, (0, m.modalContextFromAppContext)(this.context.appContext)) : this.createNewDM(i);
  }
  n();
}), ea(this, 'handleCopyInvite', e => {
  let {
    channel: t,
    invite: n
  } = this.props;
  null != n && (0, W.JG)(e), null != this.copyTimeout && clearTimeout(this.copyTimeout), this.setState({
    copied: !0
  }), this.copyTimeout = setTimeout(() => {
    this.setState({
      copied: !1
    });
  }, 1000), F.default.track($.rMx.COPY_INSTANT_INVITE, {
    server: null,
    channel: null != t ? t.id : null,
    channel_type: null != t ? t.type : null,
    location: $.Sbl.ADD_FRIENDS_TO_DM,
    code: null != n ? n.code : null
  });
});
  }
}

function eu(e) {
  let {
channel: t,
...n
  } = e;
  L.Z.useExperiment({
location: 'desktop_dm_list'
  });
  let i = (0, p.cj)([
D.Z,
y.Z,
B.Z
  ], () => {
let e;
return null != t && null != (e = y.Z.getInvite(t.id)) && e.isExpired() && (e = null), {
  ...D.Z.getState(),
  invite: e,
  hideDiscriminator: B.Z.hidePersonalInformation,
  hideInstantInvites: B.Z.hideInstantInvites
};
  });
  return (0, a.jsx)(ed, {
channel: t,
...n,
...i
  });
}

function eh(e) {
  let {
channel: t,
iconClassName: n,
icon: i,
tooltip: s,
tooltipPosition: r = 'bottom',
popoutPosition: o = 'bottom',
popoutAlign: c = 'right',
subscribeToGlobalHotkey: d = !1
  } = e, [u, h] = l.useState(null != t && t.isGroupDM() && 0 === t.recipients.length), p = (0, Z.Dd)(null == t ? void 0 : t.id), _ = l.useCallback(() => h(e => !e), []);
  l.useEffect(() => (d && z.S.subscribe($.CkL.TOGGLE_DM_CREATE, _), () => {
z.S.unsubscribe($.CkL.TOGGLE_DM_CREATE, _);
  }), [
d,
_
  ]);
  let {
useV1: f,
useV2: E
  } = L.Z.useExperiment({
location: 'desktop_dm_list'
  }, {
autoTrackExposure: !1
  });
  return (l.useEffect(() => {
f && (0, j.W)(), E && (0, j._)();
  }, [
f,
E
  ]), p) ? null : (0, a.jsx)(m.Popout, {
renderPopout: e => (0, a.jsx)(eu, {
  ...e,
  onClose: e.closePopout,
  channel: t
}),
position: o,
shouldShow: u,
align: c,
onRequestClose: () => h(!1),
animation: m.Popout.Animation.NONE,
children: e => (0, a.jsx)(Q.ZP.Icon, {
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

function ep(e) {
  let t = em(e);
  return new Set(c()(O.Z.getMutablePrivateChannels()).values().filter(e => (0, P.bc)(e.type)).filter(e => em(e.recipients) === t).map(e => e.id).value());
}

function em(e) {
  return JSON.stringify(e.sort());
}
ea(ed, 'contextType', N.ZP);