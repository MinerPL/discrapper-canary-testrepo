"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var a = n("913144"),
  s = n("629109"),
  i = n("539405"),
  l = n("987317"),
  r = n("52289"),
  o = n("316272"),
  u = n("56947"),
  d = n("803725"),
  c = n("712258"),
  f = n("393414"),
  E = n("245463"),
  _ = n("570413"),
  h = n("42887"),
  C = n("102985"),
  I = n("860957"),
  T = n("901165"),
  S = n("599110"),
  m = n("360782"),
  p = n("49111"),
  A = n("353927");
let g = {
  [p.GlobalKeybindActions.TOGGLE_PRIORITY_SPEAKER]: {
    onTrigger() {},
    keyEvents: {}
  },
  [p.GlobalKeybindActions.UNASSIGNED]: {
    onTrigger() {},
    keyEvents: {}
  },
  [p.GlobalKeybindActions.PUSH_TO_TALK]: {
    onTrigger(e, t) {
      h.default.getMode(t.context) === p.InputModes.PUSH_TO_TALK && (g[p.GlobalKeybindActions.PUSH_TO_TALK].isPressed = e, h.default.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !1), t.context))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [p.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY]: {
    onTrigger(e) {
      h.default.getMode() === p.InputModes.PUSH_TO_TALK && (g[p.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY].isPressed = e, h.default.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !0), A.MediaEngineContextTypes.DEFAULT))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [p.GlobalKeybindActions.PUSH_TO_MUTE]: {
    onTrigger(e) {
      if (h.default.getMode() === p.InputModes.VOICE_ACTIVITY) !h.default.isSelfDeaf() && (g[p.GlobalKeybindActions.PUSH_TO_MUTE].isPressed = e, s.default.setTemporarySelfMute(e))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [p.GlobalKeybindActions.TOGGLE_MUTE]: {
    onTrigger: () => s.default.toggleSelfMute({
      usedKeybind: !0
    }),
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [p.GlobalKeybindActions.TOGGLE_DEAFEN]: {
    onTrigger() {
      s.default.toggleSelfDeaf()
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [p.GlobalKeybindActions.TOGGLE_VOICE_MODE]: {
    onTrigger() {
      let e = h.default.getMode() === p.InputModes.PUSH_TO_TALK ? p.InputModes.VOICE_ACTIVITY : p.InputModes.PUSH_TO_TALK;
      s.default.setMode(e)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [p.GlobalKeybindActions.TOGGLE_OVERLAY]: {
    onTrigger() {
      let e = I.default.enabled;
      i.default.setEnabled(!e)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [p.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK]: {
    onTrigger(e) {
      let t = (0, m.default)();
      null != t && (e ? i.default.setUILocked(!T.default.isUILocked(t), t) : i.default.setInputLocked(!I.default.isInputLocked(t), t))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    }
  },
  [p.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
    onTrigger() {
      let e = I.default.getFocusedPID(),
        t = null != e;
      null != e && t && T.default.isPinned(p.OverlayWidgets.TEXT) && I.default.isReady(e) && I.default.isInputLocked(e) && i.default.activateRegion(p.OverlayActiveRegions.TEXT_WIDGET)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [p.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING]: {
    onTrigger() {
      (0, c.default)()
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [p.GlobalKeybindActions.TOGGLE_STREAMER_MODE]: {
    onTrigger() {
      r.default.setEnabled(!C.default.enabled)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [p.GlobalKeybindActions.NAVIGATE_BACK]: {
    onTrigger: () => (0, f.back)(),
    keyEvents: {
      keyup: !0,
      keydown: !1,
      focused: !0,
      blurred: !1
    }
  },
  [p.GlobalKeybindActions.NAVIGATE_FORWARD]: {
    onTrigger: () => (0, f.forward)(),
    keyEvents: {
      keyup: !0,
      keydown: !1,
      focused: !0,
      blurred: !1
    }
  },
  [p.GlobalKeybindActions.SOUNDBOARD]: {
    onTrigger: () => {
      if (!(0, E.canSelectedVoiceChannelUseSoundboard)()) return;
      let e = (0, m.default)();
      null != e && (T.default.isUILocked(e) ? (0, _.openSoundboardInOverlay)(!0, e) : (0, _.closeSoundboardInOverlay)(e))
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [p.GlobalKeybindActions.SOUNDBOARD_HOLD]: {
    onTrigger: e => {
      if (!(0, E.canSelectedVoiceChannelUseSoundboard)()) return;
      let t = (0, m.default)();
      if (null != t) {
        e ? (0, _.openSoundboardInOverlay)(!1, t) : (0, _.closeSoundboardInOverlay)(t);
        return
      }
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    }
  },
  [p.GlobalKeybindActions.SAVE_CLIP]: {
    onTrigger: () => {
      let e = (0, u.areClipsEnabled)();
      e && (S.default.track(p.AnalyticEvents.CLIP_SAVE_KEYBIND_PRESSED), (0, d.saveClip)())
    },
    keyEvents: {
      keyup: !1,
      keydown: !0
    }
  },
  [p.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL]: {
    onTrigger(e, t) {
      let {
        params: {
          channelId: n
        }
      } = t;
      null != n && l.default.selectVoiceChannel(n)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1,
      blurred: !0,
      focused: !0
    }
  },
  [p.GlobalKeybindActions.DISCONNECT_FROM_VOICE_CHANNEL]: {
    onTrigger() {
      l.default.selectVoiceChannel(null)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1,
      blurred: !0,
      focused: !0
    }
  }
};
class N extends o.default {
  _initialize() {
    a.default.wait(() => a.default.dispatch({
      type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
      keybinds: g
    }))
  }
  _terminate() {}
}
var R = new N