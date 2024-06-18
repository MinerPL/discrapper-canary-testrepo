"use strict";
n.d(t, {
  Z: function() {
    return p
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(239091),
  l = n(79712),
  u = n(91159),
  _ = n(496675),
  d = n(306680),
  c = n(974029),
  E = n(446183),
  I = n(677281),
  T = n(880080),
  h = n(709054),
  S = n(765104),
  f = n(477291),
  N = n(478758),
  A = n(789707),
  m = n(981631),
  O = n(531578),
  R = n(561701);

function C(e) {
  let {
    summary: t,
    channel: d,
    members: A,
    guildId: C,
    unread: p,
    onClick: g
  } = e, [L, v] = r.useState(!1), D = (0, u.Ye)(h.default.extractTimestamp(t.startId)), M = (0, s.e7)([S.Z], () => S.Z.summaryFeedback(t)), P = (e, n) => {
    e.stopPropagation(), (0, f.Z)({
      summary: t,
      channel: d,
      rating: n
    })
  }, y = _.Z.can(m.Plq.MANAGE_MESSAGES, d);
  return (0, i.jsxs)(o.Clickable, {
    className: R.container,
    onClick: g,
    onContextMenu: e => {
      y && (0, a.jW)(e, async () => {
        let {
          default: e
        } = await n.e("12891").then(n.bind(n, 519620));
        return n => (0, i.jsx)(e, {
          ...n,
          summary: t
        })
      })
    },
    onMouseEnter: () => v(!0),
    onMouseLeave: () => v(!1),
    children: [(0, i.jsx)(T.Z, {
      hovered: L,
      unread: p,
      className: R.unreadPill
    }), (0, i.jsx)("div", {
      className: R.rowHeader,
      children: (0, i.jsxs)("div", {
        className: R.rowHeaderLeft,
        children: [(0, i.jsx)(o.Text, {
          className: R.timestamp,
          color: "interactive-normal",
          variant: "text-xs/normal",
          children: D
        }), (0, i.jsx)(l.Z, {
          height: 4,
          width: 4,
          "aria-hidden": "true",
          className: R.dot
        }), (0, i.jsx)(c.Z, {
          height: 12,
          width: 12,
          className: R.icon
        }), (0, i.jsx)(o.Text, {
          className: R.count,
          color: "interactive-normal",
          variant: "text-xs/normal",
          children: t.count
        }), A.length > 0 && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(l.Z, {
            height: 4,
            width: 4,
            "aria-hidden": "true",
            className: R.dot
          }), (0, i.jsx)(N.Z, {
            partySize: {
              knownSize: A.length,
              totalSize: A.length
            },
            maxAvatarsShown: 3,
            members: A,
            guildId: C
          })]
        })]
      })
    }), L && !M && (0, i.jsxs)("div", {
      className: R.feedbackContainer,
      children: [(0, i.jsx)(o.Clickable, {
        onClick: e => P(e, O.aZ.GOOD),
        children: (0, i.jsx)(I.Z, {
          className: R.thumbIcon,
          width: 12,
          height: 12
        })
      }), (0, i.jsx)(o.Clickable, {
        onClick: e => P(e, O.aZ.BAD),
        children: (0, i.jsx)(E.Z, {
          className: R.thumbIcon,
          width: 12,
          height: 12
        })
      })]
    }), (0, i.jsx)(o.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      className: R.title,
      children: t.topic
    }), (0, i.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: R.subtitle,
      children: t.summShort
    })]
  })
}

function p(e) {
  let {
    summaries: t,
    summariesMembers: n,
    channel: o,
    selectTopic: a,
    setOpen: l
  } = e, u = (0, s.e7)([d.ZP], () => d.ZP.getOldestUnreadMessageId(o.id)), _ = r.useCallback(e => {
    a(e), l(!1)
  }, [a, l]);
  return t.length < 1 ? (0, i.jsx)(A.Z, {}) : (0, i.jsx)(i.Fragment, {
    children: t.map((e, t) => {
      var r;
      let s = null !== (r = n[t]) && void 0 !== r ? r : [];
      return (0, i.jsx)(C, {
        summary: e,
        channel: o,
        members: s,
        guildId: o.guild_id,
        unread: null != u && h.default.compare(e.endId, u) > 0,
        onClick: () => _(t)
      }, t)
    })
  })
}