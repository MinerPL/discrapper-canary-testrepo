"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var a, s, l = n("37983");
n("884691");
var i = n("391679"),
  r = n("77078"),
  o = n("913144"),
  u = n("850068"),
  d = n("697796"),
  c = n("619340"),
  f = n("569272"),
  E = n("970728"),
  h = n("913645"),
  _ = n("393414"),
  C = n("271938"),
  S = n("697218"),
  I = n("599110"),
  m = n("253981"),
  p = n("50885"),
  T = n("861309"),
  g = n("492249"),
  A = n("49111");

function N(e, t) {
  null != e && I.default.track(A.AnalyticEvents.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
    invite_code: null,
    has_auth_token: null,
    is_backgrounded: null,
    fingerprint: (0, i.extractId)(e),
    link_type: t
  })
}(a = s || (s = {})).SETTINGS = "settings", a.CHANGELOG = "changelog", a.LIBRARY = "library", a.STORE = "store", a.INVITE = "invite", a.CHANNEL = "channel", a.GUILD_SETTINGS = "guild_settings";
var R = {
  [A.RPCCommands.INVITE_BROWSER]: {
    scope: g.RPC_PRIVATE_SCOPE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e, {
        invite: n
      } = await E.default.resolveInvite(t, "Desktop Modal");
      if (null == n) throw new T.default({
        errorCode: A.RPCErrors.INVALID_INVITE
      }, "Invalid invite id: ".concat(t));
      return C.default.isAuthenticated() ? o.default.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: n,
        code: t,
        context: A.AppContext.APP
      }) : (0, _.replaceWith)(A.Routes.INVITE(t)), {
        invite: n,
        code: t
      }
    }
  },
  [A.RPCCommands.GUILD_TEMPLATE_BROWSER]: {
    scope: g.RPC_PRIVATE_SCOPE,
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
      if (null == a) throw new T.default({
        errorCode: A.RPCErrors.INVALID_GUILD_TEMPLATE
      }, "Invalid guild template id: ".concat(t));
      return p.default.focus(), (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("843456").then(n.bind(n, "843456"));
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
  [A.RPCCommands.GIFT_CODE_BROWSER]: {
    scope: g.RPC_PRIVATE_SCOPE,
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
            p.default.focus(), I.default.track(A.AnalyticEvents.OPEN_MODAL, {
              type: "gift_accept",
              location: A.DIRECT_ANALYTICS_LOCATION
            }), (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("669146").then(n.bind(n, "669146"));
              return n => (0, l.jsx)(e, {
                code: t,
                ...n
              })
            }), e({
              giftCode: s
            })
          }).catch(() => a(new T.default({
            errorCode: A.RPCErrors.INVALID_GIFT_CODE
          }, "Invalid gift code: ".concat(t))))
        })
      })
    }
  },
  [A.RPCCommands.DEEP_LINK]: {
    scope: g.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          type: t,
          params: n
        }
      } = e;
      switch (p.default.focus(), t) {
        case g.RPCDeepLinks.USER_SETTINGS:
          null != n && ((0, _.replaceWith)(A.Routes.SETTINGS(n.section, n.subsection)), N(n.fingerprint, "settings"));
          break;
        case g.RPCDeepLinks.CHANGELOG:
          null != n && ((0, _.replaceWith)(m.default.formatPathWithQuery(A.Routes.CHANGELOGS(n.date), n.query)), N(n.fingerprint, "changelog"));
          break;
        case g.RPCDeepLinks.LIBRARY:
          (0, _.replaceWith)(A.Routes.APPLICATION_LIBRARY), null != n && N(n.fingerprint, "library");
          break;
        case g.RPCDeepLinks.STORE_HOME:
          (0, _.replaceWith)(A.Routes.APPLICATION_STORE), null != n && N(n.fingerprint, "store");
          break;
        case g.RPCDeepLinks.STORE_LISTING:
          null != n && ((0, _.replaceWith)(A.Routes.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), N(n.fingerprint, "store"));
          break;
        case g.RPCDeepLinks.PICK_GUILD_SETTINGS:
          null != n && ((0, _.replaceWith)({
            pathname: A.Routes.PICK_GUILD_SETTINGS(n.section, n.subsection),
            search: n.search
          }), N(n.fingerprint, "guild_settings"));
          break;
        case g.RPCDeepLinks.CHANNEL:
          null != n && ((0, _.replaceWith)({
            pathname: A.Routes.CHANNEL(n.guildId, n.channelId, n.messageId),
            search: n.search
          }), N(n.fingerprint, "channel"))
      }
    }
  },
  [A.RPCCommands.BROWSER_HANDOFF]: {
    scope: g.RPC_PRIVATE_LIMITED_SCOPE,
    handler(e) {
      let {
        args: {
          handoffToken: t,
          fingerprint: n
        }
      } = e;
      p.default.focus(null, !0), (0, d.handoffEnd)(t, n)
    }
  },
  [A.RPCCommands.CONNECTIONS_CALLBACK]: {
    scope: g.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          providerType: t,
          code: n,
          openid_params: a,
          state: s
        }
      } = e;
      return c.default.callback(t, {
        code: n,
        openid_params: a,
        state: s
      })
    }
  },
  [A.RPCCommands.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
    scope: g.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: a
        }
      } = e;
      return (0, u.popupBridgeCallback)({
        paymentSourceType: A.PaymentSourceTypes.PAYPAL,
        state: t,
        path: n,
        query: a
      })
    }
  },
  [A.RPCCommands.BILLING_POPUP_BRIDGE_CALLBACK]: {
    scope: g.RPC_PRIVATE_SCOPE,
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