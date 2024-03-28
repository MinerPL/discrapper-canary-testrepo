"use strict";
n.r(t), n("47120");
var a = n("120960"),
  s = n("996106"),
  l = n("452426"),
  i = n("186901"),
  r = n("981631"),
  o = n("65154");
t.default = {
  [r.RPCCommands.SET_CERTIFIED_DEVICES]: {
    scope: {
      [i.RPC_SCOPE_CONFIG.ANY]: [r.OAuth2Scopes.RPC, i.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, l.default)(e).required().keys({
      devices: e.array().items((0, l.default)(e).keys({
        type: e.string().required().valid([o.DeviceTypes.AUDIO_INPUT, o.DeviceTypes.AUDIO_OUTPUT, o.DeviceTypes.VIDEO_INPUT]),
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
      if (null == t.application.id) throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, "No application.");
      (0, a.setCertifiedDevices)(t.application.id, n.map(e => ({
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