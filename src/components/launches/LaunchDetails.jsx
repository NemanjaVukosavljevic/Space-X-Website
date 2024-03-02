import { useParams, useNavigate } from "react-router-dom"; 

const LaunchDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate()


    const handleGoBack = () => {
        navigate(-1);
    }

    return <>
        <div>
            <p>Launch Details for Launch ID: {id}</p>
            <button onClick={() => handleGoBack}>Back</button>
        </div>
    </>
};


export default LaunchDetails;