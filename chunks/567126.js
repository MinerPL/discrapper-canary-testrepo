"use strict";
l.r(t), l.d(t, {
  default: function() {
    return G
  }
}), l("47120"), l("518263"), l("970173"), l("520712"), l("268111"), l("941497"), l("32026"), l("480839"), l("744285"), l("492257"), l("873817"), l("863942"), l("642549"), l("653041");
var a = l("735250"),
  n = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("788900"),
  u = l("268146"),
  o = l("442837"),
  d = l("141038"),
  c = l("846519"),
  f = l("481060"),
  m = l("224706"),
  S = l("594190"),
  E = l("569984"),
  _ = l("918701"),
  N = l("977156"),
  h = l("433811"),
  C = l("131951"),
  g = l("449224"),
  p = l("285952"),
  A = l("643095"),
  x = l("358085"),
  I = l("463727"),
  R = l("855403"),
  T = l("989941"),
  v = l("958707"),
  L = l("133179"),
  M = l("46140"),
  O = l("65154"),
  j = l("689938"),
  D = l("578168");
async function b() {
  let e = C.default.getVideoDevices(),
    t = (0, d.default)(C.default.getMediaEngine(), [u.DesktopSources.WINDOW, u.DesktopSources.SCREEN], {
      width: 176,
      height: 99
    }),
    l = P(),
    a = await l,
    n = await t,
    s = n.filter(e => e.id.startsWith(u.DesktopSources.SCREEN)),
    i = function(e, t) {
      let l = {};
      return t.forEach(e => {
        l[e.id] = e
      }), e.forEach(e => {
        l[e.id] = e
      }), Object.values(l)
    }(n.filter(e => e.id.startsWith(u.DesktopSources.WINDOW)), a),
    o = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"];
  return {
    windowSources: i,
    screenSources: s,
    cameraSources: Object.entries(e).filter(e => {
      let [t, l] = e;
      return !l.disabled
    }).map((e, t) => {
      let [l, a] = e, n = o[t % o.length], s = Uint8Array.from(atob(n), e => e.charCodeAt(0)), i = (0, r.thumbHashToDataURL)(s);
      return {
        id: "camera:" + a.id,
        name: a.name,
        url: i
      }
    })
  }
}
async function P() {
  let e = S.default.getRunningGames();
  return (await Promise.all(e.map(async e => {
    let t;
    if (null == e.name) return null;
    try {
      t = await m.default.identifyGame(e.pid, e.name)
    } catch (e) {
      return null
    }
    let l = e.windowHandle,
      a = e.name,
      n = t.icon;
    return null != l && null != a && null != n ? {
      id: "window:".concat(l),
      name: a,
      url: "data:image/bmp;base64,".concat(n)
    } : null
  }))).filter(e => null !== e)
}

function U(e) {
  let t = (0, x.isWindows)() ? (0, T.default)(S.default, g.default) : null,
    l = S.default.getRunningGames();
  return null != t && (0, R.default)(e.id, t.windowHandle) ? 2 : null != l.find(t => (0, R.default)(e.id, t.windowHandle)) ? 1 : 0
}

function G(e) {
  let {
    selectedSource: t,
    onChangeSelectedSource: l
  } = e, {
    enableGoLiveCaptureCard: s
  } = I.default.useExperiment({
    location: "GoLive_Source_Select"
  }), r = C.default.supports(O.Features.GO_LIVE_HARDWARE), [d, m] = n.useState(null), [g, x] = n.useState(null), [T, P] = n.useState(null), G = null != T && T.length > 0, [k, w] = n.useState(u.DesktopSources.WINDOW), [y, F] = n.useState(!1), V = n.useRef(null), B = n.useRef(new c.Interval), H = (0, o.useStateFromStores)([S.default], () => S.default.getRunningGames()), W = function(e, t, l) {
    let a = (0, N.useIsEligibleForQuests)({
      location: M.QuestsExperimentLocations.STREAM_SOURCE_SELECT
    });
    return n.useMemo(() => {
      if (null == l || !a) return null;
      for (let a of l) {
        var n, s;
        let l = t.find(e => (0, R.default)(a.id, e.windowHandle));
        if ((null == l ? void 0 : l.id) == null) continue;
        let i = (0, _.getQuestByApplicationId)(e, l.id);
        if (null != i && (null === (n = i.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null === (s = i.userStatus) || void 0 === s ? void 0 : s.completedAt) == null) return {
          source: a,
          quest: i
        }
      }
      return null
    }, [a, e, t, l])
  }((0, o.useStateFromStores)([E.default], () => E.default.quests), H, g), K = n.useMemo(() => null == g ? null : [...g].sort((e, t) => (null == W ? void 0 : W.source.id) === e.id ? -1 : (null == W ? void 0 : W.source.id) === t.id ? 1 : U(t) - U(e)), [W, g]);
  n.useEffect(() => {
    let e = B.current;
    return b().then(e => {
      let {
        screenSources: t,
        windowSources: l,
        cameraSources: a
      } = e;
      m(t), x(l), P(a)
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: t,
        cameraSources: l
      } = await b();
      m(e), x(t), P(l)
    }), () => {
      e.stop()
    }
  }, []);
  let z = n.useCallback(e => {
      if (null !== e) {
        var t;
        V.current = e, F((t = !e.isScrolledToTop(), t))
      }
    }, []),
    Y = function(e) {
      switch (e) {
        case u.DesktopSources.WINDOW:
          return K;
        case u.DesktopSources.SCREEN:
          return d;
        case u.DesktopSources.CAMERA:
          return T
      }
    }(k);
  if (null == Y) return (0, a.jsx)(p.default, {
    className: D.spinner,
    justify: p.default.Justify.CENTER,
    align: p.default.Align.CENTER,
    children: (0, a.jsx)(f.Spinner, {})
  });
  let Q = Y.map(e => {
    let {
      id: n
    } = e, s = (null == t ? void 0 : t.id) === n;
    return (0, a.jsx)(f.Clickable, {
      className: i()(D.tile, {
        [D.selected]: s
      }),
      onClick: () => l(e, null),
      children: (0, a.jsx)(L.default, {
        source: e,
        selectedSource: t
      }, e.id)
    }, n)
  });

  function q() {
    let e = V.current;
    null != e && F(!e.isScrolledToTop())
  }
  return (0, a.jsxs)(n.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: D.segmentContainer,
      children: [(0, a.jsx)(v.default, {
        separator: y
      }), (0, a.jsx)(f.SegmentedControl, {
        options: function() {
          let e = [{
            name: j.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
            value: u.DesktopSources.WINDOW
          }, {
            name: j.default.Messages.GO_LIVE_MODAL_SCREENS,
            value: u.DesktopSources.SCREEN
          }];
          return s && r && G && e.push({
            name: j.default.Messages.GO_LIVE_MODAL_CAPTURE,
            value: u.DesktopSources.CAMERA
          }), e
        }(),
        value: k,
        onChange: e => {
          let {
            value: t
          } = e;
          return w(t)
        },
        className: D.segmentControl,
        optionClassName: D.segmentControlOption
      })]
    }), k === u.DesktopSources.CAMERA ? (0, a.jsx)("div", {
      className: D.sourceContainer,
      children: (0, a.jsx)(f.AdvancedScroller, {
        ref: z,
        className: D.sourceScroller,
        onScroll: q,
        children: (0, a.jsx)(A.default, {
          layout: A.default.Layout.WRAP,
          columns: 2,
          className: D.sourceContainer,
          children: Q
        })
      })
    }) : (0, a.jsxs)(f.AdvancedScroller, {
      ref: z,
      className: D.sourceScroller,
      onScroll: q,
      children: [k === u.DesktopSources.WINDOW && null != W && (0, a.jsx)(h.default, {
        quest: W.quest
      }), (0, a.jsx)(A.default, {
        layout: A.default.Layout.WRAP,
        columns: 2,
        className: D.sourceContainer,
        children: Q
      })]
    })]
  })
}