"use strict";
n.r(t), n.d(t, {
  OVERLAY_LAYOUT: function() {
    return T
  },
  OVERLAY_LOCKED_LAYOUT: function() {
    return A
  },
  getOverlayLayoutContent: function() {
    return L
  }
}), n("411104");
var l = n("186070"),
  a = n("185514"),
  s = n("360038"),
  i = n("175724"),
  r = n("705371"),
  o = n("138976"),
  u = n("167042"),
  d = n("239748"),
  c = n("337482"),
  f = n("679080"),
  h = n("510761"),
  C = n("189509"),
  p = n("673553"),
  m = n("280492"),
  g = n("746887"),
  E = n("721383"),
  S = n("743810"),
  _ = n("981631"),
  I = n("689938");

function N() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = T[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let T = {
    [_.KeybindActions.SERVER_NEXT]: h.SERVER_NEXT,
    [_.KeybindActions.SERVER_PREV]: h.SERVER_PREV,
    [_.KeybindActions.CHANNEL_NEXT]: a.CHANNEL_NEXT,
    [_.KeybindActions.CHANNEL_PREV]: a.CHANNEL_PREV,
    [_.KeybindActions.NAVIGATE_BACK]: a.NAVIGATE_BACK,
    [_.KeybindActions.NAVIGATE_FORWARD]: a.NAVIGATE_FORWARD,
    [_.KeybindActions.UNREAD_NEXT]: S.UNREAD_NEXT,
    [_.KeybindActions.UNREAD_PREV]: S.UNREAD_PREV,
    [_.KeybindActions.MENTION_CHANNEL_NEXT]: S.MENTION_NEXT,
    [_.KeybindActions.MENTION_CHANNEL_PREV]: S.MENTION_PREV,
    [_.KeybindActions.TOGGLE_PREVIOUS_GUILD]: a.TOGGLE_PREVIOUS_GUILD,
    [_.KeybindActions.JUMP_TO_GUILD]: s.JUMP_TO_GUILD,
    [_.KeybindActions.SUBMIT]: C.SUBMIT,
    [_.KeybindActions.TEXTAREA_FOCUS]: p.TEXTAREA_FOCUS,
    [_.KeybindActions.MARK_CHANNEL_READ]: i.MARK_CHANNEL_READ,
    [_.KeybindActions.MARK_SERVER_READ]: r.MARK_SERVER_READ,
    [_.KeybindActions.TOGGLE_MUTE]: m.TOGGLE_MUTE,
    [_.KeybindActions.TOGGLE_DEAFEN]: m.TOGGLE_DEAFEN,
    [_.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]: g.TOGGLE_CATEGORY_COLLAPSED,
    [_.KeybindActions.SCROLL_UP]: c.SCROLL_UP,
    [_.KeybindActions.SCROLL_DOWN]: c.SCROLL_DOWN,
    [_.KeybindActions.SEARCH_EMOJIS]: f.SEARCH_EMOJIS,
    [_.KeybindActions.TOGGLE_HOTKEYS]: E.TOGGLE_HOTKEYS,
    [_.KeybindActions.JUMP_TO_FIRST_UNREAD]: o.JUMP_TO_FIRST_UNREAD,
    [_.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: d.RETURN_TO_AUDIO_CHANNEL,
    [_.KeybindActions.CALL_ACCEPT]: l.CALL_ACCEPT,
    [_.KeybindActions.CALL_START]: l.CALL_START,
    [_.KeybindActions.QUICKSWITCHER_SHOW]: u.QUICKSWITCHER_SHOW
  },
  A = {
    [_.KeybindActions.QUICKSWITCHER_SHOW]: u.QUICKSWITCHER_SHOW
  };

function L() {
  return [{
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
    binds: N(_.KeybindActions.SERVER_PREV, _.KeybindActions.SERVER_NEXT)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
    binds: N(_.KeybindActions.CHANNEL_PREV, _.KeybindActions.CHANNEL_NEXT)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
    binds: N(_.KeybindActions.NAVIGATE_BACK, _.KeybindActions.NAVIGATE_FORWARD)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
    binds: N(_.KeybindActions.UNREAD_PREV, _.KeybindActions.UNREAD_NEXT)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
    binds: N(_.KeybindActions.MENTION_CHANNEL_PREV, _.KeybindActions.MENTION_CHANNEL_NEXT),
    groupEnd: !0
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
    binds: N(_.KeybindActions.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
    binds: N(_.KeybindActions.MARK_SERVER_READ)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
    binds: N(_.KeybindActions.MARK_CHANNEL_READ)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
    binds: N(_.KeybindActions.SEARCH_EMOJIS),
    groupEnd: !0
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
    binds: N(_.KeybindActions.TOGGLE_MUTE)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
    binds: N(_.KeybindActions.TOGGLE_DEAFEN)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
    binds: N(_.KeybindActions.CALL_ACCEPT)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
    binds: N(_.KeybindActions.MARK_CHANNEL_READ)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
    binds: N(_.KeybindActions.CALL_START),
    groupEnd: !0
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
    binds: N(_.KeybindActions.SCROLL_UP, _.KeybindActions.SCROLL_DOWN)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
    binds: N(_.KeybindActions.JUMP_TO_FIRST_UNREAD)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: N(_.KeybindActions.TEXTAREA_FOCUS)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
    binds: N(_.KeybindActions.QUICKSWITCHER_SHOW)
  }]
}