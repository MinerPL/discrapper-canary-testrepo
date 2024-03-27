"use strict";
t.r(s), t.d(s, {
  default: function() {
    return I
  }
}), t("222007");
var a = t("37983"),
  l = t("884691"),
  i = t("414456"),
  n = t.n(i),
  d = t("817736"),
  r = t.n(d),
  c = t("77078"),
  o = t("660279"),
  u = t("593195"),
  h = t("782340"),
  x = t("349072"),
  N = t("406617"),
  I = l.forwardRef(function(e, s) {
    let {} = e, [i, n] = l.useState("before"), [d, u] = l.useState(!1), [I, f] = l.useState(!1);
    l.useImperativeHandle(s, () => ({
      maybeChangeToAfterTab: () => (!I && v("after"), I)
    }));
    let v = l.useCallback(e => {
      u(!0), setTimeout(() => {
        r.unstable_batchedUpdates(() => {
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
          className: N.subtitle,
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
            onClick: () => v("before"),
            children: (0, a.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "before" === i ? "header-primary" : "text-muted",
              children: h.default.Messages.NOTIF_MIGRATION_INTRO_BEFORE
            })
          }), (0, a.jsx)(c.Clickable, {
            className: x.tab,
            onClick: () => v("after"),
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
                src: t("228034"),
                width: 36,
                height: 36,
                alt: "Example Guild Icon"
              })
            }), (0, a.jsx)("div", {
              className: "after" === i ? x.guild : x.unreadGuild,
              children: (0, a.jsx)("img", {
                src: t("718023"),
                width: 36,
                height: 36,
                alt: "Example Guild Icon"
              })
            }), (0, a.jsx)("div", {
              className: "after" === i ? x.guild : x.unreadGuild,
              children: (0, a.jsx)("img", {
                src: t("729558"),
                width: 36,
                height: 36,
                alt: "Example Guild Icon"
              })
            })]
          }), (0, a.jsxs)("div", {
            className: x.channels,
            children: [(0, a.jsx)(m, {
              mention: !0,
              name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
            }), (0, a.jsx)(m, {
              name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
            }), (0, a.jsx)(m, {
              grey: "after" === i,
              name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
            }), (0, a.jsx)(m, {
              grey: "after" === i,
              name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
            }), (0, a.jsx)(m, {
              name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
            }), (0, a.jsx)(m, {
              grey: "after" === i,
              name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
            }), (0, a.jsx)(m, {
              grey: "after" === i,
              name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
            })]
          })]
        }), (0, a.jsx)(T, {
          hidden: d || "after" === i,
          className: x.tipBefore1,
          text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE1
        }), (0, a.jsx)(T, {
          hidden: d || "after" === i,
          className: x.tipBefore2,
          text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE2
        }), (0, a.jsx)(T, {
          hidden: d || "before" === i,
          className: x.tipAfter1,
          text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER1
        }), (0, a.jsx)(T, {
          hidden: d || "before" === i,
          className: x.tipAfter2,
          text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER2
        })]
      })]
    })
  });

function T(e) {
  let {
    text: s,
    className: t,
    hidden: l
  } = e;
  return (0, a.jsxs)("div", {
    className: n(t, x.tip, {
      [x.hidden]: l
    }),
    children: [(0, a.jsx)(c.Text, {
      className: x.tipText,
      variant: "text-sm/normal",
      color: "text-secondary",
      children: s
    }), (0, a.jsx)("div", {
      className: x.tipLine
    })]
  })
}

function m(e) {
  let {
    grey: s,
    mention: t,
    name: l
  } = e;
  return (0, a.jsxs)("div", {
    className: n(x.channel, {
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