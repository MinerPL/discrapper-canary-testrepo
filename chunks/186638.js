"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("171210"),
  d = n("446674"),
  s = n("77078"),
  r = n("298878"),
  u = n("305961"),
  o = n("45029"),
  c = n("599110"),
  _ = n("311340"),
  E = n("701203"),
  I = n("311161"),
  f = n("54346"),
  A = n("421127"),
  R = n("49111"),
  S = n("782340"),
  m = n("373731");

function h(e) {
  let {
    guildId: t,
    transitionState: h,
    onClose: D,
    analyticsData: T
  } = e, N = (0, d.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), L = !!(null == N ? void 0 : N.hasFeature(R.GuildFeatures.INVITES_DISABLED)), [x] = a.useState(!1), [M, g] = a.useState(A.DEFAULT_LOCKDOWN_DURATION), p = (0, d.useStateFromStores)([f.default], () => f.default.getGuildIncident(t)), C = (0, E.useCanEnableRaidAlerts)(N), v = (0, I.hasInvitesDisabled)(p) || L, G = (0, I.hasDMsDisabled)(p), [b, O] = a.useState(v), [j, y] = a.useState(G), [k, U] = a.useState(!1), B = b !== v || j !== G || k, F = L && !C;
  if (null == N) return D(), null;

  function P() {
    O(e => !e)
  }
  return (0, i.jsxs)(s.ModalRoot, {
    transitionState: h,
    size: s.ModalSize.MEDIUM,
    children: [(0, i.jsx)(s.ModalHeader, {
      separator: !0,
      children: (0, i.jsxs)("div", {
        className: m.headerContainer,
        children: [(0, i.jsx)(o.default, {
          color: l.default.INTERACTIVE_NORMAL,
          width: 16,
          height: 16
        }), (0, i.jsx)(s.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: S.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }), (0, i.jsx)(r.default, {})]
      })
    }), (0, i.jsx)(s.ModalContent, {
      children: (0, i.jsxs)("div", {
        className: m.mainContainer,
        children: [(0, i.jsx)(s.Select, {
          placeholder: S.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, A.getTimeframes)(),
          select: e => {
            g(e), U(!0)
          },
          isSelected: e => e === M,
          serialize: e => String(e)
        }), (0, i.jsxs)("div", {
          className: m.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: m.pauseText,
            children: [(0, i.jsx)(s.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: S.default.Messages.DISABLE_INVITES
            }), (0, i.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: S.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, i.jsx)(s.Tooltip, {
            text: S.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
            shouldShow: L,
            children: e => (0, i.jsx)("div", {
              ...e,
              children: (0, i.jsx)(s.Switch, {
                className: m.toggle,
                onChange: P,
                checked: b,
                disabled: F
              })
            })
          })]
        }), (0, i.jsxs)("div", {
          className: m.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: m.pauseText,
            children: [(0, i.jsx)(s.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: S.default.Messages.DISABLE_DMS
            }), (0, i.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: S.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, i.jsx)(s.Switch, {
            className: m.toggle,
            onChange: function() {
              y(e => !e)
            },
            checked: j
          })]
        })]
      })
    }), (0, i.jsxs)(s.ModalFooter, {
      children: [(0, i.jsx)(s.Button, {
        onClick: () => {
          (v || G) && !b && !j ? ((0, _.setGuildIncidentActions)(N.id, !1, !1), (0, s.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("187317").then(n.bind(n, "187317"));
            return n => (0, i.jsx)(e, {
              ...n,
              guildId: t
            })
          })) : (0, _.setGuildIncidentActions)(N.id, b, j, M);
          let {
            source: e,
            alertType: a,
            messageId: l
          } = T;
          c.default.track(R.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: l,
            raid_alert_type: a,
            intervention_type_enabled: (0, I.getEnabledInterventions)(b, j),
            intervention_type_disabled: (0, I.getDisabledInterventions)(b, j),
            duration: 60 * M
          }), D()
        },
        color: s.Button.Colors.BRAND_NEW,
        look: s.Button.Looks.FILLED,
        submitting: x,
        disabled: !B,
        children: S.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }), (0, i.jsx)(s.Button, {
        onClick: D,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        disabled: x,
        children: S.default.Messages.CANCEL
      })]
    })]
  })
}