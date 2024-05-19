"use strict";
n.r(t), n("47120");
var a = n("243814"),
  s = n("846027"),
  l = n("131951"),
  i = n("594174"),
  r = n("996106"),
  o = n("452426"),
  u = n("852926"),
  d = n("186901"),
  c = n("981631");
t.default = {
  [c.RPCCommands.SET_USER_VOICE_SETTINGS]: {
    scope: {
      [d.RPC_SCOPE_CONFIG.ANY]: [a.OAuth2Scopes.RPC, a.OAuth2Scopes.RPC_VOICE_WRITE]
    },
    validation: e => (0, o.default)(e).required().keys({
      user_id: e.string().required(),
      pan: (0, o.default)(e).keys({
        left: e.number().min(0).max(1).required(),
        right: e.number().min(0).max(1).required()
      }),
      volume: e.number().min(0).max(200),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          user_id: t,
          pan: n,
          volume: a,
          mute: o
        }
      } = e, u = i.default.getCurrentUser();
      if (null == i.default.getUser(t) || (null == u ? void 0 : u.id) === t) throw new r.default({
        errorCode: c.RPCErrors.INVALID_USER
      }, "Invalid user id: ".concat(t));
      if (null != n && s.default.setLocalPan(t, n.left, n.right), null != a && s.default.setLocalVolume(t, a), null != o) {
        let e = l.default.isLocalMute(t);
        (e && !o || !e && o) && s.default.toggleLocalMute(t)
      }
      return {
        user_id: t,
        pan: l.default.getLocalPan(t),
        volume: l.default.getLocalVolume(t),
        mute: l.default.isLocalMute(t)
      }
    }
  },
  [c.RPCCommands.GET_VOICE_SETTINGS]: {
    scope: {
      [d.RPC_SCOPE_CONFIG.ANY]: [a.OAuth2Scopes.RPC, a.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler: () => (0, u.getDeprecatedVoiceSettings)()
  },
  [c.RPCCommands.SET_VOICE_SETTINGS]: {
    scope: {
      [d.RPC_SCOPE_CONFIG.ANY]: [a.OAuth2Scopes.RPC, a.OAuth2Scopes.RPC_VOICE_WRITE]
    },
    validation: e => (0, o.default)(e).required().keys({
      input: (0, o.default)(e).keys({
        device_id: e.string().valid(Object.keys(l.default.getInputDevices())),
        volume: e.number().min(0).max(100)
      }),
      output: (0, o.default)(e).keys({
        device_id: e.string().valid(Object.keys(l.default.getOutputDevices())),
        volume: e.number().min(0).max(200)
      }),
      mode: (0, o.default)(e).keys({
        type: e.string().valid(Object.keys(c.InputModes)),
        auto_threshold: e.boolean(),
        threshold: e.number().min(-100).max(0),
        shortcut: e.array().items((0, o.default)(e).keys({
          type: e.number().min(0).max(3).required(),
          code: e.number().required(),
          name: e.string()
        })),
        delay: e.number().min(0).max(2e3)
      }),
      automatic_gain_control: e.boolean(),
      echo_cancellation: e.boolean(),
      noise_suppression: e.boolean(),
      qos: e.boolean(),
      silence_warning: e.boolean(),
      deaf: e.boolean(),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          input: t,
          output: n,
          mode: a,
          automatic_gain_control: i,
          echo_cancellation: r,
          noise_suppression: o,
          qos: d,
          silence_warning: c,
          deaf: f,
          mute: E
        }
      } = e;
      if (t && (null != t.device_id && s.default.setInputDevice(t.device_id), null != t.volume && s.default.setInputVolume(t.volume)), n && (null != n.device_id && s.default.setOutputDevice(n.device_id), null != n.volume && s.default.setOutputVolume(n.volume)), a) {
        let e = l.default.getMode(),
          t = l.default.getModeOptions();
        null != a.type && (e = a.type), null != a.auto_threshold && (t.autoThreshold = a.auto_threshold), null != a.threshold && (t.threshold = a.threshold), null != a.shortcut && (t.shortcut = a.shortcut.map(e => [e.type, e.code])), null != a.delay && (t.delay = a.delay), s.default.setMode(e, t)
      }
      if (null != i && s.default.setAutomaticGainControl(i), null != r && s.default.setEchoCancellation(r), null != o && s.default.setNoiseSuppression(o), null != d && s.default.setQoS(d), null != c && s.default.setSilenceWarning(c), null != f) {
        let e = l.default.isSelfDeaf();
        (e && !f || !e && f) && s.default.toggleSelfDeaf()
      }
      if (null != E) {
        let e = l.default.isSelfMute();
        (e && !E || !e && E) && s.default.toggleSelfMute()
      }
      return (0, u.getDeprecatedVoiceSettings)()
    }
  }
}