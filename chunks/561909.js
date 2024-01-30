"use strict";
l.r(t), l.d(t, {
  useGuildInvites: function() {
    return o
  }
}), l("222007"), l("808653");
var a = l("884691"),
  n = l("872717"),
  s = l("49111");
let i = new Map;

function o(e) {
  let [t, l] = a.useState(i.has(e) ? Array.from(i.get(e)) : []), [o, d] = a.useState(!1), r = a.useMemo(() => t.map(e => e.code), [t]), u = a.useMemo(() => t.reduce((e, t) => (e[t.code] = t, e), {}), [t]), C = a.useCallback(async () => {
    d(!0);
    let t = await n.default.get(s.Endpoints.GUILD_INSTANT_INVITES(e)),
      a = t.body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
    l(a), i.set(e, new Set(a)), d(!1)
  }, [e]);
  return a.useEffect(() => {
    C()
  }, [e, C]), {
    invitesRaw: t,
    inviteCodes: r,
    invitesByCode: u,
    loading: o
  }
}