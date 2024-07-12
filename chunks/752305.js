
function r() {
  return {
textValue: '',
richValue: [{
  type: 'line',
  children: [{
    text: ''
  }]
}]
  };
}

function i(e) {
  return {
textValue: e,
richValue: o(e)
  };
}
n.d(t, {
  H2: function() {
return r;
  },
  JM: function() {
return o;
  },
  VI: function() {
return s;
  },
  eK: function() {
return i;
  }
}), n(411104);
let a = Object.freeze([Object.freeze({
  type: 'line',
  children: Object.freeze([Object.freeze({
text: ''
  })])
})]);

function o(e) {
  return '' !== e ? e.split('\n').map(e => ({
type: 'line',
children: [{
  text: e
}]
  })) : a;
}

function s(e) {
  switch (e.type) {
case 'userMention':
  return {
    type: 'userMention',
      userId: e.userId
  };
case 'channelMention':
  return {
    type: 'channelMention',
      channelId: e.channelId
  };
case 'staticRouteLink':
  return {
    type: 'staticRouteLink',
      channelId: e.channelId
  };
case 'soundboard':
  return {
    type: 'soundboard',
      soundId: e.soundId
  };
case 'roleMention':
  return {
    type: 'roleMention',
      roleId: e.roleId
  };
case 'textMention':
  return {
    type: 'textMention',
      text: e.name
  };
case 'emoji':
  return {
    type: 'emoji',
      name: e.emoji.name,
      surrogate: e.emoji.surrogate
  };
case 'customEmoji':
  return {
    type: 'customEmoji',
      emojiId: e.emoji.emojiId,
      name: e.emoji.name,
      animated: e.emoji.animated
  };
case 'testInlineVoid':
  throw Error('Unable to convert test types');
  }
  return null;
}