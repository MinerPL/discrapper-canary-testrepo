"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  i = n("298386"),
  r = n("446674"),
  u = n("77078"),
  d = n("716241"),
  s = n("679653"),
  o = n("85448"),
  E = n("592407"),
  _ = n("923959"),
  A = n("305961"),
  I = n("27618"),
  c = n("697218"),
  T = n("311340"),
  R = n("701203"),
  N = n("49111"),
  S = n("782340"),
  M = n("751005");

function f(e) {
  var t, n;
  let {
    guildId: f,
    transitionState: L,
    onClose: D
  } = e, C = (0, r.useStateFromStores)([A.default], () => A.default.getGuild(f), [f]), m = null !== (t = null == C ? void 0 : C.safetyAlertsChannelId) && void 0 !== t ? t : null, [h, G] = a.useState(!!(null == C ? void 0 : C.hasFeature(N.GuildFeatures.RAID_ALERTS_DISABLED))), p = (0, R.useCanEnableRaidAlerts)(C), [O, x] = a.useState(null != m ? m : null !== (n = null == C ? void 0 : C.publicUpdatesChannelId) && void 0 !== n ? n : null), [v, g] = a.useState(!1), b = (0, r.useStateFromStoresArray)([_.default, c.default, I.default], () => {
    let e = _.default.getChannels(f),
      t = e[0, _.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
        let {
          channel: t
        } = e;
        return t.type === i.ChannelTypes.GUILD_TEXT
      }).map(e => {
        let {
          channel: t
        } = e;
        return {
          value: t.id,
          label: (0, s.computeChannelName)(t, c.default, I.default, !0)
        }
      });
    return null != m ? t : [...t]
  }, [f, m]), y = async () => {
    if (null == C) {
      (0, u.showToast)((0, u.createToast)(S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, u.ToastType.FAILURE));
      return
    }
    try {
      g(!0), h !== C.hasFeature(N.GuildFeatures.RAID_ALERTS_DISABLED) && await (0, T.setGuildRaidAlerts)(C, !h), O !== m && (await E.default.saveGuild(f, {
        safetyAlertsChannelId: O
      }, {
        throwErr: !0
      }), E.default.updateGuild({
        safetyAlertsChannelId: O
      }));
      let e = null != O ? O : m;
      if (null != e) {
        let t = {
          raid_alert_type: o.RaidAlertType.JOIN_RAID,
          enabled: h,
          raid_alert_channel_id: e,
          guild_id: f,
          channel_id: e
        };
        (0, d.trackWithMetadata)(N.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, t)
      }
      D()
    } catch (e) {
      (0, u.showToast)((0, u.createToast)(S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, u.ToastType.FAILURE))
    } finally {
      g(!1)
    }
  };
  return (0, l.jsxs)(u.ModalRoot, {
    transitionState: L,
    size: u.ModalSize.SMALL,
    children: [(0, l.jsx)(u.ModalHeader, {
      separator: !1,
      children: (0, l.jsx)(u.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
      })
    }), (0, l.jsxs)(u.ModalContent, {
      children: [(0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
      }), (0, l.jsx)("div", {
        className: M.mainChannelContainer,
        children: (0, l.jsxs)(u.Clickable, {
          className: M.enableAlertsContainer,
          onClick: () => {
            p && G(!h)
          },
          children: [(0, l.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-normal",
            children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
          }), (0, l.jsx)(u.Checkbox, {
            value: !h,
            className: M.enabledAlertsCheckbox,
            type: u.Checkbox.Types.INVERTED,
            disabled: !p
          })]
        })
      }), (0, l.jsxs)("div", {
        className: M.mainChannelContainer,
        children: [(0, l.jsx)(u.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: S.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
        }), (0, l.jsx)(u.SearchableSelect, {
          options: b,
          onChange: e => {
            x(e)
          },
          value: O,
          className: M.channelSelect,
          maxVisibleItems: 4
        }), (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
        })]
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      children: [(0, l.jsx)(u.Button, {
        onClick: y,
        color: u.Button.Colors.BRAND_NEW,
        look: u.Button.Looks.FILLED,
        submitting: v,
        children: S.default.Messages.SAVE
      }), (0, l.jsx)(u.Button, {
        onClick: D,
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        disabled: v,
        children: S.default.Messages.CANCEL
      })]
    })]
  })
}