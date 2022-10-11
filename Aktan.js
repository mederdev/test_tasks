// Тестовое задание на Node.JS
// 	(10 - 30 минут)

const flowData = {
	start_step: "8e9893a6-6930-476e-80d6-cf68a731044a",
	steps: [{
		id: "8e9893a6-6930-476e-80d6-cf68a731044a",
		title: "Outbound call",
		kind: "outbound_call",
		options: null,
		ref: "a266540c-5052-4bb5-8ee6-eb455bd1111"
	},
	{
		id: "a266540c-5052-4bb5-8ee6-eb455bd1111",
		title: "Play audio",
		kind: "play_audio",
		options: {
			audio: {
				url: "https://company.org/play/audio.mp3"
			}
		},
		ref: "810893a6-6930-476e-80d6-cf68a731044a"
	},
	{
		id: "810893a6-6930-476e-80d6-cf68a731044a",
		title: "Collect input",
		kind: "collect_input",
		options: null,
		ref: "810893a6-6930-476e-70d6-cf68a731044a"
	},
	{
		id: "810893a6-6930-476e-70d6-cf68a731044a",
		title: "Scenario End",
		kind: "scenario_end",
		options: null,
		ref: null
	}]
}
class MainClass {

	allSteps;

	constructor(dataString) {
		this.allSteps = dataString;
	}

	getStep(id) {
		return this.allSteps.steps.find(item=>item.id===id)||null;
	}
	getNextStep(id) {
		const result=this.allSteps.steps.find(item=>item.id===id);
		return this.getStep(result.ref);
	}
	getPrevStep(id) {
		return this.allSteps.steps.find(item=>item.ref===id)||null;
	}
	getSteps() {
		return this.allSteps.steps.map(element=>element.id);
	}
	checkAudio(id) {
		const result=this.getStep(id);
		return result.options!==null && result.options.audio!==null?true:false;
	}
}

const mdl = new MainClass(flowData);

console.log(mdl.getSteps());
console.log(mdl.getNextStep())
console.log(mdl.getPrevStep())
console.log(mdl.getSteps())
console.log(mdl.checkAudio())