"use strict";
n(47120), n(653041);
var i = n(913527),
  r = n.n(i),
  s = n(627420),
  o = n(375964),
  a = n.n(o),
  l = n(924658),
  u = n.n(l),
  _ = n(539590),
  d = n.n(_);
let c = e => ({
    ...u(),
    ...d(),
    ...e
  }),
  E = new s.ZP({
    getMessages: e => {
      if ("en-US" === e) return c(a());
      return n(385007)("./".concat(e, ".jsona")).then(e => {
        let {
          default: t
        } = e;
        return t
      }).then(c)
    },
    getLanguages: () => n(515297)
  });

function I(e) {
  n(763747).q[e]().then(t => {
    let {
      default: i
    } = t;
    {
      let {
        registerLocale: t
      } = n(578807);
      t(e, i)
    }
  })
}
E.addListener("locale", e => {
  ! function(e, t) {
    let n = [],
      i = ("no" === e ? "nb" : e).split("-");
    for (; i.length > 0;) n.push(i.join("-")), i.pop();
    n.push(t), r().locale(n)
  }(e, "en-US");
  let {
    setTags: t
  } = n(960048).Z;
  t({
    locale: e
  })
});
E.addListener("locale", I), I(E.getLocale()), t.Z = E