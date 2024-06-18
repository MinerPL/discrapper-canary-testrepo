"use strict";
n.d(t, {
  Z: function() {
    return U
  }
}), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(863942), n(642549), n(653041);
var l = n(735250),
  s = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(788900),
  o = n(268146),
  u = n(442837),
  c = n(141038),
  d = n(846519),
  m = n(481060),
  E = n(224706),
  _ = n(594190),
  S = n(569984),
  h = n(918701),
  g = n(977156),
  Z = n(433811),
  C = n(131951),
  f = n(449224),
  N = n(285952),
  x = n(643095),
  I = n(358085),
  A = n(463727),
  T = n(855403),
  v = n(989941),
  R = n(958707),
  L = n(133179),
  p = n(46140),
  M = n(65154),
  j = n(689938),
  O = n(578168);
async function P() {
  let e = C.Z.getVideoDevices(),
    t = (0, c.Z)(C.Z.getMediaEngine(), [o.vA.WINDOW, o.vA.SCREEN], {
      width: 176,
      height: 99
    }),
    n = D(),
    l = await n,
    s = await t,
    a = s.filter(e => e.id.startsWith(o.vA.SCREEN)),
    i = function(e, t) {
      let n = {};
      return t.forEach(e => {
        n[e.id] = e
      }), e.forEach(e => {
        n[e.id] = e
      }), Object.values(n)
    }(s.filter(e => e.id.startsWith(o.vA.WINDOW)), l),
    u = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"];
  return {
    windowSources: i,
    screenSources: a,
    cameraSources: Object.entries(e).filter(e => {
      let [t, n] = e;
      return !n.disabled
    }).map((e, t) => {
      let [n, l] = e, s = u[t % u.length], a = Uint8Array.from(atob(s), e => e.charCodeAt(0)), i = (0, r.xS)(a);
      return {
        id: "camera:" + l.id,
        name: l.name,
        url: i
      }
    })
  }
}
async function D() {
  let e = _.ZP.getRunningGames();
  return (await Promise.all(e.map(async e => {
    let t;
    if (null == e.name) return null;
    try {
      t = await E.Z.identifyGame(e.pid, e.name)
    } catch (e) {
      return null
    }
    let n = e.windowHandle,
      l = e.name,
      s = t.icon;
    return null != n && null != l && null != s ? {
      id: "window:".concat(n),
      name: l,
      url: "data:image/bmp;base64,".concat(s)
    } : null
  }))).filter(e => null !== e)
}

function G(e) {
  let t = (0, I.isWindows)() ? (0, v.Z)(_.ZP, f.Z) : null,
    n = _.ZP.getRunningGames();
  return null != t && (0, T.Z)(e.id, t.windowHandle) ? 2 : null != n.find(t => (0, T.Z)(e.id, t.windowHandle)) ? 1 : 0
}

function U(e) {
  let {
    selectedSource: t,
    onChangeSelectedSource: n
  } = e, {
    enableGoLiveCaptureCard: a
  } = A.Z.useExperiment({
    location: "GoLive_Source_Select"
  }), r = C.Z.supports(M.AN.GO_LIVE_HARDWARE), [c, E] = s.useState(null), [f, I] = s.useState(null), [v, D] = s.useState(null), U = null != v && v.length > 0, [w, b] = s.useState(o.vA.WINDOW), [y, k] = s.useState(!1), B = s.useRef(null), H = s.useRef(new d.Xp), V = (0, u.e7)([_.ZP], () => _.ZP.getRunningGames()), F = function(e, t, n) {
    let l = (0, g.Zy)({
      location: p.dr.STREAM_SOURCE_SELECT
    });
    return s.useMemo(() => {
      if (null == n || !l) return null;
      for (let l of n) {
        var s, a;
        let n = t.find(e => (0, T.Z)(l.id, e.windowHandle));
        if ((null == n ? void 0 : n.id) == null) continue;
        let i = (0, h.lQ)(e, n.id);
        if (null != i && (null === (s = i.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null && (null === (a = i.userStatus) || void 0 === a ? void 0 : a.completedAt) == null) return {
          source: l,
          quest: i
        }
      }
      return null
    }, [l, e, t, n])
  }((0, u.e7)([S.Z], () => S.Z.quests), V, f), W = s.useMemo(() => null == f ? null : [...f].sort((e, t) => (null == F ? void 0 : F.source.id) === e.id ? -1 : (null == F ? void 0 : F.source.id) === t.id ? 1 : G(t) - G(e)), [F, f]);
  s.useEffect(() => {
    let e = H.current;
    return P().then(e => {
      let {
        screenSources: t,
        windowSources: n,
        cameraSources: l
      } = e;
      E(t), I(n), D(l)
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: t,
        cameraSources: n
      } = await P();
      E(e), I(t), D(n)
    }), () => {
      e.stop()
    }
  }, []);
  let z = s.useCallback(e => {
      if (null !== e) {
        var t;
        B.current = e, k((t = !e.isScrolledToTop(), t))
      }
    }, []),
    K = function(e) {
      switch (e) {
        case o.vA.WINDOW:
          return W;
        case o.vA.SCREEN:
          return c;
        case o.vA.CAMERA:
          return v
      }
    }(w);
  if (null == K) return (0, l.jsx)(N.Z, {
    className: O.spinner,
    justify: N.Z.Justify.CENTER,
    align: N.Z.Align.CENTER,
    children: (0, l.jsx)(m.Spinner, {})
  });
  let Y = K.map(e => {
    let {
      id: s
    } = e, a = (null == t ? void 0 : t.id) === s;
    return (0, l.jsx)(m.Clickable, {
      className: i()(O.tile, {
        [O.selected]: a
      }),
      onClick: () => n(e, null),
      children: (0, l.jsx)(L.Z, {
        source: e,
        selectedSource: t
      }, e.id)
    }, s)
  });

  function q() {
    let e = B.current;
    null != e && k(!e.isScrolledToTop())
  }
  return (0, l.jsxs)(s.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: O.segmentContainer,
      children: [(0, l.jsx)(R.Z, {
        separator: y
      }), (0, l.jsx)(m.SegmentedControl, {
        options: function() {
          let e = [{
            name: j.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
            value: o.vA.WINDOW
          }, {
            name: j.Z.Messages.GO_LIVE_MODAL_SCREENS,
            value: o.vA.SCREEN
          }];
          return a && r && U && e.push({
            name: j.Z.Messages.GO_LIVE_MODAL_CAPTURE,
            value: o.vA.CAMERA
          }), e
        }(),
        value: w,
        onChange: e => {
          let {
            value: t
          } = e;
          return b(t)
        },
        className: O.segmentControl,
        optionClassName: O.segmentControlOption
      })]
    }), w === o.vA.CAMERA ? (0, l.jsx)("div", {
      className: O.sourceContainer,
      children: (0, l.jsx)(m.AdvancedScroller, {
        ref: z,
        className: O.sourceScroller,
        onScroll: q,
        children: (0, l.jsx)(x.Z, {
          layout: x.Z.Layout.WRAP,
          columns: 2,
          className: O.sourceContainer,
          children: Y
        })
      })
    }) : (0, l.jsxs)(m.AdvancedScroller, {
      ref: z,
      className: O.sourceScroller,
      onScroll: q,
      children: [w === o.vA.WINDOW && null != F && (0, l.jsx)(Z.Z, {
        quest: F.quest
      }), (0, l.jsx)(x.Z, {
        layout: x.Z.Layout.WRAP,
        columns: 2,
        className: O.sourceContainer,
        children: Y
      })]
    })]
  })
}