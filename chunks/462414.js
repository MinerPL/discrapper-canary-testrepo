"use strict";
n.r(t), n("47120");
var a = n("243814"),
  s = n("846027"),
  l = n("131951"),
  i = n("13140"),
  r = n("996106"),
  o = n("452426"),
  u = n("186901"),
  d = n("981631"),
  c = n("65154");

function f(e) {
  let t = e.application.id;
  if (null == t) throw new r.default({
    errorCode: d.RPCErrors.INVALID_COMMAND
  }, "No application.");
  return t
}
t.default = {
  [d.RPCCommands.SET_VOICE_SETTINGS_2]: {
    scope: u.RPC_LOCAL_SCOPE,
    validation: e => (0, o.default)(e).required().keys({
      input_mode: (0, o.default)(e).keys({
        type: e.string().valid(Object.keys(d.InputModes)),
        shortcut: e.string().required()
      }),
      self_mute: e.boolean(),
      self_deaf: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          input_mode: n,
          self_mute: a,
          self_deaf: r
        }
      } = e, o = f(t);
      null != n && s.default.setMode(n.type, {
        shortcut: (0, i.toCombo)(n.shortcut)
      }, o), null != a && a !== l.default.isSelfMute(o) && s.default.toggleSelfMute({
        context: o
      }), null != r && r !== l.default.isSelfDeaf(o) && s.default.toggleSelfDeaf({
        context: o
      })
    }
  },
  [d.RPCCommands.SET_USER_VOICE_SETTINGS_2]: {
    scope: u.RPC_LOCAL_SCOPE,
    validation: e => (0, o.default)(e).required().keys({
      user_id: e.string().required(),
      volume: e.number().min(0).max(200),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          mute: a,
          volume: i
        }
      } = e, r = f(t);
      null != a && a !== l.default.isLocalMute(n, r) && s.default.toggleLocalMute(n, r), null != i && s.default.setLocalVolume(n, i, r)
    }
  },
  [d.RPCCommands.PUSH_TO_TALK]: {
    scope: {
      [u.RPC_SCOPE_CONFIG.ALL]: [a.OAuth2Scopes.RPC, a.OAuth2Scopes.RPC_VOICE_WRITE]
    },
    validation: e => (0, o.default)(e).required().keys({
      active: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          active: t
        }
      } = e;
      l.default.getMode(c.MediaEngineContextTypes.DEFAULT) === d.InputModes.PUSH_TO_TALK && l.default.getMediaEngine().eachConnection(e => e.setForceAudioInput(t), c.MediaEngineContextTypes.DEFAULT)
    }
  }
}