"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("512722"),
  i = n.n(l),
  r = n("399606"),
  o = n("481060"),
  u = n("794358"),
  d = n("507893"),
  c = n("626135"),
  f = n("709054"),
  E = n("914788"),
  h = n("546791"),
  _ = n("259756"),
  C = n("785681"),
  m = n("985002"),
  S = n("858719"),
  p = n("780985"),
  g = n("880257"),
  I = n("631885"),
  T = n("240351"),
  A = n("792258"),
  N = n("657825"),
  v = n("198952"),
  R = n("329242"),
  O = n("895328"),
  L = n("292352"),
  M = n("981631"),
  y = n("689938"),
  P = n("334611");

function x() {
  let e = s.useCallback(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("66462")]).then(n.bind(n, "756226"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  }, []);
  return (0, a.jsx)(o.Clickable, {
    className: P.tooltip,
    onClick: e,
    children: (0, a.jsx)(d.default, {
      className: P.icon,
      width: 15,
      height: 15
    })
  })
}

function D(e) {
  let {
    displayType: t
  } = e, n = s.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(y.default.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE))
  }, []), l = (0, g.default)(), r = (0, S.useActionsForDisplayType)(t), u = (0, S.useActionTotalsForDisplayType)(t), {
    loadMore: d,
    isMoreLoading: c
  } = (0, m.useFamilyCenterActions)({
    onError: n
  }), E = L.ACTION_TO_TEXT.get(t), [C, p] = s.useState(L.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), I = (0, _.useIsEligibleForFamilyCenterVCJoin)({
    location: "family_center_activity_section_web"
  }), T = s.useCallback(() => {
    p(e => e + L.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), d(t)
  }, [t, d]);
  i()(E, "No text for action type");
  let v = E.sectionHeader(u),
    R = s.useCallback(e => {
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
    O = s.useCallback(() => (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.Text, {
        className: P.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: v
      }), void 0 !== E.sectionDescription ? (0, a.jsx)(o.Text, {
        className: P.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: E.sectionDescription(null != l && l, I)
      }) : null]
    }), [v, E, l, I]);
  if (0 === r.length) return null;
  let M = r.slice(0, C);
  return (0, a.jsxs)("div", {
    className: P.actionSection,
    children: [O(), (0, a.jsx)("div", {
      className: P.actions,
      style: {
        maxHeight: 65 * M.length
      },
      children: M.map((e, t) => R({
        row: t
      }))
    }), M.length !== u ? (0, a.jsx)(o.Clickable, {
      className: P.loadMoreBar,
      onClick: T,
      role: "button",
      children: c ? (0, a.jsx)(o.Spinner, {
        type: o.Spinner.Type.PULSING_ELLIPSIS,
        className: P.spinner
      }) : (0, a.jsx)(o.Text, {
        className: P.loadMore,
        variant: "text-sm/bold",
        children: y.default.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
          pageSize: Math.min(u - M.length, L.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS)
        })
      })
    }) : null]
  })
}
let b = () => {
    let e = (0, g.default)(),
      t = (0, I.useUserForLinkStatus)(L.UserLinkStatus.ACTIVE),
      n = (0, C.useAgeSpecificText)(y.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
        activeLinks: t.length
      }), y.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
      s = (0, h.getActivityWindowTimestampFormatter)(!!e),
      l = (0, I.useActivityWindowTimeStamp)(s);
    return e && t.length > 1 ? (0, a.jsx)(o.Text, {
      variant: "eyebrow",
      children: l
    }) : (0, a.jsxs)(a.Fragment, {
      children: [e ? null : (0, a.jsx)(u.default, {
        className: P.icon
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
    } = e, l = (0, p.useTeenUserForId)(t);
    return void 0 === l ? null : (0, a.jsxs)("div", {
      className: P.accountRow,
      children: [(0, a.jsx)(v.FamilyCenterAvatar, {
        user: l,
        avatarSize: s
      }), (0, a.jsxs)("div", {
        className: P.headerText,
        children: [(0, a.jsx)(R.default, {
          user: l
        }), void 0 !== n ? (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  },
  j = () => {
    let e = (0, I.useUserForLinkStatus)(L.UserLinkStatus.ACTIVE),
      t = (0, r.useStateFromStores)([E.default], () => E.default.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, m.useFamilyCenterActions)({}),
      l = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      i = s.useCallback(e => (0, a.jsx)(U, {
        userId: e.value,
        avatarSize: o.AvatarSizes.SIZE_24
      }), []);
    return (0, a.jsx)(o.Select, {
      className: P.select,
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
  G = e => {
    let {
      userId: t
    } = e, n = (0, g.default)(), s = (0, I.useUserForLinkStatus)(L.UserLinkStatus.ACTIVE), l = (0, h.getActivityWindowTimestampFormatter)(!!n), i = (0, I.useActivityWindowTimeStamp)(l);
    return n && 1 !== s.length ? (0, a.jsx)(j, {}) : (0, a.jsx)(U, {
      userId: t,
      subText: i
    })
  };
t.default = e => {
  let {
    user: t
  } = e, n = Array.from(L.ACTION_TO_TEXT.entries()), s = (0, S.useHasActionForAnyDisplayType)(), l = (0, h.getEmptyActivityFormatter)(), i = (0, I.useActivityWindowTimeStamp)(l);
  return (0, a.jsxs)("div", {
    className: P.container,
    children: [(0, a.jsxs)("div", {
      className: P.connectedCounter,
      children: [(0, a.jsx)(b, {}), (0, a.jsx)(x, {})]
    }), (0, a.jsxs)("div", {
      className: P.card,
      children: [(0, a.jsx)("div", {
        className: P.header,
        children: (0, a.jsx)(G, {
          userId: t.id
        })
      }), (0, a.jsxs)("div", {
        className: P.content,
        children: [(0, a.jsx)("div", {
          className: P.activityCounterRow,
          children: n.map(e => {
            let [t, n] = e;
            return (0, a.jsx)(T.default, {
              displayType: t,
              header: n.tooltipHeader()
            }, "counter-".concat(t))
          })
        }), (0, a.jsx)("div", {
          className: P.activityOverview,
          children: s ? n.map(e => {
            let [t] = e;
            return (0, a.jsx)(D, {
              displayType: t
            }, "".concat(t, "-list"))
          }) : (0, a.jsx)(O.default, {
            className: P.emptyActivity,
            text: null != i ? i : ""
          })
        })]
      })]
    })]
  })
}