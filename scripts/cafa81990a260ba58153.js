(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4984"], {
        943659: function(e, t, s) {
            "use strict";
            e.exports = s.p + "882c4ac63912fede94ca.png"
        },
        402718: function(e, t, s) {
            "use strict";
            e.exports = s.p + "e41dac32e79902e43b96.png"
        },
        471536: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                i = s("414456"),
                d = s.n(i),
                r = s("917351"),
                n = s.n(r),
                o = s("77078"),
                c = s("446674"),
                u = s("272030"),
                T = s("305961"),
                x = s("677099"),
                m = s("476263"),
                h = s("68238"),
                I = s("380353"),
                M = s("782340"),
                g = s("471665");

            function N(e) {
                let {
                    guildPlans: t,
                    overrideGuild: s
                } = e, [i, d] = l.useState(!1), r = (0, c.useStateFromStores)([x.default], () => x.default.getFlattenedGuildIds()), u = l.useMemo(() => n(t).values().filter(e => i || e.confidence === I.Confidence.Low).sortBy(e => {
                    let t = r.indexOf(e.guildId);
                    return -1 === t ? r.length : t
                }).value(), [t, r, i]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: g.container,
                        children: [(0, a.jsx)(f, {
                            header: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_1_TITLE.format(),
                            subtitle: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_1_SUBTITLE,
                            tooltip: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_1_TOOLTIP.format(),
                            className: g.everything,
                            guildPlans: u.filter(e => {
                                var t;
                                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === I.Mode.CareALot
                            }),
                            overrideGuild: s
                        }), (0, a.jsx)(f, {
                            header: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_2_TITLE.format(),
                            subtitle: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_2_SUBTITLE,
                            tooltip: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_2_TOOLTIP.format(),
                            className: g.essentials,
                            guildPlans: u.filter(e => {
                                var t;
                                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === I.Mode.CareALittle
                            }),
                            overrideGuild: s
                        }), (0, a.jsx)(f, {
                            header: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_3_TITLE.format(),
                            subtitle: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_3_SUBTITLE,
                            tooltip: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_3_TOOLTIP.format(),
                            className: g.none,
                            guildPlans: u.filter(e => {
                                var t;
                                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === I.Mode.DontCare
                            }),
                            overrideGuild: s
                        })]
                    }), (0, a.jsx)("div", {
                        className: g.showAllCheckboxContainer,
                        children: (0, a.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: i,
                            onChange: (e, t) => d(t),
                            className: g.showAllCheckbox,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "header-secondary",
                                children: M.default.Messages.NOTIFICATION_MIGRATION_SHOW_ALL
                            })
                        })
                    })]
                })
            }

            function f(e) {
                let {
                    header: t,
                    subtitle: s,
                    tooltip: l,
                    className: i,
                    guildPlans: r,
                    overrideGuild: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: d(g.column, i),
                    children: [(0, a.jsxs)("div", {
                        className: g.header,
                        children: [(0, a.jsxs)("div", {
                            className: g.headerLeft,
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: t
                            }), (0, a.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                children: s
                            })]
                        }), (0, a.jsx)("div", {
                            className: g.headerRight,
                            children: (0, a.jsx)(o.Tooltip, {
                                text: l,
                                tooltipClassName: g.columnTooltip,
                                "aria-label": "TODO TODO TODO",
                                children: e => (0, a.jsx)("div", {
                                    className: g.headerTooltip,
                                    ...e,
                                    children: (0, a.jsx)(h.default, {
                                        width: 16,
                                        height: 16
                                    })
                                })
                            })
                        })]
                    }), (0, a.jsx)(o.Scroller, {
                        className: g.guilds,
                        children: r.map(e => (0, a.jsx)(_, {
                            plan: e,
                            overrideGuild: n
                        }, e.guildId))
                    })]
                })
            }

            function _(e) {
                let {
                    plan: t,
                    overrideGuild: s
                } = e, l = (0, c.useStateFromStores)([T.default], () => T.default.getGuild(t.guildId));
                return null == l ? null : (0, a.jsx)(o.Tooltip, {
                    text: (0, a.jsx)("pre", {
                        children: l.name + "\n" + t.debugReason
                    }),
                    "aria-label": t.debugReason,
                    tooltipClassName: g.tooltip,
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: g.guild,
                        onContextMenu: e => (0, u.openContextMenu)(e, e => {
                            var i, d, r;
                            let {
                                onSelect: n
                            } = e;
                            return (0, a.jsx)(o.Menu, {
                                navId: "notifications-migration",
                                onClose: u.closeContextMenu,
                                "aria-label": M.default.Messages.THREAD_ACTIONS_MENU_LABEL,
                                onSelect: n,
                                children: (0, a.jsxs)(o.MenuGroup, {
                                    children: [(0, a.jsx)(o.MenuRadioItem, {
                                        group: "change-mode",
                                        id: String(I.Mode.CareALot),
                                        label: "Move to Everything",
                                        action: () => {
                                            s(l.id, I.Mode.CareALot), (0, u.closeContextMenu)()
                                        },
                                        checked: (null !== (i = t.overrideMode) && void 0 !== i ? i : t.mode) === I.Mode.CareALot
                                    }, String(I.Mode.CareALot)), (0, a.jsx)(o.MenuRadioItem, {
                                        group: "change-mode",
                                        id: String(I.Mode.CareALittle),
                                        label: "Move to Essentials",
                                        action: () => {
                                            s(l.id, I.Mode.CareALittle), (0, u.closeContextMenu)()
                                        },
                                        checked: (null !== (d = t.overrideMode) && void 0 !== d ? d : t.mode) === I.Mode.CareALittle
                                    }, String(I.Mode.CareALittle)), (0, a.jsx)(o.MenuRadioItem, {
                                        group: "change-mode",
                                        id: String(I.Mode.DontCare),
                                        label: "Move to Nothing",
                                        action: () => {
                                            s(l.id, I.Mode.DontCare), (0, u.closeContextMenu)()
                                        },
                                        checked: (null !== (r = t.overrideMode) && void 0 !== r ? r : t.mode) === I.Mode.DontCare
                                    }, String(I.Mode.DontCare))]
                                }, "change-mode")
                            })
                        }),
                        children: (0, a.jsx)(m.default, {
                            "aria-hidden": !0,
                            className: g.guildIcon,
                            guild: l,
                            size: m.default.Sizes.MEDIUM,
                            active: !0,
                            tabIndex: -1
                        })
                    })
                })
            }
        },
        923660: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            }), s("222007"), s("781738");
            var a = s("37983"),
                l = s("884691"),
                i = s("77078"),
                d = s("367376"),
                r = s("531470"),
                n = s("538137"),
                o = s("660279"),
                c = s("36694"),
                u = s("578706"),
                T = s("306160"),
                x = s("439932"),
                m = s("699668"),
                h = s("471536"),
                I = s("71941"),
                M = s("49111"),
                g = s("782340"),
                N = s("650287");

            function f(e) {
                let {
                    onClose: t,
                    transitionState: s
                } = e, [d, o] = l.useState(I.Tab.Intro), {
                    submitted: u,
                    submitting: T,
                    saveSettings: h
                } = (0, m.useSaveSettings)(), {
                    guildPlans: f,
                    overrideGuild: v,
                    getDebug: C,
                    showWarning: b
                } = (0, m.useGuildMigrationSteps)();
                return b ? (0, a.jsx)("div", {
                    className: (0, x.getThemeClass)(M.ThemeTypes.DARK),
                    children: (0, a.jsxs)(i.ModalRoot, {
                        className: N.modal,
                        transitionState: s,
                        "aria-label": g.default.Messages.NOTIFICATIONS,
                        size: i.ModalSize.DYNAMIC,
                        children: [(0, a.jsx)(i.Text, {
                            style: {
                                maxWidth: 400,
                                padding: 16
                            },
                            variant: "text-sm/semibold",
                            color: "interactive-normal",
                            children: g.default.Messages.NOTIF_MIGRATION_WARNING.format()
                        }), (0, a.jsx)(i.ModalFooter, {
                            className: N.buttons,
                            children: (0, a.jsx)("div", {
                                className: N.left,
                                children: (0, a.jsx)(i.Clickable, {
                                    className: N.dismiss,
                                    onClick: t,
                                    children: (0, a.jsx)(i.Text, {
                                        variant: "text-sm/semibold",
                                        color: "interactive-normal",
                                        children: d === I.Tab.Intro ? g.default.Messages.DISMISS : g.default.Messages.CANCEL
                                    })
                                })
                            })
                        })]
                    })
                }) : (0, a.jsx)("div", {
                    className: (0, x.getThemeClass)(M.ThemeTypes.DARK),
                    children: (0, a.jsxs)(i.ModalRoot, {
                        className: N.modal,
                        transitionState: s,
                        "aria-label": g.default.Messages.NOTIFICATIONS,
                        size: i.ModalSize.DYNAMIC,
                        children: [(0, a.jsx)(I.default, {
                            selectedTab: d,
                            onClick: o,
                            submitted: u
                        }), d === I.Tab.Intro ? (0, a.jsx)(_, {}) : d === I.Tab.Customize ? (0, a.jsx)(O, {
                            guildPlans: f,
                            overrideGuild: v,
                            getDebug: C
                        }) : (0, a.jsx)(j, {
                            guildPlans: f
                        }), (0, a.jsxs)(i.ModalFooter, {
                            className: N.buttons,
                            children: [(0, a.jsx)("div", {
                                className: N.left,
                                children: (0, a.jsx)(i.Clickable, {
                                    className: N.dismiss,
                                    onClick: t,
                                    children: (0, a.jsx)(i.Text, {
                                        variant: "text-sm/semibold",
                                        color: "interactive-normal",
                                        children: d === I.Tab.Intro ? g.default.Messages.DISMISS : g.default.Messages.CANCEL
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: N.right,
                                children: [d !== I.Tab.Customize || u ? null : (0, a.jsxs)(i.Button, {
                                    onClick: () => o(I.Tab.Intro),
                                    color: i.Button.Colors.TRANSPARENT,
                                    children: [(0, a.jsx)(r.default, {
                                        width: 16,
                                        height: 16
                                    }), " ", g.default.Messages.BACK]
                                }), d === I.Tab.Intro ? (0, a.jsxs)(i.Button, {
                                    onClick: () => o(I.Tab.Customize),
                                    children: [g.default.Messages.TRY_IT_OUT, " ", (0, a.jsx)(n.default, {
                                        width: 16,
                                        height: 16
                                    })]
                                }) : d === I.Tab.Customize ? (0, a.jsxs)(i.Button, {
                                    onClick: () => {
                                        o(I.Tab.Review), h(f)
                                    },
                                    children: [g.default.Messages.SAVE, " ", (0, a.jsx)(c.default, {
                                        width: 16,
                                        height: 16
                                    })]
                                }) : (0, a.jsx)(i.Button, {
                                    submitting: T,
                                    onClick: t,
                                    children: g.default.Messages.CLOSE
                                })]
                            })]
                        })]
                    })
                })
            }

            function _() {
                return (0, a.jsxs)("div", {
                    className: N.content,
                    children: [(0, a.jsxs)("div", {
                        className: N.header,
                        children: [(0, a.jsx)(o.default, {
                            width: 40,
                            height: 40,
                            className: N.introIcon
                        }), (0, a.jsx)(i.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: g.default.Messages.NOTIF_MIGRATION_INTRO_TITLE
                        }), (0, a.jsx)(i.Text, {
                            className: N.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: g.default.Messages.NOTIF_MIGRATION_INTRO_SUB_TITLE
                        })]
                    }), (0, a.jsx)("img", {
                        width: 954,
                        src: s("943659"),
                        alt: "yo"
                    })]
                })
            }

            function O(e) {
                let {
                    guildPlans: t,
                    overrideGuild: s,
                    getDebug: r
                } = e, [n, o] = l.useState(!1);
                return (0, a.jsxs)("div", {
                    className: N.content,
                    children: [(0, a.jsxs)("div", {
                        className: N.header,
                        onDoubleClick: e => e.shiftKey && o(e => !e),
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: g.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
                        }), (0, a.jsxs)(i.Text, {
                            className: N.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: [g.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SUB_TITLE_1, (0, a.jsx)("br", {}), g.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SUB_TITLE_2, " (RIGHT CLICK FOR NOW)"]
                        })]
                    }), n ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(i.Button, {
                            onClick: () => (0, T.copy)(r()),
                            children: "Copy"
                        }), (0, a.jsx)("div", {
                            style: {
                                whiteSpace: "pre",
                                overflow: "auto",
                                textAlign: "left",
                                height: 450
                            },
                            children: function(e) {
                                return e.split("\n").map((e, t) => e.startsWith("### ") ? (0, a.jsx)(i.Heading, {
                                    variant: "heading-md/medium",
                                    style: {
                                        marginTop: 16
                                    },
                                    children: e.replace("### ", "")
                                }, t) : e.startsWith("# ") ? (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/medium",
                                    style: {
                                        marginTop: 80
                                    },
                                    children: e.replace("# ", "")
                                }, t) : e.startsWith("    - ") ? (0, a.jsx)("li", {
                                    style: {
                                        color: "var(--text-normal)",
                                        marginLeft: 48
                                    },
                                    children: (0, a.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        style: {
                                            display: "inline"
                                        },
                                        children: d.default.parseTopic(e.replace("    - ", ""))
                                    })
                                }, t) : e.startsWith("- ") ? (0, a.jsx)("li", {
                                    style: {
                                        color: "var(--text-normal)",
                                        marginLeft: 16
                                    },
                                    children: (0, a.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        style: {
                                            display: "inline"
                                        },
                                        children: d.default.parseTopic(e.replace("- ", ""))
                                    })
                                }, t) : (0, a.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: d.default.parseTopic(e)
                                }, t))
                            }(r())
                        })]
                    }) : (0, a.jsx)(h.default, {
                        guildPlans: t,
                        overrideGuild: s
                    })]
                })
            }

            function j(e) {
                return (0, a.jsxs)("div", {
                    className: N.content,
                    children: [(0, a.jsxs)("div", {
                        className: N.header,
                        children: [(0, a.jsx)(u.default, {
                            width: 40,
                            height: 40,
                            className: N.reviewIcon
                        }), (0, a.jsx)(i.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: g.default.Messages.NOTIF_MIGRATION_REVIEW_TITLE
                        }), (0, a.jsx)(i.Text, {
                            className: N.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: g.default.Messages.NOTIF_MIGRATION_REVIEW_SUB_TITLE_1
                        })]
                    }), (0, a.jsx)(i.Text, {
                        className: N.helpfulTips,
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        children: g.default.Messages.NOTIF_MIGRATION_REVIEW_SUB_TITLE_2
                    }), (0, a.jsx)("img", {
                        width: 942.5,
                        src: s("402718"),
                        alt: "yo"
                    })]
                })
            }
        },
        71941: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Tab: function() {
                    return l
                },
                default: function() {
                    return u
                }
            });
            var a, l, i = s("37983");
            s("884691");
            var d = s("414456"),
                r = s.n(d),
                n = s("77078"),
                o = s("782340"),
                c = s("805986");

            function u(e) {
                let {
                    selectedTab: t,
                    onClick: s,
                    submitted: a
                } = e;
                return (0, i.jsxs)("div", {
                    className: c.tabs,
                    children: [(0, i.jsx)(T, {
                        tab: 0,
                        selectedTab: t,
                        label: o.default.Messages.NOTIF_MIGRATION_INTRO_TAB,
                        disabled: a,
                        onClick: s
                    }), (0, i.jsx)(T, {
                        tab: 1,
                        selectedTab: t,
                        label: o.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TAB,
                        disabled: a,
                        onClick: s
                    }), (0, i.jsx)(T, {
                        tab: 2,
                        selectedTab: t,
                        label: o.default.Messages.NOTIF_MIGRATION_REVIEW_TAB,
                        disabled: !a,
                        onClick: s
                    })]
                })
            }

            function T(e) {
                let {
                    tab: t,
                    selectedTab: s,
                    label: a,
                    disabled: l,
                    onClick: d
                } = e;
                return l ? (0, i.jsxs)("div", {
                    className: r(c.tab, {
                        [c.current]: s === t
                    }),
                    children: [(0, i.jsx)("div", {
                        className: c.progressBar
                    }), (0, i.jsx)(n.Text, {
                        variant: "text-xs/semibold",
                        color: s === t ? "text-brand" : "text-muted",
                        children: a
                    })]
                }) : (0, i.jsxs)(n.Clickable, {
                    onClick: () => d(t),
                    className: r(c.tab, {
                        [c.current]: s === t
                    }),
                    children: [(0, i.jsx)("div", {
                        className: c.progressBar
                    }), (0, i.jsx)(n.Text, {
                        variant: "text-xs/semibold",
                        color: s === t ? "text-brand" : "text-muted",
                        children: a
                    })]
                })
            }(a = l || (l = {}))[a.Intro = 0] = "Intro", a[a.Customize = 1] = "Customize", a[a.Review = 2] = "Review"
        }
    }
]);