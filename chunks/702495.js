"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("781738");
var a = n("37983"),
  i = n("884691"),
  l = n("446674"),
  s = n("77078"),
  u = n("150021"),
  r = n("997289"),
  d = n("788506"),
  o = n("385976"),
  c = n("867805"),
  f = n("246511"),
  E = n("467094"),
  m = n("178207"),
  M = n("256860"),
  g = n("364685"),
  p = n("24373"),
  S = n("49111"),
  I = n("782340");

function v(e) {
  return c.default.getByName(e.replace(/(^:|:$)/g, ""))
}

function h(e) {
  let {
    type: t,
    id: n,
    name: h,
    isInExpressionPicker: A = !1
  } = e, {
    location: _
  } = (0, r.useAnalyticsContext)(), T = i.useMemo(() => ({
    ..._,
    section: A ? S.AnalyticsSections.EXPRESSION_PICKER : S.AnalyticsSections.CONTEXT_MENU
  }), [_, A]), C = (0, M.useFavoriteStickerIds)(), R = (0, l.useStateFromStores)([g.default], () => t === f.PickerContextMenuDataTypes.STICKER && null != n ? g.default.getStickerById(n) : null), O = null != R && C.includes(R.id), x = (0, l.useStateFromStores)([o.default], () => {
    if (t === f.PickerContextMenuDataTypes.EMOJI) {
      if (null != n) return o.default.getDisambiguatedEmojiContext().getById(n);
      if (null != h) {
        var e;
        return null !== (e = v(h)) && void 0 !== e ? e : v(c.default.convertSurrogateToName(h))
      }
    }
  }), y = (0, d.useIsFavoriteEmoji)(null, x);
  if (null != R && t === f.PickerContextMenuDataTypes.STICKER) return (0, p.isGuildSticker)(R) && !(0, p.isAvailableGuildSticker)(R) ? null : O ? (0, a.jsx)(s.MenuItem, {
    id: "unfavorite",
    action: () => (0, E.unfavoriteSticker)(R.id),
    label: I.default.Messages.UNFAVORITE_ITEM
  }) : (0, a.jsx)(s.MenuItem, {
    id: "favorite",
    action: () => {
      (0, m.trackStickerFavorited)({
        sticker: R,
        location: {
          ...T,
          object: S.AnalyticsObjects.STICKER
        }
      }), (0, E.favoriteSticker)(null == R ? void 0 : R.id)
    },
    label: I.default.Messages.FAVORITE_ITEM
  });
  if (null != x && t === f.PickerContextMenuDataTypes.EMOJI) return y ? (0, a.jsx)(s.MenuItem, {
    id: "unfavorite",
    action: () => (0, u.unfavoriteEmoji)(x),
    label: I.default.Messages.UNFAVORITE_ITEM
  }) : (0, a.jsx)(s.MenuItem, {
    id: "favorite",
    action: () => {
      (0, d.trackEmojiFavorited)({
        emoji: x,
        location: {
          ...T,
          object: S.AnalyticsObjects.EMOJI
        }
      }), (0, u.favoriteEmoji)(x)
    },
    label: I.default.Messages.FAVORITE_ITEM
  })
}