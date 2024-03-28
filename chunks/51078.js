"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var o = n("735250");
n("470079");
var a = n("442837"),
  r = n("481060"),
  i = n("906732"),
  u = n("594174"),
  s = n("153124"),
  d = n("74538"),
  l = n("242291"),
  c = n("710111"),
  f = n("689938");

function O(e, t) {
  let {
    analyticsLocations: n
  } = (0, i.default)(), O = (0, a.useStateFromStores)([u.default], () => u.default.getCurrentUser()), p = (0, s.useUID)(), S = (0, s.useUID)();
  return null != t && d.default.canUseCustomCallSounds(O) ? (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(r.MenuItem, {
      id: p,
      label: f.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GUILD,
      action: () => (0, l.updateCustomJoinSound)(t, e, n)
    }), (0, o.jsx)(r.MenuItem, {
      id: S,
      label: f.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GLOBAL,
      action: () => (0, l.updateCustomJoinSound)(c.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID, e, n)
    })]
  }) : null
}