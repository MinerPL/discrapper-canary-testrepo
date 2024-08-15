n.d(t, {
  Z: function() {
return c;
  }
}), n(47120), n(411104);
var r = n(259443),
  i = n(911284),
  a = n(598077),
  s = n(27144),
  o = n(484459);
let l = new r.Y('preloadUserProfileForPopout'),
  u = async e => {
let {
  mostRecentActivityEnabled: t
} = (0, s.L)({
  location: 'preloadUserProfileForPopout',
  autoTrackExposure: !1
});
if (!!t)
  try {
    await Promise.race([
      (0, i.Z)(e),
      new Promise(e => setTimeout(e, 300))
    ]);
  } catch (t) {
    l.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
  }
  };
async function c() {
  let e, t, n;
  for (var r = arguments.length, i = Array(r), s = 0; s < r; s++)
i[s] = arguments[s];
  let l = i[0],
c = i[1];
  if ('string' == typeof l && ('string' == typeof c || null == c))
e = l, t = c, n = i[2];
  else if (l instanceof a.Z && ('object' == typeof c || null == c))
e = l.id, t = l.getAvatarURL(void 0, 80), n = c;
  else
throw Error('Invalid arguments');
  if (null == e)
return Promise.resolve();
  let [d] = await Promise.all([
(0, o.Z)(e, t, {
  withMutualFriends: !0,
  withMutualGuilds: !0,
  ...n
}),
u(e)
  ]);
  return d;
}