/*

1. create a page to fill the problem text in a form
2. save the issue added by the form to the list of issues in the state 
3. in home page , show in the list the state filled issues ,
4. when user start seaching, u should match the search of the result


<ul className="tasks-list">
        {tasks.map((tasks) => (
          <li className="tasks-card" key={tasks.id}>
            <h2>
              {tasks.firstName} {tasks.lastName}
            </h2>
            <p>Email: {tasks.email}</p>
            <p>Phone: {tasks.phone}</p>
            <p>Address: {tasks.address}</p>
            <p>Course: {tasks.course}</p>
          </li>
        ))}
        </ul>
*/