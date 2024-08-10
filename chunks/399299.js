t.d(n, {
  Z: function() {
return q;
  }
});
var l = t(735250),
  s = t(470079),
  a = t(120356),
  r = t.n(a),
  i = t(442837),
  o = t(481060),
  c = t(230711),
  u = t(812206),
  d = t(605436),
  m = t(924557),
  E = t(954564),
  _ = t(98131),
  S = t(600164),
  g = t(594190),
  C = t(925329),
  h = t(565138),
  Z = t(695346),
  N = t(494620),
  I = t(592125),
  x = t(650774),
  f = t(430824),
  R = t(131951),
  A = t(944486),
  T = t(594174),
  v = t(449224),
  L = t(626135),
  p = t(823379),
  M = t(63063),
  O = t(358085),
  j = t(653255),
  P = t(989941),
  D = t(618407),
  G = t(586290),
  U = t(233037),
  b = t(810013),
  w = t(537135),
  k = t(641115),
  B = t(143135),
  V = t(70722),
  y = t(981631),
  W = t(526761),
  H = t(689938),
  F = t(829800),
  z = t(1871);

function K(e) {
  let {
selectedSource: n,
selectSource: t,
sourceChanged: s,
onChangeSource: a
  } = e, r = (0, i.e7)([
g.ZP,
v.Z
  ], () => (0, O.isWindows)() ? (0, P.Z)(g.ZP, v.Z) : null), c = (0, i.e7)([u.Z], () => (null == r ? void 0 : r.id) != null ? u.Z.getApplication(r.id) : null), d = (0, i.e7)([g.ZP], () => g.ZP.getRunningGames()), m = (0, i.Wu)([u.Z], () => d.map(e => null != e.id ? u.Z.getApplication(e.id) : null).filter(p.lm), [d]), E = null;
  if (null != n ? E = n.name : null != r && (E = r.name), null == E)
return null;
  let _ = (0, B.Z)(r, n, d),
S = s ? m.find(e => {
  let {
    id: n
  } = e;
  return n === (null == _ ? void 0 : _.id);
}) : c,
h = null != n && n.id.startsWith('screen') ? o.ScreenIcon : o.BrowserIcon;
  return (0, l.jsx)(o.FormItem, {
title: H.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
className: z.modalContent,
titleClassName: z.formItemTitleVerySlim,
children: (0, l.jsxs)(w.Z, {
  children: [
    null != S ? (0, l.jsx)(C.Z, {
      game: S,
      size: C.Z.Sizes.XSMALL,
      className: F.selectedIcon
    }) : (0, l.jsx)(h, {
      className: F.selectedIcon
    }),
    (0, l.jsx)('span', {
      className: F.ellipsisText,
      children: E
    }),
    t ? (0, l.jsx)(o.Button, {
      className: F.changeButton,
      color: o.Button.Colors.PRIMARY,
      size: o.Button.Sizes.SMALL,
      onClick: a,
      children: H.Z.Messages.CHANGE
    }) : null
  ]
})
  });
}

function Y(e) {
  let {
onChange: n,
guildId: t
  } = e, s = (0, i.e7)([f.Z], () => f.Z.getGuild(t));
  return null == s ? (n(), null) : (0, l.jsx)(o.FormItem, {
title: H.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
className: z.modalContent,
titleClassName: z.formItemTitle,
children: (0, l.jsxs)(w.Z, {
  children: [
    (0, l.jsx)(h.Z, {
      guild: s,
      size: h.Z.Sizes.SMALLER,
      className: F.selectedIcon
    }),
    (0, l.jsx)('span', {
      className: F.ellipsisText,
      children: s.toString()
    }),
    (0, l.jsx)(o.Button, {
      className: F.changeButton,
      color: o.Button.Colors.PRIMARY,
      size: o.Button.Sizes.SMALL,
      onClick: n,
      children: H.Z.Messages.CHANGE
    })
  ]
})
  });
}

function J(e) {
  let {
text: n
  } = e;
  return (0, l.jsxs)(S.Z, {
align: S.Z.Align.CENTER,
className: F.warning,
children: [
  (0, l.jsx)(o.CircleWarningIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    color: 'currentColor',
    className: F.warningIcon
  }),
  (0, l.jsx)(o.Text, {
    color: 'none',
    variant: 'text-xs/normal',
    children: n
  })
]
  });
}

function Q(e) {
  let {
guildId: n
  } = e, t = (0, i.e7)([x.Z], () => {
var e;
return null !== (e = x.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
  }), a = Z.eo.useSetting(), c = s.useCallback((e, n) => {
Z.eo.updateSetting(n), L.default.track(y.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
  value: n
});
  }, []);
  return t >= 2 && t <= V.tB ? (0, l.jsx)(o.FormItem, {
className: r()(z.modalContent, F.checkboxRow),
children: (0, l.jsx)(o.Checkbox, {
  value: !!a,
  type: o.Checkbox.Types.INVERTED,
  onChange: c,
  children: (0, l.jsx)(o.Text, {
    variant: 'text-sm/normal',
    children: H.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
  })
})
  }) : null;
}

function X(e) {
  let {
enabled: n,
onChange: t,
screen: a
  } = e, i = s.useCallback((e, n) => {
t(n);
  }, [t]);
  return (0, l.jsx)(o.FormItem, {
className: r()(z.modalContent, F.checkboxRow),
children: (0, l.jsx)(o.Checkbox, {
  value: n,
  type: o.Checkbox.Types.INVERTED,
  onChange: i,
  children: (0, l.jsx)(o.Text, {
    variant: 'text-sm/normal',
    children: a ? H.Z.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL : H.Z.Messages.GO_LIVE_MODAL_ENABLE_APP_SOUNDSHARE_LABEL
  })
})
  });
}

function q(e) {
  let {
selectedSource: n,
selectedFPS: t,
selectedChannelId: a,
selectedPreset: r,
selectedResolution: o,
sourceChanged: u,
selectedGuildId: S,
targetGuildPremiumTier: g,
selectSource: C,
selectGuild: h,
sound: Z,
onClose: x,
onChangeSelectedFPS: f,
onChangeSelectedResolution: v,
onChangeSelectedPreset: L,
onChangeSelectedChannelId: p,
onChangeSource: O,
onChangeAudioDevice: P,
onChangeGuild: w,
onChangeSound: B,
isAnimationDone: V
  } = e, z = (0, i.e7)([
A.Z,
I.Z
  ], () => I.Z.getChannel(A.Z.getVoiceChannelId())), q = (0, i.e7)([j.Z], () => j.Z.GPUDriversOutdated), $ = (0, i.e7)([j.Z], () => j.Z.problematicGPUDriver), ee = (0, i.e7)([T.default], () => T.default.getCurrentUser()), en = (0, m.Go)(), et = (0, m.Zq)({
autoTrackExposure: !en
  }), el = (0, D.Z)();
  null != n && n.id.startsWith('screen') && !R.Z.supportsScreenSoundshare() && (el = H.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
  let es = en ? (0, l.jsx)(_.Z, {
  guildId: S,
  isAnimationDone: V
}) : et ? (0, l.jsx)(E.Z, {}) : void 0,
ea = !!(null == n ? void 0 : n.id.startsWith('camera')),
er = null != ee && ee.verified && !ee.bot,
ei = null != z && !(0, d.Yk)(z),
eo = !(0, i.e7)([R.Z], () => R.Z.getHardwareEncoding());
  return (0, l.jsxs)(s.Fragment, {
children: [
  ea ? (0, l.jsx)(G.Z, {
    selectedSource: n,
    onChangeVideoDeviceSource: O,
    onChangeAudioDevice: P
  }) : (0, l.jsxs)('div', {
    children: [
      (0, l.jsx)(K, {
        selectSource: C,
        sourceChanged: u,
        onChangeSource: O,
        selectedSource: n
      }),
      null != el ? (0, l.jsx)(J, {
        text: el
      }) : null,
      null != n && null == el ? (0, l.jsx)(X, {
        enabled: Z,
        onChange: B,
        screen: n.id.startsWith('screen')
      }) : null
    ]
  }),
  h && null != S ? (0, l.jsx)(Y, {
    guildId: S,
    onChange: w
  }) : null,
  null != z ? (0, l.jsx)(b.Z, {
    channel: z
  }) : (0, l.jsx)(U.Z, {
    guildId: S,
    selectedChannelId: a,
    onChangeSelectedChannelId: p
  }),
  null != S && er && ei ? (0, l.jsx)(Q, {
    guildId: S
  }) : null,
  q ? (0, l.jsx)(J, {
    text: H.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
  }) : null,
  $ ? (0, l.jsx)(J, {
    text: H.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
      helpCenterLink: M.Z.getArticleURL(y.BhN.NVIDIA_DRIVER_ISSUES)
    })
  }) : null,
  eo && (0, l.jsx)(N.Z, {
    look: N.z.WARNING,
    className: F.hardwareWarning,
    children: H.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
      onClick: () => {
        x(), c.Z.open(y.oAB.VOICE, null, {
          scrollPosition: W.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
        });
      }
    })
  }),
  (0, l.jsx)(k.Z, {
    selectedPreset: r,
    selectedFPS: t,
    selectedResolution: o,
    targetGuildPremiumTier: g,
    onClose: x,
    onFPSChange: f,
    onResolutionChange: v,
    onPresetChange: L,
    captureDeviceSelected: ea
  }),
  es
]
  });
}