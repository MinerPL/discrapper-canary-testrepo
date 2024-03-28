"use strict";
n.r(t), n.d(t, {
  getDispatchApplicationStates: function() {
    return R
  }
}), n("47120"), n("724458"), n("653041");
var l, a = n("735250"),
  s = n("470079"),
  i = n("803997"),
  r = n.n(i),
  o = n("748780"),
  u = n("442837"),
  d = n("692547"),
  c = n("215569"),
  f = n("481060"),
  h = n("812206"),
  C = n("703656"),
  p = n("417363"),
  m = n("941128"),
  g = n("366966"),
  E = n("943461"),
  S = n("780570"),
  _ = n("353042"),
  I = n("981631"),
  N = n("689938"),
  T = n("860240");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let L = {
  [I.LocalDispatchApplicationStates.INSTALLING]: {
    [g.TimeUnits.NONE]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({
      name: e
    }),
    [g.TimeUnits.SECONDS]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format({
      name: e,
      timeRemaining: t
    }),
    [g.TimeUnits.MINUTES]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format({
      name: e,
      timeRemaining: t
    }),
    [g.TimeUnits.HOURS]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format({
      name: e,
      timeRemaining: t
    })
  },
  [I.LocalDispatchApplicationStates.UPDATING]: {
    [g.TimeUnits.NONE]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING.format({
      name: e
    }),
    [g.TimeUnits.SECONDS]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_SECONDS.format({
      name: e,
      timeRemaining: t
    }),
    [g.TimeUnits.MINUTES]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_MINUTES.format({
      name: e,
      timeRemaining: t
    }),
    [g.TimeUnits.HOURS]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_HOURS.format({
      name: e,
      timeRemaining: t
    })
  },
  [I.LocalDispatchApplicationStates.REPAIRING]: {
    [g.TimeUnits.NONE]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({
      name: e
    }),
    [g.TimeUnits.SECONDS]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format({
      name: e,
      timeRemaining: t
    }),
    [g.TimeUnits.MINUTES]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format({
      name: e,
      timeRemaining: t
    }),
    [g.TimeUnits.HOURS]: (e, t) => N.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format({
      name: e,
      timeRemaining: t
    })
  }
};
class v extends s.PureComponent {
  renderText() {
    let {
      state: e,
      isPaused: t
    } = this.props;
    if (e.type === I.LocalDispatchApplicationStates.UPDATING || e.type === I.LocalDispatchApplicationStates.REPAIRING || e.type === I.LocalDispatchApplicationStates.INSTALLING) {
      if (t) return N.default.Messages.APPLICATION_PROGRESS_INDICATOR_PAUSED;
      if (e.stage === I.DispatchApplicationStages.PATCHING || e.stage === I.DispatchApplicationStages.REPAIRING) return (0, a.jsx)(_.default, {
        getHistoricalTotalBytes: p.default.getHistoricalTotalBytesWritten,
        updateInterval: 5e3,
        children: this.renderProgressBody
      })
    }
    return null
  }
  render() {
    let e = this.renderText();
    return null != e ? e : N.default.Messages.LIBRARY
  }
  constructor(...e) {
    super(...e), A(this, "renderProgressBody", (e, t) => {
      let {
        state: n,
        application: l
      } = this.props, {
        stage: a,
        progress: s,
        total: i,
        type: r
      } = n;
      if (null == s || null == i || null == a) return null;
      let o = e[e.length - 1] / t * 1e3,
        u = 0 !== o ? Math.max(1, (i - s) / o) : null,
        d = L[r],
        c = null != d ? Object.keys(d) : [],
        {
          unit: f,
          time: h
        } = (0, g.getTimeAndUnit)(null != u ? u / 60 : null, c);
      if (null != d && null != f) {
        let e = d[f];
        return null != e ? e(l.name, h) : null
      }
      return null
    })
  }
}
class x extends(l = s.PureComponent) {
  componentWillAppear(e) {
    this.state.animationScale.setValue(1), e()
  }
  componentWillEnter(e) {
    o.default.spring(this.state.animationScale, {
      toValue: 1,
      duration: 200
    }).start(e)
  }
  componentWillLeave(e) {
    o.default.spring(this.state.animationScale, {
      toValue: 0,
      duration: 200
    }).start(e)
  }
  getTooltipText() {
    let {
      firstApplication: e,
      firstState: t,
      isPaused: n
    } = this.props;
    return null == e || null == t ? N.default.Messages.LIBRARY : (0, a.jsx)(v, {
      application: e,
      state: t,
      isPaused: n
    })
  }
  render() {
    let {
      percent: e,
      isPaused: t,
      className: n
    } = this.props;
    return (0, a.jsx)(o.default.div, {
      style: {
        transform: [{
          scale: this.state.animationScale
        }]
      },
      className: r()(n, T.progressContainer),
      onClick: this.handleOnClick,
      children: (0, a.jsx)(f.Tooltip, {
        text: this.getTooltipText(),
        position: "right",
        "aria-label": !1,
        children: n => (0, a.jsx)("div", {
          ...n,
          children: (0, a.jsx)(f.ProgressCircle, {
            percent: e,
            colorOverride: t ? d.default.unsafe_rawColors.PRIMARY_500.css : null,
            children: (0, a.jsx)(E.default, {
              className: T.downloadIcon
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), A(this, "state", {
      animationScale: new o.default.Value(0)
    }), A(this, "handleOnClick", e => {
      let {
        onClick: t
      } = this.props;
      e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, C.transitionTo)(I.Routes.APPLICATION_LIBRARY)
    })
  }
}
A(x, "defaultProps", {
  strokeSize: f.ProgressCircle.StrokeSizes.MEDIUM
});

function R(e, t) {
  return e.reduce((e, n) => {
    let {
      applicationId: l,
      branchId: a
    } = n, s = t.getState(l, a);
    return null != s && e.push(s), e
  }, [])
}
t.default = u.default.connectStores([m.default, p.default, h.default], () => {
  let e = m.default.activeItems,
    t = R(e, p.default),
    {
      total: n,
      progress: l
    } = S.getCombinedProgress(t);
  return {
    percent: S.calculateProgressPercentage(l, n),
    isPaused: m.default.paused,
    firstApplication: e.length > 0 ? h.default.getApplication(e[0].applicationId) : null,
    firstState: t.length > 0 ? t[0] : null
  }
})(e => {
  let {
    determineOwnVisibility: t = !0,
    ...n
  } = e;
  return t ? (0, a.jsx)(c.TransitionGroup, {
    component: s.Fragment,
    children: n.percent > 0 && n.percent < 100 ? (0, a.jsx)(x, {
      ...n
    }) : null
  }) : (0, a.jsx)(x, {
    ...n
  })
})