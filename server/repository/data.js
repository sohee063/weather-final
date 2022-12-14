const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

module.exports.data = [
  {
    id: "1",
    title: "λ°κ°μμ₯ π",
    content: "μλνμΈμ π₯ κΉμν¬ μλλ€.",
    author: "μν",
    createdAt: 0
  },
  {
    id: 2,
    title: "π",
    content: "μλνμΈμ π₯ κΉμν¬ μλλ€.",
    author: "μν",
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
