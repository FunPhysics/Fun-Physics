# Fun-Physics

Team Members:

1-Hidaya Abd Al-Aziz Syam

2- Adnan Ahmed Abumuammer

3- Waleed Jeries Farraj

4-Duha Mahmoud Salah

Fun physics website which provides scientific content simplifying physics in many ways for everyone including students from various levels of education . in this day and age where learning was moved to the cyber world we strive to provide a simple and fun source for learning about physics and astronomy as the main focus of the site. It fulfils the need of scientific  data and the lack of scientific-educational content  and presents it in a  simplified way and provide updated information about astronomy

# Users Storis

1. As a user i want to login to my own account and ne able to contribute by adding articles to the website.
-data base to contain the user info
- authintication for the user
-opening a new session for each user.
2.As a user i want to search for intresting topics in the universe and view them as images to fulfuil my curuosity for the mystic and the unknown .
- when the user chooses a keyword and click explore it will get data from the api and add them to the database.
-then it render them to the page .
3. As a user i want to be able to ask the community of the website scientfic questions and hear there answers and feedback .
1. a form for the question that addes it a database for the questions .
2. then  it renders the questions in the q and a page where people can submit answers
3. people can answer questions and those questions will be added to a tbale for answers in the data base.
4. As a user i want to view the contributors that are adding articles and learn about them .
each user photo and bio will be displayed in the contributors


## [Wireframe](https://drive.google.com/file/d/17-oWQkSGUTpcuB3A-czMKpBr9HzaakkK/view?usp=sharing)

## [Entity Relationship](https://drive.google.com/file/d/1VGlPMthapygIvDAokvPg4gKNfAjf0nOH/view?usp=sharing)

## Api documentation

### authintication
```javascript
POST /auth/login var payload = { email, password } return res.render("/"); // return to home if success
POST /auth/register var payload = { email, password, first_name, last_name } return res.render("/");
GET /auth/logout var payload = {} return res.render("/"); // return to home if success
```

### articles
```javascript
GET /articles var payload = { } return [articles];
GET /articles/:id var payload = { } return [articles[id]];
GET /articles/userId/:id var payload = {} return { articles[id=author_id] }

POST /articles var payload = { title, description } return res.status(201);
```
### clappedArticles
```javascript
GET /clappedArticles/userId/:id var payload = { } return [clappedArticles[user_id=id]];

POST /clappedArticles/userId/:id var payload = { article_id } res.status(201);
```

### questions
```javascript
GET /questions var payload = { } return [questions];
GET /questions/:id var payload = { } return [questions[id]];
GET /questions/:id/answers var payload = {} return { question_answers[question_id=id] }

POST /questions var payload = { content } return res.status(201);
POST /questions/:id/answers var payload = { content } return res.status(201);
```

### user
```javascript
GET /user/me var payload = { } return req.session.user;
```
