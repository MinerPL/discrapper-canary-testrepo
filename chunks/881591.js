"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("913527"),
  d = n.n(u),
  c = n("442837"),
  f = n("524437"),
  E = n("481060"),
  _ = n("239091"),
  m = n("904245"),
  T = n("43267"),
  I = n("933557"),
  p = n("822893"),
  h = n("329461"),
  N = n("831267"),
  S = n("203965"),
  C = n("570907"),
  A = n("294218"),
  g = n("703656"),
  M = n("695346"),
  R = n("592125"),
  v = n("430824"),
  O = n("375954"),
  x = n("346656"),
  L = n("855693"),
  D = n("568570"),
  P = n("617808"),
  y = n("240126"),
  U = n("791914"),
  j = n("981631"),
  b = n("689938"),
  B = n("478398"),
  G = n("483373");
let F = {
  offset: {
    left: 4,
    right: -12
  }
};

function k(e) {
  let {
    setTab: t,
    closePopout: n
  } = e, l = (0, c.useStateFromStores)([h.default], () => h.default.getMessageReminders());
  a.useEffect(() => () => {
    (0, p.cleanupMessageReminders)()
  }, []);
  let [i, r] = a.useState(!1), o = a.useMemo(() => l.filter(e => null == e.dueAt || e.dueAt < new Date), [l]), u = i ? l : o, d = u.filter(e => !(0, N.savedMessageHasMetadata)(e));
  return (0, S.useMessageRemindersLoader)(d), (0, s.jsxs)("div", {
    className: B.container,
    children: [(0, s.jsx)(U.default, {
      tab: f.InboxTab.TODOS,
      setTab: t,
      closePopout: n
    }), (0, s.jsxs)("div", {
      className: B.headerText,
      children: [(0, s.jsx)(E.Heading, {
        variant: "heading-lg/bold",
        children: i ? b.default.Messages.MESSAGE_REMINDERS_HEADER_ALL : b.default.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
      }), (0, s.jsx)(E.Anchor, {
        onClick: () => r(!i),
        children: (0, s.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: i ? b.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({
            count: o.length
          }) : b.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({
            count: l.length
          })
        })
      })]
    }), 0 === u.length ? (0, s.jsx)(H, {}) : null, (0, s.jsx)(E.AdvancedScrollerThin, {
      children: u.map(e => (function(e) {
        return [(0, s.jsx)(w, {
          messageId: e.messageId
        }, e.messageId)]
      })(e))
    })]
  })
}

function w(e) {
  let t, {
      messageId: a
    } = e,
    l = (0, c.useStateFromStores)([h.default], () => h.default.getMessageReminders().find(e => e.messageId === a));
  o()(null != l, "should not be rendering a to-do message without a to-do message");
  let r = l.complete,
    u = (0, c.useStateFromStores)([O.default], () => O.default.getMessage(l.channelId, l.messageId)),
    {
      message: f,
      channel: N
    } = (0, C.getSavedMessageAndChannel)(l),
    S = R.default.getChannel(N.id),
    D = (0, I.default)(S, !0),
    y = null != D ? D : N.name,
    U = (0, c.useStateFromStores)([v.default], () => v.default.getGuild(null == N ? void 0 : N.guild_id)),
    k = null != N ? (0, T.getChannelIconURL)(N) : null,
    w = null;
  return null != l.dueAt && (l.dueAt > new Date ? (t = "text-muted", w = b.default.Messages.MESSAGE_REMINDERS_DUE_IN.format({
    duration: d().duration(l.dueAt.getTime() - Date.now(), "millisecond").humanize()
  })) : (t = "text-danger", w = b.default.Messages.MESSAGE_REMINDERS_OVERDUE.format({
    duration: d().duration(Date.now() - l.dueAt.getTime(), "millisecond").humanize()
  }))), (0, s.jsxs)("div", {
    className: G.container,
    children: [(0, s.jsxs)("div", {
      className: B.messageHeader,
      children: [(0, s.jsxs)("div", {
        children: [(0, s.jsxs)("div", {
          className: B.messageInfo,
          children: [null != U ? (0, s.jsx)(x.default, {
            className: B.guildIcon,
            guild: U,
            size: x.default.Sizes.SMALL,
            active: !0
          }) : (0, s.jsx)(E.Avatar, {
            "aria-hidden": !0,
            src: null != k ? k : n("788429"),
            size: E.AvatarSizes.SIZE_32
          }), (0, s.jsx)(E.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            selectable: !0,
            children: y
          })]
        }), null != l.notes && l.notes.length > 0 ? (0, s.jsxs)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: B.notes,
          selectable: !0,
          children: [(0, s.jsx)(P.default, {
            width: 12,
            height: 12
          }), l.notes]
        }) : null, null != w ? (0, s.jsx)(E.Text, {
          variant: "text-sm/medium",
          color: t,
          style: {
            marginTop: 4
          },
          children: w
        }) : null]
      }), (0, s.jsxs)("div", {
        className: B.reminderActions,
        children: [(0, s.jsx)(E.TooltipContainer, {
          text: b.default.Messages.MESSAGE_REMINDERS_SNOOZE,
          children: (0, s.jsx)(E.Clickable, {
            onClick: e => (0, _.openContextMenuLazy)(e, async () => {
              let {
                default: e
              } = await n.e("6045").then(n.bind(n, "883150"));
              return t => (0, s.jsx)(e, {
                ...t,
                message: f
              })
            }),
            className: B.clock,
            children: (0, s.jsx)(L.default, {})
          })
        }), (0, s.jsx)(E.Checkbox, {
          type: E.Checkbox.Types.INVERTED,
          value: r,
          onChange: (e, t) => {
            (0, p.toggleMessageReminders)(l.messageId, t)
          }
        })]
      })]
    }), (0, s.jsxs)("div", {
      className: i()(G.messageContainer, B.unloadedMessage, {
        [B.disabledMessage]: r
      }),
      children: [(0, s.jsx)(A.default, {
        message: f,
        channel: N,
        className: G.message,
        compact: M.MessageDisplayCompact.getSetting(),
        animateAvatar: !1,
        focusProps: F,
        trackAnnouncementViews: !0
      }, f.id), (0, s.jsxs)("div", {
        className: B.actions,
        children: [null == u ? (0, s.jsx)(E.Button, {
          onClick: () => {
            m.default.fetchMessages({
              channelId: l.channelId,
              limit: 1,
              jump: {
                messageId: l.messageId,
                flash: !1,
                offset: 1
              }
            })
          },
          size: E.Button.Sizes.MIN,
          color: E.Button.Colors.TRANSPARENT,
          className: B.loadButton,
          children: (0, s.jsx)(E.Text, {
            variant: "text-xs/normal",
            children: "Load"
          })
        }) : null, (0, s.jsx)(E.Button, {
          onClick: () => {
            (0, g.transitionTo)(j.Routes.CHANNEL(null == N ? void 0 : N.getGuildId(), l.channelId, l.messageId))
          },
          size: E.Button.Sizes.MIN,
          color: E.Button.Colors.TRANSPARENT,
          className: B.loadButton,
          children: (0, s.jsx)(E.Text, {
            variant: "text-xs/normal",
            children: b.default.Messages.JUMP
          })
        })]
      })]
    })]
  })
}

function H() {
  return (0, c.useStateFromStores)([h.default], () => h.default.getMessageReminders().length > 0) ? null : (0, s.jsx)(y.default, {
    Icon: D.default,
    header: b.default.Messages.MESSAGE_REMINDERS_EMPTY,
    tip: b.default.Messages.MESSAGE_REMINDERS_EMPTY_TIP
  })
}