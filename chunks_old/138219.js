"use strict";
s.r(t), s.d(t, {
  usePaginatedMemberApplications: function() {
    return c
  }
}), s("222007");
var a = s("884691"),
  l = s("866227"),
  i = s.n(l),
  n = s("448993"),
  r = s("299039"),
  u = s("549103"),
  o = s("567054");
let d = o.MAX_RESULTS_PER_PAGE * o.MAX_VISIBLE_PAGES;

function c(e) {
  let {
    guildId: t,
    guildJoinRequests: s
  } = e, l = a.useRef(!1), [c, E] = a.useState(null), I = a.useRef(null), f = a.useRef(!1), T = a.useCallback(async (e, a) => {
    if (l.current) return;
    let T = "".concat(e, "-").concat(a),
      R = !1;
    if (T !== I.current && (I.current = T, f.current = !1, R = !0), f.current) return;
    null != c && E(null);
    let S = function(e, t, s, a) {
      let l = s === o.GuildJoinRequestApplicationStatuses.SUBMITTED;
      if (t === o.GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
        if (a) {
          let e = r.default.fromTimestamp(new Date().getTime());
          return {
            before: e
          }
        } {
          let t = e[e.length - 1],
            s = l ? t.id : t.actionedAt;
          return {
            before: s
          }
        }
      }
      if (a) {
        let e = r.default.fromTimestamp(i().subtract(180, "days").valueOf());
        return {
          after: e
        }
      } {
        let t = e[e.length - 1],
          s = l ? t.id : t.actionedAt;
        return {
          after: s
        }
      }
    }(s, e, a, R);
    try {
      l.current = !0;
      let e = await u.default.fetchGuildJoinRequests({
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
    } catch (t) {
      let e = new n.APIError(t);
      E(e.getAnyErrorMessage())
    } finally {
      l.current = !1
    }
  }, [c, t, s]);
  return {
    fetchNextPage: T,
    error: c
  }
}