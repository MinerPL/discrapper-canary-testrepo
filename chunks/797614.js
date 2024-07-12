n(47120), n(653041);
var r, i, a = n(404097),
  o = n(544891),
  s = n(358085),
  l = n(747268),
  u = n(250471),
  c = n(20186),
  d = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let E = new Set([
  'darwin',
  'linux',
  'win32',
  'ios',
  'android'
]);
(i = r || (r = {})).COUNT = 'count', i.DISTRIBUTION = 'distribution';
t.Z = new class e {
  _getMetricWithDefaults(e, t) {
let {
  name: n,
  tags: r
} = e, i = {
  name: n,
  type: t,
  tags: (0, c.d)()
};
null != r && r.forEach(e => {
  i.tags.push(e);
});
let o = function() {
  if ((0, s.isWeb)())
    return 'web';
  {
    let e = (0, s.getPlatformName)();
    return E.has(e) ? e : null;
  }
}();
null != o && i.tags.push('platform:'.concat(o));
let u = function() {
  let e = l.Z;
  return null != e && a.e.ALL.has(e) ? e : null;
}();
return null != u && i.tags.push('release_channel:'.concat(u)), i;
  }
  increment(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = this._getMetricWithDefaults(e, 'count');
this._metrics.push(n), (t || this._metrics.length >= 100) && this._flush();
  }
  distribution(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
if (!(0, u.V)('distribution-metric'))
  return;
let r = {
  ...this._getMetricWithDefaults(e, 'distribution'),
  value: t
};
this._metrics.push(r), (n || this._metrics.length >= 100) && this._flush();
  }
  _flush() {
if (this._metrics.length > 0) {
  let e = [...this._metrics];
  o.tn.post({
    url: (0, u.V)('monitoring-agent') ? d.ANM.METRICS_V2 : d.ANM.METRICS,
    body: {
      metrics: e,
      client_info: {
        built_at: '1720819949151',
        build_number: '309458'
      }
    },
    retries: 1
  }).catch(t => {
    this._metrics.length + e.length < 100 && (this._metrics = [
      ...this._metrics,
      ...e
    ]);
  });
}
this._metrics = [];
  }
  constructor() {
_(this, '_metrics', void 0), _(this, '_intervalId', void 0), this._metrics = [], this._intervalId = setInterval(() => {
  this._flush();
}, 120000);
  }
}();