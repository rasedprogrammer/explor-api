function loadUsers2() {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.json())
		.then((data) => displayUsers2(data));
}
function displayUsers2(data) {
	const ulList = document.getElementById("user-list");
	for (const user of data) {
		const liList = document.createElement("li");
		liList.innerText = user.name;
		ulList.appendChild(liList);
	}
}
