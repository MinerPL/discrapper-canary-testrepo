"use strict";
n.r(t), n("47120");
var a = n("846027"),
  s = n("131951"),
  l = n("13140"),
  i = n("996106"),
  r = n("452426"),
  o = n("186901"),
  u = n("981631"),
  d = n("65154");

function c(e) {
  let t = e.application.id;
  if (null == t) throw new i.default({
    errorCode: u.RPCErrors.INVALID_COMMAND
  }, "No application.");
  return t
}
t.default = {
  [u.RPCCommands.SET_VOICE_SETTINGS_2]: {
    scope: o.RPC_LOCAL_SCOPE,
    validation: e => (0, r.default)(e).required().keys({
      input_mode: (0, r.default)(e).keys({
        type: e.string().valid(Object.keys(u.InputModes)),
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
          self_mute: i,
          self_deaf: r
        }
      } = e, o = c(t);
      null != n && a.default.setMode(n.type, {
        shortcut: (0, l.toCombo)(n.shortcut)
      }, o), null != i && i !== s.default.isSelfMute(o) && a.default.toggleSelfMute({
        context: o
      }), null != r && r !== s.default.isSelfDeaf(o) && a.default.toggleSelfDeaf({
        context: o
      })
    }
  },
  [u.RPCCommands.SET_USER_VOICE_SETTINGS_2]: {
    scope: o.RPC_LOCAL_SCOPE,
    validation: e => (0, r.default)(e).required().keys({
      user_id: e.string().required(),
      volume: e.number().min(0).max(200),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          mute: l,
          volume: i
        }
      } = e, r = c(t);
      null != l && l !== s.default.isLocalMute(n, r) && a.default.toggleLocalMute(n, r), null != i && a.default.setLocalVolume(n, i, r)
    }
  },
  [u.RPCCommands.PUSH_TO_TALK]: {
    scope: {
      [o.RPC_SCOPE_CONFIG.ALL]: [u.OAuth2Scopes.RPC, u.OAuth2Scopes.RPC_VOICE_WRITE]
    },
    validation: e => (0, r.default)(e).required().keys({
      active: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          active: t
        }
      } = e;
      s.default.getMode(d.MediaEngineContextTypes.DEFAULT) === u.InputModes.PUSH_TO_TALK && s.default.getMediaEngine().eachConnection(e => e.setForceAudioInput(t), d.MediaEngineContextTypes.DEFAULT)
    }
  }
}