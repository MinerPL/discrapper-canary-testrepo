"use strict";
s.r(t), s.d(t, {
  usePaginatedMemberApplications: function() {
    return c
  }
}), s("47120");
var a = s("470079"),
  l = s("913527"),
  i = s.n(l),
  n = s("881052"),
  u = s("709054"),
  r = s("693546"),
  o = s("246364");
let d = o.MAX_RESULTS_PER_PAGE * o.MAX_VISIBLE_PAGES;

function c(e) {
  let {
    guildId: t,
    guildJoinRequests: s
  } = e, l = a.useRef(!1), [c, E] = a.useState(null), I = a.useRef(null), f = a.useRef(!1);
  return {
    fetchNextPage: a.useCallback(async (e, a) => {
      if (l.current) return;
      let T = "".concat(e, "-").concat(a),
        _ = !1;
      if (T !== I.current && (I.current = T, f.current = !1, _ = !0), f.current) return;
      null != c && E(null);
      let S = function(e, t, s, a) {
        let l = s === o.GuildJoinRequestApplicationStatuses.SUBMITTED;
        if (t === o.GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
          if (a) return {
            before: u.default.fromTimestamp(new Date().getTime())
          };
          {
            let t = e[e.length - 1];
            return {
              before: l ? t.id : t.actionedAt
            }
          }
        }
        if (a) return {
          after: u.default.fromTimestamp(i()().subtract(180, "days").valueOf())
        };
        {
          let t = e[e.length - 1];
          return {
            after: l ? t.id : t.actionedAt
          }
        }
      }(s, e, a, _);
      try {
        l.current = !0;
        let e = await r.default.fetchGuildJoinRequests({
          guildId: t,
          status: a,
          limit: d,
          ...S
        });
        if (null != e) {
          let {
            guild_join_requests: t
          } = e.body;
          t.length < d && (f.current = !0)
        }
      } catch (e) {
        E(new n.APIError(e).getAnyErrorMessage())
      } finally {
        l.current = !1
      }
    }, [c, t, s]),
    error: c
  }
}