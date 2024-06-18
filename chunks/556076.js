"use strict";
n.d(t, {
  y: function() {
    return s
  }
});
var i = n(544891),
  r = n(981631);

function s(e, t) {
  i.tn.post({
    url: r.ANM.VOICE_CHANNEL_NOTIFICATIONS(e),
    query: {
      first_user: t
    }
  })
}