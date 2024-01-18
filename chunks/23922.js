"use strict";
l.r(t), l.d(t, {
  default: function() {
    return P
  }
}), l("222007"), l("311790"), l("477657"), l("811875"), l("90301"), l("652153"), l("28797"), l("817884"), l("597349"), l("667536"), l("690341"), l("492311"), l("101997"), l("424973");
var n = l("37983"),
  s = l("884691"),
  a = l("414456"),
  r = l.n(a),
  i = l("723251"),
  u = l("771281"),
  o = l("351720"),
  d = l("862337"),
  c = l("77078"),
  f = l("823411"),
  m = l("42887"),
  S = l("568307"),
  h = l("703370"),
  C = l("227602"),
  E = l("145131"),
  p = l("162933"),
  N = l("415518"),
  g = l("773336"),
  _ = l("13798"),
  x = l("301834"),
  I = l("756898"),
  v = l("375202"),
  A = l("321443"),
  R = l("444276"),
  T = l("49111"),
  L = l("353927"),
  j = l("782340"),
  M = l("45122");
async function O() {
  let e = m.default.getVideoDevices(),
    t = (0, o.default)(m.default.getMediaEngine(), [u.DesktopSources.WINDOW, u.DesktopSources.SCREEN], {
      width: 176,
      height: 99
    }),
    l = D(),
    n = await l,
    s = await t,
    a = s.filter(e => e.id.startsWith(u.DesktopSources.SCREEN)),
    r = function(e, t) {
      let l = {};
      return t.forEach(e => {
        l[e.id] = e
      }), e.forEach(e => {
        l[e.id] = e
      }), Object.values(l).sort((e, t) => b(t) - b(e))
    }(s.filter(e => e.id.startsWith(u.DesktopSources.WINDOW)), n),
    d = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"],
    c = Object.entries(e).filter(e => {
      let [t, l] = e;
      return !l.disabled
    }).map((e, t) => {
      let [l, n] = e, s = d[t % d.length], a = Uint8Array.from(atob(s), e => e.charCodeAt(0)), r = (0, i.thumbHashToDataURL)(a);
      return {
        id: "camera:" + n.id,
        name: n.name,
        url: r
      }
    });
  return {
    windowSources: r,
    screenSources: a,
    cameraSources: c
  }
}
async function D() {
  let e = S.default.getRunningGames(),
    t = await Promise.all(e.map(async e => {
      let t;
      if (null == e.name) return null;
      try {
        t = await f.default.identifyGame(e.pid, e.name)
      } catch (e) {
        return null
      }
      let l = e.windowHandle,
        n = e.name,
        s = t.icon;
      return null != l && null != n && null != s ? {
        id: "window:".concat(l),
        name: n,
        url: "data:image/bmp;base64,".concat(s)
      } : null
    }));
  return t.filter(e => null !== e)
}

function b(e) {
  let t = (0, g.isWindows)() ? (0, v.default)(S.default, h.default) : null,
    l = S.default.getRunningGames();
  return null != t && (0, I.default)(e.id, t.windowHandle) ? 2 : null != l.find(t => (0, I.default)(e.id, t.windowHandle)) ? 1 : 0
}

function P(e) {
  let {
    selectedSource: t,
    onChangeSelectedSource: l
  } = e, {
    enableGoLiveCaptureCard: a
  } = x.default.useExperiment({
    location: "GoLive_Source_Select"
  }), i = m.default.supports(L.Features.GO_LIVE_HARDWARE), [o, f] = s.useState(null), [S, h] = s.useState(null), [g, I] = s.useState(null), v = null != g && g.length > 0, [D, b] = s.useState(u.DesktopSources.WINDOW), [P, y] = s.useState(!1), k = s.useRef(null), G = s.useRef(new d.Interval);
  s.useEffect(() => {
    let e = G.current;
    return O().then(e => {
      let {
        screenSources: t,
        windowSources: l,
        cameraSources: n
      } = e;
      f(t), h(l), I(n)
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: t,
        cameraSources: l
      } = await O();
      f(e), h(t), I(l)
    }), () => {
      e.stop()
    }
  }, []);
  let H = s.useCallback(e => {
      if (null !== e) {
        var t;
        k.current = e, y((t = !e.isScrolledToTop(), t))
      }
    }, []),
    U = function(e) {
      switch (e) {
        case u.DesktopSources.WINDOW:
          return S;
        case u.DesktopSources.SCREEN:
          return o;
        case u.DesktopSources.CAMERA:
          return g
      }
    }(D);
  if (null == U) return (0, n.jsx)(E.default, {
    className: M.spinner,
    justify: E.default.Justify.CENTER,
    align: E.default.Align.CENTER,
    children: (0, n.jsx)(c.Spinner, {})
  });
  let F = U.map(e => {
    let {
      id: s
    } = e, a = (null == t ? void 0 : t.id) === s;
    return (0, n.jsx)(c.Clickable, {
      className: r(M.tile, {
        [M.selected]: a
      }),
      onClick: () => l(e, null),
      children: (0, n.jsx)(R.default, {
        source: e,
        selectedSource: t
      }, e.id)
    }, s)
  });

  function B() {
    let e = k.current;
    null != e && y(!e.isScrolledToTop())
  }
  let V = C.default.getKeybindForAction(T.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING),
    w = null != V ? (0, _.toString)(V.shortcut, !0).split(" + ") : ["Unbound"];
  return (0, n.jsxs)(s.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: M.segmentContainer,
      children: [(0, n.jsx)(A.default, {
        separator: P
      }), (0, n.jsx)(c.SegmentedControl, {
        options: function() {
          let e = [{
            name: j.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
            value: u.DesktopSources.WINDOW
          }, {
            name: j.default.Messages.GO_LIVE_MODAL_SCREENS,
            value: u.DesktopSources.SCREEN
          }];
          return a && i && v && e.push({
            name: j.default.Messages.GO_LIVE_MODAL_CAPTURE,
            value: u.DesktopSources.CAMERA
          }), e
        }(),
        value: D,
        onChange: e => {
          let {
            value: t
          } = e;
          return b(t)
        },
        className: M.segmentControl,
        optionClassName: M.segmentControlOption
      })]
    }), D === u.DesktopSources.CAMERA ? (0, n.jsx)("div", {
      className: M.sourceContainer,
      children: (0, n.jsx)(c.AdvancedScroller, {
        ref: H,
        className: M.sourceScroller,
        onScroll: B,
        children: (0, n.jsx)(p.default, {
          layout: p.default.Layout.WRAP,
          columns: 2,
          className: M.sourceContainer,
          children: F
        })
      })
    }) : (0, n.jsxs)(c.AdvancedScroller, {
      ref: H,
      className: M.sourceScroller,
      onScroll: B,
      children: [(0, n.jsx)(p.default, {
        layout: p.default.Layout.WRAP,
        columns: 2,
        className: M.sourceContainer,
        children: F
      }), D === u.DesktopSources.WINDOW ? (0, n.jsx)("div", {
        className: M.keybindHint,
        children: (0, N.renderKeybindHint)(!0, w, j.default.Messages.GO_LIVE_HOTKEY_HINT)
      }) : null]
    })]
  })
}