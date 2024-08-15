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
  s = n(373228),
  o = n(626135),
  l = n(981631);

function u(e, t, n) {
  var r, i, s;
  o.default.track(l.rMx.CHANNEL_AUTOCOMPLETE_OPEN, {
...(0, a.v_)(t),
...(0, a.hH)(t.guild_id),
autocomplete_type: e,
num_emoji_results: null !== (r = null == n ? void 0 : n.numEmojiResults) && void 0 !== r ? r : 0,
num_locked_emoji_results: null !== (i = null == n ? void 0 : n.numLockedEmojiResults) && void 0 !== i ? i : 0,
num_sticker_results: null !== (s = null == n ? void 0 : n.numStickerResults) && void 0 !== s ? s : 0
  });
}

function c(e, t, n, r) {
  var i, s, u, c, d;
  o.default.track(l.rMx.CHANNEL_AUTOCOMPLETE_SELECTED, {
...(0, a.v_)(n),
...(0, a.hH)(n.guild_id),
autocomplete_type: e,
selection_type: t,
emoji_id: null == r ? void 0 : r.emojiId,
sticker_id: null == r ? void 0 : r.stickerId,
num_emoji_results: null !== (i = null == r ? void 0 : r.numEmojiResults) && void 0 !== i ? i : 0,
num_sticker_results: null !== (s = null == r ? void 0 : r.numStickerResults) && void 0 !== s ? s : 0,
emoji_name: null !== (u = null == r ? void 0 : r.expressionName) && void 0 !== u ? u : '',
is_custom: null !== (c = null == r ? void 0 : r.isCustom) && void 0 !== c && c,
is_animated: null !== (d = null == r ? void 0 : r.isAnimated) && void 0 !== d && d
  });
}
(r = i || (i = {})).AUTOCOMPLETE = 'autocomplete', r.AUTOSUGGEST = 'autosuggest', r.STICKER_PICKER = 'picker', r.BUILT_IN_INTEGRATION = 'built_in_integration';

function d(e) {
  let {
sticker: t,
stickerSelectLocation: n,
isReplacement: r,
analyticsLocations: i
  } = e;
  o.default.track(l.rMx.STICKER_ATTACHED, {
replaced: r,
source: function(e) {
  switch (e) {
    case s.V0.AUTOCOMPLETE:
      return 'autocomplete';
    case s.V0.EXPRESSION_SUGGESTIONS:
      return 'autosuggest';
    case s.V0.STICKER_PICKER:
      return 'picker';
    case s.V0.BUILT_IN_INTEGRATION:
      return 'built_in_integration';
    default:
      return null;
  }
}(n),
sticker_id: t.id,
location_stack: i
  });
}