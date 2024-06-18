"use strict";
n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(990547),
  r = n(544891),
  s = n(570140),
  o = n(275759),
  a = n(710845),
  l = n(626135),
  u = n(573261),
  _ = n(981631);
let d = new a.Z("ConnectedAccounts");

function c(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return r.tn.post({
    url: _.ANM.CONNECTIONS_CALLBACK(e),
    body: {
      ...t,
      insecure: n,
      friend_sync: _.BFP.has(e)
    },
    oldFormErrors: !0
  })
}
t.Z = {
  fetch: () => r.tn.get({
    url: _.ANM.CONNECTIONS,
    oldFormErrors: !0
  }).then(e => s.Z.dispatch({
    type: "USER_CONNECTIONS_UPDATE",
    local: !0,
    accounts: e.body
  }), () => s.Z.dispatch({
    type: "USER_CONNECTIONS_UPDATE",
    local: !0,
    accounts: []
  })),
  authorize(e) {
    let {
      location: t,
      twoWayLinkType: n,
      userCode: i,
      twoWayLink: s,
      successRedirect: o
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    l.default.track(_.rMx.CONNECTED_ACCOUNT_INITIATED, {
      platform_type: e,
      location: t
    });
    let a = _.ANM.CONNECTIONS_AUTHORIZE(e),
      u = new URLSearchParams;
    return null != i && u.append("two_way_user_code", i), null != o && u.append("success_redirect", o), null != n ? (u.append("two_way_link_type", n), u.append("two_way_link", "true")) : null != s && u.append("two_way_link", String(s)), a = a + "?" + u.toString(), r.tn.get({
      url: a,
      oldFormErrors: !0
    })
  },
  callback: c,
  connect(e, t, n, r, s) {
    var o;
    return u.Z.put({
      url: _.ANM.CONNECTION(e, t),
      body: {
        name: n,
        friend_sync: null !== (o = null == s ? void 0 : s.friend_sync) && void 0 !== o ? o : _.BFP.has(e)
      },
      context: {
        location: r
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
        properties: {
          name: n,
          friend_sync: _.BFP.has(e)
        }
      }
    })
  },
  disconnect: (e, t) => r.tn.del({
    url: _.ANM.CONNECTION(e, t),
    oldFormErrors: !0
  }),
  refresh: (e, t) => r.tn.post({
    url: _.ANM.CONNECTION_REFRESH(e, t),
    oldFormErrors: !0
  }),
  setVisibility(e, t, n) {
    return this.update(e, t, {
      visibility: 1 === n
    })
  },
  setMetadataVisibility(e, t, n) {
    return this.update(e, t, {
      metadata_visibility: 1 === n
    })
  },
  setFriendSync(e, t, n) {
    return this.update(e, t, {
      friend_sync: n
    })
  },
  setShowActivity(e, t, n) {
    return this.update(e, t, {
      show_activity: n
    })
  },
  update: (e, t, n) => u.Z.patch({
    url: _.ANM.CONNECTION(e, t),
    body: n,
    oldFormErrors: !0,
    trackedActionData: {
      event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
      properties: {
        ...n
      }
    }
  }),
  joinServer(e, t) {
    s.Z.dispatch({
      type: "USER_CONNECTIONS_INTEGRATION_JOINING",
      integrationId: e,
      joining: !0
    }), r.tn.post({
      url: _.ANM.INTEGRATION_JOIN(e),
      oldFormErrors: !0
    }, n => {
      s.Z.dispatch({
        type: "USER_CONNECTIONS_INTEGRATION_JOINING",
        integrationId: e,
        joining: !1
      }), !n.ok && (s.Z.dispatch({
        type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR",
        integrationId: e,
        error: n.hasErr ? void 0 : n.body.message
      }), null == t || t())
    })
  },
  async refreshAccessToken(e, t) {
    try {
      let {
        body: {
          access_token: n
        }
      } = await r.tn.get({
        url: _.ANM.CONNECTION_ACCESS_TOKEN(e, t),
        oldFormErrors: !0
      });
      return s.Z.dispatch({
        type: "USER_CONNECTION_UPDATE",
        platformType: e,
        id: t,
        accessToken: n
      }), n
    } catch (n) {
      throw n.body.code === _.evJ.CONNECTION_REVOKED && s.Z.dispatch({
        type: "USER_CONNECTION_UPDATE",
        platformType: e,
        id: t,
        revoked: !0
      }), n
    }
  },
  linkDispatchAuthCallback: (e, t) => r.tn.post({
    url: _.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
    body: {
      ...t
    },
    oldFormErrors: !0
  }),
  async completeTwoWayLink(e, t, n, i, r) {
    if (null == t) {
      d.error("Two-way link: missing authorize location");
      return
    }
    let {
      code: s,
      error: a,
      errorDescription: l
    } = (0, o.xp)(t);
    if (null != a) {
      d.error("Two-way link: missing authorize code", {
        error: a,
        errorDescription: l
      });
      return
    }
    return await c(e, {
      code: n,
      state: i,
      two_way_link_code: s,
      token_redirect_uri: r
    })
  }
}