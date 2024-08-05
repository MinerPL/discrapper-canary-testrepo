n.d(t, {
  TS: function() {
return R;
  },
  ud: function() {
return Z;
  },
  v0: function() {
return M;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(385499),
  u = n(933557),
  d = n(471445),
  h = n(266076),
  p = n(565138),
  m = n(703656),
  _ = n(699516),
  f = n(914010),
  E = n(594174),
  g = n(946734),
  C = n(99843),
  I = n(372564),
  x = n(984370),
  T = n(217314),
  N = n(981631),
  v = n(689938),
  S = n(489919);

function Z(e) {
  let {
channel: t,
channelName: n,
parentChannel: s,
guild: r,
inSidebar: c = !1,
handleClick: p,
handleContextMenu: m,
handleParentClick: f,
handleParentContextMenu: g,
renderFollowButton: I
  } = e, Z = (0, d.KS)(t, r), {
prefix: A,
level: M
  } = function(e, t) {
var n, i;
switch (e) {
  case N.d4z.DM:
    return {
      prefix: v.Z.Messages.DIRECT_MESSAGE,
        level: 1
    };
  case N.d4z.GROUP_DM:
    return {
      prefix: v.Z.Messages.GROUP_DM,
        level: 1
    };
  case N.d4z.GUILD_DIRECTORY:
    return {
      prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : '',
        level: 1
    };
  case N.d4z.GUILD_ANNOUNCEMENT:
  case N.d4z.GUILD_TEXT:
  case N.d4z.GUILD_FORUM:
  case N.d4z.GUILD_MEDIA:
  case N.d4z.GUILD_STAGE_VOICE:
  case N.d4z.GUILD_VOICE:
    return {
      prefix: null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : '',
        level: 1
    };
  case N.d4z.ANNOUNCEMENT_THREAD:
  case N.d4z.PUBLIC_THREAD:
  case N.d4z.PRIVATE_THREAD:
    return {
      prefix: v.Z.Messages.THREAD,
        level: 2
    };
  default:
    return {
      prefix: null,
        level: 1
    };
}
  }(t.type, r), R = (0, i.jsxs)(i.Fragment, {
children: [
  null != A ? (0, i.jsxs)(o.HiddenVisually, {
    children: [
      A,
      ':'
    ]
  }) : null,
  ' ',
  n
]
  });
  switch (t.type) {
case N.d4z.DM:
  return (0, i.jsx)(T.Z, {
    level: M,
    channel: t,
    handleClick: p,
    handleContextMenu: m
  });
case N.d4z.GROUP_DM:
  if (t.isManaged())
    return R;
  return (0, i.jsxs)(a.Fragment, {
    children: [
      (0, i.jsx)(o.HiddenVisually, {
        children: v.Z.Messages.GROUP_DM
      }),
      (0, i.jsx)('div', {
        children: (0, i.jsx)(h.Z, {
          'aria-hidden': !0,
          channel: t,
          size: o.AvatarSizes.SIZE_24,
          facepileSizeOverride: o.AvatarSizes.SIZE_32,
          experimentLocation: 'header_bar',
          className: S.avatar
        })
      }),
      (0, i.jsx)(C.Z, {
        channel: t
      }, 'channel-'.concat(t.id))
    ]
  });
case N.d4z.GUILD_ANNOUNCEMENT:
case N.d4z.GUILD_TEXT:
case N.d4z.GUILD_FORUM:
case N.d4z.GUILD_MEDIA:
  return (0, i.jsxs)(a.Fragment, {
    children: [
      b(Z, t.type === N.d4z.GUILD_ANNOUNCEMENT ? v.Z.Messages.NEWS_CHANNEL : v.Z.Messages.TEXT_CHANNEL),
      (0, i.jsx)(x.Z.Title, {
        level: M,
        onContextMenu: m,
        onClick: p,
        children: R
      }),
      null != I ? I() : null
    ]
  });
case N.d4z.GUILD_VOICE:
  return (0, i.jsxs)(a.Fragment, {
    children: [
      b(Z, v.Z.Messages.VOICE_CHANNEL),
      (0, i.jsx)(x.Z.Title, {
        level: M,
        onContextMenu: m,
        onClick: p,
        children: R
      })
    ]
  });
case N.d4z.GUILD_STAGE_VOICE:
  return (0, i.jsxs)(a.Fragment, {
    children: [
      b(Z, v.Z.Messages.STAGE_CHANNEL),
      (0, i.jsx)(x.Z.Title, {
        level: M,
        onContextMenu: m,
        onClick: p,
        children: R
      })
    ]
  });
case N.d4z.ANNOUNCEMENT_THREAD:
case N.d4z.PUBLIC_THREAD:
case N.d4z.PRIVATE_THREAD:
  let j = null;
  if (!c && null != s) {
    let e = (0, d.KS)(s, r);
    j = (0, i.jsxs)(a.Fragment, {
      children: [
        b(e, v.Z.Messages.TEXT_CHANNEL),
        (0, i.jsx)(x.Z.Title, {
          level: M,
          onContextMenu: g,
          onClick: f,
          className: l()(S.parentChannelName, S.cursorPointer),
          children: (0, u.F6)(s, E.default, _.Z)
        }),
        (0, i.jsx)(x.Z.Caret, {})
      ]
    });
  }
  let L = (null == s ? void 0 : s.type) != null && N.TPd.GUILD_THREADS_ONLY.has(s.type);
  return (0, i.jsxs)(a.Fragment, {
    children: [
      j,
      b(L ? null : Z, v.Z.Messages.THREAD),
      (0, i.jsx)(x.Z.Title, {
        level: M,
        onContextMenu: m,
        onClick: p,
        className: l()({
          [S.cursorPointer]: c,
          [S.forumPostTitle]: L
        }),
        children: R
      })
    ]
  });
case N.d4z.GUILD_DIRECTORY:
  let P = (null == r ? void 0 : r.hasFeature(N.oNc.HUB)) ? v.Z.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({
    guildName: n
  }) : n;
  return (0, i.jsxs)(a.Fragment, {
    children: [
      null !== Z ? (0, i.jsx)(x.Z.Icon, {
        iconClassName: S.__invalid_icon,
        icon: Z,
        'aria-hidden': !0
      }) : null,
      (0, i.jsxs)(x.Z.Title, {
        level: M,
        onContextMenu: m,
        onClick: p,
        children: [
          null != A ? (0, i.jsxs)(o.HiddenVisually, {
            children: [
              A,
              ':'
            ]
          }) : null,
          ' ',
          P
        ]
      })
    ]
  });
default:
  return null;
  }
}
let A = e => {
  let {
channel: t
  } = e, n = (0, r.e7)([E.default], () => E.default.getCurrentUser()), a = (0, r.e7)([E.default], () => E.default.getUser(t.getRecipientId()));
  return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == a ? void 0 : a.isStaff()) ? (0, i.jsx)(c.Z, {
type: c.Z.Types.STAFF_ONLY_DM
  }) : null;
};

function M(e, t) {
  switch (e.type) {
case N.d4z.DM:
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(A, {
        channel: e
      }),
      (0, i.jsx)(g.Z, {
        channel: e
      }, e.id)
    ]
  });
case N.d4z.GUILD_ANNOUNCEMENT:
case N.d4z.GUILD_TEXT:
case N.d4z.GUILD_VOICE:
case N.d4z.GUILD_STAGE_VOICE:
case N.d4z.GROUP_DM:
  return null != t ? (0, i.jsx)(I.Z, {
    channel: e,
    guild: t
  }, e.id) : null;
default:
  return null;
  }
}

function b(e, t) {
  return (0, i.jsxs)(i.Fragment, {
children: [
  null !== e && (0, i.jsx)(x.Z.Icon, {
    iconClassName: S.__invalid_icon,
    icon: e,
    'aria-hidden': !0
  }),
  (0, i.jsx)(o.HiddenVisually, {
    children: t
  })
]
  });
}

function R(e) {
  let {
guild: t,
channel: n,
caretPosition: a = 'left'
  } = e;
  return (0, r.e7)([f.Z], () => f.Z.getGuildId()) !== N.I_8 || null == t ? null : (0, i.jsxs)('div', {
className: S.guildBreadcrumbContainer,
children: [
  'left' === a && (0, i.jsx)(x.Z.Caret, {
    direction: 'left'
  }),
  (0, i.jsx)(p.Z, {
    guild: t,
    size: p.Z.Sizes.SMALLER,
    className: S.guildBreadcrumbIcon,
    active: !0
  }),
  (0, i.jsx)(x.Z.Title, {
    onClick: () => {
      (0, m.XU)(t.id, n.id);
    },
    className: l()(S.parentChannelName, S.cursorPointer),
    children: t.name
  }),
  'right' === a && (0, i.jsx)(x.Z.Caret, {
    direction: 'right'
  })
]
  });
}