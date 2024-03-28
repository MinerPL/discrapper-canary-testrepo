    "use strict";
    e.r(r), e("47120"), e("653041"), e("312677"), e("411104");
    var n = e("658722"),
      o = e.n(n),
      i = e("954955"),
      u = e.n(i),
      c = e("226951"),
      a = e("624138"),
      s = e("620490");
    let f = {
        UPDATE_USERS: "UPDATE_USERS",
        USER_RESULTS: "USER_RESULTS",
        QUERY_SET: "QUERY_SET",
        QUERY_CLEAR: "QUERY_CLEAR"
      },
      l = new Map,
      p = new Map,
      d = new Set,
      v = "username",
      h = "friendNickname",
      g = "globalName",
      y = u()(() => {
        0 !== d.size && (d.forEach(t => {
          let r = p.get(t);
          null != r && b(t, r)
        }), d.clear())
      }, 100, {
        leading: !0,
        trailing: !0
      });

    function E(t, r) {
      return t * (null != r ? r : 1)
    }

    function b(t, r) {
      var e, n;
      let {
        query: i,
        limit: u,
        filters: f,
        blacklist: p,
        whitelist: d
      } = r, y = null != f && f.strict && null !== (e = f.guild) && void 0 !== e ? e : null, b = null !== (n = r.boosters) && void 0 !== n ? n : {}, S = RegExp("^".concat(c.default.escape(i)), "i"), x = RegExp(c.default.escape(i), "i"), w = [];
      if ("" === i) return m(i, w, t);
      let O = i.toLocaleLowerCase(),
        R = (0, a.normalize)(O);
      l.forEach((t, r) => {
        let e;
        if (! function(t, r, e, n, o) {
            if (null != n && n.indexOf(t) >= 0) return !1;
            if (null != o && o.indexOf(t) >= 0) return !0;
            if (null != e) {
              let {
                friends: t,
                guild: n
              } = e;
              return !0 === t && !0 === r.isFriend || null != n && (null != r[n] || null === r[n]) || !1
            }
            return !0
          }(r, t, f, p, d)) return;
        let {
          username: n
        } = t;
        r === i ? e = {
          id: r,
          username: n,
          comparator: r,
          score: E(10, b[r])
        } : Object.keys(t).forEach(i => {
          let u;
          let c = t[i];
          if ("boolean" == typeof c || null == c || null != y && i !== v && i !== h && i !== g && y !== i) return;
          let s = (0, a.stripDiacritics)(c.toLocaleLowerCase());
          S.test(c) ? u = {
            comparator: c,
            score: E(10, b[r])
          } : x.test(c) ? u = {
            comparator: c,
            score: E(5, b[r])
          } : o()(O, s) ? u = {
            comparator: c,
            score: E(1, b[r])
          } : o()(R, (0, a.normalize)(s)) && (u = {
            comparator: c,
            score: E(1, b[r])
          }), null != u && (null == e || e.score < u.score) && (e = {
            ...u,
            id: r,
            username: n
          })
        }), null != e && w.push(e)
      }), w.sort(s.default), w.length > u && (w.length = u), m(i, w, t)
    }

    function m(t, r, e) {
      let n = {
        type: f.USER_RESULTS,
        uuid: e,
        payload: {
          query: t,
          results: r
        }
      };
      self.postMessage(n)
    }
    self.addEventListener("message", t => {
      let {
        data: r
      } = t;
      if (null == r || null == r.type) throw Error("Invalid data");
      switch (r.type) {
        case f.UPDATE_USERS:
          return function(t) {
            let {
              payload: r
            } = t, e = !1, n = new Set;
            r.forEach(t => {
              var r;
              let {
                id: o,
                ...i
              } = t, u = null !== (r = l.get(o)) && void 0 !== r ? r : null, c = {
                ...u,
                ...i
              };
              l.set(o, c), p.size > 0 && ((c.isFriend !== (null == u ? void 0 : u.isFriend) || c.friendNickname !== (null == u ? void 0 : u.friendNickname)) && (e = !0), Object.keys(c).forEach(t => {
                "isBot" !== t && "isFriend" !== t && t !== v && t !== h && t !== g && n.add(t)
              }))
            }), p.forEach((t, r) => {
              let {
                filters: o
              } = t;
              (null == o || o.friends === e || n.has(o.guild)) && d.add(r)
            }), y()
          }(r);
        case f.QUERY_SET:
          return function(t) {
            let {
              uuid: r,
              payload: e
            } = t;
            p.set(r, e), b(r, e)
          }(r);
        case f.QUERY_CLEAR:
          return function(t) {
            let {
              uuid: r
            } = t;
            p.delete(r), d.delete(r), 0 === d.size && y.cancel()
          }(r)
      }
    })