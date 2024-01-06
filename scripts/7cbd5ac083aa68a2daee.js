(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11048"], {
        651072: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("862205");
            let n = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = n
        },
        229798: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("249654"),
                r = l("77078"),
                d = l("686904"),
                u = l("322224"),
                i = l("397680"),
                c = l("822516"),
                o = l("953143"),
                E = l("782340"),
                _ = l("297506");

            function g(e) {
                let {
                    guildEvent: t,
                    recurrenceId: l,
                    transitionState: g,
                    onClose: f
                } = e, h = (0, i.default)(l, t.id), R = (0, c.getBaseScheduleForRecurrence)(l, t), T = (0, c.getScheduleForRecurrenceWithException)(R, h), [A, N] = n.useState(T), [x, {
                    loading: m,
                    error: D
                }] = (0, d.default)(async () => {
                    let e = (0, c.areDatesIdentical)(R.startDate, A.startDate) ? null : A.startDate,
                        a = (0, c.areDatesIdentical)(R.endDate, A.endDate) ? null : A.endDate;
                    if (null != h)(0, c.areSchedulesIdentical)(A, R) ? await u.default.deleteGuildEventException(t.guild_id, t.id, h.event_exception_id) : await u.default.updateGuildEventException({
                        scheduled_start_time: null == e ? void 0 : e.toISOString(),
                        scheduled_end_time: null == a ? void 0 : a.toISOString(),
                        is_canceled: h.is_canceled
                    }, t.guild_id, t.id, l);
                    else {
                        let n = s.default.extractTimestamp(l);
                        await u.default.createGuildEventException({
                            original_scheduled_start_time: new Date(n).toISOString(),
                            scheduled_start_time: null == e ? void 0 : e.toISOString(),
                            scheduled_end_time: null == a ? void 0 : a.toISOString(),
                            is_canceled: !1
                        }, t.guild_id, t.id)
                    }
                    null == D && f()
                });
                return (0, a.jsxs)(r.ModalRoot, {
                    transitionState: g,
                    children: [(0, a.jsx)(r.ModalHeader, {
                        children: (0, a.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            children: E.default.Messages.EDIT_THIS_EVENT
                        })
                    }), (0, a.jsxs)(r.ModalContent, {
                        className: _.content,
                        children: [(0, a.jsx)(o.default, {
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: l
                                } = e;
                                null != t && null != l && l.isBefore(t) && (l = t.clone().add(1, "hour")), N({
                                    startDate: t,
                                    endDate: l
                                })
                            },
                            schedule: A,
                            showEndDate: null != A.endDate,
                            requireEndDate: null != A.endDate,
                            guildId: t.guild_id,
                            recurrenceRule: t.recurrence_rule
                        }), null != D ? (0, a.jsx)(r.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: _.warning,
                            children: D.getAnyErrorMessage()
                        }) : null]
                    }), (0, a.jsxs)(r.ModalFooter, {
                        className: _.footer,
                        children: [(0, a.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: x,
                            className: _.button,
                            submitting: m,
                            disabled: (0, c.areSchedulesIdentical)(A, T),
                            children: E.default.Messages.SAVE_EVENT
                        }), (0, a.jsx)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            onClick: f,
                            children: E.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        844808: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            }), l("222007"), l("424973");
            var a = l("37983"),
                n = l("884691"),
                s = l("77078"),
                r = l("20606"),
                d = l("956089"),
                u = l("822516"),
                i = l("757767"),
                c = l("782340"),
                o = l("572721");
            let E = new Set([0, 6]);

            function _(e) {
                let {
                    startDate: t,
                    recurrenceRule: l,
                    onRecurrenceChange: _
                } = e, g = n.useMemo(() => (0, u.recurrenceRuleToOption)(t, l), [l, t]), f = function(e) {
                    let t = e.toDate(),
                        l = Math.ceil(t.getDate() / 7),
                        a = t.toLocaleString(c.default.getLocale(), {
                            weekday: "long"
                        }),
                        n = [{
                            value: i.RecurrenceOptions.NONE,
                            label: c.default.Messages.CREATE_EVENT_RECUR_NONE
                        }, {
                            value: i.RecurrenceOptions.WEEKLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                                weekday: a
                            })
                        }, {
                            value: i.RecurrenceOptions.BIWEEKLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
                                weekday: a
                            })
                        }, {
                            value: i.RecurrenceOptions.MONTHLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                                nth: l,
                                weekday: a
                            })
                        }, {
                            value: i.RecurrenceOptions.YEARLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                                date: t.toLocaleString(c.default.getLocale(), {
                                    month: "short",
                                    day: "2-digit"
                                })
                            })
                        }];
                    return !E.has(t.getDay()) && n.push({
                        value: i.RecurrenceOptions.WEEKDAY_ONLY,
                        label: c.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }), n
                }(t), h = e => e.toString(), R = (0, a.jsxs)("div", {
                    className: o.title,
                    children: [c.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, a.jsx)(d.TextBadge, {
                        text: c.default.Messages.NEW,
                        color: r.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                    })]
                });
                return (0, a.jsx)(s.FormItem, {
                    title: R,
                    required: !0,
                    children: (0, a.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: f,
                        select: _,
                        serialize: h,
                        isSelected: e => null != g && h(e) === h(g)
                    })
                })
            }
        },
        953143: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("866227"),
                s = l.n(n),
                r = l("77078"),
                d = l("812204"),
                u = l("685665"),
                i = l("381546"),
                c = l("351825"),
                o = l("651072"),
                E = l("822516"),
                _ = l("844808"),
                g = l("782340"),
                f = l("234865");

            function h(e) {
                let {
                    className: t,
                    guildId: l,
                    onScheduleChange: n,
                    onRecurrenceChange: h,
                    onTimeChange: R,
                    timeSelected: T = !0,
                    schedule: A,
                    recurrenceRule: N,
                    showEndDate: x = !1,
                    requireEndDate: m = !1,
                    disableStartDateTime: D = !1
                } = e, {
                    analyticsLocations: I
                } = (0, u.default)(d.default.EVENT_SETTINGS), {
                    enabled: S
                } = o.default.useExperiment({
                    guildId: null != l ? l : "",
                    location: I[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == A) return null;
                let C = null,
                    v = A.startDate,
                    M = s(),
                    j = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    p = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
                null != N && (j.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), p.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
                let L = e => {
                    n({
                        ...A,
                        endDate: e
                    })
                };
                return null != v && o.default.trackExposure({
                    guildId: null != l ? l : "",
                    location: I[0]
                }), x && (C = null != A.endDate || m ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: f.doubleInput,
                        children: [(0, a.jsx)(r.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: m,
                            children: (0, a.jsx)(r.DateInput, {
                                value: A.endDate,
                                onSelect: L,
                                minDate: A.startDate,
                                maxDate: p
                            })
                        }), (0, a.jsx)(r.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: m,
                            children: (0, a.jsx)(r.TimeInput, {
                                value: A.endDate,
                                onChange: L
                            })
                        })]
                    }), m ? null : (0, a.jsx)(r.Button, {
                        onClick: () => {
                            L(void 0)
                        },
                        look: r.Button.Looks.BLANK,
                        size: r.Button.Sizes.MIN,
                        children: (0, a.jsxs)("div", {
                            className: f.link,
                            children: [(0, a.jsx)(i.default, {
                                width: 17,
                                height: 17,
                                className: f.removeIcon
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: g.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, a.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                        L(s(A.startDate).add(1, "hour"))
                    },
                    children: (0, a.jsxs)("div", {
                        className: f.link,
                        children: [(0, a.jsx)(c.default, {
                            width: 20,
                            height: 20,
                            className: f.addIcon
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: g.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, a.jsxs)("div", {
                    className: t,
                    children: [(0, a.jsxs)("div", {
                        className: f.doubleInput,
                        children: [(0, a.jsx)(r.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, a.jsx)(r.DateInput, {
                                value: A.startDate,
                                onSelect: e => {
                                    n({
                                        ...A,
                                        startDate: e
                                    })
                                },
                                minDate: M,
                                maxDate: j,
                                disabled: D
                            })
                        }), (0, a.jsx)(r.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, a.jsx)(r.TimeInput, {
                                value: A.startDate,
                                onChange: e => {
                                    e.isValid() && (null == R || R(!0), n({
                                        ...A,
                                        startDate: e
                                    }))
                                },
                                hideValue: !T,
                                disabled: D
                            })
                        })]
                    }), C, S && null != v && null != h && (0, a.jsx)(_.default, {
                        onRecurrenceChange: h,
                        startDate: v,
                        recurrenceRule: N
                    })]
                })
            }
        },
        686904: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            }), l("222007");
            var a = l("884691"),
                n = l("448993");

            function s(e, t) {
                let [l, s] = a.useState(!1), [r, d] = a.useState(null), u = async () => {
                    s(!0), d(null);
                    try {
                        let t = await e();
                        return s(!1), d(null), t
                    } catch (l) {
                        let e = new n.APIError(l);
                        return null == t || t(e), d(e), s(!1), null
                    }
                };
                return [u, {
                    loading: l,
                    error: r
                }]
            }
        }
    }
]);