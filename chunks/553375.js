n.d(t, {
  Z: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(26033),
  s = n(810568),
  o = n(168524),
  l = n(981631),
  u = n(689938);

function c(e) {
  let {
activity: t,
entry: n,
user: c
  } = e, {
applicationId: d,
sourceUserId: _
  } = function(e) {
let {
  activity: t,
  entry: n,
  user: r
} = e;
if (null != n) {
  var i;
  return {
    applicationId: (0, a.dX)(n) ? null === (i = n.extra) || void 0 === i ? void 0 : i.application_id : void 0,
    sourceUserId: n.author_id
  };
}
return null != t ? {
  applicationId: t.type === l.IIU.PLAYING && null != t.application_id ? t.application_id : void 0,
  sourceUserId: r.id
} : {
  applicationId: void 0,
  sourceUserId: void 0
};
  }({
activity: t,
entry: n,
user: c
  }), E = (0, o.Z)({
location: 'UserProfileActivityContextMenu',
source: s.m1.UserProfileCardContextMenu,
trackEntryPointImpression: !0,
applicationId: d,
sourceUserId: _
  });
  return null == E ? null : (0, r.jsx)(i.MenuItem, {
id: 'game-profile',
label: u.Z.Messages.VIEW_GAME_PROFILE,
action: E
  });
}