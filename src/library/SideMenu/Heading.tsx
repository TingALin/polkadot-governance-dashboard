import React from "react";

const Heading = (props: any) => {

    const { title } = props;

    return (
        <div className='mt-3 mx-0 mb-1 text-sm py-0 px-2 flex flex-row flex-wrap justify-start items-center opacity-60 '>
            {title}
        </div>
    )
}

export default Heading;