"use strict";
n.d(t, {
  Bg: function() {
    return s
  },
  Ni: function() {
    return k
  },
  YH: function() {
    return G
  },
  ld: function() {
    return i
  },
  rf: function() {
    return w
  }
}), n(47120), n(653041);
var i, r, s, o, a, l, u = n(470079),
  _ = n(392711),
  d = n.n(_),
  c = n(772848),
  E = n(442837),
  I = n(80932),
  T = n(339085),
  h = n(906411),
  S = n(633302),
  f = n(806966),
  N = n(28546),
  A = n(889161),
  m = n(984933),
  O = n(430824),
  R = n(914010),
  C = n(771845),
  p = n(594174),
  g = n(176354),
  L = n(111361),
  v = n(392552),
  D = n(543241),
  M = n(304852),
  P = n(199257),
  y = n(149203),
  U = n(185923),
  b = n(689938);
(o = i || (i = {}))[o.EMOJI = 0] = "EMOJI", o[o.CREATE_EMOJI = 1] = "CREATE_EMOJI", (a = r || (r = {}))[a.SECTION_HEADING = 0] = "SECTION_HEADING", a[a.SECTION_ROW = 1] = "SECTION_ROW";
let G = e => {
  let {
    channel: t,
    collapsedSections: n,
    includeCreateEmojiButton: i = !0,
    pickerIntention: r,
    emojiSearchResults: s,
    gridWidth: o,
    emojiPaddingHorizontal: a,
    emojiSpriteSize: l
  } = e, _ = (0, E.e7)([T.Z], () => T.Z.categories), I = (0, E.e7)([O.Z], () => O.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]), f = null == t ? null : t.getGuildId(), N = (0, E.e7)([T.Z], () => T.Z.getDisambiguatedEmojiContext(f), [f]), G = (0, D.NJ)(f), w = (0, D.wC)(f), {
    topEmojis: k,
    newlyAddedEmojis: B
  } = (0, P.Z)(f, r), x = (0, E.Wu)([C.ZP], () => C.ZP.getFlattenedGuildIds(), []), {
    canCreateExpressions: V
  } = (0, A.XJ)(I), Z = (0, E.e7)([p.default], () => p.default.getCurrentUser()), H = (0, L.I5)(Z), F = N.getCustomEmoji(), Y = e => {
    if (e.type === h.B.GUILD) return e.guildId
  }, j = u.useMemo(() => d().groupBy(F, Y), [F]), {
    enabled: W,
    treatment: K
  } = v.Z.useExperiment({
    location: "EmojiPicker"
  }, {
    autoTrackExposure: !0,
    disable: !V
  });
  return u.useMemo(() => {
    let e = [],
      u = [],
      E = [],
      T = [],
      h = 0,
      f = 0;
    if (null != N && null != o) {
      let N = Math.floor(o / (l + 2 * a)),
        A = (s, o) => {
          let a = new Map,
            _ = n.has(o.sectionId),
            [c, I] = d().partition(s, e => {
              let n = g.ZP.isEmojiDisabled({
                emoji: e,
                channel: t,
                intention: r
              });
              return a.set(e, n), !n
            }),
            S = c.concat(I),
            A = o.guild,
            m = R.Z.getGuildId(),
            O = o.sectionId === y.En.TOP_GUILD_EMOJI,
            C = !O && null != A && m === A.id && S.length < A.getMaxEmojiSlots(),
            p = O && S.length < N && !W,
            L = null != A && O && W && K === v.B.WITH_TOP_LIST && j[A.id].length < A.getMaxEmojiSlots(),
            M = i && V && null != A && (C || p || L);
          M && L && S.length === N && S.shift();
          let P = W && M && !_,
            U = Math.ceil((M ? S.length + 1 : S.length) / N),
            G = [];
          for (let e = 0; e < U; e++) {
            let t = 0 === e,
              n = e * N - (P && e > 0 ? 1 : 0),
              i = n + N - (P && t ? 1 : 0),
              r = S.slice(n, i).map((e, n) => {
                var i, r;
                return {
                  type: 0,
                  emoji: e,
                  size: l,
                  isDisabled: a.get(e),
                  rowIndex: f,
                  columnIndex: P && t ? n + 1 : n,
                  visibleRowIndex: h,
                  category: o.type,
                  subCategory: o.sectionId === y.En.TOP_GUILD_EMOJI ? (0, D.IP)(k, B, null !== (r = null !== (i = e.id) && void 0 !== i ? i : e.uniqueName) && void 0 !== r ? r : e.name) : y.t0.NONE
                }
              });
            if (P && t && !_ && (r = [{
                type: 1,
                guildId: A.id,
                name: b.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                size: l,
                rowIndex: f,
                columnIndex: 0,
                visibleRowIndex: h
              }, ...r]), G.push(r), !_) {
              if (!W && M && e === U - 1) {
                let t = G[e];
                t.push({
                  type: 1,
                  guildId: A.id,
                  name: b.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                  size: l,
                  rowIndex: e,
                  columnIndex: t.length,
                  visibleRowIndex: h
                })
              }
              T.push(r.length), E.push(r), h++
            }
            f++
          }
          let w = {
            ...o,
            count: s.length
          };
          u.push(w), e.push(_ ? 0 : U)
        };
      if (null != s) 0 !== s.unlocked.length && A(s.unlocked, {
        type: y.En.SEARCH_RESULTS,
        sectionId: y.En.SEARCH_RESULTS,
        count: s.unlocked.length,
        isNitroLocked: !1
      }), 0 !== s.locked.length && A(s.locked, {
        type: y.En.PREMIUM_UPSELL,
        categoryId: y.UX.PREMIUM_UPSELL,
        sectionId: y.En.PREMIUM_UPSELL,
        count: s.locked.length,
        isNitroLocked: !H
      });
      else
        for (let e of _)
          if (e === y.UX.CUSTOM) {
            let n = n => {
              let i = j[n];
              if (null == i) return;
              let s = i.filter(e => g.ZP.getEmojiUnavailableReason({
                emoji: e,
                channel: null != t ? t : m.ZP.getDefaultChannel(n),
                intention: r
              }) !== U.Z5.DISALLOW_EXTERNAL);
              if (0 === s.length) return;
              let o = O.Z.getGuild(n),
                a = !H && g.ZP.isEmojiCategoryNitroLocked({
                  categoryEmojis: s,
                  channel: t,
                  intention: r
                });
              A(s, {
                categoryId: e,
                guild: o,
                type: y.En.GUILD,
                sectionId: null != o ? o.id : (0, c.Z)(),
                count: s.length,
                isNitroLocked: a
              })
            };
            if (null != I && n(I.id), (0, U.Gt)(r))
              for (let e of x)(null == I || I.id !== e) && n(e)
          } else if (e === y.UX.TOP_GUILD_EMOJI) {
        if (null != I) {
          let {
            allEmojis: t
          } = (0, M.J)({
            topEmojis: k,
            newlyAddedEmojis: B
          });
          t.length > 0 && A(t, {
            categoryId: e,
            guild: O.Z.getGuild(I.id),
            type: y.En.TOP_GUILD_EMOJI,
            sectionId: y.En.TOP_GUILD_EMOJI,
            count: t.length,
            isNitroLocked: !1
          })
        }
      } else if (e === y.UX.RECENT) {
        let n = w.filter(e => !g.ZP.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: r
        }));
        A(n, {
          categoryId: e,
          type: y.En.RECENT,
          sectionId: y.En.RECENT,
          count: n.length,
          isNitroLocked: !1
        })
      } else if (e === y.UX.FAVORITES) {
        let n = G.filter(e => !g.ZP.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: r
        }));
        0 !== n.length && A(n, {
          categoryId: e,
          type: y.En.FAVORITES,
          sectionId: y.En.FAVORITES,
          count: n.length,
          isNitroLocked: !1
        })
      } else {
        let t = S.ZP.getByCategory(e);
        null != t && A(t, {
          categoryId: e,
          type: y.En.UNICODE,
          sectionId: e,
          count: t.length,
          isNitroLocked: !1
        })
      }
    }
    return {
      columnCounts: T,
      emojiGrid: E,
      rowCountBySection: e,
      sectionDescriptors: u
    }
  }, [N, o, l, a, s, n, t, r, _, I, j, x, B, k, w, G, V, i, H, W, K])
};
(l = s || (s = {}))[l.PREMIUM = 0] = "PREMIUM", l[l.ROLE_SUBSCRIPTION = 1] = "ROLE_SUBSCRIPTION";
let w = e => {
    let {
      pickerIntention: t,
      selectedChannel: n,
      onSelectEmoji: i,
      setUpsellConfigs: r,
      emojiSelectAnalytics: s,
      trackEmojiFavorited: o
    } = e, a = (0, E.e7)([T.Z], () => T.Z.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
    return u.useCallback((e, l) => {
      switch (e.type) {
        case 1:
          i(void 0, l.isFinalSelection, l.isBurst);
          return;
        case 0: {
          let {
            emoji: u
          } = e;
          if (null == u) return;
          let _ = g.ZP.getEmojiUnavailableReason({
            emoji: u,
            channel: n,
            intention: t
          });
          if (l.toggleFavorite) {
            a.isFavoriteEmojiWithoutFetchingLatest(u) || null != _ ? (0, I.Xe)(u) : (null == o || o(e), (0, I.$K)(u));
            return
          }
          if (_ === U.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
          if (_ === U.Z5.PREMIUM_LOCKED) {
            r({
              type: 0,
              emojiDescriptor: e
            });
            return
          }
          if (_ === U.Z5.ROLE_SUBSCRIPTION_LOCKED && u.type === h.B.GUILD) {
            r({
              type: 1,
              guildId: u.guildId,
              emojiId: u.id
            });
            return
          }
          if (_ === U.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
          null == s || s(e), i(u, l.isFinalSelection, l.isBurst)
        }
      }
    }, [n, t, i, r, a, s, o])
  },
  k = e => {
    let {
      emojiListRef: t
    } = e, n = (0, N.Iu)(e => e.searchQuery), i = u.useCallback(e => {
      var n;
      return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e)
    }, [t]);
    return u.useCallback(e => {
      "" !== n ? ((0, N.ql)(""), f.kJ.setActiveCategoryIndex(e)) : i(e)
    }, [i, n])
  }