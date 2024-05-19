"use strict";
t.r(s), t("47120");
var a = t("735250"),
  l = t("470079"),
  i = t("120356"),
  n = t.n(i),
  d = t("699581"),
  r = t.n(d),
  c = t("481060"),
  o = t("808602"),
  u = t("93879"),
  h = t("689938"),
  x = t("878163"),
  N = t("351109");

function I(e) {
  let {
    text: s,
    className: t,
    hidden: l
  } = e;
  return (0, a.jsxs)("div", {
    className: n()(t, x.tip, {
      [x.hidden]: l
    }),
    children: [(0, a.jsx)(c.Text, {
      className: x.__invalid_tipText,
      variant: "text-sm/normal",
      color: "text-secondary",
      children: s
    }), (0, a.jsx)("div", {
      className: x.tipLine
    })]
  })
}

function T(e) {
  let {
    grey: s,
    mention: t,
    name: l
  } = e;
  return (0, a.jsxs)("div", {
    className: n()(x.channel, {
      [x.grey]: s,
      [x.mention]: t
    }),
    children: [(0, a.jsx)(u.default, {
      className: x.channelIcon,
      width: 16,
      height: 16
    }), (0, a.jsx)(c.Text, {
      variant: "text-md/medium",
      className: x.channelName,
      children: l
    })]
  })
}
s.default = l.forwardRef(function(e, s) {
  let {} = e, [i, n] = l.useState("before"), [d, u] = l.useState(!1), [m, f] = l.useState(!1);
  l.useImperativeHandle(s, () => ({
    maybeChangeToAfterTab: () => (!m && _("after"), m)
  }));
  let _ = l.useCallback(e => {
    u(!0), setTimeout(() => {
      r().unstable_batchedUpdates(() => {
        "after" === e && f(!0), u(!1), n(e)
      })
    }, 400)
  }, []);
  return (0, a.jsxs)(c.Scroller, {
    className: N.content,
    children: [(0, a.jsxs)("div", {
      className: N.header,
      children: [(0, a.jsx)(o.default, {
        width: 40,
        height: 40
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: h.default.Messages.NOTIF_MIGRATION_INTRO_TITLE
      }), (0, a.jsx)(c.Text, {
        className: N.__invalid_subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: h.default.Messages.NOTIF_MIGRATION_INTRO_SUB_TITLE
      })]
    }), (0, a.jsxs)("div", {
      className: x.container,
      children: [(0, a.jsxs)("div", {
        className: x.tabs,
        children: [(0, a.jsx)("div", {
          className: x.tabBackground,
          style: {
            left: "before" === i ? 0 : "50%"
          }
        }), (0, a.jsx)(c.Clickable, {
          className: x.tab,
          onClick: () => _("before"),
          children: (0, a.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "before" === i ? "header-primary" : "text-muted",
            children: h.default.Messages.NOTIF_MIGRATION_INTRO_BEFORE
          })
        }), (0, a.jsx)(c.Clickable, {
          className: x.tab,
          onClick: () => _("after"),
          children: (0, a.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "after" === i ? "header-primary" : "text-muted",
            children: h.default.Messages.NOTIF_MIGRATION_INTRO_AFTER
          })
        })]
      }), (0, a.jsxs)("div", {
        className: x.previewContainer,
        children: [(0, a.jsxs)("div", {
          className: x.guilds,
          children: [(0, a.jsx)("div", {
            className: x.unreadGuild,
            children: (0, a.jsx)("img", {
              src: t("180681"),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          }), (0, a.jsx)("div", {
            className: "after" === i ? x.guild : x.unreadGuild,
            children: (0, a.jsx)("img", {
              src: t("390115"),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          }), (0, a.jsx)("div", {
            className: "after" === i ? x.guild : x.unreadGuild,
            children: (0, a.jsx)("img", {
              src: t("17840"),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          })]
        }), (0, a.jsxs)("div", {
          className: x.channels,
          children: [(0, a.jsx)(T, {
            mention: !0,
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
          }), (0, a.jsx)(T, {
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
          }), (0, a.jsx)(T, {
            grey: "after" === i,
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
          }), (0, a.jsx)(T, {
            grey: "after" === i,
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
          }), (0, a.jsx)(T, {
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
          }), (0, a.jsx)(T, {
            grey: "after" === i,
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
          }), (0, a.jsx)(T, {
            grey: "after" === i,
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
          })]
        })]
      }), (0, a.jsx)(I, {
        hidden: d || "after" === i,
        className: x.tipBefore1,
        text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE1
      }), (0, a.jsx)(I, {
        hidden: d || "after" === i,
        className: x.tipBefore2,
        text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE2
      }), (0, a.jsx)(I, {
        hidden: d || "before" === i,
        className: x.tipAfter1,
        text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER1
      }), (0, a.jsx)(I, {
        hidden: d || "before" === i,
        className: x.tipAfter2,
        text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER2
      })]
    })]
  })
})