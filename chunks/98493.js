"use strict";
n.r(t), n.d(t, {
  MEMBER_APPLICATION_FETCH_LIMIT: function() {
    return d
  },
  usePaginatedMemberApplications: function() {
    return c
  }
}), n("47120");
var l = n("470079"),
  a = n("913527"),
  s = n.n(a),
  i = n("881052"),
  r = n("709054"),
  o = n("693546"),
  u = n("246364");
let d = u.MAX_RESULTS_PER_PAGE * u.MAX_VISIBLE_PAGES;

function c(e) {
  let {
    guildId: t,
    guildJoinRequests: n
  } = e, a = l.useRef(!1), [c, f] = l.useState(null), h = l.useRef(null), p = l.useRef(!1);
  return {
    fetchNextPage: l.useCallback(async (e, l) => {
      if (a.current) return;
      let m = "".concat(e, "-").concat(l),
        C = !1;
      if (m !== h.current && (h.current = m, p.current = !1, C = !0), p.current) return;
      null != c && f(null);
      let g = function(e, t, n, l) {
        let a = n === u.GuildJoinRequestApplicationStatuses.SUBMITTED;
        if (t === u.GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
          if (l) return {
            before: r.default.fromTimestamp(new Date().getTime())
          };
          {
            let t = e[e.length - 1];
            return {
              before: a ? t.joinRequestId : t.actionedAt
            }
          }
        }
        if (l) return {
          after: r.default.fromTimestamp(s()().subtract(180, "days").valueOf())
        };
        {
          let t = e[e.length - 1];
          return {
            after: a ? t.joinRequestId : t.actionedAt
          }
        }
      }(n, e, l, C);
      try {
        a.current = !0;
        let e = await o.default.fetchGuildJoinRequests({
          guildId: t,
          status: l,
          limit: d,
          ...g
        });
        if (null != e) {
          let {
            guild_join_requests: t
          } = e.body;
          t.length < d && (p.current = !0)
        }
      } catch (e) {
        f(new i.APIError(e).getAnyErrorMessage())
      } finally {
        a.current = !1
      }
    }, [c, t, n]),
    error: c
  }
}