"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var a = n("735250"),
  i = n("470079"),
  d = n("831209"),
  l = n("442837"),
  s = n("481060"),
  o = n("688465"),
  r = n("430824"),
  u = n("630641"),
  c = n("626135"),
  _ = n("369994"),
  E = n("162157"),
  I = n("533244"),
  A = n("487419"),
  D = n("821312"),
  N = n("676770"),
  R = n("981631"),
  T = n("689938"),
  f = n("693297");

function h(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: h,
    analyticsData: L
  } = e, C = (0, l.useStateFromStores)([r.default], () => r.default.getGuild(t), [t]), M = !!(null == C ? void 0 : C.hasFeature(R.GuildFeatures.INVITES_DISABLED)), [S] = i.useState(!1), [x, m] = i.useState(N.DEFAULT_LOCKDOWN_DURATION), g = (0, l.useStateFromStores)([A.default], () => A.default.getGuildIncident(t)), O = (0, E.useCanEnableRaidAlerts)(C), v = (0, I.hasInvitesDisabled)(g) || M, p = (0, I.hasDMsDisabled)(g), [G, k] = i.useState(v), [b, j] = i.useState(p), [F, B] = i.useState(!1), y = G !== v || b !== p || F, U = M && !O;
  if (null == C) return h(), null;

  function w() {
    k(e => !e)
  }
  return (0, a.jsxs)(s.ModalRoot, {
    transitionState: n,
    size: s.ModalSize.MEDIUM,
    children: [(0, a.jsx)(s.ModalHeader, {
      separator: !0,
      children: (0, a.jsxs)("div", {
        className: f.headerContainer,
        children: [(0, a.jsx)(u.default, {
          color: d.default.INTERACTIVE_NORMAL,
          width: 16,
          height: 16
        }), (0, a.jsx)(s.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: T.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }), (0, a.jsx)(o.default, {})]
      })
    }), (0, a.jsx)(s.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: f.mainContainer,
        children: [(0, a.jsx)(s.Select, {
          placeholder: T.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, N.getTimeframes)(),
          select: e => {
            m(e), B(!0)
          },
          isSelected: e => e === x,
          serialize: e => String(e)
        }), (0, a.jsxs)("div", {
          className: f.pauseContainer,
          children: [(0, a.jsxs)("div", {
            className: f.pauseText,
            children: [(0, a.jsx)(s.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: T.default.Messages.DISABLE_INVITES
            }), (0, a.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: T.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, a.jsx)(s.Tooltip, {
            text: T.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
            shouldShow: M,
            children: e => (0, a.jsx)("div", {
              ...e,
              children: (0, a.jsx)(s.Switch, {
                className: f.toggle,
                onChange: w,
                checked: G,
                disabled: U
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: f.pauseContainer,
          children: [(0, a.jsxs)("div", {
            className: f.pauseText,
            children: [(0, a.jsx)(s.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: T.default.Messages.DISABLE_DMS
            }), (0, a.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: T.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, a.jsx)(s.Switch, {
            className: f.toggle,
            onChange: function() {
              j(e => !e)
            },
            checked: b
          })]
        })]
      })
    }), (0, a.jsxs)(s.ModalFooter, {
      children: [(0, a.jsx)(s.Button, {
        onClick: () => {
          (v || p) && !G && !b ? ((0, _.setGuildIncidentActions)(C.id, !1, !1), (0, s.openModalLazy)(() => Promise.resolve(e => (0, a.jsx)(D.default, {
            ...e,
            guildId: t
          })))) : (0, _.setGuildIncidentActions)(C.id, G, b, x);
          let {
            source: e,
            alertType: n,
            messageId: i
          } = L;
          c.default.track(R.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: i,
            raid_alert_type: n,
            intervention_type_enabled: (0, I.getEnabledInterventions)(G, b),
            intervention_type_disabled: (0, I.getDisabledInterventions)(G, b),
            duration: 60 * x
          }), h()
        },
        color: s.Button.Colors.BRAND_NEW,
        look: s.Button.Looks.FILLED,
        submitting: S,
        disabled: !y,
        children: T.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }), (0, a.jsx)(s.Button, {
        onClick: h,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        disabled: S,
        children: T.default.Messages.CANCEL
      })]
    })]
  })
}