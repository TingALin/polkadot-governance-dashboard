import Header from "../library/header";

const Treasury = (props: any) => {
    const { page } = props;
    const { title } = page;
    return (
        <Header content={title} />
    )
};

export default Treasury;