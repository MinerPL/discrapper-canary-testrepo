"use strict";
n.d(e, {
  x: function() {
    return s
  }
});
var r = n(303155),
  i = n(880803);

function s(t) {
  let e = [];

  function n(t) {
    return e.splice(e.indexOf(t), 1)[0]
  }
  return {
    $: e,
    add: function(s) {
      if (!(void 0 === t || e.length < t)) return (0, i.$2)(new r.b("Not adding Promise because buffer limit was reached."));
      let a = s();
      return -1 === e.indexOf(a) && e.push(a), a.then(() => n(a)).then(null, () => n(a).then(null, () => {})), a
    },
    drain: function(t) {
      return new i.cW((n, r) => {
        let s = e.length;
        if (!s) return n(!0);
        let a = setTimeout(() => {
          t && t > 0 && n(!1)
        }, t);
        e.forEach(t => {
          (0, i.WD)(t).then(() => {
            !--s && (clearTimeout(a), n(!0))
          }, r)
        })
      })
    }
  }
}