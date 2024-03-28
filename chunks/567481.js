"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("24124"),
  r = n("447543"),
  o = n("13245"),
  u = n("596223"),
  d = n("293273"),
  c = n("885110"),
  f = n("996106"),
  E = n("914946"),
  h = n("452426"),
  _ = n("852926"),
  C = n("186901"),
  m = n("981631");
t.default = {
  [m.RPCCommands.SET_OVERLAY_LOCKED]: {
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
      } = e;
      if (null == a.id) throw new f.default({
        errorCode: m.RPCErrors.INVALID_COMMAND
      }, "No application.");
      o.default.setLocked(t, n)
    }
  },
  [m.RPCCommands.OPEN_OVERLAY_ACTIVITY_INVITE]: {
    scope: C.RPC_LOCAL_SCOPE,
    validation: e => (0, h.default)(e).required().keys({
      type: e.number().required().valid([m.ActivityActionTypes.JOIN]),
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
        errorCode: m.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let l = d.default.getApplicationActivity(s);
      if (null == l || null == l.secrets || !(0, E.validateActivityInvite)(n, l.party, l.secrets)) throw new f.default({
        errorCode: m.RPCErrors.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
      let {
        lock: r
      } = (0, _.unlockOverlay)(a), o = (0, u.default)(l, c.default);
      return (0, i.openModal)(l, o).then(() => {
        if (r(), o) throw new f.default({
          errorCode: m.RPCErrors.NO_ELIGIBLE_ACTIVITY
        }, "No eligible activity for application. Ensure user does have have privacy enabled.")
      })
    }
  },
  [m.RPCCommands.OPEN_OVERLAY_GUILD_INVITE]: {
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
      } = e;
      if (null == a.application.id) throw new f.default({
        errorCode: m.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return r.default.resolveInvite(t, "Game SDK").then(e => {
        let {
          invite: t,
          code: a
        } = e;
        if (null == t) throw new f.default({
          errorCode: m.RPCErrors.INVALID_INVITE
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
  [m.RPCCommands.OPEN_OVERLAY_VOICE_SETTINGS]: {
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
        errorCode: m.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let {
        lock: r
      } = (0, _.unlockOverlay)(t);
      return new Promise(e => {
        (0, s.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("84518")]).then(n.bind(n, "344516"));
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