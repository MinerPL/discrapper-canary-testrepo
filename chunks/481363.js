n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(789020);
var i = n(735250);
n(470079);
var a = n(630388),
    s = n(901461),
    l = n(773176),
    r = n(981631),
    o = n(58755);
function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: u },
            isFocused: d,
            buttonProps: { message: h, channel: m, groupId: p, compact: _ = !1 }
        } = e,
        E = h.state === r.yb.SENDING,
        f = h.id === p,
        C = (0, a.yE)(h.flags, r.iLy.EPHEMERAL),
        g = h.state === r.yb.SEND_FAILED;
    return E || (C && !g)
        ? null
        : (0, i.jsx)(l.Z, {
              className: o.buttons,
              innerClassName: o.buttonsInner,
              isHeader: !_ && f && !(0, s.Z)(h),
              channel: m,
              message: h,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: c,
              showMoreUtilities: u,
              isFocused: d
          });
}
