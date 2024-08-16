n.d(t, {
    MS: function () {
        return c;
    },
    TC: function () {
        return u;
    },
    bA: function () {
        return a;
    },
    gl: function () {
        return d;
    },
    xv: function () {
        return s;
    },
    z4: function () {
        return o;
    },
    zc: function () {
        return l;
    }
});
var r = n(570140),
    i = n(579806);
function a(e) {
    r.Z.dispatch({
        type: 'RTC_DEBUG_MODAL_OPEN',
        section: e
    }),
        r.Z.dispatch({ type: 'RTC_DEBUG_POPOUT_WINDOW_OPEN' });
}
function s() {
    r.Z.dispatch({ type: 'RTC_DEBUG_MODAL_CLOSE' });
}
function o() {
    r.Z.dispatch({ type: 'RTC_DEBUG_MODAL_OPEN_REPLAY' });
}
function l(e) {
    r.Z.dispatch({
        type: 'RTC_DEBUG_MODAL_SET_SECTION',
        section: e
    });
}
function u(e) {
    r.Z.dispatch({
        type: 'RTC_DEBUG_SET_RECORDING_FLAG',
        value: e
    });
}
function c(e, t, n) {
    r.Z.dispatch({
        type: 'RTC_DEBUG_SET_SIMULCAST_OVERRIDE',
        userId: e,
        context: t,
        quality: n
    });
}
function d() {
    i.Z.fileManager
        .showOpenDialog({
            filters: [
                {
                    name: 'All Files',
                    extensions: ['*']
                }
            ]
        })
        .then((e) => {
            let t = 0 === e.length ? '' : e[0];
            r.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH',
                path: t
            });
        });
}
