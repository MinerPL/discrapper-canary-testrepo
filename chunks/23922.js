"use strict";
l.r(t), l.d(t, {
  default: function() {
    return G
  }
}), l("222007"), l("311790"), l("477657"), l("811875"), l("90301"), l("652153"), l("28797"), l("817884"), l("597349"), l("667536"), l("690341"), l("492311"), l("101997"), l("424973");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  r = l.n(s),
  i = l("723251"),
  u = l("771281"),
  o = l("446674"),
  d = l("351720"),
  c = l("862337"),
  f = l("77078"),
  m = l("823411"),
  S = l("161454"),
  C = l("374023"),
  E = l("2973"),
  h = l("227231"),
  N = l("277057"),
  g = l("42887"),
  _ = l("703370"),
  p = l("145131"),
  I = l("162933"),
  x = l("773336"),
  v = l("301834"),
  A = l("756898"),
  T = l("375202"),
  R = l("321443"),
  L = l("444276"),
  M = l("166604"),
  j = l("353927"),
  O = l("782340"),
  D = l("142716");
async function P() {
  let e = g.default.getVideoDevices(),
    t = (0, d.default)(g.default.getMediaEngine(), [u.DesktopSources.WINDOW, u.DesktopSources.SCREEN], {
      width: 176,
      height: 99
    }),
    l = U(),
    n = await l,
    a = await t,
    s = a.filter(e => e.id.startsWith(u.DesktopSources.SCREEN)),
    r = function(e, t) {
      let l = {};
      return t.forEach(e => {
        l[e.id] = e
      }), e.forEach(e => {
        l[e.id] = e
      }), Object.values(l)
    }(a.filter(e => e.id.startsWith(u.DesktopSources.WINDOW)), n),
    o = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"],
    c = Object.entries(e).filter(e => {
      let [t, l] = e;
      return !l.disabled
    }).map((e, t) => {
      let [l, n] = e, a = o[t % o.length], s = Uint8Array.from(atob(a), e => e.charCodeAt(0)), r = (0, i.thumbHashToDataURL)(s);
      return {
        id: "camera:" + n.id,
        name: n.name,
        url: r
      }
    });
  return {
    windowSources: r,
    screenSources: s,
    cameraSources: c
  }
}
async function U() {
  let e = S.default.getRunningGames(),
    t = await Promise.all(e.map(async e => {
      let t;
      if (null == e.name) return null;
      try {
        t = await m.default.identifyGame(e.pid, e.name)
      } catch (e) {
        return null
      }
      let l = e.windowHandle,
        n = e.name,
        a = t.icon;
      return null != l && null != n && null != a ? {
        id: "window:".concat(l),
        name: n,
        url: "data:image/bmp;base64,".concat(a)
      } : null
    }));
  return t.filter(e => null !== e)
}

function w(e) {
  let t = (0, x.isWindows)() ? (0, T.default)(S.default, _.default) : null,
    l = S.default.getRunningGames();
  return null != t && (0, A.default)(e.id, t.windowHandle) ? 2 : null != l.find(t => (0, A.default)(e.id, t.windowHandle)) ? 1 : 0
}

function G(e) {
  let {
    selectedSource: t,
    onChangeSelectedSource: l
  } = e, {
    enableGoLiveCaptureCard: s
  } = v.default.useExperiment({
    location: "GoLive_Source_Select"
  }), i = g.default.supports(j.Features.GO_LIVE_HARDWARE), [d, m] = a.useState(null), [_, x] = a.useState(null), [T, U] = a.useState(null), G = null != T && T.length > 0, [b, y] = a.useState(u.DesktopSources.WINDOW), [V, H] = a.useState(!1), k = a.useRef(null), F = a.useRef(new c.Interval), B = (0, o.useStateFromStores)([S.default], () => S.default.getRunningGames()), W = (0, o.useStateFromStores)([E.default], () => E.default.quests), z = function(e, t, l) {
    let n = (0, C.useIsEligibleForQuests)({
      location: M.QuestsExperimentLocations.STREAM_SOURCE_SELECT
    });
    return a.useMemo(() => {
      if (null == l || !n) return null;
      for (let n of l) {
        var a, s;
        let l = t.find(e => (0, A.default)(n.id, e.windowHandle));
        if ((null == l ? void 0 : l.id) == null) continue;
        let r = (0, h.getQuestByApplicationId)(e, l.id);
        if (null != r && (null === (a = r.userStatus) || void 0 === a ? void 0 : a.enrolledAt) != null && (null === (s = r.userStatus) || void 0 === s ? void 0 : s.completedAt) == null) return {
          source: n,
          quest: r
        }
      }
      return null
    }, [n, e, t, l])
  }(W, B, _), Z = a.useMemo(() => null == _ ? null : [..._].sort((e, t) => (null == z ? void 0 : z.source.id) === e.id ? -1 : (null == z ? void 0 : z.source.id) === t.id ? 1 : w(t) - w(e)), [z, _]);
  a.useEffect(() => {
    let e = F.current;
    return P().then(e => {
      let {
        screenSources: t,
        windowSources: l,
        cameraSources: n
      } = e;
      m(t), x(l), U(n)
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: t,
        cameraSources: l
      } = await P();
      m(e), x(t), U(l)
    }), () => {
      e.stop()
    }
  }, []);
  let Y = a.useCallback(e => {
      if (null !== e) {
        var t;
        k.current = e, H((t = !e.isScrolledToTop(), t))
      }
    }, []),
    K = function(e) {
      switch (e) {
        case u.DesktopSources.WINDOW:
          return Z;
        case u.DesktopSources.SCREEN:
          return d;
        case u.DesktopSources.CAMERA:
          return T
      }
    }(b);
  if (null == K) return (0, n.jsx)(p.default, {
    className: D.spinner,
    justify: p.default.Justify.CENTER,
    align: p.default.Align.CENTER,
    children: (0, n.jsx)(f.Spinner, {})
  });
  let Q = K.map(e => {
    let {
      id: a
    } = e, s = (null == t ? void 0 : t.id) === a;
    return (0, n.jsx)(f.Clickable, {
      className: r(D.tile, {
        [D.selected]: s
      }),
      onClick: () => l(e, null),
      children: (0, n.jsx)(L.default, {
        source: e,
        selectedSource: t
      }, e.id)
    }, a)
  });

  function X() {
    let e = k.current;
    null != e && H(!e.isScrolledToTop())
  }
  return (0, n.jsxs)(a.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: D.segmentContainer,
      children: [(0, n.jsx)(R.default, {
        separator: V
      }), (0, n.jsx)(f.SegmentedControl, {
        options: function() {
          let e = [{
            name: O.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
            value: u.DesktopSources.WINDOW
          }, {
            name: O.default.Messages.GO_LIVE_MODAL_SCREENS,
            value: u.DesktopSources.SCREEN
          }];
          return s && i && G && e.push({
            name: O.default.Messages.GO_LIVE_MODAL_CAPTURE,
            value: u.DesktopSources.CAMERA
          }), e
        }(),
        value: b,
        onChange: e => {
          let {
            value: t
          } = e;
          return y(t)
        },
        className: D.segmentControl,
        optionClassName: D.segmentControlOption
      })]
    }), b === u.DesktopSources.CAMERA ? (0, n.jsx)("div", {
      className: D.sourceContainer,
      children: (0, n.jsx)(f.AdvancedScroller, {
        ref: Y,
        className: D.sourceScroller,
        onScroll: X,
        children: (0, n.jsx)(I.default, {
          layout: I.default.Layout.WRAP,
          columns: 2,
          className: D.sourceContainer,
          children: Q
        })
      })
    }) : (0, n.jsxs)(f.AdvancedScroller, {
      ref: Y,
      className: D.sourceScroller,
      onScroll: X,
      children: [b === u.DesktopSources.WINDOW && null != z && (0, n.jsx)(N.default, {
        quest: z.quest
      }), (0, n.jsx)(I.default, {
        layout: I.default.Layout.WRAP,
        columns: 2,
        className: D.sourceContainer,
        children: Q
      })]
    })]
  })
}