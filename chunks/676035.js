"use strict";
n.d(t, {
  I: function() {
    return _
  },
  a: function() {
    return d
  }
});
var i = n(470079),
  r = n(442837),
  s = n(339085),
  o = n(633302),
  a = n(695346),
  l = n(981631);

function u(e, t) {
  let n = null;
  if (null != t) n = {
    id: t.id,
    name: t.name,
    animated: t.animated
  };
  else if (null != e.emojiName && "" !== e.emojiName) {
    let t = o.ZP.getByName(o.ZP.convertSurrogateToName(e.emojiName, !1));
    n = null != t ? {
      id: null,
      name: t.surrogates,
      animated: !1
    } : null
  }
  let i = Number(e.expiresAtMs);
  return {
    name: "Custom Status",
    type: l.IIU.CUSTOM_STATUS,
    state: e.text.length > 0 ? e.text : void 0,
    timestamps: i > 0 ? {
      end: i
    } : void 0,
    emoji: n
  }
}

function _(e) {
  let {
    emojiId: t
  } = e;
  return u(e, null != t && "0" !== t ? s.Z.getUsableCustomEmojiById(t) : null)
}

function d() {
  let e = a.Ok.useSetting(),
    t = null == e ? void 0 : e.emojiId,
    n = (0, r.e7)([s.Z], () => null != t && "0" !== t ? s.Z.getUsableCustomEmojiById(t) : null, [t]);
  return (0, i.useMemo)(() => null != e ? u(e, n) : null, [e, n])
}