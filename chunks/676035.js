n.d(t, {
  I: function() {
return c;
  },
  a: function() {
return d;
  }
});
var r = n(470079),
  i = n(442837),
  a = n(339085),
  s = n(633302),
  o = n(695346),
  l = n(981631);

function u(e, t) {
  let n = null;
  if (null != t)
n = {
  id: t.id,
  name: t.name,
  animated: t.animated
};
  else if (null != e.emojiName && '' !== e.emojiName) {
let t = s.ZP.getByName(s.ZP.convertSurrogateToName(e.emojiName, !1));
n = null != t ? {
  id: null,
  name: t.surrogates,
  animated: !1
} : null;
  }
  let r = Number(e.expiresAtMs);
  return {
name: 'Custom Status',
type: l.IIU.CUSTOM_STATUS,
state: e.text.length > 0 ? e.text : void 0,
timestamps: r > 0 ? {
  end: r
} : void 0,
emoji: n
  };
}

function c(e) {
  let {
emojiId: t
  } = e;
  return u(e, null != t && '0' !== t ? a.ZP.getUsableCustomEmojiById(t) : null);
}

function d() {
  let e = o.Ok.useSetting(),
t = null == e ? void 0 : e.emojiId,
n = (0, i.e7)([a.ZP], () => null != t && '0' !== t ? a.ZP.getUsableCustomEmojiById(t) : null, [t]);
  return (0, r.useMemo)(() => null != e ? u(e, n) : null, [
e,
n
  ]);
}