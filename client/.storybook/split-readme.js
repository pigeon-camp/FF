import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

const SplitReadme = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          srDocs: {}
        };
      },
      methods: {
        srDocsRun(readme) {
          const matches = readme.match(/<\!\-\-split.*?\-\->/g);
          let splitedReadme = readme.split(/<\!\-\-split.*?\-\->/);
          splitedReadme = splitedReadme.filter(item => item.trim().length > 0);
          matches.map((match, index) => {
            let title = match.replace("<!--split:", "");
            title = title.replace("-->", "");
            this.srDocs[title.trim()] = `${splitedReadme[index]}`;
          });
        },
        highlighting(code) {
          const md = new MarkdownIt({
            highlight: function(str, lang) {
              if (lang && hljs.getLanguage(lang)) {
                try {
                  return (
                    '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>'
                  );
                } catch (__) {}
              }

              return (
                '<pre class="hljs"><code>' +
                md.utils.escapeHtml(str) +
                '</code></pre>'
              );
            }
          });
          const result = md.render(code);
          return result;
        }
      }
    })
  }
}

export default SplitReadme