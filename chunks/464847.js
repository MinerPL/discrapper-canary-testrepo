
function r(e) {
  if (null != window.DiscordSentry)
window.DiscordSentry.addBreadcrumb({
  type: 'default',
  level: 'info',
  category: e.category,
  message: e.message,
  data: e.data,
  timestamp: Date.now()
});
}
n.d(t, {
  Z: function() {
return r;
  }
});