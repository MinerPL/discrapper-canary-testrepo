n.d(t, {
  Z: function() {
return ei;
  }
}), n(47120), n(724458);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(392711),
  o = n.n(r),
  c = n(91192),
  d = n(924826),
  u = n(873546),
  h = n(442837),
  p = n(902704),
  m = n(481060),
  _ = n(239091),
  f = n(941028),
  E = n(144144),
  C = n(276264),
  g = n(607070),
  I = n(100527),
  x = n(367907),
  T = n(906732),
  v = n(493324),
  N = n(611064),
  S = n(677432),
  Z = n(178762),
  A = n(868671),
  M = n(623624),
  b = n(518738),
  R = n(557494),
  j = n(484459),
  L = n(103575),
  P = n(439170),
  O = n(430824),
  y = n(111583),
  D = n(594174),
  k = n(153124),
  U = n(151827),
  w = n(176278),
  B = n(585483),
  H = n(823379),
  G = n(51144),
  V = n(998502),
  F = n(981631),
  W = n(689938),
  z = n(849787);

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let K = V.ZP.getEnableHardwareAcceleration(),
  q = 44 + C.x,
  X = {
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
class Q extends a.Component {
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
  channel: d,
  guildId: h,
  isTyping: p,
  isMobileOnline: _,
  premiumSince: f,
  ...E
} = this.props, g = null != f ? new Date(f) : null;
return (0, i.jsx)(m.Popout, {
  preload: () => (0, j.W)(l, {
    channelId: d.id,
    guildId: h
  }),
  renderPopout: this.renderUserPopout,
  position: u.tq ? 'window_center' : 'left',
  spacing: 16,
  onShiftClick: this.handleShiftClick,
  children: (u, m) => {
    let {
      isShown: f
    } = m;
    return (0, i.jsx)(C.Z, {
      className: z.member,
      onContextMenu: this.renderUserContextMenu,
      shouldAnimateStatus: K,
      user: l,
      currentUser: s,
      nick: a,
      status: c,
      activities: r,
      applicationStream: o,
      isOwner: n,
      premiumSince: g,
      colorString: e,
      colorRoleName: t,
      isTyping: p,
      channel: d,
      guildId: h,
      isMobile: _,
      onClickPremiumGuildIcon: this.openGuildSubscriptionModal,
      selected: f,
      itemProps: E,
      ...u
    });
  }
});
  }
  constructor(...e) {
super(...e), Y(this, 'renderUserContextMenu', e => {
  (0, _.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('17400'),
      n.e('12435'),
      n.e('17463')
    ]).then(n.bind(n, 757387));
    return t => (0, i.jsx)(e, {
      ...t,
      user: this.props.user,
      guildId: this.props.guildId,
      channel: this.props.channel,
      showMediaItems: !0
    });
  });
}), Y(this, 'handleShiftClick', () => {
  let {
    user: e,
    channel: t
  } = this.props, n = '@'.concat(G.ZP.getUserTag(e, {
    decoration: 'never'
  })), i = '<@'.concat(e.id, '>');
  B.S.dispatchToLastSubscribed(F.CkL.INSERT_TEXT, {
    plainText: n,
    rawText: i
  }), E.Z.startTyping(t.id);
}), Y(this, 'openGuildSubscriptionModal', e => {
  let {
    guildId: t
  } = this.props;
  if (null != t)
    e.stopPropagation(), (0, M.f)({
      guildId: t,
      location: {
        section: F.jXE.MEMBER_LIST,
        object: F.qAy.BOOST_GEM_ICON
      }
    });
}), Y(this, 'renderUserPopout', e => (0, i.jsx)(L.Z, {
  ...e,
  location: 'ChannelMembers',
  userId: this.props.user.id,
  guildId: this.props.guildId,
  channelId: this.props.channel.id,
  roleId: this.props.colorRoleId,
  analyticsParams: {
    location: {
      page: F.ZY5.GUILD_CHANNEL,
      section: F.jXE.MEMBER_LIST
    }
  }
}));
  }
}
let J = a.memo(e => {
let {
  colorRoleId: t,
  ...n
} = e, {
  channel: a,
  user: l,
  index: s
} = e, r = (0, c.JA)(''.concat(s)), o = (0, h.e7)([y.Z], () => y.Z.isTyping(a.id, l.id)), d = (0, h.e7)([D.default], () => D.default.getCurrentUser()), u = (0, h.e7)([O.Z], () => {
  var e;
  return null != t ? null === (e = O.Z.getRole(a.guild_id, t)) || void 0 === e ? void 0 : e.name : void 0;
}, [
  a,
  t
]);
return (0, i.jsx)(Q, {
  ...n,
  ...r,
  isTyping: o,
  currentUser: d,
  colorRoleName: u
});
  }),
  $ = a.memo(function(e) {
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
return t === F.Skl.UNKNOWN ? (0, i.jsx)('div', {
  className: z.membersGroup,
  children: (0, i.jsx)('div', {
    className: z.memberGroupsPlaceholder
  })
}) : (0, i.jsxs)(U.Z, {
  className: z.membersGroup,
  children: [
    (0, i.jsx)(m.HiddenVisually, {
      children: W.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
        title: n,
        count: a
      })
    }),
    (0, i.jsxs)('span', {
      'aria-hidden': !0,
      children: [
        null != s ? (0, i.jsx)(w.Z, {
          className: z.roleIcon,
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

function ee(e) {
  let {
index: t
  } = e, n = (0, c.JA)(''.concat(t));
  return (0, i.jsx)(C.Z, {
itemProps: n
  });
}
class et extends a.Component {
  shouldComponentUpdate(e) {
return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length;
  }
  componentDidMount() {
this.updateSubscription(), this.trackMemberListViewed(), this._areActivitiesExperimentallyHidden = (0, v.$)('ChannelMembers');
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
} = e.getScrollerState(), i = Math.floor(t / q);
return this.getContentFeedAdjustedDimensions({
  height: t,
  rowHeight: q,
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
  children: a => (0, i.jsx)(k.FG, {
    children: l => (0, i.jsx)('aside', {
      className: s()(z.membersWrap, z.hiddenMembers),
      'aria-labelledby': l,
      children: (0, i.jsx)(m.HeadingLevel, {
        component: (0, i.jsx)(m.HiddenVisually, {
          children: (0, i.jsx)(m.H, {
            id: l,
            children: W.Z.Messages.MEMBERS_LIST_LANDMARK_LABEL.format({
              channel: n.name
            })
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
              innerAriaLabel: W.Z.Messages.MEMBERS,
              ref: e => {
                var t;
                this._list = e, this.props.listRef.current = e, l.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
              },
              className: s()(z.members, {
                [z.fullWidth]: u.tq
              }),
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
super(...e), Y(this, '_list', null), Y(this, '_areActivitiesExperimentallyHidden', !1), Y(this, 'lastReportedAnalyticsChannel', void 0), Y(this, 'setList', e => {
  this._list = e, this.props.listRef.current = e;
}), Y(this, 'renderSection', e => {
  let {
    section: t
  } = e, {
    groups: n,
    channel: l
  } = this.props, s = n[t];
  return (0, N.R)(s) ? (0, a.createElement)(N.Z, {
    ...s,
    key: 'section-'.concat(t)
  }) : 0 === t ? (0, i.jsx)(R.Z, {
    tutorialId: 'whos-online',
    position: 'left',
    inlineSpecs: X,
    children: (0, i.jsx)($, {
      ...s,
      guildId: l.guild_id
    })
  }, 'section-'.concat(t)) : (0, a.createElement)($, {
    ...s,
    key: 'section-'.concat(t),
    guildId: l.guild_id
  });
}), Y(this, 'getRowProps', e => {
  let {
    groups: t,
    rows: n
  } = this.props, i = t[e.section];
  if (null == i)
    return null;
  let {
    index: a
  } = i;
  return null == a || 'row' !== e.type ? null : n[a + 1 + e.row];
}), Y(this, 'renderRow', e => {
  let {
    section: t,
    row: n,
    rowIndex: a
  } = e, {
    channel: l
  } = this.props, s = this.getRowProps(e);
  if (null != s) {
    if (s.type === P.so.MEMBER && 'user' in s) {
      let {
        colorString: e,
        colorRoleId: t,
        user: n,
        status: r,
        isOwner: o,
        isMobileOnline: c,
        nick: d,
        activities: u,
        applicationStream: h,
        premiumSince: p
      } = s;
      return (0, i.jsx)(J, {
        colorString: e,
        colorRoleId: t,
        user: n,
        status: r,
        isOwner: o,
        nick: d,
        activities: this._areActivitiesExperimentallyHidden ? [] : u,
        applicationStream: h,
        channel: l,
        guildId: l.guild_id,
        premiumSince: p,
        isMobileOnline: c,
        index: a
      }, 'member-'.concat(s.user.id));
    }
    if (s.type === P.so.CONTENT_INVENTORY) {
      let e = 'content-inventory-'.concat(s.entry.id);
      return null != s.entry.original_id && (e += '-'.concat(s.entry.original_id)), (0, i.jsx)(Z.ZP, {
        ...s,
        channel: this.props.channel,
        index: a
      }, e);
    }
    if (s.type === P.so.HIDDEN_CONTENT_INVENTORY)
      return (0, i.jsx)(S.Z, {}, 'content-inventory-hidden-entry');
  }
  return (0, i.jsx)(ee, {
    index: a
  }, 'placeholder-'.concat(t, ':').concat(n));
}), Y(this, 'handleScroll', () => {
  this.updateSubscription(), this.updateMaxContentFeedRowSeen();
}), Y(this, 'updateMaxContentFeedRowSeen', o().debounce(() => {
  let e = this._list;
  if (null == e)
    return;
  let {
    offsetHeight: t,
    scrollTop: n
  } = e.getScrollerState();
  this.props.updateMaxContentFeedRowSeen(n + t - 40);
}, 50)), Y(this, 'getContentFeedGroup', () => {
  let e = this.props.groups[A.T];
  if ((0, N.R)(e))
    return e;
}), Y(this, 'hasContentFeed', () => null != this.getContentFeedGroup()), Y(this, 'getRowHeightComputer', () => {
  let e = this.getContentFeedGroup();
  if (null != e) {
    let {
      rows: t
    } = this.props, n = e.index;
    return function(e, i) {
      if (e === A.T) {
        let e = t[n + 1 + i];
        return (0, Z.iZ)(e);
      }
      return q;
    };
  }
  return q;
}), Y(this, 'getContentFeedHeight', () => {
  let e = this.getContentFeedGroup();
  return null != e ? e.feedHeight + 40 : 0;
}), Y(this, 'updateSubscription', o().debounce(() => {
  if (null == this._list)
    return;
  let {
    channel: e
  } = this.props, {
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
}, 50)), Y(this, 'trackMemberListViewed', () => {
  var e;
  if (this.lastReportedAnalyticsChannel === this.props.channel.id)
    return;
  let t = null === (e = this._list) || void 0 === e ? void 0 : e.getItems(),
    {
      rowsVisible: n
    } = this.getDimensions();
  if (void 0 === n || 0 === n || null == t)
    return;
  this.hasContentFeed() && (t = t.filter(e => e.section !== A.T));
  let i = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(H.lm);
  if (0 === i.length)
    return;
  let a = i.reduce((e, t) => t.type !== P.so.MEMBER ? e : (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === F.IIU.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, e), {
    num_users_visible: 0,
    num_users_visible_with_mobile_indicator: 0,
    num_users_visible_with_game_activity: 0,
    num_users_visible_with_activity: 0,
    num_users_visible_with_avatar_decoration: 0
  });
  this.lastReportedAnalyticsChannel = this.props.channel.id, x.ZP.trackWithMetadata(F.rMx.MEMBER_LIST_VIEWED, {
    ...a
  });
});
  }
}

function en(e) {
  let {
channel: t,
className: n
  } = e, {
analyticsLocations: l
  } = (0, T.ZP)(I.Z.MEMBER_LIST), r = (0, h.e7)([g.Z], () => g.Z.keyboardModeEnabled), o = (0, h.cj)([P.ZP], () => P.ZP.getProps(t.guild_id, t.id)), {
rows: u,
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
let i = parseInt(t, 10),
  [a, l] = n.getSectionRowFromIndex(i),
  s = 0 === a && 0 === l ? q : 0;
n.scrollToIndex({
  section: a,
  row: l,
  padding: s,
  callback: () => {
    requestAnimationFrame(() => {
      var t;
      return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
        preventScroll: !0
      });
    });
  }
});
  }, []), C = a.useCallback(() => new Promise(e => {
let t = f.current;
if (null == t)
  return e();
t.scrollToTop({
  callback: () => requestAnimationFrame(() => e())
});
  }), []), x = a.useCallback(() => new Promise(e => {
let t = f.current;
if (null == t)
  return e();
t.scrollToBottom({
  callback() {
    requestAnimationFrame(() => setTimeout(e, 100));
  }
});
  }), []), v = (0, d.ZP)({
id: 'members-'.concat(t.id),
setFocus: E,
isEnabled: r,
scrollToStart: C,
scrollToEnd: x
  });
  return (0, i.jsx)(T.Gt, {
value: l,
children: (0, i.jsx)('div', {
  className: s()(z.container, n),
  children: (0, i.jsx)(c.bG, {
    navigator: v,
    children: (0, i.jsx)(et, {
      ...e,
      ...o,
      version: m,
      groups: p,
      rows: u,
      listRef: f,
      updateMaxContentFeedRowSeen: _
    })
  })
})
  });
}

function ei(e) {
  let {
channel: t,
className: n
  } = e, l = a.useDeferredValue(t);
  return a.useMemo(() => (0, i.jsx)(en, {
channel: l,
className: n
  }), [
l,
n
  ]);
}