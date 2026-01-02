import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ChevronLeft, ChevronRight} from "lucide-react";

const Events =() =>{
    const[currentPage, setCurrentPage]= useState(2);
    const [sortBy, setSortBy]=useState('Latest');

    const eventsData=[
        {
           id: 1,
        day: 'TUE',
         date: '2',
         title: 'The UN General Assembly had passed the motion in 1981 to mark the International Day.....',
         month: 'Baisakh, 2021',
         link: '#'
        },
        {
            id:2,
            day:'WED',
            date:'2',
            titile:'The Un general......',
            month:'Baisakh, 2025',
            link:'#'
        },
        {
            id:3,
            day:'THU',
            date:'2',
            title:'The Un general....',
            month:'BAisakh 2025',
            link:'#'

        },
        {
            id:4,
            day:'FRI',
            date:'3',
            title:"The world health department issues ....",
            month:"Baisakh 2025",
            link:'#'
        },
        {
            
        }
    ]
    
}

export default Events;