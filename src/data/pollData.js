// export const pollData = {
//   polls: [
//     {
//       pollText: 'Trivsel på arbeidsplassen',
//       status: 'Active',
//       questions: [
//         {
//           questionText: 'Trives du på jobben?',
//           answers: ['Ja', 'Nei', 'Vet ikke']
//         }
//       ]
//     },
//     {
//       pollText: 'Trivsel på arbeidsplassen2',
//       status: 'Inactive',
//     },
//   ],
// };


export const model = {
	app: {
		// page: "allPolls",
		page: "pollQuestions",

		state: {
			selectedPollIndex: 0,
			selectedQuestionIndex: null,
		},
	},

	variables: {
		answerTxtVar: null,
	},

	inputs: {
		loginPage: {
			userNameTxt: "",
			passwordTxt: "",
		},

		userView: {},

		createNewPoll: {
			newPollName: "",
			newQuestion: {
				allowCustomAnswers: false,
				questionText: "",
				newPollAnswer: [
					{ answerText: "" },
					{ answerText: "" },
					{ answerText: "" },
				],
			},
		},
	},

	// #region Data //
	users: [
		{ name: "admin", password: "123" },
		{ name: "admin2", password: "321" },
	],

	submittedPolls: [
		{
			pollId: 1,
			question1: {
				answer1: {
					id: 1,
					count: 0,
				},
				answer2: {
					id: 2,
					count: 0,
				},
				answer3: {
					id: 3,
					count: 0,
				},
			},
			question2: {
				answer1: {
					id: 1,
					count: 0,
				},
				answer2: {
					id: 2,
					count: 0,
				},
				answer3: {
					id: 3,
					count: 0,
				},
			},
			question3: {
				answer1: {
					id: 1,
					count: 0,
				},
				answer2: {
					id: 2,
					count: 0,
				},
				answer3: {
					id: 3,
					count: 0,
				},
			},
			question4: {
				answer1: {
					id: 1,
					count: 0,
				},
				answer2: {
					id: 2,
					count: 0,
				},
				answer3: {
					id: 3,
					count: 0,
				},
			},
		},
		{
			pollId: 1,
			userAnswers: {
				question1: 2,
				question2: 3,
				question3: 1,
			},
		},
	],

	polls: [
		{
			title: "Trivsel på arbeidsplassen",
			pollFinish: ["manual", "date"],
			expectedVoteCount: 100,
			totalVoteCount: 100,
			status: "active",
			pollId: 0,
			questions: [
				{
					customUserAnswers: false,
					question: "Trives du på jobben?",
					answers: [
						{
							answerId: 1,
							answerTxt: "Ja",
							resultCount: 50,
							resultPercentage: (this.resultCount / this.totalVoteCount) * 100,
						},
						{
							answerId: 2,
							answerTxt: "Nei",
							resultCount: 25,
							resultPercentage: (this.resultCount / this.totalVoteCount) * 100,
						},
						{
							answerId: 3,
							answerTxt: "Vet ikke",
							resultCount: 25,
							resultPercentage: (this.resultCount / this.totalVoteCount) * 100,
						},
					],
				},
				{
					customUserAnswers: false,
					question: "Kan vi gjøre noe for din trivsel?",
					answers: [
						{
							answerId: 1,
							answerTxt: "Ja",
							resultCount: 25,
							resultPercentage: 25,
						},
						{
							answerId: 2,
							answerTxt: "Nei",
							resultCount: 75,
							resultPercentage: 75,
						},
						{
							answerId: 3,
							answerTxt: "Vet ikke",
							resultCount: 0,
							resultPercentage: 0,
						},
					],
				},
				{
					customUserAnswers: false,
					question: "Er det noe du er misfornøyd med?",
					answers: [
						{
							answerId: 1,
							answerTxt: "Ja",
							resultCount: 0,
							resultPercentage: 0,
						},
						{
							answerId: 2,
							answerTxt: "Nei",
							resultCount: 0,
							resultPercentage: 0,
						},
						{
							answerId: 3,
							answerTxt: "Vet ikke",
							resultCount: 100,
							resultPercentage: 100,
						},
					],
				},
				{
					customUserAnswers: false,
					question: "Har du noen forslag til økt trivsel?",
					answers: [
						{
							answerId: 1,
							answerTxt: "Ja",
							resultCount: null,
							resultPercentage: null,
						},
						{
							answerId: 2,
							answerTxt: "Nei",
							resultCount: null,
							resultPercentage: null,
						},
						{
							answerId: 3,
							answerTxt: "Vet ikke",
							resultCount: null,
							resultPercentage: null,
						},
					],
				},
			],
		},
	],
	// #endregion //
};


