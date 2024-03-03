let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";
    voices.forEach((voice, i) => {
        const option = document.createElement("option");
        option.textContent = voice.name;
        option.setAttribute("value", i);
        voiceSelect.appendChild(option);
    });
}

window.speechSynthesis.onvoiceschanged = populateVoices;

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
