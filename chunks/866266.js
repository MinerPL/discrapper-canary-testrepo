"use strict";
t.r(a), t.d(a, {
  default: function() {
    return N
  }
}), t("47120");
var l = t("735250"),
  s = t("470079"),
  n = t("106351"),
  r = t("442837"),
  d = t("481060"),
  o = t("367907"),
  i = t("933557"),
  u = t("177862"),
  A = t("434404"),
  _ = t("984933"),
  c = t("430824"),
  E = t("699516"),
  T = t("594174"),
  I = t("369994"),
  h = t("162157"),
  L = t("981631"),
  S = t("689938"),
  C = t("105139");

function N(e) {
  var a, t;
  let {
    guildId: N,
    transitionState: D,
    onClose: R
  } = e, x = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(N), [N]), f = null !== (a = null == x ? void 0 : x.safetyAlertsChannelId) && void 0 !== a ? a : null, [m, p] = s.useState(!!(null == x ? void 0 : x.hasFeature(L.GuildFeatures.RAID_ALERTS_DISABLED))), M = (0, h.useCanEnableRaidAlerts)(x), [U, b] = s.useState(null != f ? f : null !== (t = null == x ? void 0 : x.publicUpdatesChannelId) && void 0 !== t ? t : null), [v, y] = s.useState(!1), F = (0, r.useStateFromStoresArray)([_.default, T.default, E.default], () => {
    let e = _.default.getChannels(N)[0, _.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
      let {
        channel: a
      } = e;
      return a.type === n.ChannelTypes.GUILD_TEXT
    }).map(e => {
      let {
        channel: a
      } = e;
      return {
        value: a.id,
        label: (0, i.computeChannelName)(a, T.default, E.default, !0)
      }
    });
    return null != f ? e : [...e]
  }, [N, f]), g = async () => {
    if (null == x) {
      (0, d.showToast)((0, d.createToast)(S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, d.ToastType.FAILURE));
      return
    }
    try {
      y(!0), m !== x.hasFeature(L.GuildFeatures.RAID_ALERTS_DISABLED) && await (0, I.setGuildRaidAlerts)(x, !m), U !== f && (await A.default.saveGuild(N, {
        safetyAlertsChannelId: U
      }, {
        throwErr: !0
      }), A.default.updateGuild({
        safetyAlertsChannelId: U
      }));
      let e = null != U ? U : f;
      if (null != e) {
        let a = {
          raid_alert_type: u.RaidAlertType.JOIN_RAID,
          enabled: m,
          raid_alert_channel_id: e,
          guild_id: N,
          channel_id: e
        };
        (0, o.trackWithMetadata)(L.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, a)
      }
      R()
    } catch (e) {
      (0, d.showToast)((0, d.createToast)(S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, d.ToastType.FAILURE))
    } finally {
      y(!1)
    }
  };
  return (0, l.jsxs)(d.ModalRoot, {
    transitionState: D,
    size: d.ModalSize.SMALL,
    children: [(0, l.jsx)(d.ModalHeader, {
      separator: !1,
      children: (0, l.jsx)(d.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
      })
    }), (0, l.jsxs)(d.ModalContent, {
      children: [(0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
      }), (0, l.jsx)("div", {
        className: C.mainChannelContainer,
        children: (0, l.jsxs)(d.Clickable, {
          className: C.enableAlertsContainer,
          onClick: () => {
            M && p(!m)
          },
          children: [(0, l.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "text-normal",
            children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
          }), (0, l.jsx)(d.Checkbox, {
            value: !m,
            className: C.enabledAlertsCheckbox,
            type: d.Checkbox.Types.INVERTED,
            disabled: !M
          })]
        })
      }), (0, l.jsxs)("div", {
        className: C.mainChannelContainer,
        children: [(0, l.jsx)(d.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: S.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
        }), (0, l.jsx)(d.SearchableSelect, {
          options: F,
          onChange: e => {
            b(e)
          },
          value: U,
          className: C.channelSelect,
          maxVisibleItems: 4
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
        })]
      })]
    }), (0, l.jsxs)(d.ModalFooter, {
      children: [(0, l.jsx)(d.Button, {
        onClick: g,
        color: d.Button.Colors.BRAND_NEW,
        look: d.Button.Looks.FILLED,
        submitting: v,
        children: S.default.Messages.SAVE
      }), (0, l.jsx)(d.Button, {
        onClick: R,
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        disabled: v,
        children: S.default.Messages.CANCEL
      })]
    })]
  })
}