"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
});
var n = l("308503"),
  r = l("95410"),
  a = l("605250"),
  s = l("599110"),
  i = l("149806"),
  o = l("49111");
let u = "UserFlowAnalyticsStore_current",
  c = "UserFlowAnalyticsStore";

function d(e) {
  if (e === i.FlowType.UNKNOWN) return null;
  let t = r.default.get("".concat(c, "-").concat(e));
  if (null == t) return null;
  let {
    version: l,
    ...n
  } = t;
  return 1 !== l ? null : n
}
new a.default("UserFlowAnalytics");
let f = (0, n.default)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
    var e;
    let l = null !== (e = t().currentFlow) && void 0 !== e ? e : r.default.get(u);
    if (null == l) return null;
    let {
      [l]: n
    } = t().flows, a = null != n ? n : d(l);
    return (null == a ? void 0 : a.currentStep) != null ? l : null
  }
}));

function I(e, t) {
  let {
    [e]: l, ...n
  } = f.getState().flows, r = null != l ? l : d(e);
  if ((null == r ? void 0 : r.currentStep) == null || r.currentStep !== t) f.setState({
    flows: {
      ...n,
      [e]: {
        type: e,
        lastStep: null,
        lastTimestamp: null,
        currentStep: t,
        currentTimestamp: new Date,
        skipped: !1
      }
    },
    currentFlow: e
  })
}

function E(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = e;
  if (e === i.FlowType.ANY) {
    var r;
    n = null !== (r = f.getState().activeFlow()) && void 0 !== r ? r : i.FlowType.UNKNOWN
  }
  let {
    [n]: a, ...s
  } = f.getState().flows, o = null != a ? a : d(n);
  if (null != o && null != o.currentStep) o.currentStep !== t && f.setState({
    flows: {
      ...s,
      [n]: {
        ...o,
        lastStep: o.currentStep,
        lastTimestamp: o.currentTimestamp,
        currentStep: t,
        currentTimestamp: new Date,
        ended: l
      }
    },
    currentFlow: n
  })
}
f.subscribe(e => {
  var t;
  if (null != e && (! function(e) {
      if (e.type === i.FlowType.UNKNOWN) return;
      let t = "".concat(c, "-").concat(e.type);
      e.ended ? (r.default.remove(t), r.default.remove(u)) : (r.default.set("".concat(c, "-").concat(e.type), {
        ...e,
        version: 1
      }), r.default.set(u, e.type))
    }(e), s.default.track(o.AnalyticEvents.NUO_TRANSITION, {
      flow_type: e.type,
      from_step: e.lastStep,
      to_step: e.currentStep,
      seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
    }, {
      flush: !0
    }), e.ended)) {
    let t = {
      ...f.getState().flows
    };
    delete t[e.type], f.setState({
      flows: t,
      currentFlow: null
    })
  }
}, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

function _() {
  return null != f.getState().activeFlow()
}
var p = {
  flowStart: I,
  flowStepOrStart: function(e, t) {
    _() ? E(e, t) : I(e, t)
  },
  flowStep: E,
  hasActiveFlow: _
}