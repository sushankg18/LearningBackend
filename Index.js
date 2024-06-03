require('dotenv').config()
const express = require("express")
// const PORT = 3000
const app = express();

const githubData = {
    "login": "sushankg18",
    "id": 131856390,
    "node_id": "U_kgDOB9v4Bg",
    "avatar_url": "https://avatars.githubusercontent.com/u/131856390?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sushankg18",
    "html_url": "https://github.com/sushankg18",
    "followers_url": "https://api.github.com/users/sushankg18/followers",
    "following_url": "https://api.github.com/users/sushankg18/following{/other_user}",
    "gists_url": "https://api.github.com/users/sushankg18/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sushankg18/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sushankg18/subscriptions",
    "organizations_url": "https://api.github.com/users/sushankg18/orgs",
    "repos_url": "https://api.github.com/users/sushankg18/repos",
    "events_url": "https://api.github.com/users/sushankg18/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sushankg18/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sushank Gautam",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 2,
    "following": 5,
    "created_at": "2023-04-26T07:48:02Z",
    "updated_at": "2024-05-22T12:21:11Z"
}

app.get('/', (req, res) => {
    res.send("<h1>HELLO IT'S ME HOME PAGE</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>HELLO IT'S ME ABOUT PAGE</h1>")
})

app.get('/github', (req, res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`SERVER IS WORKING ON http://localhost:${process.env.PORT}`)
})