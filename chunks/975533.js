"use strict";
n.r(t);
var a = n("570140"),
  s = n("846027"),
  l = n("13245"),
  i = n("287734"),
  r = n("872810"),
  o = n("223245"),
  u = n("317770"),
  d = n("924557"),
  c = n("39604"),
  f = n("569545"),
  E = n("722835"),
  h = n("703656"),
  _ = n("641015"),
  C = n("183584"),
  m = n("199902"),
  S = n("131951"),
  I = n("246946"),
  p = n("808506"),
  T = n("237997"),
  g = n("626135"),
  A = n("554174"),
  N = n("981631"),
  v = n("65154");
let O = {
  [N.GlobalKeybindActions.TOGGLE_PRIORITY_SPEAKER]: {
    onTrigger() {},
    keyEvents: {}
  },
  [N.GlobalKeybindActions.UNASSIGNED]: {
    onTrigger() {},
    keyEvents: {}
  },
  [N.GlobalKeybindActions.PUSH_TO_TALK]: {
    onTrigger(e, t) {
      S.default.getMode(t.context) === N.InputModes.PUSH_TO_TALK && (O[N.GlobalKeybindActions.PUSH_TO_TALK].isPressed = e, S.default.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !1), t.context))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [N.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY]: {
    onTrigger(e) {
      S.default.getMode() === N.InputModes.PUSH_TO_TALK && (O[N.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY].isPressed = e, S.default.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !0), v.MediaEngineContextTypes.DEFAULT))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [N.GlobalKeybindActions.PUSH_TO_MUTE]: {
    onTrigger(e) {
      if (S.default.getMode() === N.InputModes.VOICE_ACTIVITY) !S.default.isSelfDeaf() && (O[N.GlobalKeybindActions.PUSH_TO_MUTE].isPressed = e, s.default.setTemporarySelfMute(e))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [N.GlobalKeybindActions.TOGGLE_MUTE]: {
    onTrigger: () => s.default.toggleSelfMute({
      usedKeybind: !0
    }),
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_DEAFEN]: {
    onTrigger() {
      s.default.toggleSelfDeaf()
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_VOICE_MODE]: {
    onTrigger() {
      let e = S.default.getMode() === N.InputModes.PUSH_TO_TALK ? N.InputModes.VOICE_ACTIVITY : N.InputModes.PUSH_TO_TALK;
      s.default.setMode(e)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_OVERLAY]: {
    onTrigger() {
      let e = p.default.enabled;
      l.default.setEnabled(!e, p.default.legacyEnabled)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK]: {
    onTrigger(e) {
      let t = (0, A.default)();
      null != t && (e ? l.default.setUILocked(!T.default.isUILocked(t), t) : l.default.setInputLocked(!p.default.isInputLocked(t), t))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    }
  },
  [N.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
    onTrigger() {
      let e = p.default.getFocusedPID(),
        t = null != e;
      null != e && t && T.default.isPinned(N.OverlayWidgets.TEXT) && p.default.isReady(e) && p.default.isInputLocked(e) && l.default.activateRegion(N.OverlayActiveRegions.TEXT_WIDGET)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING]: {
    onTrigger() {
      let e = m.default.getCurrentUserActiveStream();
      if (null != e) return (0, r.stopStream)((0, f.encodeStreamKey)(e));
      (0, E.default)()
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_STREAMER_MODE]: {
    onTrigger() {
      o.default.setEnabled(!I.default.enabled)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.NAVIGATE_BACK]: {
    onTrigger: () => (0, h.back)(),
    keyEvents: {
      keyup: !0,
      keydown: !1,
      focused: !0,
      blurred: !1
    }
  },
  [N.GlobalKeybindActions.NAVIGATE_FORWARD]: {
    onTrigger: () => (0, h.forward)(),
    keyEvents: {
      keyup: !0,
      keydown: !1,
      focused: !0,
      blurred: !1
    }
  },
  [N.GlobalKeybindActions.SOUNDBOARD]: {
    onTrigger: () => {
      if (!(0, _.canSelectedVoiceChannelUseSoundboard)()) return;
      let e = (0, A.default)();
      null != e && (T.default.isUILocked(e) ? (0, C.openSoundboardInOverlay)(!0, e) : (0, C.closeSoundboardInOverlay)(e))
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.SOUNDBOARD_HOLD]: {
    onTrigger: e => {
      if (!(0, _.canSelectedVoiceChannelUseSoundboard)()) return;
      let t = (0, A.default)();
      if (null != t) {
        e ? (0, C.openSoundboardInOverlay)(!1, t) : (0, C.closeSoundboardInOverlay)(t);
        return
      }
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    }
  },
  [N.GlobalKeybindActions.SAVE_CLIP]: {
    onTrigger: () => {
      (0, d.areClipsEnabled)() && (g.default.track(N.AnalyticEvents.CLIP_SAVE_KEYBIND_PRESSED), (0, c.saveClip)())
    },
    keyEvents: {
      keyup: !1,
      keydown: !0
    }
  },
  [N.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL]: {
    onTrigger(e, t) {
      let {
        params: {
          channelId: n
        }
      } = t;
      null != n && i.default.selectVoiceChannel(n)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1,
      blurred: !0,
      focused: !0
    }
  },
  [N.GlobalKeybindActions.DISCONNECT_FROM_VOICE_CHANNEL]: {
    onTrigger() {
      i.default.selectVoiceChannel(null)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1,
      blurred: !0,
      focused: !0
    }
  }
};
class R extends u.default {
  _initialize() {
    a.default.wait(() => a.default.dispatch({
      type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
      keybinds: O
    }))
  }
  _terminate() {}
}
t.default = new R