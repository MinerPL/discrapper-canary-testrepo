n.d(t, {
  E: function() {
return l;
  },
  _: function() {
return r;
  }
}), n(627341);
var i = n(278074),
  s = n(263568),
  a = n(171018);

function r(e, t) {
  let n = (0, i.EQ)(t).with(s.C.IMAGE_ONLY_ANSWERS, () => a.normalStylesImageOnlyAnswers).otherwise(() => a.normalStylesDefault);
  return {
styles: {
  loserSelected: n,
  normal: n,
  notVoted: n,
  selected: n,
  voted: a.votedStyles,
  victorSelected: a.victorStyles,
  victorNotSelected: a.victorStyles,
  normalVote: n
}
  };
}

function l(e, t) {
  return e.getAvatarURL(t, 20, !1);
}