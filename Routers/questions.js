const express = require("express");

const router = express();

const questionsController = require("../Controllers/questions");
const { loginRequired } = require("../Controllers/utils");

router.get("/", questionsController.listQuestions);
router.post("/", loginRequired, questionsController.createQuestion);
router.get("/:id", questionsController.getQuestion);
router.get("/:id/answers", questionsController.listQuestionAnswers);
router.post("/:id/answers", loginRequired, questionsController.createQuestionAnswer);

exports.default = router;
