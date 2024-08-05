t.d(n, {
  Z: function() {
return v;
  },
  _: function() {
return p;
  }
});
var l = t(735250),
  s = t(470079),
  u = t(120356),
  i = t.n(u);
if (12633 == t.j)
  var r = t(91192);
var I = t(442837),
  a = t(481060),
  _ = t(43267),
  o = t(933557),
  E = t(471445),
  N = t(727429),
  d = t(810123),
  T = t(690221),
  S = t(430824),
  c = t(158776),
  O = t(111583),
  f = t(594174),
  M = t(514342),
  m = t(998502),
  U = t(981631),
  P = t(490897),
  g = t(848998);
let D = {
  SELECTED: g.modeSelected,
  CONNECTED: g.modeConnected,
  UNREAD_IMPORTANT: g.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: g.modeUnreadLessImportant,
  MUTED: g.modeMuted,
  LOCKED: g.modeLocked
};

function h(e) {
  e.preventDefault(), e.stopPropagation();
}
let A = m.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function R(e) {
  let {
channel: n
  } = e;
  return (0, l.jsx)(A, {
src: (0, _.x)(n),
'aria-hidden': !0,
size: a.AvatarSizes.SIZE_20
  });
}

function V(e) {
  let {
channel: n
  } = e, t = (0, I.e7)([f.default], () => f.default.getUser(null == n ? void 0 : n.recipients[0])), s = (0, I.e7)([O.Z], () => !(null == t || null == n || n.isMultiUserDM()) && null != O.Z.getTypingUsers(null == n ? void 0 : n.id)[null == t ? void 0 : t.id]), {
status: u,
isMobile: i
  } = (0, I.cj)([c.Z], () => null == t || null == n || n.isMultiUserDM() ? {
status: null,
isMobile: !1
  } : {
status: c.Z.getStatus(t.id),
isMobile: c.Z.isMobileOnline(t.id)
  });
  return (0, l.jsx)(A, {
size: a.AvatarSizes.SIZE_20,
src: null == t ? void 0 : t.getAvatarURL(void 0, 40),
status: u,
isMobile: i,
isTyping: s,
'aria-label': null == t ? void 0 : t.username,
statusTooltip: !0
  });
}
let p = e => {
  let {
className: n,
channel: t,
locked: s,
hasActiveThreads: u,
withGuildIcon: r
  } = e, _ = (0, I.e7)([S.Z], () => S.Z.getGuild(t.guild_id), [t.guild_id]), o = t.type === U.d4z.DM || t.type === U.d4z.GROUP_DM, N = null;
  if (r && null != _ && !o)
N = (0, l.jsx)(d.Z, {
  size: d.E.SMALL_32,
  className: g.iconContainerWithGuildIcon,
  iconClassName: g.iconWithGuildIcon,
  channel: t,
  guild: _,
  locked: s,
  hasActiveThreads: u
});
  else {
let e = function(e, n, t) {
  switch (e.type) {
    case U.d4z.DM:
      return function() {
        return (0, l.jsx)(V, {
          channel: e
        });
      };
    case U.d4z.GROUP_DM:
      return function() {
        return (0, l.jsx)(R, {
          channel: e
        });
      };
    default:
      return (0, E.KS)(e, n, t);
  }
}(t, _, {
  locked: s,
  hasActiveThreads: u
});
if (null == e)
  return null;
N = (0, l.jsx)(e, {
  color: 'currentColor',
  className: i()(g.icon, n)
});
  }
  let T = r ? null == _ ? void 0 : _.name : (0, E.bT)(t, _, s, u),
c = r && null != _ ? ''.concat(_.name, ' - ').concat(T, ' icon') : ''.concat(T, ' icon');
  return (0, l.jsx)(a.Tooltip, {
text: T,
delay: 500,
children: e => (0, l.jsx)('div', {
  ...e,
  role: 'img',
  'aria-label': c,
  className: i()(g.iconContainer),
  children: N
})
  });
};

function v(e) {
  var n;
  let {
channel: t,
name: u,
muted: I,
selected: _,
connected: E,
unread: d,
locked: S,
hasActiveThreads: c,
onClick: O,
onMouseDown: f,
onMouseUp: m,
onContextMenu: A,
connectDragPreview: R,
className: V,
iconClassName: v,
subtitle: Z,
subtitleColor: C,
channel: {
  type: L
},
onMouseEnter: y,
onMouseLeave: x,
'aria-label': G,
children: H,
guild: b,
channelTypeOverride: j,
forceInteractable: z,
mentionCount: X,
resolvedUnreadSetting: k,
isFavoriteSuggestion: F,
withGuildIcon: Y
  } = e, w = k === P.i.ALL_MESSAGES || null != X && X > 0, {
role: q,
...B
  } = (0, r.JA)(t.id), K = s.useRef(null), W = s.useRef(null), J = (0, N.Z)(t), Q = U.Z5c.CHANNEL(J, t.id), $ = (0, o.ZP)(t), ee = t.isGuildVocal(), en = (0, l.jsx)('div', {
className: i()({
  [g.favoritesSuggestion]: F
}),
ref: W,
children: (0, l.jsxs)(T.Z, {
  role: ee && !E ? 'button' : 'link',
  href: ee ? void 0 : Q,
  target: '_blank',
  ref: K,
  className: g.link,
  onClick: () => null == O ? void 0 : O(t),
  ...B,
  'aria-label': G,
  focusProps: {
    enabled: !1
  },
  children: [
    (0, l.jsxs)('div', {
      className: g.linkTop,
      children: [
        (0, l.jsx)(p, {
          className: v,
          channel: t,
          guild: b,
          hasActiveThreads: c,
          locked: S,
          withGuildIcon: Y
        }),
        (0, l.jsx)(M.Z, {
          className: i()(g.name),
          'aria-hidden': !0,
          children: null == u ? $ : u
        }),
        s.Children.count(H) > 0 ? (0, l.jsx)('div', {
          onClick: h,
          className: g.children,
          children: H
        }) : null
      ]
    }),
    null != Z ? (0, l.jsx)('div', {
      className: i()(g.linkBottom, {
        [g.withGuildIcon]: Y
      }),
      children: (0, l.jsx)(a.Text, {
        color: null != C ? C : 'text-muted',
        variant: 'text-xs/medium',
        className: g.subtitle,
        children: Z
      })
    }) : null
  ]
})
  });
  return (0, l.jsx)(a.FocusRing, {
focusTarget: K,
ringTarget: W,
offset: {
  top: 2,
  bottom: 2,
  right: 4
},
children: (0, l.jsxs)('div', {
  className: i()(V, null != O || null != m || null != f || z ? g.wrapper : g.notInteractive, (() => {
    if (_)
      return D.SELECTED;
    if (E)
      return D.CONNECTED;
    if (S)
      return D.LOCKED;
    if (I)
      return D.MUTED;
    if (d)
      return w ? D.UNREAD_IMPORTANT : D.UNREAD_LESS_IMPORTANT;
    return null;
  })(), function(e) {
    switch (e) {
      case U.d4z.GUILD_STAGE_VOICE:
      case U.d4z.GUILD_VOICE:
        return g.typeVoice;
      case U.d4z.ANNOUNCEMENT_THREAD:
      case U.d4z.PUBLIC_THREAD:
      case U.d4z.PRIVATE_THREAD:
        return g.typeThread;
      case U.d4z.GUILD_ANNOUNCEMENT:
      case U.d4z.GUILD_TEXT:
      case U.d4z.GUILD_STORE:
      case U.d4z.GUILD_FORUM:
      case U.d4z.GUILD_MEDIA:
      default:
        return g.typeDefault;
    }
  }(null != j ? j : L)),
  onMouseUp: e => null == m ? void 0 : m(e, t),
  onMouseDown: e => null == f ? void 0 : f(e, t),
  onContextMenu: e => null == A ? void 0 : A(e, t),
  onMouseEnter: y,
  onMouseLeave: x,
  children: [
    I || !d ? null : (0, l.jsx)('div', {
      className: i()(g.unread, w ? g.unreadImportant : void 0)
    }),
    null !== (n = null == R ? void 0 : R(en)) && void 0 !== n ? n : en
  ]
})
  });
}