"use strict";
n.r(t), n("47120");
var a = n("243814"),
  s = n("120960"),
  l = n("996106"),
  i = n("452426"),
  r = n("186901"),
  o = n("981631"),
  u = n("65154");
t.default = {
  [o.RPCCommands.SET_CERTIFIED_DEVICES]: {
    scope: {
      [r.RPC_SCOPE_CONFIG.ANY]: [a.OAuth2Scopes.RPC, r.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, i.default)(e).required().keys({
      devices: e.array().items((0, i.default)(e).keys({
        type: e.string().required().valid([u.DeviceTypes.AUDIO_INPUT, u.DeviceTypes.AUDIO_OUTPUT, u.DeviceTypes.VIDEO_INPUT]),
        id: e.string().required().min(1),
        vendor: e.object().required().keys({
          name: e.string().min(1),
          url: e.string().min(1)
        }),
        model: e.object().required().keys({
          name: e.string().min(1),
          url: e.string().min(1)
        }),
        related: e.array().items(e.string().min(1)),
        echo_cancellation: e.boolean(),
        noise_suppression: e.boolean(),
        automatic_gain_control: e.boolean(),
        hardware_mute: e.boolean()
      }))
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          devices: n
        }
      } = e;
      if (null == t.application.id) throw new l.default({
        errorCode: o.RPCErrors.INVALID_COMMAND
      }, "No application.");
      (0, s.setCertifiedDevices)(t.application.id, n.map(e => ({
        type: e.type,
        id: e.id,
        vendor: e.vendor,
        model: e.model,
        related: e.related.filter(e => n.some(t => t.id === e)),
        echoCancellation: e.echo_cancellation,
        noiseSuppression: e.noise_suppression,
        automaticGainControl: e.automatic_gain_control,
        hardwareMute: e.hardware_mute
      })))
    }
  }
}