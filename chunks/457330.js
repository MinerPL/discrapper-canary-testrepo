n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(990547),
  i = n(544891),
  a = n(570140),
  o = n(275759),
  s = n(710845),
  l = n(626135),
  u = n(573261),
  c = n(981631);
let d = new s.Z('ConnectedAccounts');

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return i.tn.post({
url: c.ANM.CONNECTIONS_CALLBACK(e),
body: {
  ...t,
  insecure: n,
  friend_sync: c.BFP.has(e)
},
oldFormErrors: !0
  });
}
t.Z = {
  fetch: () => i.tn.get({
url: c.ANM.CONNECTIONS,
oldFormErrors: !0
  }).then(e => a.Z.dispatch({
type: 'USER_CONNECTIONS_UPDATE',
local: !0,
accounts: e.body
  }), () => a.Z.dispatch({
type: 'USER_CONNECTIONS_UPDATE',
local: !0,
accounts: []
  })),
  authorize(e) {
let {
  location: t,
  twoWayLinkType: n,
  userCode: r,
  twoWayLink: a,
  successRedirect: o
} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
l.default.track(c.rMx.CONNECTED_ACCOUNT_INITIATED, {
  platform_type: e,
  location: t
});
let s = c.ANM.CONNECTIONS_AUTHORIZE(e),
  u = new URLSearchParams();
return null != r && u.append('two_way_user_code', r), null != o && u.append('success_redirect', o), null != n ? (u.append('two_way_link_type', n), u.append('two_way_link', 'true')) : null != a && u.append('two_way_link', String(a)), s = s + '?' + u.toString(), i.tn.get({
  url: s,
  oldFormErrors: !0
});
  },
  callback: _,
  connect(e, t, n, i, a) {
var o;
return u.Z.put({
  url: c.ANM.CONNECTION(e, t),
  body: {
    name: n,
    friend_sync: null !== (o = null == a ? void 0 : a.friend_sync) && void 0 !== o ? o : c.BFP.has(e)
  },
  context: {
    location: i
  },
  oldFormErrors: !0,
  trackedActionData: {
    event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
    properties: {
      name: n,
      friend_sync: c.BFP.has(e)
    }
  }
});
  },
  disconnect: (e, t) => i.tn.del({
url: c.ANM.CONNECTION(e, t),
oldFormErrors: !0
  }),
  refresh: (e, t) => i.tn.post({
url: c.ANM.CONNECTION_REFRESH(e, t),
oldFormErrors: !0
  }),
  setVisibility(e, t, n) {
return this.update(e, t, {
  visibility: 1 === n
});
  },
  setMetadataVisibility(e, t, n) {
return this.update(e, t, {
  metadata_visibility: 1 === n
});
  },
  setFriendSync(e, t, n) {
return this.update(e, t, {
  friend_sync: n
});
  },
  setShowActivity(e, t, n) {
return this.update(e, t, {
  show_activity: n
});
  },
  update: (e, t, n) => u.Z.patch({
url: c.ANM.CONNECTION(e, t),
body: n,
oldFormErrors: !0,
trackedActionData: {
  event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
  properties: {
    ...n
  }
}
  }),
  joinServer(e, t) {
a.Z.dispatch({
  type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
  integrationId: e,
  joining: !0
}), i.tn.post({
  url: c.ANM.INTEGRATION_JOIN(e),
  oldFormErrors: !0
}, n => {
  a.Z.dispatch({
    type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
    integrationId: e,
    joining: !1
  }), !n.ok && (a.Z.dispatch({
    type: 'USER_CONNECTIONS_INTEGRATION_JOINING_ERROR',
    integrationId: e,
    error: n.hasErr ? void 0 : n.body.message
  }), null == t || t());
});
  },
  async refreshAccessToken(e, t) {
try {
  let {
    body: {
      access_token: n
    }
  } = await i.tn.get({
    url: c.ANM.CONNECTION_ACCESS_TOKEN(e, t),
    oldFormErrors: !0
  });
  return a.Z.dispatch({
    type: 'USER_CONNECTION_UPDATE',
    platformType: e,
    id: t,
    accessToken: n
  }), n;
} catch (n) {
  throw n.body.code === c.evJ.CONNECTION_REVOKED && a.Z.dispatch({
    type: 'USER_CONNECTION_UPDATE',
    platformType: e,
    id: t,
    revoked: !0
  }), n;
}
  },
  linkDispatchAuthCallback: (e, t) => i.tn.post({
url: c.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
body: {
  ...t
},
oldFormErrors: !0
  }),
  async completeTwoWayLink(e, t, n, r, i) {
if (null == t) {
  d.error('Two-way link: missing authorize location');
  return;
}
let {
  code: a,
  error: s,
  errorDescription: l
} = (0, o.xp)(t);
if (null != s) {
  d.error('Two-way link: missing authorize code', {
    error: s,
    errorDescription: l
  });
  return;
}
return await _(e, {
  code: n,
  state: r,
  two_way_link_code: a,
  token_redirect_uri: i
});
  }
};