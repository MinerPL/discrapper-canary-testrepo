"use strict";
n.r(t);
var a = n("45792"),
  s = n("914946"),
  l = n("238679"),
  i = n("981631");
t.default = {
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