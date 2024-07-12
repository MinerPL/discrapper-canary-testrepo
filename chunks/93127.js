n.d(t, {
  W: function() {
return d;
  },
  _: function() {
return u;
  }
});
var i = n(544891),
  r = n(570140),
  o = n(814443),
  a = n(428598),
  l = n(981631);

function d() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return o.Z.needsRefresh() ? (r.Z.dispatch({
type: 'LOAD_USER_AFFINITIES'
  }), i.tn.get({
url: l.ANM.USER_AFFINITIES,
retries: e ? 3 : 0,
oldFormErrors: !0
  }).then(e => {
let {
  body: t
} = e;
r.Z.dispatch({
  type: 'LOAD_USER_AFFINITIES_SUCCESS',
  affinities: t
});
  }, () => {
r.Z.dispatch({
  type: 'LOAD_USER_AFFINITIES_FAILURE'
});
  })) : Promise.resolve();
}

function u() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return a.Z.shouldFetch() ? (r.Z.dispatch({
type: 'LOAD_USER_AFFINITIES_V2'
  }), i.tn.get({
url: l.ANM.USER_AFFINITIES_V2,
retries: e ? 3 : 0,
oldFormErrors: !0
  }).then(e => {
let {
  body: t
} = e;
r.Z.dispatch({
  type: 'LOAD_USER_AFFINITIES_V2_SUCCESS',
  affineUsers: t.map(e => {
    var t, n, i, r, o, a, l, d;
    return {
      otherUserId: e.other_user_id,
      userSegment: e.user_segment,
      otherUserSegment: e.other_user_segment,
      isFriend: e.is_friend,
      dmProbability: null !== (t = e.dm_probability) && void 0 !== t ? t : 0,
      dmRank: null !== (n = e.dm_rank) && void 0 !== n ? n : 0,
      vcProbability: null !== (i = e.vc_probability) && void 0 !== i ? i : 0,
      vcRank: null !== (r = e.vc_rank) && void 0 !== r ? r : 0,
      serverMessageProbability: null !== (o = e.server_message_probability) && void 0 !== o ? o : 0,
      serverMessageRank: null !== (a = e.server_message_rank) && void 0 !== a ? a : 0,
      communicationProbability: null !== (l = e.communication_probability) && void 0 !== l ? l : 0,
      communicationRank: null !== (d = e.communication_rank) && void 0 !== d ? d : 0
    };
  })
});
  }, () => {
r.Z.dispatch({
  type: 'LOAD_USER_AFFINITIES_V2_FAILURE'
});
  })) : Promise.resolve();
}