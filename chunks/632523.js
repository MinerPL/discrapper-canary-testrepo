n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(990547),
  r = n(91192),
  l = n(481060),
  o = n(724757),
  c = n(213609),
  u = n(441358),
  d = n(426521),
  _ = n(537959);

function E(e) {
  let {
initialized: t,
items: n,
loading: E,
loadMore: I
  } = e, m = s.useRef(null), T = (0, o.Z)('for-you', m);
  (0, c.Z)({
type: a.ImpressionTypes.VIEW,
name: a.ImpressionNames.NOTIFICATION_CENTER_LANDING,
properties: {
  empty: 0 === n.length
}
  }, {
disableTrack: !t
  }, [t]);
  let h = () => {
var e;
let t = null === (e = m.current) || void 0 === e ? void 0 : e.getScrollerState();
if (null != t)
  t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && I();
  };
  return t ? 0 === n.length ? (0, i.jsx)(u.v, {}) : (0, i.jsx)(i.Fragment, {
children: (0, i.jsx)(r.bG, {
  navigator: T,
  children: (0, i.jsx)(r.SJ, {
    children: e => {
      let {
        ref: t,
        ...s
      } = e;
      return (0, i.jsxs)(l.AdvancedScroller, {
        className: _.container,
        ref: e => {
          var n;
          m.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
        },
        ...s,
        onScroll: h,
        children: [
          (0, i.jsx)(d.U, {
            items: n
          }),
          E ? (0, i.jsx)(l.Spinner, {
            className: _.spinner
          }) : null
        ]
      });
    }
  })
})
  }) : (0, i.jsx)(l.Spinner, {
className: _.loadingPlaceholder
  });
}