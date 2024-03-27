"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("636974"),
  r = n("970728"),
  o = n("539405"),
  u = n("299803"),
  d = n("52028"),
  c = n("101125"),
  f = n("861309"),
  E = n("578287"),
  h = n("716724"),
  _ = n("56245"),
  C = n("492249"),
  S = n("49111"),
  I = {
    [S.RPCCommands.SET_OVERLAY_LOCKED]: {
      scope: C.RPC_LOCAL_SCOPE,
      validation: e => (0, h.default)(e).required().keys({
        locked: e.boolean().required(),
        pid: e.number().min(0).required()
      }),
      handler(e) {
        let {
          args: {
            locked: t,
            pid: n
          },
          socket: {
            application: a
          }
        } = e, s = a.id;
        if (null == s) throw new f.default({
          errorCode: S.RPCErrors.INVALID_COMMAND
        }, "No application.");
        o.default.setLocked(t, n)
      }
    },
    [S.RPCCommands.OPEN_OVERLAY_ACTIVITY_INVITE]: {
      scope: C.RPC_LOCAL_SCOPE,
      validation: e => (0, h.default)(e).required().keys({
        type: e.number().required().valid([S.ActivityActionTypes.JOIN]),
        pid: e.number().min(0).required()
      }),
      handler(e) {
        let {
          socket: t,
          args: {
            type: n,
            pid: a
          }
        } = e, s = t.application.id;
        if (null == s) throw new f.default({
          errorCode: S.RPCErrors.INVALID_COMMAND
        }, "No application.");
        let l = d.default.getApplicationActivity(s);
        if (null == l || null == l.secrets || !(0, E.validateActivityInvite)(n, l.party, l.secrets)) throw new f.default({
          errorCode: S.RPCErrors.NO_ELIGIBLE_ACTIVITY
        }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
        let {
          lock: r
        } = (0, _.unlockOverlay)(a), o = (0, u.default)(l, c.default);
        return (0, i.openModal)(l, o).then(() => {
          if (r(), o) throw new f.default({
            errorCode: S.RPCErrors.NO_ELIGIBLE_ACTIVITY
          }, "No eligible activity for application. Ensure user does have have privacy enabled.")
        })
      }
    },
    [S.RPCCommands.OPEN_OVERLAY_GUILD_INVITE]: {
      scope: C.RPC_LOCAL_SCOPE,
      validation: e => (0, h.default)(e).required().keys({
        code: e.string().required(),
        pid: e.number().min(0).required()
      }),
      handler(e) {
        let {
          args: {
            code: t,
            pid: n
          },
          socket: a
        } = e, s = a.application.id;
        if (null == s) throw new f.default({
          errorCode: S.RPCErrors.INVALID_COMMAND
        }, "No application.");
        return r.default.resolveInvite(t, "Game SDK").then(e => {
          let {
            invite: t,
            code: a
          } = e;
          if (null == t) throw new f.default({
            errorCode: S.RPCErrors.INVALID_INVITE
          }, "Invalid invite id: ".concat(a));
          let {
            context: s,
            lock: i
          } = (0, _.unlockOverlay)(n);
          return new Promise(e => {
            l.default.dispatch({
              type: "INVITE_MODAL_OPEN",
              invite: t,
              code: a,
              context: s,
              resolve: e
            })
          }).then(i)
        })
      }
    },
    [S.RPCCommands.OPEN_OVERLAY_VOICE_SETTINGS]: {
      scope: C.RPC_LOCAL_SCOPE,
      validation: e => (0, h.default)(e).required().keys({
        pid: e.number().min(0).required()
      }),
      handler(e) {
        let {
          args: {
            pid: t
          },
          socket: l
        } = e, i = l.application.id;
        if (null == i) throw new f.default({
          errorCode: S.RPCErrors.INVALID_COMMAND
        }, "No application.");
        let {
          lock: r
        } = (0, _.unlockOverlay)(t);
        return new Promise(e => {
          (0, s.openModalLazy)(async () => {
            let {
              default: t
            } = await n.el("301450").then(n.bind(n, "301450"));
            return n => (0, a.jsx)(t, {
              ...n,
              mediaEngineContext: i,
              title: l.application.name,
              onClose: () => {
                n.onClose(), r(), e()
              }
            })
          })
        })
      }
    }
  }