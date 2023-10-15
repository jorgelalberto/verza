const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

let modelPromise = {};
let userInput;

const process = async (question) => {
  const model = await modelPromise;
  const answers = await model.findAnswers(question, "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet.");
  console.log(question)
  console.log(answers)
  if (answers.length !== 0) {renderMessageEle(answers[0].text, "chatbot-message");}
  else {renderMessageEle("Could you repeat that differently?", "chatbot-message")}
};

// send clicked -> render user message
send.addEventListener("click", () => renderUserMessage());
// enter keyboard clicked -> render user message
txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user-message");
  /*Clears msg after send */
  txtInput.value = "";
  /*Wait for response makes msg seem more natural */
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};

/*
Creates msg text based on input
For type user or type chatbot
*/
const renderMessageEle = (txt, type) => {
  let className = type
  if (type !== "user-message"){ className = "chatbot-message"}
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

/*
Automatically resets chat body position to lowest
if scrollbar is activated
*/
const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

const renderChatbotResponse = (userInput) => {
  modelPromise = qna.load();
  process(userInput);
};