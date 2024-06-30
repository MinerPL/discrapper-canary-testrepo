var n = r(147018), _ = r(926515);
n({
    target: 'URL',
    proto: !0,
    enumerable: !0
}, {
    toJSON: function () {
        return _(URL.prototype.toString, this);
    }
});
