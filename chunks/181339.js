n.d(t, {
  Z: function() {
return A;
  },
  w: function() {
return M;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(106351),
  o = n(442837),
  c = n(481060),
  d = n(367907),
  u = n(933557),
  _ = n(369994),
  I = n(162157),
  E = n(177862),
  T = n(11265),
  m = n(592125),
  N = n(984933),
  S = n(496675),
  h = n(699516),
  g = n(594174),
  C = n(434404),
  x = n(449226),
  p = n(981631),
  R = n(689938),
  f = n(941377);

function L(e) {
  let {
guild: t,
isExpanded: n,
selectedChannelId: i,
className: l
  } = e, T = (0, I.BT)(t), N = t.canHaveRaidActivityAlerts(), [S, h] = a.useState(N), g = (0, o.e7)([m.Z], () => m.Z.getChannel(i), [i]), C = (0, u.ZP)(g), L = async () => {
h(!S);
try {
  var e;
  await (0, _.f6)(t, !N);
  let n = null !== (e = null != i ? i : t.safetyAlertsChannelId) && void 0 !== e ? e : null;
  if (null != n) {
    let e = {
      raid_alert_type: E.wR.JOIN_RAID,
      enabled: !N,
      raid_alert_channel_id: n,
      guild_id: t.id,
      channel_id: n
    };
    (0, d.yw)(p.rMx.GUILD_RAID_ALERTS_SETUP, e);
  }
} catch (e) {
  (0, c.showToast)((0, c.createToast)(R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE)), h(!N);
}
  };
  return (0, s.jsxs)('div', {
className: r()(f.itemWrapper, l),
children: [
  (0, s.jsxs)('div', {
    className: f.itemContent,
    children: [
      (0, s.jsx)(c.Heading, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: R.Z.Messages.GUILD_SETTINGS_SAFETY_RAID_ALERTS_TITLE
      }),
      (0, s.jsx)(c.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: R.Z.Messages.GUILD_SETTINGS_SAFETY_RAID_ALERTS_DESCRIPTION
      }),
      n || null == i ? null : (0, s.jsxs)(c.Text, {
        color: 'interactive-normal',
        variant: 'text-xs/medium',
        className: f.valuePill,
        children: [
          (0, s.jsx)(c.TextIcon, {
            size: 'xxs',
            color: 'currentColor'
          }),
          ' ',
          C
        ]
      })
    ]
  }),
  (0, s.jsx)(x.Z, {
    checked: S,
    onChange: L,
    disabled: !T || null == i
  })
]
  });
}

function O(e) {
  var t;
  let {
guild: n,
selectedChannelId: a,
setSelectedChannelId: i,
className: _
  } = e, I = null !== (t = n.safetyAlertsChannelId) && void 0 !== t ? t : null, T = (0, o.Wu)([
N.ZP,
g.default,
h.Z,
S.Z
  ], () => {
let e = N.ZP.getChannels(n.id)[N.sH].filter(e => {
  let {
    channel: t
  } = e;
  return t.type === l.d.GUILD_TEXT && S.Z.can(p.Plq.SEND_MESSAGES, t);
}).map(e => {
  let {
    channel: t
  } = e;
  return {
    value: t.id,
    label: (0, u.F6)(t, g.default, h.Z, !0)
  };
});
return null != I ? e : [...e];
  }, [
n.id,
I
  ]), m = async e => {
i(e);
try {
  if (e !== I && (await C.Z.saveGuild(n.id, {
      safetyAlertsChannelId: e
    }, {
      throwErr: !0
    }), C.Z.updateGuild({
      safetyAlertsChannelId: e
    })), null != e) {
    let t = {
      raid_alert_type: E.wR.JOIN_RAID,
      enabled: n.canHaveRaidActivityAlerts(),
      raid_alert_channel_id: e,
      guild_id: n.id,
      channel_id: e
    };
    (0, d.yw)(p.rMx.GUILD_RAID_ALERTS_SETUP, t);
  }
} catch (e) {
  (0, c.showToast)((0, c.createToast)(R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE)), i(I);
}
  };
  return (0, s.jsx)('div', {
className: r()(f.itemBodyContainer, _),
children: (0, s.jsxs)('div', {
  className: f.itemBodyInner,
  children: [
    (0, s.jsx)(c.FormTitle, {
      children: R.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
    }),
    (0, s.jsx)(c.SearchableSelect, {
      wrapperClassName: f.bringToFront,
      options: T,
      onChange: m,
      value: a,
      maxVisibleItems: 5
    }),
    (0, s.jsx)(c.Text, {
      variant: 'text-sm/medium',
      color: 'interactive-normal',
      children: R.Z.Messages.GUILD_SETTINGS_SAFETY_NOTIFICATIONS_CHANNEL_DESCRIPTION
    })
  ]
})
  });
}

function A(e) {
  var t, n;
  let {
guild: i
  } = e, [r, l] = a.useState(!1), o = null !== (t = i.safetyAlertsChannelId) && void 0 !== t ? t : null, [c, d] = a.useState(null != o ? o : null !== (n = null == i ? void 0 : i.publicUpdatesChannelId) && void 0 !== n ? n : null);
  return (0, s.jsx)(T.Z, {
renderHeader: (0, s.jsx)(L, {
  isExpanded: r,
  guild: i,
  selectedChannelId: c
}),
isExpanded: r,
onExpand: () => l(!r),
children: (0, s.jsx)(O, {
  guild: i,
  selectedChannelId: c,
  setSelectedChannelId: d
})
  });
}

function M(e) {
  var t, n;
  let {
guild: i
  } = e, r = null !== (t = i.safetyAlertsChannelId) && void 0 !== t ? t : null, [l, o] = a.useState(null != r ? r : null !== (n = null == i ? void 0 : i.publicUpdatesChannelId) && void 0 !== n ? n : null);
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(L, {
    isExpanded: !0,
    guild: i,
    selectedChannelId: l,
    className: f.noPadding
  }),
  (0, s.jsx)(O, {
    guild: i,
    selectedChannelId: l,
    setSelectedChannelId: o,
    className: f.noPadding
  })
]
  });
}