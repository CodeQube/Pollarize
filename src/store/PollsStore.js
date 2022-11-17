import { defineStore } from "pinia";

export const usePollsStore = defineStore("polls", {
	state: () => ({
		polls: [
			{
				id: 0,
				pollText: "Trivsel på arbeidsplassen",
				status: "Active",
				question: "Trives du på jobben?",
			},
			{
				id: 1,
				pollText: "Trivsel på arbeidsplassen2",
				status: "Inactive",
				question: "Kan vi gjøre noe for å forbedre din arbeidsdag?",
			},
		],
	}),
	getters: {},
	actions: {},
});
