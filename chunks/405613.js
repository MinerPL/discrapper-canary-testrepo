n.d(t, {
  Z: function() {
return l;
  }
});
var s = n(134432),
  a = n(981631);

function l(e, t) {
  let n;
  if (null == e.image)
return null;
  null == t && (t = window.screen.width * (0, s.x_)()), t = (0, s.oO)(t);
  let l = window.GLOBAL_ENV.CDN_HOST;
  if (null != l) {
var r;
n = ''.concat((r = 'https:', 'https:'), '//').concat(l, '/guild-events/').concat(e.id, '/').concat(e.image);
  } else
n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + a.ANM.GUILD_EVENT_IMAGE(e.id, e.image, 'png');
  return n += '?size='.concat(t);
}