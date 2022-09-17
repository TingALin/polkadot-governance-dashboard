
const PageButtons = (props: any) => {
    const { icon, onClick } = props;
    return (
        < >
            <button onClick={onClick} className="rounded-full px-7 py-1 outline outline-pink-500 hover:bg-pink-500">
                {icon}
            </button>
        </>
    );
};

export default PageButtons;