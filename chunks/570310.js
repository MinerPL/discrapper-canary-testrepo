n(47120);
var r = n(147913),
  i = n(430871),
  a = n(185923);
let s = new Set([
  a.qR.EmojiButtonMouseEntered,
  a.qR.ChatInputExpressionPressed,
  a.qR.ChatInputSuggestionsShown,
  a.qR.SearchEmojiKeybindPressed,
  a.qR.AutocompleteTyped,
  a.qR.GuildLeaveModalShown,
  a.qR.AddReactionPopoutMouseEntered,
  a.qR.AddReactionPopoutFocused,
  a.qR.MessageContextMenuMouseEntered,
  a.qR.AutocompleteWrapperShown
]);
class o extends r.Z {
  handleInteraction(e) {
let {
  interaction: t
} = e;
s.has(t) && (0, i.x)(t);
  }
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'actions', r = {
  EMOJI_INTERACTION_INITIATED: this.handleInteraction
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new o();