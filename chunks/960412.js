"use strict";
n.d(t, {
  Y7: function() {
    return u
  },
  oc: function() {
    return d
  },
  pR: function() {
    return _
  }
}), n(724458);
var i = n(990547),
  r = n(283693),
  s = n(570140),
  o = n(573261),
  a = n(930441),
  l = n(981631);
async function u() {
  try {
    let e = await o.Z.get({
      url: l.ANM.EMAIL_SETTINGS,
      trackedActionData: {
        event: i.NetworkActionNames.EMAIL_SETTINGS_FETCH,
        properties: e => {
          var t;
          let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.initialized;
          return (0, r.iG)({
            initialized: n
          })
        }
      }
    });
    return s.Z.dispatch({
      type: "EMAIL_SETTINGS_FETCH_SUCCESS",
      settings: e.body
    }), e.body
  } catch {
    s.Z.dispatch({
      type: "EMAIL_SETTINGS_FETCH_FAILURE"
    })
  }
}
async function _(e, t) {
  s.Z.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: {
      [e]: t
    }
  });
  try {
    let n = await o.Z.patch({
      url: l.ANM.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: {
            [e]: t
          }
        }
      },
      trackedActionData: {
        event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: e,
          value: t
        }
      }
    });
    s.Z.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: n.body
    })
  } catch (e) {
    s.Z.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
async function d() {
  let e = a.M0.reduce((e, t) => ({
    ...e,
    [t]: !1
  }), {});
  s.Z.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: e
  });
  try {
    let t = await o.Z.patch({
      url: l.ANM.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: e
        }
      },
      trackedActionData: {
        event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: "marketing",
          value: !1
        }
      }
    });
    s.Z.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: t.body
    })
  } catch (e) {
    s.Z.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}