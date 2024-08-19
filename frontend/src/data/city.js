import React, {useState} from 'react';

const cityname = [

    { 
        tag: 'Jaipur',
        chefs: [
            {
                name: "Vijay Sharma",
                phone_number: 8529924676,
            },

            {
                name: "Mohammed Istekhar",
                phone_number: 9818106635,
            },

            {
                name: "Shital Nama",
                phone_number: 9468772820,
            },

            {
                name: "Praveen Singh Negi",
                phone_number: 9929192979,
            },

            {
                name: "Bharat Kumar",
                phone_number: 9928903361,
            },
        ],

        tag: 'Mumbai',
        chefs: [
            {
                name: "Tek Saud",
                phone_number: 9718852680,
            },

            {
                name: "Fariyad Ali",
                phone_number: 8850055313,
            },

            {
                name: "Sumit Paswan",
                phone_number: 7668362057,
            },

            {
                name: "Saheb Mallick",
                phone_number: 7977686147,
            },

            {
                name: "Dharmik Pandya",
                phone_number: 9558199369,
            },
        ],

        tag: 'Chennai',
        chefs: [
            {
                name: "Amit Sarkar",
                phone_number: 9093820396,
            },

            {
                name: "Manikandan",
                phone_number: 9600941738,
            },

            {
                name: "Padma",
                phone_number: 7448335391,
            },

            {
                name: "Monika",
                phone_number: 8939310206,
            },

            {
                name: "Jitendra Mahto",
                phone_number: 7210427233,
            },
        ],

        tag: 'Delhi',
        chefs: [
            {
                name: "Mahendra singh",
                phone_number: 8451095085,
            },

            {
                name: "Sudhir kumar",
                phone_number: 9452990325,
            },

            {
                name: "divyansh mishra",
                phone_number: 8130522357,
            },

            {
                name: "Gajendra singh pundi",
                phone_number: 9773719739,
            },

            {
                name: "Mahendra singh",
                phone_number: 8451095085,
            },
        ],

        tag: 'Bangalore',
        chefs: [
            {
                name: "Sudeep darnal",
                phone_number: 8016031792,
            },

            {
                name: "Pratik Jadhav",
                phone_number: 9664185541,
            },

            {
                name: "Sreekanth Radhakrishnan",
                phone_number: 9886367831,
            },

            {
                name: "Ankit Singh",
                phone_number: 8393942654,
            },

            {
                name: "Kingmari",
                phone_number: 8940213265,
            },
        ],

        tag: 'Hyderabad',
        chefs: [
            {
                name: "Buyya vamshi",
                phone_number: 9989827726,
            },

            {
                name: "Manikanta",
                phone_number: 9110345682,
            },

            {
                name: "John Reddy",
                phone_number: 7994081304,
            },

            {
                name: "Chetan",
                phone_number: 8919379577,
            },

            {
                name: "Saivamshi Challa",
                phone_number: 6303942002,
            },
        ],

        tag: 'Pune',
        chefs: [
            {
                name: "Prashant kamble",
                phone_number: 8007913907,
            },

            {
                name: "Shubham dattatray Padekar",
                phone_number: 9322306545,
            },

            {
                name: "Umesh pawar",
                phone_number: 9920993674,
            },

            {
                name: "RAJESH CHOURE",
                phone_number: 8308294645,
            },

            {
                name: "Aishwarya Kulkarni",
                phone_number: 9108740688,
            },
        ],

        tag: 'Kolkata',
        chefs: [
            {
                name: "SAYAN RAKSHIT",
                phone_number: 7980893552,
            },

            {
                name: "Rajkumar Ghosh",
                phone_number: 6295580793,
            },

            {
                name: "Anindita Sharma",
                phone_number: 8777496973,
            },

            {
                name: "Chandan shaw",
                phone_number: 8240449388,
            },

            {
                name: "Anil Kumar Sahu",
                phone_number: 8582870651,
            },
        ]
    }
    
]

const Citydata = () => {

    const [currentcity, setcurrentcity] = useState();
    const [chefs, setchefs] = useState();

    const citydetails = (value) => {
    setcurrentcity(value);
    const result = cityname.filter((chef) => chef.tag === value);
    setchefs(result[0].chefs);
    }

    return (
        <div className="citycard">
          {cityname.map((city, tag) => (
            <div className="chefcard" key={tag}>
              <h3>{chefs.name}</h3>
              <p>{chefs.phone_number}</p>
            </div>
          ))}
        </div>
    ); 
}

export default Citydata;