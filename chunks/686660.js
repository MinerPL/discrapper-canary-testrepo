"use strict";
n.d(t, {
  gs: function() {
    return u
  },
  p1: function() {
    return _
  },
  s8: function() {
    return i
  }
}), n(627341);
var i, r, s = n(278074),
  o = n(981631),
  a = n(490897),
  l = n(689938);

function u(e, t) {
  return (0, s.EQ)([t, e]).with([o.bL.ALL_MESSAGES, a.i.ALL_MESSAGES], () => "all_messages").with([o.bL.ONLY_MENTIONS, a.i.UNSET], () => "mentions").with([o.bL.ONLY_MENTIONS, a.i.ONLY_MENTIONS], () => "mentions").with([o.bL.NO_MESSAGES, a.i.UNSET], () => "nothing").with([o.bL.NO_MESSAGES, a.i.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
}

function _(e) {
  return (0, s.EQ)(e).with("all_messages", () => l.Z.Messages.NOTIFICATION_PRESET_1).with("mentions", () => l.Z.Messages.NOTIFICATION_PRESET_2).with("nothing", () => l.Z.Messages.NOTIFICATION_PRESET_3).with("custom", () => l.Z.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
}(r = i || (i = {})).ALL_MESSAGES = "all_messages", r.MENTIONS = "mentions", r.NOTHING = "nothing", r.CUSTOM = "custom"