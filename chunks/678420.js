n.r(t), n.d(t, {
  default: function() {
return x;
  }
}), n(47120);
var l = n(735250),
  r = n(470079),
  a = n(481060),
  o = n(661111),
  s = n(766411),
  i = n(626135),
  c = n(388080),
  d = n(981631),
  h = n(596401),
  u = n(689938),
  g = n(107636);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class p extends r.PureComponent {
  componentDidMount() {
this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(d.rMx.CHANGE_LOG_OPENED, {}, !0);
  }
  componentWillUnmount() {
this.track(d.rMx.CHANGE_LOG_CLOSED);
  }
  render() {
return (0, l.jsx)(c.Z, {
  ...this.props,
  onClose: this.close,
  onScroll: this.handleScroll,
  track: this.track
});
  }
  constructor(...e) {
var t;
super(...e), t = this, m(this, 'maxScrolledPercentage', 0), m(this, 'mountedAt', 0), m(this, 'close', () => {
  (0, a.closeModal)(h.Xd);
}), m(this, 'handleScroll', e => {
  let {
    offsetHeight: t,
    scrollHeight: n,
    scrollTop: l
  } = e.getScrollerState();
  this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, l / (n - t)), 1);
}), m(this, 'track', function(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    {
      changeLog: r
    } = t.props,
    {
      date: a,
      revision: o
    } = r,
    s = {
      change_log_id: ''.concat(a, ':').concat(o),
      ...n
    };
  !l && (s = {
    seconds_open: Math.round((Date.now() - t.mountedAt) / 1000),
    max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
    ...s
  }), i.default.track(e, s);
});
  }
}

function x(e) {
  let {
changelog: t,
loaded: n,
clientTooOld: i
  } = (0, s.E)();
  if (r.useEffect(() => {
  if (n && null != t)
    return () => o.Z.markChangelogAsSeen(t.id, t.date);
}, [
  n,
  t
]), i)
return (0, l.jsx)(a.ModalRoot, {
  transitionState: e.transitionState,
  children: (0, l.jsx)('div', {
    className: g.empty,
    children: (0, l.jsx)(a.Heading, {
      variant: 'heading-lg/medium',
      children: u.Z.Messages.CHANGE_LOG_CLIENT_OLD
    })
  })
});
  if (null == t)
return n ? (0, l.jsx)(a.ModalRoot, {
  transitionState: e.transitionState,
  children: (0, l.jsx)('div', {
    className: g.empty,
    children: (0, l.jsx)(a.Text, {
      variant: 'text-md/semibold',
      children: u.Z.Messages.CHANGE_LOG_FAILED_TO_LOAD
    })
  })
}) : (0, l.jsx)(a.ModalRoot, {
  transitionState: e.transitionState,
  children: (0, l.jsx)('div', {
    className: g.empty,
    children: (0, l.jsx)(a.Spinner, {
      type: a.Spinner.Type.WANDERING_CUBES
    })
  })
});
  return (0, l.jsx)(a.ModalRoot, {
transitionState: e.transitionState,
children: (0, l.jsx)(p, {
  changeLog: t
})
  });
}