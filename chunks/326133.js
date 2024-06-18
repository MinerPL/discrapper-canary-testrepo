"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(442837),
  u = n(481060),
  _ = n(867176),
  d = n(317381),
  c = n(30465),
  E = n(430824),
  I = n(156361),
  T = n(153124),
  h = n(153850),
  S = n(482207),
  f = n(436896),
  N = n(590921),
  A = n(606992),
  m = n(51062),
  O = n(918559),
  R = n(583901);
t.Z = r.forwardRef(function(e, t) {
  var n, s, C, p, g;
  let {
    channel: L,
    type: v,
    editorHeight: D,
    onVisibilityChange: M
  } = e, P = (0, T.Dt)(), y = (0, l.e7)([E.Z], () => {
    var e;
    return null !== (e = E.Z.getGuild(L.guild_id)) && void 0 !== e ? e : null
  }, [L.guild_id]), U = r.useRef(), [b, G, w] = (0, m.Z)({
    ...e,
    guild: y
  }, t, U), k = (null === (n = v.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? S.ZP : h.ZP, B = (0, I.DJ)(b.selectedIndex);
  (0, c.KR)(P, b.isVisible, B), f.Z.trackExposure({
    location: "6e9811_1"
  });
  let {
    usePopoutAutocomplete: x
  } = f.Z.useExperiment({
    location: "6e9811_2"
  }, {
    autoTrackExposure: !1
  }), V = (0, A.Z)({
    editorHeight: D,
    type: v,
    state: b,
    isInPopoutExperiment: x
  }), Z = (0, l.e7)([d.ZP], () => {
    let e = d.ZP.getSelfEmbeddedActivityForChannel(L.id),
      t = d.ZP.getActivityPanelMode();
    return (0, _.l5)(L) && null != e && e.channelId === L.id && t === O.Ez.PANEL
  }, [L]), H = r.useMemo(() => null == V ? "" : String(Date.now()), [null == V ? void 0 : V.top, null == V ? void 0 : V.left, null == V ? void 0 : V.bottom, null == V ? void 0 : V.right]);
  if (r.useEffect(() => {
      M(b.isVisible)
    }, [M, b.isVisible]), !b.isVisible || null == b.query || void 0 === V) return null;
  let F = null !== (s = b.query.typeInfo.renderResults({
    results: b.query.results,
    selectedIndex: b.selectedIndex,
    channel: L,
    guild: y,
    query: b.query.queryText,
    options: b.query.options,
    onHover: e => G.onResultHover(e),
    onClick: e => G.onResultClick(e)
  })) && void 0 !== s ? s : null;
  if (null == F) return null;
  let Y = {
      [R.autocompleteAttached]: null == V,
      [R.autocompletePopout]: null != V,
      [R.bottom]: null == V && "bottom" === e.position,
      [R.autocompleteTop]: Z
    },
    j = 490;
  null != V && (j = (null === (C = v.autocomplete) || void 0 === C ? void 0 : C.small) ? 200 : (null === (p = b.query) || void 0 === p ? void 0 : p.type) === N.eq.EMOJIS_AND_STICKERS ? 490 : 245), j = Math.min(window.innerHeight - 175, j);
  let W = (0, i.jsx)(I.ZP, {
    id: P,
    className: o()(R.autocomplete, Y),
    innerClassName: R.autocompleteInner,
    onMouseDown: e => e.preventDefault(),
    children: (0, i.jsx)(a.bG, {
      navigator: w,
      children: (0, i.jsx)(a.SJ, {
        children: e => {
          let {
            ref: t,
            ...n
          } = e;
          return (0, i.jsx)(u.AdvancedScrollerThin, {
            id: P,
            ref: e => {
              var n;
              t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null, U.current = e
            },
            ...n,
            className: R.scroller,
            style: {
              maxHeight: j
            },
            role: "listbox",
            "aria-labelledby": (0, I.rp)(P),
            children: F
          })
        }
      })
    })
  });
  return null != V ? (0, i.jsx)(k, {
    children: (0, i.jsx)(u.ReferencePositionLayer, {
      targetRef: e.targetRef,
      overrideTargetRect: V,
      positionKey: H,
      position: null !== (g = e.position) && void 0 !== g ? g : "top",
      align: "left",
      spacing: 8,
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      children: () => W
    })
  }) : W
})