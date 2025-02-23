// Sample blog data
let blogPosts = [
    {
        id: 1,
        title: "Getting started with Javascript",
        content: "Learn the basics of Javascript",
        date: "2025-02-21",
    },
    {
        id: 2,
        title: "Getting started with React",
        content: "Learn the basics of React",
        date: "2025-03-21",
    },
    {
        id: 3,
        title: "Getting started with CSS",
        content: "Learn the basics of CSS",
        date: "2025-03-11",
    },
    {
        id: 4,
        title: "Getting started with Java",
        content: "Learn the basics of Java",
        date: "2025-03-25",
    },
];

for (let i = 5; i <= 15; i++) {
    blogPosts.push({
        id: i,
        title: `Sample Post ${i}`,
        content: `This is sample post for content ${i}`,
        date: `2025-03-${23 - i}`,
    });
}

let currentPage = 1;
const postsPerPage = 3;

// DOM Elements
const blogPostsContainer = document.getElementById("blogPosts");
const paginationContainer = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

document.addEventListener("DOMContentLoaded", () => {
    displayPosts();
    setUpEventListeners();
});

function setUpEventListeners() {
    searchInput.addEventListener("input", () => {
        currentPage = 1;
        displayPosts();
    });
    sortSelect.addEventListener("change", () => {
        currentPage = 1;
        displayPosts();
    });
}

function displayPosts() {
    // Get filtered and sorted posts
    const filteredPosts = filterPosts();
    const sortedPosts = sortPosts(filteredPosts);
    // 4 => 3 per page => 4 / 3 = 1.3 ceil => 2

    // Pagination logic
    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

    const startIndex = (currentPage - 1) * postsPerPage;
    // currentPage = 1 => startIndex = 0 (0, 1, 2)
    // currentPage = 2 => startIndex = 3 (3, 4, 5)
    const paginatedPosts = sortedPosts.slice(
        startIndex,
        startIndex + postsPerPage,
    );

    // Display posts
    renderPosts(paginatedPosts);
    renderPagination(totalPages);
}

function filterPosts() {
    const searchTerm = searchInput.value.toLowerCase();
    return blogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm),
    );
}

function sortPosts(posts) {
    return [...posts].sort((a, b) => {
        if (sortSelect.value === "newest") {
            return new Date(b.date) - new Date(a.date);
        }
        return new Date(a.date) - new Date(b.date);
    });
}

function renderPosts(posts) {
    blogPostsContainer.innerHTML = posts
        .map(
            (post) => `
                <div class="blog-card">
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <div class="date">${new Date(
                        post.date,
                    ).toLocaleDateString()}</div>
                </div>
            `,
        )
        .join("");
}

function renderPagination(totalPages) {
    let buttons = "";
    for (let i = 1; i <= totalPages; i++) {
        buttons += `
        <button class="${
            i === currentPage ? "active" : ""
        }" onclick="changePage(${i})">${i}</button>
        `;
    }
    paginationContainer.innerHTML = buttons;
}

function changePage(page) {
    currentPage = page;
    displayPosts();
}
