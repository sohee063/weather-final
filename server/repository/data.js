const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

module.exports.data = [
  {
    id: "1",
    title: "반가워욥 🖐",
    content: "안녕하세요 🐥 김소희 입니다.",
    author: "소히",
    createdAt: 0
  },
  {
    id: 2,
    title: "🖐",
    content: "안녕하세요 🐥 김소희 입니다.",
    author: "소히",
    createdAt: 0
  }
].map((discussion) => {
  if (discussion.answer) {
    return {
      ...discussion,
      bodyHTML: DOMPurify.sanitize(discussion.bodyHTML),
      answer: {
        ...discussion.answer,
        bodyHTML: DOMPurify.sanitize(discussion.answer.bodyHTML)
      }
    };
  }

  return {
    ...discussion,
    bodyHTML: DOMPurify.sanitize(discussion.bodyHTML)
  };
});
