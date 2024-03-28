"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
}), l("47120"), l("724458"), l("653041");
var i = l("735250"),
  a = l("470079"),
  n = l("912370"),
  s = l("477690"),
  r = l("153124"),
  c = l("626135"),
  o = l("463571"),
  d = l("744142"),
  u = l("132871"),
  p = l("147890"),
  _ = l("216547"),
  m = l("57716"),
  f = l("981631"),
  h = l("686911");

function C(e) {
  let {
    collection: t,
    collection: {
      id: l,
      title: C,
      application_directory_collection_items: g
    }
  } = e, [I, A] = a.useState(300), [E, v] = a.useState(4), x = parseFloat(s.default.COLLECTION_LIST_CARD_GAP), R = (0, u.useApplicationDirectoryHistory)(e => e.guildId), T = (0, m.default)({
    collection: t
  });
  a.useEffect(() => {
    function e() {
      var e;
      let t = null === (e = T.current) || void 0 === e ? void 0 : e.offsetWidth,
        l = 1;
      return null == t ? 300 : (t >= 500 && (l = 2), t >= 700 && (l = 3), t >= 1e3 && (l = 4), v(l), (t - (l - 1) * x) / l)
    }
    let t = T.current;
    if (null == t) return;
    let l = new ResizeObserver(() => {
      A(e())
    });
    return A(e()), l.observe(t), () => {
      l.disconnect()
    }
  }, [x, T]);
  let N = (0, r.useUID)();
  return (0, i.jsx)("div", {
    ref: T,
    children: (0, i.jsx)(_.default, {
      header: C,
      headerId: N,
      tileWidth: I,
      tileMargin: x,
      onScroll: e => {
        let {
          tileIndex: t
        } = e, i = g.slice(t, t + E).reduce((e, t) => {
          let {
            type: l,
            application: i
          } = t;
          return l === n.ApplicationDirectoryCollectionItemType.APPLICATION && null != i && e.push(i.id), e
        }, []);
        c.default.track(f.AnalyticEvents.APP_DIRECTORY_COLLECTION_SCROLLED, {
          collection_id: l,
          offset: t,
          results: i,
          guild_id: R
        })
      },
      children: (0, i.jsx)("ul", {
        "aria-labelledby": N,
        className: h.itemsContainer,
        children: g.map(e => {
          let {
            id: t,
            type: a,
            application: s
          } = e;
          if (a === n.ApplicationDirectoryCollectionItemType.APPLICATION && null != s) return (0, i.jsx)("li", {
            style: {
              width: I
            },
            className: h.itemContainer,
            children: (0, i.jsx)(o.default, {
              className: h.seoAnchor,
              href: f.Routes.APPLICATION_DIRECTORY_PROFILE(s.id),
              children: (0, i.jsx)(d.default, {
                application: s,
                onClick: e => {
                  let {
                    mutualGuilds: t
                  } = e;
                  c.default.track(f.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: l,
                    application_id: s.id,
                    guild_id: R,
                    shown_mutual_guilds_count: t.length
                  }), (0, p.goToApplication)({
                    applicationId: s.id
                  })
                },
                animatesOnHover: !0
              })
            })
          }, t)
        })
      })
    })
  })
}