"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("524297"),
  s = n("578287"),
  l = n("65810"),
  i = n("49111"),
  r = {
    [i.RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: (0, a.createRPCCommand)(i.RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
      scope: l.activityInstanceConnectedParticipantsScope,
      handler(e) {
        let {
          socket: t
        } = e;
        return (0, s.validatePostMessageTransport)(t.transport), (0, l.activityInstanceConnectedParticipants)()
      }
    })
  }