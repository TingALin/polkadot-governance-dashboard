import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Item = (props: any) => {

    const { name, to } = props;

    return (
        <Link to={to}>
            <div className='bg-[rgba(0,0,0,0.03)] hover:bg-[rgba(0,0,0,0.05)] duration-200 flex flex-row flex-wrap justify-start items-center p-1.5 my-1.5 mx-0 text-base' >
                <span className='mr-3' >
                    <FontAwesomeIcon icon={faCoffee} transform='shrink-2' />
                </span>
                {name}
            </div>
        </Link>
    )

}

export default Item;