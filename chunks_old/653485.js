"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("627445"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("913139"),
  u = s("79112"),
  c = s("278108"),
  S = s("584687"),
  E = s("915639"),
  T = s("216503"),
  f = s("42887"),
  _ = s("227602"),
  m = s("56947"),
  g = s("386045"),
  h = s("30591"),
  N = s("18346"),
  I = s("803725"),
  p = s("119052"),
  C = s("80028"),
  A = s("49111"),
  O = s("686298"),
  x = s("397336"),
  R = s("782340"),
  M = s("836937"),
  D = s("824905"),
  v = s("890957");

function L() {
  let e = (0, r.useStateFromStores)([f.default], () => f.default.getHardwareH264()),
    {
      clipsEnabled: t,
      remindersEnabled: s,
      decoupledClipsEnabled: l,
      clipsLength: L,
      clipsQuality: P
    } = (0, r.useStateFromStoresObject)([g.default], () => g.default.getSettings()),
    j = (0, r.useStateFromStores)([g.default], () => g.default.getHardwareClassification()),
    b = (0, r.useStateFromStores)([_.default], () => _.default.getKeybindForAction(A.GlobalKeybindActions.SAVE_CLIP, !0)),
    {
      enableDecoupledGameClipping: U
    } = S.default.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    }),
    y = (0, N.default)(f.default),
    {
      showClipsHeaderEntrypoint: B
    } = m.ClipsExperiment.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    });
  i(null != b, "Save clip keybind unset");
  let F = (0, r.useStateFromStores)([E.default], () => E.default.locale),
    G = n.useMemo(() => [{
      value: C.ClipsLengthSettings.SECONDS_30,
      label: R.default.Messages.CLIPS_LENGTH_SECONDS.format({
        count: 30
      })
    }, {
      value: C.ClipsLengthSettings.MINUTES_1,
      label: R.default.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 1
      })
    }, {
      value: C.ClipsLengthSettings.MINUTES_2,
      label: R.default.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 2
      })
    }], [F]),
    k = n.useMemo(() => [{
      value: O.ApplicationStreamResolutions.RESOLUTION_480,
      label: R.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: O.ApplicationStreamResolutions.RESOLUTION_480
      })
    }, {
      value: O.ApplicationStreamResolutions.RESOLUTION_720,
      label: R.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: O.ApplicationStreamResolutions.RESOLUTION_720
      })
    }, {
      value: O.ApplicationStreamResolutions.RESOLUTION_1080,
      label: R.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: O.ApplicationStreamResolutions.RESOLUTION_1080
      })
    }, {
      value: O.ApplicationStreamResolutions.RESOLUTION_1440,
      label: R.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: O.ApplicationStreamResolutions.RESOLUTION_1440
      })
    }, {
      value: O.ApplicationStreamResolutions.RESOLUTION_SOURCE,
      label: R.default.Messages.SCREENSHARE_SOURCE
    }], [F]),
    H = n.useMemo(() => [{
      value: O.ApplicationStreamFPS.FPS_15,
      label: R.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: O.ApplicationStreamFPS.FPS_15
      })
    }, {
      value: O.ApplicationStreamFPS.FPS_30,
      label: R.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: O.ApplicationStreamFPS.FPS_30
      })
    }, {
      value: O.ApplicationStreamFPS.FPS_60,
      label: R.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: O.ApplicationStreamFPS.FPS_60
      })
    }], [F]),
    w = n.useCallback(e => {
      d.default.setKeybind({
        ...b,
        shortcut: e
      })
    }, [b]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(o.FormSection, {
      disabled: !e,
      children: [!e && (0, a.jsx)(T.default, {
        look: T.InfoBoxLooks.WARNING,
        className: D.formItem,
        children: R.default.Messages.CLIPS_SETTINGS_HW_ENCODING_MUST_BE_ENABLED_INFOBOX.format({
          onClick: () => u.default.open(A.UserSettingsSections.VOICE, null, {
            scrollPosition: x.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        })
      }), j === h.ClipsHardwareClassification.BELOW_MINIMUM ? (0, a.jsx)(T.default, {
        look: T.InfoBoxLooks.WARNING,
        className: D.formItem,
        children: R.default.Messages.CLIPS_SETTINGS_UNDER_MIN_SPECS
      }) : null, (0, a.jsx)(o.FormSwitch, {
        hideBorder: !0,
        disabled: !e,
        className: D.formItem,
        value: t,
        note: R.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS_HELP,
        onChange: e => I.updateClipsEnabled({
          clipsEnabled: e,
          trackAnalytics: !0
        }),
        children: R.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
      }), e && (0, a.jsx)(T.default, {
        className: D.formItem,
        children: R.default.Messages.CLIPS_SETTINGS_QUALITY_INFOBOX
      })]
    }), U && y && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.FormDivider, {}), (0, a.jsx)(o.FormSection, {
        className: v.marginTop20,
        disabled: !e,
        children: (0, a.jsx)(o.FormSwitch, {
          hideBorder: !0,
          disabled: !e,
          className: D.formItem,
          value: l,
          note: R.default.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS_HELP,
          onChange: e => I.updateDecoupledClipsEnabled({
            enabled: e,
            trackAnalytics: !0
          }),
          children: R.default.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS
        })
      })]
    }), B && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.FormDivider, {}), (0, a.jsx)(o.FormSection, {
        className: v.marginTop20,
        children: (0, a.jsx)(o.FormSwitch, {
          hideBorder: !0,
          className: D.formItem,
          value: s,
          note: R.default.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS_HELP,
          onChange: e => I.updateRemindersEnabled(e),
          children: R.default.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS
        })
      })]
    }), (0, a.jsx)(o.FormDivider, {}), (0, a.jsxs)(o.FormSection, {
      className: v.marginTop20,
      children: [(0, a.jsx)(p.SelectItem, {
        className: D.formItem,
        select: I.updateClipsLength,
        title: R.default.Messages.CLIPS_SETTINGS_LENGTH,
        note: R.default.Messages.CLIPS_SETTINGS_LENGTH_HELP,
        value: L,
        options: G
      }), (0, a.jsx)(p.SelectItem, {
        className: D.formItem,
        select: e => I.updateClipsQuality({
          resolution: e,
          frameRate: P.frameRate
        }),
        title: R.default.Messages.CLIPS_SETTINGS_RESOLUTION,
        note: R.default.Messages.CLIPS_SETTINGS_RESOLUTION_NOTE,
        value: P.resolution,
        options: k
      }), (0, a.jsx)(p.SelectItem, {
        className: D.formItem,
        select: e => I.updateClipsQuality({
          resolution: P.resolution,
          frameRate: e
        }),
        title: R.default.Messages.CLIPS_SETTINGS_FRAMERATE,
        note: R.default.Messages.CLIPS_SETTINGS_FRAMERATE_NOTE,
        value: P.frameRate,
        options: H
      }), (0, a.jsx)(p.InputItem, {
        className: D.formItem,
        title: R.default.Messages.CLIPS_SETTINGS_KEYBIND,
        note: R.default.Messages.CLIPS_SETTINGS_KEYBIND_HELP,
        children: (0, a.jsx)("div", {
          className: M.keyRecorder,
          children: (0, a.jsx)(c.default, {
            defaultValue: b.shortcut,
            onChange: w
          })
        })
      })]
    })]
  })
}