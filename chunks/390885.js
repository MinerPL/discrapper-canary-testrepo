var o = n(652874),
  r = n(433517),
  i = n(710845),
  a = n(626135),
  c = n(630724),
  l = n(981631);
let _ = 'UserFlowAnalyticsStore_current',
  u = 'UserFlowAnalyticsStore';

function d(e) {
  if (e === c.MK.UNKNOWN)
return null;
  let t = r.K.get(''.concat(u, '-').concat(e));
  if (null == t)
return null;
  let {
version: n,
...o
  } = t;
  return 1 !== n ? null : o;
}
new i.Z('UserFlowAnalytics');
let s = (0, o.Z)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
var e;
let n = null !== (e = t().currentFlow) && void 0 !== e ? e : r.K.get(_);
if (null == n)
  return null;
let {
  [n]: o
} = t().flows, i = null != o ? o : d(n);
return (null == i ? void 0 : i.currentStep) != null ? n : null;
  }
}));

function p(e, t) {
  let {
[e]: n,
...o
  } = s.getState().flows, r = null != n ? n : d(e);
  if ((null == r ? void 0 : r.currentStep) == null || r.currentStep !== t)
s.setState({
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
}

function f(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
o = e;
  if (e === c.MK.ANY) {
var r;
o = null !== (r = s.getState().activeFlow()) && void 0 !== r ? r : c.MK.UNKNOWN;
  }
  let {
[o]: i,
...a
  } = s.getState().flows, l = null != i ? i : d(o);
  if (null != l && null != l.currentStep && l.currentStep !== t)
s.setState({
  flows: {
    ...a,
    [o]: {
      ...l,
      lastStep: l.currentStep,
      lastTimestamp: l.currentTimestamp,
      currentStep: t,
      currentTimestamp: new Date(),
      ended: n
    }
  },
  currentFlow: o
});
}
s.subscribe(e => {
  var t;
  if (null != e) {
if (! function(e) {
    if (e.type === c.MK.UNKNOWN)
      return;
    let t = ''.concat(u, '-').concat(e.type);
    e.ended ? (r.K.remove(t), r.K.remove(_)) : (r.K.set(''.concat(u, '-').concat(e.type), {
      ...e,
      version: 1
    }), r.K.set(_, e.type));
  }(e), a.default.track(l.rMx.NUO_TRANSITION, {
    flow_type: e.type,
    from_step: e.lastStep,
    to_step: e.currentStep,
    seconds_on_from_step: 'function' != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1000
  }, {
    flush: !0
  }), e.ended) {
  let t = {
    ...s.getState().flows
  };
  delete t[e.type], s.setState({
    flows: t,
    currentFlow: null
  });
}
  }
}, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

function I() {
  return null != s.getState().activeFlow();
}
t.Z = {
  flowStart: p,
  flowStepOrStart: function(e, t) {
I() ? f(e, t) : p(e, t);
  },
  flowStep: f,
  hasActiveFlow: I
};