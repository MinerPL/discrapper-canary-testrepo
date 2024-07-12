let r, i;
n.r(t), n.d(t, {
  AnalyticsActionHandlers: function() {
return m.X;
  },
  Impression: function() {
return I.Impression;
  },
  ImpressionGroups: function() {
return I.A;
  },
  ImpressionNames: function() {
return T.z;
  },
  ImpressionSchema: function() {
return T.ImpressionSchema;
  },
  ImpressionTypes: function() {
return I.n;
  },
  NetworkActionNames: function() {
return T.a;
  },
  StandardAnalyticsLocation: function() {
return I.StandardAnalyticsLocation;
  },
  StandardAnalyticsSchemaNameMap: function() {
return T.StandardAnalyticsSchemaNameMap;
  },
  TypedEventProperties: function() {
return I.TypedEventProperties;
  },
  analyticsTrackingStoreMaker: function() {
return m.l;
  },
  encodeProperties: function() {
return p.Z;
  },
  extendSuperProperties: function() {
return M;
  },
  getCampaignParams: function() {
return C;
  },
  getDevice: function() {
return D;
  },
  getOS: function() {
return y;
  },
  getSuperProperties: function() {
return U;
  },
  getSuperPropertiesBase64: function() {
return w;
  },
  isThrottled: function() {
return b;
  },
  trackMaker: function() {
return P;
  }
}), n(757143), n(47120);
var a, o = n(348327),
  s = n.n(o),
  l = n(512722),
  u = n.n(l),
  c = n(264344),
  d = n.n(c),
  _ = n(627420),
  E = n(433517),
  f = n(298444),
  h = n(979675),
  p = n(947486);
n(804098);
var m = n(699407),
  I = n(20281),
  T = n(525769);
let g = 'deviceProperties',
  S = 'referralProperties',
  A = {},
  N = {},
  v = window.DiscordNative;
if (null != v) {
  let e;
  let t = v.remoteApp.getVersion(),
n = v.process.platform,
i = v.os.release,
o = v.os.arch,
s = v.os.appArch,
l = v.remoteApp.getReleaseChannel(),
u = (0, _.qf)();
  switch (n) {
case 'win32':
  e = 'Windows';
  break;
case 'darwin':
  e = 'Mac OS X';
  break;
case 'linux':
  e = 'Linux';
  break;
default:
  e = n;
  }
  if (r = {
  os: e,
  browser: 'Discord Client',
  release_channel: l || 'unknown',
  client_version: t,
  os_version: i,
  os_arch: o,
  app_arch: s,
  system_locale: u
}, (null === (a = d().name) || void 0 === a ? void 0 : a.toLocaleLowerCase()) === 'electron' && (r.browser_user_agent = d().ua || '', r.browser_version = d().version || ''), 'linux' === n) {
let e = v.crashReporter.getMetadata();
r.window_manager = e.wm, r.distro = e.distro;
  }
}
let O = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ');

function R(e, t) {
  if (null == e)
return '';
  t = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  let n = new RegExp('[\\?&]'.concat(t, '=([^&#]*)')).exec(e);
  return null === n || 'string' != typeof n[1] && n[1].length ? '' : decodeURIComponent(n[1]).replace(/\+/g, ' ');
}

function C(e) {
  let t = {};
  return O.forEach(n => {
let r = R(e, n);
r.length > 0 && (t[n] = r);
  }), t;
}

function y() {
  let {
userAgent: e
  } = window.navigator;
  if (/Windows/i.test(e))
return /Phone/.test(e) ? 'Windows Mobile' : 'Windows';
  if (/(iPhone|iPad|iPod)/.test(e))
return 'iOS';
  if (/Android/.test(e))
return 'Android';
  else if (/(BlackBerry|PlayBook|BB10)/i.test(e))
return 'BlackBerry';
  else if (/Mac/i.test(e))
return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'iOS' : 'Mac OS X';
  else if (/Linux/i.test(e))
return 'Linux';
  else
return '';
}

function D() {
  let {
userAgent: e
  } = window.navigator;
  if (/(BlackBerry|PlayBook|BB10)/i.test(e))
return 'BlackBerry';
  if (/Windows Phone/i.test(e))
return 'Windows Phone';
  if (/Android/.test(e))
return 'Android';
  else if (/iPhone/.test(e))
return 'iPhone';
  else if (/iPad/.test(e))
return 'iPad';
  else
return '';
}

function L() {
  let e = {};
  return e.referrer = document.referrer, e.referring_domain = function() {
let e = document.referrer.split('/');
return e.length >= 3 ? e[2] : '';
  }(), e = {
...e,
...C(window.location.href),
... function() {
  let e = {},
    t = document.referrer,
    n = function() {
      let e = document.referrer;
      if (0 === e.search('https?://(.*)google.([^/?]*)'))
        return 'google';
      if (0 === e.search('https?://(.*)bing.com'))
        return 'bing';
      if (0 === e.search('https?://(.*)yahoo.com'))
        return 'yahoo';
      else if (0 === e.search('https?://(.*)duckduckgo.com'))
        return 'duckduckgo';
      else
        return null;
    }();
  if (null != n) {
    e.search_engine = n;
    let r = R(t, 'yahoo' !== n ? 'q' : 'p');
    r.length > 0 && (e.mp_keyword = r);
  }
  return e;
}()
  };
}

function b(e) {
  return null != A[e] && A[e] > Date.now();
}
if (null == r)
  try {
let e, t, n;
e = E.K.get(g), null == e && (e = function() {
  let e = {},
    t = y();
  return e.os = t, e.browser = function() {
    let {
      userAgent: e,
      vendor: t = ''
    } = window.navigator, {
      opera: n
    } = window;
    if (n)
      return /Mini/.test(e) ? 'Opera Mini' : 'Opera';
    if (/(BlackBerry|PlayBook|BB10)/i.test(e))
      return 'BlackBerry';
    if (/FBIOS/.test(e))
      return 'Facebook Mobile';
    else if (/CriOS/.test(e))
      return 'Chrome iOS';
    else if (/Apple/.test(t))
      return /Mobile/.test(e) || null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'Mobile Safari' : 'Safari';
    else if (/Android/.test(e))
      return /Chrome/.test(e) ? 'Android Chrome' : 'Android Mobile';
    else if (/Edge/.test(e))
      return 'Edge';
    else if (/Chrome/.test(e))
      return 'Chrome';
    else if (/Konqueror/.test(e))
      return 'Konqueror';
    else if (/Firefox/.test(e))
      return 'Firefox';
    else if (/MSIE|Trident\//.test(e))
      return 'Internet Explorer';
    else if (/Gecko/.test(e))
      return 'Mozilla';
    else
      return '';
  }(), e.device = D(), e.system_locale = (0, _.qf)(), e;
}(), E.K.set(g, e)), t = E.K.get(S), null == t && (t = L(), E.K.set(S, t)), n = f.x.get(S), null == n && (n = function(e, t) {
  let n = {};
  return Object.keys(e).map(r => n[''.concat(r).concat(t)] = e[r]), n;
}(L(), '_current'), f.x.set(S, n)), r = {
  ...e,
  ... function() {
    var e, t;
    let n = {
      browser_user_agent: window.navigator.userAgent || '',
      browser_version: d().version || ''
    };
    return {
      ...n,
      os_version: null !== (t = null === d() || void 0 === d() ? void 0 : null === (e = d().os) || void 0 === e ? void 0 : e.version) && void 0 !== t ? t : ''
    };
  }(),
  ...t,
  ...n
};
  } catch (e) {
r = {};
  }

function M(e) {
  r = {
...r,
...e
  }, i = (0, p.Z)(r);
}
M(function() {
  var e, t, n;
  let r = {},
i = window.GLOBAL_ENV.RELEASE_CHANNEL;
  i && (r.release_channel = i.split('-')[0]);
  let a = parseInt((n = '309491', '309491'), 10);
  !isNaN(a) && (r.client_build_number = a);
  let o = null == v ? void 0 : null === (e = (t = v.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t);
  return !isNaN(o) && (r.native_build_number = o), r.client_event_source = function() {
try {
  if (__OVERLAY__)
    return 'OVERLAY';
} catch (e) {}
return null;
  }(), r;
}());
let P = e => {
  let {
analyticEventConfigs: t,
dispatcher: r,
TRACK_ACTION_NAME: i
  } = e, a = (0, h.$)(r, i);
  return function(e, r) {
let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
if (null != n.g.isServerRendering && !0 === n.g.isServerRendering)
  return Promise.resolve();
let o = null != r ? r : {},
  l = t[e];
if (null != l) {
  if ('throttlePeriod' in l) {
    let t = [
      e,
      ...l.throttleKeys(o)
    ].join('_');
    if (b(t))
      return Promise.resolve();
    if ('number' == typeof l.throttlePercent && Math.random() > l.throttlePercent)
      return Promise.resolve();
    if (l.deduplicate) {
      let e = N[t];
      if (s()(e, o))
        return Promise.resolve();
      N[t] = o;
    }
    A[t] = Date.now() + l.throttlePeriod;
  } else if ('throttlePercent' in l) {
    if (Math.random() > l.throttlePercent)
      return Promise.resolve();
  } else
    u()(!1, 'Unsupported analytics event config: '.concat(l));
}
return a(e, r, i);
  };
};

function U() {
  return r;
}

function w() {
  return i;
}