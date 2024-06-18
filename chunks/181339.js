"use strict";
t.d(s, {
  Z: function() {
    return f
  },
  w: function() {
    return v
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(106351),
  o = t(442837),
  c = t(481060),
  d = t(367907),
  u = t(933557),
  E = t(369994),
  _ = t(162157),
  I = t(177862),
  T = t(11265),
  N = t(592125),
  m = t(984933),
  S = t(496675),
  h = t(699516),
  g = t(594174),
  x = t(93879),
  C = t(434404),
  R = t(449226),
  L = t(981631),
  O = t(689938),
  A = t(212723);

function p(e) {
  let {
    guild: s,
    isExpanded: t,
    selectedChannelId: l,
    className: r
  } = e, T = (0, _.BT)(s), m = s.canHaveRaidActivityAlerts(), [S, h] = i.useState(m), g = (0, o.e7)([N.Z], () => N.Z.getChannel(l), [l]), C = (0, u.ZP)(g), p = async () => {
    h(!S);
    try {
      var e;
      await (0, E.f6)(s, !m);
      let t = null !== (e = null != l ? l : s.safetyAlertsChannelId) && void 0 !== e ? e : null;
      if (null != t) {
        let e = {
          raid_alert_type: I.wR.JOIN_RAID,
          enabled: !m,
          raid_alert_channel_id: t,
          guild_id: s.id,
          channel_id: t
        };
        (0, d.yw)(L.rMx.GUILD_RAID_ALERTS_SETUP, e)
      }
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(O.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE)), h(!m)
    }
  };
  return (0, n.jsxs)("div", {
    className: a()(A.itemWrapper, r),
    children: [(0, n.jsxs)("div", {
      className: A.itemContent,
      children: [(0, n.jsx)(c.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: O.Z.Messages.GUILD_SETTINGS_SAFETY_RAID_ALERTS_TITLE
      }), (0, n.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: O.Z.Messages.GUILD_SETTINGS_SAFETY_RAID_ALERTS_DESCRIPTION
      }), t || null == l ? null : (0, n.jsxs)(c.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        className: A.valuePill,
        children: [(0, n.jsx)(x.Z, {
          width: 12,
          height: 12
        }), " ", C]
      })]
    }), (0, n.jsx)(R.Z, {
      checked: S,
      onChange: p,
      disabled: !T || null == l
    })]
  })
}

function M(e) {
  var s;
  let {
    guild: t,
    selectedChannelId: i,
    setSelectedChannelId: l,
    className: E
  } = e, _ = null !== (s = t.safetyAlertsChannelId) && void 0 !== s ? s : null, T = (0, o.Wu)([m.ZP, g.default, h.Z, S.Z], () => {
    let e = m.ZP.getChannels(t.id)[m.sH].filter(e => {
      let {
        channel: s
      } = e;
      return s.type === r.d.GUILD_TEXT && S.Z.can(L.Plq.SEND_MESSAGES, s)
    }).map(e => {
      let {
        channel: s
      } = e;
      return {
        value: s.id,
        label: (0, u.F6)(s, g.default, h.Z, !0)
      }
    });
    return null != _ ? e : [...e]
  }, [t.id, _]), N = async e => {
    l(e);
    try {
      if (e !== _ && (await C.Z.saveGuild(t.id, {
          safetyAlertsChannelId: e
        }, {
          throwErr: !0
        }), C.Z.updateGuild({
          safetyAlertsChannelId: e
        })), null != e) {
        let s = {
          raid_alert_type: I.wR.JOIN_RAID,
          enabled: t.canHaveRaidActivityAlerts(),
          raid_alert_channel_id: e,
          guild_id: t.id,
          channel_id: e
        };
        (0, d.yw)(L.rMx.GUILD_RAID_ALERTS_SETUP, s)
      }
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(O.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE)), l(_)
    }
  };
  return (0, n.jsx)("div", {
    className: a()(A.itemBodyContainer, E),
    children: (0, n.jsxs)("div", {
      className: A.itemBodyInner,
      children: [(0, n.jsx)(c.FormTitle, {
        children: O.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
      }), (0, n.jsx)(c.SearchableSelect, {
        wrapperClassName: A.bringToFront,
        options: T,
        onChange: N,
        value: i,
        maxVisibleItems: 5
      }), (0, n.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        children: O.Z.Messages.GUILD_SETTINGS_SAFETY_NOTIFICATIONS_CHANNEL_DESCRIPTION
      })]
    })
  })
}

function f(e) {
  var s, t;
  let {
    guild: l
  } = e, [a, r] = i.useState(!1), o = null !== (s = l.safetyAlertsChannelId) && void 0 !== s ? s : null, [c, d] = i.useState(null != o ? o : null !== (t = null == l ? void 0 : l.publicUpdatesChannelId) && void 0 !== t ? t : null);
  return (0, n.jsx)(T.Z, {
    renderHeader: (0, n.jsx)(p, {
      isExpanded: a,
      guild: l,
      selectedChannelId: c
    }),
    isExpanded: a,
    onExpand: () => r(!a),
    children: (0, n.jsx)(M, {
      guild: l,
      selectedChannelId: c,
      setSelectedChannelId: d
    })
  })
}

function v(e) {
  var s, t;
  let {
    guild: l
  } = e, a = null !== (s = l.safetyAlertsChannelId) && void 0 !== s ? s : null, [r, o] = i.useState(null != a ? a : null !== (t = null == l ? void 0 : l.publicUpdatesChannelId) && void 0 !== t ? t : null);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(p, {
      isExpanded: !0,
      guild: l,
      selectedChannelId: r,
      className: A.noPadding
    }), (0, n.jsx)(M, {
      guild: l,
      selectedChannelId: r,
      setSelectedChannelId: o,
      className: A.noPadding
    })]
  })
}