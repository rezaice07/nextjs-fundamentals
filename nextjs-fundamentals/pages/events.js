import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


const Events = ({ eventList }) => {

    console.log(eventList)
    const [events, setEvents] = useState(eventList);
    const router = useRouter();

    const fetchEventsByCategory = async (catetory) => {
        //const data =

        await axios.get(`http://localhost:4000/events?category=${catetory}`)
            .then(res => {
                //return res.data
                setEvents(res.data);
                router.push(`/events?category=${catetory}`, undefined, { shallow: true })
            });

        // const filteredEvents = {
        //     events: data
        // }

        //setEvents(filteredEvents.events);
    }

    return (
        <div>
            <button style={{ backgroundColor: 'pink' }} onClick={() => fetchEventsByCategory('music')}>Music Events</button>
            <hr />
            <h1>List of Event</h1>
            {
                events.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4> {item.id}. Name: {item.title} | Category: {item.category}</h4>
                        </div>
                    )
                })
            }

            <hr />
            <Link href="/" replace passHref>
                Back to Home
            </Link>
        </div>
    )
}

export default Events


export const getServerSideProps = async (context) => {
    const { query } = context;
    //console.log(query)
    const { category } = query;
    //console.log(category)
    const queryString = category && category != '' ? `category=${category}` : '';
    const data = await axios.get(`http://localhost:4000/events?${queryString}`)
        .then(res => {
            return res.data;
        });

    return {
        props: {
            eventList: data
        }
    }
}