/* global hexo */

'use strict';

hexo.extend.helper.register('point_injected', function(type) {
  return hexo.theme.config.injects[type] && hexo.theme.config.injects[type].length > 0;
});

hexo.extend.filter.register('theme_inject', function(injects) {
  injects.bodyEnd.file('showword', 'source/_inject/show_wordcount_total.ejs', { key: 'value' }, -1);
});
