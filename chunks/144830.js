n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(411104),
    n(47120);
var i,
    s,
    a,
    l,
    r = n(735250),
    o = n(470079),
    c = n(379649),
    u = n(846519),
    d = n(689938);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
((a = i || (i = {})).ACTIVITY_FEED = 'ACTIVITY_FEED'), (a.ACTIVITY_FEED_NEW = 'ACTIVITY_FEED_NEW'), (a.USER_ACTIVITY = 'USER_ACTIVITY'), (a.GAME_LIBRARY_TIME_PLAYED = 'GAME_LIBRARY_TIME_PLAYED'), (a.GAME_LIBRARY_LAST_PLAYED = 'GAME_LIBRARY_LAST_PLAYED'), ((l = s || (s = {})).START = 'START'), (l.END = 'END'), (l.TIME = 'TIME');
let p = (e) => (t, n) =>
        null == n
            ? ''
            : e().format({
                  time: t,
                  ...n
              }),
    m = {
        ACTIVITY_FEED: {
            START: {
                [c.J6.SECONDS]: () => d.Z.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                [c.J6.MINUTES]: (e) => d.Z.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({ time: e }),
                [c.J6.HOURS]: (e) => d.Z.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({ time: e }),
                [c.J6.DAYS]: (e) => d.Z.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({ time: e })
            },
            END: {
                [c.J6.SECONDS]: () => d.Z.Messages.GAME_FEED_USER_PLAYING_JUST_ENDED,
                [c.J6.MINUTES]: (e) => d.Z.Messages.GAME_FEED_USER_PLAYED_MINUTES_AGO.format({ time: e }),
                [c.J6.HOURS]: (e) => d.Z.Messages.GAME_FEED_USER_PLAYED_HOURS_AGO.format({ time: e }),
                [c.J6.DAYS]: (e) => d.Z.Messages.GAME_FEED_USER_PLAYED_DAYS_AGO.format({ time: e }),
                [c.J6.WEEKS]: (e) => d.Z.Messages.GAME_FEED_USER_PLAYED_WEEKS_AGO.format({ time: e }),
                [c.J6.MONTHS]: (e) => d.Z.Messages.GAME_FEED_USER_PLAYED_MONTHS_AGO.format({ time: e }),
                [c.J6.YEARS]: (e) => d.Z.Messages.GAME_FEED_USER_PLAYED_YEARS_AGO.format({ time: e })
            }
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [c.J6.SECONDS]: p(() => d.Z.Messages.ACTIVITY_FEED_USER_PLAYING_JUST_STARTED),
                [c.J6.MINUTES]: p(() => d.Z.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_MINUTES),
                [c.J6.HOURS]: p(() => d.Z.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_HOURS),
                [c.J6.DAYS]: p(() => d.Z.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_DAYS)
            },
            END: {
                [c.J6.SECONDS]: (e) => d.Z.Messages.DURATION_SECONDS_AGO.format({ seconds: e }),
                [c.J6.MINUTES]: (e) => d.Z.Messages.DURATION_MINUTES_AGO.format({ minutes: e }),
                [c.J6.HOURS]: (e) => d.Z.Messages.DURATION_HOURS_AGO.format({ hours: e }),
                [c.J6.DAYS]: (e) => d.Z.Messages.DURATION_DAYS_AGO.format({ days: e })
            }
        },
        USER_ACTIVITY: {
            START: {
                [c.J6.SECONDS]: () => d.Z.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                [c.J6.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? d.Z.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({ time: e }) : d.Z.Messages.USER_ACTIVITY_USER_PLAYING_FOR_MINUTES.format({ time: e });
                },
                [c.J6.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? d.Z.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({ time: e }) : d.Z.Messages.USER_ACTIVITY_USER_PLAYING_FOR_HOURS.format({ time: e });
                },
                [c.J6.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? d.Z.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({ time: e }) : d.Z.Messages.USER_ACTIVITY_USER_PLAYING_FOR_DAYS.format({ time: e });
                }
            }
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [c.J6.NONE]: () => d.Z.Messages.GAME_LIBRARY_TIME_PLAYED_NONE,
                [c.J6.SECONDS]: (e) => d.Z.Messages.GAME_LIBRARY_TIME_PLAYED_SECONDS.format({ time: e }),
                [c.J6.MINUTES]: (e) => d.Z.Messages.GAME_LIBRARY_TIME_PLAYED_MINUTES.format({ time: e }),
                [c.J6.HOURS]: (e) => d.Z.Messages.GAME_LIBRARY_TIME_PLAYED_HOURS.format({ time: e })
            }
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [c.J6.NONE]: () => d.Z.Messages.GAME_LIBRARY_LAST_PLAYED_NONE,
                [c.J6.SECONDS]: () => d.Z.Messages.GAME_LIBRARY_LAST_PLAYED_JUST_NOW,
                [c.J6.MINUTES]: (e) => d.Z.Messages.GAME_LIBRARY_LAST_PLAYED_MINUTES.format({ time: e }),
                [c.J6.HOURS]: (e) => d.Z.Messages.GAME_LIBRARY_LAST_PLAYED_HOURS.format({ time: e }),
                [c.J6.DAYS]: (e) => d.Z.Messages.GAME_LIBRARY_LAST_PLAYED_DAYS.format({ time: e }),
                [c.J6.WEEKS]: (e) => d.Z.Messages.GAME_LIBRARY_LAST_PLAYED_WEEKS.format({ time: e }),
                [c.J6.MONTHS]: (e) => d.Z.Messages.GAME_LIBRARY_LAST_PLAYED_MONTHS.format({ time: e }),
                [c.J6.YEARS]: (e) => d.Z.Messages.GAME_LIBRARY_LAST_PLAYED_YEARS.format({ time: e })
            }
        }
    };
function _(e) {
    var t, n;
    return (
        (n = class extends (t = o.PureComponent) {
            componentDidMount() {
                this.timer.start(10000, this.update);
            }
            componentDidUpdate(e) {
                let { start: t, end: n, time: i } = this.props;
                (e.start !== t || e.end !== n || e.time !== i) && this.update();
            }
            componentWillUnmount() {
                this.timer.stop();
            }
            getDiff() {
                let { start: e, end: t, time: n } = this.props;
                if (null != n) return n / 1000 / 60;
                let i = Date.now(),
                    s = 0;
                return null != e ? (s = i - e) : null != t && (s = i - t), Math.abs(s) / 1000 / 60;
            }
            getTimeUnit(e, t, n) {
                let i = (0, c.jU)(e, (e) =>
                    (function (e, t, n) {
                        let i = m[n];
                        if (null != i) {
                            let n = i[t];
                            if (null != n) return null != n[e];
                        }
                        return !1;
                    })(e, n, t)
                );
                if (null == i) throw Error('Could not get the time unit in PlayTime with time: '.concat(e, ' for type: ').concat(n, ' in location: ').concat(t));
                return i;
            }
            getType() {
                let { start: e, end: t, time: n } = this.props;
                if (null != e) return 'START';
                if (null != t) return 'END';
                if (null != n) return 'TIME';
                return null;
            }
            render() {
                let { location: t, messageProps: n, isApplicationStreaming: i, ...s } = this.props,
                    { time: a } = this.state,
                    l = this.getType();
                if (null == l) return null;
                let o = this.getTimeUnit(a, t, l),
                    u = m[t][l];
                if (null == u) return null;
                let d = u[o],
                    h = Math.floor((0, c.A3)(a, o));
                return (0, r.jsx)(e, {
                    ...s,
                    children: null == d ? void 0 : d(h, n, i)
                });
            }
            constructor(...e) {
                super(...e),
                    h(this, 'timer', new u.Xp()),
                    h(this, 'state', { time: this.getDiff() }),
                    h(this, 'update', () => {
                        this.setState({ time: this.getDiff() });
                    });
            }
        }),
        h(n, 'Locations', i),
        h(n, 'Types', s),
        n
    );
}
