t.d(n, {
  Z: function() {
return M;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(120356),
  r = t.n(l),
  o = t(442837),
  c = t(481060),
  s = t(447543),
  d = t(906732),
  u = t(565138),
  _ = t(372769),
  g = t(171368),
  v = t(271383),
  h = t(430824),
  f = t(51144),
  I = t(897285),
  m = t(978227),
  p = t(894017),
  E = t(79874),
  x = t(315416),
  b = t(236373),
  C = t(854698),
  N = t(391174),
  T = t(810561),
  Z = t(390966),
  j = t(390072),
  S = t(981631),
  L = t(689938),
  D = t(794797);

function k(e) {
  var n;
  let {
creator: t,
guildId: a,
channelId: l
  } = e, {
analyticsLocations: r
  } = (0, d.ZP)(), s = (0, o.e7)([v.ZP], () => v.ZP.getMember(a, t.id), [
t,
a
  ]);
  return (0, i.jsxs)('div', {
className: D.row,
children: [
  (0, i.jsx)(c.Avatar, {
    size: c.AvatarSizes.SIZE_20,
    src: t.getAvatarURL(a, 20),
    'aria-label': null !== (n = null == s ? void 0 : s.nick) && void 0 !== n ? n : f.ZP.getName(t),
    className: D.icon
  }),
  (0, i.jsx)(c.Text, {
    color: 'header-secondary',
    variant: 'text-sm/normal',
    children: L.Z.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
      usernameHook: function() {
        var e, n;
        return (0, i.jsx)(c.Clickable, {
          onClick: () => (0, g.openUserProfileModal)({
            guildId: a,
            channelId: l,
            userId: t.id,
            roleId: null == s ? void 0 : s.colorRoleId,
            sourceAnalyticsLocations: r,
            analyticsLocation: {
              section: S.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
            }
          }),
          className: D.creator,
          tag: 'span',
          role: 'link',
          children: (0, i.jsx)(c.NameWithRole, {
            name: null !== (e = null == s ? void 0 : s.nick) && void 0 !== e ? e : f.ZP.getName(t),
            color: null !== (n = null == s ? void 0 : s.colorString) && void 0 !== n ? n : void 0
          })
        }, 'open-user-profile');
      }
    })
  })
]
  });
}

function R(e) {
  let {
guild: n,
onClick: t,
onClose: l
  } = e, o = a.useCallback(e => {
null == t || t(e), null != t && (null == l || l(e));
  }, [
t,
l
  ]), s = (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(u.Z, {
    guild: n,
    size: u.Z.Sizes.MINI,
    active: !0,
    className: r()(D.guildIcon, D.icon)
  }),
  (0, i.jsx)(_.Z, {
    guild: n,
    tooltipPosition: 'top',
    tooltipColor: c.Tooltip.Colors.PRIMARY,
    size: 16,
    className: D.guildBadge
  }),
  (0, i.jsx)(c.Text, {
    color: 'header-secondary',
    variant: 'text-sm/normal',
    className: D.linkText,
    children: n.name
  })
]
  });
  return (0, i.jsx)('div', {
className: D.row,
children: null != t ? (0, i.jsx)(c.Clickable, {
  onClick: o,
  className: D.clickable,
  role: 'link',
  children: s
}) : s
  });
}

function y(e) {
  let {
userCount: n,
onClick: t
  } = e;
  return (0, i.jsxs)('div', {
className: D.row,
children: [
  (0, i.jsx)(c.GroupIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20,
    className: D.icon
  }),
  (0, i.jsx)(c.Clickable, {
    onClick: t,
    className: D.interestedCount,
    children: (0, i.jsx)(c.Text, {
      color: 'header-secondary',
      variant: 'text-sm/normal',
      children: L.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
        count: n
      })
    })
  })
]
  });
}

function M(e) {
  let {
guildEvent: n,
guild: t,
channel: l,
headerId: r,
onClose: d,
onClickInterestedCount: u,
isHub: _ = !1,
containerRef: g,
recurrenceId: v,
setRecurrenceId: f
  } = e, S = (0, o.e7)([h.Z], () => null != h.Z.getGuild(t.id), [t.id]), {
startTime: L,
endTime: M
  } = (0, E.ZP)(n, v), B = (0, x.Z)(n.guild_id, n.id, v), P = a.useCallback(e => {
e.stopPropagation(), null != n && (0, s.B)(n);
  }, [n]), w = (0, p.Z)(v, n.id), A = (0, m.Z)(n);
  a.useEffect(() => {
I.Z.getGuildEventUserCounts(t.id, n.id, null != v ? [v] : []), I.Z.getGuildEventsForCurrentUser(t.id);
  }, [
t.id,
n.id,
v
  ]);
  let G = (0, b.KV)(n.recurrence_rule),
O = (null == n ? void 0 : n.scheduled_start_time) != null ? (0, C.lh)(w, L, new Date(null == n ? void 0 : n.scheduled_start_time)) : null;
  return (0, i.jsxs)('div', {
ref: g,
children: [
  (0, i.jsxs)('div', {
    className: D.header,
    children: [
      (0, i.jsx)(Z.z, {
        startTime: L.toISOString(),
        endTime: null == M ? void 0 : M.toISOString(),
        status: null != O ? O : n.status,
        eventType: n.entity_type,
        guildEventId: n.id,
        recurrenceId: v
      }),
      (0, i.jsx)(c.Heading, {
        id: r,
        variant: 'heading-lg/semibold',
        color: 'header-primary',
        className: D.title,
        children: n.name
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: D.body,
    children: [
      (0, i.jsx)(R, {
        guild: t,
        onClick: S ? P : void 0,
        onClose: d
      }),
      (0, i.jsx)(j.Z, {
        guildScheduledEvent: n,
        channel: l,
        onClose: d
      }),
      null != B && (0, i.jsx)(y, {
        userCount: B,
        onClick: u
      }),
      !_ && null != A && (0, i.jsx)(k, {
        creator: A,
        guildId: t.id,
        channelId: null == l ? void 0 : l.id
      }, A.id),
      null != n.description && (0, i.jsx)('div', {
        className: D.description,
        children: (0, i.jsx)(N.Z, {
          description: n.description,
          truncate: !1,
          guildId: t.id
        })
      })
    ]
  }),
  null != G && (0, i.jsx)('hr', {
    className: D.divider
  }),
  null != G && (0, i.jsx)(T.Z, {
    guildId: t.id,
    recurrenceRule: G,
    guildEventId: n.id,
    onRecurrenceClick: f,
    hideScroller: !0,
    activeRecurrenceId: v
  })
]
  });
}