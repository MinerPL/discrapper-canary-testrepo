n.d(t, {
  $_: function() {
return m;
  },
  KQ: function() {
return h;
  },
  MU: function() {
return d;
  },
  m0: function() {
return f;
  },
  rf: function() {
return I;
  },
  tu: function() {
return p;
  }
}), n(610138), n(216116), n(78328), n(815648), n(47120), n(315314);
var r = n(860911),
  i = n(477690),
  a = n(481060),
  o = n(134432),
  s = n(703656),
  l = n(768581),
  u = n(981631),
  c = n(689938);
let d = 0,
  {
API_ENDPOINT: _,
CDN_HOST: E
  } = window.GLOBAL_ENV;

function f(e) {
  return e.id === d;
}

function h() {
  return {
id: d,
name: c.Z.Messages.APP_DIRECTORY_ALL_CATEGORY
  };
}

function p(e) {
  switch (e.id) {
case 0:
  return a.GlobeEarthIcon;
case 4:
  return a.TvIcon;
case 5:
  return a.AnalyticsIcon;
case 6:
  return a.GameControllerIcon;
case 8:
  break;
case 9:
  return a.FriendsIcon;
case 10:
  return a.WrenchIcon;
  }
  return a.AsteriskIcon;
}

function m(e) {
  let {
itemId: t,
hash: n
  } = e, r = new URLSearchParams({
size: (0, o.oO)(parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, o.x_)()).toString()
  }).toString(), a = l.$k ? 'webp' : 'png';
  return null != E ? ''.concat(location.protocol, '//').concat(E, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(a, '?').concat(r) : ''.concat(location.protocol).concat(_).concat(u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, a), '?').concat(r);
}

function I() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
t = new URL(location.href);
  for (let n in e) {
let r = e[n];
t.searchParams.set(n, r);
  }
  let n = t.pathname + t.search,
i = (0, r.U)(n, !1);
  (0, s.uL)(i);
}