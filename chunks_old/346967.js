"use strict";
n.r(t), n.d(t, {
  DEFAULT_CONTENT_ROW_HEIGHT: function() {
    return g
  },
  getContentRowHeight: function() {
    return S
  },
  default: function() {
    return T
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("917351"),
  i = n.n(s),
  r = n("974667"),
  u = n("901803"),
  o = n("77078"),
  d = n("19766"),
  c = n("773808"),
  f = n("356980"),
  h = n("998268"),
  m = n("55413"),
  p = n("652905"),
  E = n("709377");
let g = 72;

function S(e) {
  return (null == e ? void 0 : e.type) === d.MemberListRowTypes.CONTENT_INVENTORY ? g : 0
}
let C = i.throttle(e => {
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
      case u.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(f.default, {
          ...n,
          entry: t
        });
      case u.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(m.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  },
  I = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case u.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(h.default, {
          ...n,
          entry: t
        });
      case u.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(p.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  };
var T = l.memo(e => {
  let {
    index: t,
    ...n
  } = e, l = (0, r.useListItem)("".concat(t)), s = {
    entry: n.entry,
    channelId: n.channel.id,
    guildId: n.channel.guild_id,
    requestId: n.requestId
  };
  return (0, a.jsx)(o.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(I, {
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
      return (0, a.jsx)(o.FocusRing, {
        offset: {
          top: 4,
          bottom: 4,
          left: 4,
          right: 4
        },
        children: (0, a.jsx)("div", {
          ...e,
          ...l,
          onMouseEnter: () => C(s),
          children: (0, a.jsx)(_, {
            ...n,
            selected: i
          })
        })
      })
    }
  })
})