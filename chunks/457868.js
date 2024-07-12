n.d(t, {
  Z: function() {
return X;
  }
}), n(47120);
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
  p = n(481060),
  m = n(239091),
  _ = n(144144),
  f = n(607070),
  E = n(100527),
  C = n(906732),
  g = n(623624),
  I = n(518738),
  x = n(965376),
  T = n(159299),
  v = n(484459),
  N = n(103575),
  S = n(199902),
  Z = n(271383),
  A = n(430824),
  M = n(158776),
  b = n(885110),
  R = n(111583),
  j = n(594174),
  L = n(499033),
  P = n(151827),
  O = n(176278),
  y = n(626135),
  D = n(585483),
  k = n(700785),
  U = n(51144),
  w = n(998502),
  B = n(276264),
  H = n(981631),
  G = n(689938),
  V = n(890555),
  F = n(849787);
let W = w.ZP.getEnableHardwareAcceleration(),
  z = 44 + B.x,
  Y = a.memo(function(e) {
let {
  channel: t,
  sectionId: l,
  userId: s,
  guildOwnerId: r
} = e, o = (0, h.e7)([R.Z], () => R.Z.isTyping(t.id, s)), d = (0, h.e7)([Z.ZP], () => Z.ZP.getMember(t.guild_id, s)), f = (0, h.e7)([A.Z], () => {
  var e;
  return (null == d ? void 0 : d.colorRoleId) != null ? null === (e = A.Z.getRole(t.guild_id, d.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0;
}, [
  t.guild_id,
  d
]), E = (0, h.e7)([j.default], () => j.default.getUser(s)), C = (0, h.e7)([j.default], () => j.default.getCurrentUser()), I = (null == E ? void 0 : E.id) === (null == C ? void 0 : C.id), x = (0, h.e7)([
  M.Z,
  b.Z
], () => I ? b.Z.getStatus() : M.Z.getStatus(s, t.guild_id)), L = (0, h.e7)([M.Z], () => M.Z.isMobileOnline(s)), P = (0, h.e7)([
  M.Z,
  b.Z
], () => I ? b.Z.getActivities() : M.Z.getActivities(s, t.guild_id)), O = (0, h.e7)([S.Z], () => S.Z.getAnyStreamForUser(s)), y = (0, c.JA)(s), k = (0, h.e7)([T.Z], () => T.Z.canUserViewChannel(t.id, l, s)), w = (null == E ? void 0 : E.id) != null && E.id === r, V = a.useCallback(e => {
  null != E && (0, m.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('70675')
    ]).then(n.bind(n, 654663));
    return n => (0, i.jsx)(e, {
      ...n,
      user: E,
      guildId: t.guild_id,
      channel: t
    });
  });
}, [
  E,
  t
]), F = a.useCallback(() => {
  if (null == E)
    return;
  let e = '@'.concat(U.ZP.getUserTag(E, {
      decoration: 'never'
    })),
    n = '<@'.concat(E.id, '>');
  D.S.dispatchToLastSubscribed(H.CkL.INSERT_TEXT, {
    plainText: e,
    rawText: n
  }), _.Z.startTyping(t.id);
}, [
  E,
  t
]), z = a.useCallback(e => {
  e.stopPropagation(), (0, g.f)({
    guildId: t.guild_id,
    location: {
      section: H.jXE.THREAD_MEMBER_LIST,
      object: H.qAy.BOOST_GEM_ICON
    }
  });
}, [t.guild_id]);
if (null == E)
  return null;
let Y = null == d ? void 0 : d.premiumSince;
return (0, i.jsx)(p.Popout, {
  preload: () => (0, v.W)(E, {
    guildId: t.guild_id,
    channelId: t.id
  }),
  renderPopout: e => (0, i.jsx)(N.Z, {
    ...e,
    location: 'ThreadMembers',
    userId: E.id,
    guildId: t.guild_id,
    channelId: t.id,
    analyticsParams: {
      location: {
        page: H.ZY5.GUILD_CHANNEL,
        section: H.jXE.THREAD_MEMBER_LIST
      }
    }
  }),
  position: u.tq ? 'window_center' : 'left',
  spacing: 16,
  onShiftClick: F,
  children: (e, n) => {
    let {
      isShown: a
    } = n;
    return (0, i.jsx)(B.Z, {
      onContextMenu: V,
      shouldAnimateStatus: W,
      user: E,
      currentUser: C,
      nick: null == d ? void 0 : d.nick,
      status: x,
      activities: P,
      colorString: null == d ? void 0 : d.colorString,
      colorRoleName: f,
      isTyping: o,
      channel: t,
      guildId: t.guild_id,
      isMobile: L,
      selected: a,
      applicationStream: O,
      premiumSince: null == Y ? null : new Date(Y),
      onClickPremiumGuildIcon: z,
      itemProps: y,
      lostPermissionTooltipText: k ? void 0 : G.Z.Messages.THREAD_MEMBER_WITHOUT_ACCESS,
      isOwner: w,
      ...e
    });
  }
});
  }),
  K = a.memo(function(e) {
let {
  id: t,
  label: n,
  count: a,
  guildId: l
} = e, s = (0, I.p9)({
  roleId: t,
  guildId: l,
  size: 16
});
return t === H.Skl.UNKNOWN ? (0, i.jsx)('div', {
  className: F.membersGroup,
  children: (0, i.jsx)('div', {
    className: F.memberGroupsPlaceholder
  })
}) : (0, i.jsxs)(P.Z, {
  className: F.membersGroup,
  'aria-label': G.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
    title: n,
    count: a
  }),
  children: [
    null != s ? (0, i.jsx)(O.Z, {
      className: F.roleIcon,
      ...s
    }) : null,
    (0, i.jsxs)('span', {
      'aria-hidden': !0,
      children: [
        n,
        ' \u2014 ',
        a
      ]
    })
  ]
});
  }),
  q = a.memo(function(e) {
let {
  channel: t
} = e;
return t.type === H.d4z.PRIVATE_THREAD ? (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)('div', {
      className: V.divider
    }),
    (0, i.jsxs)(p.Text, {
      variant: 'text-xs/bold',
      color: 'header-secondary',
      className: V.private,
      children: [
        (0, i.jsx)(p.LockIcon, {
          size: 'xxs',
          color: 'currentColor'
        }),
        '\xA0',
        G.Z.Messages.THREAD_BROWSER_PRIVATE
      ]
    }),
    (0, i.jsx)(p.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      className: V.instructions,
      children: G.Z.Messages.MEMBER_LIST_PRIVATE_THREAD_INSTRUCTIONS
    })
  ]
}) : null;
  });

function X(e) {
  let {
channel: t,
guild: n
  } = e, l = 'members-'.concat(t.id), {
analyticsLocations: r
  } = (0, C.ZP)(E.Z.MEMBER_LIST), u = (0, x.D)(t.id, n), m = u.filter(e => e.userIds.length > 0).reverse()[0], {
navigator: _,
listRef: g
  } = function(e, t) {
let n = (0, h.e7)([f.Z], () => f.Z.keyboardModeEnabled),
  i = a.useRef(null),
  l = a.useCallback((e, n) => {
    let a = i.current;
    if (null == a)
      return;
    let l = parseInt(n, 10),
      [s, r] = a.getSectionRowFromIndex(l),
      o = 0 === s && 0 === r ? t : 0;
    a.scrollToIndex({
      section: s,
      row: r,
      padding: o,
      callback: () => {
        requestAnimationFrame(() => {
          var t;
          return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
            preventScroll: !0
          });
        });
      }
    });
  }, [t]),
  s = a.useCallback(() => new Promise(e => {
    let t = i.current;
    if (null == t)
      return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    });
  }), []),
  r = a.useCallback(() => new Promise(e => {
    let t = i.current;
    if (null == t)
      return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100));
      }
    });
  }), []);
return {
  navigator: (0, d.ZP)({
    id: e,
    setFocus: l,
    isEnabled: n,
    scrollToStart: s,
    scrollToEnd: r
  }),
  listRef: i
};
  }(l, z), I = 0 === u.length || u.every(e => 0 === e.userIds.length);
  if (a.useEffect(() => {
  y.default.track(H.rMx.MEMBER_LIST_VIEWED, {
    channel_id: t.id,
    channel_type: t.type,
    guild_id: t.guild_id
  });
}, [
  t.guild_id,
  t.id,
  t.type
]), I)
return (0, i.jsx)(Q, {
  channel: t
});
  let T = o().omit(_.containerProps, ['ref']),
v = k.iJ(n);
  return (0, i.jsx)(C.Gt, {
value: r,
children: (0, i.jsx)(c.bG, {
  navigator: _,
  children: (0, i.jsx)(p.FocusJumpSection, {
    children: e => (0, i.jsx)('div', {
      className: s()(F.membersWrap, F.hiddenMembers),
      children: (0, i.jsx)(p.List, {
        ref: g,
        className: F.members,
        paddingTop: 0,
        sectionHeight: 40,
        renderSection: e => {
          let {
            section: t
          } = e, a = u[t];
          return (0, i.jsx)(K, {
            id: a.id,
            label: a.label,
            count: a.userIds.length,
            guildId: n.id
          }, a.id);
        },
        rowHeight: z,
        renderRow: e => {
          let {
            section: n,
            row: a
          } = e, {
            userIds: l,
            id: s
          } = u[n];
          return (0, i.jsx)(Y, {
            channel: t,
            sectionId: s,
            userId: l[a],
            guildOwnerId: v
          }, l[a]);
        },
        footerHeight: e => u[e] === m && t.type === H.d4z.PRIVATE_THREAD ? 80 : 0,
        renderFooter: e => u[e.section] === m ? (0, i.jsx)(q, {
          channel: t
        }, 'footer') : null,
        innerAriaLabel: G.Z.Messages.MEMBERS,
        innerTag: 'ul',
        sections: u.map(e => e.userIds.length),
        fade: !0,
        ...T,
        ...e
      }, l)
    })
  })
})
  });
}

function Q(e) {
  let {
channel: t
  } = e;
  return (0, i.jsxs)('div', {
className: s()(F.membersWrap, F.hiddenMembers, F.members, V.emptyState),
children: [
  (0, i.jsx)(p.Text, {
    className: V.emptyStateHeader,
    variant: 'text-xs/bold',
    color: 'interactive-normal',
    children: G.Z.Messages.MEMBERS
  }),
  (0, i.jsxs)('div', {
    className: V.emptyStateIconContainer,
    children: [
      (0, i.jsx)('div', {
        className: V.emptyStateIcon,
        children: (0, i.jsx)(p.GroupIcon, {
          size: 'lg',
          color: 'currentColor'
        })
      }),
      (0, i.jsx)(L.Z, {
        className: V.emptyStateStars
      })
    ]
  }),
  (0, i.jsx)(p.Heading, {
    variant: 'heading-md/semibold',
    children: t.isForumPost() ? G.Z.Messages.FORUM_POST_MEMBER_LIST_EMPTY_STATE_HEADER : G.Z.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_HEADER
  }),
  (0, i.jsx)(p.Text, {
    className: V.emptyStateSubtext,
    variant: 'text-sm/normal',
    color: 'header-secondary',
    children: G.Z.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_SUBTEXT
  })
]
  });
}