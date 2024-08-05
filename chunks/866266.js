t.d(n, {
  Z: function() {
return S;
  }
}), t(47120);
var l = t(735250),
  a = t(470079),
  i = t(106351),
  r = t(442837),
  o = t(481060),
  u = t(367907),
  s = t(933557),
  d = t(177862),
  c = t(434404),
  _ = t(984933),
  I = t(430824),
  A = t(699516),
  E = t(594174),
  T = t(369994),
  f = t(162157),
  N = t(981631),
  h = t(689938),
  D = t(595271);

function S(e) {
  var n, t;
  let {
guildId: S,
transitionState: L,
onClose: C
  } = e, M = (0, r.e7)([I.Z], () => I.Z.getGuild(S), [S]), R = null !== (n = null == M ? void 0 : M.safetyAlertsChannelId) && void 0 !== n ? n : null, [x, Z] = a.useState(!!(null == M ? void 0 : M.hasFeature(N.oNc.RAID_ALERTS_DISABLED))), v = (0, f.BT)(M), [b, g] = a.useState(null != R ? R : null !== (t = null == M ? void 0 : M.publicUpdatesChannelId) && void 0 !== t ? t : null), [y, p] = a.useState(!1), U = (0, r.Wu)([
_.ZP,
E.default,
A.Z
  ], () => {
let e = _.ZP.getChannels(S)[_.sH].filter(e => {
  let {
    channel: n
  } = e;
  return n.type === i.d.GUILD_TEXT;
}).map(e => {
  let {
    channel: n
  } = e;
  return {
    value: n.id,
    label: (0, s.F6)(n, E.default, A.Z, !0)
  };
});
return null != R ? e : [...e];
  }, [
S,
R
  ]), m = async () => {
if (null == M) {
  (0, o.showToast)((0, o.createToast)(h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, o.ToastType.FAILURE));
  return;
}
try {
  p(!0), x !== M.hasFeature(N.oNc.RAID_ALERTS_DISABLED) && await (0, T.f6)(M, !x), b !== R && (await c.Z.saveGuild(S, {
    safetyAlertsChannelId: b
  }, {
    throwErr: !0
  }), c.Z.updateGuild({
    safetyAlertsChannelId: b
  }));
  let e = null != b ? b : R;
  if (null != e) {
    let n = {
      raid_alert_type: d.wR.JOIN_RAID,
      enabled: x,
      raid_alert_channel_id: e,
      guild_id: S,
      channel_id: e
    };
    (0, u.yw)(N.rMx.GUILD_RAID_ALERTS_SETUP, n);
  }
  C();
} catch (e) {
  (0, o.showToast)((0, o.createToast)(h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, o.ToastType.FAILURE));
} finally {
  p(!1);
}
  };
  return (0, l.jsxs)(o.ModalRoot, {
transitionState: L,
size: o.ModalSize.SMALL,
children: [
  (0, l.jsx)(o.ModalHeader, {
    separator: !1,
    children: (0, l.jsx)(o.Heading, {
      color: 'header-primary',
      variant: 'heading-md/semibold',
      children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
    })
  }),
  (0, l.jsxs)(o.ModalContent, {
    children: [
      (0, l.jsx)(o.Text, {
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
      }),
      (0, l.jsx)('div', {
        className: D.mainChannelContainer,
        children: (0, l.jsxs)(o.Clickable, {
          className: D.enableAlertsContainer,
          onClick: () => {
            if (!!v)
              Z(!x);
          },
          children: [
            (0, l.jsx)(o.Text, {
              variant: 'text-md/medium',
              color: 'text-normal',
              children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
            }),
            (0, l.jsx)(o.Checkbox, {
              value: !x,
              className: D.enabledAlertsCheckbox,
              type: o.Checkbox.Types.INVERTED,
              disabled: !v
            })
          ]
        })
      }),
      (0, l.jsxs)('div', {
        className: D.mainChannelContainer,
        children: [
          (0, l.jsx)(o.Text, {
            variant: 'eyebrow',
            color: 'text-muted',
            children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
          }),
          (0, l.jsx)(o.SearchableSelect, {
            options: U,
            onChange: e => {
              g(e);
            },
            value: b,
            className: D.channelSelect,
            maxVisibleItems: 4
          }),
          (0, l.jsx)(o.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
          })
        ]
      })
    ]
  }),
  (0, l.jsxs)(o.ModalFooter, {
    children: [
      (0, l.jsx)(o.Button, {
        onClick: m,
        color: o.Button.Colors.BRAND,
        look: o.Button.Looks.FILLED,
        submitting: y,
        children: h.Z.Messages.SAVE
      }),
      (0, l.jsx)(o.Button, {
        onClick: C,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        disabled: y,
        children: h.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}