"use strict";
n(47120);
var i = n(147913),
  r = n(430871),
  s = n(185923);
let o = new Set([s.qR.EmojiButtonMouseEntered, s.qR.ChatInputExpressionPressed, s.qR.ChatInputSuggestionsShown, s.qR.SearchEmojiKeybindPressed, s.qR.AutocompleteTyped, s.qR.GuildLeaveModalShown, s.qR.AddReactionPopoutMouseEntered, s.qR.AddReactionPopoutFocused, s.qR.MessageContextMenuMouseEntered, s.qR.AutocompleteWrapperShown]);
class a extends i.Z {
  handleInteraction(e) {
    let {
      interaction: t
    } = e;
    o.has(t) && (0, r.x)(t)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      EMOJI_INTERACTION_INITIATED: this.handleInteraction
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new a