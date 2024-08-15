var o = n(652874),
  s = n(731965),
  l = n(433517),
  r = n(710845),
  a = n(626135),
  i = n(630724),
  c = n(981631);
let u = 'UserFlowAnalyticsStore_current',
  d = 'UserFlowAnalyticsStore';

function m(e) {
  if (e === i.MK.UNKNOWN)
return null;
  let t = l.K.get(''.concat(d, '-').concat(e));
  if (null == t)
return null;
  let {
version: n,
...o
  } = t;
  return 1 !== n ? null : o;
}
new r.Z('UserFlowAnalytics');
let f = (0, o.Z)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
var e;
let n = null !== (e = t().currentFlow) && void 0 !== e ? e : l.K.get(u);
if (null == n)
  return null;
let {
  [n]: o
} = t().flows, s = null != o ? o : m(n);
return (null == s ? void 0 : s.currentStep) != null ? n : null;
  }
}));

function _(e, t) {
  let {
[e]: n,
...o
  } = f.getState().flows, l = null != n ? n : m(e);
  if ((null == l ? void 0 : l.currentStep) == null || l.currentStep !== t)
(0, s.j)(() => {
  f.setState({
    flows: {
      ...o,
      [e]: {
        type: e,
        lastStep: null,
        lastTimestamp: null,
        currentStep: t,
        currentTimestamp: new Date(),
        skipped: !1
      }
    },
    currentFlow: e
  });
});
}

function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
o = e;
  if (e === i.MK.ANY) {
var l;
o = null !== (l = f.getState().activeFlow()) && void 0 !== l ? l : i.MK.UNKNOWN;
  }
  let {
[o]: r,
...a
  } = f.getState().flows, c = null != r ? r : m(o);
  if (null != c && null != c.currentStep && c.currentStep !== t)
(0, s.j)(() => {
  f.setState({
    flows: {
      ...a,
      [o]: {
        ...c,
        lastStep: c.currentStep,
        lastTimestamp: c.currentTimestamp,
        currentStep: t,
        currentTimestamp: new Date(),
        ended: n
      }
    },
    currentFlow: o
  });
});
}
f.subscribe(e => {
  var t;
  if (null != e) {
if (! function(e) {
    if (e.type === i.MK.UNKNOWN)
      return;
    let t = ''.concat(d, '-').concat(e.type);
    e.ended ? (l.K.remove(t), l.K.remove(u)) : (l.K.set(''.concat(d, '-').concat(e.type), {
      ...e,
      version: 1
    }), l.K.set(u, e.type));
  }(e), a.default.track(c.rMx.NUO_TRANSITION, {
    flow_type: e.type,
    from_step: e.lastStep,
    to_step: e.currentStep,
    seconds_on_from_step: 'function' != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1000
  }, {
    flush: !0
  }), e.ended) {
  let t = {
    ...f.getState().flows
  };
  delete t[e.type], (0, s.j)(() => {
    f.setState({
      flows: t,
      currentFlow: null
    });
  });
}
  }
}, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

function g() {
  return null != f.getState().activeFlow();
}
t.Z = {
  flowStart: _,
  flowStepOrStart: function(e, t) {
g() ? p(e, t) : _(e, t);
  },
  flowStep: p,
  hasActiveFlow: g
};