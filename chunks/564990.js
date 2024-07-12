n.d(t, {
  m: function() {
return s;
  },
  y: function() {
return l;
  }
});
var r = n(544891),
  i = n(881052),
  a = n(206583),
  o = n(981631);
let s = async e => {
  let {
token: t,
feedId: n
  } = e;
  try {
let e = (await r.tn.get({
    url: o.ANM.MY_CONTENT_INVENTORY(t),
    ...n === a.YN.GAME_PROFILE_FEED && {
      query: {
        for_game_profile: !0
      }
    }
  })).body,
  i = e.wait_ms_until_next_fetch;
if (null != i) {
  let t = new Date(Date.now() + i);
  e.expired_at = t.toISOString();
}
return e;
  } catch (e) {
throw new i.Hx(e);
  }
};
async function l(e, t) {
  try {
await r.tn.post({
  url: o.ANM.MY_SPOTIFY_CONTENT_INVENTORY,
  body: {
    connection_id: e,
    tracks: [t]
  }
});
  } catch (e) {
throw new i.Hx(e);
  }
}