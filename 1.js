export const newKatoo = () => {
const newKatooTopic = document.getElementById("createTopic-Title").value
const newKatooDesc = document.getElementById("createTopic-desc").value
data.katoo.push({"topic":newKatooTopic,"content":newKatooDesc})
}