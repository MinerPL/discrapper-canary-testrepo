"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007"), n("702976");
var a = n("872717"),
  s = n("84460"),
  l = n("648456"),
  i = n("299285"),
  r = n("167726"),
  o = n("599110"),
  u = n("568734"),
  d = n("861309"),
  c = n("578287"),
  f = n("716724"),
  E = n("613652"),
  h = n("492249"),
  _ = n("49111"),
  C = {
    [_.RPCCommands.SEND_ANALYTICS_EVENT]: {
      validation: e => (0, f.default)(e).required().keys({
        event_name: e.string().required(),
        event_properties: e.object().required()
      }),
      handler(e) {
        var t;
        let {
          socket: n,
          args: {
            event_name: a,
            event_properties: s
          }
        } = e;
        (0, c.validatePostMessageTransport)(n.transport), (0, c.validateApplication)(n.application);
        let r = n.application.id,
          f = (0, E.default)(),
          h = null == f ? void 0 : f.getGuildId();
        if (null == f) throw new d.default({
          errorCode: _.RPCErrors.INVALID_COMMAND
        }, "Invalid channel");
        let C = i.default.getApplication(r),
          S = (0, u.hasFlag)(null !== (t = null == C ? void 0 : C.flags) && void 0 !== t ? t : 0, _.ApplicationFlags.EMBEDDED_FIRST_PARTY);
        if (!S) throw new d.default({
          errorCode: _.RPCErrors.INVALID_COMMAND
        }, "This application cannot access this API");
        let I = (0, l.getActiveAnalyticsSessionIDs)(r),
          m = {
            activity_application_id: r,
            activity_channel_type: f.type,
            activity_guild_id: h,
            activity_user_session_id: null == I ? void 0 : I.activityUserSessionId
          };
        o.default.track(a, {
          ...m,
          ...s
        })
      }
    },
    [_.RPCCommands.GET_APPLICATION_TICKET]: {
      scope: h.RPC_LOCAL_SCOPE,
      handler(e) {
        let {
          socket: t
        } = e, n = t.application.id;
        if (null == n) throw new d.default({
          errorCode: _.RPCErrors.INVALID_COMMAND
        }, "No application.");
        return a.HTTP.post({
          url: _.Endpoints.APPLICATION_TICKET(n),
          body: {
            test_mode: r.default.inTestModeForApplication(n) || s.default.inDevModeForApplication(n)
          },
          retries: 3,
          oldFormErrors: !0
        }).then(e => {
          let {
            body: t
          } = e;
          return t
        })
      }
    }
  }