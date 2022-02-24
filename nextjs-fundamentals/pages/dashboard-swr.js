import useSWR from 'swr';

const fetchDashboardData = async () => {    
    // const resData = await axios.get('http://localhost:4000/dashboard')
    //     .then(res => {
    //         console.log(res.data);
    //         return res.data
    //     });

    const resData = await fetch('http://localhost:4000/dashboard');       

    const data = resData.json();

    return data;
}

const DashboardSWR = () => {      

    const { data, error } = useSWR('dashboard',  fetchDashboardData)

    if (error) {
        return <h1>An Error Occurred</h1>
    }

    if (!data) {
        return <h1>Dashboard Data Not found.</h1>
    }

    return (
        <div>
            <h1>Dashbaord</h1>
            <h4>Post {data.posts}</h4>
            <h4>Likes {data.likes}</h4>
            <h4>Followers {data.followers}</h4>
            <h4>Following {data.following}</h4>

        </div>
    )
}

export default DashboardSWR