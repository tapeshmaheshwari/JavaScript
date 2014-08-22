function assert(condition, text)
{
	var entry = document.createElement("li");
	entry.innerHTML = text;
	entry.classList.add(condition ? "pass" : "fail");
	document.getElementById("result").appendChild(entry);
}
