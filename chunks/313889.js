var r, i;
n.d(t, {
    d: function () {
        return r;
    },
    t: function () {
        return a;
    }
}),
    ((i = r || (r = {}))[(i.SET_COMPLETED = 1)] = 'SET_COMPLETED'),
    (i[(i.UNSET_COMPLETED = 2)] = 'UNSET_COMPLETED'),
    (i[(i.DELETE_USER_MESSAGE = 3)] = 'DELETE_USER_MESSAGE'),
    (i[(i.SUBMIT_FEEDBACK = 4)] = 'SUBMIT_FEEDBACK');
function a(e) {
    if (null == e) return null;
    let t = (function (e) {
        if (null == e) return null;
        try {
            return JSON.parse(e);
        } catch (e) {
            return null;
        }
    })(e);
    return null == t || null == t.actions
        ? null
        : (Object.keys(t.actions).forEach((e) => {
              t.actions[e].actionType = e;
          }),
          t);
}
