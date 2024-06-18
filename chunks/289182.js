"use strict";
n.d(t, {
  v: function() {
    return s
  }
});
var i = n(625306),
  r = n(570140);

function s(e) {
  return {
    ...e,
    extra: {
      ...null == e ? void 0 : e.extra,
      ...{
        ...null != r.Z._currentDispatchActionType ? {
          currentAction: r.Z._currentDispatchActionType
        } : {},
        lastFewActions: (0, i.qC)()
      }
    }
  }
}