    "use strict";
    t.r(a), t.d(a, {
      default: function() {
        return c
      }
    });
    var s = t("659500"),
      d = t("791776"),
      n = t("75480"),
      i = t("49111"),
      c = {
        init() {
          document.addEventListener("paste", e => {
            !(0, n.default)((0, d.eventOwnerDocument)(e)) && s.ComponentDispatch.dispatchToLastSubscribed(i.ComponentActions.GLOBAL_CLIPBOARD_PASTE, {
              event: e
            })
          })
        }
      }