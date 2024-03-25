"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("424973"), n("222007");
var a = n("812204"),
  s = n("305122"),
  l = n("235004"),
  i = n("389480"),
  r = n("78581"),
  o = n("245463"),
  u = n("697218"),
  d = n("861309"),
  c = n("716724"),
  f = n("880553"),
  E = n("492249"),
  h = n("843455"),
  _ = {
    [h.RPCCommands.GET_SOUNDBOARD_SOUNDS]: {
      scope: {
        [E.RPC_SCOPE_CONFIG.ANY]: [h.OAuth2Scopes.RPC, E.RPC_LOCAL_SCOPE]
      },
      async handler() {
        await (0, s.maybeFetchSoundboardSounds)();
        let e = l.default.getSounds(),
          t = [];
        return e.forEach(e => e.forEach(e => t.push((0, i.soundboardSoundToAPI)(e)))), t
      }
    },
    [h.RPCCommands.PLAY_SOUNDBOARD_SOUND]: {
      scope: {
        [E.RPC_SCOPE_CONFIG.ALL]: [h.OAuth2Scopes.RPC, h.OAuth2Scopes.RPC_VOICE_WRITE]
      },
      validation: e => (0, c.default)(e).required().keys({
        guild_id: e.string(),
        sound_id: e.string()
      }),
      async handler(e) {
        let {
          args: {
            guild_id: t,
            sound_id: n
          }
        } = e;
        await (0, s.maybeFetchSoundboardSounds)();
        let i = u.default.getCurrentUser(),
          c = l.default.getSound(t, n),
          E = (0, f.default)(),
          _ = null != c && null != i && (0, r.canUseSoundboardSound)(i, c, E);
        if (null == E) throw new d.default({
          errorCode: h.RPCErrors.INVALID_CHANNEL
        }, "Invalid Channel.");
        if (_) {
          if ((0, o.default)(E)) null != c && (0, r.playSound)(c, E.id, [a.default.RPC]);
          else throw new d.default({
            errorCode: h.RPCErrors.INVALID_PERMISSIONS
          }, "Invalid Permissions.")
        } else throw new d.default({
          errorCode: h.RPCErrors.INVALID_SOUND
        }, "Invalid Sound.")
      }
    }
  }