t(47120);
var l = t(735250),
  s = t(470079),
  a = t(512722),
  r = t.n(a),
  i = t(442837),
  o = t(704215),
  c = t(481060),
  u = t(605236),
  d = t(706140),
  m = t(765585),
  E = t(556296),
  _ = t(63063),
  S = t(13140),
  g = t(435064),
  C = t(894694),
  h = t(39604),
  N = t(981631),
  Z = t(921944),
  I = t(689938),
  x = t(251146),
  f = t(1871);
let R = e => {
  let {
clipsEnabled: n,
isAnimationDone: t,
guildId: a,
children: r
  } = e, E = (0, i.e7)([g.Z], () => g.Z.getHardwareClassification()), S = E === C.x.MEETS_MINIMUM || E === C.x.UNKNOWN, f = E === C.x.BELOW_MINIMUM, R = t && (S || f) && !n, [A, T] = (0, d.c)(R ? [o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), v = A === o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
  s.useEffect(() => {
n && (0, u.EW)(o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
  forceTrack: !0
});
  }, [n]);
  let L = (e, n) => {
e.stopPropagation(), e.preventDefault(), null == n || n(), T(Z.L.UNKNOWN);
  };
  return (0, l.jsx)(c.Popout, {
shouldShow: v,
position: 'right',
align: 'center',
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, l.jsx)(m.Z, {
    dismissibleContent: o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
    shouldUseHorizontalButtons: !0,
    inlineArt: !0,
    artClassName: x.clipsEducationArt,
    position: 'right',
    header: I.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
    headerClassName: x.clipsEducationHeader,
    body: (0, l.jsxs)(l.Fragment, {
      children: [
        (0, l.jsx)(c.Text, {
          variant: 'text-sm/normal',
          color: 'always-white',
          children: I.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
        }),
        f ? (0, l.jsx)(c.Text, {
          variant: 'text-sm/normal',
          color: 'always-white',
          className: x.warningText,
          children: I.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
            url: _.Z.getArticleURL(N.BhN.CLIPS)
          })
        }) : null
      ]
    }),
    tryItText: I.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
    onTryFeature: e => {
      (0, h.em)({
        clipsEnabled: !0,
        guildId: a,
        trackAnalytics: !0
      }), L(e);
    },
    onClose: e => {
      L(e, n);
    }
  });
},
children: () => r
  });
};
n.Z = function(e) {
  let {
isAnimationDone: n,
guildId: t
  } = e, s = (0, i.e7)([g.Z], () => g.Z.getSettings().clipsEnabled), a = (0, i.e7)([E.Z], () => E.Z.getKeybindForAction(N.kg4.SAVE_CLIP));
  r()(null != a, 'Clips keybind should be set');
  let o = S.BB(a.shortcut, !0);
  return (0, l.jsx)(c.FormItem, {
title: I.Z.Messages.CLIPS_SETTINGS,
titleClassName: f.formItemTitle,
className: f.modalContent,
children: (0, l.jsxs)('div', {
  className: x.container,
  children: [
    (0, l.jsx)(R, {
      clipsEnabled: s,
      guildId: t,
      isAnimationDone: n,
      children: (0, l.jsx)(c.FormSwitch, {
        className: x.formSwitch,
        value: s,
        onChange: e => (0, h.em)({
          clipsEnabled: e,
          guildId: t,
          trackAnalytics: !0
        }),
        hideBorder: !0,
        children: I.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
      })
    }),
    (0, l.jsx)(c.Text, {
      variant: 'text-xs/normal',
      color: 'interactive-normal',
      className: x.description,
      children: I.Z.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
        keybind: o,
        keybindHook: () => (0, l.jsx)('span', {
          className: x.keybindHintKeys,
          children: (0, l.jsx)(c.KeyCombo, {
            className: x.keybindShortcut,
            shortcut: o
          })
        })
      })
    })
  ]
})
  });
};