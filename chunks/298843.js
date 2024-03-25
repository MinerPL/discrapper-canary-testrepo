"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  d = n("77078"),
  u = n("267567"),
  o = n("817963"),
  c = n("534471"),
  f = n("42203"),
  E = n("305961"),
  h = n("476765"),
  _ = n("794352"),
  C = n("883310"),
  T = n("93550"),
  v = n("617347"),
  g = n("745049"),
  S = n("782340"),
  p = n("764718");

function N(e) {
  var t;
  let {
    transitionState: n,
    event: a,
    onSuccess: N,
    onClose: A
  } = e, I = (0, h.useUID)(), {
    guild_id: m,
    privacy_level: y
  } = a, R = (0, r.useStateFromStores)([f.default], () => f.default.getChannel(a.channel_id), [a]), O = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(m), [m]), {
    canManageGuildEvent: L
  } = (0, o.useManageResourcePermissions)(null != R ? R : O), G = L(a), x = (0, r.useStateFromStores)([u.default], () => u.default.isLurking(m), [m]), M = a.entity_type === g.GuildScheduledEventEntityTypes.STAGE_INSTANCE, [U, w] = i.useState(M), [P, {
    loading: k,
    error: D
  }] = (0, C.default)();
  if (!G) return null;
  let j = y === g.GuildScheduledEventPrivacyLevel.PUBLIC ? S.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL : S.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,
    b = () => {
      null == N || N(), A(), (0, c.setIsOnStartStageScreen)(!1)
    },
    H = async () => {
      await P(a, U, {
        onSuccess: b
      })
    };
  return (0, l.jsx)(d.ModalRoot, {
    transitionState: n,
    "aria-labelledby": I,
    children: (0, l.jsxs)(d.ModalContent, {
      className: p.content,
      children: [(0, l.jsx)("div", {
        className: p.previewCard,
        children: (0, l.jsx)(v.default, {
          guild: O,
          channel: R,
          name: a.name,
          description: null !== (t = a.description) && void 0 !== t ? t : void 0,
          imageSource: (0, T.default)(a),
          isActive: !1,
          isUserLurking: x,
          speakers: [],
          speakerCount: 0,
          rsvped: !0,
          guildEventId: a.id
        })
      }), (0, l.jsx)(d.Text, {
        color: "header-secondary",
        className: p.privacyLevel,
        variant: "text-sm/normal",
        children: S.default.Messages.START_EVENT_CONFIRMATION.format({
          privacyLevel: j,
          privacyLevelHook: (e, t) => y !== g.GuildScheduledEventPrivacyLevel.PUBLIC ? null : (0, l.jsxs)("div", {
            className: p.privacyLevel,
            children: [(0, l.jsx)(_.default, {
              width: 16,
              height: 16,
              className: p.publicIcon
            }), (0, l.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: e
            })]
          }, t)
        })
      }), (0, l.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        className: p.header,
        children: a.name
      }), M && (0, l.jsx)(d.Checkbox, {
        className: p.verticalSpacing,
        type: d.Checkbox.Types.INVERTED,
        value: U,
        onChange: e => {
          let {
            currentTarget: t
          } = e;
          return w(t.checked)
        },
        children: (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: S.default.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP
        })
      }), (0, l.jsxs)("div", {
        className: s(p.inline, p.buttons, p.verticalSpacing),
        children: [(0, l.jsx)(d.Button, {
          color: d.Button.Colors.PRIMARY,
          onClick: () => {
            A()
          },
          className: s(p.button, p.spacing),
          children: S.default.Messages.STAGE_BLOCKED_USERS_CANCEL
        }), (0, l.jsx)(d.Button, {
          color: d.Button.Colors.GREEN,
          onClick: H,
          submitting: k,
          className: p.button,
          children: S.default.Messages.START_EVENT
        })]
      }), null != D && null != D.getAnyErrorMessage() ? (0, l.jsx)(d.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        className: p.errorMessage,
        children: D.getAnyErrorMessage()
      }) : null]
    })
  })
}