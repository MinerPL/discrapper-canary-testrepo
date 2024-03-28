"use strict";
t.r(n), t.d(n, {
  default: function() {
    return T
  }
}), t("47120");
var l = t("735250"),
  a = t("470079"),
  i = t("803997"),
  s = t.n(i),
  r = t("442837"),
  c = t("481060"),
  d = t("41776"),
  u = t("889161"),
  o = t("513449"),
  v = t("592125"),
  h = t("430824"),
  E = t("153124"),
  f = t("752916"),
  m = t("305298"),
  C = t("405613"),
  g = t("460838"),
  x = t("765305"),
  N = t("689938"),
  S = t("670794");

function T(e) {
  var n;
  let {
    transitionState: t,
    event: i,
    onSuccess: T,
    onClose: p
  } = e, y = (0, E.useUID)(), {
    guild_id: _,
    privacy_level: I
  } = i, A = (0, r.useStateFromStores)([v.default], () => v.default.getChannel(i.channel_id), [i]), j = (0, r.useStateFromStores)([h.default], () => h.default.getGuild(_), [_]), {
    canManageGuildEvent: k
  } = (0, u.useManageResourcePermissions)(null != A ? A : j), G = k(i), L = (0, r.useStateFromStores)([d.default], () => d.default.isLurking(_), [_]), R = i.entity_type === x.GuildScheduledEventEntityTypes.STAGE_INSTANCE, [w, b] = a.useState(R), [M, {
    loading: P,
    error: O
  }] = (0, m.default)();
  if (!G) return null;
  let V = I === x.GuildScheduledEventPrivacyLevel.PUBLIC ? N.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL : N.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,
    U = () => {
      null == T || T(), p(), (0, o.setIsOnStartStageScreen)(!1)
    },
    B = async () => {
      await M(i, w, {
        onSuccess: U
      })
    };
  return (0, l.jsx)(c.ModalRoot, {
    transitionState: t,
    "aria-labelledby": y,
    children: (0, l.jsxs)(c.ModalContent, {
      className: S.content,
      children: [(0, l.jsx)("div", {
        className: S.previewCard,
        children: (0, l.jsx)(g.default, {
          guild: j,
          channel: A,
          name: i.name,
          description: null !== (n = i.description) && void 0 !== n ? n : void 0,
          imageSource: (0, C.default)(i),
          isActive: !1,
          isUserLurking: L,
          speakers: [],
          speakerCount: 0,
          rsvped: !0,
          guildEventId: i.id
        })
      }), (0, l.jsx)(c.Text, {
        color: "header-secondary",
        className: S.privacyLevel,
        variant: "text-sm/normal",
        children: N.default.Messages.START_EVENT_CONFIRMATION.format({
          privacyLevel: V,
          privacyLevelHook: (e, n) => I !== x.GuildScheduledEventPrivacyLevel.PUBLIC ? null : (0, l.jsxs)("div", {
            className: S.privacyLevel,
            children: [(0, l.jsx)(f.default, {
              width: 16,
              height: 16,
              className: S.publicIcon
            }), (0, l.jsx)(c.Text, {
              variant: "text-sm/normal",
              children: e
            })]
          }, n)
        })
      }), (0, l.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: S.header,
        children: i.name
      }), R && (0, l.jsx)(c.Checkbox, {
        className: S.verticalSpacing,
        type: c.Checkbox.Types.INVERTED,
        value: w,
        onChange: e => {
          let {
            currentTarget: n
          } = e;
          return b(n.checked)
        },
        children: (0, l.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: N.default.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP
        })
      }), (0, l.jsxs)("div", {
        className: s()(S.inline, S.buttons, S.verticalSpacing),
        children: [(0, l.jsx)(c.Button, {
          color: c.Button.Colors.PRIMARY,
          onClick: () => {
            p()
          },
          className: s()(S.button, S.spacing),
          children: N.default.Messages.STAGE_BLOCKED_USERS_CANCEL
        }), (0, l.jsx)(c.Button, {
          color: c.Button.Colors.GREEN,
          onClick: B,
          submitting: P,
          className: S.button,
          children: N.default.Messages.START_EVENT
        })]
      }), null != O && null != O.getAnyErrorMessage() ? (0, l.jsx)(c.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        className: S.errorMessage,
        children: O.getAnyErrorMessage()
      }) : null]
    })
  })
}