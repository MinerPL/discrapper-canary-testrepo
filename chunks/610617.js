t.d(s, {
  Z: function() {
return j;
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t.n(r),
  d = t(831209),
  c = t(442837),
  u = t(704215),
  h = t(433517),
  N = t(481060),
  S = t(243778),
  E = t(430824),
  g = t(9156),
  m = t(594174),
  _ = t(74538),
  T = t(671105),
  x = t(552958),
  I = t(213931),
  O = t(940165),
  C = t(820408),
  M = t(921944),
  p = t(871465),
  v = t(689938),
  L = t(501637);

function j(e) {
  let {
guildId: s,
onClose: t,
isRedesign: l = !1
  } = e, r = (0, c.e7)([E.Z], () => E.Z.getGuild(s)), j = (0, c.e7)([m.default], () => m.default.getCurrentUser()), {
playSound: Z,
isPlaying: A,
soundpackPlaying: R
  } = (0, x.Z)(), f = (0, T.OR)(s), b = _.ZP.canUseCustomNotificationSounds(j), U = b ? f : p.YC.CLASSIC, G = i.useRef(0), P = i.useRef(-1), [F, D] = i.useState(!1), k = (0, p.LB)(), B = i.useCallback(() => {
clearTimeout(P.current), G.current += 1, G.current > 10 && (D(!0), h.K.set(p.CZ, !0)), P.current = setTimeout(() => {
  G.current = 0;
}, 1000);
  }, []), [w, H] = o().partition(k, e => !e.requirePremium || e.requirePremium && b), y = w.map(e => {
var s, t, n, i;
return {
  name: e.label,
  value: e.value,
  desc: e.description,
  radioBarClassName: (s = e.value, t = R, n = A, i = l, a()(L.option, {
    [L.optionRedesign]: i,
    [L.optionPlaying]: s === t && n
  }))
};
  }), [Y, V] = (0, S.U)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), z = Y === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  i.useEffect(() => () => {
V(M.L.AUTO_DISMISS);
  }, [V]);
  let W = _.ZP.canUseCustomNotificationSounds(j),
q = (0, c.e7)([g.ZP], () => g.ZP.isMuted(s), [s]);
  return null == j ? null : (0, n.jsxs)('div', {
children: [
  (0, n.jsxs)('div', {
    className: L.header,
    children: [
      (0, n.jsx)(N.Heading, {
        variant: 'heading-md/semibold',
        children: v.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
      }),
      (0, n.jsx)(N.Clickable, {
        onClick: B,
        className: L.nitroWheelContainer,
        children: (0, n.jsx)(N.NitroWheelIcon, {
          size: 'md',
          color: 'currentColor',
          className: L.nitroWheel
        })
      }),
      z && (0, n.jsx)(N.TextBadge, {
        className: L.newBadge,
        text: v.Z.Messages.NEW
      })
    ]
  }),
  (0, n.jsx)(N.Text, {
    className: L.subheader,
    variant: 'text-sm/normal',
    children: v.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_DESCRIPTION_V2.format({
      guildName: (e, s) => (0, n.jsx)(N.Text, {
        tag: 'span',
        variant: 'text-sm/medium',
        children: null == r ? void 0 : r.name
      }, s)
    })
  }),
  q && (0, n.jsxs)('div', {
    className: L.warningContainer,
    children: [
      (0, n.jsx)(N.CircleWarningIcon, {
        size: 'custom',
        width: 20,
        height: 20,
        color: d.Z.STATUS_WARNING
      }),
      (0, n.jsx)(N.Text, {
        className: L.warningLabel,
        variant: 'text-sm/medium',
        children: v.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
      })
    ]
  }),
  (0, n.jsx)(N.FormItem, {
    className: L.optionsContainer,
    title: v.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_LABEL,
    children: (0, n.jsxs)('div', {
      className: a()({
        [L.options]: !W
      }),
      children: [
        (0, n.jsx)(N.RadioGroup, {
          className: a()({
            [L.options]: W
          }),
          value: null != U ? U : p.YC.CLASSIC,
          onChange: e => {
            Z(e.value), b && (0, I.t)(s, U, e.value, 'notificationSettings');
          },
          options: y,
          radioItemClassName: L.option
        }),
        H.map((e, s) => (0, n.jsx)(O.Z, {
          className: L.playableOption,
          label: e.label,
          description: e.description,
          soundpack: e.value,
          location: 'notificationSettings'
        }, 'sound_option_'.concat(s)))
      ]
    })
  }),
  !W && (0, n.jsx)(C.Z, {
    onClose: t
  })
]
  });
}