"use strict";
n.d(t, {
  Z: function() {
    return S
  },
  m: function() {
    return f
  }
}), n(47120), n(653041);
var i = n(470079),
  r = n(954955),
  s = n.n(r),
  o = n(442837),
  a = n(285651),
  l = n(268350),
  u = n(453070),
  _ = n(926491),
  d = n(594174),
  c = n(483360),
  E = n(251625),
  I = n(606301),
  T = n(549058);
let h = (0, E.ad)(l.$p, T.J7),
  S = (e, t, n) => {
    let r = (0, u.fQ)(n),
      s = (0, o.e7)([d.default], () => d.default.getCurrentUser());
    return i.useMemo(() => {
      let i = (0, I.wN)(e);
      if (t || null == e || "" === e || i.length > T.t7 || !r) return [];
      let o = [],
        l = [],
        u = (0, I.kT)(e),
        _ = u === i[0] ? i : [u, ...i];
      c.ZP.queryStickers(_, !1).forEach(e => {
        let {
          sticker: t
        } = e, i = (0, a.cO)(t, s, n), r = {
          sticker: t,
          sendability: i
        };
        i === a.eb.SENDABLE ? o.push(r) : i === a.eb.SENDABLE_WITH_PREMIUM && l.push(r)
      });
      let d = [];
      return o.length > 0 && (d = o.slice(0, T.qm), 0 !== l.length && (d.length === T.qm && d.pop(), d.push(l[0]))), d
    }, [e, n, r, t, s])
  },
  f = e => {
    let {
      setTextInputValue: t,
      setHasDismissed: n,
      setHasSelection: r,
      setFocusedSuggestionType: o,
      delayBeforeSuggestions: a
    } = e, l = i.useRef(null), u = i.useRef(!1), d = i.useRef(!1), c = i.useMemo(() => s()(t, null != a ? a : T.gf), [t, a]);
    return {
      handleTextChange: async e => {
        var i;
        if (null == e || "" === e) c.cancel(), null == t || t(""), null == n || n(!1), null == r || r(!1), null == o || o(null), l.current = null, u.current = !1;
        else if (!u.current && e.trim() !== (null === (i = l.current) || void 0 === i ? void 0 : i.trim())) {
          if (l.current = e, (0, I.wN)(e).length > T.t7) {
            u.current = !0, c.cancel(), t("");
            return
          }
          if (!0 === d.current) return;
          !_.Z.hasLoadedStickerPacks && (d.current = !0, await h(), d.current = !1), c(l.current)
        }
      },
      debouncedSetTextInputValue: c
    }
  }