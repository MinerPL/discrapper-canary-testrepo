"use strict";
let i;
n(653041);
i = n(538036).Z;
let r = [],
  s = !1;
t.Z = {
  ...i,
  awaitOnline: () => new Promise(e => {
    if (i.isOnline()) return e();
    {
      if (r.push(e), s) return;
      s = !0;
      let t = () => {
        r.forEach(e => e()), r.length = 0, s = !1, i.removeOnlineCallback(t)
      };
      i.addOnlineCallback(t)
    }
  })
}