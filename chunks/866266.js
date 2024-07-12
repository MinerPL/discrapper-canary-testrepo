t.d(n, {
  Z: function() {
return D;
  }
}), t(47120);
var l = t(735250),
  a = t(470079),
  i = t(106351),
  r = t(442837),
  u = t(481060),
  o = t(367907),
  s = t(933557),
  d = t(177862),
  c = t(434404),
  I = t(984933),
  _ = t(430824),
  A = t(699516),
  E = t(594174),
  T = t(369994),
  N = t(162157),
  M = t(981631),
  S = t(689938),
  f = t(595271);

function D(e) {
  var n, t;
  let {
guildId: D,
transitionState: R,
onClose: C
  } = e, L = (0, r.e7)([_.Z], () => _.Z.getGuild(D), [D]), h = null !== (n = null == L ? void 0 : L.safetyAlertsChannelId) && void 0 !== n ? n : null, [O, x] = a.useState(!!(null == L ? void 0 : L.hasFeature(M.oNc.RAID_ALERTS_DISABLED))), v = (0, N.BT)(L), [Z, G] = a.useState(null != h ? h : null !== (t = null == L ? void 0 : L.publicUpdatesChannelId) && void 0 !== t ? t : null), [b, U] = a.useState(!1), g = (0, r.Wu)([
I.ZP,
E.default,
A.Z
  ], () => {
let e = I.ZP.getChannels(D)[I.sH].filter(e => {
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
return null != h ? e : [...e];
  }, [
D,
h
  ]), y = async () => {
if (null == L) {
  (0, u.showToast)((0, u.createToast)(S.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, u.ToastType.FAILURE));
  return;
}
try {
  U(!0), O !== L.hasFeature(M.oNc.RAID_ALERTS_DISABLED) && await (0, T.f6)(L, !O), Z !== h && (await c.Z.saveGuild(D, {
    safetyAlertsChannelId: Z
  }, {
    throwErr: !0
  }), c.Z.updateGuild({
    safetyAlertsChannelId: Z
  }));
  let e = null != Z ? Z : h;
  if (null != e) {
    let n = {
      raid_alert_type: d.wR.JOIN_RAID,
      enabled: O,
      raid_alert_channel_id: e,
      guild_id: D,
      channel_id: e
    };
    (0, o.yw)(M.rMx.GUILD_RAID_ALERTS_SETUP, n);
  }
  C();
} catch (e) {
  (0, u.showToast)((0, u.createToast)(S.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, u.ToastType.FAILURE));
} finally {
  U(!1);
}
  };
  return (0, l.jsxs)(u.ModalRoot, {
transitionState: R,
size: u.ModalSize.SMALL,
children: [
  (0, l.jsx)(u.ModalHeader, {
    separator: !1,
    children: (0, l.jsx)(u.Heading, {
      color: 'header-primary',
      variant: 'heading-md/semibold',
      children: S.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
    })
  }),
  (0, l.jsxs)(u.ModalContent, {
    children: [
      (0, l.jsx)(u.Text, {
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: S.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
      }),
      (0, l.jsx)('div', {
        className: f.mainChannelContainer,
        children: (0, l.jsxs)(u.Clickable, {
          className: f.enableAlertsContainer,
          onClick: () => {
            if (!!v)
              x(!O);
          },
          children: [
            (0, l.jsx)(u.Text, {
              variant: 'text-md/medium',
              color: 'text-normal',
              children: S.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
            }),
            (0, l.jsx)(u.Checkbox, {
              value: !O,
              className: f.enabledAlertsCheckbox,
              type: u.Checkbox.Types.INVERTED,
              disabled: !v
            })
          ]
        })
      }),
      (0, l.jsxs)('div', {
        className: f.mainChannelContainer,
        children: [
          (0, l.jsx)(u.Text, {
            variant: 'eyebrow',
            color: 'text-muted',
            children: S.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
          }),
          (0, l.jsx)(u.SearchableSelect, {
            options: g,
            onChange: e => {
              G(e);
            },
            value: Z,
            className: f.channelSelect,
            maxVisibleItems: 4
          }),
          (0, l.jsx)(u.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: S.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
          })
        ]
      })
    ]
  }),
  (0, l.jsxs)(u.ModalFooter, {
    children: [
      (0, l.jsx)(u.Button, {
        onClick: y,
        color: u.Button.Colors.BRAND,
        look: u.Button.Looks.FILLED,
        submitting: b,
        children: S.Z.Messages.SAVE
      }),
      (0, l.jsx)(u.Button, {
        onClick: C,
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        disabled: b,
        children: S.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}