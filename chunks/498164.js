"use strict";
n.r(t);
var a, s, l = n("735250");
n("470079");
var i = n("756647"),
  r = n("481060"),
  o = n("570140"),
  u = n("355467"),
  d = n("899742"),
  c = n("457330"),
  f = n("533307"),
  E = n("447543"),
  h = n("962220"),
  _ = n("703656"),
  C = n("314897"),
  S = n("594174"),
  m = n("626135"),
  p = n("585483"),
  I = n("591759"),
  T = n("998502"),
  g = n("996106"),
  A = n("186901"),
  N = n("981631");

function v(e, t) {
  null != e && m.default.track(N.AnalyticEvents.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
    invite_code: null,
    has_auth_token: null,
    is_backgrounded: null,
    fingerprint: (0, i.extractId)(e),
    link_type: t
  })
}(a = s || (s = {})).SETTINGS = "settings", a.CHANGELOG = "changelog", a.LIBRARY = "library", a.STORE = "store", a.INVITE = "invite", a.CHANNEL = "channel", a.GUILD_SETTINGS = "guild_settings", t.default = {
  [N.RPCCommands.INVITE_BROWSER]: {
    scope: A.RPC_PRIVATE_SCOPE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e, {
        invite: n
      } = await E.default.resolveInvite(t, "Desktop Modal");
      if (null == n) throw new g.default({
        errorCode: N.RPCErrors.INVALID_INVITE
      }, "Invalid invite id: ".concat(t));
      return C.default.isAuthenticated() ? o.default.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: n,
        code: t,
        context: N.AppContext.APP
      }) : (0, _.replaceWith)(N.Routes.INVITE(t)), {
        invite: n,
        code: t
      }
    }
  },
  [N.RPCCommands.GUILD_TEMPLATE_BROWSER]: {
    scope: A.RPC_PRIVATE_SCOPE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      if (null == S.default.getCurrentUser()) return;
      let {
        guildTemplate: a
      } = await h.default.resolveGuildTemplate(t);
      if (null == a) throw new g.default({
        errorCode: N.RPCErrors.INVALID_GUILD_TEMPLATE
      }, "Invalid guild template id: ".concat(t));
      return T.default.focus(), (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("10778"), n.e("90424")]).then(n.bind(n, "766775"));
        return t => (0, l.jsx)(e, {
          ...t,
          guildTemplate: a
        })
      }), {
        guildTemplate: a,
        code: t
      }
    }
  },
  [N.RPCCommands.GIFT_CODE_BROWSER]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      return new Promise((e, a) => {
        o.default.wait(() => {
          f.default.resolveGiftCode(t, !0, !0).then(a => {
            let {
              giftCode: s
            } = a;
            T.default.focus(), m.default.track(N.AnalyticEvents.OPEN_MODAL, {
              type: "gift_accept",
              location: N.DIRECT_ANALYTICS_LOCATION
            }), (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("99387"), n.e("8016"), n.e("92446")]).then(n.bind(n, "409858"));
              return n => (0, l.jsx)(e, {
                code: t,
                ...n
              })
            }), e({
              giftCode: s
            })
          }).catch(() => a(new g.default({
            errorCode: N.RPCErrors.INVALID_GIFT_CODE
          }, "Invalid gift code: ".concat(t))))
        })
      })
    }
  },
  [N.RPCCommands.DEEP_LINK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          type: t,
          params: n
        }
      } = e;
      switch (T.default.focus(), t) {
        case A.RPCDeepLinks.USER_SETTINGS:
          null != n && ((0, _.replaceWith)(N.Routes.SETTINGS(n.section, n.subsection)), v(n.fingerprint, "settings"));
          break;
        case A.RPCDeepLinks.CHANGELOG:
          null != n && ((0, _.replaceWith)(I.default.formatPathWithQuery(N.Routes.CHANGELOGS(n.date), n.query)), v(n.fingerprint, "changelog"));
          break;
        case A.RPCDeepLinks.LIBRARY:
          (0, _.replaceWith)(N.Routes.APPLICATION_LIBRARY), null != n && v(n.fingerprint, "library");
          break;
        case A.RPCDeepLinks.STORE_HOME:
          (0, _.replaceWith)(N.Routes.APPLICATION_STORE), null != n && v(n.fingerprint, "store");
          break;
        case A.RPCDeepLinks.STORE_LISTING:
          null != n && ((0, _.replaceWith)(N.Routes.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), v(n.fingerprint, "store"));
          break;
        case A.RPCDeepLinks.PICK_GUILD_SETTINGS:
          null != n && ((0, _.replaceWith)({
            pathname: N.Routes.PICK_GUILD_SETTINGS(n.section, n.subsection),
            search: n.search
          }), v(n.fingerprint, "guild_settings"));
          break;
        case A.RPCDeepLinks.CHANNEL:
          null != n && ((0, _.replaceWith)({
            pathname: N.Routes.CHANNEL(n.guildId, n.channelId, n.messageId),
            search: n.search
          }), v(n.fingerprint, "channel"))
      }
    }
  },
  [N.RPCCommands.BROWSER_HANDOFF]: {
    scope: A.RPC_PRIVATE_LIMITED_SCOPE,
    handler(e) {
      let {
        args: {
          handoffToken: t,
          fingerprint: n
        }
      } = e;
      T.default.focus(null, !0), (0, d.handoffEnd)(t, n)
    }
  },
  [N.RPCCommands.CONNECTIONS_CALLBACK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler: async e => {
      let {
        args: {
          providerType: t,
          code: n,
          openid_params: a,
          state: s
        }
      } = e;
      try {
        return await c.default.callback(t, {
          code: n,
          openid_params: a,
          state: s
        })
      } catch (e) {
        throw p.ComponentDispatch.dispatch(N.ComponentActions.CONNECTIONS_CALLBACK_ERROR), e
      }
    }
  },
  [N.RPCCommands.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: a
        }
      } = e;
      return (0, u.popupBridgeCallback)({
        paymentSourceType: N.PaymentSourceTypes.PAYPAL,
        state: t,
        path: n,
        query: a
      })
    }
  },
  [N.RPCCommands.BILLING_POPUP_BRIDGE_CALLBACK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: a,
          payment_source_type: s
        }
      } = e;
      return (0, u.popupBridgeCallback)({
        paymentSourceType: s,
        state: t,
        path: n,
        query: a
      })
    }
  }
}