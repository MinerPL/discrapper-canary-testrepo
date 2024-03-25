    "use strict";
    n.r(e), n("222007"), n("424973"), n("854508"), n("70102");
    var r = n("448105"),
      o = n.n(r),
      i = n("483366"),
      u = n.n(i),
      c = n("655518"),
      a = n("159885"),
      l = n("195547");
    let f = {
        UPDATE_USERS: "UPDATE_USERS",
        USER_RESULTS: "USER_RESULTS",
        QUERY_SET: "QUERY_SET",
        QUERY_CLEAR: "QUERY_CLEAR"
      },
      s = new Map,
      p = new Map,
      d = new Set,
      v = "username",
      b = "friendNickname",
      g = "globalName",
      h = u(() => {
        0 !== d.size && (d.forEach(t => {
          let e = p.get(t);
          null != e && m(t, e)
        }), d.clear())
      }, 100, {
        leading: !0,
        trailing: !0
      });

    function y(t, e) {
      return t * (null != e ? e : 1)
    }

    function m(t, e) {
      var n, r;
      let {
        query: i,
        limit: u,
        filters: f,
        blacklist: p,
        whitelist: d
      } = e, h = null != f && f.strict && null !== (n = f.guild) && void 0 !== n ? n : null, m = null !== (r = e.boosters) && void 0 !== r ? r : {}, S = RegExp("^".concat(c.default.escape(i)), "i"), x = RegExp(c.default.escape(i), "i"), j = [];
      if ("" === i) return E(i, j, t);
      let O = i.toLocaleLowerCase(),
        T = (0, a.normalize)(O);
      s.forEach((t, e) => {
        let n;
        if (! function(t, e, n, r, o) {
            if (null != r && r.indexOf(t) >= 0) return !1;
            if (null != o && o.indexOf(t) >= 0) return !0;
            if (null != n) {
              let {
                friends: t,
                guild: r
              } = n;
              return !0 === t && !0 === e.isFriend || null != r && (null != e[r] || null === e[r]) || !1
            }
            return !0
          }(e, t, f, p, d)) return;
        let {
          username: r
        } = t;
        e === i ? n = {
          id: e,
          username: r,
          comparator: e,
          score: y(10, m[e])
        } : Object.keys(t).forEach(i => {
          let u;
          let c = t[i];
          if ("boolean" == typeof c || null == c || null != h && i !== v && i !== b && i !== g && h !== i) return;
          let l = (0, a.stripDiacritics)(c.toLocaleLowerCase());
          S.test(c) ? u = {
            comparator: c,
            score: y(10, m[e])
          } : x.test(c) ? u = {
            comparator: c,
            score: y(5, m[e])
          } : o(O, l) ? u = {
            comparator: c,
            score: y(1, m[e])
          } : o(T, (0, a.normalize)(l)) && (u = {
            comparator: c,
            score: y(1, m[e])
          }), null != u && (null == n || n.score < u.score) && (n = {
            ...u,
            id: e,
            username: r
          })
        }), null != n && j.push(n)
      }), j.sort(l.default), j.length > u && (j.length = u), E(i, j, t)
    }

    function E(t, e, n) {
      let r = {
        type: f.USER_RESULTS,
        uuid: n,
        payload: {
          query: t,
          results: e
        }
      };
      self.postMessage(r)
    }
    self.addEventListener("message", t => {
      let {
        data: e
      } = t;
      if (null == e || null == e.type) throw Error("Invalid data");
      switch (e.type) {
        case f.UPDATE_USERS:
          return function(t) {
            let {
              payload: e
            } = t, n = !1, r = new Set;
            e.forEach(t => {
              var e;
              let {
                id: o,
                ...i
              } = t, u = null !== (e = s.get(o)) && void 0 !== e ? e : null, c = {
                ...u,
                ...i
              };
              s.set(o, c), p.size > 0 && ((c.isFriend !== (null == u ? void 0 : u.isFriend) || c.friendNickname !== (null == u ? void 0 : u.friendNickname)) && (n = !0), Object.keys(c).forEach(t => {
                "isBot" !== t && "isFriend" !== t && t !== v && t !== b && t !== g && r.add(t)
              }))
            }), p.forEach((t, e) => {
              let {
                filters: o
              } = t;
              (null == o || o.friends === n || r.has(o.guild)) && d.add(e)
            }), h()
          }(e);
        case f.QUERY_SET:
          return function(t) {
            let {
              uuid: e,
              payload: n
            } = t;
            p.set(e, n), m(e, n)
          }(e);
        case f.QUERY_CLEAR:
          return function(t) {
            let {
              uuid: e
            } = t;
            p.delete(e), d.delete(e), 0 === d.size && h.cancel()
          }(e)
      }
    })