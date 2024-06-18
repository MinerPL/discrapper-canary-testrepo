"use strict";
var i = n(496675),
  r = n(156361),
  s = n(483360),
  o = n(877565),
  a = n(590921),
  l = n(665692),
  u = n(981631),
  _ = n(185923),
  d = n(689938);
let c = {
  sentinel: l.a4,
  matches(e, t, n, r, s) {
    var o, a;
    return r && null !== (a = null === (o = s.chatInputType.autocomplete) || void 0 === o ? void 0 : o.addReactionShortcut) && void 0 !== a && a && (i.Z.can(u.Plq.ADD_REACTIONS, e) || e.isPrivate())
  },
  queryResults(e, t, n, i, r) {
    let {
      emojis: o
    } = s.ZP.queryEmojiResults({
      query: n,
      channel: e,
      intention: _.Hz.REACTION
    });
    return {
      results: {
        emojis: o.unlocked
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        emojis: t
      },
      selectedIndex: n,
      query: i,
      onHover: s,
      onClick: a
    } = e;
    return (0, o.HI)({
      query: i,
      selectedIndex: n,
      autocompletes: t,
      onHover: s,
      onClick: a,
      titleWithQuery: d.Z.Messages.REACTIONS_MATCHING,
      titleWithoutQuery: d.Z.Messages.EMOJI,
      Component: r.ZP.Emoji,
      getProps: e => ({
        emoji: e,
        key: e.id || e.uniqueName || e.name,
        sentinel: l.Iv
      }),
      getQuery: e => "".concat(l.a4).concat(e),
      key: "reactions"
    })
  },
  onSelect(e) {
    let {
      results: {
        emojis: t
      },
      index: n,
      options: i
    } = e, r = t[n];
    return i.sendMessage(function(e) {
      return "".concat(l.a4).concat(e.name).concat(l.jp)
    }(r)), {
      type: a.z2.REACTION
    }
  }
};
t.Z = c