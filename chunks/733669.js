var e = r(325008), o = r(936940);
t.exports = e && o(function () {
    return 42 !== Object.defineProperty(function () {
    }, 'prototype', {
        value: 42,
        writable: !1
    }).prototype;
});
