"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var l = s("735250");
s("470079");
var i = s("730647"),
  r = s("584825"),
  a = s("290348"),
  n = s("934826"),
  d = s("330181"),
  o = s("939225"),
  u = s("36246"),
  c = s("305342"),
  C = s("981631"),
  _ = s("487688");

function f(e) {
  var t;
  let {
    guildId: s
  } = e, i = (0, r.useGroupListingsForGuild)(s)[0], {
    editStateIds: f
  } = a.useEditStateIds(null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null, s), {
    activeSubscription: h
  } = (0, n.default)(null == i ? void 0 : i.id);
  return (0, l.jsxs)("div", {
    className: _.container,
    children: [null != i ? (0, l.jsx)(d.default, {
      groupListingId: i.id,
      subscription: h
    }) : null, (0, l.jsx)(o.default, {
      subscription: h
    }), (0, l.jsx)(u.default, {
      guildId: s,
      children: f.map(e => {
        var t;
        return (0, l.jsx)(c.default, {
          guildId: s,
          groupListingId: null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : "",
          listingId: e,
          analyticsLocation: C.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB
        }, e)
      })
    })]
  })
}

function h(e) {
  let {
    guildId: t
  } = e;
  return (0, l.jsx)(i.GroupListingsFetchContextProvider, {
    guildId: t,
    refetchOnMount: !0,
    children: (0, l.jsx)(f, {
      guildId: t
    })
  })
}