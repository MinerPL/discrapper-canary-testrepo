n.d(t, {
  ZP: function() {
return s;
  },
  lY: function() {
return a;
  }
});
var i = n(689938);

function s(e) {
  return e > 0 ? i.Z.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
count: e
  }) : i.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS;
}

function a(e) {
  return e > 0 ? '1-'.concat(e) : i.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS_SHORT;
}