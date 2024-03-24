"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("65597"),
  o = n("77078"),
  u = n("462579"),
  d = n("266926"),
  c = n("599110"),
  f = n("299039"),
  E = n("822825"),
  h = n("117933"),
  _ = n("671088"),
  C = n("368874"),
  S = n("648750"),
  I = n("710514"),
  m = n("339853"),
  p = n("775032"),
  T = n("25132"),
  g = n("453479"),
  A = n("975344"),
  N = n("57"),
  R = n("863972"),
  O = n("884706"),
  v = n("424373"),
  L = n("922832"),
  M = n("49111"),
  P = n("782340"),
  y = n("676899");

function D() {
  let e = s.useCallback(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("538969").then(n.bind(n, "538969"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  }, []);
  return (0, a.jsx)(o.Clickable, {
    className: y.tooltip,
    onClick: e,
    children: (0, a.jsx)(d.default, {
      className: y.icon,
      width: 15,
      height: 15
    })
  })
}

function x(e) {
  let {
    displayType: t
  } = e, n = s.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(P.default.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE))
  }, []), l = (0, p.default)(), r = (0, I.useActionsForDisplayType)(t), u = (0, I.useActionTotalsForDisplayType)(t), {
    loadMore: d,
    isMoreLoading: c
  } = (0, S.useFamilyCenterActions)({
    onError: n
  }), E = L.ACTION_TO_TEXT.get(t), [C, m] = s.useState(L.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), T = (0, _.useIsEligibleForFamilyCenterVCJoin)({
    location: "family_center_activity_section_web"
  }), g = s.useCallback(() => {
    m(e => e + L.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), d(t)
  }, [t, d]);
  i(E, "No text for action type");
  let R = E.sectionHeader(u),
    O = s.useCallback(e => {
      let {
        row: t
      } = e, n = r[t];
      return (0, h.isUserAction)(n) ? (0, a.jsx)(N.default, {
        userId: n.entity_id,
        timestamp: f.default.extractTimestamp(n.event_id),
        timestampFormatter: E.timestampFormatter
      }, n.event_id) : (0, h.isGuildAction)(n) ? (0, a.jsx)(A.default, {
        guildId: n.entity_id
      }, n.event_id) : void 0
    }, [r, E.timestampFormatter]),
    v = s.useCallback(() => (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.Text, {
        className: y.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: R
      }), void 0 !== E.sectionDescription ? (0, a.jsx)(o.Text, {
        className: y.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: E.sectionDescription(null != l && l, T)
      }) : null]
    }), [R, E, l, T]);
  if (0 === r.length) return null;
  let M = r.slice(0, C);
  return (0, a.jsxs)("div", {
    className: y.actionSection,
    children: [v(), (0, a.jsx)("div", {
      className: y.actions,
      style: {
        maxHeight: 65 * M.length
      },
      children: M.map((e, t) => O({
        row: t
      }))
    }), M.length !== u ? (0, a.jsx)(o.Clickable, {
      className: y.loadMoreBar,
      onClick: g,
      role: "button",
      children: c ? (0, a.jsx)(o.Spinner, {
        type: o.Spinner.Type.PULSING_ELLIPSIS,
        className: y.spinner
      }) : (0, a.jsx)(o.Text, {
        className: y.loadMore,
        variant: "text-sm/bold",
        children: P.default.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
          pageSize: Math.min(u - M.length, L.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS)
        })
      })
    }) : null]
  })
}
let b = () => {
    let e = (0, p.default)(),
      t = (0, T.useUserForLinkStatus)(L.UserLinkStatus.ACTIVE),
      n = (0, C.useAgeSpecificText)(P.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
        activeLinks: t.length
      }), P.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
      s = (0, h.getActivityWindowTimestampFormatter)(!!e),
      l = (0, T.useActivityWindowTimeStamp)(s);
    return e && t.length > 1 ? (0, a.jsx)(o.Text, {
      variant: "eyebrow",
      children: l
    }) : (0, a.jsxs)(a.Fragment, {
      children: [e ? null : (0, a.jsx)(u.default, {
        className: y.icon
      }), (0, a.jsx)(o.Text, {
        variant: "eyebrow",
        children: n
      })]
    })
  },
  U = e => {
    let {
      userId: t,
      subText: n,
      avatarSize: s = o.AvatarSizes.SIZE_40
    } = e, l = (0, m.useTeenUserForId)(t);
    return void 0 === l ? null : (0, a.jsxs)("div", {
      className: y.accountRow,
      children: [(0, a.jsx)(R.FamilyCenterAvatar, {
        user: l,
        avatarSize: s
      }), (0, a.jsxs)("div", {
        className: y.headerText,
        children: [(0, a.jsx)(O.default, {
          user: l
        }), void 0 !== n ? (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  },
  G = () => {
    let e = (0, T.useUserForLinkStatus)(L.UserLinkStatus.ACTIVE),
      t = (0, r.useStateFromStores)([E.default], () => E.default.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, S.useFamilyCenterActions)({}),
      l = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      i = s.useCallback(e => (0, a.jsx)(U, {
        userId: e.value,
        avatarSize: o.AvatarSizes.SIZE_24
      }), []);
    return (0, a.jsx)(o.Select, {
      className: y.select,
      renderOptionLabel: i,
      renderOptionValue: e => {
        let [t] = e;
        return i(t)
      },
      serialize: e => e,
      select: e => {
        n(e), c.default.track(M.AnalyticEvents.FAMILY_CENTER_ACTION, {
          action: L.FamilyCenterAction.SelectTeen
        })
      },
      isSelected: e => e === t,
      options: l
    })
  },
  j = e => {
    let {
      userId: t
    } = e, n = (0, p.default)(), s = (0, T.useUserForLinkStatus)(L.UserLinkStatus.ACTIVE), l = (0, h.getActivityWindowTimestampFormatter)(!!n), i = (0, T.useActivityWindowTimeStamp)(l);
    return n && 1 !== s.length ? (0, a.jsx)(G, {}) : (0, a.jsx)(U, {
      userId: t,
      subText: i
    })
  };
var w = e => {
  let {
    user: t
  } = e, n = Array.from(L.ACTION_TO_TEXT.entries()), s = (0, I.useHasActionForAnyDisplayType)(), l = (0, h.getEmptyActivityFormatter)(), i = (0, T.useActivityWindowTimeStamp)(l);
  return (0, a.jsxs)("div", {
    className: y.container,
    children: [(0, a.jsxs)("div", {
      className: y.connectedCounter,
      children: [(0, a.jsx)(b, {}), (0, a.jsx)(D, {})]
    }), (0, a.jsxs)("div", {
      className: y.card,
      children: [(0, a.jsx)("div", {
        className: y.header,
        children: (0, a.jsx)(j, {
          userId: t.id
        })
      }), (0, a.jsxs)("div", {
        className: y.content,
        children: [(0, a.jsx)("div", {
          className: y.activityCounterRow,
          children: n.map(e => {
            let [t, n] = e;
            return (0, a.jsx)(g.default, {
              displayType: t,
              header: n.tooltipHeader()
            }, "counter-".concat(t))
          })
        }), (0, a.jsx)("div", {
          className: y.activityOverview,
          children: s ? n.map(e => {
            let [t] = e;
            return (0, a.jsx)(x, {
              displayType: t
            }, "".concat(t, "-list"))
          }) : (0, a.jsx)(v.default, {
            className: y.emptyActivity,
            text: null != i ? i : ""
          })
        })]
      })]
    })]
  })
}