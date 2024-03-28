"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("831209"),
  d = a("442837"),
  i = a("481060"),
  r = a("688465"),
  u = a("430824"),
  o = a("630641"),
  c = a("626135"),
  _ = a("369994"),
  I = a("162157"),
  E = a("533244"),
  h = a("487419"),
  D = a("676770"),
  T = a("981631"),
  A = a("689938"),
  S = a("399866");

function N(e) {
  let {
    guildId: t,
    transitionState: N,
    onClose: R,
    analyticsData: f
  } = e, L = (0, d.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), g = !!(null == L ? void 0 : L.hasFeature(T.GuildFeatures.INVITES_DISABLED)), [x] = n.useState(!1), [C, M] = n.useState(D.DEFAULT_LOCKDOWN_DURATION), m = (0, d.useStateFromStores)([h.default], () => h.default.getGuildIncident(t)), p = (0, I.useCanEnableRaidAlerts)(L), G = (0, E.hasInvitesDisabled)(m) || g, v = (0, E.hasDMsDisabled)(m), [O, j] = n.useState(G), [b, y] = n.useState(v), [U, k] = n.useState(!1), B = O !== G || b !== v || U, w = g && !p;
  if (null == L) return R(), null;

  function F() {
    j(e => !e)
  }
  return (0, l.jsxs)(i.ModalRoot, {
    transitionState: N,
    size: i.ModalSize.MEDIUM,
    children: [(0, l.jsx)(i.ModalHeader, {
      separator: !0,
      children: (0, l.jsxs)("div", {
        className: S.headerContainer,
        children: [(0, l.jsx)(o.default, {
          color: s.default.INTERACTIVE_NORMAL,
          width: 16,
          height: 16
        }), (0, l.jsx)(i.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: A.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }), (0, l.jsx)(r.default, {})]
      })
    }), (0, l.jsx)(i.ModalContent, {
      children: (0, l.jsxs)("div", {
        className: S.mainContainer,
        children: [(0, l.jsx)(i.Select, {
          placeholder: A.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, D.getTimeframes)(),
          select: e => {
            M(e), k(!0)
          },
          isSelected: e => e === C,
          serialize: e => String(e)
        }), (0, l.jsxs)("div", {
          className: S.pauseContainer,
          children: [(0, l.jsxs)("div", {
            className: S.pauseText,
            children: [(0, l.jsx)(i.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: A.default.Messages.DISABLE_INVITES
            }), (0, l.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: A.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, l.jsx)(i.Tooltip, {
            text: A.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
            shouldShow: g,
            children: e => (0, l.jsx)("div", {
              ...e,
              children: (0, l.jsx)(i.Switch, {
                className: S.toggle,
                onChange: F,
                checked: O,
                disabled: w
              })
            })
          })]
        }), (0, l.jsxs)("div", {
          className: S.pauseContainer,
          children: [(0, l.jsxs)("div", {
            className: S.pauseText,
            children: [(0, l.jsx)(i.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: A.default.Messages.DISABLE_DMS
            }), (0, l.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: A.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, l.jsx)(i.Switch, {
            className: S.toggle,
            onChange: function() {
              y(e => !e)
            },
            checked: b
          })]
        })]
      })
    }), (0, l.jsxs)(i.ModalFooter, {
      children: [(0, l.jsx)(i.Button, {
        onClick: () => {
          (G || v) && !O && !b ? ((0, _.setGuildIncidentActions)(L.id, !1, !1), (0, i.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("53324")]).then(a.bind(a, "821312"));
            return a => (0, l.jsx)(e, {
              ...a,
              guildId: t
            })
          })) : (0, _.setGuildIncidentActions)(L.id, O, b, C);
          let {
            source: e,
            alertType: n,
            messageId: s
          } = f;
          c.default.track(T.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: s,
            raid_alert_type: n,
            intervention_type_enabled: (0, E.getEnabledInterventions)(O, b),
            intervention_type_disabled: (0, E.getDisabledInterventions)(O, b),
            duration: 60 * C
          }), R()
        },
        color: i.Button.Colors.BRAND_NEW,
        look: i.Button.Looks.FILLED,
        submitting: x,
        disabled: !B,
        children: A.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }), (0, l.jsx)(i.Button, {
        onClick: R,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        disabled: x,
        children: A.default.Messages.CANCEL
      })]
    })]
  })
}