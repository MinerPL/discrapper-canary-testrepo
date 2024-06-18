"use strict";
n.d(t, {
  Lh: function() {
    return a
  },
  g1: function() {
    return u
  },
  iD: function() {
    return l
  },
  ir: function() {
    return _
  },
  s4: function() {
    return d
  },
  sm: function() {
    return c
  }
}), n(757143);
var i = n(633302),
  r = n(314897),
  s = n(981631),
  o = n(689938);

function a(e) {
  return null == e.id ? i.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}

function l(e, t, n, i) {
  var r, s, l;
  let u;
  return (u = i ? e ? o.Z.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : o.Z.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL : e ? o.Z.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : o.Z.Messages.REACT_WITH_COUNT_A11Y_LABEL).format({
    reactions: t,
    emojiName: null !== (l = null === (s = a(n)) || void 0 === s ? void 0 : null === (r = s.replace(/[:_]/g, " ")) || void 0 === r ? void 0 : r.trim()) && void 0 !== l ? l : ""
  })
}

function u(e) {
  var t, n, i;
  return {
    id: null !== (t = e.id) && void 0 !== t ? t : null,
    name: null !== (i = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== i ? i : "",
    animated: !!e.animated
  }
}

function _(e, t) {
  if (null != t.id) {
    let n = null != e.id ? "".concat(e.id) : e.id;
    return "".concat(t.id) === n
  }
  return null == e.id && t.name === e.name
}

function d(e) {
  if (e.isThread()) return s.jXE.THREAD_TEXT_AREA;
  if (e.isForumPost()) return s.jXE.FORUM_CHANNEL_TEXT_AREA;
  if (e.isGuildVocal()) return s.jXE.TEXT_IN_VOICE;
  return s.jXE.CHANNEL_TEXT_AREA
}

function c(e) {
  let {
    userId: t,
    optimistic: n
  } = e, i = r.default.getId() === t;
  return (!n || !!i) && !0
}