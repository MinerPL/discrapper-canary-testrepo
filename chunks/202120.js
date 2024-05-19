"use strict";
n.r(t), n.d(t, {
  openProviderAuthorize: function() {
    return o
  }
});
var i = n("457330"),
  r = n("358085"),
  a = n("856651"),
  s = n("981631");
async function o(e) {
  let {
    location: t,
    twoWayLinkType: n,
    successRedirect: o
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = arguments.length > 2 ? arguments[2] : void 0, u = Math.round(screen.width / 2 - 350), d = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0, _ = null;
  !(0, r.isDesktop)() && (_ = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(s.Routes.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(d, ",left=").concat(u, ",width=").concat(700, ",height=").concat(640)));
  let c = l;
  if (null == c && e !== a.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE) {
    let {
      body: r
    } = await i.default.authorize(e, {
      location: t,
      twoWayLinkType: n,
      successRedirect: o
    });
    c = r.url
  }
  if (null != c) return null != _ ? _.location.href = c : window.open(c), c
}