"use strict";
n.r(t), n.d(t, {
  ForYouItems: function() {
    return j
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  i = n("308289"),
  r = n("685665"),
  o = n("537325"),
  u = n("367376"),
  d = n("401642"),
  c = n("845579"),
  f = n("766274"),
  h = n("697218"),
  E = n("599110"),
  m = n("299039"),
  p = n("253981"),
  S = n("352273"),
  g = n("360191"),
  N = n("342176"),
  _ = n("183030"),
  T = n("899779"),
  I = n("778597"),
  C = n("960082"),
  A = n("49111"),
  M = n("782340"),
  v = n("230730"),
  R = n("786948"),
  x = n("780810");

function L(e) {
  var t, n, l;
  let {
    item: r
  } = e, o = null === (t = r.message) || void 0 === t ? void 0 : t.content;
  if (null == o) return (0, a.jsx)("div", {});
  let d = null !== (l = h.default.getUser(null === (n = r.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== l ? l : new f.default(r.other_user),
    c = u.default.parse(o);
  return (0, a.jsxs)("div", {
    className: v.messagePreviewContainer,
    children: [(0, a.jsx)(i.default, {
      user: d,
      size: s.AvatarSizes.SIZE_24
    }), (0, a.jsx)(s.Text, {
      className: v.messagePreviewText,
      variant: "text-sm/normal",
      lineClamp: 2,
      children: c
    })]
  })
}

function O(e) {
  let {
    item: {
      callout: t
    }
  } = e;
  if (null == t) return null;
  let n = u.default.parse(t);
  return (0, a.jsx)("div", {
    className: v.calloutContainer,
    children: (0, a.jsx)(s.Text, {
      variant: "text-sm/normal",
      lineClamp: 2,
      children: n
    })
  })
}

function b(e) {
  let {
    item: t
  } = e, n = x, l = M.default.Messages.NOTIFICATION_CENTER_TODO;
  return t.completed && (n = R, l = M.default.Messages.NOTIFICATION_CENTER_DONE), (0, a.jsxs)("div", {
    className: v.lifecycleContainer,
    children: [(0, a.jsx)("img", {
      className: v.checkbox,
      alt: "",
      src: n
    }), (0, a.jsx)(s.Text, {
      className: v.lifecycleText,
      variant: "text-xs/bold",
      color: "header-secondary",
      children: l
    })]
  })
}
let y = l.memo(function(e) {
    var t;
    let {
      item: i,
      ackedBeforeId: c
    } = e, {
      analyticsLocations: f
    } = (0, r.default)(), h = (0, _.useNotificationCenterItemAcked)(i, c), M = l.useCallback(async () => {
      if (!h && (0, S.markNotificationCenterItemAcked)(i), null != i.item_enum && i.item_enum === g.ItemEnum.FIND_FRIENDS) {
        (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("927960").then(n.bind(n, "927960"));
          return t => (0, a.jsx)(e, {
            source: "Notification Center",
            ...t
          })
        });
        return
      }
      if (null != i.deeplink) {
        let t = p.default.safeParseWithQuery(i.deeplink);
        if (null == t) return;
        let n = t.hostname,
          a = t.path;
        if (null == n || null == a) return;
        if (p.default.isDiscordHostname(n)) {
          let t = a.match("^/users/(\\d+)");
          if (null != t && 2 === t.length) {
            var e;
            (0, d.openUserProfileModal)({
              userId: t[1],
              messageId: null === (e = i.message) || void 0 === e ? void 0 : e.id,
              sourceAnalyticsLocations: f,
              analyticsLocation: {
                section: A.AnalyticsSections.NOTIFICATION_CENTER
              }
            })
          } else await (0, o.default)(a)
        }
        E.default.track(A.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
          action_type: g.NotificationCenterActionTypes.CLICKED,
          notification_center_id: i.id,
          item_type: i.type,
          acked: h
        })
      }
    }, [i, h, f]), R = null;
    i.type === g.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && null != i.other_user && (R = (0, a.jsx)(I.default, {
      userId: i.other_user.id
    }));
    let x = null != i.local_id;
    return (0, a.jsxs)("div", {
      className: v.row,
      children: [(0, a.jsxs)(s.ClickableContainer, {
        className: v.rowContent,
        focusProps: {
          offset: 4
        },
        "aria-label": i.body,
        onClick: M,
        children: [h ? null : (0, a.jsx)("div", {
          className: v.unread
        }), (0, a.jsx)(T.ForYouItemImage, {
          item: i
        }), (0, a.jsxs)("div", {
          className: v.body,
          children: ["lifecycle_item" === i.type && null != i.item_enum && (0, a.jsx)(b, {
            item: i
          }), (0, a.jsx)(s.Text, {
            variant: "text-md/normal",
            color: h ? "text-muted" : "text-normal",
            children: u.default.parse(i.body)
          }), (null === (t = i.message) || void 0 === t ? void 0 : t.content) != null ? (0, a.jsx)(L, {
            item: i
          }) : null, null != i.callout ? (0, a.jsx)(O, {
            item: i
          }) : null, (0, a.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: h ? "text-muted" : "header-secondary",
            children: (0, N.getRelativeTimestamp)(m.default.extractTimestamp(i.id))
          }), R]
        })]
      }), x ? null : (0, a.jsx)(C.MoreButton, {
        item: i
      })]
    })
  }),
  j = l.memo(function(e) {
    let {
      items: t
    } = e, n = c.NotificationCenterAckedBeforeId.useSetting();
    return (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(y, {
        item: e,
        ackedBeforeId: n
      }, e.id))
    })
  })