import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        fetchDashboardData();
    },[]) //this [] depending on component mount

    const fetchDashboardData = async () => {
        await axios.get('http://localhost:4000/dashboard')
                    .then(res => {
                        setDashboardData(res.data);
                        setIsLoading(false);
                    })

    }

    if(isLoading){
        return <h1>Loading......</h1>
    }

    return (
        <div>
            <h1>Dashbaord</h1>
            <h4>Post {dashboardData.posts}</h4>
            <h4>Likes {dashboardData.likes}</h4>
            <h4>Followers {dashboardData.followers}</h4>
            <h4>Following {dashboardData.following}</h4>
            
        </div>
    )
}

export default Dashboard