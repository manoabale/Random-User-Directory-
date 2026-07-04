async function loadUsers() {
  try {
    const res = await fetch("https://randomuser.me/api/?results=12");
    const data = await res.json();

    const container = document.getElementById("userContainer");
    container.innerHTML = "";

    data.results.forEach(user => {
      const div = document.createElement("div");
      div.className = "user-card";
      div.innerHTML = `
        <img src="${user.picture.medium}" alt="User photo" />
        <h3>${user.name.first} ${user.name.last}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error(err);
    document.getElementById("userContainer").innerHTML = "<p>Error loading users.</p>";
  }
}
