n.d(t, {
  VO: function() {
return s;
  },
  f0: function() {
return u;
  },
  fS: function() {
return d;
  }
});
var l = n(652874),
  r = n(626135),
  i = n(981631);
let a = {
guildId: void 0,
channelId: void 0,
channelType: void 0,
viewerSwipes: 0,
thumbnailSwipes: 0,
selectedItemChanges: 0,
numMediaItems: 0
  },
  o = (0, l.Z)(() => a);

function d(e, t, n, l) {
  o.setState({
...a,
guildId: e,
channelId: t,
channelType: n,
numMediaItems: l
  });
}

function s() {
  let e = o.getState();
  r.default.track(i.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
guild_id: e.guildId,
channel_id: e.channelId,
channel_type: e.channelType,
number_viewer_swipes: e.viewerSwipes,
number_thumbnail_swipes: e.thumbnailSwipes,
number_selected_item_changes: e.selectedItemChanges,
number_media_items: e.numMediaItems
  }), o.setState({
...a
  });
}

function u() {
  o.setState(e => ({
selectedItemChanges: e.selectedItemChanges + 1
  }));
}