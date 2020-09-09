import React from "react";
import MediaDisplay from "./mediaDisplay";

const CreateAPOD = ({ data }) => {
    return(
        <>
            <h1>Astronomy Photo of the Day: {data.date}</h1>
            <div id='imgCont'>
                <MediaDisplay url={data.url} title={data.title} />
                <div id='imgText'>
                    <p>{`Credit & Copyright: ${data.copyright}`}</p>
                    <h2>{data.title}</h2>
                </div>
            </div>
            <p>
                {data.explanation}
            </p>
        </>
    )
}

export default CreateAPOD