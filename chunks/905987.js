"use strict";
t.r(s), t.d(s, {
  default: function() {
    return R
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  i = t("120356"),
  n = t.n(i),
  d = t("442837"),
  r = t("115850"),
  c = t("481060"),
  o = t("430824"),
  u = t("771845"),
  h = t("36082"),
  x = t("808602"),
  N = t("351919"),
  I = t("104624"),
  T = t("259580"),
  m = t("93879"),
  f = t("441674"),
  _ = t("465670"),
  v = t("937482"),
  g = t("318010"),
  j = t("186523"),
  M = t("553826"),
  O = t("689938"),
  C = t("351109"),
  A = t("89189");

function R(e) {
  let {
    count: s
  } = e, [t, i] = l.useState("server");
  return (0, a.jsxs)(c.Scroller, {
    className: C.content,
    children: [(0, a.jsxs)("div", {
      className: n()(C.header, A.header),
      children: [(0, a.jsx)(f.default, {
        width: 40,
        height: 40
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: O.default.Messages.NOTIF_MIGRATION_TIPS_TITLE.format({
          count: s
        })
      }), (0, a.jsx)(c.Text, {
        className: C.__invalid_subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: O.default.Messages.NOTIF_MIGRATION_TIPS_SUB_TITLE
      })]
    }), (0, a.jsxs)("div", {
      className: A.tabs,
      children: [(0, a.jsx)("div", {
        className: A.tabBackground,
        style: {
          left: "server" === t ? 0 : "50%"
        }
      }), (0, a.jsx)(c.Clickable, {
        className: A.tab,
        onClick: () => i("server"),
        children: (0, a.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "server" === t ? "header-primary" : "text-muted",
          children: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB1
        })
      }), (0, a.jsx)(c.Clickable, {
        className: A.tab,
        onClick: () => i("channel"),
        children: (0, a.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "channel" === t ? "header-primary" : "text-muted",
          children: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB2
        })
      })]
    }), (0, a.jsxs)("div", {
      className: A.container,
      children: [(0, a.jsx)(p, {
        hidden: "channel" === t
      }), (0, a.jsx)(E, {
        hidden: "server" === t
      })]
    })]
  })
}

function p(e) {
  let {
    hidden: s
  } = e, t = (0, d.useStateFromStores)([o.default, u.default], () => {
    var e;
    return null === (e = o.default.getGuild(u.default.getFlattenedGuildIds()[0])) || void 0 === e ? void 0 : e.name
  }), [i, m] = l.useState(0);
  return l.useEffect(() => {
    if (s) return;
    let e = 0,
      t = [1500, 1e3, 1e3, 500].map((s, t) => setTimeout(() => m(t + 1), e += s));
    return () => {
      t.forEach(e => clearTimeout(e)), setTimeout(() => m(0), 150)
    }
  }, [s]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: A.containerInner,
      children: (0, a.jsxs)("div", {
        className: n()(A.serversSection, {
          [A.hidden]: s,
          [A.showBigMenu]: i >= 1,
          [A.fadeChannels]: i >= 1,
          [A.showModal]: i >= 3
        }),
        children: [(0, a.jsxs)("div", {
          className: A.channels,
          children: [(0, a.jsxs)("div", {
            className: A.guildName,
            children: [(0, a.jsx)(c.Text, {
              variant: "text-md/medium",
              color: "interactive-active",
              lineClamp: 1,
              children: null != t ? t : "Keyboard Nerds"
            }), i >= 1 ? (0, a.jsx)(_.default, {
              className: A.icon,
              width: 24,
              height: 24
            }) : (0, a.jsx)(T.default, {
              className: n()(A.__invalid_downCaret, A.icon),
              width: 24,
              height: 24
            })]
          }), (0, a.jsx)(b, {
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
          }), (0, a.jsx)(b, {
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
          }), (0, a.jsx)(b, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
          }), (0, a.jsx)(b, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
          }), (0, a.jsx)(b, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
          }), (0, a.jsx)(b, {
            nodot: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
          }), (0, a.jsx)(b, {
            nodot: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
          })]
        }), (0, a.jsxs)("div", {
          className: A.bigMenu,
          children: [(0, a.jsx)(L, {
            text: O.default.Messages.INVITE_PEOPLE,
            icon: (0, a.jsx)(r.GroupPlusIcon, {
              className: A.icon,
              width: 18,
              height: 18
            })
          }), (0, a.jsx)("div", {
            className: A.divider
          }), (0, a.jsx)(L, {
            active: i >= 2,
            text: O.default.Messages.NOTIFICATION_SETTINGS,
            icon: (0, a.jsx)(x.default, {
              className: A.icon,
              width: 18,
              height: 18
            })
          }), (0, a.jsx)(L, {
            text: O.default.Messages.PRIVACY_SETTINGS,
            icon: (0, a.jsx)(g.default, {
              className: A.icon,
              width: 18,
              height: 18
            })
          }), (0, a.jsx)(L, {
            text: O.default.Messages.SERVER_SETTINGS,
            icon: (0, a.jsx)(v.default, {
              className: A.icon,
              width: 18,
              height: 18
            })
          }), (0, a.jsx)(L, {
            text: O.default.Messages.CREATE_EVENTS,
            icon: (0, a.jsx)(I.default, {
              className: A.icon,
              width: 18,
              height: 18
            })
          })]
        }), (0, a.jsxs)("div", {
          className: A.notifModal,
          children: [(0, a.jsx)(c.Text, {
            className: A.modalHeader,
            variant: "text-md/medium",
            color: "interactive-active",
            children: O.default.Messages.NOTIFICATION_SETTINGS
          }), (0, a.jsxs)("div", {
            className: A.notifTabs,
            children: [(0, a.jsxs)("div", {
              className: A.notifTab,
              children: [(0, a.jsx)(f.default, {
                width: 24,
                height: 24
              }), (0, a.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                lineClamp: 1,
                children: O.default.Messages.NOTIFICATION_PRESET_1
              })]
            }), (0, a.jsxs)("div", {
              className: A.activeNotifTab,
              children: [(0, a.jsx)(h.default, {
                width: 24,
                height: 24
              }), (0, a.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "interactive-active",
                lineClamp: 1,
                children: O.default.Messages.NOTIFICATION_PRESET_2
              })]
            }), (0, a.jsxs)("div", {
              className: A.notifTab,
              children: [(0, a.jsx)(N.default, {
                width: 24,
                height: 24
              }), (0, a.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                lineClamp: 1,
                children: O.default.Messages.NOTIFICATION_PRESET_3
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: A.controls,
            children: [(0, a.jsxs)("div", {
              className: A.control,
              children: [(0, a.jsx)("div", {
                className: A.controlPlaceholder
              }), (0, a.jsx)("div", {
                className: A.switchOn
              })]
            }), (0, a.jsxs)("div", {
              className: A.control,
              children: [(0, a.jsx)("div", {
                className: A.controlPlaceholder
              }), (0, a.jsx)("div", {
                className: A.switchOff
              })]
            })]
          })]
        })]
      })
    }), (0, a.jsx)(w, {
      text: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB1_TIP2,
      className: A.tipServers2,
      hidden: s || i < 4
    })]
  })
}

function E(e) {
  let {
    hidden: s
  } = e, [t, i] = l.useState(0);
  return l.useEffect(() => {
    if (s) return;
    let e = 0,
      t = [1e3, 1e3, 1e3, 800, 800].map((s, t) => setTimeout(() => i(t + 1), e += s));
    return () => {
      t.forEach(e => clearTimeout(e)), setTimeout(() => i(0), 150)
    }
  }, [s]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: A.containerInner,
      children: (0, a.jsxs)("div", {
        className: n()(A.channelsSection, {
          [A.hidden]: s,
          [A.fadeOtherChannels]: t >= 2,
          [A.showLeftMenu]: t >= 2,
          [A.showRightMenu]: t >= 3
        }),
        children: [(0, a.jsxs)("div", {
          className: A.channels,
          children: [(0, a.jsx)(b, {
            selected: t >= 1,
            grey: t >= 5,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
          }), (0, a.jsx)(b, {
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
          }), (0, a.jsx)(b, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
          }), (0, a.jsx)(b, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
          }), (0, a.jsx)(b, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
          }), (0, a.jsx)(b, {
            nodot: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
          }), (0, a.jsx)(b, {
            nodot: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
          })]
        }), (0, a.jsxs)("div", {
          className: n()(A.menu, A.leftMenu),
          children: [(0, a.jsx)(L, {
            small: !0,
            text: O.default.Messages.MUTE,
            icon: (0, a.jsx)(T.default, {
              className: A.caret,
              width: 12,
              height: 12
            })
          }), (0, a.jsx)(L, {
            small: !0,
            text: O.default.Messages.NOTIFICATIONS,
            active: t >= 3,
            icon: (0, a.jsx)(T.default, {
              className: A.caret,
              width: 12,
              height: 12
            })
          })]
        }), (0, a.jsxs)("div", {
          className: n()(A.menu, A.rightMenu),
          children: [(0, a.jsx)(L, {
            small: !0,
            text: O.default.Messages.NOTIFICATION_PRESET_1,
            icon: t <= 4 ? (0, a.jsx)(M.default, {
              className: A.icon,
              width: 12,
              height: 12
            }) : (0, a.jsx)(j.default, {
              className: A.icon,
              width: 12,
              height: 12
            }),
            active: t <= 4
          }), (0, a.jsx)(L, {
            small: !0,
            text: O.default.Messages.NOTIFICATION_PRESET_2,
            icon: t >= 5 ? (0, a.jsx)(M.default, {
              className: A.icon,
              width: 12,
              height: 12
            }) : (0, a.jsx)(j.default, {
              className: A.icon,
              width: 12,
              height: 12
            }),
            active: t >= 5
          }), (0, a.jsx)(L, {
            small: !0,
            text: O.default.Messages.NOTIFICATION_PRESET_3,
            icon: (0, a.jsx)(j.default, {
              className: A.icon,
              width: 12,
              height: 12
            })
          }), (0, a.jsx)(L, {
            small: !0,
            text: O.default.Messages.NOTIFICATION_PRESET_CUSTOM,
            icon: (0, a.jsx)(j.default, {
              className: A.icon,
              width: 12,
              height: 12
            })
          })]
        })]
      })
    }), (0, a.jsx)(w, {
      text: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP1,
      className: A.tipChannels1,
      hidden: s || t < 4
    }), (0, a.jsx)(w, {
      text: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP2,
      className: A.tipChannels2,
      hidden: s || t < 4
    })]
  })
}

function w(e) {
  let {
    text: s,
    className: t,
    hidden: l
  } = e;
  return (0, a.jsxs)("div", {
    className: n()(t, A.tip, {
      [A.hidden]: l
    }),
    children: [(0, a.jsx)(c.Text, {
      className: A.__invalid_tipText,
      variant: "text-sm/normal",
      color: "text-secondary",
      children: s
    }), (0, a.jsx)("div", {
      className: A.tipLine
    })]
  })
}

function b(e) {
  let {
    grey: s,
    nodot: t,
    selected: l,
    name: i
  } = e;
  return (0, a.jsxs)("div", {
    className: n()(A.channel, {
      [A.grey]: s || t,
      [A.nodot]: t,
      [A.selected]: l
    }),
    children: [(0, a.jsx)(m.default, {
      className: A.channelIcon,
      width: 16,
      height: 16
    }), (0, a.jsx)(c.Text, {
      variant: "text-md/medium",
      className: A.channelName,
      children: i
    })]
  })
}

function L(e) {
  let {
    text: s,
    active: t,
    small: l,
    icon: i
  } = e;
  return (0, a.jsxs)("div", {
    className: n()(A.menuItem, {
      [A.active]: t
    }),
    children: [(0, a.jsx)(c.Text, {
      variant: l ? "text-xs/normal" : "text-sm/normal",
      color: t ? "always-white" : "interactive-normal",
      children: s
    }), i]
  })
}