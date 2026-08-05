const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");
const saveBtn = document.getElementById("saveBtn");

const bookmarkList = document.getElementById("bookmarkList");
const emptyMessage = document.getElementById("emptyMessage");
const count = document.getElementById("count");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

saveBtn.addEventListener("click", saveBookmark);

function saveBookmark() {
    let title = titleInput.value.trim();
    let url = urlInput.value.trim();

    if (title === "" || url === "") {
        alert("Please fill all fields.");
        return;
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        alert("URL should start with http:// or https://");
        return;
    }

    let bookmark = {
        title: title,
        url: url
    };

    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    titleInput.value = "";
    urlInput.value = "";

    displayBookmarks();
}

function displayBookmarks() {
    bookmarkList.innerHTML = "";
    count.innerHTML = `${bookmarks.length} Bookmarks`;

    if (bookmarks.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    bookmarks.forEach(function(bookmark, index) {
        bookmarkList.innerHTML += `
        <li>
            <div class="bookmark-info">
                <h3>${bookmark.title}</h3>
                <a href="${bookmark.url}" target="_blank">${bookmark.url}</a>
            </div>

            <div class="actions">
                <button class="visitBtn" onclick="visitWebsite('${bookmark.url}')">
                    Visit
                </button>

                <button class="deleteBtn" onclick="deleteBookmark(${index})">
                    Delete
                </button>
            </div>
        </li>`;
    });
}

function visitWebsite(url) {
    window.open(url, "_blank");
}

function deleteBookmark(index) {
    bookmarks.splice(index, 1);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    displayBookmarks();
}

displayBookmarks();