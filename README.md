
Users & Posts Dashboard
This is a Next.js application that fetches and displays a list of user profiles and their related posts. It uses external APIs to populate data and allows users to view the posts of individual users.

Table of Contents
Setup and Run Locally
Overview
API Integrations
Additional Notes
Setup and Run Locally
To get this Next.js application up and running locally, follow the steps below:

1. Clone the repository:

git clone https://github.com/Vivek-257/orderfly-task.git

After cloning change directory with
cd orderfly-task
2. Install dependencies:

After cloning the repo, install the dependencies by running:

npm install
3. Run the application:
Once all dependencies are installed, you can start the development server with:

npm run dev
The application should now be running at http://localhost:3000.

Overview
This application uses Next.js (version 15) with the new app directory structure. Here's an overview of the approach taken:

Data Fetching
Users: The app fetches user data from a public API (https://jsonplaceholder.typicode.com/users), which includes user details such as name, email, and company.
Posts: When a user is clicked, the app fetches related posts for that user from the same API (https://jsonplaceholder.typicode.com/posts?userId={userId}). The posts are displayed on the user's page.
Folder Structure
app/user: Contains user-related components and pages.

UserCard.tsx: Displays individual user information.
UserPosts.tsx: Displays the posts related to a specific user.
[id]/page.tsx: The page to display the posts of a specific user.
components/: Contains reusable components like PostList.tsx, which displays a list of posts.

app/layout.tsx: Layout component that wraps all pages and handles global styles.

API Integrations
The application integrates with the following external API:

JSONPlaceholder API:
Users: https://jsonplaceholder.typicode.com/users
Posts: https://jsonplaceholder.typicode.com/posts?userId={userId}
Testing the API Integrations
You can test the API integration by visiting the user pages. For example:

http://localhost:3000/user/1 will show the posts for the user with ID 1.
The posts should load dynamically based on the user selected.

Additional Notes
The project was created with Next.js 15 using the app directory structure.
Tailwind CSS is used for styling.
The project is using TypeScript for type safety and better development experience.
No back-end or database is involved as it uses a third-party API for data fetching.
