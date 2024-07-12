n.d(t, {
  H: function() {
return s;
  }
});
var r = n(457330),
  i = n(358085),
  a = n(856651),
  o = n(981631);
async function s(e) {
  let {
location: t,
twoWayLinkType: n,
successRedirect: s
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = arguments.length > 2 ? arguments[2] : void 0, u = Math.round(screen.width / 2 - 350), c = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0, d = null;
  !(0, i.isDesktop)() && (d = window.open(''.concat(window.location.protocol, '//').concat(window.location.host).concat(o.Z5c.CONNECTIONS(e), '?loading=true'), 'authorize', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,top='.concat(c, ',left=').concat(u, ',width=').concat(700, ',height=').concat(640)));
  let _ = l;
  if (null == _ && e !== a.Kt) {
let {
  body: i
} = await r.Z.authorize(e, {
  location: t,
  twoWayLinkType: n,
  successRedirect: s
});
_ = i.url;
  }
  if (null != _)
return null != d ? d.location.href = _ : window.open(_), _;
}