n.d(t, {
  Z: function() {
return r;
  }
});
var s = n(134432),
  a = n(981631);

function r(e, t) {
  let n;
  if (null == e.image)
return null;
  null == t && (t = window.screen.width * (0, s.x_)()), t = (0, s.oO)(t);
  let r = window.GLOBAL_ENV.CDN_HOST;
  if (null != r) {
var l;
n = ''.concat((l = 'https:', 'https:'), '//').concat(r, '/guild-events/').concat(e.id, '/').concat(e.image);
  } else
n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + a.ANM.GUILD_EVENT_IMAGE(e.id, e.image, 'png');
  return n += '?size='.concat(t);
}