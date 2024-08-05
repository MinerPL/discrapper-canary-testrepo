var o = n(652874),
  r = n(731965),
  i = n(433517),
  a = n(710845),
  c = n(626135),
  l = n(630724),
  _ = n(981631);
let u = 'UserFlowAnalyticsStore_current',
  s = 'UserFlowAnalyticsStore';

function d(e) {
  if (e === l.MK.UNKNOWN)
return null;
  let t = i.K.get(''.concat(s, '-').concat(e));
  if (null == t)
return null;
  let {
version: n,
...o
  } = t;
  return 1 !== n ? null : o;
}
new a.Z('UserFlowAnalytics');
let f = (0, o.Z)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
var e;
let n = null !== (e = t().currentFlow) && void 0 !== e ? e : i.K.get(u);
if (null == n)
  return null;
let {
  [n]: o
} = t().flows, r = null != o ? o : d(n);
return (null == r ? void 0 : r.currentStep) != null ? n : null;
  }
}));

function p(e, t) {
  let {
[e]: n,
...o
  } = f.getState().flows, i = null != n ? n : d(e);
  if ((null == i ? void 0 : i.currentStep) == null || i.currentStep !== t)
(0, r.j)(() => {
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

function I(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
o = e;
  if (e === l.MK.ANY) {
var i;
o = null !== (i = f.getState().activeFlow()) && void 0 !== i ? i : l.MK.UNKNOWN;
  }
  let {
[o]: a,
...c
  } = f.getState().flows, _ = null != a ? a : d(o);
  if (null != _ && null != _.currentStep && _.currentStep !== t)
(0, r.j)(() => {
  f.setState({
    flows: {
      ...c,
      [o]: {
        ..._,
        lastStep: _.currentStep,
        lastTimestamp: _.currentTimestamp,
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
    if (e.type === l.MK.UNKNOWN)
      return;
    let t = ''.concat(s, '-').concat(e.type);
    e.ended ? (i.K.remove(t), i.K.remove(u)) : (i.K.set(''.concat(s, '-').concat(e.type), {
      ...e,
      version: 1
    }), i.K.set(u, e.type));
  }(e), c.default.track(_.rMx.NUO_TRANSITION, {
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
  delete t[e.type], (0, r.j)(() => {
    f.setState({
      flows: t,
      currentFlow: null
    });
  });
}
  }
}, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

function E() {
  return null != f.getState().activeFlow();
}
t.Z = {
  flowStart: p,
  flowStepOrStart: function(e, t) {
E() ? I(e, t) : p(e, t);
  },
  flowStep: I,
  hasActiveFlow: E
};