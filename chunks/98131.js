t(47120);
var l = t(735250),
  s = t(470079),
  a = t(512722),
  i = t.n(a),
  r = t(442837),
  o = t(704215),
  u = t(481060),
  c = t(605236),
  d = t(706140),
  m = t(765585),
  E = t(556296),
  _ = t(63063),
  S = t(13140),
  g = t(435064),
  h = t(894694),
  C = t(39604),
  N = t(981631),
  Z = t(921944),
  I = t(689938),
  x = t(251146),
  f = t(1871);
let A = e => {
  let {
clipsEnabled: n,
isAnimationDone: t,
guildId: a,
children: i
  } = e, E = (0, r.e7)([g.Z], () => g.Z.getHardwareClassification()), S = E === h.x.MEETS_MINIMUM || E === h.x.UNKNOWN, f = E === h.x.BELOW_MINIMUM, A = t && (S || f) && !n, [R, T] = (0, d.c)(A ? [o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), v = R === o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
  s.useEffect(() => {
n && (0, c.EW)(o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
  forceTrack: !0
});
  }, [n]);
  let L = (e, n) => {
e.stopPropagation(), e.preventDefault(), null == n || n(), T(Z.L.UNKNOWN);
  };
  return (0, l.jsx)(u.Popout, {
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
        (0, l.jsx)(u.Text, {
          variant: 'text-sm/normal',
          color: 'always-white',
          children: I.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
        }),
        f ? (0, l.jsx)(u.Text, {
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
      (0, C.em)({
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
children: () => i
  });
};
n.Z = function(e) {
  let {
isAnimationDone: n,
guildId: t
  } = e, s = (0, r.e7)([g.Z], () => g.Z.getSettings().clipsEnabled), a = (0, r.e7)([E.Z], () => E.Z.getKeybindForAction(N.kg4.SAVE_CLIP));
  i()(null != a, 'Clips keybind should be set');
  let o = S.BB(a.shortcut, !0);
  return (0, l.jsx)(u.FormItem, {
title: I.Z.Messages.CLIPS_SETTINGS,
titleClassName: f.formItemTitle,
className: f.modalContent,
children: (0, l.jsxs)('div', {
  className: x.container,
  children: [
    (0, l.jsx)(A, {
      clipsEnabled: s,
      guildId: t,
      isAnimationDone: n,
      children: (0, l.jsx)(u.FormSwitch, {
        className: x.formSwitch,
        value: s,
        onChange: e => (0, C.em)({
          clipsEnabled: e,
          guildId: t,
          trackAnalytics: !0
        }),
        hideBorder: !0,
        children: I.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
      })
    }),
    (0, l.jsx)(u.Text, {
      variant: 'text-xs/normal',
      color: 'interactive-normal',
      className: x.description,
      children: I.Z.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
        keybind: o,
        keybindHook: () => (0, l.jsx)('span', {
          className: x.keybindHintKeys,
          children: (0, l.jsx)(u.KeyCombo, {
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