t.d(n, {
  Z: function() {
return L;
  }
});
var i = t(735250);
t(470079);
var a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(239091),
  s = t(129861),
  d = t(939863),
  u = t(484459),
  _ = t(103575),
  g = t(314897),
  v = t(158776),
  h = t(885110),
  f = t(594174),
  I = t(315416),
  m = t(765305),
  p = t(689938),
  E = t(918831);

function x(e) {
  let {
children: n
  } = e;
  return (0, i.jsxs)('div', {
className: E.emptyContainer,
children: [
  (0, i.jsx)(d.Z, {
    children: (0, i.jsx)('div', {
      className: E.circle,
      children: (0, i.jsx)(o.GroupIcon, {
        size: 'custom',
        color: 'currentColor',
        height: 40,
        width: 40,
        className: E.icon
      })
    })
  }),
  n
]
  });
}

function b() {
  return (0, i.jsx)(x, {
children: (0, i.jsx)(o.Heading, {
  color: 'header-primary',
  variant: 'heading-xl/semibold',
  className: E.title,
  children: p.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
})
  });
}

function C() {
  return (0, i.jsx)(x, {
children: (0, i.jsx)(o.Heading, {
  color: 'header-secondary',
  variant: 'heading-md/semibold',
  className: E.errorTitle,
  children: p.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
})
  });
}

function N(e) {
  let {
count: n
  } = e;
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: E.listRow,
  children: [
    (0, i.jsx)('div', {
      className: l()(E.listRowCircle, E.listAvatar),
      children: (0, i.jsx)(o.GroupIcon, {
        size: 'custom',
        color: 'currentColor',
        height: 14,
        width: 14,
        className: E.icon
      })
    }),
    (0, i.jsx)(o.Text, {
      color: 'text-normal',
      variant: 'text-md/normal',
      children: p.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
        userRemainCount: n
      })
    })
  ]
})
  });
}

function T(e) {
  let {
eventUser: n,
guildId: t,
onContextMenu: a
  } = e, c = (0, r.e7)([f.default], () => f.default.getUser(n.user_id)), d = (0, r.e7)([
h.Z,
v.Z,
g.default
  ], () => n.user_id === g.default.getId() ? h.Z.getStatus() : v.Z.getStatus(n.user_id, t), [
n.user_id,
t
  ]);
  return null == c ? null : (0, i.jsx)(o.Popout, {
preload: () => (0, u.W)(c.id, c.getAvatarURL(t, 80), {
  guildId: t
}),
renderPopout: e => (0, i.jsx)(_.Z, {
  ...e,
  location: 'EventDetailRsvpTab',
  userId: n.user_id,
  guildId: t
}),
position: 'left',
spacing: 16,
children: (e, r) => {
  var u;
  let {
    isShown: _
  } = r;
  return (0, i.jsxs)(o.Clickable, {
    className: l()(E.listRow, E.interactiveRow, {
      [E.selected]: _
    }),
    onContextMenu: e => a(e, c),
    ...e,
    children: [
      (0, i.jsx)(o.Avatar, {
        src: c.getAvatarURL(t, 24),
        'aria-label': c.username,
        size: o.AvatarSizes.SIZE_24,
        className: E.listAvatar,
        status: d
      }),
      (0, i.jsx)(s.Z, {
        user: c,
        className: E.listName,
        discriminatorClass: E.listDiscriminator,
        nick: null === (u = n.member) || void 0 === u ? void 0 : u.nick
      })
    ]
  });
}
  });
}

function Z(e) {
  let {
eventUsers: n,
guildId: t,
usersNotShownCount: a = 0,
onContextMenu: l
  } = e;
  return (0, i.jsxs)(o.ScrollerThin, {
className: E.listScroller,
children: [
  n.map(e => (0, i.jsx)(T, {
    guildId: t,
    eventUser: e,
    onContextMenu: l
  }, e.user_id)),
  a > 0 && (0, i.jsx)(N, {
    count: a
  })
]
  });
}

function j(e) {
  let {
children: n,
style: t
  } = e;
  return (0, i.jsx)('div', {
className: E.container,
style: null != t ? t : {},
children: n
  });
}

function S(e) {
  let {
children: n,
height: t
  } = e;
  return (0, i.jsx)(j, {
style: {
  height: t
},
children: n
  });
}

function L(e) {
  let {
guildEvent: n,
recurrenceId: a,
eventUsers: l,
loading: r,
error: s,
containerHeight: d
  } = e, u = (0, I.Z)(n.guild_id, n.id, a);
  if (r && 0 === l.length)
return (0, i.jsx)(S, {
  height: d,
  children: (0, i.jsx)(o.Spinner, {
    type: o.Spinner.Type.SPINNING_CIRCLE,
    className: E.spinner
  })
});
  if (null != s && 0 === l.length)
return (0, i.jsx)(S, {
  height: d,
  children: (0, i.jsx)(C, {})
});
  let _ = 0;
  return l.length >= m.rC && u > m.rC && (_ = Math.max(u - l.length, 0)), 0 === l.length ? (0, i.jsx)(S, {
height: d,
children: (0, i.jsx)(b, {})
  }) : (0, i.jsx)(j, {
children: (0, i.jsx)(Z, {
  eventUsers: l,
  guildId: n.guild_id,
  onContextMenu: function(e, n) {
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([
        t.e('79695'),
        t.e('69220'),
        t.e('91605')
      ]).then(t.bind(t, 881351));
      return t => (0, i.jsx)(e, {
        ...t,
        user: n
      });
    });
  },
  usersNotShownCount: _
})
  });
}