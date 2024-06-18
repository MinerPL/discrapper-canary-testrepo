"use strict";
n.d(t, {
  Z: function() {
    return N
  }
}), n(47120);
var i = n(470079),
  r = n(718922),
  s = n(442837),
  o = n(456007),
  a = n(998698),
  l = n(541716),
  u = n(797610),
  _ = n(271383),
  d = n(496675),
  c = n(246946),
  E = n(594174),
  I = n(106824),
  T = n(691841),
  h = n(981631),
  S = n(377668),
  f = n(185923);

function N(e, t, n) {
  var N, A, m, O, R, C, p;
  let {
    channel: g,
    type: L
  } = e, [v, D] = i.useState(() => (0, I.P)()), M = (0, r.Z)(), P = (0, s.e7)([_.ZP], () => {
    if (null != e.guild) {
      var t;
      return null != _.ZP.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, S.fL)
    }
    return !1
  }), y = (0, u.Ib)(e.guild, e.channel) && !P && !(0, u.g0)(e.guild), U = (0, s.e7)([_.ZP, E.default], () => {
    var e, t;
    let n = E.default.getCurrentUser();
    return null !== (t = null != g.guild_id && null != n ? null === (e = _.ZP.getMember(g.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canMentionEveryone: b,
    hidePersonalInformation: G
  } = (0, s.cj)([d.Z, c.Z], () => ({
    canMentionEveryone: g.isPrivate() || U || L === l.I.RULES_INPUT || d.Z.can(h.Plq.MENTION_EVERYONE, g),
    hidePersonalInformation: c.Z.hidePersonalInformation
  }), [g, L, U]), {
    activeCommand: w,
    activeCommandOption: k
  } = (0, s.cj)([a.Z], () => ({
    activeCommand: a.Z.getActiveCommand(g.id),
    activeCommandOption: a.Z.getActiveOption(g.id)
  })), B = (0, T.Z)({
    navId: "channel-autocomplete",
    scrollerRef: n,
    state: v,
    onFocus: e => Z.setSelectedIndex(e)
  }), x = null === (N = e.editorRef.current) || void 0 === N ? void 0 : N.getCurrentWord(), V = {
    ...e,
    navigator: B,
    activeCommand: w,
    activeCommandOption: k,
    canMentionUsers: null !== (R = null === (A = L.users) || void 0 === A ? void 0 : A.allowMentioning) && void 0 !== R && R,
    canMentionEveryone: b,
    canMentionClyde: y,
    hidePersonalInformation: G,
    hideMentionDescription: L === l.I.RULES_INPUT,
    emojiIntention: L === l.I.RULES_INPUT ? f.Hz.COMMUNITY_CONTENT : f.Hz.CHAT,
    currentWord: null !== (C = null == x ? void 0 : x.word) && void 0 !== C ? C : "",
    currentWordIsAtStart: (null == x ? void 0 : x.isAtStart) === !0,
    optionText: null != k ? (0, o.KF)({
      [k.name]: null !== (p = null === (m = e.editorRef.current) || void 0 === m ? void 0 : m.getCurrentCommandOptionValue()) && void 0 !== p ? p : []
    }, k.name) : ""
  }, [Z] = i.useState(() => new I.Z(V));
  return i.useEffect(() => {
    Z.updateProps(V)
  }), i.useImperativeHandle(t, () => Z, [Z]), i.useEffect(() => {
    let e = e => D(e);
    return Z.on("change", e), Z.on("update", M), () => {
      Z.off("change", e), Z.off("update", M)
    }
  }, [M, Z]), i.useEffect(() => {
    var e;
    let t = null === (e = v.query) || void 0 === e ? void 0 : e.typeInfo.stores;
    if (null != t) {
      let e = () => Z.queryResults();
      for (let n of t) n.addChangeListener(e);
      return () => {
        for (let n of t) n.removeChangeListener(e)
      }
    }
  }, [Z, null === (O = v.query) || void 0 === O ? void 0 : O.typeInfo]), [v, Z, B]
}