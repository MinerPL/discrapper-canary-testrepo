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
  S = t(594190),
  g = t(925329),
  C = t(565138),
  h = t(695346),
  N = t(494620),
  Z = t(592125),
  I = t(650774),
  x = t(430824),
  f = t(131951),
  R = t(944486),
  A = t(594174),
  T = t(449224),
  v = t(285952),
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
S.ZP,
T.Z
  ], () => (0, O.isWindows)() ? (0, P.Z)(S.ZP, T.Z) : null), c = (0, i.e7)([u.Z], () => (null == r ? void 0 : r.id) != null ? u.Z.getApplication(r.id) : null), d = (0, i.e7)([S.ZP], () => S.ZP.getRunningGames()), m = (0, i.Wu)([u.Z], () => d.map(e => null != e.id ? u.Z.getApplication(e.id) : null).filter(p.lm), [d]), E = null;
  if (null != n ? E = n.name : null != r && (E = r.name), null == E)
return null;
  let _ = (0, B.Z)(r, n, d),
C = s ? m.find(e => {
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
    null != C ? (0, l.jsx)(g.Z, {
      game: C,
      size: g.Z.Sizes.XSMALL,
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
  } = e, s = (0, i.e7)([x.Z], () => x.Z.getGuild(t));
  return null == s ? (n(), null) : (0, l.jsx)(o.FormItem, {
title: H.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
className: z.modalContent,
titleClassName: z.formItemTitle,
children: (0, l.jsxs)(w.Z, {
  children: [
    (0, l.jsx)(C.Z, {
      guild: s,
      size: C.Z.Sizes.SMALLER,
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
  return (0, l.jsxs)(v.Z, {
align: v.Z.Align.CENTER,
className: F.warning,
children: [
  (0, l.jsx)(o.CircleExclamationPointIcon, {
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
  } = e, t = (0, i.e7)([I.Z], () => {
var e;
return null !== (e = I.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
  }), a = h.eo.useSetting(), c = s.useCallback((e, n) => {
h.eo.updateSetting(n), L.default.track(y.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
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
sound: I,
onClose: x,
onChangeSelectedFPS: T,
onChangeSelectedResolution: v,
onChangeSelectedPreset: L,
onChangeSelectedChannelId: p,
onChangeSource: O,
onChangeAudioDevice: P,
onChangeGuild: w,
onChangeSound: B,
isAnimationDone: V
  } = e, z = (0, i.e7)([
R.Z,
Z.Z
  ], () => Z.Z.getChannel(R.Z.getVoiceChannelId())), q = (0, i.e7)([j.Z], () => j.Z.GPUDriversOutdated), $ = (0, i.e7)([j.Z], () => j.Z.problematicGPUDriver), ee = (0, i.e7)([A.default], () => A.default.getCurrentUser()), en = (0, m.Go)(), et = (0, m.Zq)({
autoTrackExposure: !en
  }), el = (0, D.Z)();
  null != n && n.id.startsWith('screen') && !f.Z.supportsScreenSoundshare() && (el = H.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
  let es = en ? (0, l.jsx)(_.Z, {
  guildId: S,
  isAnimationDone: V
}) : et ? (0, l.jsx)(E.Z, {}) : void 0,
ea = !!(null == n ? void 0 : n.id.startsWith('camera')),
er = null != ee && ee.verified && !ee.bot,
ei = null != z && !(0, d.Yk)(z),
eo = !(0, i.e7)([f.Z], () => f.Z.getHardwareEncoding());
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
        enabled: I,
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
    onFPSChange: T,
    onResolutionChange: v,
    onPresetChange: L,
    captureDeviceSelected: ea
  }),
  es
]
  });
}