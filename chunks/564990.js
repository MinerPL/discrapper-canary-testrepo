"use strict";
n.d(t, {
  m: function() {
    return o
  },
  y: function() {
    return a
  }
});
var i = n(544891),
  r = n(881052),
  s = n(981631);
let o = async e => {
  let {
    token: t
  } = e;
  try {
    let e = (await i.tn.get({
        url: s.ANM.MY_CONTENT_INVENTORY(t)
      })).body,
      n = e.wait_ms_until_next_fetch;
    if (null != n) {
      let t = new Date(Date.now() + n);
      e.expired_at = t.toISOString()
    }
    return e
  } catch (e) {
    throw new r.Hx(e)
  }
};
async function a(e, t) {
  try {
    await i.tn.post({
      url: s.ANM.MY_SPOTIFY_CONTENT_INVENTORY,
      body: {
        connection_id: e,
        tracks: [t]
      }
    })
  } catch (e) {
    throw new r.Hx(e)
  }
}