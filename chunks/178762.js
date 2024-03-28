"use strict";
n.r(t), n.d(t, {
  DEFAULT_CONTENT_ROW_HEIGHT: function() {
    return C
  },
  getContentRowHeight: function() {
    return g
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("924826"),
  o = n("876215"),
  u = n("481060"),
  d = n("439170"),
  c = n("69259"),
  f = n("91140"),
  h = n("227172"),
  m = n("335326"),
  p = n("268010"),
  E = n("206583");
let C = 72;

function g(e) {
  return (null == e ? void 0 : e.type) === d.MemberListRowTypes.CONTENT_INVENTORY ? C : 0
}
let S = i().throttle(e => {
    (0, c.trackInteraction)(E.ContentInventoryInteractionTypes.CARD_HOVER, e)
  }, 5e3, {
    leading: !0,
    trailing: !1
  }),
  _ = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case o.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(f.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(m.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  },
  T = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case o.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(h.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(p.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  };
t.default = l.memo(e => {
  let {
    index: t,
    ...n
  } = e, l = (0, r.useListItem)("".concat(t)), s = {
    entry: n.entry,
    channelId: n.channel.id,
    guildId: n.channel.guild_id,
    requestId: n.requestId
  };
  return (0, a.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(T, {
        closePopout: t,
        ...n
      })
    },
    position: "left",
    onRequestOpen: () => (0, c.trackInteraction)(E.ContentInventoryInteractionTypes.CARD_CLICK, s),
    spacing: 16,
    children: (e, t) => {
      let {
        isShown: i
      } = t;
      return (0, a.jsx)(u.FocusRing, {
        offset: {
          top: 4,
          bottom: 4,
          left: 4,
          right: 4
        },
        children: (0, a.jsx)("div", {
          ...e,
          ...l,
          onMouseEnter: () => S(s),
          children: (0, a.jsx)(_, {
            ...n,
            selected: i
          })
        })
      })
    }
  })
})