n.d(t, {
  CV: function() {
return c;
  },
  JX: function() {
return u;
  },
  mt: function() {
return l;
  },
  yK: function() {
return d;
  }
});
var r = n(544891),
  i = n(570140),
  a = n(881052),
  s = n(206583),
  o = n(981631);
let l = async e => {
  let {
token: t,
feedId: n
  } = e;
  try {
let e = (await r.tn.get({
    url: o.ANM.MY_CONTENT_INVENTORY(t),
    ...n === s.YN.GAME_PROFILE_FEED && {
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
throw new a.Hx(e);
  }
}, u = async e => {
  try {
let t = (await r.tn.get({
  url: o.ANM.CONTENT_INVENTORY_OUTBOX(e)
})).body;
return i.Z.dispatch({
  type: 'CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS',
  outbox: t,
  userId: e
}), t;
  } catch (e) {
throw new a.Hx(e);
  }
}, c = async (e, t) => {
  try {
await new Promise(e => setTimeout(e, 1000)), i.Z.dispatch({
  type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY',
  userId: t,
  entry: e
});
  } catch (e) {
throw new a.Hx(e);
  }
};
async function d(e, t) {
  try {
await r.tn.post({
  url: o.ANM.MY_SPOTIFY_CONTENT_INVENTORY,
  body: {
    connection_id: e,
    tracks: [t]
  }
});
  } catch (e) {
throw new a.Hx(e);
  }
}