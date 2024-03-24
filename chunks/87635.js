"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("458960"),
  o = n("65597"),
  u = n("77078"),
  d = n("206230"),
  c = n("679653"),
  f = n("419830"),
  h = n("42203"),
  C = n("26989"),
  p = n("538137"),
  m = n("593195"),
  E = n("578706"),
  g = n("347895"),
  S = n("129092"),
  T = n("726274"),
  A = n("290886"),
  _ = n("205454"),
  M = n("782340"),
  I = n("490259");

function N(e) {
  let {
    action: t
  } = e, n = (0, o.useStateFromStores)([h.default], () => h.default.getChannel(t.channelId)), a = (0, c.default)(n, !0);
  return null == n ? (0, s.jsx)(u.Text, {
    variant: "text-xxs/normal",
    color: "header-secondary",
    children: M.default.Messages.IN_CHANNEL.format({
      channelName: M.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
    })
  }) : (0, s.jsx)(u.Text, {
    variant: "text-xxs/normal",
    color: "header-secondary",
    children: M.default.Messages.IN_CHANNEL.format({
      channelName: a
    })
  })
}

function v(e) {
  var t;
  let {
    channelId: n,
    emojiId: a,
    emojiName: l
  } = e, i = (0, o.useStateFromStores)([h.default], () => h.default.getChannel(n));
  if (null == i) return null;
  let r = null !== (t = (0, f.getChannelIconComponent)(i)) && void 0 !== t ? t : m.default;
  return (0, s.jsx)(_.default, {
    emojiId: a,
    emojiName: l,
    size: _.CTAEmojiSize.MEDIUM,
    defaultComponent: (0, s.jsx)(r, {
      className: I.channelIcon
    })
  })
}

function x(e) {
  var t, n, l, c;
  let {
    guildId: f,
    channel: h,
    className: C
  } = e, {
    channelAction: m,
    completed: A
  } = (0, T.useMemberActionsForChannel)(f, h), _ = (0, T.useNextMemberAction)(f, null == m ? void 0 : m.channelId), x = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), L = (null == m ? void 0 : m.actionType) === S.NewMemberActionTypes.VIEW, y = (0, u.useToken)(u.tokens.colors.WHITE), [R, O] = a.useState(!1), [D] = a.useState(new r.default.Value(0)), [P] = a.useState(new r.default.Value(0));
  a.useEffect(() => {
    A ? r.default.timing(D, {
      toValue: 0,
      duration: x ? 1 : 350,
      easing: r.default.Easing.quad,
      delay: L ? 0 : 500
    }).start(() => O(!0)) : r.default.timing(D, {
      toValue: 1,
      duration: x ? 1 : 350,
      easing: r.default.Easing.quad,
      delay: 400
    }).start()
  }, [A, D, L, x]), a.useEffect(() => {
    A && R && r.default.timing(P, {
      toValue: 1,
      duration: x ? 0 : 350,
      easing: r.default.Easing.quad,
      delay: 400
    }).start()
  }, [A, P, R, x]);
  let b = a.useCallback(() => {
    null != _ && (0, g.selectNewMemberActionChannel)(f, _.channelId)
  }, [f, _]);
  return null == m || L && !R ? null : (0, s.jsx)("div", {
    className: i(I.container, C),
    children: R && null != _ ? (0, s.jsx)(r.default.div, {
      style: {
        marginBottom: P.interpolate({
          inputRange: [0, 1],
          outputRange: [-60, 0]
        })
      },
      children: (0, s.jsxs)(u.Clickable, {
        className: i(I.banner, I.clickable),
        onClick: b,
        children: [(0, s.jsx)(v, {
          channelId: _.channelId,
          emojiId: null === (t = _.emoji) || void 0 === t ? void 0 : t.id,
          emojiName: null == _ ? void 0 : null === (n = _.emoji) || void 0 === n ? void 0 : n.name
        }), (0, s.jsxs)("div", {
          className: I.text,
          children: [(0, s.jsx)(u.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: M.default.Messages.MEMBER_ACTIONS_NEXT_STEP.format({
              step: _.title
            })
          }), (0, s.jsx)(N, {
            action: _
          })]
        }), (0, s.jsx)("div", {
          className: I.iconCircle,
          children: (0, s.jsx)(p.default, {
            width: 16,
            height: 16,
            color: y.hex(),
            className: I.nextIcon
          })
        })]
      })
    }) : (0, s.jsxs)(r.default.div, {
      className: I.banner,
      style: {
        marginBottom: D.interpolate({
          inputRange: [0, 1],
          outputRange: [-60, 0]
        })
      },
      children: [(0, s.jsx)(v, {
        channelId: m.channelId,
        emojiId: null === (l = m.emoji) || void 0 === l ? void 0 : l.id,
        emojiName: null == m ? void 0 : null === (c = m.emoji) || void 0 === c ? void 0 : c.name
      }), (0, s.jsxs)("div", {
        className: I.text,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: m.title
        }), (0, s.jsx)(u.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: M.default.Messages.MEMBER_ACTION_CHAT
        })]
      }), A ? (0, s.jsx)(E.default, {
        className: I.completed,
        backgroundColor: y.hex(),
        width: 20,
        height: 20
      }) : null]
    })
  })
}

function L(e) {
  let {
    guildId: t,
    channel: n,
    className: a
  } = e, l = (0, A.useCanSeeOnboardingHome)(t), i = (0, o.useStateFromStores)([C.default], () => {
    var e;
    return (null === (e = C.default.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0
  }), r = (0, T.useAllActionsCompleted)(t);
  return r || i || !l ? null : (0, s.jsx)(x, {
    guildId: t,
    channel: n,
    className: a
  })
}