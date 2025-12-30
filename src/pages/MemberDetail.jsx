import React from 'react'
import {useParams,Link ,useNavigate } from 'react-router-dom'
import {ArrowLeft, Facebook, Instagram , MapPin , Phone, Mail} from 'lucide-react'


const MemberDetail =() => {
    const {id} = useParams();
    const navigate=useNavigate();

    const membersData ={
     1:{
        id:1,
        restaurantName: "The Wings Factory",
        address:"Mid-baneshwor, Kathmandu",
        phone:"98526341525",
        email:"restuarant@gmail.com",
        owner:"Rupesh Niraula",
        location:"Kathmandu",
        logo:"/api/placeholder/200/200",
        coverImage:"/api/placeholder/1400/1400",
        about:"bla bla bla......",
        socialMedia: {
            facebook:"https://facebook.com",
            instagram:"https://instagram.com"

        }
     }
    };

    const member =membersData[id];

    if (!member) {
        return(
            <div className="min-h-screen flex items-center justify-center">
               <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                 Member not found
                </h2>
                <Link to="/members" className="text-green-600 hover:text-green-700">
                  BAck to Members
                </Link>
                </div> 
            </div>
        )
    }

    return (
        <div className ="min-h-screen bg-white">
            <div className = "container  mx-auto px-4 py-6">

                <button onClick={() => navigate('/members')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition">
                    <ArrowLeft size={20}></ArrowLeft>
                    <span className='font-medium'>Back</span>
                </button>
              </div>

              {/* Cover Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={member.coverImage}
          alt={`${member.restaurantName} cover`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Restaurant Header */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-24 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
            {/* Logo */}
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <img
                src={member.logo}
                alt={`${member.restaurantName} logo`}
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>

            {/* Restaurant Info */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {member.restaurantName}
                  </h1>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin size={18} />
                    {member.address}
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-3">
                  <a
                    href={member.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={member.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       </div>         
                
              
       
        
        
    )

}

export default MemberDetail
