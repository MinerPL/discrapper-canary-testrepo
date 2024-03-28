"use strict";
u.r(t), u.d(t, {
  formatMessageCountLabel: function() {
    return d
  },
  getMessageCountText: function() {
    return i
  }
});
var n = u("709054"),
  l = u("124368"),
  r = u("689938");
let a = e => n.default.compare("992549565104128000", e) > -1,
  i = (e, t) => {
    if (null == e || e < 0) return "0";
    {
      let u = a(t);
      return (null == t || u) && e >= l.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= l.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
    }
  },
  o = (e, t, u) => {
    let n = i(e, u);
    return "0" === n ? r.default.Messages.SEE_THREAD : t.format({
      count: n
    })
  },
  d = (e, t) => o(e, r.default.Messages.THREAD_MESSAGE_COUNT, t)