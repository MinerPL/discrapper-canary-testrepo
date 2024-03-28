"use strict";
n.r(t), n.d(t, {
  useMessageRequestPreview: function() {
    return m
  }
}), n("47120");
var a = n("392711"),
  l = n.n(a),
  s = n("442837"),
  i = n("544891"),
  r = n("570140"),
  o = n("375954"),
  u = n("306680"),
  d = n("748902"),
  c = n("981631");
let f = new Set,
  h = null;

function m(e) {
  let {
    id: t
  } = e, {
    loaded: n,
    message: a,
    error: l
  } = (0, s.useStateFromStoresObject)([d.default, o.default, u.default], () => {
    let e = u.default.lastMessageId(t),
      n = d.default.getMessageRequestPreview(t);
    if (null == n.message && null != e) {
      let n = o.default.getMessage(t, e);
      if (null != n) return {
        loaded: !0,
        error: !1,
        message: n
      }
    }
    return n
  }, [t]), i = (0, s.useStateFromStores)([d.default], () => d.default.shouldLoadMessageRequestPreview(t), [t]);
  return !n && null == a && i && function(e) {
    f.add(e), null == h && (h = setTimeout(p, 0))
  }(t), {
    loaded: n,
    error: l,
    message: a
  }
}
async function p() {
  try {
    for (; !l().isEmpty(f);) await E()
  } finally {
    h = null
  }
}
async function E() {
  let e = Array.from(f).slice(0, 25);
  try {
    let t = await i.HTTP.get({
      url: c.Endpoints.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
      query: {
        channel_ids: e
      }
    });
    r.default.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
      requestedChannelIds: e,
      supplementalData: t.body
    })
  } catch (t) {
    r.default.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR",
      requestedChannelIds: e
    })
  } finally {
    for (let t of e) f.delete(t)
  }
}