"use strict";
n.r(t), n("47120");
var a = n("570140"),
  s = n("457330"),
  l = n("726542"),
  i = n("231757"),
  r = n("553795"),
  o = n("585483"),
  u = n("996106"),
  d = n("914946"),
  c = n("452426"),
  f = n("186901"),
  E = n("981631"),
  h = n("701488"),
  _ = n("231338");
let C = new Set([h.AM_HARMONY_PRD_APPLICATION_ID, h.AM_HARMONY_STG_APPLICATION_ID]);
t.default = {
  [_.RPCCommands.GET_PROVIDER_ACCESS_TOKEN]: {
    scope: {
      [f.RPC_SCOPE_CONFIG.ANY]: [f.RPC_AUTHENTICATED_SCOPE]
    },
    validation: e => (0, c.default)(e).required().keys({
      provider: e.string().required()
    }),
    handler: e => {
      let {
        socket: t,
        args: {
          provider: n
        }
      } = e;
      (0, d.validatePostMessageTransport)(t.transport);
      let c = (0, d.validateApplication)(t.application),
        f = l.default.get(n);
      if (null == f) throw new u.default({
        errorCode: _.RPCErrors.INVALID_PROVIDER
      }, 'Platform not found for provider "'.concat(n, '"'));
      if (n === E.PlatformTypes.AMAZON_MUSIC) {
        if (!C.has(c)) throw new u.default({
          errorCode: _.RPCErrors.UNAUTHORIZED_FOR_APPLICATION
        }, "Command not available for this application")
      } else throw new u.default({
        errorCode: _.RPCErrors.UNAUTHORIZED_FOR_APPLICATION
      }, "Command not available for this application");
      return new Promise(async (e, t) => {
        let l = r.default.getAccount(null, n);
        if (null == l) {
          function d(t) {
            var n;
            if (null == f) return;
            let a = (null !== (n = t.accounts) && void 0 !== n ? n : []).find(e => e.type === f.type);
            null != a && (e({
              access_token: a.access_token
            }), h())
          }

          function c() {
            t(new u.default({
              errorCode: _.RPCErrors.OAUTH2_ERROR
            }, 'OAuth2 setup for "'.concat(n, '" failed'))), h()
          }

          function h() {
            a.default.unsubscribe("USER_CONNECTIONS_UPDATE", d), o.ComponentDispatch.unsubscribe(E.ComponentActions.CONNECTIONS_CALLBACK_ERROR, c)
          }
          a.default.subscribe("USER_CONNECTIONS_UPDATE", d), o.ComponentDispatch.subscribe(E.ComponentActions.CONNECTIONS_CALLBACK_ERROR, c), (0, i.default)({
            platformType: f.type,
            location: E.AnalyticsLocations.ACTIVITY_RPC
          })
        } else try {
          let t = await s.default.refreshAccessToken(f.type, l.id);
          if (null == t) throw new u.default({
            errorCode: _.RPCErrors.OAUTH2_ERROR
          }, "Refreshing access token did not return a new access token");
          e({
            access_token: t
          })
        } catch (e) {
          t(e)
        }
      })
    }
  }
}