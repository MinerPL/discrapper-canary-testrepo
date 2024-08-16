n(411104);
var r = n(710845),
    i = n(358085),
    a = n(579806);
let s = new r.Z('ProgressBarManager');
t.Z = new (class e {
    setProgress(e, t) {
        if (!(0, i.isDesktop)()) throw Error('cannot set progress from non-native');
        if (null != this.taskID && this.taskID !== e) {
            s.warn(''.concat(this.taskID, ' is already running. cannot set ').concat(e));
            return;
        }
        (this.taskID = e), a.Z.window.setProgressBar(t);
    }
    clearProgress(e) {
        if (!(0, i.isDesktop)()) throw Error('cannot clear progress from non-native');
        if (null == this.taskID) {
            s.warn('cannot clear progress. No current progress running.');
            return;
        }
        if (this.taskID !== e) {
            s.warn('cannot clear progress of '.concat(e, ' when ').concat(this.taskID, ' is running'));
            return;
        }
        (this.taskID = null), a.Z.window.setProgressBar(-1);
    }
    constructor() {
        var e, t, n;
        (e = this),
            (n = void 0),
            (t = 'taskID') in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n);
    }
})();
