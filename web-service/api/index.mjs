import ex from "express";

const app = ex();
app.use(ex.urlencoded({ extended: true }));

let messages = [];

app.get('/', (req, res) => {
    res.send(`<b>Current messages:</b><br>${messages.join("<br>")}<br>
        <form action="/" method="POST"><input type="text" name="msg"/><button type="submit">Add message!</button></form>`);
});

app.post('/', (req, res) => {
    messages.push(req.body.msg);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("Started listening");
});