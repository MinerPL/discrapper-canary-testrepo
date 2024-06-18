"use strict";
n.d(t, {
  Go: function() {
    return D
  },
  LZ: function() {
    return P
  },
  Pq: function() {
    return O
  },
  RJ: function() {
    return M
  },
  Sd: function() {
    return b
  },
  XW: function() {
    return U
  },
  el: function() {
    return C
  },
  fP: function() {
    return g
  },
  fQ: function() {
    return p
  },
  t$: function() {
    return R
  }
}), n(653041), n(47120), n(733860);
var i = n(470079),
  r = n(442837),
  s = n(889161),
  o = n(695346),
  a = n(516373),
  l = n(430824),
  u = n(914010),
  _ = n(771845),
  d = n(594174),
  c = n(267642),
  E = n(700785),
  I = n(285651),
  T = n(268350),
  h = n(822179),
  S = n(926491),
  f = n(373228),
  N = n(378233),
  A = n(981631),
  m = n(689938);
let O = e => {
    g();
    let t = (0, r.e7)([S.Z], () => S.Z.hasLoadedStickerPacks);
    i.useEffect(() => {
      t && null == S.Z.getStickerPack(e) && (0, T.FQ)(e)
    }, [e, t])
  },
  R = e => {
    let t = o.Wp.useSetting();
    return (0, N.WD)(t, e)
  },
  C = e => {
    let {
      collapsedStickersCategories: t,
      filteredStickers: n,
      listPaddingRight: r = 0,
      listWidth: o = 0,
      stickerNodeMargin: a = 0,
      stickerNodeWidth: _,
      stickersCategories: d
    } = e;
    return i.useMemo(() => {
      let e = Math.floor((o - r + a) / (_ + a)),
        i = Math.floor(Math.max(a, (o - r - _ * e) / (e - 1))),
        E = [],
        I = [],
        T = [],
        h = 0,
        S = 0,
        A = 0;
      if (0 !== o) {
        let i = function(t, n) {
          let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = (0, N.J8)(t[0]) ? l.Z.getGuild(t[0].guild_id) : void 0,
            {
              canCreateExpressions: o
            } = (0, s.Gw)(r),
            a = u.Z.getGuildId(),
            _ = d.findIndex(e => e.type === f.Ih.FAVORITE),
            O = d.findIndex(e => e.type === f.Ih.RECENT),
            R = t.length;
          null != r && a === r.id && o && t.length < (0, c.A3)(r.premiumTier) && R++;
          let C = Math.ceil(R / e);
          I[S] = i ? 0 : C;
          for (let s = 0; s < C; s++) {
            let o = s * e,
              a = o + e,
              l = t.slice(o, a).map((e, t) => ({
                type: f.al.STICKER,
                sticker: e,
                packId: (0, N.jl)(e) ? e.pack_id : "TODO - fix",
                gridSectionIndex: S,
                rowIndex: h,
                columnIndex: t,
                visibleRowIndex: A,
                category: n
              }));
            S > O && S > _ && null != r && R > t.length && l.push({
              type: f.al.CREATE_STICKER,
              guild_id: r.id,
              name: m.Z.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
              gridSectionIndex: S,
              rowIndex: h,
              columnIndex: l.length,
              visibleRowIndex: A
            }), !i && (A++, T.push(l), E.push(l.length)), h++
          }
          S++
        };
        if (null == n)
          for (let e of d) e.stickers.length > 0 ? (h++, i(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === f.Ih.EMPTY_GUILD_UPSELL && (I[S] = 0, S++);
        else n.sendable.length > 0 && i(n.sendable, f.Ih.SEARCH_RESULTS), n.sendableWithPremium.length > 0 && i(n.sendableWithPremium, f.Ih.SEARCH_RESULTS)
      }
      return {
        rowCount: h,
        rowCountBySection: I,
        stickersGrid: T,
        gutterWidth: i,
        columnCounts: E
      }
    }, [t, n, r, o, a, _, d])
  },
  p = e => {
    let t = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    return (0, r.e7)([S.Z], () => {
      for (let n of S.Z.getAllStickersIterator())
        if ((0, I.kl)(n, t, e)) return !0;
      return !1
    }, [t, e])
  },
  g = () => {
    i.useEffect(() => {
      (0, T.$p)()
    }, [])
  },
  L = e => {
    let t = (0, r.e7)([S.Z], () => S.Z.getAllGuildStickers()),
      n = (0, r.Wu)([_.ZP, l.Z], () => {
        let e = _.ZP.getFlattenedGuildIds(),
          t = [];
        return e.forEach(e => {
          let n = l.Z.getGuild(e);
          null != n && t.push(n)
        }), t
      }, []),
      o = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    return i.useMemo(() => {
      let i = [];
      for (let {
          name: e,
          id: r
        }
        of n) {
        let n = t.get(r);
        if (null != n && 0 !== n.length) i.push({
          type: f.Ih.GUILD,
          id: r,
          name: e,
          stickers: n
        })
      }
      if ((null == e ? void 0 : e.getGuildId()) != null) {
        let t = l.Z.getGuild(e.getGuildId()),
          {
            canManageAllExpressions: n
          } = (0, s.Gw)(t),
          r = i.findIndex(t => t.id === e.getGuildId());
        r >= 1 ? i.unshift(i.splice(r, 1)[0]) : -1 === r && null != t && n && i.unshift({
          type: f.Ih.EMPTY_GUILD_UPSELL,
          id: t.id,
          name: t.name,
          stickers: []
        }), null != o && !E.BT({
          permission: A.Plq.USE_EXTERNAL_EMOJIS,
          user: o,
          context: e
        }) && (i = i.filter(t => t.id === e.getGuildId()))
      }
      return i
    }, [t, n, o, e])
  },
  v = [];

function D() {
  var e, t;
  return null !== (t = null === (e = (0, a.D)().favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : v
}

function M() {
  let e = D();
  return (0, r.Wu)([S.Z], () => e.map(e => S.Z.getStickerById(e)).filter(e => void 0 !== e), [e])
}

function P() {
  let e = function() {
    var e, t;
    let n = (0, a.D)(),
      i = v;
    return (null == n ? void 0 : null === (e = n.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (i = Object.keys(null == n ? void 0 : null === (t = n.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), i
  }();
  return (0, r.Wu)([S.Z], () => e.map(e => S.Z.getStickerById(e)).filter(e => void 0 !== e), [e])
}
let y = e => {
    let t = M(),
      {
        packs: n,
        frequentlyUsedStickers: s
      } = (0, r.cj)([S.Z, h.Z], () => ({
        packs: S.Z.getPremiumPacks(),
        frequentlyUsedStickers: h.Z.stickerFrecencyWithoutFetchingLatest.frequently
      }), []),
      o = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
      a = L(e);
    return i.useMemo(() => {
      var i;
      let r = n.map(N.z),
        l = {
          type: f.Ih.FAVORITE,
          id: f.Ih.FAVORITE,
          name: m.Z.Messages.CATEGORY_FAVORITE,
          stickers: t
        };
      return [l, {
        type: f.Ih.RECENT,
        id: f.Ih.RECENT,
        name: m.Z.Messages.STICKER_CATEGORY_RECENT,
        stickers: null !== (i = null == s ? void 0 : s.filter(t => {
          if ((0, N.J8)(t)) {
            var i, r;
            return null !== (r = null === (i = S.Z.getStickersByGuildId(t.guild_id)) || void 0 === i ? void 0 : i.some(e => e.id === t.id)) && void 0 !== r && r && (0, I.cO)(t, o, e) !== I.eb.NONSENDABLE
          }
          if ((0, N.jl)(t)) return n.some(e => e.id === t.pack_id)
        })) && void 0 !== i ? i : []
      }, ...a, ...r]
    }, [n, t, s, a, o, e])
  },
  U = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = (0, r.e7)([S.Z], () => S.Z.getStickerById(e.id)),
      [s, o] = i.useState(!0),
      [a, l] = i.useState(!1),
      u = (0, N.J8)(e) || (0, N.jl)(e);
    return (i.useEffect(() => {
      (async () => {
        if (t && !u && null == n && s && !a) {
          o(!1);
          try {
            await (0, T.Il)(e.id)
          } catch {}
          l(!0)
        }
      })()
    }, [t]), u) ? [e, a] : [null != n ? n : null, a]
  },
  b = e => {
    let t = y(e);
    return i.useMemo(() => t.filter(e => e.type === f.Ih.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
  }