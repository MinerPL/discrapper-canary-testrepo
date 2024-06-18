"use strict";
var i = n(735250);
n(470079);
var r = n(952265),
  s = n(285651),
  o = n(268350),
  a = n(926491),
  l = n(373228),
  u = n(419922),
  _ = n(430824),
  d = n(156361),
  c = n(483360),
  E = n(877565),
  I = n(590921),
  T = n(665692),
  h = n(981631),
  S = n(689938),
  f = n(573198);

function N(e, t) {
  return (0, i.jsx)(u.ZP, {
    sticker: e,
    isInteracting: t,
    size: 40
  })
}
let A = {
  sentinel: T.Iv,
  stores: [a.Z],
  matches: (e, t, n, i, r) => n.length > 1,
  queryResults(e, t, n, i, r) {
    let a = i.allowStickers ? 0 : 40,
      l = h.rnv + a,
      {
        emojis: {
          unlocked: u
        }
      } = c.ZP.queryEmojiResults({
        query: n,
        channel: e,
        intention: i.emojiIntention,
        maxCount: l
      });
    "-" === n[0] && (u = u.filter(e => {
      var t;
      return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n)
    }));
    let _ = [];
    if (i.allowStickers) {
      (0, o.$p)();
      let t = c.ZP.queryStickers([n], !0, [e, (e, t) => t === s.eb.SENDABLE]),
        i = Math.max(4, 8 - u.length);
      _ = t.slice(0, i), "-" === n[0] && (_ = t.filter(e => e.sticker.name === n))
    }
    let d = u.slice(0, l - _.length);
    return {
      results: {
        emojis: d,
        emojisLocked: [],
        stickers: _
      },
      metadata: {
        numEmojiResults: d.length,
        numLockedEmojiResults: 0,
        numStickerResults: _.length
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        emojis: t,
        stickers: s,
        emojisLocked: o
      },
      selectedIndex: a,
      query: l,
      onHover: u,
      onClick: c
    } = e;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, E.HI)({
        query: l,
        selectedIndex: a,
        autocompletes: t,
        onHover: u,
        onClick: c,
        titleWithQuery: S.Z.Messages.EMOJI_MATCHING,
        titleWithoutQuery: S.Z.Messages.EMOJI,
        Component: d.ZP.Emoji,
        getProps: e => ({
          emoji: e,
          key: e.id || e.uniqueName || e.name,
          sentinel: T.Iv,
          guild: null != e.guildId ? _.Z.getGuild(e.guildId) : null
        }),
        getQuery: e => "".concat(T.Iv).concat(e),
        key: "emoji"
      }), o.length > 0 ? (0, E.HI)({
        query: l,
        selectedIndex: a,
        autocompletes: o,
        onHover: u,
        onClick: () => {
          (0, r.ZD)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("9766")]).then(n.bind(n, 889684));
            return t => (0, i.jsx)(e, {
              ...t
            })
          })
        },
        titleWithQuery: 0 === t.length ? S.Z.Messages.EMOJI_MATCHING : null,
        titleWithoutQuery: 0 === t.length ? S.Z.Messages.EMOJI : null,
        Component: d.ZP.EmojiUpsell,
        getProps: e => {
          let {
            emojis: t
          } = e;
          return {
            key: "emoji-upsell",
            emojis: t
          }
        },
        getQuery: e => "".concat(T.Iv).concat(e),
        key: "emoji-upsell",
        indexOffset: t.length
      }) : null, (t.length > 0 || o.length > 0) && s.length > 0 && (0, i.jsx)(d.ZP.Divider, {
        className: f.emojiStickersDivider
      }), (0, E.HI)({
        query: l,
        selectedIndex: a,
        autocompletes: s,
        onHover: u,
        onClick: c,
        titleWithQuery: S.Z.Messages.STICKERS_MATCHING,
        titleWithoutQuery: S.Z.Messages.STICKER,
        Component: d.ZP.Sticker,
        getProps: e => {
          let {
            comparator: t,
            sticker: n
          } = e;
          return {
            renderSticker: N,
            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
            sticker: n,
            key: n.id
          }
        },
        getQuery: e => e,
        key: "stickers",
        indexOffset: t.length + o.length,
        headerClassName: t.length > 0 ? f.stickersHeaderWithEmojiResults : void 0
      })]
    })
  },
  onSelect(e) {
    let {
      results: {
        emojis: t,
        emojisLocked: n,
        stickers: i
      },
      index: r,
      options: s
    } = e;
    if (r < t.length) {
      let e = t[r];
      return s.insertText(function(e) {
        return "".concat(T.Iv).concat(e.name).concat(T.Iv)
      }(e), function(e) {
        var t;
        let n = e.animated ? "a" : "";
        return e.managed || null == e.id ? "".concat(T.Iv).concat(e.name).concat(T.Iv) : "<".concat(n, ":").concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ":").concat(e.id, ">")
      }(e)), {
        type: I.z2.EMOJI,
        metadata: {
          emojiId: e.id,
          numEmojiResults: t.length,
          numStickerResults: i.length,
          expressionName: e.name,
          isCustom: null != e.id,
          isAnimated: e.animated
        }
      }
    }
    if ((r -= t.length) < n.length) return {
      type: null
    };
    if ((r -= n.length) < i.length) {
      let e = i[r];
      return s.insertText(""), s.sendSticker(e.sticker, l.V0.AUTOCOMPLETE), {
        type: I.z2.STICKER,
        metadata: {
          numEmojiResults: t.length,
          numStickerResults: i.length,
          stickerId: e.sticker.id
        }
      }
    }
    return {
      type: null
    }
  }
};
t.Z = A