## React Sorting and Pagination users

### Hello candidate welcome to the challenge, please read the instructions carefully.

#### Expected results:
1. We need to be able to show a set 4 users by default the API shows 6, so pay attention on the api schema, and add any query that you may need. https://reqres.in/api/users?per_page=4

2. We need to be able to sort the users alphabetical by its name and by id,
we have a dropdown already, so you could use it.

3. The api has pages, so we need to be able to do some basic pagination if we don't have any users in the last page, so we need to show an alert that tells the user that we don't have any users, otherwise, if we are on the first page and we click on the previous button, we need to block the pagination.

#### Instructions:

 1. API Request:
 Replace the mockdata with real data coming from the api
https://reqres.in/api/users?per_page=4, remember that we have axios already loaded
 Remember that we need to show a set of 4 users, the api
 Shows 6 users by default, so maybe a query param will work

2. Sorting:
   Create a sort functionality, that sort the give us the
   ability to sort the users by "id" and in "alphabetical" order
   hint: .sort() will work great.

   3.- Pagination:
   Create a pagination feature, that should work like this:
   The api has some values called:
   page - this value indicates the current page
   total - this value is the length of the users
   total_pages - this value is length of the pages

   Test cases:
   *If we are on the last page, we need to block the pagination,
   and display an alert, saying that we don't have more users, and
   if we are on the first page and we try to go to a previous page,
   we just need to block the pagination.*
   Having that in mind, maybe doing some params: {} in the request
   will work just fine,

   Create a function that change the page and shows the next 4 users

   Create a function taht change the page and shows the previous 4 users

   https://reqres.in/api/users?per_page=4,