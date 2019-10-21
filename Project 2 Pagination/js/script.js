//Treehouse project 2- list pagination

//Global variables needed include the student list items, and amount of results per page.

const studentList = document.getElementsByClassName('student-item cf');
const studentsPerPage = 10;
const student = document.getElementsByClassName('student-item');


//Needs more work, to be continued

// //Dynamically inserting the search bar:
// // Create elements needed 
// const searchDiv = document.createElement('div');
// searchDiv.className = 'student-search';
// const searchInput = document.createElement('input');
// searchInput.placeholder = 'Search for students';
// const searchButton = document.createElement('button');
// searchButton.textContent = 'Search';
// //locate parent element
// const searchParent = document.getElementsByClassName('page-header')[0];
// //locate sibling to insert before
// searchSibling = document.getElementsByClassName('pagination');
// //insert elements into DOM
// searchParent.appendChild(searchDiv);
// searchDiv.appendChild(searchInput);
// searchDiv.appendChild(searchButton);

// let studentName = document.getElementsByTagName('h3');
// //add functionality to search bar
// function search(inputVal, list) {
//    let results = [];
//    let studentName = list[i].querySelector('h3');
//    for (let i = 0; i < list.length; i++) {
//       list[i].style.display = 'none';
//       if (studentName.toLowerCase().includes(inputVal.toLowerCase()))
//       list[i].style.display = '';
//       results.push(list[i]); 
//       else {
//          alert('No results found');
//       }
//    }
// return results
// }

// ShowPage function, shows the first 10 students in a page

const showPage = (list, page) => {
   const startIndex = Math.ceil(page * studentsPerPage) - studentsPerPage;
   const endIndex = (page * studentsPerPage) - 1;
   
   for (let i = 0; i < list.length; i ++) {
      if (i >= startIndex && i <= endIndex) {
         list[i].style.display = '';

      }  else {
         list[i].style.display = 'none';
      }
   }
};

// function to dynamically append elements needed for the pagination links
 const appendPageLinks = (list) => {
   let NumberOfPages = studentList.length / studentsPerPage;
   const pageDiv = document.getElementsByClassName('page')[0];
   const newDiv = document.createElement('div');
   newDiv.className = 'pagination';
   pageDiv.appendChild(newDiv);
   const newDivUl = document.createElement('ul');
   newDiv.appendChild(newDivUl);

   for (let i = 0; i < NumberOfPages; i++) {
      li = document.createElement('li');
      a = document.createElement('a');
      a.textContent = i + 1;
      newDivUl.appendChild(li);
      li.appendChild(a);
      
      //set the event listener to activate the clicked link
      a.addEventListener('click', (e) => {
         links = document.querySelectorAll('a');
         for (let i = 0; i < links.length; i++) {
            links[i].className = '';
         }
         // set the event listener to click on the active links and show the link as an integer variable
         e.target.className = 'active';
         let page = parseInt(e.target.textContent);
         
         //console.log(e.target.textContent);
         
         showPage(studentList, page);
      });
 }
}

//calling the function on page 1 to load the first page in the browser

showPage(studentList, 1);
appendPageLinks(studentList);
