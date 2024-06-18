"use strict";
t.d(s, {
  Z: function() {
    return x
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(106351),
  a = t(442837),
  r = t(481060),
  o = t(367907),
  c = t(933557),
  d = t(177862),
  u = t(434404),
  E = t(984933),
  _ = t(430824),
  I = t(699516),
  T = t(594174),
  N = t(369994),
  m = t(162157),
  S = t(981631),
  h = t(689938),
  g = t(954534);

function x(e) {
  var s, t;
  let {
    guildId: x,
    transitionState: C,
    onClose: R
  } = e, L = (0, a.e7)([_.Z], () => _.Z.getGuild(x), [x]), O = null !== (s = null == L ? void 0 : L.safetyAlertsChannelId) && void 0 !== s ? s : null, [A, p] = i.useState(!!(null == L ? void 0 : L.hasFeature(S.oNc.RAID_ALERTS_DISABLED))), M = (0, m.BT)(L), [f, v] = i.useState(null != O ? O : null !== (t = null == L ? void 0 : L.publicUpdatesChannelId) && void 0 !== t ? t : null), [D, Z] = i.useState(!1), j = (0, a.Wu)([E.ZP, T.default, I.Z], () => {
    let e = E.ZP.getChannels(x)[E.sH].filter(e => {
      let {
        channel: s
      } = e;
      return s.type === l.d.GUILD_TEXT
    }).map(e => {
      let {
        channel: s
      } = e;
      return {
        value: s.id,
        label: (0, c.F6)(s, T.default, I.Z, !0)
      }
    });
    return null != O ? e : [...e]
  }, [x, O]), U = async () => {
    if (null == L) {
      (0, r.showToast)((0, r.createToast)(h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, r.ToastType.FAILURE));
      return
    }
    try {
      Z(!0), A !== L.hasFeature(S.oNc.RAID_ALERTS_DISABLED) && await (0, N.f6)(L, !A), f !== O && (await u.Z.saveGuild(x, {
        safetyAlertsChannelId: f
      }, {
        throwErr: !0
      }), u.Z.updateGuild({
        safetyAlertsChannelId: f
      }));
      let e = null != f ? f : O;
      if (null != e) {
        let s = {
          raid_alert_type: d.wR.JOIN_RAID,
          enabled: A,
          raid_alert_channel_id: e,
          guild_id: x,
          channel_id: e
        };
        (0, o.yw)(S.rMx.GUILD_RAID_ALERTS_SETUP, s)
      }
      R()
    } catch (e) {
      (0, r.showToast)((0, r.createToast)(h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, r.ToastType.FAILURE))
    } finally {
      Z(!1)
    }
  };
  return (0, n.jsxs)(r.ModalRoot, {
    transitionState: C,
    size: r.ModalSize.SMALL,
    children: [(0, n.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, n.jsx)(r.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
      })
    }), (0, n.jsxs)(r.ModalContent, {
      children: [(0, n.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
      }), (0, n.jsx)("div", {
        className: g.mainChannelContainer,
        children: (0, n.jsxs)(r.Clickable, {
          className: g.enableAlertsContainer,
          onClick: () => {
            if (!!M) p(!A)
          },
          children: [(0, n.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-normal",
            children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
          }), (0, n.jsx)(r.Checkbox, {
            value: !A,
            className: g.enabledAlertsCheckbox,
            type: r.Checkbox.Types.INVERTED,
            disabled: !M
          })]
        })
      }), (0, n.jsxs)("div", {
        className: g.mainChannelContainer,
        children: [(0, n.jsx)(r.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
        }), (0, n.jsx)(r.SearchableSelect, {
          options: j,
          onChange: e => {
            v(e)
          },
          value: f,
          className: g.channelSelect,
          maxVisibleItems: 4
        }), (0, n.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
        })]
      })]
    }), (0, n.jsxs)(r.ModalFooter, {
      children: [(0, n.jsx)(r.Button, {
        onClick: U,
        color: r.Button.Colors.BRAND,
        look: r.Button.Looks.FILLED,
        submitting: D,
        children: h.Z.Messages.SAVE
      }), (0, n.jsx)(r.Button, {
        onClick: R,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        disabled: D,
        children: h.Z.Messages.CANCEL
      })]
    })]
  })
}