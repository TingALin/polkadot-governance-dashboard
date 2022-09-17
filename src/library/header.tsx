
const Header = (props: any) => {
    const { content } = props;
    return (
        <div className="p-8 text-3xl flex items-center justify-center ">
            {content}
        </div>
    );
};

export default Header;