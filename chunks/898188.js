"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("748780"),
  o = n("399606"),
  u = n("481060"),
  d = n("607070"),
  c = n("933557"),
  f = n("471445"),
  h = n("592125"),
  m = n("271383"),
  p = n("877453"),
  E = n("93879"),
  C = n("441674"),
  g = n("526120"),
  S = n("734893"),
  _ = n("655359"),
  T = n("931261"),
  I = n("305762"),
  A = n("689938"),
  v = n("953116");

function N(e) {
  let {
    action: t
  } = e, n = (0, o.useStateFromStores)([h.default], () => h.default.getChannel(t.channelId)), l = (0, c.default)(n, !0);
  return null == n ? (0, a.jsx)(u.Text, {
    variant: "text-xxs/normal",
    color: "header-secondary",
    children: A.default.Messages.IN_CHANNEL.format({
      channelName: A.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
    })
  }) : (0, a.jsx)(u.Text, {
    variant: "text-xxs/normal",
    color: "header-secondary",
    children: A.default.Messages.IN_CHANNEL.format({
      channelName: l
    })
  })
}

function x(e) {
  var t;
  let {
    channelId: n,
    emojiId: l,
    emojiName: s
  } = e, i = (0, o.useStateFromStores)([h.default], () => h.default.getChannel(n));
  if (null == i) return null;
  let r = null !== (t = (0, f.getChannelIconComponent)(i)) && void 0 !== t ? t : E.default;
  return (0, a.jsx)(I.default, {
    emojiId: l,
    emojiName: s,
    size: I.CTAEmojiSize.MEDIUM,
    defaultComponent: (0, a.jsx)(r, {
      className: v.channelIcon
    })
  })
}

function M(e) {
  var t, n, s, c;
  let {
    guildId: f,
    channel: h,
    className: m
  } = e, {
    channelAction: E,
    completed: T
  } = (0, _.useMemberActionsForChannel)(f, h), I = (0, _.useNextMemberAction)(f, null == E ? void 0 : E.channelId), M = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), R = (null == E ? void 0 : E.actionType) === S.NewMemberActionTypes.VIEW, L = (0, u.useToken)(u.tokens.colors.WHITE), [y, O] = l.useState(!1), [j] = l.useState(new r.default.Value(0)), [P] = l.useState(new r.default.Value(0));
  l.useEffect(() => {
    T ? r.default.timing(j, {
      toValue: 0,
      duration: M ? 1 : 350,
      easing: r.default.Easing.quad,
      delay: R ? 0 : 500
    }).start(() => O(!0)) : r.default.timing(j, {
      toValue: 1,
      duration: M ? 1 : 350,
      easing: r.default.Easing.quad,
      delay: 400
    }).start()
  }, [T, j, R, M]), l.useEffect(() => {
    T && y && r.default.timing(P, {
      toValue: 1,
      duration: M ? 0 : 350,
      easing: r.default.Easing.quad,
      delay: 400
    }).start()
  }, [T, P, y, M]);
  let D = l.useCallback(() => {
    null != I && (0, g.selectNewMemberActionChannel)(f, I.channelId)
  }, [f, I]);
  return null == E || R && !y ? null : (0, a.jsx)("div", {
    className: i()(v.container, m),
    children: y && null != I ? (0, a.jsx)(r.default.div, {
      style: {
        marginBottom: P.interpolate({
          inputRange: [0, 1],
          outputRange: [-60, 0]
        })
      },
      children: (0, a.jsxs)(u.Clickable, {
        className: i()(v.banner, v.clickable),
        onClick: D,
        children: [(0, a.jsx)(x, {
          channelId: I.channelId,
          emojiId: null === (t = I.emoji) || void 0 === t ? void 0 : t.id,
          emojiName: null == I ? void 0 : null === (n = I.emoji) || void 0 === n ? void 0 : n.name
        }), (0, a.jsxs)("div", {
          className: v.text,
          children: [(0, a.jsx)(u.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: A.default.Messages.MEMBER_ACTIONS_NEXT_STEP.format({
              step: I.title
            })
          }), (0, a.jsx)(N, {
            action: I
          })]
        }), (0, a.jsx)("div", {
          className: v.iconCircle,
          children: (0, a.jsx)(p.default, {
            width: 16,
            height: 16,
            color: L.hex(),
            className: v.nextIcon
          })
        })]
      })
    }) : (0, a.jsxs)(r.default.div, {
      className: v.banner,
      style: {
        marginBottom: j.interpolate({
          inputRange: [0, 1],
          outputRange: [-60, 0]
        })
      },
      children: [(0, a.jsx)(x, {
        channelId: E.channelId,
        emojiId: null === (s = E.emoji) || void 0 === s ? void 0 : s.id,
        emojiName: null == E ? void 0 : null === (c = E.emoji) || void 0 === c ? void 0 : c.name
      }), (0, a.jsxs)("div", {
        className: v.text,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: E.title
        }), (0, a.jsx)(u.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: A.default.Messages.MEMBER_ACTION_CHAT
        })]
      }), T ? (0, a.jsx)(C.default, {
        className: v.completed,
        backgroundColor: L.hex(),
        width: 20,
        height: 20
      }) : null]
    })
  })
}

function R(e) {
  let {
    guildId: t,
    channel: n,
    className: l
  } = e, s = (0, T.useCanSeeOnboardingHome)(t), i = (0, o.useStateFromStores)([m.default], () => {
    var e;
    return (null === (e = m.default.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0
  });
  return (0, _.useAllActionsCompleted)(t) || i || !s ? null : (0, a.jsx)(M, {
    guildId: t,
    channel: n,
    className: l
  })
}