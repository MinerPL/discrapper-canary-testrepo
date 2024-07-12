n.d(t, {
  E: function() {
return l;
  },
  _: function() {
return r;
  }
}), n(627341);
var i = n(278074),
  a = n(263568),
  s = n(171018);

function r(e, t) {
  let n = (0, i.EQ)(t).with(a.C.IMAGE_ONLY_ANSWERS, () => s.normalStylesImageOnlyAnswers).otherwise(() => s.normalStylesDefault);
  return {
styles: {
  loserSelected: n,
  normal: n,
  notVoted: n,
  selected: n,
  voted: s.votedStyles,
  victorSelected: s.victorStyles,
  victorNotSelected: s.victorStyles,
  normalVote: n
}
  };
}

function l(e, t) {
  return e.getAvatarURL(t, 20, !1);
}