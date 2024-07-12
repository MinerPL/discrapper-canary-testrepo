n.d(t, {
  Qt: function() {
return c;
  },
  _H: function() {
return d;
  },
  a7: function() {
return u;
  }
});
var r, i, a = n(367907),
  o = n(373228),
  s = n(626135),
  l = n(981631);

function u(e, t, n) {
  var r, i, o;
  s.default.track(l.rMx.CHANNEL_AUTOCOMPLETE_OPEN, {
...(0, a.v_)(t),
...(0, a.hH)(t.guild_id),
autocomplete_type: e,
num_emoji_results: null !== (r = null == n ? void 0 : n.numEmojiResults) && void 0 !== r ? r : 0,
num_locked_emoji_results: null !== (i = null == n ? void 0 : n.numLockedEmojiResults) && void 0 !== i ? i : 0,
num_sticker_results: null !== (o = null == n ? void 0 : n.numStickerResults) && void 0 !== o ? o : 0
  });
}

function c(e, t, n, r) {
  var i, o, u, c, d;
  s.default.track(l.rMx.CHANNEL_AUTOCOMPLETE_SELECTED, {
...(0, a.v_)(n),
...(0, a.hH)(n.guild_id),
autocomplete_type: e,
selection_type: t,
emoji_id: null == r ? void 0 : r.emojiId,
sticker_id: null == r ? void 0 : r.stickerId,
num_emoji_results: null !== (i = null == r ? void 0 : r.numEmojiResults) && void 0 !== i ? i : 0,
num_sticker_results: null !== (o = null == r ? void 0 : r.numStickerResults) && void 0 !== o ? o : 0,
emoji_name: null !== (u = null == r ? void 0 : r.expressionName) && void 0 !== u ? u : '',
is_custom: null !== (c = null == r ? void 0 : r.isCustom) && void 0 !== c && c,
is_animated: null !== (d = null == r ? void 0 : r.isAnimated) && void 0 !== d && d
  });
}
(r = i || (i = {})).AUTOCOMPLETE = 'autocomplete', r.AUTOSUGGEST = 'autosuggest', r.STICKER_PICKER = 'picker';

function d(e) {
  let {
sticker: t,
stickerSelectLocation: n,
isReplacement: r,
analyticsLocations: i
  } = e;
  s.default.track(l.rMx.STICKER_ATTACHED, {
replaced: r,
source: function(e) {
  switch (e) {
    case o.V0.AUTOCOMPLETE:
      return 'autocomplete';
    case o.V0.EXPRESSION_SUGGESTIONS:
      return 'autosuggest';
    case o.V0.STICKER_PICKER:
      return 'picker';
    default:
      return null;
  }
}(n),
sticker_id: t.id,
location_stack: i
  });
}