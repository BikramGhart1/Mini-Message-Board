const express = require('express');
const router = express.Router();
const app = express();

app.use(express.urlencoded({ extended: true }));

const messages = [
    {
        text: "Hi there",
        user: "Arnold",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "Skibidi ohio",
        user: "Brian",
        added: new Date()
    }
]

router.get("/", (req, res) => {
    // res.send("Home page");
    res.render('index', {
        title: "Mini message board",
        message: messages
    });
})
router.get("/new", (req, res) => {
    // res.send("New form page");
    res.render('form', { title: "new form" });
})
router.post("/new", (req, res) => {
    // let author = req.body.author;
    // let messageText = req.body.messageText;

    const { author, messageText } = req.body;
    // console.log("author: ", author);
    // console.log("message: ", messageText);
    messages.push({ text: messageText, user: author, added: new Date() });
    res.redirect("/");
})

module.exports = router;