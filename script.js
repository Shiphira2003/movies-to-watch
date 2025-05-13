document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector("#movie-list ul");
    const forms = document.forms;


    list.addEventListener("click", function (e) {
        const li = e.target.closest("li");

        if (e.target.className === "delete") {
            li.parentNode.removeChild(li);
        }

        else if (e.target.className === "edit") {
            const movieName = li.querySelector(".name");
            const currentName = movieName.textContent;

            
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentName;
            input.classList.add("edit-input");

            li.insertBefore(input, movieName);
            li.removeChild(movieName);

            e.target.textContent = "Save";
            e.target.className = "save";
        }

        else if (e.target.className === "save") {
            const input = li.querySelector(".edit-input");
            const newName = input.value;

            const span = document.createElement("span");
            span.textContent = newName;
            span.classList.add("name");

            li.insertBefore(span, input);
            li.removeChild(input);

            e.target.textContent = "Edit";
            e.target.className = "edit";
        }
    });


    const addMovieForm = forms["add-movie"];
    addMovieForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const userInput = addMovieForm.querySelector('input[type="text"]').value.trim();

        if (!userInput) {
            alert("Please enter a movie name!");
            return;
        }

        const li = document.createElement("li");
        const movieName = document.createElement("span");
        const buttonWrapper = document.createElement("span");
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");

        movieName.textContent = userInput;
        deleteBtn.textContent = "Delete";
        editBtn.textContent = "Edit";

        movieName.classList.add("name");
        deleteBtn.classList.add("delete");
        editBtn.classList.add("edit");
        buttonWrapper.classList.add("buttons");

        buttonWrapper.appendChild(editBtn);
        buttonWrapper.appendChild(deleteBtn);

        li.appendChild(movieName);
        li.appendChild(buttonWrapper);
        list.appendChild(li);

        addMovieForm.reset();
    });
});
