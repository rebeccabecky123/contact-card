
import  React from 'react';


interface ContactCardProps {
  name: string;
  email: string;
  phone?: string; 
}

function ContactCard({ name, email, phone }: ContactCardProps) {
  return (
    <div className=" flex flex-col gap-2 justify-center items-center min-h-screen p-4 border    ">
      <div className="   rounded shadow  bg-yellow-200 px-6 py-20">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700">Email: {email}</p>
      {phone && <p className="text-gray-700">Phone: {phone}</p>}
      </div>
      
    </div>
  );
}

export default ContactCard;
