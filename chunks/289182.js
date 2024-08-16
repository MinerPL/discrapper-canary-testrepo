n.d(t, {
    v: function () {
        return a;
    }
});
var r = n(625306),
    i = n(570140);
function a(e) {
    return {
        ...e,
        extra: {
            ...(null == e ? void 0 : e.extra),
            ...{
                ...(null != i.Z._currentDispatchActionType ? { currentAction: i.Z._currentDispatchActionType } : {}),
                lastFewActions: (0, r.qC)()
            }
        }
    };
}
