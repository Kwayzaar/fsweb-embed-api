import FormsortWebEmbed from "@formsort/web-embed-api";

document.addEventListener("DOMContentLoaded", () => {
	const container = document.getElementById("form-container");
	if (!container)
		return console.error('No element with id="form-container found"');

	const embed = FormsortWebEmbed(container, {
		autoHeight: true
	});

	embed.loadFlow("erictest", "embed-test", "main");

	embed.addEventListener("FlowLoaded", () => {
		console.log("Flow loaded!");
	});
});
