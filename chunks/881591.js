n.d(t, {
  Z: function() {
return b;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(913527),
  o = n.n(l),
  c = n(442837),
  d = n(524437),
  u = n(481060),
  _ = n(239091),
  E = n(904245),
  I = n(43267),
  m = n(933557),
  T = n(294218),
  h = n(703656),
  N = n(962796),
  f = n(802463),
  p = n(682417),
  C = n(695346),
  g = n(592125),
  S = n(430824),
  A = n(375954),
  R = n(346656),
  x = n(240126),
  O = n(791914),
  M = n(981631),
  v = n(689938),
  L = n(166311),
  Z = n(699723);
let P = {
  offset: {
left: 4,
right: -12
  }
};

function b(e) {
  let {
setTab: t,
closePopout: n
  } = e, s = (0, c.e7)([f.Z], () => f.Z.getMessageReminders());
  a.useEffect(() => () => {
(0, N.Mf)();
  }, []);
  let [r, l] = a.useState(!1), o = a.useMemo(() => s.filter(e => null == e.dueAt || e.dueAt < new Date()), [s]), _ = r ? s : o;
  return (0, i.jsxs)('div', {
className: L.container,
children: [
  (0, i.jsx)(O.Z, {
    tab: d.X.TODOS,
    setTab: t,
    closePopout: n
  }),
  (0, i.jsxs)('div', {
    className: L.headerText,
    children: [
      (0, i.jsx)(u.Heading, {
        variant: 'heading-lg/bold',
        children: r ? v.Z.Messages.MESSAGE_REMINDERS_HEADER_ALL : v.Z.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
      }),
      (0, i.jsx)(u.Anchor, {
        onClick: () => l(!r),
        children: (0, i.jsx)(u.Text, {
          variant: 'text-sm/normal',
          color: 'text-link',
          children: r ? v.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({
            count: o.length
          }) : v.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({
            count: s.length
          })
        })
      })
    ]
  }),
  0 === _.length ? (0, i.jsx)(j, {}) : (0, i.jsx)(u.AdvancedScrollerThin, {
    children: _.map(e => (0, i.jsx)(D, {
      messageReminder: e
    }, e.messageId))
  })
]
  });
}

function D(e) {
  let t, {
  messageReminder: a
} = e,
s = a.complete,
l = (0, c.e7)([A.Z], () => A.Z.getMessage(a.channelId, a.messageId)),
{
  message: d,
  channel: f
} = (0, p.p)(a),
x = g.Z.getChannel(f.id),
O = (0, m.ZP)(x, !0),
b = null != O ? O : f.name,
D = (0, c.e7)([S.Z], () => S.Z.getGuild(null == f ? void 0 : f.guild_id)),
j = null != f ? (0, I.x)(f) : null,
U = null;
  return null != a.dueAt && (a.dueAt > new Date() ? (t = 'text-muted', U = v.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
duration: o().duration(a.dueAt.getTime() - Date.now(), 'millisecond').humanize()
  })) : (t = 'text-danger', U = v.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
duration: o().duration(Date.now() - a.dueAt.getTime(), 'millisecond').humanize()
  }))), (0, i.jsxs)('div', {
className: Z.container,
children: [
  (0, i.jsxs)('div', {
    className: L.messageHeader,
    children: [
      (0, i.jsxs)('div', {
        children: [
          (0, i.jsxs)('div', {
            className: L.messageInfo,
            children: [
              null != D ? (0, i.jsx)(R.Z, {
                className: L.guildIcon,
                guild: D,
                size: R.Z.Sizes.SMALL,
                active: !0
              }) : (0, i.jsx)(u.Avatar, {
                'aria-hidden': !0,
                src: null != j ? j : n(187293),
                size: u.AvatarSizes.SIZE_32
              }),
              (0, i.jsx)(u.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                selectable: !0,
                children: b
              })
            ]
          }),
          null != a.notes && a.notes.length > 0 ? (0, i.jsxs)(u.Text, {
            variant: 'text-sm/normal',
            color: 'text-muted',
            className: L.notes,
            selectable: !0,
            children: [
              (0, i.jsx)(u.FileIcon, {
                size: 'xxs',
                color: 'currentColor'
              }),
              a.notes
            ]
          }) : null,
          null != U ? (0, i.jsx)(u.Text, {
            variant: 'text-sm/medium',
            color: t,
            style: {
              marginTop: 4
            },
            children: U
          }) : null
        ]
      }),
      (0, i.jsxs)('div', {
        className: L.reminderActions,
        children: [
          (0, i.jsx)(u.TooltipContainer, {
            text: v.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
            children: (0, i.jsx)(u.Clickable, {
              onClick: e => (0, _.jW)(e, async () => {
                let {
                  default: e
                } = await n.e('6045').then(n.bind(n, 883150));
                return t => (0, i.jsx)(e, {
                  ...t,
                  message: d
                });
              }),
              className: L.clock,
              children: (0, i.jsx)(u.ClockIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor'
              })
            })
          }),
          (0, i.jsx)(u.Checkbox, {
            type: u.Checkbox.Types.INVERTED,
            value: s,
            onChange: (e, t) => {
              (0, N.Y_)(a.messageId, t);
            }
          })
        ]
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: r()(Z.messageContainer, L.unloadedMessage, {
      [L.disabledMessage]: s
    }),
    children: [
      (0, i.jsx)(T.Z, {
        message: d,
        channel: f,
        className: Z.message,
        compact: C.jU.getSetting(),
        animateAvatar: !1,
        focusProps: P,
        trackAnnouncementViews: !0
      }, d.id),
      (0, i.jsxs)('div', {
        className: L.actions,
        children: [
          null == l ? (0, i.jsx)(u.Button, {
            onClick: () => {
              E.Z.fetchMessages({
                channelId: a.channelId,
                limit: 1,
                jump: {
                  messageId: a.messageId,
                  flash: !1,
                  offset: 1
                }
              });
            },
            size: u.Button.Sizes.MIN,
            color: u.Button.Colors.TRANSPARENT,
            className: L.loadButton,
            children: (0, i.jsx)(u.Text, {
              variant: 'text-xs/normal',
              children: 'Load'
            })
          }) : null,
          (0, i.jsx)(u.Button, {
            onClick: () => {
              (0, h.uL)(M.Z5c.CHANNEL(null == f ? void 0 : f.getGuildId(), a.channelId, a.messageId));
            },
            size: u.Button.Sizes.MIN,
            color: u.Button.Colors.TRANSPARENT,
            className: L.loadButton,
            children: (0, i.jsx)(u.Text, {
              variant: 'text-xs/normal',
              children: v.Z.Messages.JUMP
            })
          })
        ]
      })
    ]
  })
]
  });
}

function j() {
  return (0, i.jsx)(x.Z, {
Icon: u.DoubleCheckmarkLargeIcon,
header: v.Z.Messages.MESSAGE_REMINDERS_EMPTY,
tip: v.Z.Messages.MESSAGE_REMINDERS_EMPTY_TIP
  });
}