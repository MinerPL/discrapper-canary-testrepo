n.d(t, {
  Z: function() {
return X;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(392711),
  o = n.n(r),
  c = n(91192),
  u = n(924826),
  d = n(873546),
  h = n(442837),
  m = n(481060),
  p = n(239091),
  _ = n(144144),
  f = n(607070),
  E = n(100527),
  g = n(906732),
  C = n(82295),
  I = n(91218),
  x = n(623624),
  T = n(518738),
  N = n(965376),
  v = n(159299),
  S = n(184301),
  Z = n(103575),
  A = n(199902),
  M = n(271383),
  b = n(430824),
  R = n(158776),
  j = n(885110),
  L = n(111583),
  P = n(594174),
  O = n(499033),
  y = n(626135),
  D = n(585483),
  k = n(700785),
  U = n(51144),
  w = n(998502),
  B = n(276264),
  H = n(981631),
  G = n(689938),
  V = n(312424),
  F = n(460356);
let W = w.ZP.getEnableHardwareAcceleration(),
  z = 44 + B.x,
  Y = a.memo(function(e) {
let {
  channel: t,
  sectionId: s,
  userId: l,
  guildOwnerId: r
} = e, o = (0, h.e7)([L.Z], () => L.Z.isTyping(t.id, l)), u = (0, h.e7)([M.ZP], () => M.ZP.getMember(t.guild_id, l)), f = (0, h.e7)([b.Z], () => {
  var e;
  return (null == u ? void 0 : u.colorRoleId) != null ? null === (e = b.Z.getRole(t.guild_id, u.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0;
}, [
  t.guild_id,
  u
]), E = (0, h.e7)([P.default], () => P.default.getUser(l)), g = (0, h.e7)([P.default], () => P.default.getCurrentUser()), C = (null == E ? void 0 : E.id) === (null == g ? void 0 : g.id), I = (0, h.e7)([
  R.Z,
  j.Z
], () => C ? j.Z.getStatus() : R.Z.getStatus(l, t.guild_id)), T = (0, h.e7)([R.Z], () => R.Z.isMobileOnline(l)), N = (0, h.e7)([
  R.Z,
  j.Z
], () => C ? j.Z.getActivities() : R.Z.getActivities(l, t.guild_id)), O = (0, h.e7)([A.Z], () => A.Z.getAnyStreamForUser(l)), y = (0, c.JA)(l), k = (0, h.e7)([v.Z], () => v.Z.canUserViewChannel(t.id, s, l)), w = (null == E ? void 0 : E.id) != null && E.id === r, V = a.useCallback(e => {
  null != E && (0, p.jW)(e, async () => {
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
  e.stopPropagation(), (0, x.f)({
    guildId: t.guild_id,
    location: {
      section: H.jXE.THREAD_MEMBER_LIST,
      object: H.qAy.BOOST_GEM_ICON
    }
  });
}, [t.guild_id]);
if (null == E)
  return null;
let Y = null == u ? void 0 : u.premiumSince;
return (0, i.jsx)(m.Popout, {
  preload: () => (0, S.Z)(E, {
    guildId: t.guild_id,
    channelId: t.id
  }),
  renderPopout: e => (0, i.jsx)(Z.Z, {
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
  position: d.tq ? 'window_center' : 'left',
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
      currentUser: g,
      nick: null == u ? void 0 : u.nick,
      status: I,
      activities: N,
      colorString: null == u ? void 0 : u.colorString,
      colorRoleName: f,
      isTyping: o,
      channel: t,
      guildId: t.guild_id,
      isMobile: T,
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
  guildId: s
} = e, l = (0, T.p9)({
  roleId: t,
  guildId: s,
  size: 16
});
return t === H.Skl.UNKNOWN ? (0, i.jsx)('div', {
  className: F.membersGroup,
  children: (0, i.jsx)('div', {
    className: F.memberGroupsPlaceholder
  })
}) : (0, i.jsxs)(C.Z, {
  className: F.membersGroup,
  'aria-label': G.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
    title: n,
    count: a
  }),
  children: [
    null != l ? (0, i.jsx)(I.Z, {
      className: F.roleIcon,
      ...l
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
    (0, i.jsxs)(m.Text, {
      variant: 'text-xs/bold',
      color: 'header-secondary',
      className: V.private,
      children: [
        (0, i.jsx)(m.LockIcon, {
          size: 'xxs',
          color: 'currentColor'
        }),
        '\xA0',
        G.Z.Messages.THREAD_BROWSER_PRIVATE
      ]
    }),
    (0, i.jsx)(m.Text, {
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
  } = e, s = 'members-'.concat(t.id), {
analyticsLocations: r
  } = (0, g.ZP)(E.Z.MEMBER_LIST), d = (0, N.D)(t.id, n), p = d.filter(e => e.userIds.length > 0).reverse()[0], {
navigator: _,
listRef: C
  } = function(e, t) {
let n = (0, h.e7)([f.Z], () => f.Z.keyboardModeEnabled),
  i = a.useRef(null),
  s = a.useCallback((e, n) => {
    let a = i.current;
    if (null == a)
      return;
    let s = parseInt(n, 10),
      [l, r] = a.getSectionRowFromIndex(s),
      o = 0 === l && 0 === r ? t : 0;
    a.scrollToIndex({
      section: l,
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
  l = a.useCallback(() => new Promise(e => {
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
  navigator: (0, u.ZP)({
    id: e,
    setFocus: s,
    isEnabled: n,
    scrollToStart: l,
    scrollToEnd: r
  }),
  listRef: i
};
  }(s, z), I = 0 === d.length || d.every(e => 0 === e.userIds.length);
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
  let x = o().omit(_.containerProps, ['ref']),
T = k.iJ(n);
  return (0, i.jsx)(g.Gt, {
value: r,
children: (0, i.jsx)(c.bG, {
  navigator: _,
  children: (0, i.jsx)(m.FocusJumpSection, {
    children: e => (0, i.jsx)('div', {
      className: l()(F.membersWrap, F.hiddenMembers),
      children: (0, i.jsx)(m.List, {
        ref: C,
        className: F.members,
        paddingTop: 0,
        sectionHeight: 40,
        renderSection: e => {
          let {
            section: t
          } = e, a = d[t];
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
            userIds: s,
            id: l
          } = d[n];
          return (0, i.jsx)(Y, {
            channel: t,
            sectionId: l,
            userId: s[a],
            guildOwnerId: T
          }, s[a]);
        },
        footerHeight: e => d[e] === p && t.type === H.d4z.PRIVATE_THREAD ? 80 : 0,
        renderFooter: e => d[e.section] === p ? (0, i.jsx)(q, {
          channel: t
        }, 'footer') : null,
        innerAriaLabel: G.Z.Messages.MEMBERS,
        innerTag: 'ul',
        sections: d.map(e => e.userIds.length),
        fade: !0,
        ...x,
        ...e
      }, s)
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
className: l()(F.membersWrap, F.hiddenMembers, F.members, V.emptyState),
children: [
  (0, i.jsx)(m.Text, {
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
        children: (0, i.jsx)(m.GroupIcon, {
          size: 'lg',
          color: 'currentColor'
        })
      }),
      (0, i.jsx)(O.Z, {
        className: V.emptyStateStars
      })
    ]
  }),
  (0, i.jsx)(m.Heading, {
    variant: 'heading-md/semibold',
    children: t.isForumPost() ? G.Z.Messages.FORUM_POST_MEMBER_LIST_EMPTY_STATE_HEADER : G.Z.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_HEADER
  }),
  (0, i.jsx)(m.Text, {
    className: V.emptyStateSubtext,
    variant: 'text-sm/normal',
    color: 'header-secondary',
    children: G.Z.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_SUBTEXT
  })
]
  });
}