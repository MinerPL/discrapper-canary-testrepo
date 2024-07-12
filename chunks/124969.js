r.d(e, {
  O: function() {
return T;
  },
  p: function() {
return R;
  }
});
var n = r(876122),
  _ = r(793884),
  a = r(862315),
  i = r(529866),
  o = r(829919),
  E = r(869139),
  s = r(336344),
  c = r(841866),
  I = r(643487);
let R = 'Breadcrumbs';
class T {
  static __initStatic() {
this.id = R;
  }
  __init() {
this.name = T.id;
  }
  constructor(t) {
T.prototype.__init.call(this), this.options = {
  console: !0,
  dom: !0,
  fetch: !0,
  history: !0,
  sentry: !0,
  xhr: !0,
  ...t
};
  }
  setupOnce() {
this.options.console && (0, _.oq)('console', u), this.options.dom && (0, _.oq)('dom', function(t) {
  return function(e) {
    let r;
    let _ = 'object' == typeof t ? t.serializeAttribute : void 0,
      a = 'object' == typeof t && 'number' == typeof t.maxStringLength ? t.maxStringLength : void 0;
    a && a > 1024 && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${ a } was configured. Sentry will use 1024 instead.`), a = 1024), 'string' == typeof _ && (_ = [_]);
    try {
      let t = e.event;
      r = function(t) {
        return !!t && !!t.target;
      }(t) ? (0, o.Rt)(t.target, {
        keyAttrs: _,
        maxStringLength: a
      }) : (0, o.Rt)(t, {
        keyAttrs: _,
        maxStringLength: a
      });
    } catch (t) {
      r = '<unknown>';
    }
    if (0 !== r.length)
      (0, n.Gd)().addBreadcrumb({
        category: `ui.${ e.name }`,
        message: r
      }, {
        event: e.event,
        name: e.name,
        global: e.global
      });
  };
}(this.options.dom)), this.options.xhr && (0, _.oq)('xhr', l), this.options.fetch && (0, _.oq)('fetch', A), this.options.history && (0, _.oq)('history', N);
  }
  addSentryBreadcrumb(t) {
this.options.sentry && (0, n.Gd)().addBreadcrumb({
  category: `sentry.${ 'transaction' === t.type ? 'transaction' : 'event' }`,
  event_id: t.event_id,
  level: t.level,
  message: (0, a.jH)(t)
}, {
  event: t
});
  }
}
T.__initStatic();

function u(t) {
  for (let e = 0; e < t.args.length; e++)
if ('ref=Ref<' === t.args[e]) {
  t.args[e + 1] = 'viewRef';
  break;
}
  let e = {
category: 'console',
data: {
  arguments: t.args,
  logger: 'console'
},
level: (0, E.VT)(t.level),
message: (0, s.nK)(t.args, ' ')
  };
  if ('assert' === t.level) {
if (!1 !== t.args[0])
  return;
e.message = `Assertion failed: ${ (0, s.nK)(t.args.slice(1), ' ') || 'console.assert' }`, e.data.arguments = t.args.slice(1);
  }
  (0, n.Gd)().addBreadcrumb(e, {
input: t.args,
level: t.level
  });
}

function l(t) {
  let {
startTimestamp: e,
endTimestamp: r
  } = t, a = t.xhr[_.xU];
  if (!e || !r || !a)
return;
  let {
method: i,
url: o,
status_code: E,
body: s
  } = a, c = {
xhr: t.xhr,
input: s,
startTimestamp: e,
endTimestamp: r
  };
  (0, n.Gd)().addBreadcrumb({
category: 'xhr',
data: {
  method: i,
  url: o,
  status_code: E
},
type: 'http'
  }, c);
}

function A(t) {
  let {
startTimestamp: e,
endTimestamp: r
  } = t;
  if (!(!r || t.fetchData.url.match(/sentry_key/) && 'POST' === t.fetchData.method))
if (t.error) {
  let _ = t.fetchData,
    a = {
      data: t.error,
      input: t.args,
      startTimestamp: e,
      endTimestamp: r
    };
  (0, n.Gd)().addBreadcrumb({
    category: 'fetch',
    data: _,
    level: 'error',
    type: 'http'
  }, a);
} else {
  let _ = {
      ...t.fetchData,
      status_code: t.response && t.response.status
    },
    a = {
      input: t.args,
      response: t.response,
      startTimestamp: e,
      endTimestamp: r
    };
  (0, n.Gd)().addBreadcrumb({
    category: 'fetch',
    data: _,
    type: 'http'
  }, a);
}
}

function N(t) {
  let e = t.from,
r = t.to,
_ = (0, c.en)(I.m9.location.href),
a = (0, c.en)(e),
i = (0, c.en)(r);
  !a.path && (a = _), _.protocol === i.protocol && _.host === i.host && (r = i.relative), _.protocol === a.protocol && _.host === a.host && (e = a.relative), (0, n.Gd)().addBreadcrumb({
category: 'navigation',
data: {
  from: e,
  to: r
}
  });
}