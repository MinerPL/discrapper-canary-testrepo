"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  },
  RaidAlertsSection: function() {
    return D
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("298386"),
  o = s("446674"),
  d = s("77078"),
  u = s("716241"),
  c = s("679653"),
  E = s("311340"),
  _ = s("701203"),
  I = s("85448"),
  T = s("567062"),
  S = s("42203"),
  f = s("923959"),
  m = s("957255"),
  N = s("27618"),
  g = s("697218"),
  h = s("593195"),
  C = s("592407"),
  R = s("690343"),
  x = s("49111"),
  L = s("782340"),
  O = s("854743");

function A(e) {
  let {
    guild: t,
    isExpanded: s,
    selectedChannelId: n,
    className: r
  } = e, T = (0, _.useCanEnableRaidAlerts)(t), f = t.canHaveRaidActivityAlerts(), [m, N] = l.useState(f), g = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(n), [n]), C = (0, c.default)(g), A = async () => {
    N(!m);
    try {
      var e;
      await (0, E.setGuildRaidAlerts)(t, !f);
      let s = null !== (e = null != n ? n : t.safetyAlertsChannelId) && void 0 !== e ? e : null;
      if (null != s) {
        let e = {
          raid_alert_type: I.RaidAlertType.JOIN_RAID,
          enabled: !f,
          raid_alert_channel_id: s,
          guild_id: t.id,
          channel_id: s
        };
        (0, u.trackWithMetadata)(x.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, e)
      }
    } catch (e) {
      (0, d.showToast)((0, d.createToast)(L.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, d.ToastType.FAILURE)), N(!f)
    }
  };
  return (0, a.jsxs)("div", {
    className: i(O.itemWrapper, r),
    children: [(0, a.jsxs)("div", {
      className: O.itemContent,
      children: [(0, a.jsx)(d.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: L.default.Messages.GUILD_SETTINGS_SAFETY_RAID_ALERTS_TITLE
      }), (0, a.jsx)(d.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: L.default.Messages.GUILD_SETTINGS_SAFETY_RAID_ALERTS_DESCRIPTION
      }), s || null == n ? null : (0, a.jsxs)(d.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        className: O.valuePill,
        children: [(0, a.jsx)(h.default, {
          width: 12,
          height: 12
        }), " ", C]
      })]
    }), (0, a.jsx)(R.default, {
      checked: m,
      onChange: A,
      disabled: !T || null == n
    })]
  })
}

function p(e) {
  var t;
  let {
    guild: s,
    selectedChannelId: l,
    setSelectedChannelId: n,
    className: E
  } = e, _ = null !== (t = s.safetyAlertsChannelId) && void 0 !== t ? t : null, T = (0, o.useStateFromStoresArray)([f.default, g.default, N.default, m.default], () => {
    let e = f.default.getChannels(s.id),
      t = e[0, f.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
        let {
          channel: t
        } = e;
        return t.type === r.ChannelTypes.GUILD_TEXT && m.default.can(x.Permissions.SEND_MESSAGES, t)
      }).map(e => {
        let {
          channel: t
        } = e;
        return {
          value: t.id,
          label: (0, c.computeChannelName)(t, g.default, N.default, !0)
        }
      });
    return null != _ ? t : [...t]
  }, [s.id, _]), S = async e => {
    n(e);
    try {
      if (e !== _ && (await C.default.saveGuild(s.id, {
          safetyAlertsChannelId: e
        }, {
          throwErr: !0
        }), C.default.updateGuild({
          safetyAlertsChannelId: e
        })), null != e) {
        let t = {
          raid_alert_type: I.RaidAlertType.JOIN_RAID,
          enabled: s.canHaveRaidActivityAlerts(),
          raid_alert_channel_id: e,
          guild_id: s.id,
          channel_id: e
        };
        (0, u.trackWithMetadata)(x.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, t)
      }
    } catch (e) {
      (0, d.showToast)((0, d.createToast)(L.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, d.ToastType.FAILURE)), n(_)
    }
  };
  return (0, a.jsx)("div", {
    className: i(O.itemBodyContainer, E),
    children: (0, a.jsxs)("div", {
      className: O.itemBodyInner,
      children: [(0, a.jsx)(d.FormTitle, {
        children: L.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
      }), (0, a.jsx)(d.SearchableSelect, {
        wrapperClassName: O.bringToFront,
        options: T,
        onChange: S,
        value: l,
        maxVisibleItems: 5
      }), (0, a.jsx)(d.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        children: L.default.Messages.GUILD_SETTINGS_SAFETY_NOTIFICATIONS_CHANNEL_DESCRIPTION
      })]
    })
  })
}

function M(e) {
  var t, s;
  let {
    guild: n
  } = e, [i, r] = l.useState(!1), o = null !== (t = n.safetyAlertsChannelId) && void 0 !== t ? t : null, [d, u] = l.useState(null != o ? o : null !== (s = null == n ? void 0 : n.publicUpdatesChannelId) && void 0 !== s ? s : null);
  return (0, a.jsx)(T.default, {
    renderHeader: (0, a.jsx)(A, {
      isExpanded: i,
      guild: n,
      selectedChannelId: d
    }),
    isExpanded: i,
    onExpand: () => r(!i),
    children: (0, a.jsx)(p, {
      guild: n,
      selectedChannelId: d,
      setSelectedChannelId: u
    })
  })
}

function D(e) {
  var t, s;
  let {
    guild: n
  } = e, i = null !== (t = n.safetyAlertsChannelId) && void 0 !== t ? t : null, [r, o] = l.useState(null != i ? i : null !== (s = null == n ? void 0 : n.publicUpdatesChannelId) && void 0 !== s ? s : null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(A, {
      isExpanded: !0,
      guild: n,
      selectedChannelId: r,
      className: O.noPadding
    }), (0, a.jsx)(p, {
      guild: n,
      selectedChannelId: r,
      setSelectedChannelId: o,
      className: O.noPadding
    })]
  })
}