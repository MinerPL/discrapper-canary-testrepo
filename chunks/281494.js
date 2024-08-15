n.d(t, {
  C$: function() {
return m;
  },
  Eo: function() {
return g;
  },
  Fe: function() {
return r;
  },
  Fz: function() {
return i;
  },
  IB: function() {
return S;
  },
  Ve: function() {
return I;
  },
  iF: function() {
return p;
  },
  jy: function() {
return T;
  }
}), n(47120), n(653041);
var r, i, a, s, o = n(544891),
  l = n(570140),
  u = n(904245),
  c = n(598077),
  d = n(944486),
  _ = n(960048),
  E = n(981631);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(a = r || (r = {}))[a.REDEEMED = 1] = 'REDEEMED', a[a.PENDING = 2] = 'PENDING', a[a.CONVERTED = 3] = 'CONVERTED', (s = i || (i = {}))[s.SUCCESS = 1] = 'SUCCESS', s[s.FAIL = 2] = 'FAIL';
let h = new class e {
  set(e, t) {
this.cache.set(e, t);
  }
  get(e) {
return this._checkExpiration(), this.cache.get(e);
  }
  has(e) {
return this._checkExpiration(), this.cache.has(e);
  }
  _checkExpiration() {
this.expiration < Date.now() && this.cache.clear();
  }
  constructor() {
f(this, 'cache', void 0), f(this, 'expiration', void 0), this.cache = new Map(), this.expiration = Date.now() + 600000;
  }
}();
async function p(e, t) {
  let n = JSON.stringify({
index: e,
searchQuery: t
  });
  if (h.has(n))
return h.get(n);
  let {
users: r,
next_index: i
  } = (await o.tn.post({
url: E.ANM.GET_REFERRAL_ELIGIBLE_USERS,
body: {
  index: e,
  limit: 10,
  search_query: t
},
oldFormErrors: !0
  })).body, a = {
users: r.map(e => new c.Z(e)),
nextIndex: i
  };
  return h.set(n, a), a;
}
let m = () => (l.Z.dispatch({
type: 'BILLING_REFERRALS_REMAINING_FETCH_START'
  }), o.tn.get({
url: E.ANM.GET_REFERRALS_REMAINING,
oldFormErrors: !0
  }).then(e => {
var t, n;
let r = new Map();
if (null != e.body && null != e.body.recipient_status)
  for (let t in e.body.recipient_status) {
    let n = e.body.recipient_status[t];
    r.set(t, n);
  }
l.Z.dispatch({
  type: 'BILLING_REFERRALS_REMAINING_FETCH_SUCCESS',
  referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
  sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : [],
  refresh_at: null !== (n = null === (t = e.body) || void 0 === t ? void 0 : t.refresh_at) && void 0 !== n ? n : null,
  recipient_status: r,
  has_eligible_friends: e.body.has_eligible_friends,
  isUserEligibleForIncentive: e.body.is_eligible_for_incentive,
  isUserQualifiedForIncentive: e.body.is_qualified_for_incentive
});
  }, () => {
l.Z.dispatch({
  type: 'BILLING_REFERRALS_REMAINING_FETCH_FAIL'
});
  })),
  I = e => (l.Z.dispatch({
type: 'BILLING_CREATE_REFERRAL_PREVIEW_START',
recipientId: e
  }), o.tn.post({
url: E.ANM.CREATE_REFERRAL_PREVIEW(e),
oldFormErrors: !0
  }).then(t => {
l.Z.dispatch({
  type: 'BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS',
  recipientId: e,
  is_eligible: null != t.body && t.body.is_eligible
});
  }, () => {
l.Z.dispatch({
  type: 'BILLING_CREATE_REFERRAL_PREVIEW_FAIL',
  recipientId: e
});
  }));
async function T(e) {
  let t = [],
n = new Map();
  for (let i of e)
try {
  var r;
  let e = await o.tn.post({
      url: E.ANM.CREATE_REFERRAL(i),
      oldFormErrors: !0
    }),
    a = null !== (r = e.body) && void 0 !== r ? r : null;
  null != a && t.push(a), n.set(i, 1);
} catch (e) {
  _.Z.captureException(e), n.set(i, 2);
}
  return l.Z.dispatch({
type: 'CREATE_REFERRALS_SUCCESS',
userTrialOffers: t
  }), n;
}
async function g(e) {
  try {
var t;
let n = await o.tn.post({
    url: E.ANM.CREATE_REFERRAL(e),
    oldFormErrors: !0
  }),
  r = null !== (t = n.body) && void 0 !== t ? t : null;
return l.Z.dispatch({
  type: 'BILLING_CREATE_REFERRAL_SUCCESS',
  userTrialOffer: r
}), {
  userTrialOffer: r
};
  } catch (e) {
if (l.Z.dispatch({
    type: 'BILLING_CREATE_REFERRAL_FAIL'
  }), e.body.code === E.evJ.INVALID_MESSAGE_SEND_USER) {
  let t = d.Z.getCurrentlySelectedChannelId();
  null != t && u.Z.sendClydeError(t, e.body.code);
}
  }
}
async function S(e) {
  try {
var t;
let n = await o.tn.get({
    url: E.ANM.REFERRAL_OFFER_ID_RESOLVE(e),
    oldFormErrors: !0
  }),
  r = null !== (t = n.body) && void 0 !== t ? t : null;
return l.Z.dispatch({
  type: 'BILLING_REFERRAL_RESOLVE_SUCCESS',
  userTrialOffer: r
}), {
  userTrialOffer: r
};
  } catch (t) {
l.Z.dispatch({
  type: 'BILLING_REFERRAL_RESOLVE_FAIL',
  userTrialOfferId: e
});
  }
}