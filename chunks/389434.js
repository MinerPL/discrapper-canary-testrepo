"use strict";
n.r(t), n.d(t, {
  fetchEmailSettings: function() {
    return u
  },
  updateEmailSetting: function() {
    return d
  },
  updateMarketingEmailSettings: function() {
    return c
  }
}), n("808653");
var a = n("759843"),
  s = n("627929"),
  l = n("913144"),
  i = n("840707"),
  r = n("853994"),
  o = n("49111");
async function u() {
  try {
    let e = await i.default.get({
      url: o.Endpoints.EMAIL_SETTINGS,
      trackedActionData: {
        event: a.NetworkActionNames.EMAIL_SETTINGS_FETCH,
        properties: e => {
          var t;
          let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.initialized;
          return (0, s.exact)({
            initialized: n
          })
        }
      }
    });
    l.default.dispatch({
      type: "EMAIL_SETTINGS_FETCH_SUCCESS",
      settings: e.body
    })
  } catch {
    l.default.dispatch({
      type: "EMAIL_SETTINGS_FETCH_FAILURE"
    })
  }
}
async function d(e, t) {
  l.default.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: {
      [e]: t
    }
  });
  try {
    let n = await i.default.patch({
      url: o.Endpoints.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: {
            [e]: t
          }
        }
      },
      trackedActionData: {
        event: a.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: e,
          value: t
        }
      }
    });
    l.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: n.body
    })
  } catch (e) {
    l.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
async function c() {
  let e = r.MarketingEmailCategories.reduce((e, t) => ({
    ...e,
    [t]: !1
  }), {});
  l.default.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: e
  });
  try {
    let t = await i.default.patch({
      url: o.Endpoints.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: e
        }
      },
      trackedActionData: {
        event: a.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: "marketing",
          value: !1
        }
      }
    });
    l.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: t.body
    })
  } catch (e) {
    l.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}