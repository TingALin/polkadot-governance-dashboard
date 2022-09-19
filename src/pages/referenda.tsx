import Header from "../library/header";

const Referenda = (props: any) => {
    const { page } = props;
    const { title } = page;
    return (
        <Header content={title} />
    );
};

export default Referenda;