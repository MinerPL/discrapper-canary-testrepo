"use strict";
n.d(t, {
  n: function() {
    return o
  },
  x: function() {
    return a
  }
}), n(47120);
var i = n(544891),
  r = n(570140),
  s = n(981631);
async function o() {
  r.Z.dispatch({
    type: "EMOJI_CAPTIONS_FETCH"
  });
  try {
    let {
      body: e
    } = await i.tn.get({
      url: s.ANM.EMOJI_CAPTIONS_GET
    }), t = {};
    for (let n of e.items) t[n.emoji_id] = n.emoji_captions;
    r.Z.dispatch({
      type: "EMOJI_CAPTIONS_FETCH_SUCCESS",
      emojiCaptions: t
    })
  } catch (t) {
    var e;
    r.Z.dispatch({
      type: "EMOJI_CAPTIONS_FETCH_ERROR",
      is4XXError: (null == (e = t.body) ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
    })
  }
}

function a(e) {
  r.Z.dispatch({
    type: "EMOJI_INTERACTION_INITIATED",
    interaction: e
  })
}