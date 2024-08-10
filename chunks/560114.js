t.r(n), t(47120);
var l, s = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(512722),
  d = t.n(o),
  u = t(392711),
  c = t.n(u),
  h = t(990547),
  I = t(533800),
  g = t(442837),
  E = t(692547),
  _ = t(481060),
  m = t(447543),
  T = t(247272),
  N = t(110924),
  v = t(100527),
  S = t(906732),
  p = t(835473),
  x = t(447003),
  M = t(471445),
  C = t(259473),
  f = t(600164),
  Z = t(687516),
  A = t(111810),
  R = t(301935),
  V = t(397195),
  j = t(427679),
  y = t(199902),
  L = t(439170),
  O = t(592125),
  D = t(984933),
  G = t(341165),
  U = t(751771),
  b = t(496675),
  B = t(158776),
  P = t(944486),
  w = t(594174),
  F = t(938475),
  k = t(626135),
  H = t(630388),
  K = t(971130),
  W = t(264229),
  Y = t(751499),
  z = t(181852),
  q = t(366980),
  X = t(444260),
  $ = t(585385),
  Q = t(603236),
  J = t(462376),
  ee = t(245335),
  en = t(981631),
  et = t(176505),
  el = t(689938),
  es = t(352563),
  ea = t(549856),
  ei = t(492852),
  er = t(622577);

function eo(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}
let {
  INVITE_OPTIONS_FOREVER: ed,
  INVITE_OPTIONS_7_DAYS: eu,
  INVITE_OPTIONS_UNLIMITED: ec
} = K.ZP;
class eh extends(l = a.PureComponent) {
  componentDidMount() {
let {
  inviteChannel: e,
  code: n,
  guild: t,
  source: l,
  canCreateInvites: s,
  analyticsLocation: a,
  streamUserId: i,
  targetType: r,
  targetUserId: o,
  application: d,
  initialCounts: u,
  rows: c,
  showFriends: h,
  modalState: I,
  setModalState: g
} = this.props, {
  maxAge: E,
  maxUses: _,
  temporary: T
} = I;
if (s) {
  let t = null == e ? void 0 : e.id;
  if (null == t)
    return;
  g({
    networkError: void 0
  }), m.Z.createInvite(t, {
    validate: null != n ? n : null,
    max_age: E,
    max_uses: _,
    target_user_id: o,
    target_type: r,
    target_application_id: null == d ? void 0 : d.id,
    temporary: T
  }, l).catch(e => g({
    networkError: e
  }));
}
if (h && k.default.track(en.rMx.INVITE_SUGGESTION_OPENED, {
    location: l,
    num_suggestions: c.length,
    num_friends: u.numFriends,
    num_dms: u.numDms,
    num_group_dms: u.numGroupDms,
    guild_id: t.id
  }), z.Z.trackExposure({
    guildId: null == t ? void 0 : t.id,
    location: 'acc417_1'
  }), null != i) {
  let e = y.Z.getStreamForUser(i, t.id),
    n = (0, Z.L2)(e, B.Z);
  k.default.track(en.rMx.OPEN_MODAL, {
    type: 'Send Stream Invite',
    source: l,
    location: a,
    other_user_id: i,
    application_id: null != n ? n.id : null,
    application_name: null != n ? n.name : null,
    game_id: null != n ? n.id : null
  });
} else
  (null == d ? void 0 : d.id) != null || k.default.track(en.rMx.OPEN_MODAL, {
    type: 'Instant Invite Modal',
    source: l,
    location: a
  });
  }
  componentWillUnmount() {
let {
  inviteChannel: e,
  inviteFlags: n,
  setInviteFlags: t
} = this.props;
(0, H.yE)(n, I.$.IS_GUEST_INVITE) && null != e && (t((0, H.Ge)(n, I.$.IS_GUEST_INVITE)), m.Z.clearInviteFromStore(e.id));
  }
  getInviteKey() {
let {
  code: e,
  vanityURLCode: n,
  guildScheduledEvent: t,
  modalState: l
} = this.props, {
  showVanityURL: s
} = l, a = s ? n : null != e ? e : n;
return null == a ? a : (0, W.tV)({
  baseCode: a,
  guildScheduledEventId: null == t ? void 0 : t.id
});
  }
  renderChannelWarning() {
let {
  inviteChannel: e
} = this.props;
return (0, x.Z)(e) ? (0, s.jsxs)('div', {
  className: es.warningContainer,
  children: [
    (0, s.jsx)(_.CircleWarningIcon, {
      size: 'custom',
      className: es.warningIcon,
      color: E.Z.unsafe_rawColors.YELLOW_300.css,
      width: 12
    }),
    (0, s.jsx)(_.Text, {
      variant: 'text-xs/normal',
      color: 'header-secondary',
      children: el.Z.Messages.INVITE_PRIVATE_CHANNEL_WARNING
    })
  ]
}) : null;
  }
  renderHeader() {
let e;
let {
  guild: n,
  showFriends: t,
  guildScheduledEvent: l,
  streamUserId: a,
  application: i,
  welcomeToServer: o,
  inviteChannel: d,
  modalState: u,
  handleDone: c
} = this.props, {
  query: h
} = u, I = null, g = null;
if (e = o ? null : null != a ? el.Z.Messages.INVITE_STREAM_HEADER : null != i ? el.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
    applicationName: i.name
  }) : null != l ? el.Z.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == d ? void 0 : d.isGuildStageVoice()) ? el.Z.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : el.Z.Messages.INVITE_TO_SERVER_NAME.format({
    name: n.toString()
  }), null != d) {
  let e = (0, M.KS)(d, n);
  null != e && (g = (0, s.jsxs)('div', {
    className: es.headerChannelContainer,
    children: [
      (0, s.jsx)(e, {
        className: es.channelIcon
      }),
      (0, s.jsx)(_.Text, {
        color: 'interactive-normal',
        variant: 'text-md/normal',
        children: d.name
      })
    ]
  }));
}
return I = n.hasFeature(en.oNc.HUB) ? (0, s.jsxs)('div', {
  className: es.hubHeader,
  children: [
    (0, s.jsx)(_.Heading, {
      className: r()(es.hubInviteTitle, es.headerCloseButtonSpacing),
      id: this._headerId,
      variant: 'heading-xl/semibold',
      color: 'header-primary',
      children: el.Z.Messages.HUB_INVITE_HEADER
    }),
    (0, s.jsx)(_.Text, {
      color: 'header-secondary',
      variant: 'text-md/normal',
      children: el.Z.Messages.HUB_INVITE_SUBHEADER
    }),
    t && (0, s.jsx)(_.SearchBar, {
      query: h,
      className: es.hubFriendSearch,
      onChange: this.handleQueryChange,
      placeholder: el.Z.Messages.INVITE_SEARCH_FOR_FRIENDS,
      'aria-label': el.Z.Messages.INVITE_SEARCH_FOR_FRIENDS,
      autoFocus: !0,
      onClear: this.handleClearSearch
    })
  ]
}) : t ? (0, s.jsxs)('div', {
  className: es.header,
  children: [
    (0, s.jsx)('div', {
      className: es.__invalid_headerTopRow,
      children: (0, s.jsx)(_.FormTitle, {
        id: this._headerId,
        tag: 'h2',
        className: r()(ea.marginBottom4, es.headerCloseButtonSpacing, es.headerText),
        children: e
      })
    }),
    g,
    (0, s.jsx)(_.SearchBar, {
      query: h,
      className: es.searchBar,
      onChange: this.handleQueryChange,
      placeholder: el.Z.Messages.INVITE_SEARCH_FOR_FRIENDS,
      autoFocus: !0,
      onClear: this.handleClearSearch
    }),
    (0, s.jsx)('div', {
      className: ea.marginTop8,
      children: this.renderChannelWarning()
    })
  ]
}) : (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsx)(_.FormTitle, {
      id: this._headerId,
      tag: 'h2',
      className: r()(ea.marginReset, es.headerCloseButtonSpacing, es.headerText),
      children: e
    }),
    g,
    this.renderChannelWarning()
  ]
}), (0, s.jsxs)(_.ModalHeader, {
  separator: t,
  children: [
    (0, s.jsx)(_.ModalCloseButton, {
      className: es.closeButton,
      onClick: c
    }),
    (0, s.jsxs)('div', {
      className: es.headerContainer,
      children: [
        o && (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)('img', {
              className: es.welcomeImage,
              src: er,
              alt: ''
            }),
            (0, s.jsx)(_.Heading, {
              variant: 'heading-lg/semibold',
              className: es.welcomeHeading,
              children: el.Z.Messages.INVITE_WELCOME_HEADING
            }),
            (0, s.jsx)(_.Text, {
              variant: 'text-md/normal',
              color: 'text-secondary',
              className: es.welcomeSubheading,
              children: el.Z.Messages.INVITE_WELCOME_SUBHEADING
            })
          ]
        }),
        null != a ? (0, s.jsx)(A.Z, {}) : null,
        I
      ]
    })
  ]
});
  }
  renderFriendsBody() {
let {
  rows: e
} = this.props, n = this.getInviteKey();
return 0 === e.length ? (0, s.jsx)(_.ModalContent, {
  className: r()(es.inviteRowEmptyState),
  children: (0, s.jsx)(_.EmptyStateText, {
    children: el.Z.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
  })
}) : null == n ? (0, s.jsx)(_.ModalContent, {
  className: r()(es.inviteRowEmptyState),
  children: (0, s.jsx)(_.EmptyStateText, {
    children: el.Z.Messages.INVITE_FRIEND_MODAL_LOADING
  })
}) : (0, s.jsx)(_.ModalListContent, {
  className: es.scroller,
  sections: [e.length],
  renderSection: this.renderSection,
  sectionHeight: 0,
  renderRow: this.renderRow,
  rowHeight: this.getRowHeight,
  paddingBottom: 16
});
  }
  renderSection() {
return null;
  }
  renderBody() {
var e;
let {
  guild: n,
  showFriends: t,
  streamUserId: l,
  application: a
} = this.props;
if (t)
  return this.renderFriendsBody();
let i = (0, q.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ''),
  r = w.default.getCurrentUser();
d()(null != r, 'InstantInviteModal: user cannot be undefined');
let o = n.isOwner(r) ? el.Z.Messages.INVITE_SHARE_LINK_OWN_SERVER : el.Z.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
return null != l ? o = el.Z.Messages.INVITE_SHARE_LINK_TO_STREAM : null != a && (o = el.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, s.jsx)(_.ModalContent, {
  className: es.noScroll,
  children: (0, s.jsxs)(f.Z, {
    direction: f.Z.Direction.VERTICAL,
    className: ea.marginBottom20,
    children: [
      (0, s.jsx)(_.Text, {
        className: es.subText,
        variant: 'text-sm/normal',
        children: o
      }),
      (0, s.jsx)(Q.I, {
        ...this.props,
        copyValue: i
      })
    ]
  })
});
  }
  renderFooter() {
var e;
let {
  noInvitesAvailable: n,
  showFriends: t,
  guildScheduledEvent: l,
  streamUserId: a,
  application: i,
  inviteChannel: o,
  modalState: d
} = this.props, {
  maxAge: u
} = d, c = null, h = (0, q.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : '');
if (t) {
  let e = el.Z.Messages.INVITE_FOOTER_LINK_HEADER;
  null != a ? e = el.Z.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != i ? e = el.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != l ? e = el.Z.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == o ? void 0 : o.isGuildStageVoice()) && (e = el.Z.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, s.jsxs)(f.Z, {
    direction: f.Z.Direction.VERTICAL,
    className: es.content,
    children: [
      (0, s.jsx)(_.FormTitle, {
        tag: 'h5',
        className: ea.marginBottom8,
        children: e
      }),
      (0, s.jsx)(Q.I, {
        ...this.props,
        copyValue: h
      })
    ]
  });
} else
  !n && (c = (0, s.jsxs)(f.Z, {
    justify: f.Z.Justify.BETWEEN,
    className: ea.marginTop20,
    children: [
      (0, s.jsx)(_.Checkbox, {
        size: 18,
        type: _.Checkbox.Types.INVERTED,
        value: u === ed.value,
        onChange: this.handleToggleMaxAge,
        children: (0, s.jsx)(_.Text, {
          variant: 'text-sm/normal',
          children: el.Z.Messages.SET_INVITE_LINK_NEVER_EXPIRE
        })
      }),
      (0, s.jsx)(_.Tooltip, {
        text: el.Z.Messages.LINK_SETTINGS,
        children: e => {
          let {
            onMouseEnter: n,
            onMouseLeave: t
          } = e;
          return (0, s.jsx)(_.Clickable, {
            onClick: this.openSettings,
            onMouseEnter: n,
            onMouseLeave: t,
            className: ei.cursorPointer,
            children: (0, s.jsx)(_.SettingsIcon, {
              size: 'sm',
              color: E.Z.unsafe_rawColors.PRIMARY_400.css
            })
          });
        }
      })
    ]
  }));
return null != c ? (0, s.jsx)(_.ModalFooter, {
  className: r()({
    [es.noPadding]: !t,
    [es.footer]: t
  }),
  children: c
}) : null;
  }
  getModalContent() {
let {
  modalState: e,
  handleDone: n
} = this.props, {
  currentPage: t
} = e;
switch (t) {
  case ee.RV.MAIN:
    return (0, s.jsxs)(s.Fragment, {
      children: [
        this.renderHeader(),
        this.renderBody(),
        this.renderFooter()
      ]
    });
  case ee.RV.SETTINGS:
    return (0, s.jsx)($.D, {
      ...this.props,
      headerId: this._headerId,
      onSelectMaxAge: this.handleSelectMaxAge,
      onSelectMaxUses: this.handleSelectMaxUses,
      onToggleTemporary: this.handleToggleTemporary,
      handleDone: n
    });
  case ee.RV.GUEST:
    var l;
    let a = (0, q.Z)(null !== (l = this.getInviteKey()) && void 0 !== l ? l : '');
    return (0, s.jsx)(X.B, {
      ...this.props,
      headerId: this._headerId,
      handleDone: n,
      copyValue: a
    });
  default:
    return null;
}
  }
  render() {
let {
  transitionState: e,
  inviteChannel: n,
  guild: t
} = this.props;
return (0, s.jsx)('div', {
  className: this.props.showFriends ? es.wrapper : void 0,
  children: (0, s.jsx)(_.ModalRoot, {
    impression: {
      impressionName: h.ImpressionNames.GUILD_INVITE,
      impressionProperties: {
        invite_channel_id: null == n ? void 0 : n.id,
        invite_guild_id: t.id
      }
    },
    'aria-labelledby': this._headerId,
    transitionState: e,
    className: es.modal,
    children: this.getModalContent()
  })
});
  }
  constructor(...e) {
super(...e), eo(this, '_scroller', null), eo(this, '_headerId', c().uniqueId()), eo(this, 'openSettings', () => {
  let {
    changePage: e
  } = this.props;
  e(ee.RV.SETTINGS);
}), eo(this, 'handleSelectMaxAge', e => {
  let {
    modalState: n,
    setModalState: t
  } = this.props;
  t({
    maxAge: e,
    savedMaxAge: n.maxAge
  });
}), eo(this, 'handleSelectMaxUses', e => {
  let {
    setModalState: n
  } = this.props;
  n({
    maxUses: e
  });
}), eo(this, 'handleToggleTemporary', e => {
  let {
    setModalState: n
  } = this.props;
  n({
    temporary: e
  });
}), eo(this, 'handleToggleGuest', e => {
  let {
    inviteFlags: n,
    setInviteFlags: t
  } = this.props;
  t((0, H.mB)(n, I.$.IS_GUEST_INVITE, e));
}), eo(this, 'handleQueryChange', e => {
  var n;
  let {
    setModalState: t
  } = this.props;
  null === (n = this._scroller) || void 0 === n || n.scrollTo({
    to: 0
  }), (0, T.C)(e), t({
    query: e
  });
}), eo(this, 'handleClearSearch', () => {
  this.handleQueryChange('');
}), eo(this, 'handleToggleMaxAge', () => {
  let {
    modalState: e,
    setModalState: n
  } = this.props, {
    maxAge: t,
    savedMaxAge: l
  } = e;
  n({
    maxAge: l,
    savedMaxAge: t
  });
}), eo(this, 'getRowHeight', (e, n) => {
  if (e > 0)
    return 0;
  switch (this.props.rows[n].type) {
    case K.bm.CHANNEL:
    case K.bm.GROUP_DM:
    case K.bm.DM:
    case K.bm.FRIEND:
      return J.k;
    default:
      return 0;
  }
}), eo(this, 'renderRow', e => {
  let {
    section: n,
    row: t
  } = e;
  if (n > 0)
    return null;
  let {
    analyticsLocation: l
  } = this.props, a = this.getInviteKey(), i = this.props.rows[t], r = ''.concat(i.type, '-').concat(i.item.id);
  switch (i.type) {
    case K.bm.GROUP_DM:
    case K.bm.CHANNEL:
      return (0, s.jsx)(J.d, {
        row: i,
        channel: i.item,
        inviteKey: a,
        location: l
      }, r);
    case K.bm.DM:
    case K.bm.FRIEND:
      return (0, s.jsx)(J.d, {
        row: i,
        user: i.item,
        inviteKey: a,
        location: l
      }, r);
    default:
      return null;
  }
});
  }
}
eo(eh, 'defaultProps', {
  analyticsLocation: en.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: eu.value
}), n.default = a.forwardRef(function(e, n) {
  var t, l, i, r;
  let {
channel: o,
guild: d,
source: u,
guildScheduledEvent: c,
streamUserId: h,
applicationId: E,
transitionState: _,
onClose: M,
welcomeToServer: f,
page: Z,
analyticsLocation: A
  } = e, [y, B] = a.useState(Z === ee.RV.GUEST ? I.$.IS_GUEST_INVITE : 0), {
analyticsLocations: w
  } = (0, S.ZP)(v.Z.INSTANT_INVITE_MODAL), k = (0, g.e7)([
O.Z,
P.Z
  ], () => {
let e = P.Z.getVoiceChannelId();
if (null == e)
  return null;
let n = O.Z.getChannel(e);
return (null == n ? void 0 : n.guild_id) === d.id ? n : null;
  }), K = null != k && !(0, x.Z)(k) && [
en.t4x.GUILD_CONTEXT_MENU,
en.t4x.GUILD_HEADER
  ].includes(u), W = (0, V.Z)(d.id), z = (0, g.e7)([
P.Z,
O.Z,
D.ZP
  ], () => {
if (K && ((0, H.yE)(y, I.$.IS_GUEST_INVITE) || Z === ee.RV.GUEST))
  return k;
if (Z === ee.RV.GUEST)
  return 1 === W.length ? W[0] : void 0;
if (null != o)
  return o;
let e = P.Z.getChannelId(),
  n = null == e || (0, et.AB)(e) ? void 0 : O.Z.getChannel(e);
return (null == n ? void 0 : n.isThread()) && (n = O.Z.getChannel(n.parent_id)), null != n ? n : D.ZP.getDefaultChannel(d.id, !0, en.Plq.CREATE_INSTANT_INVITE);
  }, [
K,
y,
Z,
o,
d.id,
k,
W
  ]), [q, X] = a.useState(null), $ = null != q ? q : z, Q = null;
  null != h ? Q = ee.Iq.STREAM : null != E && (Q = ee.Iq.EMBEDDED_APPLICATION);
  let J = null != o ? o.getGuildId() : null != d ? d.id : null,
el = (0, g.e7)([G.Z], () => {
  let e = null != $ ? $.id : null;
  return null == e ? null : G.Z.getInvite(e, {
    targetType: Q,
    targetUserId: h,
    targetApplicationId: E
  });
}, [
  $,
  Q,
  h,
  E
]),
[es, ea, ei, er, eo] = (0, g.Wu)([
  U.Z,
  F.ZP,
  L.ZP
], () => {
  let e = null != $ ? $.id : null;
  return [
    U.Z.getInviteSuggestionRows(),
    U.Z.getTotalSuggestionsCount() >= 1,
    U.Z.getInitialCounts(),
    null != o && null != $ ? F.ZP.getVoiceStatesForChannel($) : null,
    null != J ? L.ZP.getProps(J, e) : null
  ];
}, [
  $,
  o,
  J
]),
eI = (0, g.e7)([b.Z], () => null != $ && b.Z.can(en.Plq.CREATE_INSTANT_INVITE, $), [$]),
eg = null === el || !eI,
[eE] = a.useState(() => {
  let e = new Set();
  return null != h && null != er ? er.forEach(n => {
    let {
      user: t
    } = n;
    e.add(t.id);
  }) : null != J && null != eo && Q !== ee.Iq.EMBEDDED_APPLICATION && eo.rows.forEach(n => {
    n.type === L.so.MEMBER && e.add(n.userId);
  }), e;
}),
e_ = null == o ? void 0 : o.id,
em = (0, g.e7)([j.Z], () => j.Z.getStageInstanceByChannel(e_), [e_]);
  a.useEffect(() => {
(0, T.x)({
  omitUserIds: eE,
  guild: d,
  channel: o,
  applicationId: E,
  inviteTargetType: Q
}).catch(en.VqG);
  }, [
eE,
o,
d,
E,
Q
  ]);
  let [eT] = (0, p.Z)(null != E ? [E] : []), eN = (0, C.Z)({
guildId: J
  }), ev = null != el ? el.code : void 0, eS = null == el ? void 0 : el.maxAge, ep = null == el ? void 0 : el.maxUses, ex = null == el ? void 0 : el.temporary, eM = d.vanityURLCode, eC = null != eM && eM.length > 0, {
enabled: ef
  } = Y.Z.useExperiment({
guildId: null !== (i = null !== (l = null !== (t = d.id) && void 0 !== t ? t : null == el ? void 0 : el.guild.id) && void 0 !== l ? l : J) && void 0 !== i ? i : en.lds,
location: 'acc417_2'
  }, {
autoTrackExposure: eC
  }), eZ = ef && !(null == $ ? void 0 : $.isGuildVocal()) && eC, eA = (null == $ ? void 0 : $.type) === en.d4z.GUILD_VOICE, eR = (0, x.Z)($);
  !eI && (null == em ? void 0 : em.invite_code) != null && (ev = em.invite_code);
  let [eV, ej] = a.useState({
query: '',
maxAge: null !== (r = null != eS ? eS : eN) && void 0 !== r ? r : eu.value,
savedMaxAge: eS === ed.value ? null != eN ? eN : eu.value : ed.value,
maxUses: null != ep && 0 !== ep ? ep : ec.value,
temporary: null != ex && ex,
networkError: void 0,
showVanityURL: eZ,
currentPage: null != Z ? Z : ee.RV.MAIN,
lastPage: void 0
  }), ey = a.useCallback(e => {
ej(n => ({
  ...n,
  ...e
}));
  }, []), eL = a.useCallback(e => {
ey({
  currentPage: e,
  lastPage: eV.currentPage
});
  }, [
eV.currentPage,
ey
  ]), eO = (eA || K) && Z !== ee.RV.GUEST && !eZ && !eg && !eR, {
enabled: eD
  } = R.o.useExperiment({
guildId: null == d ? void 0 : d.id,
location: 'acc417_3'
  }, {
autoTrackExposure: eO
  }), {
maxAge: eG,
maxUses: eU,
temporary: eb,
savedMaxAge: eB
  } = eV, eP = a.useCallback(() => {
let {
  currentPage: e,
  lastPage: n
} = eV;
e === ee.RV.SETTINGS && null != n ? eL(n) : M();
  }, [
eL,
eV,
M
  ]), ew = a.useCallback(() => {
let e = null == $ ? void 0 : $.id;
0 === eU && 0 === eG && !eb && eZ ? ey({
  networkError: void 0,
  showVanityURL: !0
}) : null != e && (ey({
  networkError: void 0,
  showVanityURL: !1
}), m.Z.createInvite(e, {
  max_age: eG,
  max_uses: eU,
  target_type: Q,
  target_user_id: h,
  target_application_id: null == eT ? void 0 : eT.id,
  temporary: eb,
  flags: y
}, u).catch(e => ey({
  networkError: e,
  showVanityURL: eZ
}))), eG !== ed.value && eB !== ed.value && ey({
  savedMaxAge: ed.value
});
  }, [
eZ,
$,
u,
null == eT ? void 0 : eT.id,
Q,
h,
eG,
eU,
eb,
y,
ey,
eB
  ]), eF = (0, N.Z)($), ek = (0, N.Z)(y), eH = eF !== $, eK = ek !== y;
  return a.useEffect(() => {
(eH || eK) && ew();
  }, [
ew,
eH,
eK
  ]), (0, s.jsx)(S.Gt, {
value: w,
children: (0, s.jsx)(eh, {
  ref: n,
  canCreateInvites: eI,
  noInvitesAvailable: eg,
  inviteChannel: $,
  guild: d,
  guildScheduledEvent: c,
  streamUserId: h,
  vanityURLCode: eM,
  targetType: Q,
  targetUserId: h,
  application: eT,
  rows: es,
  showFriends: ea,
  initialCounts: ei,
  code: ev,
  source: u,
  welcomeToServer: f,
  analyticsLocations: w,
  analyticsLocation: A,
  transitionState: _,
  onClose: M,
  canShowVanityURL: eZ,
  isGuestInviteCreationToggleEnabled: eD && eO,
  shouldHideTemporaryInviteToggle: eD && eO || Z === ee.RV.GUEST,
  modalState: eV,
  setModalState: ey,
  changePage: eL,
  onGenerateNewLink: ew,
  inviteFlags: y,
  setInviteFlags: B,
  showGuestInviteToggleForCurrentVoiceChannel: K,
  setInviteChannel: X,
  handleDone: eP
})
  });
});