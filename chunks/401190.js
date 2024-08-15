var n = t(544891),
  a = t(570140),
  i = t(881052),
  r = t(981631);
let o = {
  [r.gkr.HOUSE_1]: 1,
  [r.gkr.HOUSE_2]: 2,
  [r.gkr.HOUSE_3]: 3
};
s.Z = {
  joinHypeSquadOnline: e => n.tn.post({
url: r.ANM.HYPESQUAD_ONLINE,
body: {
  house_id: o[e.houseID]
},
oldFormErrors: !0
  }).then(() => a.Z.dispatch({
type: 'HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS',
houseID: e.houseID
  })).catch(e => {
throw new i.yZ(e);
  }),
  leaveHypeSquadOnline: () => n.tn.del({
url: r.ANM.HYPESQUAD_ONLINE,
oldFormErrors: !0
  }).then(() => a.Z.dispatch({
type: 'HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS'
  })).catch(e => {
throw new i.yZ(e);
  })
};