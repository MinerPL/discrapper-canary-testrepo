"use strict";
n.d(t, {
  $: function() {
    return o
  }
});
var i = n(381129),
  r = n(981631),
  s = n(689938);
let o = [{
  check(e, t, n) {
    if (!n || null == t.getGuildId()) return !1;
    let r = i.Z.extractEveryoneRole(e, t);
    if (null == r || !i.Z.shouldShowEveryoneGuard(r, t)) return !1;
    let o = i.Z.everyoneMemberCount(r, t),
      a = Math.pow(10, Math.floor(Math.log10(o))),
      l = s.Z.Messages.EVERYONE_POPOUT_BODY;
    return t.isForumPost() ? l = s.Z.Messages.EVERYONE_POPOUT_BODY_FORUM_POST : t.isThread() && (l = s.Z.Messages.EVERYONE_POPOUT_BODY_THREAD), {
      body: l.format({
        role: r,
        count: (Math.trunc(o / a) * a).toLocaleString()
      }),
      footer: s.Z.Messages.EVERYONE_POPOUT_FOOTER
    }
  },
  analyticsType: "@Everyone Warning",
  animation: {
    dark: () => n.e("83323").then(n.t.bind(n, 510465, 19)),
    light: () => n.e("36052").then(n.t.bind(n, 570227, 19))
  }
}, {
  check: e => !!r.Jn9.test(e) && {
    body: s.Z.Messages.TOKEN_POPOUT_BODY
  },
  analyticsType: "API Token Warning"
}]