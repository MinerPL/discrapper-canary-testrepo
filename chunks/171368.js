n.r(t), n.d(t, {
  closeUserProfileModal: function() {
return p;
  },
  openUserProfileModal: function() {
return h;
  }
});
var r = n(259443),
  i = n(481060),
  a = n(570140),
  s = n(232567),
  o = n(911284),
  l = n(594174),
  u = n(27144),
  c = n(484459),
  d = n(981631);
let _ = (0, i.getAvatarSize)(i.AvatarSizes.SIZE_120),
  E = new r.Y('UserProfileModalActionCreators'),
  f = async e => {
let {
  pastActivityEnabled: t
} = u.o.getCurrentConfig({
  location: 'UserProfileModalActionCreators'
}, {
  autoTrackExposure: !1
});
try {
  await (0, o.Z)(e, t);
} catch (t) {
  E.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
}
  };
async function h(e) {
  let {
userId: t,
guildId: n = d.ME,
channelId: r,
messageId: i,
roleId: o,
sessionId: u,
section: E,
subsection: h,
friendToken: p,
showGuildProfile: m,
analyticsLocation: I,
sourceAnalyticsLocations: T
  } = e, g = null != n && n !== d.ME ? n : void 0, S = l.default.getUser(t);
  f(t), null == S ? await (0, s.In)(t, {
guildId: m ? g : void 0,
withMutualGuilds: !0,
withMutualFriends: !0,
friendToken: p
  }) : (0, c.Z)(S.id, S.getAvatarURL(void 0, _), {
guildId: m ? g : void 0,
withMutualGuilds: !0,
withMutualFriends: !0,
friendToken: p
  }), a.Z.dispatch({
type: 'USER_PROFILE_MODAL_OPEN',
userId: t,
guildId: null != n ? n : void 0,
channelId: null != r ? r : void 0,
messageId: null != i ? i : void 0,
roleId: null != o ? o : void 0,
sessionId: null != u ? u : void 0,
section: E,
subsection: h,
friendToken: p,
showGuildProfile: m,
analyticsLocation: I,
sourceAnalyticsLocations: T
  });
}

function p() {
  a.Z.dispatch({
type: 'USER_PROFILE_MODAL_CLOSE'
  });
}