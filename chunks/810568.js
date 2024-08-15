n.d(t, {
  IS: function() {
return E;
  },
  UE: function() {
return h;
  },
  as: function() {
return a;
  },
  fP: function() {
return _;
  },
  m1: function() {
return s;
  },
  wz: function() {
return f;
  }
});
var r, i, a, s, o = n(772848),
  l = n(146282),
  u = n(626135),
  c = n(981631),
  d = n(206583);
(r = a || (a = {}))[r.FollowGame = 0] = 'FollowGame', r[r.UnfollowGame = 1] = 'UnfollowGame', r[r.ClickMessageUser = 2] = 'ClickMessageUser', r[r.SendMessageUser = 3] = 'SendMessageUser', r[r.JoinVC = 4] = 'JoinVC', r[r.WatchStream = 5] = 'WatchStream', r[r.ClickSimilarGame = 6] = 'ClickSimilarGame', r[r.WebsiteLink = 7] = 'WebsiteLink', r[r.XLink = 8] = 'XLink', r[r.YouTubeLink = 9] = 'YouTubeLink', r[r.ShowMore = 10] = 'ShowMore', r[r.ShowLess = 11] = 'ShowLess', r[r.JoinOfficialServer = 12] = 'JoinOfficialServer', r[r.ClickImage = 13] = 'ClickImage', (i = s || (s = {})).ActivityCard = 'activity_card', i.ActivityCardContextMenu = 'activity_card_context_menu', i.UserProfile = 'user_profile', i.UserProfileCardContextMenu = 'user_profile_card_context_menu', i.SimilarGames = 'similar_games', i.DevTools = 'dev_tools', i.Embed = 'embed', i.RtcPanel = 'rtc_panel';
let _ = () => (0, o.Z)(),
  E = e => {
let {
  viewId: t,
  source: n,
  gameName: r,
  applicationId: i,
  authorId: a
} = e;
return u.default.track(c.rMx.GAME_PROFILE_OPEN, {
  view_id: t,
  source: n,
  game_name: r,
  application_id: i,
  author_id: a,
  request_id: l.Z.getFeedRequestId(d.YN.GAME_PROFILE_FEED)
}), t;
  },
  f = e => {
let {
  viewId: t,
  gameName: n,
  applicationId: r,
  playedFriendIds: i,
  playedFriendsData: a,
  similarGames: s
} = e;
u.default.track(c.rMx.GAME_PROFILE_CLOSE, {
  view_id: t,
  game_name: n,
  application_id: r,
  played_friend_ids: i,
  played_friends_data: a,
  similar_games: s,
  request_id: l.Z.getFeedRequestId(d.YN.GAME_PROFILE_FEED)
});
  },
  h = e => {
let {
  gameName: t,
  applicationId: n,
  action: r,
  recipientUserId: i,
  similarGameId: a,
  viewId: s
} = e;
u.default.track(c.rMx.GAME_PROFILE_ACTION, {
  game_name: t,
  application_id: n,
  action: r,
  recipient_user_id: i,
  similar_game_id: a,
  view_id: s
});
  };