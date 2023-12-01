const post = async (event) => {
  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();

  if (title && description) {
    const response = await fetch("/api/users/post", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

const updateto = async (event) => {
  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();

  if (title && description) {
    const response = await fetch("/api/users/post", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

const dele = async (event) => {
  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();

  if (title && description) {
    const response = await fetch("/api/users/post", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document.querySelector("#Po").addEventListener("click", post);

document.querySelector("#Update").addEventListener("click", updateto);

document.querySelector("#Delete").addEventListener("click", dele);
