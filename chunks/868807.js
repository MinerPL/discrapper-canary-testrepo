n.d(t, {
  a: function() {
return m;
  }
}), n(47120);
var i = n(392711),
  a = n.n(i),
  l = n(442837),
  s = n(544891),
  r = n(570140),
  o = n(375954),
  c = n(306680),
  d = n(748902),
  u = n(981631);
let h = new Set(),
  p = null;

function m(e) {
  let {
id: t
  } = e, {
loaded: n,
message: i,
error: a
  } = (0, l.cj)([
d.Z,
o.Z,
c.ZP
  ], () => {
let e = c.ZP.lastMessageId(t),
  n = d.Z.getMessageRequestPreview(t);
if (null == n.message && null != e) {
  let n = o.Z.getMessage(t, e);
  if (null != n)
    return {
      loaded: !0,
      error: !1,
      message: n
    };
}
return n;
  }, [t]), s = (0, l.e7)([d.Z], () => d.Z.shouldLoadMessageRequestPreview(t), [t]);
  return !n && null == i && s && function(e) {
h.add(e), null == p && (p = setTimeout(_, 0));
  }(t), {
loaded: n,
error: a,
message: i
  };
}
async function _() {
  try {
for (; !a().isEmpty(h);)
  await f();
  } finally {
p = null;
  }
}
async function f() {
  let e = Array.from(h).slice(0, 25);
  try {
let t = await s.tn.get({
  url: u.ANM.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
  query: {
    channel_ids: e
  }
});
r.Z.dispatch({
  type: 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS',
  requestedChannelIds: e,
  supplementalData: t.body
});
  } catch (t) {
r.Z.dispatch({
  type: 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR',
  requestedChannelIds: e
});
  } finally {
for (let t of e)
  h.delete(t);
  }
}