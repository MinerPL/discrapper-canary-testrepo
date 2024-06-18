"use strict";
n.d(t, {
  f: function() {
    return l
  }
}), n(47120);
var i = n(456007),
  r = n(895924),
  s = n(351133),
  o = n(689079),
  a = n(689938);

function l(e) {
  let {
    option: t,
    content: n,
    guildId: l,
    channelId: u,
    allowEmptyValues: _,
    commandOrigin: d = r.bB.CHAT
  } = e, c = null != n ? (0, i.KF)({
    content: n
  }, "content").trim() : "", E = t.required, I = "" === c;
  if (!(null != n)) return E ? {
    success: !1,
    error: a.Z.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
  } : {
    success: !0
  };
  if (I) return _ ? {
    success: !0
  } : E ? {
    success: !1,
    error: a.Z.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
  } : {
    success: !1,
    error: (0, o.al)(t)
  };
  let T = n.length > 1 ? {
      type: "text",
      text: c
    } : n[0],
    h = s.Z[t.type](T, t, u, l, d);
  return !h.success && null == h.error && (h.error = (0, o.al)(t)), h
}