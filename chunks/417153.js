n.d(t, {
    CF: function () {
        return s;
    },
    Es: function () {
        return a;
    },
    z5: function () {
        return o;
    }
}),
    n(47120);
var r = n(652874),
    i = n(731965);
let a = (0, r.Z)(() => ({
    currentToast: null,
    queuedToasts: []
}));
function s(e) {
    (0, i.j)(() => {
        a.setState((t) =>
            null != t.currentToast
                ? {
                      ...t,
                      queuedToasts: [...t.queuedToasts, e]
                  }
                : {
                      currentToast: e,
                      queuedToasts: []
                  }
        );
    });
}
function o() {
    (0, i.j)(() => {
        a.setState((e) => {
            let t = e.queuedToasts;
            return t.length > 0
                ? {
                      currentToast: t[0],
                      queuedToasts: t.slice(1)
                  }
                : {
                      currentToast: null,
                      queuedToasts: []
                  };
        });
    });
}
