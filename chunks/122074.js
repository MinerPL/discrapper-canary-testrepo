t.d(n, {
  U: function() {
return m;
  },
  Uf: function() {
return S;
  },
  ng: function() {
return O;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(442837),
  r = t(704215),
  u = t(481060),
  s = t(436774),
  o = t(706140),
  d = t(9156),
  c = t(594174),
  _ = t(74538),
  M = t(759198),
  I = t(11352),
  f = t(213931),
  E = t(767157),
  N = t(112440),
  T = t(671105),
  A = t(552958),
  Z = t(981631),
  C = t(921944),
  h = t(871465),
  x = t(689938),
  g = t(465094);

function O(e, n) {
  let t = I.Y.useExperiment({
  location: 'guild_context_menu'
}, {
  autoTrackExposure: !0
}),
a = R(e, void 0, r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, t.nestedEntry ? 'trailing' : 'top'),
l = t.nestedEntry && n || !t.nestedEntry && !n;
  return (0, i.jsx)(i.Fragment, {
children: l && a
  });
}

function S(e, n, t) {
  return R(e, n, r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t);
}

function m() {
  let e = I.Y.useExperiment({
  location: 'guild_context_menu'
}, {
  autoTrackExposure: !0
}),
[n] = (0, o.cv)([r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
  return (0, i.jsx)(i.Fragment, {
children: e.enabled && e.nestedEntry && n === r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE && (0, i.jsx)(u.TextBadge, {
  className: g.newBadge,
  text: x.Z.Messages.NEW
})
  });
}

function R(e, n, r, O) {
  var S, m;
  let R = (0, T.OR)(e),
p = (0, T._c)(e, n),
U = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
v = (0, l.e7)([d.ZP], () => d.ZP.isMuted(e), [e]),
j = _.ZP.canUseCustomNotificationSounds(U),
G = j ? null != p ? p : R : h.YC.CLASSIC,
P = I.Y.useExperiment({
  location: 'guild_context_menu'
}, {
  autoTrackExposure: !0
}).enabled,
[y, D] = a.useState(!1),
{
  playSound: b
} = (0, A.Z)(),
[L, F] = (0, o.cv)([r]),
V = L === r;
  if (a.useEffect(() => () => {
  y && F(C.L.TAKE_ACTION);
}, [
  y,
  F
]), !P)
return null;
  let k = t => {
  if (b(t), F(C.L.TAKE_ACTION), !j && t !== h.YC.CLASSIC) {
    (0, E.Z)(t, 'contextMenu'), (0, N.Z)();
    return;
  }
  null != n ? (0, f.M)(e, n, G, t, 'contextMenu') : (0, f.t)(e, G, t, 'contextMenu');
},
Y = j ? u.Text : M.Z,
z = (0, h.LB)(),
w = null !== (m = null === (S = z.find(e => e.value === G)) || void 0 === S ? void 0 : S.label) && void 0 !== m ? m : x.Z.Messages.SOUNDPACK_DEFAULT_LABEL,
B = (0, i.jsx)(u.TextBadge, {
  className: g.newBadge,
  text: x.Z.Messages.NEW
});
  return (0, i.jsx)(u.MenuItem, {
id: 'notification-sounds',
label: e => {
  let {
    isFocused: n
  } = e;
  return n && D(n), (0, i.jsxs)('div', {
    className: g.rootContainer,
    children: [
      (0, i.jsxs)('div', {
        children: [
          V && 'top' === O && B,
          (0, i.jsxs)('div', {
            className: g.headerContainer,
            children: [
              (0, i.jsx)(Y, {
                className: g.text,
                color: n ? 'always-white' : void 0,
                variant: 'text-sm/medium',
                children: x.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
              }),
              (0, i.jsx)(u.NitroWheelIcon, {
                size: 'xs',
                className: g.nitroWheel,
                color: n ? 'white' : j ? void 0 : s.JX.PREMIUM_TIER_2
              })
            ]
          }),
          null != w && (0, i.jsx)(Y, {
            className: g.text,
            color: n ? 'always-white' : void 0,
            variant: 'text-xs/normal',
            children: w
          })
        ]
      }),
      V && 'trailing' === O && B
    ]
  });
},
action: e !== Z.aIL ? () => (0, u.openModalLazy)(async () => {
  let {
    default: n
  } = await Promise.all([
    t.e('5863'),
    t.e('48258')
  ]).then(t.bind(t, 751212));
  return t => (0, i.jsx)(n, {
    ...t,
    guildId: e
  });
}) : void 0,
hasSubmenu: !0,
children: (0, i.jsxs)(u.MenuGroup, {
  children: [
    z.map((e, n) => (0, i.jsxs)(a.Fragment, {
      children: [
        j || e.value === h.YC.CLASSIC ? (0, i.jsx)(u.MenuRadioItem, {
          id: e.label,
          group: 'notification-preset',
          checked: (null != G ? G : h.YC.CLASSIC) === e.value,
          label: e.label,
          action: () => k(e.value)
        }) : (0, i.jsx)(u.MenuItem, {
          id: e.label,
          label: n => {
            let {
              isFocused: t
            } = n;
            return (0, i.jsxs)('div', {
              className: g.labelContainer,
              children: [
                (0, i.jsx)(M.Z, {
                  color: t ? 'always-white' : void 0,
                  variant: 'text-sm/medium',
                  children: e.label
                }),
                (0, i.jsx)(u.CirclePlayIcon, {
                  className: g.playButton,
                  color: t ? u.tokens.colors.INTERACTIVE_ACTIVE : u.tokens.colors.INTERACTIVE_NORMAL
                })
              ]
            });
          },
          action: () => k(e.value)
        }),
        e.value === h.YC.CLASSIC ? (0, i.jsx)(u.MenuSeparator, {}) : null
      ]
    }, n)),
    v && (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(u.MenuSeparator, {}),
        (0, i.jsx)(u.MenuItem, {
          id: 'label',
          label: (0, i.jsx)(u.Text, {
            className: g.mutedLabel,
            variant: 'text-sm/medium',
            children: x.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
          })
        })
      ]
    })
  ]
})
  });
}