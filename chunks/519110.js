"use strict";
i.r(t), i.d(t, {
  default: function() {
    return p
  }
}), i("757143");
var a = i("735250"),
  n = i("470079"),
  u = i("442837"),
  r = i("481060"),
  l = i("80932"),
  s = i("2052"),
  o = i("543241"),
  c = i("339085"),
  d = i("633302"),
  f = i("691251"),
  E = i("268350"),
  I = i("217590"),
  M = i("453070"),
  S = i("926491"),
  v = i("378233"),
  k = i("981631"),
  m = i("689938");

function T(e) {
  return d.default.getByName(e.replace(/(^:|:$)/g, ""))
}

function p(e) {
  let {
    type: t,
    id: i,
    name: p,
    isInExpressionPicker: C = !1
  } = e, {
    location: b
  } = (0, s.useAnalyticsContext)(), x = n.useMemo(() => ({
    ...b,
    section: C ? k.AnalyticsSections.EXPRESSION_PICKER : k.AnalyticsSections.CONTEXT_MENU
  }), [b, C]), g = (0, M.useFavoriteStickerIds)(), j = (0, u.useStateFromStores)([S.default], () => t === f.PickerContextMenuDataTypes.STICKER && null != i ? S.default.getStickerById(i) : null), A = null != j && g.includes(j.id), y = (0, u.useStateFromStores)([c.default], () => {
    if (t === f.PickerContextMenuDataTypes.EMOJI) {
      if (null != i) return c.default.getDisambiguatedEmojiContext().getById(i);
      if (null != p) {
        var e;
        return null !== (e = T(p)) && void 0 !== e ? e : T(d.default.convertSurrogateToName(p))
      }
    }
  }), O = (0, o.useIsFavoriteEmoji)(null, y);
  if (null != j && t === f.PickerContextMenuDataTypes.STICKER) return (0, v.isGuildSticker)(j) && !(0, v.isAvailableGuildSticker)(j) ? null : A ? (0, a.jsx)(r.MenuItem, {
    id: "unfavorite",
    action: () => (0, E.unfavoriteSticker)(j.id),
    label: m.default.Messages.UNFAVORITE_ITEM
  }) : (0, a.jsx)(r.MenuItem, {
    id: "favorite",
    action: () => {
      (0, I.trackStickerFavorited)({
        sticker: j,
        location: {
          ...x,
          object: k.AnalyticsObjects.STICKER
        }
      }), (0, E.favoriteSticker)(null == j ? void 0 : j.id)
    },
    label: m.default.Messages.FAVORITE_ITEM
  });
  if (null != y && t === f.PickerContextMenuDataTypes.EMOJI) return O ? (0, a.jsx)(r.MenuItem, {
    id: "unfavorite",
    action: () => (0, l.unfavoriteEmoji)(y),
    label: m.default.Messages.UNFAVORITE_ITEM
  }) : (0, a.jsx)(r.MenuItem, {
    id: "favorite",
    action: () => {
      (0, o.trackEmojiFavorited)({
        emoji: y,
        location: {
          ...x,
          object: k.AnalyticsObjects.EMOJI
        }
      }), (0, l.favoriteEmoji)(y)
    },
    label: m.default.Messages.FAVORITE_ITEM
  })
}