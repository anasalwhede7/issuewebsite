import { AppBar, Button, IconButton, TextField } from "@mui/material";
import MyAppBar from "../component/appBar";
import SendIcon from '@mui/icons-material/Send';
import IssuesList from "../component/issuesList";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from "../component/List";
import CancelIcon from '@mui/icons-material/Cancel';



function HomePage() {
    const [searchQuery, setSearchQuery] = useState(''); 
    const [filteredIssues, setFilteredIssues] = useState([]); 

    const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/tasks");
        setTasks(response.data);
        setFilteredIssues(response.data)
      } catch (error) {
        console.error("Error fetching tasks:", error);
        alert("Error fetching tasks. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);   

    const handleSearch = () => {
        const allData = tasks;

        const filtered = allData.filter(task =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredIssues(filtered); 
    };

    function clearSearch()
    {
        setSearchQuery(""
        );
        setFilteredIssues(tasks);

    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" }}>
            <MyAppBar />

            <h1 className="text-cyan-800"> List to all the Common issues on Automation Anywhere</h1>
            <h1 className="text-cyan-800"> Search the issue here </h1>

            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <TextField
                    variant="standard"
                    size="medium"
                    placeholder="Enter Your Issue!"
                    sx={{ width: "500px" }}
                    value={searchQuery} // Bind input value to searchQuery state
                    onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                />
                <IconButton onClick={handleSearch}>
                    <SendIcon />
                </IconButton>
                {
                    tasks.length > filteredIssues.length && 
                    <IconButton onClick={clearSearch} color="error">
                    <CancelIcon />
                </IconButton>
                }
            </div>
            <List tasks={filteredIssues} />

            {/* <IssuesList tasks={filteredIssues} />  */}
            {/* Pass the filtered list to IssuesList component */}
        </div>
    );
}

export default HomePage;
