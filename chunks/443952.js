"use strict";
n.r(t), n("47120"), n("411104"), n("789020");
var a = n("735250");
n("470079");
var s = n("243814"),
  l = n("45792"),
  i = n("481060"),
  r = n("278323"),
  o = n("988298"),
  u = n("224706"),
  d = n("45114"),
  c = n("479531"),
  f = n("40851"),
  E = n("566620"),
  h = n("596223"),
  _ = n("838195"),
  C = n("928518"),
  m = n("592125"),
  S = n("293273"),
  p = n("885110"),
  g = n("451478"),
  I = n("630388"),
  T = n("823379"),
  A = n("591759"),
  N = n("228488"),
  v = n("996106"),
  R = n("914946"),
  O = n("452426"),
  L = n("561205"),
  M = n("600027"),
  y = n("852926"),
  P = n("186901"),
  x = n("981631");
async function D(e, t, n, a) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
    l = S.default.getApplicationActivity(t);
  if (null == l || null == l.secrets || !(0, R.validateActivityInvite)(a, l.party, l.secrets)) throw new v.default({
    errorCode: x.RPCErrors.NO_ELIGIBLE_ACTIVITY
  }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
  let i = (0, h.default)(l, p.default);
  if (i) {
    let {
      lock: t
    } = (0, y.unlockOverlay)(e);
    return (0, o.openModal)(l, i).then(() => {
      throw t(), new v.default({
        errorCode: x.RPCErrors.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure user does have have privacy enabled.")
    })
  }
  await r.default.sendActivityInviteUser({
    userId: n,
    type: a,
    activity: l,
    content: s,
    location: "In-Game Invite"
  })
}
t.default = {
  [x.RPCCommands.SEND_ACTIVITY_JOIN_INVITE]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [s.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          pid: a
        }
      } = e, s = t.application.id;
      if (null == s) throw new v.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return D(a, s, n, x.ActivityActionTypes.JOIN)
    }
  },
  [x.RPCCommands.CLOSE_ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [s.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    handler(e) {
      let {
        args: {
          user_id: t
        }
      } = e, n = m.default.getDMFromUserId(t);
      null != n && (0, d.ack)(n, !0, !0)
    }
  },
  [x.RPCCommands.ACTIVITY_INVITE_USER]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [s.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, O.default)(e).required().keys({
      user_id: e.string().required(),
      type: e.number().required().valid([x.ActivityActionTypes.JOIN]),
      content: e.string().min(0).max(1024),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: n,
          user_id: a,
          content: s,
          pid: l
        }
      } = e, i = t.application.id;
      if (null == i) throw new v.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return D(l, i, a, n, s)
    }
  },
  [x.RPCCommands.ACCEPT_ACTIVITY_INVITE]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [s.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, O.default)(e).required().keys({
      type: e.number().required().valid([x.ActivityActionTypes.JOIN]),
      user_id: e.string().required(),
      session_id: e.string().required(),
      channel_id: e.string().required(),
      message_id: e.string().required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: n,
          user_id: a,
          session_id: s,
          channel_id: l,
          message_id: i
        }
      } = e, r = t.application.id;
      if (null == r) throw new v.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let o = Promise.resolve(!1);
      if (n === x.ActivityActionTypes.JOIN) o = u.default.join({
        userId: a,
        sessionId: s,
        applicationId: r,
        channelId: l,
        messageId: i
      });
      return o.then(e => {
        if (!e) throw new v.default({
          errorCode: x.RPCErrors.INVALID_INVITE
        }, "Invite is expired or invalid.")
      })
    }
  },
  [x.RPCCommands.OPEN_INVITE_DIALOG]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [s.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE, P.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      let {
        socket: t
      } = e, {
        channel: s,
        guild: l
      } = (0, M.validateOpenInviteDialog)(), r = C.default.getWindow(x.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
      (null == r ? void 0 : r.closed) && (r = null);
      let o = null != r ? x.AppContext.POPOUT : x.AppContext.APP;
      (0, N.exitFullScreen)({}, null == r ? void 0 : r.document), (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("7654")]).then(n.bind(n, "560114"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: l,
          channel: s,
          applicationId: t.application.id,
          analyticsLocation: x.AnalyticsLocations.ACTIVITY_RPC,
          source: x.InstantInviteSources.ACTIVITY_INVITE
        })
      }, {
        contextKey: o === x.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
      })
    }
  },
  [x.RPCCommands.INITIATE_IMAGE_UPLOAD]: (0, l.createRPCCommand)(x.RPCCommands.INITIATE_IMAGE_UPLOAD, {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [s.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE, P.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      var t;
      let {
        socket: n
      } = e, a = n.application.id;
      if (null == a) throw new v.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let s = null === (t = (0, L.default)()) || void 0 === t ? void 0 : t.id;
      if (null == s) throw new v.default({
        errorCode: x.RPCErrors.UNKNOWN_ERROR
      }, "Unable to find selected channel");
      return new Promise((e, t) => {
        ! function(e, t) {
          var n;
          let a = g.default.getLastFocusedWindowId(),
            s = null == a ? null : null === (n = (0, f.getAppWindowContextValue)(a)) || void 0 === n ? void 0 : n.renderWindow;
          if (null == s) throw new v.default({
            errorCode: x.RPCErrors.UNKNOWN_ERROR
          }, "No valid window found");
          let l = s.document.createElement("input");
          l.style.display = "none", l.type = "file", l.accept = "image/jpeg, image/jpg, image/png, image/gif";
          let i = () => {
            (null == l.files || 0 === l.files.length) && t(), s.document.body.removeEventListener("focus", i, !0), setTimeout(() => {
              s.document.body.removeChild(l)
            }, 1e3)
          };
          l.addEventListener("change", () => {
            (0, T.isNotNullish)(l.files) && e(l.files[0]), i()
          }), l.addEventListener("cancel", () => {
            i()
          }), s.document.body.addEventListener("focus", i, !0), s.document.body.appendChild(l), l.click()
        }(async n => {
          let l = await (0, E.uploadImageAttachment)(a, s, n);
          (0, T.isNotNullish)(l) && (0, T.isNotNullish)(l.url) && !(l instanceof c.default) ? e({
            image_url: l.url
          }): t(l)
        }, () => t(Error("Upload canceled")))
      }).catch(e => {
        var t;
        throw new v.default({
          errorCode: x.RPCErrors.UNKNOWN_ERROR
        }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : "Failed to upload image")
      })
    }
  }),
  [x.RPCCommands.OPEN_SHARE_MOMENT_DIALOG]: (0, l.createRPCCommand)(x.RPCCommands.OPEN_SHARE_MOMENT_DIALOG, {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [P.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      var t;
      let {
        socket: n,
        args: {
          mediaUrl: a
        }
      } = e;
      (0, R.validatePostMessageTransport)(n.transport);
      let s = n.application.id;
      if (null == s) throw new v.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No application.");
      if (!(0, I.hasFlag)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, x.ApplicationFlags.EMBEDDED)) throw new v.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "This application cannot access this API");
      let l = (0, L.default)();
      if (null == l) throw new v.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No channel found");
      if (!A.default.isDiscordCdnUrl(a)) throw new v.default({
        errorCode: x.RPCErrors.INVALID_PAYLOAD
      }, "mediaUrl must be a Discord CDN url");
      (0, _.openActivityShareMomentModal)({
        applicationId: s,
        channelId: l.id,
        mediaUrl: a
      })
    }
  })
}