t.r(n), t.d(n, {
  default: function() {
return b;
  }
}), t(653041), t(47120);
var i = t(735250),
  l = t(470079),
  E = t(120356),
  a = t.n(E),
  r = t(442837),
  o = t(952265),
  _ = t(481060),
  d = t(493683),
  u = t(700582),
  s = t(100527),
  c = t(906732),
  C = t(933557),
  S = t(471445),
  A = t(734307),
  T = t(359110),
  I = t(814443),
  L = t(210887),
  D = t(131704),
  N = t(699516),
  U = t(944486),
  h = t(914010),
  P = t(594174),
  R = t(186523),
  f = t(553826),
  g = t(823379),
  O = t(407316),
  G = t(937784),
  m = t(689938),
  H = t(222359),
  Z = t(138715),
  p = t(979770);

function M(e) {
  let {
channel: n,
ChannelIcon: t,
selected: l,
onClick: E
  } = e, a = (0, C.ZP)(n);
  return (0, i.jsxs)(_.Clickable, {
className: H.channelRow,
onClick: () => E(n.id),
children: [
  l ? (0, i.jsx)(f.Z, {
    className: H.radioIcon
  }) : (0, i.jsx)(R.Z, {
    className: H.radioIcon
  }),
  (0, i.jsx)(t, {
    className: H.icon,
    size: 'xs',
    color: 'currentColor'
  }),
  (0, i.jsx)(_.Text, {
    variant: 'text-md/medium',
    color: 'interactive-active',
    children: a
  })
]
  });
}

function v(e) {
  let {
guildId: n,
selectedChannelId: t,
onSelectChannelId: E
  } = e, o = (0, r.e7)([U.Z], () => U.Z.getChannelId()), {
guildChannels: d
  } = (0, r.cj)([A.Z], () => A.Z.getGuildWithoutChangingGuildActionRows(n)), u = l.useMemo(() => {
let e = [];
return d.forEachChannel(n => {
  !1 !== (0, O.W)(n.id) && ((0, D.r8)(n.type) || (0, D.bw)(n.type)) && e.push(n);
}), e.sort((e, n) => e.id === o ? -1 : n.id === o ? 1 : 0);
  }, [
d,
o
  ]);
  return 0 === u.length ? null : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)('div', {
    className: a()(H.divider, H.bottomDivider)
  }),
  (0, i.jsx)(_.Text, {
    variant: 'eyebrow',
    color: 'interactive-normal',
    className: H.contentPadding,
    children: m.Z.Messages.CLIP_SHARE_SELECT_CHANNEL
  }),
  (0, i.jsx)(_.List, {
    sections: [u.length],
    sectionHeight: 0,
    renderRow: e => {
      let {
        section: n,
        row: l
      } = e;
      if (n > 0)
        return null;
      let a = u[l],
        r = (0, S.KS)(a);
      return null == r ? null : (0, i.jsx)(M, {
        channel: a,
        ChannelIcon: r,
        selected: t === a.id,
        onClick: E
      }, a.id);
    },
    rowHeight: (e, n) => e > 0 ? 0 : null != u[n] ? 56 : 0,
    renderSection: () => null,
    className: a()(H.channelList, H.contentPadding),
    fade: !0
  })
]
  });
}

function x(e) {
  let {
friends: n,
searchQuery: t,
disabled: E,
onShareClip: o
  } = e, d = l.useMemo(() => 0 === t.length ? n : n.filter(e => e.username.toLowerCase().includes(t.toLowerCase())), [
n,
t
  ]), s = (0, r.e7)([L.Z], () => L.Z.theme);
  return 0 === d.length ? (0, i.jsxs)(_.EmptyState, {
theme: s,
className: H.emptyStateContainer,
children: [
  (0, i.jsx)(_.EmptyStateImage, {
    width: 415,
    height: 75,
    lightSrc: p,
    darkSrc: Z
  }),
  (0, i.jsx)(_.EmptyStateText, {
    note: m.Z.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
  })
]
  }) : (0, i.jsx)(_.List, {
sections: [d.length],
sectionHeight: 0,
renderRow: e => {
  let {
    section: n,
    row: t
  } = e;
  if (n > 0)
    return null;
  let l = d[t],
    a = d[t].username;
  return (0, i.jsxs)('div', {
    className: H.userRow,
    children: [
      (0, i.jsx)(u.Z, {
        user: l
      }),
      (0, i.jsx)(_.Text, {
        className: H.username,
        variant: 'text-md/normal',
        children: a
      }),
      (0, i.jsx)(_.Button, {
        disabled: E,
        onClick: () => o(l.id),
        className: H.__invalid_friendShareButton,
        look: _.ButtonLooks.OUTLINED,
        size: _.ButtonSizes.SMALL,
        color: _.ButtonColors.BRAND,
        children: (0, i.jsx)(_.Text, {
          variant: 'text-sm/medium',
          children: m.Z.Messages.SHARE
        })
      })
    ]
  }, l.id);
},
rowHeight: (e, n) => e > 0 ? 0 : null != d[n] ? 52 : 0,
renderSection: () => null,
className: a()(H.friendsList, H.contentPadding),
fade: !0
  });
}

function b(e) {
  let {
clip: n,
editMetadata: t,
transitionState: E,
onClose: u
  } = e, [C, S] = l.useState(''), [A, L] = l.useState(!1), [D, U] = l.useState(null), R = (0, r.Wu)([N.Z], () => N.Z.getFriendIDs()), f = (0, r.Wu)([
I.Z,
P.default
  ], () => R.map(e => P.default.getUser(e)).filter(g.lm).sort((e, n) => {
var t, i, l, E;
return (null !== (l = null === (t = I.Z.getUserAffinity(n.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== l ? l : 0) - (null !== (E = null === (i = I.Z.getUserAffinity(e.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== E ? E : 0);
  }), [R]), O = (0, r.e7)([h.Z], () => h.Z.getGuildId()), {
analyticsLocations: Z
  } = (0, c.ZP)(s.Z.CLIPS_SHARE_MODAL);
  async function p(e) {
let i = null != e ? e : D;
if (null != i) {
  L(!0);
  try {
    await (0, G.e)(n, {
      channelId: i,
      editMetadata: t,
      analyticsLocations: Z
    }), null == e && (0, T.Kh)(i), o.pT();
  } catch (e) {} finally {
    L(!1);
  }
}
  }
  async function M(e) {
let n = await d.Z.openPrivateChannel(e);
await p(n);
  }
  return (0, i.jsxs)(_.ModalRoot, {
size: _.ModalSize.SMALL,
transitionState: E,
children: [
  (0, i.jsx)(_.Heading, {
    className: a()(H.title, H.contentPadding),
    variant: 'heading-lg/semibold',
    color: 'interactive-active',
    children: m.Z.Messages.CLIP_SHARE_MODAL_TITLE
  }),
  (0, i.jsx)(_.Text, {
    variant: 'text-md/normal',
    color: 'text-normal',
    className: a()(H.subtitle, H.contentPadding),
    children: m.Z.Messages.CLIP_SHARE_MODAL_SUBTITLE
  }),
  (0, i.jsx)(_.SearchBar, {
    className: H.searchBar,
    query: C,
    onChange: S,
    size: _.SearchBar.Sizes.MEDIUM,
    onClear: function() {
      S('');
    },
    placeholder: m.Z.Messages.INVITE_SEARCH_FOR_FRIENDS
  }),
  (0, i.jsx)('div', {
    className: a()(H.divider, H.topDivider)
  }),
  (0, i.jsx)(x, {
    searchQuery: C,
    friends: f,
    onShareClip: M,
    disabled: A
  }),
  null != O && (0, i.jsx)(v, {
    guildId: O,
    selectedChannelId: D,
    onSelectChannelId: U
  }),
  (0, i.jsxs)(_.ModalFooter, {
    children: [
      (0, i.jsx)(_.Button, {
        disabled: null == D,
        submitting: A,
        color: _.Button.Colors.BRAND,
        onClick: () => p(),
        children: m.Z.Messages.CLIPS_EDIT_SHARE_CLIP
      }),
      (0, i.jsx)(_.Button, {
        submitting: A,
        look: _.ButtonLooks.LINK,
        onClick: u,
        color: _.ButtonColors.PRIMARY,
        children: m.Z.Messages.BACK
      })
    ]
  })
]
  });
}