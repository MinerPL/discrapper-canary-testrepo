"use strict";
l.r(t), l.d(t, {
  useGuildInvites: function() {
    return i
  }
}), l("222007"), l("808653");
var a = l("884691"),
  s = l("872717"),
  n = l("49111");
let o = new Map;

function i(e) {
  let [t, l] = a.useState(o.has(e) ? Array.from(o.get(e)) : []), [i, r] = a.useState(!1), d = a.useMemo(() => t.map(e => e.code), [t]), u = a.useMemo(() => t.reduce((e, t) => (e[t.code] = t, e), {}), [t]), C = a.useCallback(async () => {
    r(!0);
    let t = await s.HTTP.get(n.Endpoints.GUILD_INSTANT_INVITES(e)),
      a = t.body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
    l(a), o.set(e, new Set(a)), r(!1)
  }, [e]);
  return a.useEffect(() => {
    C()
  }, [e, C]), {
    invitesRaw: t,
    inviteCodes: d,
    invitesByCode: u,
    loading: i
  }
}