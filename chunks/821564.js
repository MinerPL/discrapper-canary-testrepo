"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("846027"),
  r = n("131951"),
  o = n("358085"),
  u = n("981631"),
  d = n("689938");

function c() {
  let e = !o.isPlatformEmbedded,
    t = (0, l.useStateFromStores)([r.default], () => r.default.getMode()),
    n = (e, n) => (0, a.jsx)(s.MenuRadioItem, {
      id: e,
      group: "input-modes",
      label: n,
      checked: t === e,
      action: () => i.default.setMode(e)
    }, e);
  return [n(u.InputModes.VOICE_ACTIVITY, d.default.Messages.INPUT_MODE_VAD), n(u.InputModes.PUSH_TO_TALK, e ? d.default.Messages.INPUT_MODE_PTT_LIMITED : d.default.Messages.INPUT_MODE_PTT)]
}