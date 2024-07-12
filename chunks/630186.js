n.d(t, {
  Z: function() {
return s;
  },
  _: function() {
return a;
  }
});
var i = n(726542),
  l = n(973616),
  r = n(689938);
let a = 'twitch:';
class s extends l.Z {
  getIconURL() {
return i.Z.get('twitch').icon.lightPNG;
  }
  constructor(e) {
super(e), this.id = ''.concat(a).concat(e.url), this.name = r.Z.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH;
  }
}