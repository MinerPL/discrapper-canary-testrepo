"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
  }
}), l("47120"), l("518263"), l("970173"), l("520712"), l("268111"), l("941497"), l("32026"), l("480839"), l("744285"), l("492257"), l("873817"), l("863942"), l("642549"), l("653041");
var a = l("735250"),
  s = l("470079"),
  n = l("803997"),
  i = l.n(n),
  r = l("788900"),
  u = l("268146"),
  o = l("442837"),
  d = l("141038"),
  c = l("846519"),
  f = l("481060"),
  m = l("224706"),
  S = l("594190"),
  E = l("57655"),
  C = l("569984"),
  _ = l("918701"),
  g = l("433811"),
  N = l("131951"),
  h = l("449224"),
  x = l("285952"),
  I = l("643095"),
  p = l("358085"),
  A = l("463727"),
  R = l("855403"),
  T = l("989941"),
  v = l("958707"),
  L = l("133179"),
  M = l("46140"),
  j = l("65154"),
  O = l("689938"),
  D = l("787186");
async function P() {
  let e = N.default.getVideoDevices(),
    t = (0, d.default)(N.default.getMediaEngine(), [u.DesktopSources.WINDOW, u.DesktopSources.SCREEN], {
      width: 176,
      height: 99
    }),
    l = G(),
    a = await l,
    s = await t,
    n = s.filter(e => e.id.startsWith(u.DesktopSources.SCREEN)),
    i = function(e, t) {
      let l = {};
      return t.forEach(e => {
        l[e.id] = e
      }), e.forEach(e => {
        l[e.id] = e
      }), Object.values(l)
    }(s.filter(e => e.id.startsWith(u.DesktopSources.WINDOW)), a),
    o = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"];
  return {
    windowSources: i,
    screenSources: n,
    cameraSources: Object.entries(e).filter(e => {
      let [t, l] = e;
      return !l.disabled
    }).map((e, t) => {
      let [l, a] = e, s = o[t % o.length], n = Uint8Array.from(atob(s), e => e.charCodeAt(0)), i = (0, r.thumbHashToDataURL)(n);
      return {
        id: "camera:" + a.id,
        name: a.name,
        url: i
      }
    })
  }
}
async function G() {
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
      s = t.icon;
    return null != l && null != a && null != s ? {
      id: "window:".concat(l),
      name: a,
      url: "data:image/bmp;base64,".concat(s)
    } : null
  }))).filter(e => null !== e)
}

function b(e) {
  let t = (0, p.isWindows)() ? (0, T.default)(S.default, h.default) : null,
    l = S.default.getRunningGames();
  return null != t && (0, R.default)(e.id, t.windowHandle) ? 2 : null != l.find(t => (0, R.default)(e.id, t.windowHandle)) ? 1 : 0
}

function U(e) {
  let {
    selectedSource: t,
    onChangeSelectedSource: l
  } = e, {
    enableGoLiveCaptureCard: n
  } = A.default.useExperiment({
    location: "GoLive_Source_Select"
  }), r = N.default.supports(j.Features.GO_LIVE_HARDWARE), [d, m] = s.useState(null), [h, p] = s.useState(null), [T, G] = s.useState(null), U = null != T && T.length > 0, [F, k] = s.useState(u.DesktopSources.WINDOW), [y, w] = s.useState(!1), B = s.useRef(null), V = s.useRef(new c.Interval), H = (0, o.useStateFromStores)([S.default], () => S.default.getRunningGames()), W = function(e, t, l) {
    let a = (0, E.useIsEligibleForQuests)({
      location: M.QuestsExperimentLocations.STREAM_SOURCE_SELECT
    });
    return s.useMemo(() => {
      if (null == l || !a) return null;
      for (let a of l) {
        var s, n;
        let l = t.find(e => (0, R.default)(a.id, e.windowHandle));
        if ((null == l ? void 0 : l.id) == null) continue;
        let i = (0, _.getQuestByApplicationId)(e, l.id);
        if (null != i && (null === (s = i.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null && (null === (n = i.userStatus) || void 0 === n ? void 0 : n.completedAt) == null) return {
          source: a,
          quest: i
        }
      }
      return null
    }, [a, e, t, l])
  }((0, o.useStateFromStores)([C.default], () => C.default.quests), H, h), z = s.useMemo(() => null == h ? null : [...h].sort((e, t) => (null == W ? void 0 : W.source.id) === e.id ? -1 : (null == W ? void 0 : W.source.id) === t.id ? 1 : b(t) - b(e)), [W, h]);
  s.useEffect(() => {
    let e = V.current;
    return P().then(e => {
      let {
        screenSources: t,
        windowSources: l,
        cameraSources: a
      } = e;
      m(t), p(l), G(a)
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: t,
        cameraSources: l
      } = await P();
      m(e), p(t), G(l)
    }), () => {
      e.stop()
    }
  }, []);
  let K = s.useCallback(e => {
      if (null !== e) {
        var t;
        B.current = e, w((t = !e.isScrolledToTop(), t))
      }
    }, []),
    Y = function(e) {
      switch (e) {
        case u.DesktopSources.WINDOW:
          return z;
        case u.DesktopSources.SCREEN:
          return d;
        case u.DesktopSources.CAMERA:
          return T
      }
    }(F);
  if (null == Y) return (0, a.jsx)(x.default, {
    className: D.spinner,
    justify: x.default.Justify.CENTER,
    align: x.default.Align.CENTER,
    children: (0, a.jsx)(f.Spinner, {})
  });
  let Q = Y.map(e => {
    let {
      id: s
    } = e, n = (null == t ? void 0 : t.id) === s;
    return (0, a.jsx)(f.Clickable, {
      className: i()(D.tile, {
        [D.selected]: n
      }),
      onClick: () => l(e, null),
      children: (0, a.jsx)(L.default, {
        source: e,
        selectedSource: t
      }, e.id)
    }, s)
  });

  function Z() {
    let e = B.current;
    null != e && w(!e.isScrolledToTop())
  }
  return (0, a.jsxs)(s.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: D.segmentContainer,
      children: [(0, a.jsx)(v.default, {
        separator: y
      }), (0, a.jsx)(f.SegmentedControl, {
        options: function() {
          let e = [{
            name: O.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
            value: u.DesktopSources.WINDOW
          }, {
            name: O.default.Messages.GO_LIVE_MODAL_SCREENS,
            value: u.DesktopSources.SCREEN
          }];
          return n && r && U && e.push({
            name: O.default.Messages.GO_LIVE_MODAL_CAPTURE,
            value: u.DesktopSources.CAMERA
          }), e
        }(),
        value: F,
        onChange: e => {
          let {
            value: t
          } = e;
          return k(t)
        },
        className: D.segmentControl,
        optionClassName: D.segmentControlOption
      })]
    }), F === u.DesktopSources.CAMERA ? (0, a.jsx)("div", {
      className: D.sourceContainer,
      children: (0, a.jsx)(f.AdvancedScroller, {
        ref: K,
        className: D.sourceScroller,
        onScroll: Z,
        children: (0, a.jsx)(I.default, {
          layout: I.default.Layout.WRAP,
          columns: 2,
          className: D.sourceContainer,
          children: Q
        })
      })
    }) : (0, a.jsxs)(f.AdvancedScroller, {
      ref: K,
      className: D.sourceScroller,
      onScroll: Z,
      children: [F === u.DesktopSources.WINDOW && null != W && (0, a.jsx)(g.default, {
        quest: W.quest
      }), (0, a.jsx)(I.default, {
        layout: I.default.Layout.WRAP,
        columns: 2,
        className: D.sourceContainer,
        children: Q
      })]
    })]
  })
}