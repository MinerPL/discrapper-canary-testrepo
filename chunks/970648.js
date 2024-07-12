n(411104);
var s = n(772848),
  r = n(544891),
  i = n(981631);
async function a(e) {
  let {
body: {
  handoff_token: t
}
  } = await r.tn.post({
url: i.ANM.HANDOFF,
body: {
  key: e
},
oldFormErrors: !0,
retries: 1
  });
  if (null != t)
return t;
  throw Error('Missing handoff token!');
}
t.Z = {
  generateNonce: function() {
return (0, s.Z)();
  },
  createHandoffToken: a
};