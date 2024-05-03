"use strict";
n.r(t), n.d(t, {
  DEFAULT_CONTENT_ROW_HEIGHT: function() {
    return I
  },
  getContentRowHeight: function() {
    return A
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("924826"),
  o = n("876215"),
  u = n("481060"),
  d = n("239091"),
  c = n("439170"),
  f = n("594174"),
  h = n("687694"),
  m = n("69259"),
  p = n("91140"),
  E = n("227172"),
  C = n("555672"),
  g = n("644548"),
  S = n("335326"),
  _ = n("268010"),
  T = n("206583");
let I = 72;

function A(e) {
  return (null == e ? void 0 : e.type) === c.MemberListRowTypes.CONTENT_INVENTORY ? I : 0
}
let N = i().throttle(e => {
    (0, m.trackInteraction)(T.ContentInventoryInteractionTypes.CARD_HOVER, e)
  }, 5e3, {
    leading: !0,
    trailing: !1
  }),
  v = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case o.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(p.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(S.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.TOP_GAME:
        return (0, a.jsx)(C.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  },
  x = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case o.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(E.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(_.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.TOP_GAME:
        return (0, a.jsx)(g.default, {
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
  } = e, [o, c] = l.useState("default"), p = (0, r.useListItem)("".concat(s)), E = null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(), C = {
    entry: i.entry,
    channelId: i.channel.id,
    guildId: i.channel.guild_id,
    requestId: i.requestId
  }, {
    openOnHover: g
  } = (0, h.useMemberListHoverInteractions)({
    location: "MemberListContentRow"
  }), S = l.useRef(!1), [_, I] = l.useState(!1), [A, M] = l.useState(!1), R = l.useCallback(e => {
    E && (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("153").then(n.bind(n, "330150"));
      return () => (0, a.jsx)(e, {
        entry: i.entry,
        requestId: i.requestId
      })
    })
  }, [i, E]), L = l.useCallback(() => {
    c(String(Date.now()))
  }, []);
  return (0, a.jsx)("div", {
    onMouseEnter: () => {
      S.current = !0, setTimeout(() => {
        S.current && I(!0), g && (0, m.trackInteraction)(T.ContentInventoryInteractionTypes.CARD_CLICK, C)
      }, 100)
    },
    onMouseLeave: () => {
      S.current = !1, setTimeout(() => {
        !S.current && I(!1)
      }, 100)
    },
    children: (0, a.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, a.jsx)(x, {
          closePopout: t,
          updatePopoutPosition: L,
          ...i
        })
      },
      position: "left",
      shouldShow: g ? _ : A,
      positionKey: o,
      onRequestOpen: () => (0, m.trackInteraction)(T.ContentInventoryInteractionTypes.CARD_CLICK, C),
      onRequestClose: () => {
        I(!1), M(!1)
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(u.Clickable, {
          onClick: () => {
            g && !_ && I(!0), M(e => !e)
          },
          children: (0, a.jsx)(u.FocusRing, {
            offset: {
              top: 4,
              bottom: 4,
              left: 4,
              right: 4
            },
            children: (0, a.jsx)("div", {
              ...e,
              ...p,
              onMouseEnter: () => {
                N(C)
              },
              onContextMenu: R,
              children: (0, a.jsx)(v, {
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