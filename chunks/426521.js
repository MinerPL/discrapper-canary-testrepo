"use strict";
n.r(t), n.d(t, {
  ForYouItems: function() {
    return U
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("481060"),
  i = n("99690"),
  r = n("906732"),
  o = n("336197"),
  u = n("454585"),
  d = n("171368"),
  c = n("695346"),
  f = n("598077"),
  E = n("594174"),
  _ = n("626135"),
  T = n("709054"),
  m = n("591759"),
  I = n("833592"),
  p = n("497089"),
  h = n("178480"),
  N = n("418316"),
  S = n("526146"),
  C = n("400565"),
  A = n("148789"),
  g = n("11825"),
  M = n("981631"),
  R = n("689938"),
  O = n("533342"),
  v = n("756688"),
  L = n("886765");

function x(e) {
  var t, n, a;
  let {
    item: r
  } = e, o = null === (t = r.message) || void 0 === t ? void 0 : t.content;
  if (null == o) return (0, s.jsx)("div", {});
  let d = null !== (a = E.default.getUser(null === (n = r.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== a ? a : new f.default(r.other_user),
    c = u.default.parse(o);
  return (0, s.jsxs)("div", {
    className: O.messagePreviewContainer,
    children: [(0, s.jsx)(i.default, {
      user: d,
      size: l.AvatarSizes.SIZE_24
    }), (0, s.jsx)(l.Text, {
      className: O.messagePreviewText,
      variant: "text-sm/normal",
      lineClamp: 2,
      children: c
    })]
  })
}

function D(e) {
  let {
    item: {
      callout: t
    }
  } = e;
  if (null == t) return null;
  let n = u.default.parse(t);
  return (0, s.jsx)("div", {
    className: O.calloutContainer,
    children: (0, s.jsx)(l.Text, {
      variant: "text-sm/normal",
      lineClamp: 2,
      children: n
    })
  })
}

function P(e) {
  let {
    item: t
  } = e, n = L, a = R.default.Messages.NOTIFICATION_CENTER_TODO;
  return t.completed && (n = v, a = R.default.Messages.NOTIFICATION_CENTER_DONE), (0, s.jsxs)("div", {
    className: O.lifecycleContainer,
    children: [(0, s.jsx)("img", {
      className: O.checkbox,
      alt: "",
      src: n
    }), (0, s.jsx)(l.Text, {
      className: O.lifecycleText,
      variant: "text-xs/bold",
      color: "header-secondary",
      children: a
    })]
  })
}
let y = a.memo(function(e) {
    var t;
    let {
      item: i,
      ackedBeforeId: c
    } = e, {
      analyticsLocations: f
    } = (0, r.default)(), E = (0, S.useNotificationCenterItemAcked)(i, c), R = a.useCallback(async () => {
      if (!E && (0, I.markNotificationCenterItemAcked)(i), null != i.item_enum && i.item_enum === p.ItemEnum.FIND_FRIENDS) {
        (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("6074")]).then(n.bind(n, "443189"));
          return t => (0, s.jsx)(e, {
            source: "Notification Center",
            ...t
          })
        });
        return
      }
      if (null != i.deeplink) {
        let t = m.default.safeParseWithQuery(i.deeplink);
        if (null == t) return;
        let n = t.hostname,
          s = t.path;
        if (null == n || null == s) return;
        if (m.default.isDiscordHostname(n)) {
          let t = s.match("^/users/(\\d+)");
          if (null != t && 2 === t.length) {
            var e;
            (0, d.openUserProfileModal)({
              userId: t[1],
              messageId: null === (e = i.message) || void 0 === e ? void 0 : e.id,
              sourceAnalyticsLocations: f,
              analyticsLocation: {
                section: M.AnalyticsSections.NOTIFICATION_CENTER
              }
            })
          } else await (0, o.default)(s)
        }
        _.default.track(M.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
          action_type: p.NotificationCenterActionTypes.CLICKED,
          notification_center_id: i.id,
          item_type: i.type,
          acked: E
        })
      }
    }, [i, E, f]), v = null;
    i.type === p.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && null != i.other_user && (v = (0, s.jsx)(A.default, {
      userId: i.other_user.id
    }));
    let L = null != i.local_id,
      y = (0, N.default)(i);
    return (0, s.jsxs)("div", {
      className: O.row,
      children: [(0, s.jsxs)(l.ClickableContainer, {
        className: O.rowContent,
        focusProps: {
          offset: 4
        },
        "aria-label": y,
        onClick: R,
        children: [E ? null : (0, s.jsx)("div", {
          className: O.unread
        }), (0, s.jsx)(C.ForYouItemImage, {
          item: i
        }), (0, s.jsxs)("div", {
          className: O.body,
          children: ["lifecycle_item" === i.type && null != i.item_enum && (0, s.jsx)(P, {
            item: i
          }), (0, s.jsx)(l.Text, {
            variant: "text-md/normal",
            color: E ? "text-muted" : "text-normal",
            children: u.default.parse(y)
          }), (null === (t = i.message) || void 0 === t ? void 0 : t.content) != null ? (0, s.jsx)(x, {
            item: i
          }) : null, null != i.callout ? (0, s.jsx)(D, {
            item: i
          }) : null, (0, s.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: E ? "text-muted" : "header-secondary",
            children: (0, h.getRelativeTimestamp)(T.default.extractTimestamp(i.id))
          }), v]
        })]
      }), L ? null : (0, s.jsx)(g.MoreButton, {
        item: i
      })]
    })
  }),
  U = a.memo(function(e) {
    let {
      items: t
    } = e, n = c.NotificationCenterAckedBeforeId.useSetting();
    return (0, s.jsx)(s.Fragment, {
      children: t.map(e => (0, s.jsx)(y, {
        item: e,
        ackedBeforeId: n
      }, e.id))
    })
  })