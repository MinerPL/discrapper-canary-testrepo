"use strict";
n.r(t), n.d(t, {
  DEFAULT_CONTENT_ROW_HEIGHT: function() {
    return R
  },
  getContentRowHeight: function() {
    return y
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("924826"),
  o = n("876215"),
  u = n("442837"),
  d = n("481060"),
  c = n("239091"),
  f = n("607070"),
  h = n("439170"),
  m = n("594174"),
  p = n("687694"),
  E = n("69259"),
  C = n("91140"),
  g = n("227172"),
  S = n("551228"),
  _ = n("678869"),
  T = n("278399"),
  I = n("886217"),
  A = n("555672"),
  N = n("644548"),
  v = n("335326"),
  x = n("268010"),
  M = n("206583");
let R = 72;

function y(e) {
  return (null == e ? void 0 : e.type) === h.MemberListRowTypes.CONTENT_INVENTORY ? R : 0
}
let L = i().throttle(e => {
    (0, E.trackInteraction)(M.ContentInventoryInteractionTypes.CARD_HOVER, e)
  }, 5e3, {
    leading: !0,
    trailing: !1
  }),
  O = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case o.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(C.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(v.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.TOP_GAME:
        return (0, a.jsx)(A.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.TOP_ARTIST:
        return (0, a.jsx)(T.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.LISTENED_SESSION:
        return (0, a.jsx)(S.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  },
  j = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case o.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(g.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(x.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.TOP_GAME:
        return (0, a.jsx)(N.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.TOP_ARTIST:
        return (0, a.jsx)(I.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.LISTENED_SESSION:
        return (0, a.jsx)(_.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  };
t.default = l.memo(e => {
  var t;
  let {
    index: s,
    ...i
  } = e, [o, h] = l.useState("default"), C = (0, r.useListItem)("".concat(s)), g = null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(), S = {
    entry: i.entry,
    channelId: i.channel.id,
    guildId: i.channel.guild_id,
    requestId: i.requestId
  }, {
    openOnHover: _
  } = (0, p.useMemberListHoverInteractions)({
    location: "MemberListContentRow"
  }), T = l.useRef(!1), [I, A] = l.useState(!1), [N, v] = l.useState(!1), [x, R] = l.useState(!1), y = (0, u.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled);
  l.useEffect(() => {
    I && y && R(!0)
  }, [I, y]);
  let P = l.useCallback(e => {
      g && (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("153").then(n.bind(n, "330150"));
        return () => (0, a.jsx)(e, {
          entry: i.entry,
          requestId: i.requestId
        })
      })
    }, [i, g]),
    D = l.useCallback(() => {
      h(String(Date.now()))
    }, []),
    b = () => {
      T.current = !1, setTimeout(() => {
        !T.current && (A(!1), R(y))
      }, 100)
    };
  return (0, a.jsx)("div", {
    onMouseEnter: () => {
      T.current = !0, setTimeout(() => {
        T.current && A(!0), _ && (0, E.trackInteraction)(M.ContentInventoryInteractionTypes.CARD_CLICK, S)
      }, 100)
    },
    onMouseLeave: b,
    children: (0, a.jsx)(d.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, a.jsx)(j, {
          closePopout: t,
          updatePopoutPosition: D,
          ...i
        })
      },
      position: "left",
      shouldShow: _ ? I : N,
      positionKey: o,
      onRequestOpen: () => (0, E.trackInteraction)(M.ContentInventoryInteractionTypes.CARD_CLICK, S),
      onRequestClose: () => {
        x && b(), !_ && (A(!1), v(!1))
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(d.Clickable, {
          onClick: () => {
            _ && !I && A(!0), !_ && v(e => !e)
          },
          children: (0, a.jsx)(d.FocusRing, {
            offset: {
              top: 4,
              bottom: 4,
              left: 4,
              right: 4
            },
            children: (0, a.jsx)("div", {
              ...e,
              ...C,
              onMouseEnter: () => {
                L(S)
              },
              onContextMenu: P,
              children: (0, a.jsx)(O, {
                ...i,
                selected: n
              })
            })
          })
        })
      }
    })
  })
})