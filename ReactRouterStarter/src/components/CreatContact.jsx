import {useState} from "react";
import { useNavigate } from "react-router-dom";

function CreateContact () {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    async function addContact(event){
        event.preventDefault();
        await fetch("http://contactlist.us-east-1.elasticbeanstalk.com/contact", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                firstName:firstName,
                lastName:lastName,
                company:company,
                phone:phone.replace(/[^A-Za-z0-9]+/g,""),
                email:email,
            })
        });

        navigate("/");

    }



    return;
}

export default CreateContact;