"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007"), n("70102"), n("702976");
var a = n("37983");
n("884691");
var s = n("524297"),
  l = n("77078"),
  i = n("260365"),
  r = n("636974"),
  o = n("823411"),
  u = n("267363"),
  d = n("599417"),
  c = n("244201"),
  f = n("550766"),
  E = n("299803"),
  h = n("587984"),
  _ = n("292687"),
  C = n("42203"),
  S = n("52028"),
  I = n("101125"),
  m = n("471671"),
  p = n("568734"),
  T = n("449008"),
  g = n("253981"),
  A = n("563680"),
  N = n("861309"),
  R = n("578287"),
  O = n("716724"),
  v = n("613652"),
  L = n("207873"),
  M = n("56245"),
  P = n("492249"),
  y = n("49111");
async function D(e, t, n, a) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
    l = S.default.getApplicationActivity(t);
  if (null == l || null == l.secrets || !(0, R.validateActivityInvite)(a, l.party, l.secrets)) throw new N.default({
    errorCode: y.RPCErrors.NO_ELIGIBLE_ACTIVITY
  }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
  let o = (0, E.default)(l, I.default);
  if (o) {
    let {
      lock: t
    } = (0, M.unlockOverlay)(e);
    return (0, r.openModal)(l, o).then(() => {
      throw t(), new N.default({
        errorCode: y.RPCErrors.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure user does have have privacy enabled.")
    })
  }
  await i.default.sendActivityInviteUser({
    userId: n,
    type: a,
    activity: l,
    content: s,
    location: "In-Game Invite"
  })
}
var x = {
  [y.RPCCommands.SEND_ACTIVITY_JOIN_INVITE]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [y.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          pid: a
        }
      } = e, s = t.application.id;
      if (null == s) throw new N.default({
        errorCode: y.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return D(a, s, n, y.ActivityActionTypes.JOIN)
    }
  },
  [y.RPCCommands.CLOSE_ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [y.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    handler(e) {
      let {
        args: {
          user_id: t
        }
      } = e, n = C.default.getDMFromUserId(t);
      null != n && (0, u.ack)(n, !0, !0)
    }
  },
  [y.RPCCommands.ACTIVITY_INVITE_USER]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [y.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, O.default)(e).required().keys({
      user_id: e.string().required(),
      type: e.number().required().valid([y.ActivityActionTypes.JOIN]),
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
      if (null == i) throw new N.default({
        errorCode: y.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return D(l, i, a, n, s)
    }
  },
  [y.RPCCommands.ACCEPT_ACTIVITY_INVITE]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [y.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, O.default)(e).required().keys({
      type: e.number().required().valid([y.ActivityActionTypes.JOIN]),
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
      if (null == r) throw new N.default({
        errorCode: y.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let u = Promise.resolve(!1);
      if (n === y.ActivityActionTypes.JOIN) u = o.default.join({
        userId: a,
        sessionId: s,
        applicationId: r,
        channelId: l,
        messageId: i
      });
      return u.then(e => {
        if (!e) throw new N.default({
          errorCode: y.RPCErrors.INVALID_INVITE
        }, "Invite is expired or invalid.")
      })
    }
  },
  [y.RPCCommands.OPEN_INVITE_DIALOG]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [y.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE, P.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      let {
        socket: t
      } = e, {
        channel: s,
        guild: i
      } = (0, L.validateOpenInviteDialog)(), r = _.default.getWindow(y.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
      (null == r ? void 0 : r.closed) && (r = null);
      let o = null != r ? y.AppContext.POPOUT : y.AppContext.APP;
      (0, A.exitFullScreen)({}, null == r ? void 0 : r.document), (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("310688").then(n.bind(n, "310688"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: i,
          channel: s,
          applicationId: t.application.id,
          analyticsLocation: y.AnalyticsLocations.ACTIVITY_RPC,
          source: y.InstantInviteSources.ACTIVITY_INVITE
        })
      }, {
        contextKey: o === y.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT
      })
    }
  },
  [y.RPCCommands.INITIATE_IMAGE_UPLOAD]: (0, s.createRPCCommand)(y.RPCCommands.INITIATE_IMAGE_UPLOAD, {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [y.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE, P.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      var t;
      let {
        socket: n
      } = e, a = n.application.id;
      if (null == a) throw new N.default({
        errorCode: y.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let s = null === (t = (0, v.default)()) || void 0 === t ? void 0 : t.id;
      if (null == s) throw new N.default({
        errorCode: y.RPCErrors.UNKNOWN_ERROR
      }, "Unable to find selected channel");
      return new Promise((e, t) => {
        ! function(e, t) {
          var n;
          let a = m.default.getLastFocusedWindowId(),
            s = null == a ? null : null === (n = (0, c.getAppWindowContextValue)(a)) || void 0 === n ? void 0 : n.renderWindow;
          if (null == s) throw new N.default({
            errorCode: y.RPCErrors.UNKNOWN_ERROR
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
          let l = await (0, f.uploadImageAttachment)(a, s, n);
          (0, T.isNotNullish)(l) && (0, T.isNotNullish)(l.url) && !(l instanceof d.default) ? e({
            image_url: l.url
          }): t(l)
        }, () => t(Error("Upload canceled")))
      }).catch(e => {
        var t;
        throw new N.default({
          errorCode: y.RPCErrors.UNKNOWN_ERROR
        }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : "Failed to upload image")
      })
    }
  }),
  [y.RPCCommands.OPEN_SHARE_MOMENT_DIALOG]: (0, s.createRPCCommand)(y.RPCCommands.OPEN_SHARE_MOMENT_DIALOG, {
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
      if (null == s) throw new N.default({
        errorCode: y.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let l = (0, p.hasFlag)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, y.ApplicationFlags.EMBEDDED);
      if (!l) throw new N.default({
        errorCode: y.RPCErrors.INVALID_COMMAND
      }, "This application cannot access this API");
      let i = (0, v.default)();
      if (null == i) throw new N.default({
        errorCode: y.RPCErrors.INVALID_COMMAND
      }, "No channel found");
      if (!g.default.isDiscordCdnUrl(a)) throw new N.default({
        errorCode: y.RPCErrors.INVALID_PAYLOAD
      }, "mediaUrl must be a Discord CDN url");
      (0, h.openActivityShareMomentModal)({
        applicationId: s,
        channelId: i.id,
        mediaUrl: a
      })
    }
  })
}